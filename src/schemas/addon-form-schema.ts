import * as z from "zod";

export const addonFormSchema = z.object({
  addons: z.boolean(),
});
