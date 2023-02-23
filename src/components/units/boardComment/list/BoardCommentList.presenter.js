import * as S from "./BoardCommentList.emotions";
import { getDate } from "../../../../components/commons/utils/utils";

export default function BoardCommentListUI(props) {
    return (
        <>
            {props.data?.fetchBoardComments.map((item) => (
                <S.ItemWrapper key={item._id}>
                    <S.FlexWrapper>
                        <S.Avatar src="/images/avatar.png" />
                        <S.MainWrapper>
                            <S.WriterWrapper>
                                <S.Writer>{item.writer}</S.Writer>
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
