'use server';
/**
 * @fileOverview A flow for generating text embeddings.
 *
 * - generateTextEmbedding - A function that generates a vector embedding for a given text.
 */
import {ai} from '@/ai/genkit';
import {googleAI} from '@genkit-ai/google-genai';
import {z} from 'zod';

const EmbeddingInputSchema = z.string();
const EmbeddingOutputSchema = z.array(z.number());

export async function generateTextEmbedding(
  text: z.infer<typeof EmbeddingInputSchema>
): Promise<z.infer<typeof EmbeddingOutputSchema>> {
  return embeddingFlow(text);
}

const embeddingFlow = ai.defineFlow(
  {
    name: 'embeddingFlow',
    inputSchema: EmbeddingInputSchema,
    outputSchema: EmbeddingOutputSchema,
  },
  async text => {
    const [{embedding}] = await ai.embed({
      embedder: googleAI.embedder('text-embedding-004'),
      content: text,
    });
    return embedding;
  }
);
