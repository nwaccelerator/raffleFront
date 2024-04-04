import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPartById } from "../../api/api";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

const Participants = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    async function getData() {
      const response = await getPartById(id);
      const data = await response.json();
      if (!response?.ok) {
        if (response.status === 400 || response.status === 404) {
          setError(data.error);
        } else {
          setError("Api Error");
        }
      } else {
        setError(false);
        setData(data.data);
      }
    }
    getData();
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  } else
    return (
      <>
        {data.length > 0 ? (
          <>
            <h3>{data.length} Participants</h3>
            {data.map((item, idx) => {
              return (
                <div className="card my-1" key={idx} style={{ width: "18rem" }}>
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
        ) : (
          <h3>No Participants in raffle yet.</h3>
        )}
        {error && (
          <div className="alert alert-danger my-1" role="alert">
            {error}
          </div>
        )}
      </>
    );
};

export default Participants;
