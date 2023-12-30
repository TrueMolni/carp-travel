"use client";

import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import Notiflix from "notiflix";
import { RxCross1 } from "react-icons/rx";
import Label from "./Label";
import SubmitBtn from "../submitBtn";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  policy: boolean;
  message: string;
};

//  Notiflix.Notify.success(
//    `You have ${watchedArr.length} films in your library "${keyName}"!`
//  );

const Form = () => {
  if (process.browser) {
    Notiflix.Notify.init({
      position: "right-top",
      distance: "5px",
      clickToClose: true,
      timeout: 2500,
    });
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
    watch,
  } = useForm<FormData>();

  const policyChecked = watch("policy");

  const submitHandler = (data: FieldValues) => {
    Notiflix.Notify.success(`here is your data!`);
    console.log(data);
    reset();
  };

  const handleFormSubmit = () => {
    // Перевірка чекбокса "policy"
    if (!policyChecked) {
      Notiflix.Notify.failure(
        "You must agree to the processing of personal data"
      );
      return;
    }

    handleSubmit(submitHandler)();
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault(); // Уникнути автоматичної відправки форми
        handleFormSubmit();
      }}
      className="flex flex-col items-start justify-start gap-4"
    >
      <div className="tablet:flex desk:flex tablet:gap-5 desk:gap-6">
        <div className="mm:min-w-[280px] tablet:min-w-[222px] desk:min-w-[292px] tablet:gap-4 desk:gap-[24px] flex flex-col">
          <Label text="Full Name">
            <input
              placeholder="John Smith"
              className="text-accent-500 px-2 desk:py-[2px] tm:text-[13px] text-[20px] leading-[24px] tablet:leading-[22px] tracking-[1.8px] font-extralight bg-[#FFFFFF0D] text-justify"
              {...register("fullName", {
                required: "Name is required",
              })}
            />
            {errors.fullName && (
              <div className="text-[12px] font-extralight leading-6 tracking-[2.4px] flex text-error-500 items-center justify-end gap-1 mb-[-16px] desk:mb[-24px]">
                <RxCross1 />
                <p> {`${errors.fullName.message}`}</p>
              </div>
            )}
          </Label>
          <Label text="E-mail">
            <input
              placeholder="johnsmith@email.com"
              className="text-accent-500 px-2 desk:py-[2px] tm:text-[13px] text-[20px] leading-[24px] tablet:leading-[22px] tracking-[1.8px] font-extralight bg-[#FFFFFF0D] text-justify"
              type="email"
              {...register("email", {
                required: "Email is required",
              })}
            />
            {errors.email && (
              <div className="text-[12px] font-extralight leading-6 tracking-[2.4px] flex text-error-500 items-center justify-end gap-1 mb-[-16px] desk:mb[-24px]">
                <RxCross1 />
                <p className="text-error-500">{`${errors.email.message}`}</p>
              </div>
            )}
          </Label>
          <Label text="Position">
            <input
              placeholder="Movie maker"
              className="text-accent-500 px-2 desk:py-[2px] tm:text-[13px] text-[20px] 
          leading-[24px] tablet:leading-[22px] tracking-[1.8px] font-extralight 
          bg-[#FFFFFF0D] text-justify "
              {...register("position", {
                required: "Position is required",
              })}
            />
            {errors.position && (
              <div className="text-[12px] font-extralight leading-6 tracking-[2.4px] flex text-error-500 items-center justify-end gap-1 mb-[-16px] desk:mb[-24px]">
                <RxCross1 />
                <p className="text-error-500">{`${errors.position.message}`}</p>
              </div>
            )}
          </Label>
          <Label text="Phone">
            <input
              placeholder="+ 38 (097) 12 34 567"
              className="text-accent-500 px-2 desk:py-[2px] tm:text-[13px] text-[20px] leading-[24px] tablet:leading-[22px] tracking-[1.8px] font-extralight bg-[#FFFFFF0D] text-justify"
              {...register("phone", {
                required: "Phone is required",
              })}
            />
            {errors.position && (
              <div className="text-[12px] font-extralight leading-6 tracking-[2.4px] flex text-error-500 items-center justify-end gap-1 mb-[-16px] desk:mb[-24px]">
                <RxCross1 />
                <p className="text-error-500">{`${errors?.phone?.message}`}</p>
              </div>
            )}
          </Label>
          <label className="text-accent-500 text-xs leading-[22px] tablet:leading-[22px] font-extralight gap-2 mm:min-w-[280px] tablet:w-[222px] flex flex-row-reverse">
            I confirm my consent to the processing of personal data.
            <input
              type="checkbox"
              {...register("policy", {
                required: "Policy is required",
              })}
            />
          </label>
        </div>
        <div className="flex flex-col justify-between">
          <Label text="Message">
            <textarea
              className="text-accent-500 px-2 desk:py-[2px] tm:text-[13px] text-[20px] leading-[24px] tablet:leading-[22px] tracking-[1.8px] font-extralight bg-[#FFFFFF0D] 
          text-justify min-w-[279px] min-h-[196px] resize-none"
              {...register("message", {})}
            />
            {errors.message && (
              <div className="text-[12px] font-extralight leading-6 tracking-[2.4px] flex text-error-500 items-center justify-end gap-1 mb-[-16px] desk:mb[-24px]">
                <RxCross1 />
                <p className="text-error-500">{`${errors?.message?.message}`}</p>
              </div>
            )}
          </Label>

          <SubmitBtn
            disabled={isSubmitting}
            customStyles="self-end"
            text="SEND"
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
