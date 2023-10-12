import Slider from "./component/slider"
import { Georgia } from "@/data/data"
import Card from "./component/card"
export default function Home() {
  return (
    <main className="flex min-h-screen  sm:w-5/6 mx-auto flex-col items-center justify-between pt-20">
      <Slider />
      <div className=" flex justify-end w-full pt-20">
        <div className="title text-end text-2xl w-4/5 border-b-2 h-4 border-gray"></div>
        <h1 className="title text-end text-2xl pl-4">الوجهات السياحيه</h1>
      </div>
      <div className="shop  grid grid-cols-4 h-screen">
          <div className="container pt-8">
            <Card product={Georgia}/>
          </div>
      </div>
    </main>
  )
}
