import Link from "next/link";
import WarningMssg from "./WarningMssg";
import Moment from "react-moment";
import { FaEdit } from "react-icons/fa";

export const Column = [
  { Header: "Event Name", accessor: "eventName" },

  { Header: "Event Description", accessor: "eventDescription" },
  {
    Header: "Event Date",
    accessor: (d) => <Moment format="YYYY-MM-DD">{d.eventDate}</Moment>,
  },
  {
    id: "edit",
    accessor: (d) => (
      <Link href="/[id]" as={`/${d._id}`}>
        <a className="table_data w-1/5 mx-auto cursor-pointer text-blue-500 hover:underline">
          <FaEdit className="md:text-lg sm:text-2xl md:mr-0.5 inline-flex mb-1" />
          <p className="sm:hidden md:inline-flex">Edit</p>
        </a>
      </Link>
    ),
  },
  {
    id: "delete",
    accessor: (d) => <WarningMssg id={d._id} />,
  },
];
