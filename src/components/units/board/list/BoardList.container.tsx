import { useQuery } from "@apollo/client";
import { Router, useRouter } from "next/router";
import { IQuery, IQueryFetchBoardsArgs } from "../../../../commons/types/generated/types";
import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS } from "./BoardList.queries";

export default function BoardList() {
    const router = useRouter();
    const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS);

    const onClickMoveToBoardNew = () => {
        router.push("/boards/new");
    };

    const onClickMoveToBoardDetail = (id: string) => {
        router.push(`/boards/${id}`);
    };

    return <BoardListUI onClickMoveToBoardNew={onClickMoveToBoardNew} onClickMoveToBoardDetail={onClickMoveToBoardDetail} data={data} />;
}
