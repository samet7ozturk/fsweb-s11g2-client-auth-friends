import { Switch, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import FriendsListPage from "../pages/FriendsListPage";
import ProtectedPage from "../pages/ProtectedPage";
import AddFriendsPage from "../pages/AddFriends";
import HomePage from "../pages/HomePage";

const PageContent = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/login" exact>
          <LoginPage />
        </Route>

        <Route path="/friends" exact>
          <ProtectedPage>
            <FriendsListPage />
          </ProtectedPage>
        </Route>

        <Route path="/friends/add" exact>
          <ProtectedPage>
            <AddFriendsPage />
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
