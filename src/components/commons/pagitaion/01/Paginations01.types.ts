import { ApolloQueryResult } from "@apollo/client";
import { MouseEvent } from "react";
import { IQuery, IQueryFetchBoardsArgs } from "../../../../commons/types/generated/types";

export interface IPaginations01Props {
    count?: number;
    refetch: (variables: Partial<IQueryFetchBoardsArgs>) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
}

export interface IPaginations01UIProps {
    onClickPage: (event: MouseEvent<HTMLSpanElement>) => void;
    onClickPrevPage: () => void;
    onClickNextPage: () => void;
    onClickFirstPage: () => void;
    onClickLastPage: () => void;
    startPage: number;
    lastPage: number;
    activedPage: number;
}

export interface IPageProps {
    isActive: boolean;
}
