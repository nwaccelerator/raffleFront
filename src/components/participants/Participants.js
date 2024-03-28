import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPartById } from "../../api/api";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

const Participants = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function getData() {
      const response = await getPartById(id);
      if (!response.ok) {
        setError(true);
      } else {
        setError(false);
        setData(await response.json());
      }
    }
    getData();
  }, []);

  return (
    <>
      {data.length ? (
        <>
          {data.map((item, idx) => {
            return (
              <div className="card" key={idx} style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">
                    {item.first_name} {item.last_name}
                  </h5>
                  <p className="card-text">player id# {item.p_id}</p>
                  <p className="card-text">
                    <FaEnvelope /> {item.email}
                  </p>
                  <p className="card-text">
                    <FaPhone /> {item.phone || ""}
                  </p>
                </div>
              </div>
            );
          })}
        </>
      ) : null}
      {error && (
        <div className="alert alert-danger" role="alert">
          No participants for raffle id {id}
        </div>
      )}
    </>
  );
};

export default Participants;
