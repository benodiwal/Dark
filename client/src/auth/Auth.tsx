import { useState } from "react"
import Posts from "../widgets/Posts"
import LoginWidget from "./LoginWidget"
import AuthWidget from "../widgets/AuthWidget";

const Auth = () => {

  const [widgetVisible, setWidgetVisible] = useState<boolean>(false);
  const [variant, setVariant] = useState<"LOGIN" | "SIGNUP">("LOGIN");

  return (
    <div>
      {
        widgetVisible && (
          <div className="flex h-[100vh] w-[100vw] items-center justify-center bg-black/40 z-50 fixed top-0 left-0 right-0">
            <AuthWidget setWidgetVisible={setWidgetVisible} variant={variant} setVariant={setVariant}/>
          </div>
        )
      }
    <div className="flex gap-20">
      
      <div className="mt-4">
        <LoginWidget 
        setVariant={setVariant}
        setWidgetVisible={setWidgetVisible}/>
      </div>

      <div className="flex flex-col">
        <Posts/>
      </div>

    </div>
    </div>
  )

}

export default Auth
