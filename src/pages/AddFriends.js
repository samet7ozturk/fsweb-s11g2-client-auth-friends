import { useHistory } from "react-router-dom";
// import { AxiosInstance } from "../api/api";
import axios from "axios";
import { useForm } from "react-hook-form";
import Header from "../layout/Header";

const AddFriendsPage = () => {
  //   const location = useLocation();
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const token = localStorage.getItem("token");

  //   console.log("Login location: ", location);

  const submitHandler = (data) => {
    console.log("data", data);
    axios
      .post("http://localhost:9000/api/friends", data, {
        headers: {
          Authorization: `${token}`,
        },
      })

      .then((res) => {
        console.log("post", res);
      });
  };

  return (
    <div>
      <Header />
      <div className="loginpage">
        <h1>ADD FRIEND</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div>
            <label>
              <p>FRIEND NAME</p>
              <input type="text" {...register("username")} />
            </label>
          </div>
          <div>
            <label>
              <p>FRIEND EMAIL</p>
              <input type="email" {...register("email")} />
            </label>
          </div>
          <button className="loginpage-button" type="submit">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddFriendsPage;
