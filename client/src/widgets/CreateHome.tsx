import { useNavigate } from "react-router-dom"

const CreateHome = () => {

    const navigate = useNavigate();

  return (
    <div className="w-[240px] h-[270px] rounded-md bg-black/90 border-white/20 border-[1px]">
      
      <div className="flex items-center px-1">
      <img src="/hello.jpg" alt="hello" className="w-[130px] h-[130px]"/>
      <p className="text-white px-2 py-1 font-bold text-[26px]">Home</p>
      </div>
    
      <p className="text-white px-2 -mt-3 text-[14px]">
        Come here to check in with your favorite communities.
      </p>

      <div className="mx-2 bg-white/30 h-[1px] mt-2"/>

      <div className="flex flex-col gap-2 items-center mt-3">
        <button
        onClick={() => navigate("/submit")}
        className="text-black bg-white text-center py-[1px] w-[220px] rounded-full mx-auto hover:bg-opacity-80"
        >
            Create Post
        </button>
        <button
        className="bg-black border-[2px] border-white text-white text-center py-[1px] w-[220px] rounded-full mx-auto hover:bg-opacity-80"
        >
            Create Community
        </button>
      </div>

    </div>
  )
}

export default CreateHome
