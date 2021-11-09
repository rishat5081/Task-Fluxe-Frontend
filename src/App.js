import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { routes } from "routes";
import { Drawer, Modal, NavigationBar, Toast } from "components";

const App = () => {
  return (
    <>
      <Switch>
        {routes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Switch>

      <Toast />
      <Drawer />
      <Modal />
    </>
  );
};

export default App;
