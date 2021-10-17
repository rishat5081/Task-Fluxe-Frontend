import * as S from "./styles";

const Product = () => {
  return (
    <S.Product>
      <S.ProductTitlePanel>
        <S.ProductTitle>Product Name</S.ProductTitle>
        <S.ProductTitle>Brand</S.ProductTitle>
        <S.ProductTitle>Product ID</S.ProductTitle>
        <S.ProductTitle>Comments</S.ProductTitle>
      </S.ProductTitlePanel>
      <S.ProductDescPanel>
        <S.ProductDesc>Headphones</S.ProductDesc>
        <S.ProductDesc>Bose</S.ProductDesc>
        <S.ProductDesc>B0756CYWWD</S.ProductDesc>
        <S.ProductDesc>We would like to launch this product within 2 months</S.ProductDesc>
      </S.ProductDescPanel>
    </S.Product>
  );
};

export default Product;
