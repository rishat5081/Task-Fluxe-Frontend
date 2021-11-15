import { Chip, Icon } from "components";

export const trackerDetails = [
  "We'll try to find the product with the lowest cost and quickest production time.",
  "Proin amet augue erat integer in. Habitasse nibh pellentesque donec morbi dictum",
  "Morbi tempus lacus, tortor ut diam mi. Tempor, nibh non, dui non. Arcu laoreet ac.",
  "Morbi tincidunt tellus quisque mauris, nibh. Etiam phasellus nunc egestas gravida gravida velit ut amet.",
  "Et nec nunc augue aliquet adipiscing amet scelerisque condimentum lorem. Dui, vitae odio netus donec urna. Posuere arcu at dui a massa, quis nisl sem ornare. Enim molestie porta velit cursus a in. Amet tempor pulvinar diam sollicitudin potenti egestas eu faucibus lectus. Fermentum, commodo in vulputate ut vel in. Eu egestas.",
];

export const table = [
  {
    productLaunchListsTitle: "Research",
    productLaunchListsUUID: 1210,
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
        <Chip type="status" chipStyle="ontrack" color="#01BF80" />,
        <Chip type="priority" chipStyle="low" color="#01BF80" />,
        "This seems like a profitable",
      ],
    ],
  },
  {
    productLaunchListsTitle: "Development",
    productLaunchListsUUID: 1211,
    tasklist: [
      {
        title: (
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ marginRight: "10px", color: "#c4c4c4" }}>
              <Icon width={22} height={22} name="check-circle-outline" />
            </span>
            Complete keyword ads research
          </div>
        ),
        date: "03/01/2021",
        assigned: "John Doe",
        status: <Chip type="status" chipStyle="ontrack" color="#01BF80" />,
        priority: <Chip type="priority" chipStyle="low" color="#01BF80" />,
        comment: "This seems like a profitable",
      },
    ],
  },
];

export const taskTableColumns = [
  "Task",
  "Due Date",
  "Assigned To",
  "Status",
  "Priority",
  "Comments",
  "",
  // "Close",
];
