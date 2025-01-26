import React from "react";

const AparatVideo = () => {
  return (
    <div className="w-full h-full ">
      <iframe
        className="w-full h-full z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        src={`https://www.aparat.com/video/video/embed/videohash/z33l4po/vt/frame`}
        style={{ objectFit: "contain", width: "100%", height: "100%" }}
        allowFullScreen
      />
    </div>
  );
};

export default AparatVideo;
