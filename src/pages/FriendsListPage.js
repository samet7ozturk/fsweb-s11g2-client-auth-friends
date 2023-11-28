import axios from "axios";
import { useState, useEffect } from "react";

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
      <h1>FRIEND LIST</h1>
      <div>
        {list.map((friend) => (
          <div key={friend.id}>
            {friend.name}-{friend.email}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendsListPage;
