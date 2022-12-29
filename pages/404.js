import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    const router=useRouter();
    useEffect(()=>{
        setTimeout(()=>{
            router.push("/")
        }, 3000)
    },[])
  return <div>
    <h1>Ooooops page can not be found</h1>
    <h2>You will be redirected to home page in 3 seconds</h2>
    <Link href="/">Go home</Link>
  </div>;
};

export default NotFound;
