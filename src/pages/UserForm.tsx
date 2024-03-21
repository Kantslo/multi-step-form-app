import { useEffect } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import SidebarMobile from "../components/SidebarMobile";
import { userFormSchema } from "../schemas/user-form-schema";
import { useFormStore } from "../store/form-store";

type TUser = {
  name: string;
  email: string;
  phone: string;
};

const UserForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TUser>({
    resolver: zodResolver(userFormSchema),
  });
  const { setForm } = useFormStore();

  const onSubmit = async (data: TUser) => {
    const { name, email, phone } = data;
    let formData = {
      name,
      email,
      phone: Number(phone),
    };

    const savedData = localStorage.getItem("multi-step-form");

    if (savedData) {
      const parsedData = JSON.parse(savedData);
      formData = { ...parsedData, ...formData };
    }

    console.log(formData);
    setForm(formData);
    localStorage.setItem("multi-step-form", JSON.stringify(formData));
  };

  useEffect(() => {
    const savedData = localStorage.getItem("multi-step-form");

    if (savedData) {
      const { name, email, phone } = JSON.parse(savedData);

      setValue("name", name);
      setValue("email", email);
      setValue("phone", phone);
    }
  }, []);

  return (
    <>
      <SidebarMobile />
      <section className="flex flex-col font-ubuntu bg-white px-6 py-8 max-w-[21.44rem] rounded-[0.625rem] mx-auto mb-6 -mt-[4.375rem]">
        <div className="flex flex-col">
          <h2 className="text-[24px] text-[#022959] font-bold">
            Personal info
          </h2>
          <p className="text-[#9699AA] leading-[1.56rem] text-[1rem]">
            Please provide your name, email address, and phone number.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 mt-[1.375rem]">
          <div className="flex flex-col">
            <label className="text-[12px] text-[#022959]" htmlFor="name">
              Name
            </label>
            <input
              className="placeholder:text-[#9699AA] placeholder:font-medium placeholder:text-[15px] border border-[#D6D9E6] rounded-[4px] bg-white px-4 py-[11px]"
              placeholder="e.g. Stephen King"
              autoFocus
              type="text"
              id="name"
              {...register("name")}
            />
            <p className="text-xs text-red-500">{errors.name?.message}</p>
          </div>
          <div className="flex flex-col">
            <label className="text-[12px] text-[#022959]" htmlFor="email">
              Email address
            </label>
            <input
              className="placeholder:text-[#9699AA] placeholder:font-medium placeholder:text-[15px] border border-[#D6D9E6] rounded-[4px] bg-white px-4 py-[11px]"
              placeholder="e.g. stephenking@lorem.com"
              type="text"
              id="email"
              {...register("email")}
            />
            <p className="text-xs text-red-500">{errors.email?.message}</p>
          </div>
          <div className="flex flex-col items">
            <label className="text-[12px] text-[#022959]" htmlFor="phone">
              Phone
            </label>
            <input
              className="placeholder:text-[#9699AA] placeholder:font-medium placeholder:text-[15px] border border-[#D6D9E6] rounded-[4px] bg-white px-4 py-[11px]"
              placeholder="e.g. +1 234 567 890"
              type="tel"
              id="phone"
              {...register("phone")}
            />
            <p className="text-xs text-red-500">{errors.phone?.message}</p>
          </div>
          <button type="submit"></button>
        </form>
      </section>
    </>
  );
};

export default UserForm;
