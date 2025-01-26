import InfiniteMovingImages from "@/components/ui/InfiniteMovingImages";

export function MovingCards() {
  return (
    <div className="overflow-x-hidden mt-14 text-gray-800 dark:text-white">
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
const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
