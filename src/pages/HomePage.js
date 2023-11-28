import { Link } from "react-router-dom";
import Header from "../layout/Header";

import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <main>
        <button>
          <Link to="/login" className="button1">
            <span>FRIENDS</span>
          </Link>
        </button>
      </main>
    </div>
  );
};

export default HomePage;
