import React, { ReactNode } from "react";
import "../css/BackgroundVideo.css";
import '../css/fontfaces.css';

interface Props {
  children: ReactNode;
}

const BackgroundVideo: React.FC<Props> = ({children}: Props) => {
  return (
    <div className="video-container">
      <video className="video-background" autoPlay loop muted>
        <source src="/static/video/redes.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
       {children}
      </div>
    </div>
  );
};

export default BackgroundVideo;