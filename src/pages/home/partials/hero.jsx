import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
    "https://rockstaractu.com/wp-content/uploads/2025/05/Grand-Theft-Auto-VI-Images-officielles-Image-17-3840p-x-2160p-Brut-Picture-by-Rockstar-Games-scaled.webp",
    "https://rockstaractu.com/wp-content/uploads/2025/05/Grand-Theft-Auto-VI-Images-officielles-Image-7-3840p-x-2160p-Brut-Picture-by-Rockstar-Games-scaled.webp",
    "https://rockstaractu.com/wp-content/uploads/2025/05/Grand-Theft-Auto-VI-Images-officielles-Image-45-3840p-x-2160p-Brut-Picture-by-Rockstar-Games-scaled.webp",
    "https://rockstaractu.com/wp-content/uploads/2025/05/Grand-Theft-Auto-VI-Images-officielles-Image-21-3840p-x-2160p-Brut-Picture-by-Rockstar-Games-scaled.webp",
    "https://rockstaractu.com/wp-content/uploads/2025/05/Grand-Theft-Auto-VI-Images-officielles-Image-30-3840p-x-2160p-Brut-Picture-by-Rockstar-Games-scaled.webp"
];

const HeroSection = () => {
    return (
        <>

            <div className="ws-container">

                <div className="ws-left">

                    <h1 className='ws-h1'>Unleash Your Next Gaming Obsession</h1>

                    <p className='ws-p'>Browse, discover, and track the hottest games across all platforms. Get release dates, prices, and insider updates—all in one pulse-pounding hub.</p>

                    <button className='ws-btn btn'>Explore Games</button>

                </div>

                <div className="ws-right">

                    <Carousel showThumbs={false} infiniteLoop autoPlay>
                        {images.map((src, idx) => (
                            <div key={idx}>
                                <img src={src} alt={`Game ${idx + 1}`} />
                            </div>
                        ))}
                    </Carousel>

                </div>

            </div>

        </>
    );
};

export default HeroSection;