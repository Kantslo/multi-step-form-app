import * as z from 'zod';

export const userFormSchema = z.object({
  name: z.string().min(1, {message: 'Name is required'}),
  email: z.string().email(),
  phone: z.string().min(6).max(15),
});
