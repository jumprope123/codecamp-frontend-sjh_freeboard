import * as S from "./BoardCommentList.emotions";
import { getDate } from "../../../commons/utils/utils";
import type { IBoardCommentListUIProps } from "./BoardCommentList.typescript";
import type { MouseEvent } from "react";
import { Rate } from "antd";

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
    const handleClickDiv = (event: MouseEvent<HTMLDivElement>) => {
        alert(event.currentTarget.id + "님이 작성하신 댓글입니다.");
    };

    console.log(props.data?.fetchBoardComments);

    return (
        <>
            {props.data?.fetchBoardComments.map((item) => (
                <S.ItemWrapper key={item._id} id={item.writer as string} onClick={handleClickDiv}>
                    <S.FlexWrapper>
                        <S.Avatar src="/images/avatar.png" />
                        <S.MainWrapper /* onClick={test} */>
                            <S.WriterWrapper>
                                <S.Writer>{item.writer}</S.Writer>
                                <S.ratingDiv>
                                    <Rate allowHalf value={item.rating} disabled />
                                </S.ratingDiv>
                            </S.WriterWrapper>
                            <S.Contents>{item.contents}</S.Contents>
                        </S.MainWrapper>
                        <S.OptionWrapper>
                            <S.UpdateIcon src="/images/boardComment/list/option_update_icon.png/" />
                            <S.DeleteIcon id={item._id} onClick={props.onClickDelete} src="/images/boardComment/list/option_delete_icon.png/" />
                        </S.OptionWrapper>
                    </S.FlexWrapper>
                    <S.DateString>{getDate(item.createdAt)}</S.DateString>
                </S.ItemWrapper>
            ))}
        </>
    );
}
