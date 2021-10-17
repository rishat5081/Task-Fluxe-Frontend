import { Chip, Icon } from "components";

export const trackerDetails = [
  "We'll try to find the product with the lowest cost and quickest production time.",
  "Proin amet augue erat integer in. Habitasse nibh pellentesque donec morbi dictum",
  "Morbi tempus lacus, tortor ut diam mi. Tempor, nibh non, dui non. Arcu laoreet ac.",
  "Morbi tincidunt tellus quisque mauris, nibh. Etiam phasellus nunc egestas gravida gravida velit ut amet.",
  "Et nec nunc augue aliquet adipiscing amet scelerisque condimentum lorem. Dui, vitae odio netus donec urna. Posuere arcu at dui a massa, quis nisl sem ornare. Enim molestie porta velit cursus a in. Amet tempor pulvinar diam sollicitudin potenti egestas eu faucibus lectus. Fermentum, commodo in vulputate ut vel in. Eu egestas.",
];

export const table = {
  data: [
    {
      taskListTitle: "Research",
      tasklist: [
        [
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ marginRight: "10px", color: "#c4c4c4" }}>
              <Icon width={22} height={22} name="check-circle-outline" />
            </span>
            Validate Market
          </div>,
          "03/01/2021",
          "John Doe",
          <Chip type="status" chipStyle="ontrack" />,
          <Chip type="priority" chipStyle="low" />,
          "This seems like a profitable",
        ],
        [
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ marginRight: "10px", color: "#c4c4c4" }}>
              <Icon width={22} height={22} name="check-circle-outline" />
            </span>
            Validate Profitability
          </div>,
          "03/01/2021",
          "John Doe",
          <Chip type="status" chipStyle="atrisk" />,
          <Chip type="priority" chipStyle="medium" />,
          "This seems like a profitable",
        ],
        [
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ marginRight: "10px", color: "#c4c4c4" }}>
              <Icon width={22} height={22} name="check-circle-outline" />
            </span>
            Supplier Research
          </div>,
          "03/01/2021",
          "John Doe",
          <Chip type="status" chipStyle="offtrack" />,
          <Chip type="priority" chipStyle="high" />,
          "This seems like a profitable",
        ],
        [
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ marginRight: "10px", color: "#c4c4c4" }}>
              <Icon width={22} height={22} name="check-circle-outline" />
            </span>
            Order Sample
          </div>,
          "03/01/2021",
          "John Doe",
          <Chip type="status" chipStyle="notset" />,
          <Chip type="priority" chipStyle="notset" />,
          "This seems like a profitable",
        ],
      ],
    },
    {
      taskListTitle: "Development",
      tasklist: [
        [
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ marginRight: "10px", color: "#c4c4c4" }}>
              <Icon width={22} height={22} name="check-circle-outline" />
            </span>
            Complete keyword ads research
          </div>,
          "03/01/2021",
          "John Doe",
          <Chip type="status" chipStyle="ontrack" />,
          <Chip type="priority" chipStyle="low" />,
          "This seems like a profitable",
        ],
        [
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ marginRight: "10px", color: "#c4c4c4" }}>
              <Icon width={22} height={22} name="check-circle-outline" />
            </span>
            Copywriting - Product Title
          </div>,
          "03/01/2021",
          "John Doe",
          <Chip type="status" chipStyle="atrisk" />,
          <Chip type="priority" chipStyle="medium" />,
          "This seems like a profitable",
        ],
        [
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ marginRight: "10px", color: "#c4c4c4" }}>
              <Icon width={22} height={22} name="check-circle-outline" />
            </span>
            Copywriting - Product Description
          </div>,
          "03/01/2021",
          "John Doe",
          <Chip type="status" chipStyle="offtrack" />,
          <Chip type="priority" chipStyle="high" />,
          "This seems like a profitable",
        ],
        [
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ marginRight: "10px", color: "#c4c4c4" }}>
              <Icon width={22} height={22} name="check-circle-outline" />
            </span>
            High Quality Images
          </div>,
          "03/01/2021",
          "John Doe",
          <Chip type="status" chipStyle="notset" />,
          <Chip type="priority" chipStyle="notset" />,
          "This seems like a profitable",
        ],
      ],
    },
  ],
  columns: ["Task", "Due Date", "Assigned To", "Status", "Priority", "Comments"],
};
