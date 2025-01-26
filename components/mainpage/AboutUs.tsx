import React from "react";
import LinkComponent from "../ui/Link";

export default function AboutUs() {
  return (
    <section className="dark:bg-primary-700 relative shadow-custom text-gray-800 dark:text-white bg-bgInnerLight margin-1 p-4 sm:p-10 py-12 pb-20 rounded-[32px] z-10 mb-10 flex flex-col gap-8">
      <div className="flex justify-between  flex-col items-center gap-4 sm:flex-row">
        <h2 className="heading-3">آنچه باید از ما بدانید</h2>
        <LinkComponent>
          <p className="tracking-wider font-medium ">اطلاعات بیشتر</p>
        </LinkComponent>
      </div>
      <p className="text-base font-normal sm:text-xl text-justify">
        شرکت نرم افزاری داده کاوان دینا فعالیت خود را از سال 1397 با نام گروه
        نرم افزاری دینا و با همکاری گروهی از فارغ‌التحصیلان گرایش های رشته
        کامپیوتر و نرم افزار آغاز کرد . هدف این شرکت در ابتدا، تولید سامانه های
        جامع Help Desk مرتبط با فعالیت ها و عملکردهای واحد فناوری اطلاعات در
        تمامی سازمان ها و ادارات دولتی ، کارخانجات و تمامی مجموعه های خصوصی و
        دولتی است که در همین راستا شروع به تحلیل، طراحی و تولید سامانه جامع Help
        Desk دینا نمود .
      </p>
      <div className="w-full flex gap-6 mt-4 flex-col lg:flex-row">
        <div className="flex items-center gap-4">
          <svg
            width="80"
            height="80"
            viewBox="0 0 40 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.9999 29.0353V13.1298M12.3333 25.0589V17.1062M27.6666 25.0589V17.1062M29.5833 3.8609C26.671 2.11274 23.3647 1.19495 19.9999 1.20071C9.41417 1.20071 0.833252 10.1018 0.833252 21.0826C0.833252 24.2636 1.55392 27.2698 2.83234 29.9359C3.1735 30.6437 3.28659 31.4529 3.08917 32.2184L1.94875 36.6441C1.8358 37.082 1.83591 37.5431 1.94905 37.9811C2.06219 38.419 2.2844 38.8183 2.59336 39.139C2.90231 39.4597 3.28716 39.6905 3.70926 39.8081C4.13136 39.9258 4.57587 39.9261 4.99817 39.8093L9.26467 38.6243C10.0052 38.4302 10.7887 38.5243 11.4669 38.8887C14.1176 40.2577 17.0389 40.9683 19.9999 40.9644C30.5857 40.9644 39.1666 32.0633 39.1666 21.0826C39.1666 17.4621 38.2332 14.0643 36.6021 11.1416"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>

          <div className="space-y-2">
            <h3 className="heading-5">پشتیبانی اختصاصی</h3>
            <p className="paragraph">
              تیم پشتیبانی ما در شرایط مختلف آموزش ، اجرا و نگهداری سامانه به
              صورت آنلاین و حضوری در کنار شما خواهد بود .
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <svg
            width="80"
            height="80"
            viewBox="0 0 42 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.3145 39.9321C32.1691 39.9321 40.9686 31.2194 40.9686 20.4719C40.9686 9.72433 32.1691 1.01172 21.3145 1.01172C10.4598 1.01172 1.6604 9.72433 1.6604 20.4719C1.6604 31.2194 10.4598 39.9321 21.3145 39.9321Z"
              stroke="white"
              strokeWidth="1.5"
            />
            <path
              d="M21.3145 12.688V19.8727L25.2453 24.3641"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <div className="space-y-2">
            <h3 className="heading-5">پشتیبانی اختصاصی</h3>
            <p className="paragraph">
              تیم پشتیبانی ما در شرایط مختلف آموزش ، اجرا و نگهداری سامانه به
              صورت آنلاین و حضوری در کنار شما خواهد بود .
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <svg
            width="80"
            height="80"
            viewBox="0 0 52 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.1665 18.0171V20.2646M15.1665 35.9972V27.0071"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M26 27.0072C26 25.8151 26.4565 24.6718 27.2692 23.8288C28.0819 22.9858 29.1841 22.5122 30.3333 22.5122C31.4826 22.5122 32.5848 22.9858 33.3975 23.8288C34.2101 24.6718 34.6667 25.8151 34.6667 27.0072C34.6667 28.1994 34.2101 29.3427 33.3975 30.1857C32.5848 31.0287 31.4826 31.5023 30.3333 31.5023C29.1841 31.5023 28.0819 31.0287 27.2692 30.1857C26.4565 29.3427 26 28.1994 26 27.0072Z"
              stroke="white"
              strokeWidth="1.5"
            />
            <path
              d="M34.6666 22.5124L36.8333 20.2648M23.8333 33.7499L25.9999 31.5024M25.9999 22.5124L23.8333 20.2648M36.8333 33.7499L34.6666 31.5024M15.1666 7.53943C18.4587 5.56325 22.1963 4.52575 25.9999 4.53226C37.9664 4.53226 47.6666 14.5944 47.6666 27.0074C47.6666 39.4204 37.9664 49.4825 25.9999 49.4825C14.0334 49.4825 4.33325 39.4204 4.33325 27.0074C4.33325 22.9147 5.38842 19.0737 7.23225 15.7698"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>

          <div className="space-y-2">
            <h3 className="heading-5">پشتیبانی اختصاصی</h3>
            <p className="paragraph">
              تیم پشتیبانی ما در شرایط مختلف آموزش ، اجرا و نگهداری سامانه به
              صورت آنلاین و حضوری در کنار شما خواهد بود .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
