import { z } from "zod";

export const paginationSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),

  limit: z.coerce.number().int().min(1).max(100).default(10),
});

export const searchSchema = z.object({
  search: z.string().trim().optional(),
});

export type PaginationInput = z.infer<typeof paginationSchema>;

export type SearchInput = z.infer<typeof searchSchema>;
