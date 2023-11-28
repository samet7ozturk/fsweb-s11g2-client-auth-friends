import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <button data-cy="orderpage-button">
        <Link to="/login" className="order-button1">
          <span>FRIENDS</span>
        </Link>
      </button>
    </div>
  );
};

export default HomePage;
