export const details = [
  {
    header: "Company Details",
    rows: [
      { title: "Phone Number:", desc: "111-111-111" },
      { title: "Company Website:", desc: "ama.com" },
      { title: "Company Address:", desc: "123 Easy Rd. San Diego, CA 11" },
    ],
  },
  {
    header: "Contact Details",
    rows: [
      { title: "Contact Name:", desc: "Jeff Smith" },
      { title: "Company Position:", desc: "CEO" },
      { title: "Email Address:", desc: "jeffsmith@ama.com" },
      { title: "Phone Number:", desc: "111-222-111" },
    ],
  },
];

export const table = {
  data: [
    {
      col1: "$2.000,00",
      col2: "$798,65",
      col3: "01/05/2021",
      col4: "Paid",
    },
    {
      col1: "$2.000,00",
      col2: "$798,65",
      col3: "01/05/2021",
      col4: "Paid",
    },
    {
      col1: "$2.000,00",
      col2: "$798,65",
      col3: "01/05/2021",
      col4: "Paid",
    },
  ],
  columns: [
    {
      Header: "Outstanding",
      accessor: "col1",
    },
    {
      Header: "Paid",
      accessor: "col2",
    },
    {
      Header: "Due Date",
      accessor: "col3",
    },
    {
      Header: "Status",
      accessor: "col4",
    },
  ],
};
