"use client"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const slides = [
    "/slider/slide-1.jpg",
    "/slider/slide-2.jpg",
    "/slider/slide-3.jpg",
    "/slider/slide-4.jpg",
]
export default function Slider () {
        return (
                <div className="w-full">
                    <Carousel
                    infiniteLoop
                    showArrows
                    showStatus={false}
                    showThumbs={false}
                    >
                        {slides.map((imgUrl,i)=>(
                                <img key={i} src={imgUrl} alt="" className="sm:h-[90vh]" />
                                ))}
                    </Carousel>
                        </div>
        );
    }
