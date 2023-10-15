"use client"
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const slides = [
    "/slider/slide-1.jpg",
    "/slider/slide-7.jpg",
    "/slider/slide-8.jpg",
    "/slider/slide-4.jpg",
]
export default function Slider () {
    const [currentSlide, setCurrentSlide] = useState(0);

        return (
                <div className="w-full">
                    <Carousel
                     onChange={(index) => setCurrentSlide(index)}
                     infiniteLoop={true}
                     showArrows={false} 
                     showThumbs={false} 
                     autoPlay={true}> 
                        {slides.map((imgUrl,i)=>(
                                <div className="wrapper relative">
                                    <img key={i} src={imgUrl} alt="" className="h-[70vh] sm:h-[92vh] sm:w-full" />
                                </div>
                                ))}
                    </Carousel>
                        </div>
        );
    }
