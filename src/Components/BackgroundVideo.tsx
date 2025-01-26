import React, { ReactNode } from "react";
import "../css/BackgroundVideo.css";
import '../css/fontfaces.css';

interface Props {
  children: ReactNode;
  source: string;
}

const BackgroundVideo: React.FC<Props> = ({children, source}: Props) => {
  return (
    <div className="video-container">
      <div className="video-wrapper">
        <video className="video-background" autoPlay loop muted>
          <source src={source} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default BackgroundVideo;