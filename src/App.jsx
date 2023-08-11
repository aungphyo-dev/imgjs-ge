import {BsSearch} from "react-icons/bs";
import {useEffect, useState} from "react";
import {useGetImagesMutation} from "./services/api.js";
import Image from "./components/Image.jsx";
import Loading from "./components/Loading.jsx";

const App = () => {
    const [search,setSearch] = useState('rose')
    const [getImage,{data,isLoading}] = useGetImagesMutation()
    useEffect(() => {
        getImage(search);
    }, []);
    const submit = (e) => {
        e.preventDefault();
        getImage(search);
    }
    if (!isLoading){
        console.log(data?.results)
    }
  return(
      <section className="w-full min-h-screen flex flex-col justify-center items-center">
              <div className='w-full  flex flex-col justify-center items-center bg-gray-200 bg-info'>
                  <div className='w-full flex justify-end items-center pe-5'>
                      <a target={"_blank"} href="">Github</a>
                      <a target={"_blank"} href="">Unsplash</a>
                  </div>
                  <form onSubmit={submit}  className='container mx-auto px-5 py-16 lg:px-64'>
                      <div className='mb-3'>
                          <h1 className='font-acme text-4xl text-gray-100 font-semibold mb-5'>Unsplash</h1>
                          <p className='text-[18px] leading-[28.8px] text-gray-200 font-achra'>
                              The internet’s source for visuals. <br/>
                              Powered by creators everywhere.
                          </p>
                      </div>
                      <div className="w-full flex justify-center items-center relative">
                          <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='Search high-resolution images' className='w-full px-6 py-4 bg-[#F5F5F5] border-none outline-none placeholder:text-gray-400'/>
                          <button className='absolute right-0 px-4'>
                              <BsSearch className='text-[20px] pointer-events-none'/>
                          </button>
                      </div>
                  </form>
              </div>
          { isLoading && <Loading/>  }
          {data?.results.length === 0 ? <Loading/> :<div className="min-h-screen container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 py-14 px-4">
              {
                  data?.results.map(image => <Image key={image?.id} image={image}/>)
              }
          </div>}
      </section>
  )
}
export default App