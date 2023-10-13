import Btn from "@/app/component/button";
import { programs } from "@/data/data"
import {FaHotel} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
import {TbBrandGmail} from 'react-icons/tb'
export const dynamicParams = 'false' ;
export async function generateStaticParams() {
    const programsKeys = []
    for (let i = 0 ; i < programs.length ; i ++){
        programsKeys.push({program:`${i}`})
  }
  return programsKeys
}

export default async function programDetails({params})  {
    const program = programs[params.program];
   
  return (
    <>
    <main className="pt-24">
        <section className={`flex w-11/12 xl:w-5/6 justify-between mx-auto `}>
        <div className="paragraph text-end w-[50%]">
            <h1 className="text-xl pb-8">{program.name}</h1>
            <p>{program.description}</p>
            <h1 className="text-end text-2xl py-4">
               : الفنادق
            </h1>
            <div className={`grid ${program.hotels.length > 1 ? 'grid-cols-2':'grid-cols-1'} gap-3`}>
            {program.hotels.map((hotel, index) => (
                <div key={index} className="py-4">
                <div className="flex items-center justify-end mb-2">
                <h2 className="text-lg ">{hotel.name}</h2>
                <span className="px-2"><FaHotel className="text-gray-600"/></span>
                </div>
                <p className="text-sm font-medium">{hotel.duration}</p>
                <p className="text-sm">{hotel.description}</p>
                </div>
            ))}
            </div>
        </div>
       <div className="w-[40%]">
       <div className="wrapper relative">
            <h3 className="p-2 absolute top-0 w-full flex justify-center text-white font-semibold text-2xl bg-[#00000059]">{program.name.split(" ").length > 2 ? program.name.split(" ")[1] : program.name}</h3>
            <img src={program.image} alt={program.title} className="h-[25rem] w-full"/>
        </div>
            <div className="flex flex-col w-full text-end justify-end">
            <div className="flex justify-between p-4 border border-gray bg-gray-100">
            <p className="" > عدد الافراد: {program.numbers} </p>
            <div className="flex">
            <p>ر.س</p>
            <p className="">{program.price} :السعر</p>
            </div>
            </div>
            <Btn product={program}/>
            <p className="py-4">جميع الاسعار متغيره حسب الامكانيه مع تمنياتنا بقضاء عطله سعيده</p>
            <p>:يمكنك التواصل معنا عبر</p>
            <ul className="flex flex-col items-end space-y-4 w-full pt-3">
                <li className="px-3">
                   <a className="flex" href="http://wa.me/+966546077002" target="_blank" rel="noopener noreferrer">
                   Whatsapp
                    <BsWhatsapp className="text-green-500 text-2xl mx-2"/>

                   </a>
                </li>
                <li className="px-3 flex">
                     sales@dalitravelsa.com
                    <TbBrandGmail className="text-rose-700 text-2xl mx-2"/>
                </li>
            </ul>
            </div>
       </div>
        </section>
    </main>
    </>
  );
};