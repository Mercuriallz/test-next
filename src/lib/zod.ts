// schema.ts
import { z } from 'zod';

export const InsertTitleSchema = z.object({
    userId: z.preprocess((val) => Number(val), z.number().int().nonnegative()),
    id: z.preprocess((val) => Number(val), z.number().int().nonnegative()),
    title: z.string(),
    body: z.string(),
});

export type InsertTitle = z.infer<typeof InsertTitleSchema>;
