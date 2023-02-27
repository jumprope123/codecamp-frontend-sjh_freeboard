import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardListUI {
    onClickMoveToBoardNew: () => void;
    onClickMoveToBoardDetail: (id: string) => void;
    data?: Pick<IQuery, "fetchBoards">;
}
