import { getDate } from "../../../commons/utils/utils";
import {
  Avatar,
  AvatarWrapper,
  Body,
  BottomWrapper,
  Button,
  CardWrapper,
  Contents,
  CreatedAt,
  Header,
  Info,
  Title,
  Wrapper,
  Writer,
} from "./BoardDetail.emotions";

export default function BoardDetailUI(props) {
  return (
    <>
      <Wrapper>
        <CardWrapper>
          <Header>
            <AvatarWrapper>
              <Avatar src="/images/avatar.png" />
              <Info>
                <Writer>{props.data?.fetchBoard?.writer}</Writer>
                <CreatedAt>
                  Date:{getDate(props.data?.fetchBoard?.createdAt)}
                </CreatedAt>
              </Info>
            </AvatarWrapper>
          </Header>
          <Body>
            <Title>{props.data?.fetchBoard?.title}</Title>
            <Contents>{props.data?.fetchBoard?.contents}</Contents>
          </Body>
        </CardWrapper>
        <BottomWrapper>
          <Button onClick={props.onClickMoveToBoardList}>목록으로</Button>
          <Button>수정하기</Button>
          <Button onClick={props.onDelete}>삭제하기</Button>
        </BottomWrapper>
      </Wrapper>
    </>
  );
}
