"use client"
import Slider from "./component/slider"
import { Georgia, hotel, programs, services, visaRequirements } from "@/data/data"
import Programs from "./component/programsGrid"
import { BlogCard, Card, Lable, ServiceCard, VisaCard } from "./component/card";



export default function Home() {
  return (
    <main className="flex min-h-screen sm:w-[95%] 2xl:w-5/6 mx-auto flex-col items-center justify-between py-20 sm:py-16 px-4 sm:px-0">
      <Slider />
      <Programs programs={programs} title={"الوجهات السياحيه"}/>
      <div className="w-full sm:w-4/5 flex h-[60vh] my-8">
        <div style={{borderRadius:'0rem 0rem 7rem 0rem'}} className="absolute main-bg w-1/2">
          <h1 className="text-center text-2xl text-white p-8">
            جميع خدمات السفر في مكان واحد
          </h1>
        </div>
        <img src="/slider/slide-2.jpg" alt="" />
      </div>
      <section className="w-11/12">
        <Lable title={"التأشيرات"}/>
        <div className="shop mx-auto sm:px-0 px-4 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-4 container pt-8 h-fit">
        {visaRequirements.map((program , i) => <VisaCard key={i} product={program} i={i} />)}
        </div>
      </section>
      <section className="w-11/12">
       {services.map((service,i)=>(
         <>
         <Lable title={service.name}/>
         <div className="shop mx-auto flex justify-end container pt-8 h-fit">
         <ServiceCard key={i} product={service} i={i} />
         </div>
         </>
       ))}
      </section>
    </main>
  )
}
