import { useState, useEffect } from "react";
import { FaTicketAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { getRafflePart, getRafWinner } from "../../api/api";
import NewForm from "./NewForm";

const Raffle = ({ part, winner }) => {
  const [partic, setAllPart] = useState([]);
  const [showWinner, setWinner] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      if (part) {
        async function getParticipants() {
          const response = await getRafflePart(id);
          if (response?.length) {
            setWinner([]);
            setAllPart(response);
          }
        }
        getParticipants();
      }
      if (winner) {
        async function getWinner() {
          const response = await getRafWinner(id);
          if (response?.length) {
            setAllPart([]);
            setWinner(response);
          }
        }
        getWinner();
      }
    }
  }, []);

  return (
    <>
      <nav className="container text-center">
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
      </nav>
      {!part && !winner && <NewForm id={id} />}
    </>
  );
};

export default Raffle;
