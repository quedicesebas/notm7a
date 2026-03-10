'use server';
/**
 * @fileOverview Un flujo de Genkit para generar un resumen conciso de 'Quiénes Somos' para el Comité Ciudadano Defendamos la Séptima.
 *
 * - generateCommitteeSummary - Una función que maneja el proceso de generación del resumen.
 * - GenerateCommitteeSummaryInput - El tipo de entrada para la función generateCommitteeSummary.
 * - GenerateCommitteeSummaryOutput - El tipo de salida para la función generateCommitteeSummary.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateCommitteeSummaryInputSchema = z.object({
  committeeMaterials: z
    .array(z.string())
    .describe('Un arreglo de contenidos de texto, como declaraciones de misión, objetivos y publicaciones en redes sociales, para ser resumidos.'),
});
export type GenerateCommitteeSummaryInput = z.infer<typeof GenerateCommitteeSummaryInputSchema>;

const GenerateCommitteeSummaryOutputSchema = z.object({
  summary: z.string().describe("Un resumen conciso de 'Quiénes Somos' para el sitio web del comité."),
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
  prompt: `Eres un asistente de IA encargado de crear un resumen conciso y atractivo de la sección 'Quiénes Somos' para el sitio web "Defendamos la Séptima - Comité Ciudadano".

Tu objetivo es articular claramente la misión, los objetivos y las actividades clave del comité basándote en los materiales proporcionados.

Combina la siguiente información en un único resumen convincente adecuado para la sección 'Quiénes Somos' de un sitio web. Enfócate en la claridad, la concisión y el impacto. El resumen no debe exceder las 200 palabras.

Materiales del Comité:
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
