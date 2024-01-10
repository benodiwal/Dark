import { TfiGallery } from "react-icons/tfi"
import { useNavigate } from "react-router-dom"
import { BiLink } from "react-icons/bi"

const CreatePost = () => {

    const navigate = useNavigate();

  return (
    <div className="h-[60px] w-[600px] bg-black/90 rounded-md border-[1px] border-white/20 px-2 py-1 flex items-center gap-2">
        <img 
        onClick={() => navigate("/user/sachin/")}
        src="/communitopia.jpg" alt="avatar" className="w-[40px] h-[40px] rounded-full cursor-pointer"/>
        <input 
        onFocus={() => navigate("/submit")}
        type="text" 
        placeholder="Create Post" 
        className="px-3 py-1 text-[16px] rounded-md flex-1 bg-neutral-700/40 text-white outline-[0px] border-white/20 border-[1px] hover:border-white hover:border-1"/>
        <TfiGallery className="text-white/40 text-[35px] p-1 hover:bg-neutral-400/20 cursor-pointer"/>
        <BiLink className="text-white/40 text-[35px] p-1 hover:bg-neutral-400/20 cursor-pointer"/>
    </div>
  )
}

export default CreatePost
