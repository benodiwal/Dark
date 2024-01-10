import { FiMoreHorizontal } from "react-icons/fi"
import { MdDateRange } from "react-icons/md"
import { FiEdit2 } from "react-icons/fi"
import { RiArrowDropDownLine } from "react-icons/ri"
import { BsDot } from "react-icons/bs"

const AboutCommunity = () => {
  return (
    <div className="w-[320px] bg-black/90 border-[1px] border-white/20 rounded-md">
      
      <div className="flex items-center justify-between px-2 py-3">
        <p className="text-white/40">About Community</p>
        <FiMoreHorizontal className="text-white/40 text-[28px] p-1 hover:bg-white/20 rounded-md"/>
      </div>

      <p className="text-white/80 px-2 text-[16px] my-2">
      Yoooooo!!!! Welcome to a small community of Fing
      </p>

      <div className="flex items-center gap-2 text-white/70 px-2 text-[17px] py-1">
        <MdDateRange className="text-[30px] p-1"/>
        <p>
        Created Oct 1, 2021
        </p>
      </div>

      <div className="h-[2px] bg-white/20 mx-2"/>

      <div className="px-5 py-1">
        
        <div className="text-white/90 text-[17px] flex items-center gap-5">
          <p className="w-1/2">345k</p>
          <p className="w-1/2 flex items-center -ml-8">
            <BsDot className="text-green-700 text-[30px] font-bold"/>
            <span className="-ml-2">533875</span>
            </p>
        </div>

        <div className="text-white/40 text-[12px] flex items-center gap-5">
          <p className="w-1/2">Members</p>
          <p className="w-1/2">Online</p>
        </div>

      </div>

      <div className="h-[2px] bg-white/20 mx-2"/>

      <div className="flex items-center justify-between px-4 my-3">
        <button className="bg-white w-full rounded-full py-1 font-semibold hover:bg-white/80">
          Create Post
        </button>
      </div>

      <div className="h-[2px] bg-white/20 mx-2"/>

      <div className="flex flex-col gap-1 py-1">
        <div className="flex items-center justify-between px-4 py-1">
          <p className="text-white text-[12px]">PREVIEW</p>
          <FiEdit2 className="text-white text-[35px] px-2 py-1 hover:bg-white/20 rounded-xl"/>
        </div>

        <div className="flex items-center gap-2 pb-2 pt-1 px-3">
          <img src="/communitopia.jpg" alt="avatar" className="w-[30px] h-[30px] rounded-full"/>
          <p className="text-white text-[13px]">warriyohyperion</p>
        </div>
      </div>

      <div className="h-[2px] bg-white/20 mx-2"/>

      <div className="flex items-center px-5 py-3 justify-center">
         <div className="flex items-center justify-between gap-10 rounded-full hover:bg-white/20 px-5 py-1 cursor-pointer">
         <p className="text-white">
          Community Options
        </p>
        <RiArrowDropDownLine className="text-white text-[20px]"/>
         </div>       
      </div>

    </div>
  )
}

export default AboutCommunity
