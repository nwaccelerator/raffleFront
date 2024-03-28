import { useState } from "react";
import { FaCalendarCheck } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { useNavigate, useHistory } from "react-router-dom";

const AllRaffles = ({ allraffles }) => {
  const navigate = useNavigate();
  return (
    <>
      {allraffles.length > 0 ? (
        <div>
          <h1>All Raffles:</h1>
          {allraffles.map((item, idx) => {
            return (
              <div
                className="card my-1"
                key={idx}
                style={{ width: "18rem" }}
                onClick={() => {
                  navigate(`/raffles/${item.id}`, {
                    state: {
                      raffleName: item.name,
                    },
                  });
                }}
              >
                <div className="card-body">
                  <h5 className="card-title">{item.name}'s Raffle</h5>
                  <p className="card-text">
                    <FaCalendarCheck /> Created On:{" "}
                    {new Date(item.created_at).toLocaleDateString()}
                  </p>
                  <p className="card-text">
                    <FaTrophy /> Winner Id: {item.winner_id || "none"}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <h1>No Raffles Yet</h1>
      )}
    </>
  );
};

export default AllRaffles;
