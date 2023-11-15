import React, { useState, useEffect } from "react";
import video1 from "../Assets/videoTrekuartista.mp4";
import soundOffIcon from "../Assets/off.png";
import soundOnIcon from "../Assets/on.png";
import scrollDown from "../Assets/scrollButton.png";
import { Link } from "react-router-dom";

function VideoAnimation() {
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = document.querySelector('video');
    video.muted = isMuted;
    video.play();
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative slider-content p-0 h-[100vh] z-40">
      <video
        src={video1}
        autoPlay
        loop
        playsInline
        className="w-full h-full object-cover"
      />
      <button onClick={toggleMute} className="absolute z-50 voice-toggle-button left-[50px] top-[93vh] lg:top-[92vh]">
        {isMuted ? (
          <img
            src={soundOffIcon}
            alt="Sound Off"
            className="w-6 h-6"
          />
        ) : (
          <img
            src={soundOnIcon}
            alt="Sound On"
            className="w-6 h-6"
          />
        )}
      </button>
      <div className="absolute top-[88vh] lg:top-[88vh] 2xl:top-[77vh] inset-0 flex items-center justify-center">
        <Link onClick={() => window.scrollTo({
                        top: 770,
                        left: 0,
                        behavior: "smooth" })}>
          <img
            src={scrollDown}
            alt=""
            className="w-[124px] h-[27px] object-contain cursor-pointer transition-transform hover:scale-125"
          />
          </Link>
      </div>
    </div>
  );
}

export default VideoAnimation;
