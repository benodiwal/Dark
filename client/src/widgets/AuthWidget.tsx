import { RxCross2 } from "react-icons/rx";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setLogin } from "../features/auth";
import { z, ZodError } from "zod";
import { twMerge as tw } from "tailwind-merge";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";

interface AuthWidgetProps {
    variant: "LOGIN" | "SIGNUP";
    setWidgetVisible: React.Dispatch<React.SetStateAction<boolean>>;
    setVariant: React.Dispatch<React.SetStateAction<"LOGIN" | "SIGNUP">>;
}

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string(),
});

const registerSchema = z.object({
    username: z.string(),
    email: z.string().email(),
    password: z.string(),
});

const AuthWidget = ({ variant, setWidgetVisible, setVariant }: AuthWidgetProps) => {
    
    const [data, setData] = useState({ email: "", password: "", username: "" });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = async () => {
        const validatedData = registerSchema.parse(data);
        try {
            await fetch("http://localhost:3001/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(validatedData)
            });
            handleLogin();
        } catch (error) {
            if (error instanceof ZodError) {
                console.log(error.errors);
              } else {
                console.log(error);
              }
        }
    }

    const handleLogin = async () => {
            try {
                const validatedData = loginSchema.parse(data);
                const response = await fetch("http://localhost:3001/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(validatedData),
                });

                const responseData = await response.json();
                console.log(responseData);
                
                if (responseData) {
                    setData(prevData => ({...prevData, email: "", password: "", username: ""}));
                    
                    dispatch(
                        setLogin({
                            user: responseData.user,
                            token: responseData.token,
                        })
                   );
                   
                   localStorage.setItem("token", responseData.token);
                }

                navigate("/");

            } catch (error) {
                if (error instanceof ZodError) {
                    console.log(error.errors);
                  } else {
                    console.log(error);
                  }
            }
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (variant == "LOGIN") {
            handleLogin();
        } else {
            handleRegister();
        }
    }

    const handleAccessToken = async (accessToken: string) => {
        try {
            const resposne = await fetch("http://localhost:3001/auth/google/callback", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ accessToken })
            });
            return resposne.json();
        } catch (error) {
            console.error("Error fetching from the server: ", error);
        }
    }

    const loginWithGoogle = useGoogleLogin({
        onSuccess: async (response) =>  {
            console.log(response.access_token);
            const data = await handleAccessToken(response.access_token);

            if (data) {
                dispatch(setLogin({
                    user: data.user,
                    token: data.token,
                }))

                navigate("/");
            }

        },
        onError: (error) => {
            console.error("Google login error: ", error);
        }
    });

  return (
    <div className="relative w-[600px] h-[650px] bg-white rounded-md">
        <div 
        onClick={() => setWidgetVisible(false)}
        className="absolute top-2 right-2 cursor-pointer">
            <RxCross2 className="text-[30px]"/>
        </div>
        <div className="flex flex-col mt-10 items-center">
            {
                variant == "LOGIN" ? (
                    <h1 className="text-[40px]">
                        LOGIN
                    </h1>
                ) : (
                    <h1 className="text-[40px]">
                        SIGNUP
                    </h1>
                )
            }
            
            <button 
            onClick={() => loginWithGoogle()}
            className="hover:bg-gray-300/40 transition duration-10 cursor-pointer flex items-center gap-x-2 mt-6 border-2 border-gray-300 border-solid px-10 py-1 rounded-md text-black/70">
                <FcGoogle className="text-[30px]"/>
                Continue with Google
            </button>
            
            <div className="flex items-center gap-x-2 mt-6 w-full justify-center">
                <div className="h-[2px] bg-black/40 w-[200px]"></div>
                <p className="text-black/40">OR</p>
                <div className="h-[2px] bg-black/40 w-[200px]"></div>
            </div>
            
            <form
            onSubmit={handleSubmit}
            >
                <div className={tw("flex flex-col items-center gap-y-4 mt-10", variant == "SIGNUP" && "mt-3")}>
                {
                    variant == "SIGNUP" && (
                        <input 
                        value={data.username}
                        onChange={(e) => setData(prevData => ({...prevData, username: e.target.value}))}
                        type="text" 
                        className="w-[300px] h-[70px] bg-black/10 rounded-lg text-black p-4 text-lg" placeholder="Username"/>
                    )
                }
                <input 
                value={data.email}
                onChange={(e) => setData(prevData => ({ ...prevData, email: e.target.value }))}
                type="email" className="w-[300px] h-[70px] bg-black/10 rounded-lg text-black p-4 text-lg" placeholder="Email"/>
                <input 
                value={data.password}
                onChange={(e) => setData(prevData => ({...prevData, password: e.target.value }))}
                type="password" 
                className="w-[300px] h-[70px] bg-black/10 rounded-lg text-black p-4 text-lg" placeholder="Password"/>
                </div>

            {
                variant == "LOGIN" ? (
                <div className="w-full flex items-center justify-center mt-10 gap-x-2 mr-20">
                <p className="text-sm">New to Dark?</p>
                <p 
                onClick={() => setVariant("SIGNUP")}
                className="text-sm text-blue-600 font-bold cursor-pointer">
                    SignUp
                </p>
                </div>
                ) : (
                <div className="w-full flex items-center justify-center mt-10 gap-x-2 mr-20">
                <p className="text-sm">Already on Dark?</p>
                <p 
                onClick={() => setVariant("LOGIN")}
                className="text-sm text-blue-600 font-bold cursor-pointer">
                    Login
                </p>
               </div>
                )
            }
 
            <button 
            type="submit"
            className="hover:bg-blue-600/90 transition duration-150 text-white text-[20px] w-[300px] h-[60px] bg-blue-600 rounded-lg mt-10">
                {
                    variant == "LOGIN" ? "Login" : "Continue"
                }
            </button>

            </form>

        </div>
    </div>
  )
}

export default AuthWidget
