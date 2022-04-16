import { useGetAuthQuery } from "@/store/fetcherApi";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default (ChildComponent) => {
  const composeComponent = (props) => {
    const router = useRouter();
    const result = useGetAuthQuery();
    const notSign = useSelector((state) => state.notSign.notSign);

    useEffect(() => {
      if (
        (notSign && result?.data === false && router.pathname !== "/login") ||
        (notSign && result?.data === false && router.pathname !== "/register")
      ) {
        router.push("/login");
      }
    }, [result]);

    return <div>{result?.data === true && !result.isLoading && <ChildComponent {...props} />}</div>;
  };
  return composeComponent;
};
