import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import type { IMutation, IMutationDeleteBoardCommentArgs, IQuery, IQueryFetchBoardCommentsArgs } from "../../../../commons/types/generated/types";
import BoardCommentListUI from "./BoardCommentList.presenter";
import { DELETE_BOARD_COMMENTS, FETCH_BOARD_COMMENTS } from "./BoardCommentList.queries";
import type { MouseEvent } from "react";

export default function BoardCommentList() {
    const router = useRouter();

    const { data } = useQuery<Pick<IQuery, "fetchBoardComments">, IQueryFetchBoardCommentsArgs>(FETCH_BOARD_COMMENTS, {
        variables: {
            boardId: router.query.boardId as string,
        },
    });

    const [deleteBoardComment] = useMutation<Pick<IMutation, "deleteBoardComment">, IMutationDeleteBoardCommentArgs>(DELETE_BOARD_COMMENTS);

    const onClickDelete = async (event: MouseEvent<HTMLImageElement>) => {
        try {
            const password = prompt("비밀번호를 입력하세요", "");
             await deleteBoardComment({
                variables: {
                    boardCommentId: event.currentTarget.id,
                    password,
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
            if (e instanceof Error) console.error(e);
        }
    };

    return <BoardCommentListUI data={data} onClickDelete={onClickDelete} />;
}
