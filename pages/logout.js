import { useLogoutUserMutation } from "@/store/fetcherApi";
import { useEffect } from "react";
import { fetcherApi } from "@/store/fetcherApi";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Loading from "@/components/Loading";

const logout = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [logoutUser] = useLogoutUserMutation();

  useEffect(() => {
    logoutUser();
    dispatch(fetcherApi.util.resetApiState());
    router.push("/login");
  }, []);

  return (
    <div>
      <h1 className="sr-only">Blank</h1>
      <Loading />
    </div>
  );
};

export default logout;
