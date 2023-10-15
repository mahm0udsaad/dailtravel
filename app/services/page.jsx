import { services } from "@/data/data";
import { Lable, ServiceCard } from "../component/card";

const Services= () =>{
    return(
       <main className="py-20">
         <div className="w-11/12 h-[80vh] mx-auto relative">
                <img className='h-full w-full' src="/slider/slide-3.jpg" alt="" />
            </div>
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
export default Services;
