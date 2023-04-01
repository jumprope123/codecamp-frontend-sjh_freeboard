import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IQueryFetchBoardsCountArgs, type IQuery, type IQueryFetchBoardsArgs } from "../../../../commons/types/generated/types";
import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";

export default function BoardList() {
    const router = useRouter();
    const { data, refetch } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS);
    const { data: dataBoardsCount } = useQuery<Pick<IQuery, "fetchBoardsCount">, IQueryFetchBoardsCountArgs>(FETCH_BOARDS_COUNT);

    const onClickMoveToBoardNew = () => {
        void router.push("/boards/new");
    };

    const onClickMoveToBoardDetail = (id: string) => {
        void router.push(`/boards/${id}`);
    };

    return (
        <BoardListUI
            onClickMoveToBoardNew={onClickMoveToBoardNew}
            onClickMoveToBoardDetail={onClickMoveToBoardDetail}
            data={data}
            refetch={refetch}
            count={dataBoardsCount?.fetchBoardsCount}
        />
    );
}
