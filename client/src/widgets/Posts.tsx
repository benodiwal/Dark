import { IoRocketOutline } from "react-icons/io5"
import { BsCupHot } from "react-icons/bs"
import { WiMoonNew } from "react-icons/wi"
import { GoGraph } from "react-icons/go"
import { MdMoreHoriz } from "react-icons/md"
import PostWidget from "./PostWidget"

const Posts = () => {

  const logoStyles = "flex items-center  hover:bg-neutral-400/20 px-2 rounded-2xl py-1 cursor-pointer";
 
  return (
    <div 
    className="mt-3 gap-3 flex flex-col">
      
      <div className="h-[60px] w-[600px] bg-black/90 rounded-md border-[1px] border-white/20 px-2 py-1 flex items-center gap-2">
        
        <div className={logoStyles}>
        <IoRocketOutline className="text-white text-[30px] px-1"/>
        <p className="text-white text-[16px]">Best</p>
        </div>

        <div className={logoStyles}>
        <BsCupHot className="text-white text-[30px] px-1"/>
        <p className="text-white text-[16px]">Hot</p>
        </div>

        <div className={logoStyles}>
        <WiMoonNew className="text-white text-[30px] px-1"/>
        <p className="text-white text-[16px]">New</p>
        </div>

        <div className={logoStyles}>
        <GoGraph className="text-white text-[30px] px-1"/>
        <p className="text-white text-[16px]">Top</p>
        </div>

        <div className={logoStyles}>
        <MdMoreHoriz className="text-white text-[30px] px-1"/>
        </div>
      
      </div>

      {/* Posts */}
      <div className="gap-3 flex flex-col items-center pb-10">
        <PostWidget />
        <PostWidget />
        <PostWidget />
      </div>

    </div>
  )
}

export default Posts
