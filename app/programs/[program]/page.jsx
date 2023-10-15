import Btn from "@/app/component/button";
import { programs, tableData } from "@/data/data"
import {FaHotel} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
import {TbBrandGmail} from 'react-icons/tb'
import Table from "@/app/component/table";
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
        <section className={`flex sm:flex-row flex-col-reverse w-11/12 xl:w-5/6 justify-between mx-auto `}>
        <div className="paragraph text-end sm:w-1/2">
            <h1 className="text-xl">{program.name}</h1>
            <p className="py-4"  >المده :  {program.date}  </p>
            <p>{program.description}</p>
            {program.hotels && <h1 className="text-end text-2xl py-4">
               : الفنادق
            </h1>}
            <div className={`grid ${program.hotels && program.hotels.length > 1 ? 'grid-cols-2':'grid-cols-1'} gap-3`}>
            {program.hotels
            ? program.hotels.map((hotel, index) => (
                <div key={index} className="py-4">
                    <div className="flex items-center justify-end mb-2">
                    <h2 className="text-lg">{hotel.name}</h2>
                    <span className="px-2">
                        <FaHotel className="text-gray-600" />
                    </span>
                    </div>
                    <p className="text-sm font-medium">{hotel.date}</p>
                    <p className="text-sm">{hotel.description}</p>
                </div>
                ))
            : null}
            {program.itinerary ? (
            <section className={`text-end`}>
                <h1 className="text-end text-2xl py-4">الجدول اليومي</h1>
                <ul className="text-end">
                {program.itinerary.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
                </ul>

                <h1 className="text-end text-2xl py-4">الخدمات المشمولة</h1>
                <ul className="text-end">
                {program.services ? program.services.map((service, index) => (
                    <li key={index}>{service}</li>
                )):(
                    program.included.map((service, index) => (
                        <li key={index}>{service}</li>
                    ))
                )}
                </ul>

                <h1 className="text-end text-2xl py-4">الخدمات غير المشمولة</h1>
                <ul className="text-end">
                {program.notIncluded.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
                </ul>
            </section>
            ) : null}
                </div>
         
            </div>
                <div className="sm:w-[40%] sm:py-0 py-8">
                <div className="wrapper relative">
                        <h3 className="p-2 absolute top-0 w-full flex justify-center text-white font-semibold text-2xl bg-[#00000059]">{program.name}</h3>
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
                    <a className="flex w-52 justify-around hover:opacity-50 transition p-4 items-center rounded-full bg-green-500 text-white" href="http://wa.me/+966546077002" target="_blank" rel="noopener noreferrer">
                    Whatsapp
                        <BsWhatsapp className=" text-2xl"/>

                   </a>
                </li>
                <a target="_blank" href="https://mail.google.com/mail/u/0/?pli=1#inbox?compose=DmwnWstptJPZxMVZsTRFznCxQwDTflLLFZXdWcXGFhFVccMtsWRFcCZZKZwVKPlPfdQrMNcfXQwG" className="px-3 flex w-56 justify-around hover:opacity-50 transition p-4 items-center rounded-full bg-rose-700 text-white">
                     sales@dalitravelsa.com
                    <TbBrandGmail className="text-2xl"/>
                </a>
            </ul>
            </div>
       </div>
        </section>
       {program.prices ? (
        <Table data={tableData} />
        ) : null}
    </main>
    </>
  );
};
