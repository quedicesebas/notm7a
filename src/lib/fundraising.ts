/**
 * Utility to fetch and aggregate fundraising data from 'Arma tu Vaca' API.
 */

export interface VacaResponse {
  total_value: number;
  cow_event_id: string;
  name: string;
  closed: boolean;
}

/**
 * Fetches data for a single vaca ID.
 */
export async function fetchVacaData(id: string): Promise<VacaResponse | null> {
  try {
    const response = await fetch(`https://armatuvaca.com/api/1.0/cw/cow-public/${id}`, {
      next: { revalidate: 3600 } // Cache for 1 hour if using Next.js fetch
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch vaca ${id}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error fetching vaca ${id}:`, error);
    return null;
  }
}

/**
 * Fetches data for multiple vacas and identifies the first open one (active).
 */
export async function getFundraisingData(ids: string[]): Promise<{
  totalAmount: number;
  activeVaca: VacaResponse | null;
  activeVacaIndex: number;
}> {
  const responses = await Promise.all(ids.map(id => fetchVacaData(id)));
  
  const totalAmount = responses.reduce((acc, curr) => acc + (curr?.total_value || 0), 0);
  
  // Find first one that is NOT closed (in order)
  const activeVacaIndex = responses.findIndex(r => r && !r.closed);
  const activeVaca = activeVacaIndex !== -1 ? responses[activeVacaIndex] : null;
  
  return {
    totalAmount,
    activeVaca,
    activeVacaIndex: activeVacaIndex !== -1 ? activeVacaIndex + 1 : ids.length // Default to last if all closed
  };
}

/**
 * Helper to get the canonical donation URL for a vaca.
 */
export function getDonationUrl(id: string): string {
  return `https://armatuvaca.com/vaca/${id}`;
}

/**
 * Formats a currency value to a human-readable "Million" format (e.g., 1,100,000 -> 1.1 M).
 */
export function formatToMillions(value: number): string {
  const millions = value / 1000000;
  // If it's an integer, don't show decimals
  if (millions % 1 === 0) {
    return `${millions} Millones`;
  }
  // Otherwise show 1 decimal place
  return `${millions.toFixed(2)} Millones`;
}
