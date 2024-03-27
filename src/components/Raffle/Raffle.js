import { FaTicketAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
const Raffle = () => {
  <>
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
  </>;
};

export default Raffle;
