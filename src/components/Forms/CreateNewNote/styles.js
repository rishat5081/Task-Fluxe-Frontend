import styled from "styled-components";

import theme from "theme";

export const Title = styled.h3`
  font-size: ${theme.font.bg.size};
  font-weight: 700;

  color: ${theme.main.colors.text};

  margin-bottom: 12px;
`;

export const SubTitle = styled.h4`
  font-size: ${theme.font.sm.size};
  font-weight: 700;

  color: #8d8d8d;
  text-transform: uppercase;

  margin-bottom: 16px;
`;

export const NoteEditor = styled.div`
  border: 1px solid #dedede;
  border-radius: 12px;

  margin-bottom: 24px;
`;

export const NoteEditorHeader = styled.div`
  display: flex;
  align-items: center;

  padding: 15px;
  border-bottom: 1px solid #dedede;
`;

export const NoteEditorBody = styled.div`
  padding: 15px;
`;

export const NameOfNote = styled.span`
  font-size: ${theme.font.sm.size};
  font-weight: 500;

  color: #8d8d8d;
`;

export const Attachments = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin-bottom: 40px;
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

export const AttachmentName = styled.span`
  font-size: 14px;
  color: #8a8a8a;

  margin-left: 7px;
`;

export const Subscribers = styled.div`
  margin-bottom: 40px;
`;

export const Subscriber = styled.p`
  font-size: ${theme.font.sm.size};
  color: #8a8a8a;
`;

export const Comment = styled.div`
  display: flex;
  max-width: 550px;
`;

export const CommentUserPic = styled.img`
  width: 32px;
  height: 32px;

  margin-right: 10px;
`;

export const CommentDetails = styled.div``;

export const CommentDetailsHeader = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 12px;
`;

export const CommentUserName = styled.span`
  font-size: ${theme.font.rg.size};
  font-weight: 600;

  color: #3d3d3d;

  margin-right: 18px;
`;

export const CommentReply = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${theme.main.colors.primary};
`;

export const CommentDescription = styled.p`
  font-size: ${theme.font.rg.size};

  color: #3d3d3d;
`;

export const MakeComment = styled.div`
  max-width: 550px;
  height: 100px;

  border-radius: 15px;
  background-color: #f3f3f3;

  margin-top: 25px;
  padding: 15px;
`;

export const CommentButtons = styled.div`
  display: flex;
  align-items: center;

  margin-top: -10px;
  margin-bottom: 40px;
`;

export const CreateNewNoteButtons = styled.div`
  display: flex;
  align-items: center;
`;
