import { FcPhone } from "react-icons/fc";
import { FcAddressBook } from "react-icons/fc";
import { FaUserCircle } from "react-icons/fa";
import { motion } from "framer-motion"
const Component = ({data, reference}) => {
    const getRandomColor = () => {
        const colors = [
          "bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500",
          "bg-purple-500", "bg-pink-500", "bg-indigo-500", "bg-teal-500",
          "bg-orange-500", "bg-gray-500"
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      };
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.1 }} dragElastic={0.5} dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }} className="relative w-full h-52 max-w-md bg-neutral-300 shadow rounded-lg overflow-hidden">
      <div className="flex flex-row items-center gap-4 p-4 border-b">
        <div className="w-20 h-20 rounded-full flex items-center justify-center">
          <FaUserCircle className={`${getRandomColor()} fill-neutral-300 font-bold w-full h-full rounded-full object-cover`}/>
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold">{data.name}</h2>
          <span className={`text-black font-semibold  py-1 rounded mt-1 `}>
            {data.profession}
          </span>
        </div>
      </div>
      <div className="p-4 space-y-4">
        <div className="flex items-center gap-2">
        <FcAddressBook className="h-5 w-5 text-gray-400"/>
          <span className="text-sm">{data.email}</span>
        </div>
        <div className="flex items-center gap-2">
          <FcPhone className="h-5 w-5 text-gray-400" />
          <span className="text-sm">{data.contactNo}</span>
        </div>
        
      </div>
    </motion.div>
  );
};

export default Component;
