import { MdDeleteForever } from "react-icons/md";
import { useDeleteEventMutation } from "@/store/fetcherApi";
import { useState } from "react";

const WarrningMssg = ({ id }) => {
  const [showWarningMssg, setShowWarningMssg] = useState(false);
  const [deleteEvent] = useDeleteEventMutation();

  const showWarningHandler = () => setShowWarningMssg(!showWarningMssg);

  return (
    <div>
      <div>
        <a
          className="table_data w-1/5 mx-auto cursor-pointer text-red-500 hover:underline"
          onClick={showWarningHandler}
        >
          <MdDeleteForever className="md:text-lg sm:text-2xl inline-flex mb-1" />
          <p className="sm:hidden md:inline-flex"> Delete</p>
        </a>
        {showWarningMssg ? <div className="backdrop" onClick={showWarningHandler}></div> : ""}
        <div className="mx-0 justify-center ">
          <div className="flex justify-center">
            <div
              className={`warning_mssg_background  ${
                showWarningMssg ? "translate-y-0" : "translate-y-[600%]"
              } animate ease-in-out duration-700`}
            >
              <h1 className="warning_mssg_title ">Warning!</h1>
              <p className="warning_mssg_text">Are you sure you want to delete event</p>
              <div className="mt-10  flex">
                <button onClick={showWarningHandler} className="cancel_button mx-auto">
                  Cancel
                </button>
                <button
                  onClick={() => {
                    showWarningHandler();
                    deleteEvent({ id });
                  }}
                  className="save_button mx-auto"
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarrningMssg;
