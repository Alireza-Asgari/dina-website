import InfiniteMovingImages from "@/components/ui/InfiniteMovingImages";
export function MovingCards() {
  return (
    <div className="overflow-x-clip mt-14 text-gray-800 dark:text-white">
      <h2 className="heading-2">ما با چه کسانی کار کردیم؟</h2>
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
const images1 = [
  {
    src: "mainPage/swip1.png",
  },
  {
    src: "mainPage/swip2.png",
  },
  {
    src: "mainPage/swip3.png",
  },
  {
    src: "mainPage/swip4.png",
  },
  {
    src: "mainPage/swip5.png",
  },
  {
    src: "mainPage/swip7.png",
  },
  {
    src: "mainPage/swip13.png",
  },
  {
    src: "mainPage/swip14.png",
  },
  {
    src: "mainPage/swip15.png",
  },
];
const images2 = [
  {
    src: "mainPage/swip7.png",
  },
  {
    src: "mainPage/swip13.png",
  },
  {
    src: "mainPage/swip14.png",
  },
  {
    src: "mainPage/swip15.png",
  },
  {
    src: "mainPage/swip16.png",
  },
  {
    src: "mainPage/swip17.png",
  },
  {
    src: "mainPage/swip1.png",
  },
  {
    src: "mainPage/swip2.png",
  },
  {
    src: "mainPage/swip3.png",
  },
];
