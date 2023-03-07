import { type ChangeEvent } from "react";

export interface IBoardCommentWriteUIProps {
    commentData?: IInitialState;
    handleChange: (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void;
    handleRating: (rating: number) => void;
    onSubmitComment: () => void;
}

export interface IInitialState {
    writer?: string;
    contents?: string;
    password?: string;
    rating?: number;
}
