import { useState } from "react";
import { drawRaffle } from "../../api/api";
import { useParams } from "react-router-dom";

const WinnerForm = ({ getData }) => {
  const [form, setForm] = useState("");
  const [error, setError] = useState(false);
  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form || !id) return;
    const response = await drawRaffle(form, id);
    if (!response?.ok) {
      if (response.status === 400) {
        setError("No contestants in raffle");
      } else if (response.status === 404) {
        setError("Invalid token try again");
      } else {
        setError("Api Error");
      }
    } else {
      setError(false);
      getData();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-1">
          <label htmlFor="secretoken" className="form-label">
            Secret Token
          </label>
          <input
            type="text"
            className="form-control shadow-sm"
            id="secretoken"
            pattern=".{5,15}"
            onChange={(e) => setForm(e.target.value)}
            value={form}
            placeholder="please fill"
          />
        </div>
        <div className="d-flex">
          <button
            type="submit"
            id="formcreate"
            className="btn btn-primary mb-2 me-2"
          >
            Pick Winner
          </button>
        </div>
      </form>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
    </>
  );
};

export default WinnerForm;
