import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardDetailUI {
    data?: Pick<IQuery, "fetchBoard">;
    onDelete: () => void;
    onClickMoveToBoardList: () => void;
    onClickMoveToBoardEdit: () => void;
}
