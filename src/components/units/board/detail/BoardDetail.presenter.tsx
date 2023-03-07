import { LikeOutlined } from "@ant-design/icons";
import { DislikeOutlined } from "@ant-design/icons/lib/icons";
import { getDate } from "../../../commons/utils/utils";
import YouTube from "react-youtube";

import {
    Avatar,
    AvatarWrapper,
    Body,
    BottomWrapper,
    Button,
    CardWrapper,
    Contents,
    CreatedAt,
    DisLikeDiv,
    Header,
    Info,
    LikeDiv,
    LikeWrapper,
    Title,
    Wrapper,
    Writer,
    YouTubeWrapper,
} from "./BoardDetail.emotions";
import { type IBoardDetailUIProps } from "./BoardDetail.typescript";

export default function BoardDetailUI(props: IBoardDetailUIProps) {
    return (
        <>
            <Wrapper>
                <CardWrapper>
                    <Header>
                        <AvatarWrapper>
                            <Avatar src="/images/avatar.png" />
                            <Info>
                                <Writer>{props.data?.fetchBoard?.writer}</Writer>
                                <CreatedAt>Date:{getDate(props.data?.fetchBoard?.createdAt)}</CreatedAt>
                            </Info>
                        </AvatarWrapper>
                    </Header>
                    <Body>
                        <Title>{props.data?.fetchBoard?.title}</Title>
                        <Contents>{props.data?.fetchBoard?.contents}</Contents>
                    </Body>
                    <YouTubeWrapper>{typeof props.data?.fetchBoard?.youtubeUrl === "string" && <YouTube videoId={props.data?.fetchBoard?.youtubeUrl} opts={props.opts} />}</YouTubeWrapper>
                    <LikeWrapper>
                        <LikeDiv onClick={props.onClickLike}>
                            <LikeOutlined />
                            {props.data?.fetchBoard?.likeCount}
                        </LikeDiv>
                        <DisLikeDiv onClick={props.onClickDisLike}>
                            <DislikeOutlined />
                            {props.data?.fetchBoard?.dislikeCount}
                        </DisLikeDiv>
                    </LikeWrapper>
                </CardWrapper>
                <BottomWrapper>
                    <Button onClick={props.onClickMoveToBoardList}>목록으로</Button>
                    <Button onClick={props.onClickMoveToBoardEdit}>수정하기</Button>
                    <Button onClick={props.onDelete}>삭제하기</Button>
                </BottomWrapper>
            </Wrapper>
        </>
    );
}
