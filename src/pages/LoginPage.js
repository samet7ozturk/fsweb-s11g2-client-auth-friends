import { useHistory } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import Header from "../layout/Header";

import "./LoginPage.css";

const LoginPage = () => {
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  const submitHandler = (data) => {
    console.log("data", data);
    axios.post("http://localhost:9000/api/login", data).then((res) => {
      console.log("post", res);
      localStorage.setItem("token", res.data.token);
      history.push("/friends");
    });
  };

  return (
    <div>
      <Header />
      <div className="loginpage">
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div>
            <label>
              <p>USERNAME</p>
              <input type="text" {...register("username")} />
            </label>
          </div>
          <div>
            <label>
              <p>PASSWORD</p>
              <input type="password" {...register("password")} />
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

export default LoginPage;
