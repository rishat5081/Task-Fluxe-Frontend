// export const table = {
//   data: [
//     {
//       col1: "Ama",
//       col2: "Joe Smith",
//       col3: "joesmith@ama.com",
//       col4: "$2.000",
//       paidInvoice: "$749.65",
//       col6: <i className="fa fa-cog" />,
//     },
//     {
//       col1: "TEC",
//       col2: "Joe Smith",
//       col3: "joesmith@ama.com",
//       col4: "$2.000",
//       col5: "$749.65",
//       col6: <i className="fa fa-cog" />,
//     },
//     {
//       col1: "Lorem ipsum",
//       col2: "Joe Smith",
//       col3: "joesmith@ama.com",
//       col4: "$2.000",
//       col5: "$749.65",
//       col6: <i className="fa fa-cog" />,
//     },
//     {
//       col1: "Dolar sit amen",
//       col2: "Joe Smith",
//       col3: "joesmith@ama.com",
//       col4: "$2.000",
//       col5: "$749.65",
//       col6: <i className="fa fa-cog" />,
//     },
//   ],
//   columns: [
//     {
//       Header: "Company Name",
//       accessor: "col1",
//     },
//     {
//       Header: "Supplier Name",
//       accessor: "col2",
//     },
//     {
//       Header: "Email Address",
//       accessor: "col3",
//     },
//     {
//       Header: "Contact Number",
//       accessor: "col4",
//     },
//     {
//       Header: "Mobile Number",
//       accessor: "col5",
//     },
//     {
//       Header: "Setting",
//       accessor: "col6",
//     },
//   ],
// };

export const table = {
  data: [
    {
      id: "Ama",
      companyName: "Ama",
      supplierName: "Joe Smith",
      supplierEmail: "joesmith@ama.com",
      outStanding: "$2.000",
      paidInvoice: "$749.65",
      dueDate: "01/04/2021",
      status: "Paid",
    },
    {
      id: "TEC",
      companyName: "TEC",
      supplierName: "Joe Smith",
      supplierEmail: "joesmith@ama.com",
      outStanding: "$2.000",
      paidInvoice: "$749.65",
      dueDate: "01/04/2021",
      status: "Paid",
    },
  ],
  columns: [
    {
      Header: "Company Name",
      accessor: "companyName",
    },
    {
      Header: "Contact Name",
      accessor: "supplierName",
    },
    {
      Header: "Email Address",
      accessor: "supplierEmail",
    },
    {
      Header: "Outstanding Invoice",
      accessor: "outStanding",
    },
    {
      Header: "Paid Invoice",
      accessor: "paidInvoice",
    },
    {
      Header: "Due Date",
      accessor: "dueDate",
    },
    {
      Header: "Status",
      accessor: "status",
    },
    // {
    //   Header: "",
    //   accessor: "col8",
    // },
  ],
};
