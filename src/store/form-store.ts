import { create } from "zustand";

type FormType = {
  name: string;
  email: string;
  phone: number | null;
  plan: string | null;
  billing: string | null;
  addons: string | null;
};

const form: FormType = {
  name: "",
  email: "",
  phone: null,
  plan: null,
  billing: null,
  addons: null,
};

type Store = {
  form: FormType;
  setForm: (form: Partial<FormType>) => void;
};

export const useFormStore = create<Store>((set) => ({
  form: form,
  setForm: (form: Partial<FormType>) =>
    set((state: any) => ({ form: { ...state.form, ...form } })),
  getStorage: () => localStorage,
}));
