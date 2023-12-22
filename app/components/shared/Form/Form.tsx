import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Label from "./Label";
import Input from "./Input";
import Checkbox from "./Checkbox";

const Form = () => {
  return (
    <form className="flex flex-col items-start justify-start">
      <Label text="FullName">
        <Input />
      </Label>
      <Label text="E-mail">
        <Input />
      </Label>
      <Label text="Position">
        <Input />
      </Label>
      <Label text="FullName">
        <Input />
      </Label>
      <Label
        customClass="flex flex-row-reverse"
        text="I confirm my consent to the processing of personal data."
      >
        <Checkbox name="pollicy" value="" />
      </Label>
    </form>
  );
};

export default Form;

// import { useForm, SubmitHandler } from "react-hook-form";

// interface FormData {
//   fullName: string;
//   email: string;
//   position: string;
//   phone: string;
//   message: string;
//   agree: boolean;
// }

// const Form: React.FC = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormData>();

//   const onSubmit: SubmitHandler<FormData> = (data) => {
//     console.log(data);

//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div>
//         <label>Full Name</label>
//         <input
//           {...register("fullName", { required: "Full Name is required" })}
//         />
//         <div>{errors.fullName && <span>{errors.fullName.message}</span>}</div>
//       </div>

//       <div>
//         <label>Email</label>
//         <input
//           {...register("email", {
//             required: "Email is required",
//             pattern: {
//               value: /\S+@\S+\.\S+/,
//               message: "Invalid email address",
//             },
//           })}
//         />
//         <div>{errors.email && <span>{errors.email.message}</span>}</div>
//       </div>

//       <div>
//         <label>Position</label>
//         <input
//           {...register("position", { required: "Position is required" })}
//         />
//         <div>{errors.position && <span>{errors.position.message}</span>}</div>
//       </div>

//       <div>
//         <label>Phone</label>
//         <input {...register("phone", { required: "Phone is required" })} />
//         <div>{errors.phone && <span>{errors.phone.message}</span>}</div>
//       </div>

//       <div>
//         <label>Message</label>
//         <textarea
//           {...register("message", { required: "Message is required" })}
//         />
//         <div>{errors.message && <span>{errors.message.message}</span>}</div>
//       </div>

//       <div>
//         <input
//           type="checkbox"
//           {...register("agree", { required: "You must agree to the terms" })}
//         />
//         <label>Agree to terms</label>
//         <div>{errors.agree && <span>{errors.agree.message}</span>}</div>
//       </div>

//       <div>
//         <button type="submit">Submit</button>
//       </div>
//     </form>
//   );
// };

// export default Form;
