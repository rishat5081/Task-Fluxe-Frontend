import { useContext } from "react";

import { DashboardLayout } from "layouts";
import { Tab, Product, EditableText } from "components";
import { ModalContext } from "store/modalContext";
import * as S from "./styles";

const ManagementProduct = () => {
  const { onShow } = useContext(ModalContext);

  const topbarAction = {
    name: "New Note",
    onClick: () => {
      onShow({
        title: "Create New Product Tracker",
        content: "This will be the form to create new tracker",
      });
    },
  };

  const content = [
    { anchor: "Product Specifications", component: <Product.ProductSpecification /> },
    { anchor: "Supplier", component: <Product.Supplier /> },
    { anchor: "Files", component: <Product.Files /> },
  ];

  return (
    <DashboardLayout title="Product | Fidget Spinner" topbarAction={topbarAction}>
      <S.Wrapper>
        <Tab content={content} />
      </S.Wrapper>
      <S.WrapperTitle>Product Images</S.WrapperTitle>
      <S.Wrapper>
        <S.Section>
          <S.Images>
            <S.Image src="/assets/images/product-image-1.png" />
            <S.Image src="/assets/images/product-image-2.png" />
            <S.Image src="/assets/images/product-image-3.png" />
            <S.Image src="/assets/images/product-image-4.png" />
          </S.Images>
        </S.Section>
      </S.Wrapper>
      <S.WrapperTitle>Product Qualities</S.WrapperTitle>
      <S.Wrapper>
        <S.Section>
          <S.QualityWrapper>
            <S.Quality>
              <S.QualityTitle>Length:</S.QualityTitle>
              <EditableText placeholder="Add information.." initialValue="3,2 inch" />
            </S.Quality>
            <S.Quality>
              <S.QualityTitle>Width:</S.QualityTitle>
              <EditableText placeholder="Add information.." initialValue="6,7 inch" />
            </S.Quality>
            <S.Quality>
              <S.QualityTitle>Height:</S.QualityTitle>
              <EditableText placeholder="Add information.." initialValue="7,1 inch" />
            </S.Quality>
          </S.QualityWrapper>
          <S.Quality>
            <S.QualityTitle>Color:</S.QualityTitle>
            <EditableText placeholder="Add information.." initialValue="Midnight Black" />
          </S.Quality>
          <S.Quality>
            <S.QualityTitle>Materials:</S.QualityTitle>
            <EditableText placeholder="Add information.." initialValue="PVC, Plastic, Rubber" />
          </S.Quality>
          <S.Quality>
            <S.QualityTitle>Additional Info:</S.QualityTitle>
            <EditableText placeholder="Add information.." initialValue="PVC, Plastic, Rubber" />
          </S.Quality>
          <S.Quality>
            <S.QualityTitle>Additional Info:</S.QualityTitle>
            <S.QualityDescWrapper>
              <EditableText
                placeholder="Add information about product..."
                initialValue="Alexa-enabled for voice access to music, information, and more"
              />
              <EditableText
                placeholder="Add information about product..."
                initialValue="Balanced audio performance at any volume"
              />
              <EditableText
                placeholder="Add information about product..."
                initialValue="Bose AR enabled — an innovative, audio-only version of augmented reality"
              />
            </S.QualityDescWrapper>
          </S.Quality>
        </S.Section>
      </S.Wrapper>
    </DashboardLayout>
  );
};

export default ManagementProduct;
