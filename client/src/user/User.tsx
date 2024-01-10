import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom";
import UserWidget from "./UserWidget";

const NavbarItems = [
  {
    title: "OVERVIEW",
    href: ""
  },
  {
    title: "POSTS",
    href: "submitted"
  },
  {
    title: "COMMENTS",
    href: "comments"
  },
  {
    title: "HISTORY",
    href: "history"
  },
  {
    title: "SAVED",
    href: "saved"
  },
  {
    title: "HIDDEN",
    href: "hidden"
  },
  {
    title: "UPVOTED",
    href: "upvoted"
  },
  {
    title: "DOWNVOTED",
    href: "downvoted"
  },
  {
    title: "AWARDS RECEIVED",
    href: "glided"
  },
  {
    title: "AWARDS GIVEN",
    href: "glided/given"
  }
]

const User = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const url = location.pathname;
  console.log(url);
  

  return (
    <div className="w-screen h-overflow-x-hidden">
      
      <div className="w-full bg-black/90 h-[35px] -mt-3 flex items-center gap-4 justify-center pt-2">
        {
          NavbarItems.map((item, index) => (
            <div
            key={index}
            onClick={() => navigate(`/user/sachin/${item.href}`)}
            className={`text-white text-[14px] font-semibold h-full cursor-pointer
             ${url === `/user/sachin/${item.href}` && "border-b-[2.2px] border-b-white"}`}>
              {item.title}
            </div>
          ))
        }
      </div>

      <div className="flex justify-center">
        <UserWidget />
      </div>

    </div>
  )
}

export default User
