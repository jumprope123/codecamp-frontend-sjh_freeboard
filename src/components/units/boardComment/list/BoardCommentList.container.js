import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardCommentListUI from "./BoardCommentList.presenter";
import { DELETE_BOARD_COMMENTS, FETCH_BOARD_COMMENTS } from "./BoardCommentList.queries";

export default function BoardCommentList() {
    const router = useRouter();

    const { data } = useQuery(FETCH_BOARD_COMMENTS, {
        variables: {
            boardId: router.query.boardId,
        },
    });

    const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENTS);

    const onClickDelete = async (event) => {
        try {
            const password = prompt("비밀번호를 입력하세요", "");
            const result = await deleteBoardComment({
                variables: {
                    boardCommentId: event.target.id,
                    password: password,
                },
                refetchQueries: [
                    {
                        query: FETCH_BOARD_COMMENTS,
                        variables: {
                            boardId: router.query.boardId,
                        },
                    },
                ],
            });
        } catch (e) {
            alert("비밀번호가 일치하지 않습니다.");
            console.error(e);
        }
    };

    return <BoardCommentListUI data={data} onClickDelete={onClickDelete} />;
}
