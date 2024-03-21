import * as z from "zod";

export const planFormSchema = z.object({
  plan: z.boolean(),
  subscription: z.string(),
});
