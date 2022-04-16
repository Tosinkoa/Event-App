import { useLogoutUserMutation } from "@/store/fetcherApi";
import { useEffect } from "react";
import { fetcherApi } from "@/store/fetcherApi";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { notSignAction } from "@/store/not-sign-slice";
import Loading from "@/components/Loading";

const logout = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [logoutUser] = useLogoutUserMutation();

  useEffect(() => {
    dispatch(notSignAction.notSignToggle(true));
    router.push("/login");
    logoutUser();
    dispatch(fetcherApi.util.resetApiState());
  }, []);

  return (
    <div>
      <h1 className="sr-only">Blank</h1>
      <Loading />
    </div>
  );
};

export default logout;
