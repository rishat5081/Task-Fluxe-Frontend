export const table = {
  data: [
    {
      id: 1,
      UUID: "",
      supplierName: "VCX Supplements",
      productName: "ACV Gummies",
      invoiceTitle: "Invoice 2",
      invoiceID: "105",
      invoiceDueDate: "01/04/2021",
      invoiceTotal: "$100,00",
      invoicePaid: "$8,88",
      invoiceStatusTitle: "Paid",
      invoiceFile: "Invoice.pdf",
      invoiceNotes: "See notes",
    },
    {
      id: 1,
      UUID: "",
      supplierName: "Mattel Toys",
      productName: "ACV Gummies",
      invoiceTitle: "Invoice 2",
      invoiceID: "105",
      invoiceDueDate: "01/04/2021",
      invoiceTotal: "$100,00",
      invoicePaid: "$8,88",
      invoiceStatusTitle: "Paid",
      invoiceFile: "Invoice.pdf",
      invoiceNotes: "See notes",
    },
    {
      id: 1,
      UUID: "",
      supplierName: "RCV Supplements",
      productName: "ACV Gummies",
      invoiceTitle: "Invoice 2",
      invoiceID: "105",
      invoiceDueDate: "01/04/2021",
      invoiceTotal: "$100,00",
      invoicePaid: "$8,88",
      outstandingAmount: "$8,88",
      invoiceStatusTitle: "Paid",
      invoiceFile: "Invoice.pdf",
      invoiceNotes: "See notes",
    },
  ],
  columns: [
    {
      Header: "Supplier Name",
      accessor: "supplierName",
    },
    {
      Header: "Product Name",
      accessor: "productName",
    },
    {
      Header: "Invoice Name",
      accessor: "invoiceTitle",
    },
    {
      Header: "Invoice #",
      accessor: "invoiceID",
    },
    {
      Header: "Due Date",
      accessor: "invoiceDueDate",
    },
    {
      Header: "Invoice Amount",
      accessor: "invoiceTotal",
    },
    {
      Header: "Paid Amount",
      accessor: "invoicePaid",
    },
    {
      Header: "Outstanding Amount",
      accessor: "outstandingAmount",
    },
    {
      Header: "Status",
      accessor: "invoiceStatusTitle",
    },
    {
      Header: "Attachment",
      accessor: "invoiceFile",
    },
    {
      Header: "Notes",
      accessor: "invoiceNotes",
    },
  ],
};
