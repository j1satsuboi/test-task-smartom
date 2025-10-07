import React from "react";
import { useState } from "react";
import feedbackImg from "../../../../assets/feedback.png";

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    hasActiveContract: false,
  });

  const handleInputChange = (e) => {
    if (e.target.type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // тут отправляем данные через post-запрос

    // alert(
    //   `Имя: ${formData.name}\nEmail: ${formData.email}\nДействующий договор: ${
    //     formData.hasActiveContract ? "Да" : "Нет"
    //   }\n`
    // );
  };

  return (
    <div
      className="bg-white
      px-3 md:px-10 xl:px-14 3xl:px-46
      pt-16 md:pt-20 xl:pt-30 3xl:pt-40
      mb-16 md:mb-20 xl:mb-30 3xl:mb-40"
    >
      <section
        id="Feedback"
        className="container mx-auto flex flex-col bg-[#F2F3F7] rounded-lg
        py-6 md:py-8 3xl:py-10
        px-3 md:px-6 xl:px-8 3xl:px-10
        gap-6 md:gap-8 xl:gap-12 3xl:gap-14
        relative overflow-hidden"
      >
        <img
          src={feedbackImg}
          alt="feedbackImg"
          className="absolute
          -top-12 -right-11 max-w-1/2
          md:-top-10 md:-right-16 md:max-w-1/3
          xl:top-0 xl:-right-30 xl:max-w-1/2
          3xl:-right-0"
        />
        <div className="relative flex flex-col gap-2 xl:gap-4 3xl:gap-6">
          <p
            className="block xl:absolute top-0 right-0
            font-mts-compact font-normal text-[#626C77] opacity-40
            text-sm leading-5
            md:text-[17px] md:leading-6"
          >
            ¬ связаться с нами
          </p>
          <h2
            className="font-mts-wide font-medium text-[#1D2023]
            text-2xl leading-7
            md:text-[44px] md:leading-11
            xl:text-[64px] xl:leading-18"
          >
            ПОДОБРАТЬ РЕШЕНИЕ
          </h2>
          <p
            className="font-mts-compact font-normal text-[#1D2023]
            text-sm leading-5
            md:text-[17px] md:leading-6"
          >
            Наши менеджеры свяжутся с вами в ближайшее время
          </p>
        </div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div
            className="flex flex-col md:flex-row 
          font-mts-compact font-normal text-[#626C77]
          text-[17px] leading-6 gap-2
          xl:max-w-162 3xl:max-w-202"
          >
            <input
              type="text"
              id="name"
              name="name"
              required
              className="flex-1 bg-white rounded-md border-[#BCC3D080] border-1
              px-3 py-3.5
              md:py-6"
              placeholder="Ваше имя"
              onChange={handleInputChange}
            />
            <input
              type="email"
              id="emal"
              name="email"
              required
              className="flex-1 bg-white rounded-md border-[#BCC3D080] border-1
              px-3 py-3.5 md:py-6"
              placeholder="Ваш email"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex pt-4 md:pt-6 gap-2 items-center">
            <input
              type="checkbox"
              id="hasActiveContract"
              name="hasActiveContract"
              className="size-[18px]"
              onChange={handleInputChange}
            />
            <label
              htmlFor="hasActiveContract"
              className="font-mts-compact font-normal text-[#1D2023]
              text-sm leading-5
              md:text-[17px] md:leading-6"
            >
              Наличие действующего договора
            </label>
          </div>
          <button
            type="submit"
            className="font-mts-compact font-medium text-white
            bg-[#1D2023] rounded-md py-3.5 xl:max-w-[130px]
            transition-all duration-300 ease-in-out
            hover:cursor-pointer hover:bg-[#008AE0]
            text-[17px] leading-6 mt-6 md:mt-10"
          >
            Отправить
          </button>
        </form>
        <div
          className="flex flex-col md:flex-row justify-between 
          items-start md:items-end gap-6 md:gap-0 xl:gap-20 xl:justify-start"
        >
          <div className="flex flex-col justify-between gap-2">
            <p
              className="font-mts-compact font-normal text-black 
              text-sm leading-5
              xl:text-[17px] xl:leading-6"
            >
              Поддержка:
            </p>
            <p
              className="font-mts-compact font-medium text-black
              text-xl leading-6
              xl:text-2xl xl:leading-7"
            >
              8 495 700-70-70
            </p>
          </div>
          <div className="flex flex-col justify-between gap-2">
            <p
              className="font-mts-compact font-normal text-black 
              text-sm leading-5
              xl:text-[17px] xl:leading-6"
            >
              Поддержка:
            </p>
            <p
              className="font-mts-compact font-medium text-black
              text-xl leading-6
              xl:text-2xl xl:leading-7"
            >
              8 499 323-88-50
            </p>
          </div>
          <div className="flex flex-col justify-between gap-2">
            <p
              className="font-mts-compact font-normal text-black 
              text-sm leading-5 max-w-[200px] xl:max-w-none
              xl:text-[17px] xl:leading-6"
            >
              Для официальных писем юридических лиц
            </p>
            <p
              className="font-mts-compact font-medium text-black
              text-xl leading-6
              xl:text-2xl xl:leading-7"
            >
              mgts@mgts.ru
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feedback;
