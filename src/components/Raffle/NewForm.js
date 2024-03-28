import { useState, useEffect } from "react";
import { addNewParticipant } from "../../api/api";
import { formShape } from "../../helper/helper";
import { useParams } from "react-router-dom";

const NewForm = () => {
  const [form, setForm] = useState(formShape);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setError(false);
  }, [form.first_name, form.last_name, form.email, form.phone]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.first_name || !form.last_name || !form.email) return;
    const response = await addNewParticipant(form, id);
    if (!response?.ok) {
      setError("This raffle is not accepting new entrants.");
      setSuccess(false);
    } else {
      setError(false);
      setSuccess(true);
    }
  };

  const handleInputChange = (n, v) => {
    setForm({ ...form, [n]: v });
  };

  return (
    <>
      {id ? (
        <>
          <h2>Register to participate in the raffle</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-1">
              <label htmlFor="firstname" className="form-label">
                FirstName
              </label>
              <input
                className="form-control shadow-sm"
                id="firstname"
                value={form.first_name}
                placeholder="firstName"
                pattern=".{1,50}"
                onChange={(e) =>
                  handleInputChange("first_name", e.target.value)
                }
              />
            </div>
            <div className="mb-1">
              <label htmlFor="lastname" className="form-label">
                LastName
              </label>
              <input
                className="form-control shadow-sm"
                id="lastname"
                value={form.last_name}
                placeholder="lastName"
                pattern=".{1,50}"
                onChange={(e) => handleInputChange("last_name", e.target.value)}
              />
            </div>
            <div className="mb-1">
              <label htmlFor="email" className="form-label">
                Email*
              </label>
              <input
                type="email"
                className="form-control shadow-sm"
                id="email"
                onChange={(e) => handleInputChange("email", e.target.value)}
                value={form.email}
                placeholder="johndoe@example.com"
              />
            </div>
            <div className="mb-1">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                type="tel"
                className="form-control shadow-sm"
                id="phone"
                pattern="[0-9]{1}-[0-9]{3}-[0-9]{3}-[0-9]{4}"
                onChange={(e) => handleInputChange("phone", e.target.value)}
                value={form.phone}
                placeholder="1-234-456-8979"
              />
            </div>
            <div className="d-flex">
              <button
                type="submit"
                id="formcreate"
                className="btn btn-primary mb-2 me-2"
              >
                Submit
              </button>
              <button
                type="click"
                id="formreset"
                className="btn btn-secondary mb-2 me-2"
                onClick={() => setForm(formShape)}
              >
                Reset
              </button>
            </div>
          </form>
        </>
      ) : (
        <h5>no raffle id</h5>
      )}
      {success && (
        <div className="alert alert-primary" role="alert">
          Successfully added {form.first_name + " " || ""}to raffle.
        </div>
      )}
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
    </>
  );
};

export default NewForm;
