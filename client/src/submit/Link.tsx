import { useState } from "react"

const Link = () => {

    const [focus, setFocus] = useState(false);
    const [drafts, setDrafts] = useState("");

  return (
    <div className="w-full py-2 px-3">
    <input 
    type="text" 
    placeholder="Title" 
    onFocus={() => setFocus(true)}
    className={`outline-none text-white/80 border-[1px] border-white/20 bg-black/0 px-3 py-1 mt-2 rounded-md hover:border-[1px] hover:border-white/80 w-full ${focus && "border-white/80 border-[1px]"}`}/>

    <div className="w-full my-2 rounded-md border-[1px] border-white/20">
      <div></div>
      <textarea 
      value={drafts}
      onChange={(e) => setDrafts(e.target.value)}
      placeholder="Url"
      className="bg-black/0 w-full text-white/70 outline-none px-2 py-2"/>
    </div>


    <div className="w-full flex items-center justify-end px-2 py-1 gap-2">
      <button 
      disabled={!drafts}
      className="bg-black/0 text-white/90 border-[2px] border-white/90 px-2 py-1 rounded-full disabled:text-gray-400/80 disabled:border-gray-400/80 disabled:cursor-not-allowed">
          Save Draft
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

export default Link
