import React, { useRef, useState } from "react";
import YoutubeVideo from "../types";

interface Props {
    video: YoutubeVideo;
    mode: "interactive" | "static";
    onVideoStart?: () => void;
    onVideoEnd?: () => void;
}

const YoutubeVideoCard: React.FC<Props> = ({ video, mode, onVideoStart, onVideoEnd }) => {
    const youtubeVideoRef = useRef<HTMLVideoElement>(null);
    const [play, setPlay] = useState(false);
    const [muted, setMuted] = useState(true);
    const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

    // On Mouse Enter in the mode interactive, the video will start play
    const onMouseEnter = () => {
        if (mode === "interactive") {
            hoverTimeout.current = setTimeout(() => {
                youtubeVideoRef.current?.play();
                setPlay(true);
                onVideoStart?.();
            }, 500);
        }
    };

    // On Mouse Leave, the video will pause and end it
    const onMouseLeave = () => {
        if (hoverTimeout.current) {
            clearTimeout(hoverTimeout.current);
        }
        if (youtubeVideoRef.current) {
            youtubeVideoRef.current.pause();
            youtubeVideoRef.current.currentTime = 0;
            setPlay(false);
            onVideoEnd?.();
        }
    };

    // Mute and Unmute the video play
    const toggleMute = () => {
        if (youtubeVideoRef.current) {
            youtubeVideoRef.current.muted = !youtubeVideoRef.current.muted;
            setMuted(youtubeVideoRef.current.muted);
        }
    };

    return (
        <div className="youtube-video-card" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div className="playing-card">
                {
                    !play ? (
                        <>
                            <img
                                src={video.thumbnailUrl}
                                alt={video.title}
                                className={mode === "static" ? "blur-thumbnail" : ""}
                            />
                        </>
                    ) : (
                        <div className="youtube-video-container">
                            <video
                                ref={youtubeVideoRef}
                                src={video.videoUrl}
                                muted={muted}
                                preload="none"
                                width="100%"
                            />
                            <div className="video-duration">
                                <span className="duration">{video.duration}</span>
                            </div>
                            <button onClick={toggleMute} className="mute-button">
                                {muted ? <span>&#128263;</span> : <span>&#128266;</span>}
                            </button>
                        </div>
                    )
                }
            </div>
            <div className="info">
                <div className="profile">{video.title.charAt(0).toUpperCase()}</div>
                <div>
                    <p className="title">{video.title}</p>
                    <p className="sub-title">{video.author}</p>
                    <p className="sub-title">{video.views} views &#8226; {video.uploadTime}</p>
                </div>
            </div>
        </div>
    );
};

export default YoutubeVideoCard;