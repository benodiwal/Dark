import React from "react";

interface LoginWidgetProps {
  setWidgetVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setVariant: React.Dispatch<React.SetStateAction<"LOGIN" | "SIGNUP">>;
}

const LoginWidget = ({ setWidgetVisible, setVariant }: LoginWidgetProps ) => {
  return (
    <div className="w-[300px] bg-black/90 rounded-md border-white/20 border-[1px] py-4">
     
      <div>
        <img src="/hello.jpg" alt="hello" className="w-full h-[300px]"/>
      </div>

      <div className="px-1 py-1 gap-3 flex flex-col">
        <p className="text-white/80">
            Create an account to follow your favorite communities and start taking part in conversations.
        </p>

        <button 
        onClick={() => {
          setVariant("SIGNUP");
          setWidgetVisible(true)
         }
       }
        className="w-full bg-white font-semibold rounded-full py-1 hover:bg-opacity-80">
            Join Dark
        </button>

      </div>

      <div className="w-full h-[2px] bg-white/20 my-2"/>

      <div className="px-1 py-1 gap-3 flex flex-col">
        <p className="text-white/80 text-center">
           Already on Dark
        </p>

        <button 
        onClick={() => {
          setVariant("LOGIN");
          setWidgetVisible(true)
         }
       }
        className="w-full bg-white font-semibold rounded-full py-1 hover:bg-opacity-80">
            Login
        </button>

      </div>

    </div>
  )
}

export default LoginWidget
