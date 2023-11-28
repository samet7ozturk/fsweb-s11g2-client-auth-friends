import { useHistory } from "react-router-dom";
// import { AxiosInstance } from "../api/api";
import axios from "axios";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  //   const location = useLocation();
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  //   console.log("Login location: ", location);

  const submitHandler = (data) => {
    console.log("data", data);
    axios.post("http://localhost:9000/api/login", data).then((res) => {
      console.log("post", res);
      localStorage.setItem("token", res.data.token);
      history.push("/friendslist");
    });
  };

  return (
    <div>
      <h1>LOGIN</h1>
      <hr />
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>
            USERNAME
            <input type="text" {...register("username")} />
          </label>
        </div>
        <div>
          <label>
            PASSWORD
            <input type="password" {...register("password")} />
          </label>
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default LoginPage;
