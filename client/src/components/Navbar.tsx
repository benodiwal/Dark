import { AiFillHome } from "react-icons/ai"
import { MdChatBubble, MdOutlineKeyboardArrowDown } from "react-icons/md"
import { BsSearch } from "react-icons/bs"
import { useState } from "react"
import { BsArrowUpRightCircle } from "react-icons/bs"
import  {FaCoins } from "react-icons/fa"
import { RiNotification2Fill } from "react-icons/ri"
import { AiOutlinePlus } from "react-icons/ai"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"
import { toggle } from "../features/dropdown";
import { useDispatch } from "react-redux"

const Navbar = () => {

    const navigate = useNavigate();
    const [searchBarFocused, setSearchBarFocused] = useState(false);
    const IconsStyle = "text-white text-[30px] hover:bg-neutral-600/80 p-1 cursor-pointer";
    const user = useSelector((state: any) => state.user.user);    
    const dispatch = useDispatch();

  return (
    <div className="sticky flex py-1 px-2 top-0 h-[50px] bg-black w-full items-center gap-2 left-0 right-0 z-10">      
      <div 
      onClick={() => navigate("/")}
      className="flex items-center gap-2 cursor-pointer">
        <img src="/communitopia.jpg" alt="logo" className="w-[40px] h-[40px] rounded-full"/>
        <p className="text-white font-bold text-[22px]">Dark</p>
      </div>

      <div>
        <div className="w-[200px] text-[17px] flex items-center justify-between bg-black/90 text-white hover:border-[1px] hover:border-white/40 rounded-md px-1 py-1 mx-2 cursor-pointer">
            <div className="flex items-center gap-1">
            <AiFillHome />
            Home
            </div>
            <MdOutlineKeyboardArrowDown />
        </div>
      </div>

      <div className={`flex items-center rounded-full bg-neutral-700/40 py-1 px-4 hover:border-[1px] hover:border-white/80 justify-between gap-2 text-[17px] flex-1 ${searchBarFocused && "border-[1px] border-white/80"}`}>
        <BsSearch className="text-white"/>
        <input 
        onFocus={() => setSearchBarFocused(true)}
        type="text" 
        placeholder="Search..." 
        className="flex-1 bg-neutral-700/0 outline-none text-white"/>
      </div>

      <div className="flex items-center gap-[2px]">
        <BsArrowUpRightCircle className={IconsStyle}/>
        <FaCoins className={IconsStyle}/>
        <div className="bg-white/40 w-[1px] h-[30px] mx-1"/>
        <MdChatBubble className={IconsStyle}/>
        <RiNotification2Fill className={IconsStyle}/>
        <AiOutlinePlus className={IconsStyle}/>
      </div>

      <div>
      <div className="w-[200px] flex items-center justify-between bg-black/90 text-white hover:border-[1px] hover:border-white/40 rounded-md px-1 py-[1px] mx-2 cursor-pointer">
      
      <div 
      onClick={() => {
        dispatch(
          toggle({})
        );
      }}
      className="flex items-center gap-2">
      <img src="/communitopia.jpg" alt="logo" className="w-[36px] h-[36px] rounded-full" />    
      <div>
        <p className="text-[13px]">{user && user.username}</p>
        <p className="text-[10px]">1 Karma</p>
      </div>
      </div>
      <MdOutlineKeyboardArrowDown />
      </div>
      </div>

    </div>
  )
}

export default Navbar
