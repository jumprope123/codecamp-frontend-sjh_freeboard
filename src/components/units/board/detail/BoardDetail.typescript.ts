import { type IQuery } from "../../../../commons/types/generated/types";
import type { YouTubeProps } from "react-youtube";

export interface IBoardDetailUIProps {
    data?: Pick<IQuery, "fetchBoard">;
    onPlayerReady: YouTubeProps["onReady"];
    opts: YouTubeProps["opts"];
    onDelete: () => void;
    onClickMoveToBoardList: () => void;
    onClickMoveToBoardEdit: () => void;
    onClickLike: () => void;
    onClickDisLike: () => void;
}
