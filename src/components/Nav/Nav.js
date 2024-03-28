import { useNavigate } from "react-router-dom";
export const Nav = () => {
  const navigate = useNavigate();
  return (
    <>
      <header className="container text-center">
        <h1 onClick={() => navigate("/")}>Raffle App</h1>
      </header>
    </>
  );
};

export default Nav;
