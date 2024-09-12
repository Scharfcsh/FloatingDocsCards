import React from 'react'
import { motion } from "framer-motion"
import { FaFileLines } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
function Card({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.1 }} dragElastic={0.5} dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }} className="relative flex-shrink-0 w-60 h-72 rounded-[20px] bg-neutral-700 text-white py-8 px-4 overflow-hidden">
        {/* <FaFileLines /> */}
        <p className='text-sm mt-5 font-semibold'>{data.desc}</p>
        <div className='footer absolute bottom-0  w-full   left-0'>
            <div className='flex items-center justify-between py-3 px-7 bottom-5'>
                <h5>{data.filesize}</h5>
                <span className='w-6 h-6 bg-sky-900 rounded-full flex items-center justify-center'>
                    {data.close? <IoMdCloseCircle />: <FaDownload />}
                </span>
            </div>
            {
                data.tag.isopen && (

                    <div className={`tag w-full py-4 ${data.tag.tagcolor=== "blue" ? "bg-[#05465C]":"bg-[#055C41]"} flex item-center justify-center`}>
                        <h3 className='text-md font-semibold'>{data.tag.tagtitle}</h3>
                    </div>
                )
            }
        </div>
    </motion.div>
  )
}

export default Card