import { useState } from "react";
import { addNewParticipant } from "../../api/api";

const NewForm = ({ id }) => {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
  });

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.first_name || !form.last_name || !form.email) return;
    const response = await addNewParticipant(form, id);
    if (response.error) {
      setError(true);
      setSuccess(false);
    } else {
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
                type="text"
                className="form-control shadow-sm"
                id="email"
                pattern=".{4,100}"
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
                type="text"
                className="form-control shadow-sm"
                id="phone"
                pattern=".{6,10}"
                onChange={(e) => handleInputChange("phone", e.target.value)}
                value={form.phone}
                placeholder="12345678"
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
            </div>
          </form>
        </>
      ) : (
        <h5>no raffle id</h5>
      )}
      {success && (
        <div className="alert alert-primary" role="alert">
          Successfully added to raffle.
        </div>
      )}
      {error && (
        <div className="alert alert-danger" role="alert">
          Api Error
        </div>
      )}
    </>
  );
};

export default NewForm;
