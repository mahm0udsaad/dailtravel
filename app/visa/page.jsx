const { visaRequirements } = require("@/data/data")
const { VisaCard, Lable } = require("../component/card")

const Visa = () =>{
    return (
        <section className="w-11/12 pt-20">
        <Lable title={"التأشيرات"}/>
        <div className="shop mx-auto sm:px-0 px-4 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-4 container pt-8 h-fit">
        {visaRequirements.map((program , i) => <VisaCard key={i} product={program} i={i} />)}
        </div>
      </section>
    )
}
export default Visa ;