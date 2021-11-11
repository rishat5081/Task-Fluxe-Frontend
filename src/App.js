import { Switch, Route, useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Drawer, Modal, Toast } from "components";
import { useState } from "react";
import { paths } from "routes/paths";
import * as Page from "pages";
import { loginAPI } from "APIs/Web Controls/webControls";
import { callSuccessToast, callErrorToast } from "components/Toast/toast";

const App = () => {
  const history = useHistory();
  const [loggedIn, setloggedIn] = useState(false);
  const [loggedInID, setloggedInID] = useState(null);

  //login function
  const loginn = async (email, password) => {
    loginAPI(email, password)
      .then((result) => {
        if (result.status === "success") {
          callSuccessToast(result.message);
          setloggedIn(true);
          setloggedInID(result.id);
          history.push("/supplier-management");
        }
        if (result.status === "Error") {
          callErrorToast(result.message);
          setloggedIn(false);
        }
      })
      .catch((err) => {
        console.log(err);
        callErrorToast("Please Try Again");
      });
  };
  const signOutCall = () => {
    console.log("Before : ", loggedIn);
    setloggedInID(null);
    setloggedIn(!loggedIn);
  };
  return (
    <>
      <Switch>
        {/* Login  Route */}
        <Route
          render={(props) => (
            <Page.Login
              {...props}
              handleLogin={loginn}
              status={loggedIn}
              signOutHandler={signOutCall}
              id={loggedInID}
            />
          )}
          exact={true}
          path={paths.login}
        />
        {/*------------------------------------------------------------------------------- */}
        {/* sign up Route */}
        <Route
          render={(props) => (
            <Page.SignUp
              {...props}
              status={loggedIn}
              signOutHandler={signOutCall}
              id={loggedInID}
            />
          )}
          exact={true}
          path={paths.signup}
        />
        {/*------------------------------------------------------------------------------- */}

        {/* Home  Route */}
        <Route
          render={(props) => (
            <Page.Home
              {...props}
              status={loggedIn}
              signOutHandler={signOutCall}
              id={loggedInID}
            />
          )}
          exact={true}
          path={paths.home}
        />
        {/*------------------------------------------------------------------------------- */}

        {/* Supplier Management Route */}
        <Route
          render={(props) =>
            loggedIn === true ? (
              <Page.SupplierManagement
                {...props}
                signOutHandler={signOutCall}
                id={loggedInID}
              />
            ) : (
              <Page.Home {...props} />
            )
          }
          exact={true}
          path={paths.supplierManagement}
        />
        {/*------------------------------------------------------------------------------- */}
        {/*Management of Supplier  Route */}
        <Route
          render={(props) =>
            loggedIn === true ? (
              <Page.ManagementSupplier
                {...props}
                signOutHandler={signOutCall}
                id={loggedInID}
              />
            ) : (
              <Page.Home {...props} />
            )
          }
          exact={true}
          path={paths.supplierManagementSupplier}
        />
        {/*------------------------------------------------------------------------------- */}

        {/*Supplier Comparison  Route */}
        <Route
          render={(props) =>
            loggedIn === true ? (
              <Page.SupplierComparison
                {...props}
                signOutHandler={signOutCall}
                id={loggedInID}
              />
            ) : (
              <Page.Home {...props} />
            )
          }
          exact={true}
          path={paths.supplierComparison}
        />
        {/*------------------------------------------------------------------------------- */}

        {/*Supplier Comparison of detailed page  Route */}
        <Route
          render={(props) =>
            loggedIn === true ? (
              <Page.ComparisonSupplier
                {...props}
                signOutHandler={signOutCall}
                id={loggedInID}
              />
            ) : (
              <Page.Home {...props} />
            )
          }
          exact={true}
          path={paths.supplierComparisonSupplier}
        />
        {/*------------------------------------------------------------------------------- */}

        {/*Product Launch Tracker  Route */}
        <Route
          render={(props) =>
            loggedIn === true ? (
              <Page.ProductLaunchTracker
                {...props}
                signOutHandler={signOutCall}
                id={loggedInID}
              />
            ) : (
              <Page.Home {...props} />
            )
          }
          exact={true}
          path={paths.productLaunchTracker}
        />
        {/*------------------------------------------------------------------------------- */}

        {/*Product Launch Tracker detailed Page  Route */}
        <Route
          render={(props) =>
            loggedIn === true ? (
              <Page.TrackerProduct {...props} signOutHandler={signOutCall} />
            ) : (
              <Page.Home {...props} />
            )
          }
          exact={true}
          path={paths.productLaunchTrackerProduct}
        />
        {/*------------------------------------------------------------------------------- */}

        {/* Daily Operations Notes  Route */}
        <Route
          render={(props) =>
            loggedIn === true ? (
              <Page.DailyOperationsNotes
                {...props}
                signOutHandler={signOutCall}
                id={loggedInID}
              />
            ) : (
              <Page.Home {...props} />
            )
          }
          exact={true}
          path={paths.dailyOperationsNotes}
        />
        {/*------------------------------------------------------------------------------- */}

        {/* Daily Operations Notes New Note  Route */}
        <Route
          render={(props) =>
            loggedIn === true ? (
              <Page.DailyOperationsNewNote
                {...props}
                signOutHandler={signOutCall}
                id={loggedInID}
              />
            ) : (
              <Page.Home {...props} />
            )
          }
          exact={true}
          path={paths.dailyOperationsNotesNewNote}
        />
        {/*------------------------------------------------------------------------------- */}

        {/* Products Management  Route */}
        <Route
          render={(props) =>
            loggedIn === true ? (
              <Page.ProductsManagement
                {...props}
                signOutHandler={signOutCall}
                id={loggedInID}
              />
            ) : (
              <Page.Home {...props} />
            )
          }
          exact={true}
          path={paths.productManagement}
        />
        {/*------------------------------------------------------------------------------- */}

        {/* Products Management  Route */}
        <Route
          render={(props) =>
            loggedIn === true ? (
              <Page.ManagementProduct {...props} signOutHandler={signOutCall} />
            ) : (
              <Page.Home {...props} />
            )
          }
          exact={true}
          path={paths.productManagementProduct}
        />
        {/*------------------------------------------------------------------------------- */}

        {/* Invoice Management Route */}
        <Route
          render={(props) =>
            loggedIn === true ? (
              <Page.InvoiceManagement {...props} signOutHandler={signOutCall} />
            ) : (
              <Page.Home {...props} />
            )
          }
          exact={true}
          path={paths.invoiceManagement}
        />
        {/*------------------------------------------------------------------------------- */}
        <Route path={"*"} component={Page.NotFound} />
      </Switch>

      <Toast />
      <Drawer />
      <Modal />
    </>
  );
};

export default App;
