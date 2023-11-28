import { useHistory } from "react-router-dom";
// import { AxiosInstance } from "../api/api";
import axios from "axios";
import { useForm } from "react-hook-form";

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
      <h1>ADD FRIEND</h1>
      <hr />
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>
            FRIEND NAME
            <input type="text" {...register("username")} />
          </label>
        </div>
        <div>
          <label>
            FRIEND EMAIL
            <input type="email" {...register("email")} />
          </label>
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default AddFriendsPage;
