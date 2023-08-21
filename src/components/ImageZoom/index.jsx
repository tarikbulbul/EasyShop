import React, { useState } from 'react';

const ImageZoom = ({ src, alt }) => {
    const [zoom, setZoom] = useState(false);

    return (
        <img 
            src={src}
            alt={alt}
            className={`
            ${
                zoom
                ? "scale-150 transform transition-transform duration-300"
                : "scale-100 transform transition-transform duration-300"
            }
            max-h-full object-cover mt-10`}
            onMouseEnter={() => setZoom(true)}
            onMouseLeave={() => setZoom(false)}
        />
    );
};

export default ImageZoom;