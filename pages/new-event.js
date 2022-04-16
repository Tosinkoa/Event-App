import Layout from "../components/Layout";
import EventForm from "../components/EventForm";
import Authorization from "@/HOC/Authorization";

const events = () => {
  const newEvent = {
    eventName: "",
    eventDate: "",
    eventDescription: "",
  };

  return (
    <Layout>
      <EventForm newEvent={newEvent} formId="new-event" />
    </Layout>
  );
};

export default Authorization(events);
