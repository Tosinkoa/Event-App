import Link from "next/link";
import MyInput, { MyTextArea, MyDate } from "./Formik";
import { Formik, Form } from "formik";
import { useRouter } from "next/router";
import { usePostEventMutation, usePutEventMutation } from "@/store/fetcherApi";
import * as Yup from "yup";

function EventForm({ newEvent, formId, theNewEvent = true }) {
  const router = useRouter();
  const [postEvent] = usePostEventMutation();
  const [putEvent] = usePutEventMutation();

  //-------Validate Event Form---------
  const validation = Yup.object({
    eventName: Yup.string()
      .required("Event name is required")
      .min(2, "Character must be a minimum of 2")
      .max(25, "Character must be a max of 25"),
    eventDate: Yup.string().required("Event date is required"),
    eventDescription: Yup.string()
      .required("Event description is required")
      .min(15, "Character must be a min of 15")
      .max(200, "Character must be a min of 200"),
  });

  return (
    <div className="flex">
      <div className="event_form_background">
        <p className="event_form_title">{router.pathname === "/new-event" ? "Add New Event" : "Edit Event"}</p>
        <div className="flex flex-col">
          <Formik
            validationSchema={validation}
            initialValues={{
              eventName: newEvent.eventName,
              eventDate: newEvent.eventDate,
              eventDescription: newEvent.eventDescription,
            }}
            onSubmit={(values) => {
              const { id } = router.query;
              theNewEvent ? postEvent(values) : putEvent({ id, values });
              router.push("/");
            }}
          >
            <Form id={formId} className="mt-6">
              <div className="mt-6">
                <label htmlFor="eventName" className="event_form_label">
                  Event Name
                </label>
                <MyInput name="eventName" placeholder="e.g Jane Doe wedding ceremony" className="event_input h-12" />

                <div className="mt-6">
                  <label htmlFor="eventDate" className="event_form_label">
                    Event Date
                  </label>

                  <MyDate name="eventDate" placeholder="20/10/2021" type="date" className="event_input h-12" />
                </div>
              </div>
              <div className="mt-6">
                <label htmlFor="eventDescription" className="event_form_label">
                  Event Description
                </label>
                <MyTextArea
                  name="eventDescription"
                  placeholder="Type event description here..."
                  className=" resize-none event_input"
                />
              </div>
              <div className="mt-10 justify-between flex">
                <Link href="/">
                  <a className="cancel_button">Cancel</a>
                </Link>
                <button type="submit" className="save_button">
                  Sell
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default EventForm;
