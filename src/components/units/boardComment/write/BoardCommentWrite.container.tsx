import { useEffect } from "react";
import * as S from "./BoardCommentWrite.emotions";
import { type IBoardCommentWriteUIProps } from "./BoardCommentWrite.typescript";
import { Rate } from "antd";

export default function BoardCommentWriteUI(props: IBoardCommentWriteUIProps) {
    useEffect(() => {
        console.log(props.commentData);
    }, [props.commentData]);

    return (
        <S.Wrapper>
            <>
                <S.PencilIcon src="/images/boardComment/write/pencil.png" />
                <span>댓글</span>
            </>
            <S.InputWrapper>
                <S.Input placeholder="작성자" name="writer" value={props.commentData?.writer} onChange={props.handleChange} />
                <S.Input placeholder="비밀번호" name="password" type="password" value={props.commentData?.password} onChange={props.handleChange} />
                <Rate allowHalf defaultValue={5} onChange={props.handleRating} />
            </S.InputWrapper>
            <S.ContentsWrapper>
                <S.Contents
                    placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
                    name="contents"
                    value={props.commentData?.contents}
                    onChange={props.handleChange}
                />
                <S.BottomWrapper>
                    <S.ContentsLength>{props.commentData?.contents?.length ? props.commentData?.contents?.length : 0}/100</S.ContentsLength>
                    <S.Button onClick={props.onSubmitComment}>등록하기</S.Button>
                </S.BottomWrapper>
            </S.ContentsWrapper>
        </S.Wrapper>
    );
}
