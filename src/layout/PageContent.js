import { Switch, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import FriendsList from "../pages/FriendsListPage";

const PageContent = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <LoginPage />
        </Route>

        <Route path="/friendslist" exact>
          <FriendsList />
        </Route>

        <Route path="*">
          <h1>404 Not Found Page</h1>
        </Route>
      </Switch>
    </div>
  );
};

export default PageContent;
