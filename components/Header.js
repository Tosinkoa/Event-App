import { FaSignOutAlt } from "react-icons/fa";
import Link from "next/link";
import { MdHomeWork, MdLibraryAdd } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";

const Header = () => {
  return (
    <div className="header_background">
      <Link href="/">
        <div className=" inline-flex cursor-pointer">
          <MdHomeWork className="text-3xl  mr-2 text-indigo-900" />
          <span className="header_logo">Events</span>
        </div>
      </Link>
      <div>
        <Link href="/">
          <a className="header_buttons">
            <AiFillHome className="header_icons " />
            Home
          </a>
        </Link>
        <Link href="/new-event">
          <a className="header_buttons">
            <MdLibraryAdd className="header_icons " />
            Add Event
          </a>
        </Link>
        <Link href="/logout">
          <a className="header_buttons cursor-pointer">
            <FaSignOutAlt className="header_icons " />
            Logout
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
