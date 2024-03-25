import { FaTicketAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
export const Nav = () => {
  return (
    <>
      <header className="container text-center">
        <h1>Raffle App</h1>
        <h2 id="raffle-state"></h2>
      </header>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <FaTicketAlt />
            All Raffles
          </div>
          <div className="col">
            <FaRegEdit />
            Register
          </div>
          <div className="col">
            <FaUsers />
            Participants
          </div>
          <div className="col">
            <FaTrophy />
            Pick Winner
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
