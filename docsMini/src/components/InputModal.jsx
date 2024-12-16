import { useReducer, useRef, useState } from "react";
import { MdClose } from "react-icons/md";
import useSetCards from "../hooks/useSetCards";

const InputModal = ({onclose}) => {
  const modelref = useRef();
  const closeModel = (e) => {
    if (modelref.current === e.target) {
      onclose();
  }}
  const [Cardinfo, setCardinfo] = useState({
    name: "",
    profession: "",
    email: "",
    contactNo: "",
  });

  const handleChange = (e) => {
    setCardinfo({
      ...Cardinfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(Cardinfo); // You can handle the form submission as required
    useSetCards(Cardinfo);
    onclose();
  };

  return (
    <div ref={modelref} onClick={closeModel} className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center backdrop-blur-md">
      <div className="relative bg-slate-800/60 p-6 rounded-lg shadow-lg max-w-md w-full">
        <div className="absolute right-4 top-4 flex items-end justify-end">
          <MdClose onClick={onclose} className="text-2xl text-white cursor-pointer"/>
        </div>
        <h2 className="text-2xl font-bold mb-4 text-white">Enter Details</h2>
        <form onSubmit={handleSubmit} className="space-y-4 text-white">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={Cardinfo.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full border bg-transparent  rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
            />
          </div>

          <div>
            <label htmlFor="profession" className="block text-sm font-medium">
              Profession
            </label>
            <input
              type="text"
              id="profession"
              name="profession"
              value={Cardinfo.profession}
              onChange={handleChange}
              required
              className="mt-1 block w-full border bg-transparent  rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={Cardinfo.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full border bg-transparent  rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
            />
          </div>

          <div>
            <label htmlFor="contactNo" className="block text-sm font-medium">
              Contact No
            </label>
            <input
              type="tel"
              id="contactNo"
              name="contactNo"
              value={Cardinfo.contactNo}
              onChange={handleChange}
              required
              className="mt-1 block w-full border bg-transparent  rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors"
          >
            ADD
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputModal;
