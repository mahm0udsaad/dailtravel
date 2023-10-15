import { visaRequirements } from "@/data/data"
import {BsWhatsapp} from 'react-icons/bs'
import {TbBrandGmail} from 'react-icons/tb'

export async function generateStaticParams() {
    const visasKeys = []
    for (let i = 0 ; i < visaRequirements.length ; i ++){
        visasKeys.push({visa:`${i}`})
  }
  return visasKeys
}

export default async function visaDetails({params})  {
    const visa = visaRequirements[params.visa];
   
  return (
    <>
    <main className="pt-24">
        <section className={`flex sm:flex-row flex-col-reverse w-11/12 xl:w-5/6 justify-between mx-auto `}>
        <div className="paragraph text-end sm:w-1/2">
            <h1 className="text-2xl font-semibold">{visa.visaType}</h1>
            <p className='text-xl py-4'>الاوراق المطلوبه</p>
            <p>{visa.included}</p>
            </div>
                <div className="sm:w-[40%] sm:py-0 py-8">
                <div className="wrapper relative">
                        <img src={visa.image} alt={visa.title} className="h-[25rem] w-full"/>
                    </div>
                <div className="flex flex-col w-full text-end justify-end">
                <div className="flex justify-between p-4 border border-gray bg-gray-100">
                <div className="flex">
                <p className="text-end">{visa.price}</p>
                </div>
                </div>
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
    </main>
    </>
  );
};
