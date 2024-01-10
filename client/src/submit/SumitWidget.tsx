import { BsFillFilePostFill } from "react-icons/bs"
import { FaRegImage } from "react-icons/fa"
import { BiPoll } from "react-icons/bi"
import { BiLink } from "react-icons/bi"
import { useState } from "react"
import Post from "./Post"
import Image from "./Image"
import Link from "./Link"
import Poll from "./Poll"

type option = "post" | "image" | "link" | "poll"

const SumitWidget = () => {

  const [option, setOption] = useState<option>("post");

  const handleClick = (option: option) => {
    setOption(option)
  }

  return (
    <div className="w-screen overflow-x-hidden flex justify-center gap-3">
      
      <div className="flex flex-col w-[800px] px-10 items-center gap-2">
      
      <div className="flex items-center justify-between w-full py-2 px-2">
        <p className="text-white text-[18px] font-semibold">
          Create a post
        </p>
        <p className="text-white px-2 py-1 text-[13px] rounded-full hover:bg-white/20 cursor-pointer">
          Drafts 0
        </p>
      </div>

      <div className="h-[1px] w-full bg-white/20"/>

      <div>

      </div>

      <div className="w-full border-[1px] border-white/20 rounded-md">
        
        <div className="grid items-center grid-cols-4 border-white/20 border-b-[1px]">
          
          <div 
          onClick={() => handleClick("post")}
          className={`text-white/40 flex items-center gap-2 justify-center hover:bg-white/20 py-2 border-r-[1px] border-white/20 cursor-pointer ${option === "post" && "border-b-[3px] border-b-white/100 text-white/90"}`}>
            <BsFillFilePostFill />
            <p>Post</p>
          </div>

          <div 
          onClick={() => handleClick("image")}
          className={`text-white/40 flex items-center gap-2 justify-center hover:bg-white/20 py-2 border-r-[1px] border-l-[1px] border-white/20 cursor-pointer ${option === "image" && "border-b-[3px] border-b-white/100 text-white/90"}`}>
            <FaRegImage />
            <p>Image & Video</p>
          </div>

          <div 
          onClick={() => handleClick("link")}
          className={`text-white/40 flex items-center gap-2 justify-center hover:bg-white/20 py-2 border-r-[1px] border-l-[1px] border-white/20 cursor-pointer ${option === "link" && "border-b-[3px] border-b-white/100 text-white/90"}`}>
            <BiLink />
            <p>Link</p>
          </div>

          <div 
          onClick={() => handleClick("poll")}
          className={`text-white/40 flex items-center gap-2 justify-center hover:bg-white/20 py-2 border-l-[1px] border-white/20 cursor-pointer ${option === "poll" && "border-b-[3px] border-b-white/100 text-white/90"}`}>
            <BiPoll />
            <p>Poll</p>
          </div>

        </div>
        
        <div>
          {
            option === "post" && (
              <div className="text-white">
                <Post />
              </div>
            )
          }
          {
            option === "image" && (
              <div className="text-white">
                <Image />
              </div>
            )
          }
          {
            option === "link" && (
              <div className="text-white">
                <Link />
              </div>
            )
          }
          {
            option === "poll" && (
              <div className="text-white">
                <Poll />
              </div>
            )
          }
        </div>

      </div>

      </div>

      <div className="w-[300px] h-[270px] bg-black/90 border-white/20 border-[1px] rounded-md px-2">
        
        <div className="flex items-center gap-3 px-2 py-2">
          <img src="/dark.jpg" alt="logo" className="w-[50px] h-[50px] " />
          <p className="text-white/90 font-semibold">Posting to Dark</p>
        </div>

        <div className="h-[1px] w-full bg-white/20"/>

        <div className="flex flex-col gap-2">
          
          <p className="text-white/90 mt-2 text-[13px] font-semibold">1. Remember the human</p>
          <div className="h-[1px] w-full bg-white/20"/>

          <p className="text-white/90 text-[13px] font-semibold">2. Behave like you would in real life</p>
          <div className="h-[1px] w-full bg-white/20"/>

          <p className="text-white/90 text-[13px] font-semibold">3. Look for the original source of the content</p>
          <div className="h-[1px] w-full bg-white/20"/>

          <p className="text-white/90 text-[13px] font-semibold">4. Search for the duplicates before posting</p>
          <div className="h-[1px] w-full bg-white/20"/>

          <p className="text-white/90 text-[13px] font-semibold">5. Read the comminity's rules</p>
          <div className="h-[1px] w-full bg-white/20"/>

        </div>

      </div>
 
    </div>
  )
}

export default SumitWidget
