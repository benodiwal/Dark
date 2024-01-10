import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { setLogout } from "../features/auth";

const DropDown = () => {

    const isVisible = useSelector((state: any) => state.dropDown.isVisible);
    const dispatch = useDispatch();

  return (
    <div 
    onClick={() => {
        dispatch(
            setLogout({})
        )
    }}
    className={`w-[190px] h-[45px] bg-black mt-[3px] mr-[3px] flex items-center justify-center cursor-pointer rounded-md ${!isVisible && "hidden"}`}>
        <p className="text-white hover:opacity-70">Logout !!</p>
    </div>
  )
}

export default DropDown
