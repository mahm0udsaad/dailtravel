import { programs } from "@/data/data";
import Programs from "../component/programsGrid";

const ProgramsPage= () =>{
    return(
        <main>
              <div className="sm:w-5/6 h-screen mx-auto relative">
                <img className='h-full w-full' src="/slide-3.jpg" alt="" />
            </div>
            <section>
            <Programs programs={programs} title={"الوجهات السياحيه"}/>
            </section>
        </main>
    )
}
export default ProgramsPage;
