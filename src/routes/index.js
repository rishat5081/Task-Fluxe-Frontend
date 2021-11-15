// import * as P from "pages";
// import { paths } from "./paths";

// export const routes = [
//   { path: paths.home, public: true, exact: true, component: P.Home },
//   {
//     path: paths.login,
//     public: true,
//     exact: true,
//     component: (props) => <P.Login {...props}  id={1}/>,
//   },
//   {
//     path: paths.signup,
//     exact: true,
//     public: true,
//     component: (props) => <P.SignUp {...props}  id={1}/>,
//   },
//   {
//     path: paths.invoiceManagement,
//     exact: true,
//     public: false,
//     component: P.InvoiceManagement,
//   },
//   {
//     path: paths.supplierManagement,
//     exact: true,
//     public: false,
//     component: P.SupplierManagement,
//   },
//   {
//     path: paths.supplierManagementSupplier,
//     exact: true,
//     public: false,
//     component: P.ManagementSupplier,
//   },
//   {
//     path: paths.supplierComparison,
//     exact: true,
//     public: false,
//     component: P.SupplierComparison,
//   },
//   {
//     path: paths.supplierComparisonSupplier,
//     exact: true,
//     public: false,
//     component: (props) => <P.ComparisonSupplier {...props}  id={1}/>,
//   },
//   {
//     path: paths.productLaunchTracker,
//     exact: true,
//     public: false,
//     component: P.ProductLaunchTracker,
//   },
//   {
//     path: paths.productLaunchTrackerProduct,
//     exact: true,
//     public: false,
//     component: (props) => <P.TrackerProduct {...props}  id={1}/>,
//   },
//   {
//     path: paths.dailyOperationsNotes,
//     exact: true,
//     public: false,
//     component: P.DailyOperationsNotes,
//   },
//   {
//     path: paths.dailyOperationsNotesNewNote,
//     exact: true,
//     public: false,
//     component: P.DailyOperationsNewNote,
//   },
//   {
//     path: paths.productManagement,
//     exact: true,
//     public: false,
//     component: P.ProductsManagement,
//   },
//   { path: paths.productManagementProduct, component: P.ManagementProduct },
//   { path: paths.notFound, component: P.NotFound },
// ];

import * as P from "pages";
import { paths } from "./paths";

export const routes = [
  { path: paths.home, public: true, exact: true, component: P.Home },
  {
    path: paths.login,
    public: true,
    exact: true,

    component: (props) => <P.Login {...props} id={1} />,
  },
  {
    path: paths.signup,
    exact: true,
    public: true,
    component: (props) => <P.SignUp {...props} id={1} />,
  },
  {
    path: paths.invoiceManagement,
    exact: true,
    public: false,
    component: (props) => <P.InvoiceManagement {...props} id={1} />,
  },
  {
    path: paths.supplierManagement,
    exact: true,
    public: false,
    component: (props) => <P.SupplierManagement {...props} id={1} />,
  },
  {
    path: paths.supplierManagementSupplier,
    exact: true,
    public: false,
    component: (props) => <P.ManagementSupplier {...props} id={1} />,
  },
  {
    path: paths.supplierComparison,
    exact: true,
    public: false,
    component: (props) => <P.SupplierComparison {...props} id={1} />,
  },
  {
    path: paths.supplierComparisonSupplier,
    exact: true,
    public: false,
    component: (props) => <P.ComparisonSupplier {...props} id={1} />,
  },
  {
    path: paths.productLaunchTracker,
    exact: true,
    public: false,
    component: (props) => <P.ProductLaunchTracker {...props} id={1} />,
  },
  {
    path: paths.productLaunchTrackerProduct,
    exact: true,
    public: false,
    component: (props) => <P.TrackerProduct {...props} id={1} />,
  },
  {
    path: paths.dailyOperationsNotes,
    exact: true,
    public: false,
    component: (props) => <P.DailyOperationsNotes {...props} id={1} />,
  },
  {
    path: paths.dailyOperationsNotesNewNote,
    exact: true,
    public: false,
    component: (props) => <P.DailyOperationsNewNote {...props} id={1} />,
  },
  {
    path: paths.productManagement,
    exact: true,
    public: false,
    component: (props) => <P.ProductsManagement {...props} id={1} />,
  },
  {
    path: paths.productManagementProduct,
    component: (props) => <P.ManagementProduct {...props} id={1} />,
  },
  { path: paths.notFound, component: P.NotFound },
];
