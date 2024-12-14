import { useState, useRef } from "react";

const useAudio = (url) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio(url));

    const play = () => {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
        setIsPlaying(true);
    };

    const pause = () => {
        audioRef.current.pause();
        setIsPlaying(false);
    };

    const togglePlayPause = () => {
        isPlaying ? pause() : play();
    };

    return { isPlaying, play, pause, togglePlayPause, audioRef };
};

export default useAudio;
