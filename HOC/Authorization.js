import Loading from "@/components/Loading";
import { useGetAuthQuery } from "@/store/fetcherApi";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default (ChildComponent) => {
  const composeComponent = (props) => {
    const router = useRouter();
    const result = useGetAuthQuery();

    useEffect(() => {
      if (result?.data === false) {
        router.push("/login");
      }
    }, [result]);

    return (
      <div>
        {result?.data === true && !result.isLoading && <ChildComponent {...props} />}
        {result.isLoading && <Loading />}
      </div>
    );
  };
  return composeComponent;
};
