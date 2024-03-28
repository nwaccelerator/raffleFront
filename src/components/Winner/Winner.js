import { useState, useEffect } from "react";
import { getRafWinner } from "../../api/api";
import { useParams } from "react-router-dom";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import WinnerForm from "./WinnerForm";
import { ballons } from "../../assets";

const Winner = () => {
  const [winner, setWinner] = useState(null);
  const { id } = useParams();

  async function getData() {
    const response = await getRafWinner(id);
    if (response.ok) {
      const data = await response.json();
      setWinner(data.data);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {winner?.winner_id ? (
        <div>
          <h1>Winner</h1>
          <div className="card" style={{ width: "18rem" }}>
            <img src={ballons} alt="celebration" />
            <div className="card-body">
              <h5 className="card-title">
                {winner.first_name} {winner.last_name}
              </h5>
              <p className="card-text">raffle Id# {winner.id}</p>
              <p className="card-text">
                <FaEnvelope /> {winner.email}
              </p>
              <p className="card-text">
                <FaPhone /> {winner.phone || ""}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <WinnerForm getData={getData} />
      )}
    </>
  );
};

export default Winner;
