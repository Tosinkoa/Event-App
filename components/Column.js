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
      <div className="table_data  w-1/5 mx-auto cursor-pointer text-blue-500 hover:underline">
        <Link href="/[id]" as={`/${d._id}`}>
          <a>
            <FaEdit className="text-lg inline-flex mb-1  mr-1" />
            <p className="sm:hidden md:inline-flex">Edit</p>
          </a>
        </Link>
      </div>
    ),
  },
  {
    id: "delete",
    accessor: (d) => <WarningMssg id={d._id} />,
  },
];
