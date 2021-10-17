import theme from "theme";

export const chipStatus = {
  ontrack: {
    color: theme.main.colors.green,
    text: "On Track",
  },
  atrisk: {
    color: theme.main.colors.yellow,
    text: "At Risk",
  },
  offtrack: {
    color: theme.main.colors.red,
    text: "Off Track",
  },
  notset: {
    color: theme.main.colors.gray,
    text: "Not Set",
  },
};

export const chipPriority = {
  low: {
    color: theme.main.colors.green,
    text: "Low",
  },
  medium: {
    color: theme.main.colors.yellow,
    text: "Medium",
  },
  high: {
    color: theme.main.colors.red,
    text: "High",
  },
  notset: {
    color: theme.main.colors.gray,
    text: "Not Set",
  },
};
