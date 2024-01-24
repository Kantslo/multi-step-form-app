import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { userFormSchema } from "../schemas/user-form-schema";
import axios from "axios";

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
  } = useForm<UserFormType>({
    resolver: zodResolver(userFormSchema)
  });

  const submit = async (data: UserFormType) => {
    try {
      const response = await axios.post("https://multi-step-form-api-production.up.railway.app/api/form", data)

      console.log(response);
    } catch (error) {
      return error;
    }
  }

  return (
    <>
      <form onClick={handleSubmit(submit)}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" {...register("name")} />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email">Email address</label>
          <input type="text" id="email" {...register("email")} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input type="text" id="phone" {...register("phone")} />
          {errors.phone && <p>{errors.phone.message}</p>}
        </div>
      </form>
    </>
  )
};

export default UserForm;