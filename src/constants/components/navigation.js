import { paths } from "routes/paths";

export const navigations = [
  { to: "not-found", text: "Projects", icon: "dashboard", disabled: true },
  { to: "not-found", text: "My Tasks", icon: "format-list-bulleted", disabled: true },
  { to: "not-found", text: "Calendar", icon: "calendar-today", disabled: true },
  { to: "not-found", text: "Activity", icon: "eq", disabled: true },
  { to: "not-found", text: "Clients", icon: "people-outline", disabled: true },
  {
    to: "not-found",
    text: "Users",
    icon: "supervised-user-circle",
    hasSeparator: true,
    disabled: true,
  },
  { to: "not-found", text: "Invoices", icon: "attach-money", disabled: true },
  {
    to: "not-found",
    text: "Proposals",
    icon: "insert-drive-file",
    hasSeparator: true,
    disabled: true,
  },
  { to: paths.supplierManagement, text: "Supplier Mgmt.", icon: "attach-money" },
  { to: paths.invoiceManagement, text: "Invoice Mgmt.", icon: "money" },
  {
    to: paths.supplierComparison,
    text: "Supplier Comp.",
    icon: "compare-arrows",
    hasSeparator: true,
  },
  { to: paths.productLaunchTracker, text: "Product Launch", icon: "launch" },
  { to: paths.dailyOperationsNotes, text: "Daily Operations", icon: "today" },
  { to: paths.productManagement, text: "Product Mgmt.", icon: "beenhere" },
];
