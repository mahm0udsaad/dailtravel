"use client"
import { BlogCard } from "../component/card"
import { travelArticles } from "@/data/data";


const Blogs= () =>{
    return(
        <main className="w-11/12 mx-auto pt-20">
            <div className="w-full h-[50vh] sm:h-[85vh] relative">
            <img className='h-full w-full' src="/magazen.png" alt="" />
        </div>
        <div className=" flex justify-between w-full pt-16">
        <div className="title text-end text-2xl w-5/6 border-b-2 h-6 border-gray"></div>
        <h1 className="title text-center text-blue-800 text-4xl w-[25%]">مقالات</h1>
      </div>
      <div className="shop mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-4 container pt-8 h-fit">
            {travelArticles.map((program , i) => <BlogCard key={i} product={program} i={i} />)}
      </div>
        </main>
    )
}
export default Blogs ;