import { DashboardLayout } from "layouts";
import { Table, TableLink, EditableText } from "components";
import { comparisonDetails, table } from "constants/pages/comparisonSupplier";
import * as S from "./styles";

const ComparisonSupplier = () => {
  const colors = {
    yes: "#01BF80",
    maybe: "#F9B515",
    no: "#BF0101",
  };

  const tableData = table.data.map((el) => {
    return {
      ...el,
      col1: <span style={{ color: colors[el.col1.toLowerCase()] }}>{el.col1}</span>,
      col3: <TableLink>{el.col3}</TableLink>,
    };
  });

  return (
    <DashboardLayout title="Supplier | ACV Gummies">
      <S.ComparisonSupplier>
        <S.ComparisonDetail>
          <S.Title>Product Name</S.Title>
          <S.DescWrapper>
            <EditableText placeholder="Product name.." initialValue="Fidget Spinner" />
          </S.DescWrapper>
        </S.ComparisonDetail>
        <S.ComparisonDetail>
          <S.Title>Comments</S.Title>
          <S.DescWrapper>
            {comparisonDetails.map((detail) => (
              <EditableText placeholder="Detail here..." initialValue={detail} key={detail} />
            ))}
          </S.DescWrapper>
        </S.ComparisonDetail>
      </S.ComparisonSupplier>
      <Table payload={{ data: tableData, columns: table.columns }} noWrap />
    </DashboardLayout>
  );
};

export default ComparisonSupplier;
