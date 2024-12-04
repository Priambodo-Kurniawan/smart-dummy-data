import React, { useState } from "react";

const ImageWithFallback = ({ src, alt, className, errorImage }) => {
    const [imageStatus, setImageStatus] = useState("loading"); // 'loading', 'loaded', 'error'

    const handleLoad = () => setImageStatus("loaded");
    const handleError = () => setImageStatus("error");

    return (
        <div className="relative">
            {/* Show a loading placeholder while the image is loading */}
            {imageStatus === "loading" && (
                <div className="animate-pulse rounded-md absolute inset-0 flex items-center justify-center bg-gray-200">
                    <p className="opacity-30">Loading...</p>
                </div>
            )}

            {/* Show the image when loaded */}
            <img
                src={imageStatus === "error" ? errorImage : src}
                alt={alt}
                className={`${className} ${
                    imageStatus === "loading" ? "invisible" : "visible"
                }`}
                onLoad={handleLoad}
                onError={handleError}
            />
        </div>
    );
};

export default ImageWithFallback;
