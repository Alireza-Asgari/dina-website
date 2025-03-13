import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect } from "react";
import { HelpdeskDemo } from "@/app/lib/actions"; // آدرس مناسب فایل خود را وارد کنید

interface IFormInput {
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  position: string;
  descriptions?: string;
}

export default function Form({ changeStatus }) {
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const response = await HelpdeskDemo(data);
    if (response.error) {
      changeStatus("error");
    } else {
      changeStatus("success");
    }
  };

  useEffect(() => {
    const handleBlur = (event: Event) => {
      const target = event.target as HTMLInputElement | HTMLTextAreaElement;
      trigger(target.name as keyof IFormInput);
    };

    const inputs = document.querySelectorAll<
      HTMLInputElement | HTMLTextAreaElement
    >("input, textarea");
    inputs.forEach((input) => input.addEventListener("blur", handleBlur));

    return () => {
      inputs.forEach((input) => input.removeEventListener("blur", handleBlur));
    };
  }, [trigger]);

  return (
    <form
      className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="fullName">
          نام و نام خانوادگی
          <span className="text-red-300 ms-2 font-mono">&#42;</span>
        </label>
        <input
          className="transition-all duration-300 placeholder:text-gray-500 pb-2 bg-transparent outline-none border-b-2 dark:border-white border-black hover:border-primary-300 focus:border-primary-300"
          id="fullName"
          placeholder="نام و نام خانوادگی"
          type="text"
          {...register("fullName", {
            required: "نام و نام خانوادگی اجباری است.",
          })}
        />
        {errors.fullName && (
          <span className="text-red-300">{errors.fullName.message}</span>
        )}
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="email">
          ایمیل
          <span className="text-red-300 ms-2 font-mono">&#42;</span>
        </label>
        <input
          className="transition-all duration-300 placeholder:text-gray-500 pb-2 bg-transparent outline-none border-b-2 dark:border-white border-black hover:border-primary-300 focus:border-primary-300"
          id="email"
          placeholder="ایمیل"
          type="email"
          {...register("email", {
            required: "ایمیل اجباری است.",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "فرمت ایمیل نامعتبر است.",
            },
          })}
        />
        {errors.email && (
          <span className="text-red-300">{errors.email.message}</span>
        )}
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="phone">
          شماره تماس
          <span className="text-red-300 ms-2 font-mono">&#42;</span>
        </label>
        <input
          className="transition-all duration-300 placeholder:text-gray-500 pb-2 bg-transparent outline-none border-b-2 dark:border-white border-black hover:border-primary-300 focus:border-primary-300"
          id="phone"
          placeholder="۰۹۱۲۰۰۰۱۱۱۱"
          type="tel"
          {...register("phone", {
            required: "شماره تماس اجباری است.",
            pattern: {
              value: /^[0-9]{11}$/,
              message: "فرمت شماره تماس نامعتبر است.",
            },
          })}
        />
        {errors.phone && (
          <span className="text-red-300">{errors.phone.message}</span>
        )}
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="organization">
          نام سازمان
          <span className="text-red-300 ms-2 font-mono">&#42;</span>
        </label>
        <input
          className="transition-all duration-300 placeholder:text-gray-500 pb-2 bg-transparent outline-none border-b-2 dark:border-white border-black hover:border-primary-300 focus:border-primary-300"
          id="organization"
          placeholder="سازمان"
          type="text"
          {...register("organization", {
            required: "نام سازمان اجباری است.",
          })}
        />
        {errors.organization && (
          <span className="text-red-300">{errors.organization.message}</span>
        )}
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="position">
          سمت
          <span className="text-red-300 ms-2 font-mono">&#42;</span>
        </label>
        <input
          className="transition-all duration-300 placeholder:text-gray-500 pb-2 bg-transparent outline-none border-b-2 dark:border-white border-black hover:border-primary-300 focus:border-primary-300"
          id="position"
          placeholder="سمت"
          type="text"
          {...register("position", { required: "سمت اجباری است." })}
        />
        {errors.position && (
          <span className="text-red-300">{errors.position.message}</span>
        )}
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="descriptions">توضیحات سفارشی</label>
        <textarea
          className="h-9 w-full transition-all duration-300 placeholder:text-gray-500 bg-transparent outline-none border-b-2 dark:border-white border-black hover:border-primary-300 focus:border-primary-300"
          id="descriptions"
          placeholder="توضیحات سفارشی"
          {...register("descriptions")}
        />
      </div>
      <button
        type="submit"
        className="bg-primary-300 font-bold text-lg px-9 py-4 w-fit rounded-full text-white"
      >
        ثبت سفارش
      </button>
    </form>
  );
}
