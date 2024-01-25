import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { userFormSchema } from "../schemas/user-form-schema";
import { useEffect, useState } from "react";

type UserFormType = {
  name: string;
  email: string;
  phone: string;
};

const UserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<UserFormType>({
    resolver: zodResolver(userFormSchema),
    defaultValues: JSON.parse(localStorage.getItem("userFormData") || "{}"),
  });

  const [formValues, setFormValues] = useState<UserFormType>(getValues());

  useEffect(() => {
    localStorage.setItem("userFormData", JSON.stringify(formValues));
  }, [formValues]);

  const onSubmit = (data: UserFormType) => {
      localStorage.setItem("userFormData", JSON.stringify(data));
  };

  const handleChange = () => {
    setFormValues(getValues());
  };

  return (
    <>
      <div>
        <h2>Personal info</h2>
        <p>Please provide your name, email address, and phone number.</p>
      </div>
      <form onClick={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            autoFocus
            type="text"
            id="name"
            {...register("name")}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="text"
            id="email"
            {...register("email")}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            {...register("phone")}
            onChange={handleChange}
          />
          {errors.phone && <p>{errors.phone.message}</p>}
        </div>
      </form>
    </>
  );
};

export default UserForm;
