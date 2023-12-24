"use client";

import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import Label from "./Label";
import Button from "../Button";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  policy: boolean;
  message: string;
};

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm<FormData>();

  const submitHandler = (data: FieldValues) => {
    console.log(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex flex-col items-start justify-start"
    >
      <Label text="FullName">
        <input
          placeholder="John Smith"
          className="text-accent-500 tm:text-[13px] text-[20px] leading-[24px] tracking-[1.8px] font-extralight bg-[#FFFFFF0D] text-justify"
          {...register("fullName", {
            required: "Name is required",
          })}
        />
        {errors.fullName && (
          <p className="text-error-500">{`${errors.fullName.message}`}</p>
        )}
      </Label>
      <Label text="E-mail">
        <input
          placeholder="johnsmith@email.com"
          className="text-accent-500 tm:text-[13px] text-[20px] leading-[24px] tracking-[1.8px] font-extralight bg-[#FFFFFF0D] text-justify"
          type="email"
          {...register("email", {
            required: "Email is required",
          })}
        />
        {errors.email && (
          <p className="text-error-500">{`${errors.email.message}`}</p>
        )}
      </Label>
      <Label text="Position">
        <input
          placeholder="Movie maker"
          className="text-accent-500 tm:text-[13px] text-[20px] leading-[24px] tracking-[1.8px] font-extralight bg-[#FFFFFF0D] text-justify"
          {...register("position", {
            required: "Position is required",
          })}
        />
        {errors.position && (
          <p className="text-error-500">{`${errors.position.message}`}</p>
        )}
      </Label>
      <Label text="Phone">
        <input
          placeholder="+ 38 (097) 12 34 567"
          className="text-accent-500 tm:text-[13px] text-[20px] leading-[24px] tracking-[1.8px] font-extralight bg-[#FFFFFF0D] text-justify"
          {...register("phone", {
            required: "Phone is required",
          })}
        />
        {errors.position && (
          <p className="text-error-500">{`${errors?.phone?.message}`}</p>
        )}
      </Label>

      <Label text="Message">
        <textarea
          className="text-accent-500 tm:text-[13px] text-[20px] leading-[24px] tracking-[1.8px] font-extralight bg-[#FFFFFF0D] 
          text-justify min-w-[279px] min-h-[196px] resize-none"
          {...register("message", {})}
        />
        {errors.message && (
          <p className="text-error-500">{`${errors?.message?.message}`}</p>
        )}
      </Label>
      <label className="text-accent-500 text-xs leading-[24px] font-extralight tracking-default gap-2 min-w-[280px] flex flex-row-reverse">
        I confirm my consent to the processing of personal data.
        <input
          type="checkbox"
          {...register("policy", {
            required: "Policy is required",
          })}
        />
        {errors.policy && (
          <p className="text-error-500">{`${errors.policy.message}`}</p>
        )}
      </label>

      <Button disabled={isSubmitting} customStyles="self-end" text="SEND" />
    </form>
  );
};

export default Form;
