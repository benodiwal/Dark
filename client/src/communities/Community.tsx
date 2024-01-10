import CreatePost from "../widgets/CreatePost"
import Posts from "../widgets/Posts"
import AboutCommunity from "./AboutCommunity"

const Community = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden">

      <div className="w-full bg-neutral-800/60 h-[310px] flex flex-col gap-2">

        <img src="/communitopia.jpg" alt="image" className="w-full h-[200px]"/>

        <div className="flex items-center gap-3 ml-[200px]">
        
        <img src="/hello.jpg" alt="avatar" className="w-[72px] h-[72px] rounded-full border-[4px]"/>

        <div>
          <p className="text-white font-bold text-[29px]">ZaidZIZ</p>
          <p className="text-white/50">r/zaidZIZ</p>
        </div>

        <button className="mx-2 text-white border-white border-[1px] rounded-full px-3 py-1 -mt-6 font-semibold">
          Join
        </button>

        </div>
        
      </div>

      <div className="w-full flex gap-4 justify-center my-5 pb-10">
      
      <div className="flex flex-col items-center">
      <CreatePost />
      <Posts />
      </div>

      <AboutCommunity />

      </div>

    </div>
  )
}

export default Community
