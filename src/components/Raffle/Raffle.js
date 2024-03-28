import { useState, useEffect } from "react";
import { FaTicketAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import NewForm from "./NewForm";
import Participants from "../Participants/Participants";
import Winner from "../Winner/Winner";

const Raffle = ({ part, winner }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const nameHeading = location.state?.raffleName || "";

  return (
    <>
      <nav className="container text-center">
        <h3>
          {nameHeading} {nameHeading ? " Raffle" : ""}
        </h3>
        <div className="row">
          <div
            className="col border"
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/`)}
          >
            <FaTicketAlt />
            All Raffles
          </div>
          <div
            className="col border"
            style={{ cursor: "pointer" }}
            onClick={() =>
              navigate(`/raffles/${id}`, {
                state: {
                  raffleName: nameHeading,
                },
              })
            }
          >
            <FaRegEdit />
            Register
          </div>
          <div
            className="col border"
            style={{ cursor: "pointer" }}
            onClick={() =>
              navigate(`/raffles/${id}/participants`, {
                state: {
                  raffleName: nameHeading,
                },
              })
            }
          >
            <FaUsers />
            Participants
          </div>
          <div
            className="col border"
            style={{ cursor: "pointer" }}
            onClick={() =>
              navigate(`/raffles/${id}/winner`, {
                state: {
                  raffleName: nameHeading,
                },
              })
            }
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
