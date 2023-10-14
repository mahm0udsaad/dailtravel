"use client"
import Slider from "./component/slider"
import { Georgia, programs } from "@/data/data"
import Programs from "./component/programsGrid"



export default function Home() {
  console.log(programs);
  return (
    <main className="flex min-h-screen w-[95%] 2xl:w-5/6 mx-auto flex-col items-center justify-between pt-20 sm:pt-16 px-4 sm:px-0">
      <Slider />
      <Programs programs={programs} title={"الوجهات السياحيه"}/>
      <div className="w-4/5 flex h-[60vh] my-8">
        <div style={{borderRadius:'0rem 0rem 7rem 0rem'}} className="absolute main-bg w-1/2">
          <h1 className="text-center text-2xl text-white p-8">
            جميع خدمات السفر في مكان واحد
          </h1>
        </div>
        <img src="/slider/slide-2.jpg" alt="" />
      </div>
    </main>
  )
}
