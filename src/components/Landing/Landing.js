import { useState, useEffect } from "react";
import { createRaffle } from "../../api/api";
import AllRaffles from "../Raffle/AllRaffles";
import { getAllRaffles } from "../../api/api";

const Landing = () => {
  const [form, setForm] = useState({ name: "", secret_token: "" });
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [allraffles, setAllRaffles] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await getAllRaffles();
      if (response?.length) setAllRaffles(response);
    }
    getData();
  }, []);

  useEffect(() => {
    setError(false);
  }, [form.name, form.secret_token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.secret_token) return;
    const response = await createRaffle(form);
    if (response.error) {
      setError(true);
      setSuccess(false);
    } else {
      setSuccess(true);
      setAllRaffles([...allraffles, response[0]]);
    }
  };

  const handleInputChange = (n, v) => {
    setForm({ ...form, [n]: v });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-1">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            className="form-control shadow-sm"
            id="name"
            value={form.name}
            placeholder="raffle name"
            pattern=".{3,}"
            onChange={(e) => handleInputChange("name", e.target.value)}
          />
        </div>
        <div className="mb-1">
          <label htmlFor="secretoken" className="form-label">
            Secret Token
          </label>
          <input
            type="text"
            className="form-control shadow-sm"
            id="secretoken"
            pattern=".{5,15}"
            onChange={(e) => handleInputChange("secret_token", e.target.value)}
            value={form.secret_token}
            placeholder="please fill"
          />
        </div>
        <div className="d-flex">
          <button
            type="submit"
            id="formcreate"
            className="btn btn-primary mb-2 me-2"
          >
            Create New Raffle
          </button>
        </div>
      </form>
      {success && (
        <div className="alert alert-primary" role="alert">
          Successfully created new raffle.
        </div>
      )}
      {error && (
        <div className="alert alert-danger" role="alert">
          Api Error
        </div>
      )}
      <AllRaffles allraffles={allraffles} />
    </>
  );
};

export default Landing;
