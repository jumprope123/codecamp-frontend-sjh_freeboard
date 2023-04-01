import { ApolloQueryResult } from "@apollo/client";
import { IQueryFetchBoardsArgs, type IQuery } from "../../../../commons/types/generated/types";

export interface IBoardListUIProps {
    onClickMoveToBoardNew: () => void;
    onClickMoveToBoardDetail: (id: string) => void;
    data?: Pick<IQuery, "fetchBoards">;
    refetch: (variables?: Partial<IQueryFetchBoardsArgs> | undefined) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
    count?: number;
}
