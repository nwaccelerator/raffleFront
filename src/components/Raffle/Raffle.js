import { useState, useEffect } from "react";
import { FaTicketAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import NewForm from "./NewForm";
import Participants from "../participants/Participants";
import Winner from "../Winner/Winner";

const Raffle = ({ part, winner }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <nav className="container text-center">
        <div className="row">
          <div className="col border" onClick={() => navigate(`/`)}>
            <FaTicketAlt />
            All Raffles
          </div>
          <div
            className="col border"
            onClick={() => navigate(`/raffles/${id}`)}
          >
            <FaRegEdit />
            Register
          </div>
          <div
            className="col border"
            onClick={() => navigate(`/raffles/${id}/participants`)}
          >
            <FaUsers />
            Participants
          </div>
          <div
            className="col border"
            onClick={() => navigate(`/raffles/${id}/winner`)}
          >
            <FaTrophy />
            Pick Winner
          </div>
        </div>
      </nav>
      {!part && !winner && <NewForm />}
      {part && !winner && <Participants />}
      {!part && winner && <Winner />}
    </>
  );
};

export default Raffle;
