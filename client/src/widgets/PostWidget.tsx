import { TfiComment } from "react-icons/tfi"
import { BsGift } from "react-icons/bs"
import { TfiShare } from "react-icons/tfi"
import { FiBookmark } from "react-icons/fi"
import { MdMoreHoriz } from "react-icons/md"
import { useRef, useEffect, useState } from  "react"
import { BiUpvote } from "react-icons/bi"
import { BiDownvote } from "react-icons/bi"

const PostWidget = () => {

  const postRef = useRef(null);
  const videoRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    
    const options = {
      threshold: 0.8,
    }
  
    const handleIntersection = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setIsActive(true);
          videoRef.current?.play();
        } else {
          setIsActive(false);
          videoRef.current?.pause();
        }
      });
    }
  
    const observer = new IntersectionObserver(handleIntersection, options);
  
    if (postRef.current) {
      observer.observe(postRef.current);
    }

    return () => {
      if (postRef.current) {
        observer.unobserve(postRef.current);
      }
    };

  }, []);

  return (
    <div
    ref={postRef}
     className="w-full rounded-md border-white/20 border-[1px] hover:border-white/70 bg-neutral-800/90 flex">
    
      <div className="h-full bg-neutral-900/0 w-[40px] rounded-tl-md rounded-bl-md flex flex-col gap-[2px] justify-start items-center py-2">
        <BiUpvote className="text-white/70 text-[28px] p-[2px] hover:bg-white/20 hover:text-red-500"/>
        <p className="text-white/80">100</p>
        <BiDownvote className="text-white/70 text-[28px] p-[2px] hover:bg-white/20 hover:text-green-500"/>
      </div>
      
      <div className="flex-1 rounded-tr-md rounded-br-md py-1 px-1">
        
        <div className="flex gap-1 items-center mb-1">
          <img src="/communitopia.jpg" alt="avatar" className="w-[22px] h-[22px] rounded-full"/>
          <p className="text-white font-semibold text-[14px]">r/fingMemes</p>
          <p className="text-neutral-400 text-[12px] pl-2">Posted by u/warriyohyperion</p>
          <p className="text-[12px] text-neutral-400 pl-1">12 hours ago</p>
        </div>
        
        <div className="flex items-center px-1 mb-1">
          <p className="text-white text-[18px] font-semibold">
            Mood now
          </p>
        </div>
        
        <div className="w-full bg-black h-[350px]">
          <video 
          src="/sample.mp4"
          ref={videoRef}
          autoPlay={isActive}
          controls={true}
          className="w-full h-full"
          >
          </video>
        </div>
        
        <div className="w-full flex items-center px-1 py-1">

          <div className="flex items-center gap-1 cursor-pointer hover:bg-neutral-700 py-1 px-2">
            <TfiComment className="text-white/40"/>
            <p className="text-white/40 text-[13px]">
              10 Comments
            </p>
          </div>

          <div className="flex items-center gap-1 cursor-pointer hover:bg-neutral-700 py-1 px-2">
            <BsGift className="text-white/40"/>
            <p className="text-white/40 text-[13px]">
              Awards
            </p>
          </div>

          <div className="flex items-center gap-1 cursor-pointer hover:bg-neutral-700 py-1 px-2">
            <TfiShare className="text-white/40"/>
            <p className="text-white/40 text-[13px]">
              Share
            </p>
          </div>

          <div className="flex items-center gap-1 cursor-pointer hover:bg-neutral-700 py-1 px-2">
            <FiBookmark className="text-white/40"/>
            <p className="text-white/40 text-[13px]">
              Save
            </p>
          </div>

          <MdMoreHoriz className="text-white/40 text-[27px] p-1 hover:bg-neutral-700 rounded-lg"/>

        </div>

      </div>

    </div>
  )
}

export default PostWidget
