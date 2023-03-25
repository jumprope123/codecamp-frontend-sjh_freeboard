import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import type {
    IMutationDislikeBoardArgs,
    IMutationLikeBoardArgs,
    IMutation,
    IMutationDeleteBoardArgs,
    IQuery,
    IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import BoardDetailUI from "./BoardDetail.presenter";
import { DELETE_BORAD, DISLIKE_BOARD, FETCH_BOARD, LIKE_BOARD } from "./BoardDetail.queries";
import type { YouTubeProps } from "react-youtube";

export default function BoardDetail() {
    const router = useRouter();

    const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(FETCH_BOARD, {
        variables: {
            boardId: router.query.boardId as string,
        },
    });

    const [deleteBoard] = useMutation<Pick<IMutation, "deleteBoard">, IMutationDeleteBoardArgs>(DELETE_BORAD);
    const [likeBoard] = useMutation<Pick<IMutation, "likeBoard">, IMutationLikeBoardArgs>(LIKE_BOARD);
    const [dislikeBoard] = useMutation<Pick<IMutation, "dislikeBoard">, IMutationDislikeBoardArgs>(DISLIKE_BOARD);

    const onDelete = async () => {
        try {
            await deleteBoard({
                variables: {
                    boardId: router.query.boardId as string,
                },
            });

            void router.push("/boards");
        } catch (error) {
            console.error(error);
        }
    };

    const onClickMoveToBoardList = () => {
        void router.push("/boards");
    };

    const onClickMoveToBoardEdit = () => {
        if (typeof router.query.boardId === "string") {
            void router.push(`/boards/${router.query.boardId}/edit`);
        }
    };

    const onClickLike = async () => {
        try {
            await likeBoard({
                variables: {
                    boardId: router.query.boardId as string,
                },
                refetchQueries: [
                    {
                        query: FETCH_BOARD,
                        variables: {
                            boardId: router.query.boardId,
                        },
                    },
                ],
            });
        } catch (error) {
            console.error(error);
        }
    };

    const onClickDisLike = async () => {
        try {
            await dislikeBoard({
                variables: {
                    boardId: router.query.boardId as string,
                },
                refetchQueries: [
                    {
                        query: FETCH_BOARD,
                        variables: {
                            boardId: router.query.boardId,
                        },
                    },
                ],
            });
        } catch (error) {
            console.error(error);
        }
    };

    const onPlayerReady: YouTubeProps["onReady"] = (event) => {
        event.target.pauseVideo();
    };

    const opts: YouTubeProps["opts"] = {
        height: "390",
        width: "640",
        playerVars: {
            autoplay: 1,
        },
    };

    const getSafeString = (value: any): string => {
        if (value === null || value === undefined) {
            return "";
        } else {
            return value.toString();
        }
    };

    return (
        <BoardDetailUI
            data={data}
            opts={opts}
            onPlayerReady={onPlayerReady}
            onDelete={onDelete}
            onClickMoveToBoardList={onClickMoveToBoardList}
            onClickMoveToBoardEdit={onClickMoveToBoardEdit}
            onClickDisLike={onClickDisLike}
            onClickLike={onClickLike}
            getSafeString={getSafeString}
        />
    );
}
