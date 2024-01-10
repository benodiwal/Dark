import DropDown from "../components/DropDown"
import CreateHome from "../widgets/CreateHome"
import CreatePost from "../widgets/CreatePost"
import Posts from "../widgets/Posts"

const Home = () => {

  return (
    <div className="flex gap-4">
      
      <div 
      className="flex flex-col">
      <CreatePost />
      <Posts/>
      </div>

      <div>
        <CreateHome />
      </div>

      <div className="absolute top-[50px]  right-[10px] mx-auto">
        <DropDown />
      </div>

    </div>
  )
}

export default Home
