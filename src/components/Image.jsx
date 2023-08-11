import {BsArrowDownSquareFill} from "react-icons/bs";
import {FaEye} from "react-icons/fa6";

const Image = ({image}) => {
  return(
      <div className='relative w-full h-[400px]  rounded-xl overflow-hidden group'>
          <img className='block w-full h-full object-cover rounded-xl group-hover:brightness-50 group-hover:scale-105 transition duration-500' src={image?.urls.small} alt={image?.alt_description}/>
          <div className='absolute inset-0 flex flex-col'>
              <div className="mb-auto w-full flex justify-end items-center px-5 py-4">
                  <a target={"_blank"} href={image?.urls.full} className='hidden group-hover:block'>
                      <FaEye className='text-3xl text-gray-50'/>
                  </a>
              </div>
                <div className='w-full mt-auto px-5 py-4 hidden group-hover:block'>
                    <div className="flex justify-between items-center">
                        <div className="w-full flex justify-start items-center gap-x-2">
                            <img  className='block w-[46px] h-[46px]  rounded-full' src={image?.user.profile_image.medium} alt='asdf'/>
                            <div className="flex flex-col">
                                <h1 className='text-sm font-semibold font-poppins text-gray-50'>{image?.user.name}</h1>
                                <p className='text-xs font-poppins text-gray-100'>Waka waka</p>
                            </div>
                        </div>
                        <div>
                            <a href={image?.urls.full} download>
                                <BsArrowDownSquareFill className='text-3xl text-gray-100'/>
                            </a>
                        </div>
                    </div>
                </div>
          </div>
      </div>
  )
}
export default Image