import * as P from "pages";
import { paths } from "./paths";

export const routes = [
  { path: paths.home, exact: true, component: P.Home },
  { path: paths.login, exact: true, component: P.Login },
  { path: paths.signup, exact: true, component: P.SignUp },
  {
    path: paths.invoiceManagement,
    exact: true,
    component: P.InvoiceManagement,
  },
  {
    path: paths.supplierManagement,
    exact: true,
    component: P.SupplierManagement,
  },
  {
    path: paths.supplierManagementSupplier,
    exact: true,
    component: P.ManagementSupplier,
  },
  {
    path: paths.supplierComparison,
    exact: true,
    component: P.SupplierComparison,
  },
  {
    path: paths.supplierComparisonSupplier,
    exact: true,
    component: (props) => <P.ComparisonSupplier {...props} />,
  },
  {
    path: paths.productLaunchTracker,
    exact: true,
    component: P.ProductLaunchTracker,
  },
  {
    path: paths.productLaunchTrackerProduct,
    exact: true,
    component: (props) => <P.TrackerProduct {...props} />,
  },
  {
    path: paths.dailyOperationsNotes,
    exact: true,
    component: P.DailyOperationsNotes,
  },
  {
    path: paths.dailyOperationsNotesNewNote,
    exact: true,
    component: P.DailyOperationsNewNote,
  },
  {
    path: paths.productManagement,
    exact: true,
    component: P.ProductsManagement,
  },
  { path: paths.productManagementProduct, component: P.ManagementProduct },
  { path: paths.notFound, component: P.NotFound },
];
