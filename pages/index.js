import Authorization from "@/HOC/Authorization";
import { GiEmptyMetalBucket } from "react-icons/gi";
import Layout from "@/components/Layout";
import Loading from "@/components/Loading";
import Table from "@/components/Table";
import { useFetchAllEventsQuery } from "@/store/fetcherApi";

const Home = () => {
  const { data: allMyEvents, isLoading } = useFetchAllEventsQuery();

  return (
    <Layout>
      {isLoading && <Loading />}

      {allMyEvents && !isLoading && <Table allMyEvents={allMyEvents} />}

      {allMyEvents < 1 && (
        <div className="empty_table">
          <GiEmptyMetalBucket className="-mt-3 mr-1 text-5xl" />
          <p className="font-bold">No events yet</p>
        </div>
      )}
    </Layout>
  );
};

export default Authorization(Home);
