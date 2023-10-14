import { travelArticles } from "@/data/data"

export const dynamicParams = 'false' ;
export async function generateStaticParams() {
    const blogsKeys = []
    for (let i = 0 ; i < travelArticles.length ; i ++){
        blogsKeys.push({blog:`${i}`})
  }
  return blogsKeys
}

export default async function blogDetails({params})  {
    const blog = travelArticles[params.blog];
   
  return (
    <>
    <main className="py-24">
        <section className={`flex sm:flex-row flex-col-reverse w-11/12 xl:w-5/6 justify-between mx-auto `}>
        <div className="paragraph text-end sm:w-[50%]">
            <h1 className="text-xl pb-8">{blog.title}</h1>
            <p>{blog.description}</p>
            <div className="">
            {blog.content.map((content, index) => (
                <div key={index} className="py-4">
                <div className="flex items-center justify-end mb-2">
                <h2 className="text-lg ">{content.subtitle}</h2>
                </div>
                <p className="text-sm">{content.content}</p>
                </div>
            ))}
            </div>
        </div>
       <div className="sm:w-[40%] sm:pb-0 pb-8">
       <div className="wrapper relative">
            <img src={blog.image} alt={blog.title} className="h-[80vh] w-full"/>
        </div>
       </div>
        </section>
    </main>
    </>
  );
};
