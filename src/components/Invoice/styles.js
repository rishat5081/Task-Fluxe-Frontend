import styled from "styled-components";

import theme from "theme";

export const Invoice = styled.div``;

export const Title = styled.h3`
  font-size: ${theme.font.bg.size};
  font-weight: 700;
  text-align: center;
  margin: 30px;
  color: ${theme.main.colors.primary};
`;

export const Image = styled.img`
  max-width: 420px;
  height: 137px;

  object-fit: contain;

  margin-bottom: 20px;
`;

export const Details = styled.div`
  margin-bottom: 24px;
`;
export const Input = styled.input`
  width: 50%;
`;

export const DetailsTitle = styled.h1`
  font-size: ${theme.font.sm.size};
  font-weight: 700;
  // text-align: center;

  color: ${theme.main.colors.text};
  text-transform: uppercase;

  margin-bottom: 12px;
`;

export const Detail = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 12px;
`;

export const DetailTitle = styled.span`
  font-size: ${theme.font.md.size};
  font-weight: 400;

  color: #8d8d8d;
  margin-right: 15px;
`;

export const DetailDesc = styled.span`
  font-size: ${theme.font.md.size};
  font-weight: 500;

  color: ${theme.main.colors.text};
`;

// export const Products = styled.div`
//   margin-bottom: 24px;
// `;

// export const Product = styled.p`
//   font-size: 15px;
//   font-weight: 500;

//   color: #3d3d3d;

//   margin-bottom: 10px;
// `;

export const Notes = styled.div`
  margin-bottom: 24px;
`;

export const Note = styled.p`
  font-size: 15px;
  font-weight: 500;

  color: #3d3d3d;
`;

export const Attachments = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin-bottom: 24px;
`;

export const Attachment = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 7px 12px;
  margin-right: 20px;
  border-radius: 12px;
  background-color: #ededed;
  color: #8a8a8a;
`;

export const AttachmentName = styled.a`
  font-size: 14px;
  color: #8a8a8a;

  margin-left: 7px;
`;

export const Button = styled.button`
  font-family: "Inter", sans-serif;

  background-color: transparent;
  padding: 0;
  margin: 0;
`;
export const FadedButton = styled(Button)`
  font-size: ${theme.font.sm.size};
  font-weight: 700;
  color: #fff;
  margin-top: 10px;
  text-align: center;
  padding: 8px 15px;
  border-radius: 12px;

  background-color: ${theme.main.colors.primary};
`;
