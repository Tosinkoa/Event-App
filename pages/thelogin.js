import Loading from "@/components/Loading";
import { useRouter } from "next/router";
import { useEffect } from "react";

const TheLogin = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  }, []);

  return (
    <div>
      <h1 className="sr-only"></h1>
      <Loading />
    </div>
  );
};

export default TheLogin;
