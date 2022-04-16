import Authorization from "@/HOC/Authorization";
import EventForm from "../components/EventForm";
import Layout from "../components/Layout";
import Loading from "@/components/Loading";
import { useGetOneEventQuery } from "@/store/fetcherApi";
import { useRouter } from "next/router";

const EditEvent = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: oneEvent, isLoading } = useGetOneEventQuery(id);

  const newEvent = {
    eventName: oneEvent?.eventName,
    eventDate: oneEvent?.eventDate,
    eventDescription: oneEvent?.eventDescription,
  };

  return (
    <Layout>
      {oneEvent && !isLoading && <EventForm newEvent={newEvent} formId="edit-event" theNewEvent={false} />}
      {isLoading && <Loading />}
    </Layout>
  );
};

export default Authorization(EditEvent);
