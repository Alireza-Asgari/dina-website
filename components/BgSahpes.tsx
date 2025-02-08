function BgShape1({ className = "" }: { className?: string }) {
  return (
    <div className={`z-10 w-full ${className}`}>
      <div className="h-[650px] w-[550px] sm:h-[761px] sm:w-[676px bg-[#95008633] rounded-[50%] absolute blur-[100px] -bottom-2/3 -right-1/2"></div>
      <div className="h-[650px] w-[550px] sm:h-[761px] sm:w-[676px bg-[#95008633] rounded-[50%] absolute -top-1/4 left-2/3 blur-[100px] max-sm:-translate-x-1/4"></div>
      <div className="w-[325px] h-[663px] bg-[#B1007C12] rounded-[50%] absolute left-[60%] top-1/3 blur-[100px]"></div>
      <div className="w-[325px] h-[663px] bg-[#5C009514] rounded-[50%] absolute left-[50%] top-1/3 -translate-x-1/2 blur-[100px]"></div>
      <div className="w-[325px] h-[663px] bg-[#6E00951A] rounded-[50%] absolute left-1/4  -translate-x-1/2 top-1/3 blur-[100px] "></div>
      <div className="w-[325px] h-[662px] bg-[#8505DB1A] rounded-[50%] absolute left-0 top-1/3 blur-[100px]"></div>
      <div className="w-[840px] h-[820px] rounded-[50%] bg-custom-gradient absolute top-0 left-0 -translate-x-1/3 blur-[100px]"></div>
    </div>
  );
}
function BgShape2({ className = "" }: { className?: string }) {
  return (
    <div className={`z-10 w-full ${className}`}>
      <span className="w-52 h-[350px] bg-[#950086] bg-opacity-10 rounded-[50%] absolute top-0 right-14 -translate-x-1/2 -translate-y-1/2 blur-[100px]" />
      <span className="w-52 h-[350px] bg-[#360034] bg-opacity-55 rounded-[50%] absolute top-0 right-28 -translate-x-full -translate-y-1/2 blur-[100px] " />
      <span className="w-52 h-[350px] bg-primary-400 bg-opacity-10 rounded-[50%] absolute top-0 left-1/2 translate-x-1/2 -translate-y-1/2 blur-[100px]  " />
      <span className="w-52 h-[350px] bg-[#6e0095] bg-opacity-10 rounded-[50%] absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[100px] " />
      <span className="w-52 h-[350px] bg-[#6e0095] bg-opacity-10 rounded-[50%] absolute top-0 left-1/3 -translate-x-1/4 -translate-y-1/2 blur-[130px] " />
    </div>
  );
}
function BgShape3({ className = "" }: { className?: string }) {
  return (
    <div className={`z-10 w-full ${className}`}>
      <span className="w-52 h-[350px] bg-[#6e0095] bg-opacity-10 rounded-[50%] absolute top-0 -translate-x-1/4 right-96 blur-[100px] " />
      <span className="w-52 h-[350px] bg-[#6e0095] bg-opacity-10 rounded-[50%] absolute top-0 -translate-y-1/4 left-0 -translate-x-96 blur-[100px] " />
      <span className="w-52 h-[350px] bg-primary-400 bg-opacity-10 rounded-[50%] absolute top-0 -translate-y-1/4  right-0 -translate-x-full blur-[100px]  " />
      <span className="w-52 h-[350px] bg-[#360034] bg-opacity-55 rounded-[50%] absolute top-0 -translate-y-1/4 right-1/2 blur-[100px] " />
      <span className="w-52 h-[350px] bg-[#950086] bg-opacity-10 rounded-[50%] absolute top-0 left-1/2 blur-[100px]" />
    </div>
  );
}

function BgShape4({ className = "" }: { className?: string }) {
  return (
    <div className={`z-10 w-full ${className} pointer-events-none`}>
      <span className="w-52 h-[350px] bg-[#6e0095] bg-opacity-10 rounded-[50%] absolute top-1/3 left-28 blur-[70px]  " />
      <span className="w-52 h-[350px] bg-[#6e0095] bg-opacity-10 rounded-[50%] absolute top-1/4 left-1/3 -translate-x-1/2 blur-[70px] " />
      <span className="w-52 h-[350px] bg-primary-400 bg-opacity-10 rounded-[50%] absolute top-1/4 left-1/2 -translate-x-1/2 blur-[70px] max-sm:top-0 max-sm:left-0 max-sm:translate-x-1  " />
      <span className="w-52 h-[350px] bg-[#360034] bg-opacity-55 rounded-[50%] absolute top-1/4  right-20 -translate-x-full blur-[120px] dark:blur-[70px] max-sm:top-0 max-sm:right-0 max-sm:translate-x-0 " />
      <span className="w-52 h-[350px] bg-[#950086] bg-opacity-10 rounded-[50%] absolute top-1/3 right-10 -translate-x-1/3 blur-[70px]" />
    </div>
  );
}
export { BgShape1, BgShape2, BgShape3, BgShape4 };
