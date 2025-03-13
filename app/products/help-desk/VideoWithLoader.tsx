"use client";
import React, { useState } from "react";

export default function VideoWithLoader({ videoUrl }: { videoUrl: string }) {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  return (
    <div className="relative w-full h-[170px] sm:h-80">
      {/* نمایش Skeleton Loader تا زمان بارگذاری کامل iframe */}
      {!isIframeLoaded && (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-200 flex items-center justify-center">
          {/* می‌توانید اینجا از انیمیشن‌های دلخواه یا Spinner استفاده کنید */}
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
        </div>
      )}
      <iframe
        src={videoUrl}
        title="Aparat Video"
        className={`w-full h-full ${!isIframeLoaded ? "hidden" : ""}`}
        frameBorder="0"
        allow="autoplay; fullscreen"
        loading="lazy"
        onLoad={() => setIsIframeLoaded(true)} // تغییر وضعیت پس از بارگذاری
      />
    </div>
  );
}
