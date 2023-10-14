import {Card} from "./card"

const Programs = ({programs , title}) =>{
    return(
        <>
        <div className=" flex justify-between w-full pt-16">
        <div className="title text-end text-2xl w-5/6 border-b-2 h-6 border-gray"></div>
        <h1 className="title text-center text-blue-800 text-4xl sm:w-[20%]">{title}</h1>
      </div>
      <div className="shop sm:px-0 px-4 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-4 container pt-8 h-fit">
            {programs && programs.map((program , i) => <Card key={i} product={program} i={i} />)}
      </div>
        </>
    )
}
export default Programs