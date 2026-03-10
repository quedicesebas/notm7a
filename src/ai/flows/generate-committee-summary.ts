'use server';
/**
 * @fileOverview A Genkit flow for generating a concise 'About Us' summary for the Defendamos la Séptima - Comité Ciudadano.
 *
 * - generateCommitteeSummary - A function that handles the summary generation process.
 * - GenerateCommitteeSummaryInput - The input type for the generateCommitteeSummary function.
 * - GenerateCommitteeSummaryOutput - The return type for the generateCommitteeSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateCommitteeSummaryInputSchema = z.object({
  committeeMaterials: z
    .array(z.string())
    .describe('An array of text content, such as mission statements, objectives, and social media posts, to be summarized.'),
});
export type GenerateCommitteeSummaryInput = z.infer<typeof GenerateCommitteeSummaryInputSchema>;

const GenerateCommitteeSummaryOutputSchema = z.object({
  summary: z.string().describe("A concise 'About Us' summary for the committee's website."),
});
export type GenerateCommitteeSummaryOutput = z.infer<typeof GenerateCommitteeSummaryOutputSchema>;

export async function generateCommitteeSummary(
  input: GenerateCommitteeSummaryInput
): Promise<GenerateCommitteeSummaryOutput> {
  return generateCommitteeSummaryFlow(input);
}

const generateCommitteeSummaryPrompt = ai.definePrompt({
  name: 'generateCommitteeSummaryPrompt',
  input: {schema: GenerateCommitteeSummaryInputSchema},
  output: {schema: GenerateCommitteeSummaryOutputSchema},
  prompt: `You are an AI assistant tasked with creating a concise and engaging 'About Us' summary for the "Defendamos la Séptima - Comité Ciudadano" website.

Your goal is to clearly articulate the committee's mission, objectives, and key activities based on the provided materials.

Combine the following information into a single, compelling summary suitable for a website's 'About Us' section. Focus on clarity, conciseness, and impact. The summary should be no more than 200 words.

Committee Materials:
{{#each committeeMaterials}}
- {{{this}}}
{{/each}}`,
});

const generateCommitteeSummaryFlow = ai.defineFlow(
  {
    name: 'generateCommitteeSummaryFlow',
    inputSchema: GenerateCommitteeSummaryInputSchema,
    outputSchema: GenerateCommitteeSummaryOutputSchema,
  },
  async input => {
    const {output} = await generateCommitteeSummaryPrompt(input);
    return output!;
  }
);
