const NotFound = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-1">404</h1>
      <h2 className="display-4">Page Not Found</h2>
      <p className="lead">Oops! The page you are looking for does not exist.</p>
      <img
        src="https://via.placeholder.com/400"
        alt="404 Not Found"
        className="img-fluid"
      />
    </div>
  );
};

export default NotFound;
