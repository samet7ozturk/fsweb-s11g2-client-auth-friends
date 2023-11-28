import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../layout/Header";

import "./FriendsListPage.css";

const FriendsListPage = () => {
  const token = localStorage.getItem("token");
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9000/api/friends", {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((res) => {
        console.log("list", res.data);
        setList(res.data);
      })
      .catch((error) => {
        console.error("FriendsList error:", error);
      });
  }, [token]);

  return (
    <div>
      <Header />
      <div className="friendslist">
        <h1>FRIENDS LIST</h1>
        <div className="friendslist-list">
          {list.map((friend) => (
            <div key={friend.id}>
              <p>
                - {friend.name}-{friend.email}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FriendsListPage;
