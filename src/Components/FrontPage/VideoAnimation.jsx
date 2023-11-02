import React, { useState, useEffect } from "react";
import video1 from "../Assets/videoTrekuartista.mp4";
import soundOffIcon from "../Assets/mute.png";
import soundOnIcon from "../Assets/volume-up.png";

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
    <div className="relative slider-content p-0 h-[100vh]">
      <video
        src={video1}
        autoPlay
        loop
        playsInline
        className="w-full h-full object-cover "
      />
      <button onClick={toggleMute} className="absolute voice-toggle-button left-[50px] top-[83vh] lg:top-[78vh]">
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
    </div>
  );
}

export default VideoAnimation;
