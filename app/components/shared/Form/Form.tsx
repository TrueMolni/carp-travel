"use client";

import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import Notiflix from "notiflix";
import { RxCross1 } from "react-icons/rx";
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

    // Викликати функцію submitHandler, якщо чекбокс відмічений
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
      <div className="tablet:flex tablet:gap-5">
        <div className="mm:min-w-[280px] tablet:min-w-[222px] tablet:gap-4 tablet:flex tablet:flex-column">
          <Label text="FullName">
            <input
              placeholder="John Smith"
              className="text-accent-500 tm:text-[13px] text-[20px] leading-[24px] tracking-[1.8px] font-extralight bg-[#FFFFFF0D] text-justify"
              {...register("fullName", {
                required: "Name is required",
              })}
            />
            {errors.fullName && (
              <div className="text-[12px] font-extralight leading-6 tracking-[2.4px] flex text-error-500 items-center justify-end gap-1 mb-[-16px]">
                <RxCross1 />
                <p> {`${errors.fullName.message}`}</p>
              </div>
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
              <div className="text-[12px] font-extralight leading-6 tracking-[2.4px] flex text-error-500 items-center justify-end gap-1 mb-[-16px]">
                <RxCross1 />
                <p className="text-error-500">{`${errors.email.message}`}</p>
              </div>
            )}
          </Label>
          <Label text="Position">
            <input
              placeholder="Movie maker"
              className="text-accent-500 tm:text-[13px] text-[20px] 
          leading-[24px] tracking-[1.8px] font-extralight 
          bg-[#FFFFFF0D] text-justify "
              {...register("position", {
                required: "Position is required",
              })}
            />
            {errors.position && (
              <div className="text-[12px] font-extralight leading-6 tracking-[2.4px] flex text-error-500 items-center justify-end gap-1 mb-[-16px]">
                <RxCross1 />
                <p className="text-error-500">{`${errors.position.message}`}</p>
              </div>
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
              <div className="text-[12px] font-extralight leading-6 tracking-[2.4px] flex text-error-500 items-center justify-end gap-1 mb-[-16px]">
                <RxCross1 />
                <p className="text-error-500">{`${errors?.phone?.message}`}</p>
              </div>
            )}
          </Label>
        </div>

        <Label text="Message">
          <textarea
            className="text-accent-500 tm:text-[13px] text-[20px] leading-[24px] tracking-[1.8px] font-extralight bg-[#FFFFFF0D] 
          text-justify min-w-[279px] min-h-[196px] resize-none"
            {...register("message", {})}
          />
          {errors.message && (
            <div className="text-[12px] font-extralight leading-6 tracking-[2.4px] flex text-error-500 items-center justify-end gap-1 mb-[-16px]">
              <RxCross1 />
              <p className="text-error-500">{`${errors?.message?.message}`}</p>
            </div>
          )}
        </Label>
      </div>
      <label className="text-accent-500 text-xs leading-[24px] font-extralight tracking-default gap-2 min-w-[280px] flex flex-row-reverse">
        I confirm my consent to the processing of personal data.
        <input
          type="checkbox"
          {...register("policy", {
            required: "Policy is required",
          })}
        />
        {/* {errors.policy && (
          <div className="text-[12px] font-extralight leading-6 tracking-[2.4px] flex text-error-500 items-center justify-end gap-1">
            <RxCross1 />
            <p className="text-error-500">{`${errors.policy.message}`}</p>
          </div>
        )} */}
      </label>

      <Button disabled={isSubmitting} customStyles="self-end" text="SEND" />
    </form>
  );
};

export default Form;
