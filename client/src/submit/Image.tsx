import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Image = () => {

    const [focus, setFocus] = useState(false);
    const navigate = useNavigate();

  return (
    <div className="w-full py-2 px-3">
    <input 
    type="text" 
    placeholder="Title" 
    onFocus={() => setFocus(true)}
    className={`outline-none text-white/80 border-[1px] border-white/20 bg-black/0 px-3 py-1 mt-2 rounded-md hover:border-[1px] hover:border-white/80 w-full ${focus && "border-white/80 border-[1px]"}`}/>

    <div className="w-full my-2 rounded-md border-[1px] border-white/20 border-dashed h-[300px] flex items-center justify-center">
        Drag and drop image or  
        <button 
        className="ml-2 px-2 py-1 rounded-full border-white/80 border-[2px] hover:opacity-80">
            Upload
        </button>
    </div>

    <div className="w-full flex items-center justify-end px-2 py-1 gap-2">
      <button
      onClick={() => navigate("/")} 
      className="bg-black/0 text-white/90 border-[2px] border-white/90 px-2 py-1 rounded-full hover:opacity-80">
          Cancel
      </button>
      <button
      disabled={true}
      className="bg-white/90 text-black/90 px-3 py-1 rounded-full disabled:cursor-not-allowed">
          Post
      </button>
    </div>

  </div>
  )
}

export default Image
