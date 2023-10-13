"use client"
import Slider from "./component/slider"
import { Georgia, programs } from "@/data/data"
import Card from "./component/card"




export default function Home() {
  return (
    <main className="flex min-h-screen w-[95%] lg:w-5/6 mx-auto flex-col items-center justify-between pt-20 sm:pt-16 px-4 sm:px-0">
      <Slider />
      <div className=" flex justify-end w-full pt-16">
        <div className="title text-end text-2xl w-4/5 border-b-2 h-4 border-gray"></div>
        <h1 className="title text-end text-2xl sm:pl-4">الوجهات السياحيه</h1>
      </div>
      <div className="shop grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-4 container pt-8 h-fit">
            {programs.map((program , i) => <Card product={program} i={i} />)}
      </div>
  
    </main>
  )
}
