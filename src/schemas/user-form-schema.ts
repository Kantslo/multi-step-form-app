import * as z from 'zod';

export const userFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string().min(6).max(15),
});
