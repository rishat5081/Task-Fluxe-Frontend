import { useContext } from "react";
import moment from "moment";

import { InputTransparent, TextArea, Icon, LinkButton, SubmitButton, Hr } from "components";
import { CalendarEventContext } from "store/calendarEventContext";
import * as S from "./styles";

const CreateNewNote = () => {
  const { onAddEvent } = useContext(CalendarEventContext);

  const onCreateNewEventHandler = () => {
    const newEventStatic = {
      start: moment("20210920").toDate(),
      end: moment("20210921").add(1, "days").toDate(),
      title: "Static event by action",
    };

    onAddEvent(newEventStatic);
  };

  return (
    <>
      <S.Title>Create New Note</S.Title>
      <S.NoteEditor>
        <S.NoteEditorHeader>
          <S.NameOfNote>Name of note:</S.NameOfNote>
          <InputTransparent />
        </S.NoteEditorHeader>
        <S.NoteEditorBody>
          <TextArea placeholder="What is this note about?" />
        </S.NoteEditorBody>
      </S.NoteEditor>
      <S.SubTitle>Attachments</S.SubTitle>
      <S.Attachments>
        <S.Attachment>
          <Icon name="insert-drive-file" />
          <S.AttachmentName>File for discussion - 1</S.AttachmentName>
        </S.Attachment>
        <S.Attachment>
          <Icon name="insert-drive-file" />
          <S.AttachmentName>file.pdf</S.AttachmentName>
        </S.Attachment>
      </S.Attachments>
      <LinkButton icon="attach-file">Upload File</LinkButton>
      <Hr />
      <S.SubTitle>Subscribers</S.SubTitle>
      <S.Subscribers>
        <S.Subscriber>johndoe@testaccount.com</S.Subscriber>
      </S.Subscribers>
      <LinkButton icon="people-outline">Choose</LinkButton>
      <Hr />
      <S.SubTitle>Discussion</S.SubTitle>
      <S.Comment>
        <S.CommentUserPic src="/assets/images/user-pic.png" alt="Commented by Username" />
        <S.CommentDetails>
          <S.CommentDetailsHeader>
            <S.CommentUserName>Emily Jackson</S.CommentUserName>
            <S.CommentReply>
              <Icon name="mode-comment" />
            </S.CommentReply>
          </S.CommentDetailsHeader>
          <S.CommentDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mauris dolor egestas in.
            Duis duis aliquet egestas porttitor enim.
          </S.CommentDescription>
        </S.CommentDetails>
      </S.Comment>
      <S.MakeComment>
        <TextArea placeholder="Write a comment..." />
      </S.MakeComment>
      <S.CommentButtons>
        <SubmitButton>Add Comment</SubmitButton>
      </S.CommentButtons>
      <Hr />
      <S.CreateNewNoteButtons onClick={onCreateNewEventHandler}>
        <SubmitButton>Create Note</SubmitButton>
      </S.CreateNewNoteButtons>
    </>
  );
};

export default CreateNewNote;
