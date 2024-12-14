import React, { useState, useRef } from "react";

const AudioPlayer = ({ url }) => {
    // State untuk melacak status audio (play atau stop)
    const [isPlaying, setIsPlaying] = useState(false);

    // Referensi untuk menyimpan elemen audio
    const audioRef = useRef(new Audio(url)); // Ganti dengan URL audio Anda

    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause(); // Hentikan audio
        } else {
            audioRef.current.play(); // Mainkan audio
        }
        setIsPlaying(!isPlaying); // Toggle status
    };

    return (
        <div>
            <button onClick={togglePlayPause}>
                {isPlaying ? "Stop" : "Play"}
            </button>
        </div>
    );
};

export default AudioPlayer;
