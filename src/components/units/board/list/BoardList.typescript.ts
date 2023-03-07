import { type IQuery } from "../../../../commons/types/generated/types";

export interface IBoardListUIProps {
    onClickMoveToBoardNew: () => void;
    onClickMoveToBoardDetail: (id: string) => void;
    data?: Pick<IQuery, "fetchBoards">;
}
