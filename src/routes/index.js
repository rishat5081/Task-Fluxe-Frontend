import * as P from "pages";
import { paths } from "./paths";

export const routes = [
  { path: paths.home, exact: true, component: P.Home },
  { path: paths.invoiceManagement, exact: true, component: P.InvoiceManagement },
  { path: paths.supplierManagement, exact: true, component: P.SupplierManagement },
  { path: paths.supplierManagementSupplier, exact: true, component: P.ManagementSupplier },
  { path: paths.supplierComparison, exact: true, component: P.SupplierComparison },
  { path: paths.supplierComparisonSupplier, component: P.ComparisonSupplier },
  { path: paths.productLaunchTracker, exact: true, component: P.ProductLaunchTracker },
  { path: paths.productLaunchTrackerProduct, component: P.TrackerProduct },
  { path: paths.dailyOperationsNotes, exact: true, component: P.DailyOperationsNotes },
  { path: paths.dailyOperationsNotesNewNote, exact: true, component: P.DailyOperationsNewNote },
  { path: paths.productManagement, exact: true, component: P.ProductsManagement },
  { path: paths.productManagementProduct, component: P.ManagementProduct },
];
