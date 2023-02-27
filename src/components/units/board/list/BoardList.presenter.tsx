import * as S from "./BoardList.emotions";
import { getDate } from "../../../commons/utils/utils";
import { IBoardListUI } from "./BoardList.typescript";
export default function BoardListUI(props: IBoardListUI) {
    return (
        <>
            <S.Wrapper>
                <S.TableTop />
                <S.HeaderRow>
                    <S.ColumnHeaderBasic>ID</S.ColumnHeaderBasic>
                    <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
                    <S.ColumnHeaderBasic>작성자</S.ColumnHeaderBasic>
                    <S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
                </S.HeaderRow>
                {props.data?.fetchBoards.map((item) => (
                    <S.Row key={item._id}>
                        <S.ColumnBasic>{item?._id.slice(0, 4).toUpperCase()}</S.ColumnBasic>
                        <S.ColumnTitle
                            onClick={() => {
                                props.onClickMoveToBoardDetail(item?._id);
                            }}
                        >
                            {item?.title}
                        </S.ColumnTitle>
                        <S.ColumnBasic>{item?.writer}</S.ColumnBasic>
                        <S.ColumnBasic>{getDate(item?.createdAt)}</S.ColumnBasic>
                    </S.Row>
                ))}
                <S.TableBottom />
                <S.Footer>
                    <S.Button onClick={props.onClickMoveToBoardNew}>
                        <S.PencilIcon src="/images/board/list/write.png" />
                        게시물 등록하기
                    </S.Button>
                </S.Footer>
            </S.Wrapper>
        </>
    );
}
