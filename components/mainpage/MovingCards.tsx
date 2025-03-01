import InfiniteMovingImages from "@/components/ui/InfiniteMovingImages";
export function MovingCards() {
  return (
    <div className="overflow-x-clip mt-14 text-gray-800 dark:text-white">
      <h2 className="heading-2 mt-10 text-center">ما با چه کسانی کار کردیم؟</h2>
      <div className="h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingImages
          items={images1}
          direction="right"
          speed="normal"
        />
        <InfiniteMovingImages items={images2} direction="left" speed="normal" />
      </div>
    </div>
  );
}
// const images1 = [
//   {
//     src: "/mainPage/swip1.png",
//   },
//   {
//     src: "/mainPage/swip2.png",
//   },
//   {
//     src: "/mainPage/swip3.png",
//   },
//   {
//     src: "/mainPage/swip4.png",
//   },
//   {
//     src: "/mainPage/swip5.png",
//   },
//   {
//     src: "/mainPage/swip7.png",
//   },
//   {
//     src: "/mainPage/swip13.png",
//   },
//   {
//     src: "/mainPage/swip14.png",
//   },
//   {
//     src: "/mainPage/swip15.png",
//   },
// ];
const images1 = [
  {
    src: "/mainPage/customers/amirkabir.png",
    text: "هتل امیرکبیر",
  },
  {
    src: "/mainPage/customers/bandar.png",
    text: "پالایش نفت بندرعباس",
  },
  {
    src: "/mainPage/customers/dehkhoda.png",
    text: "کشت و صنعت نیشکر دهخدا",
  },
  {
    src: "/mainPage/customers/faragir.png",
    text: "فراگیرسلامت ایرانیان",
  },
  {
    src: "/mainPage/customers/golgohar.png",
    text: "معدنی و صنعتی گل گهر",
  },
  {
    src: "/mainPage/customers/kariz.png",
    text: "کیمیا آب رسان یاور زمین",
  },
];
const images2 = [
  {
    src: "/mainPage/customers/lorestan.png",
    text: "مخابرات لرستان",
  },
  {
    src: "/mainPage/customers/luxa.org-grayscale-._gilan-1.png",
    text: "اداره کل آموزش پرورش گیلان",
  },
  {
    src: "/mainPage/customers/luxa.org-grayscale-._yazd.png",
    text: "استانداری یزد",
  },
  {
    src: "/mainPage/customers/ramak.png",
    text: "فراورده های لبنی رامک",
  },
  {
    src: "/mainPage/customers/shiraz.png",
    text: "دانشگاه شیراز",
  },
  {
    src: "/mainPage/customers/tosee-omran.png",
    text: "توسعه عمران و مدیریت منطقه گلگهر",
  },
];
// const images2 = [
//   {
//     src: "/mainPage/swip7.png",
//   },
//   {
//     src: "/mainPage/swip13.png",
//   },
//   {
//     src: "/mainPage/swip14.png",
//   },
//   {
//     src: "/mainPage/swip15.png",
//   },
//   {
//     src: "/mainPage/swip16.png",
//   },
//   {
//     src: "/mainPage/swip17.png",
//   },
//   {
//     src: "/mainPage/swip1.png",
//   },
//   {
//     src: "/mainPage/swip2.png",
//   },
//   {
//     src: "/mainPage/swip3.png",
//   },
// ];
