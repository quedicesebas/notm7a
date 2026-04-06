"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { FUNDRAISING_METRICS } from "@/lib/constants";
import { getFundraisingData, getDonationUrl } from "@/lib/fundraising";

interface FundraisingContextType {
  currentAmount: number;
  activeVacaIndex: number;
  donationUrl: string;
  isLoading: boolean;
}

const FundraisingContext = createContext<FundraisingContextType | undefined>(undefined);

export function FundraisingProvider({ children }: { children: React.ReactNode }) {
  const [currentAmount, setCurrentAmount] = useState(1101000);
  const [activeVacaIndex, setActiveVacaIndex] = useState(2);
  const [donationUrl, setDonationUrl] = useState(getDonationUrl(FUNDRAISING_METRICS.IDS[1]));
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    
    async function loadData() {
      try {
        const data = await getFundraisingData(FUNDRAISING_METRICS.IDS);
        if (isMounted && data.totalAmount > 0) {
          setCurrentAmount(data.totalAmount);
          setActiveVacaIndex(data.activeVacaIndex);
          if (data.activeVaca) {
            setDonationUrl(getDonationUrl(data.activeVaca.cow_event_id));
          }
        }
      } catch (error) {
        console.error("Error fetching fundraising data:", error);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    loadData();
    return () => { isMounted = false; };
  }, []);

  return (
    <FundraisingContext.Provider value={{ currentAmount, activeVacaIndex, donationUrl, isLoading }}>
      {children}
    </FundraisingContext.Provider>
  );
}

export function useFundraisingContext() {
  const context = useContext(FundraisingContext);
  if (context === undefined) {
    throw new Error("useFundraisingContext must be used within a FundraisingProvider");
  }
  return context;
}
