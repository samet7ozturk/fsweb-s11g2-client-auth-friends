import { Switch, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import FriendsList from "../pages/FriendsListPage";
import ProtectedPage from "../pages/ProtectedPage";

const PageContent = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <LoginPage />
        </Route>

        <Route path="/friendslist" exact>
          <ProtectedPage>
            <FriendsList />
          </ProtectedPage>
        </Route>

        <Route path="*">
          <h1>404 Not Found Page</h1>
        </Route>
      </Switch>
    </div>
  );
};

export default PageContent;
