import * as S from "./BoardList.emotions";
import { getDate } from "../../../commons/utils/utils";
import { type IBoardListUIProps } from "./BoardList.typescript";
import PageNation01 from "../../../commons/pagitaion/01/Paginations01.container";
export default function BoardListUI(props: IBoardListUIProps) {
    return (
        <>
            <S.CenterDiv>
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
                    <S.NavigationWrapper>
                        <PageNation01 refetch={props.refetch} count={props.count} />
                    </S.NavigationWrapper>
                    <S.Footer>
                        <S.Button onClick={props.onClickMoveToBoardNew}>
                            <S.PencilIcon src="/images/board/list/write.png" />
                            게시물 등록하기
                        </S.Button>
                    </S.Footer>
                </S.Wrapper>
            </S.CenterDiv>
        </>
    );
}
