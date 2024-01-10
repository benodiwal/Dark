import { MdOutlineAddAPhoto } from "react-icons/md"
import { RiTShirtLine } from "react-icons/ri"
import { BsPlusLg } from "react-icons/bs"

const UserWidget = () => {
  return (
    <div className="bg-black/90 rounded-md border-white/20 w-[300px] border-[1px] mt-10 py-2">
      
      <div className="relative">
        <img src="/communitopia.jpg" alt="avatar" className="w-full h-[115px] rounded-tr-md rounded-tl-md"/>
        <MdOutlineAddAPhoto 
        onClick={() => alert("ok")}
        className="text-white/90 absolute bottom-1 right-1 bg-black/20 rounded-full p-1 text-[35px] hover:bg-black/50"/>
      </div>

      <div className="flex flex-col mt-2">
        <p className="text-white text-[23px] font-semibold text-center">warriyohyperion</p>
        <p className="text-white/40 text-center">u/warriyohyperion 2m</p>
      </div>

      <div className="w-full px-7 flex items-center justify-center mt-4">
        <button className="text-white bg-gradient-to-r from-red-600 to-orange-500 rounded-full px-4 py-1 w-full font-semibold hover:opacity-90 flex items-center gap-10">
          <RiTShirtLine className="text-white"/>
          Style Avatar
        </button>
      </div>

      <div className="w-full px-3 py-1 mt-2">
        <div className="grid grid-cols-2 text-white font-semibold text-[13px] px-2">
          <p>Karma</p>
          <p>Cake day</p>
        </div>
        <div className="grid grid-cols-2 text-white/40 font-semibold text-[13px] px-2">
          <p>1</p>
          <p>April 1, 2023</p>
        </div>
      </div>

      <div className="flex items-center justify-start px-4 py-1 mt-2">
        <div className="flex items-center gap-1 mt-1 px-3 rounded-full py-2 bg-white/20 cursor-pointer">
        <BsPlusLg className="text-white"/>
        <p className="text-white text-[14px] font-semibold">Add social link</p> 
        </div>       
      </div>

      <div className="w-full px-7 flex items-center justify-center mt-1">
        <button className="text-black bg-white rounded-full px-4 py-1 w-full font-semibold hover:opacity-90 flex items-center justify-center text-[14px]">
          New Post
        </button>
      </div>

      <div className="flex items-center justify-end px-4 mt-1">
        <div className="flex items-center gap-1 mt-1 px-3 rounded-full py-1 hover:bg-white/20 cursor-pointer">
        <p className="text-white">More options</p> 
        </div>       
      </div>

    </div>
  )
}

export default UserWidget
