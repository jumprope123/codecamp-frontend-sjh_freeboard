import { IQueryFetchBoardArgs } from "../../../../commons/types/generated/types";

export interface IBoardWriteProps {
    isEdit: boolean;
}

export interface IBoardWriterUIProps {
    onClickSubmit: (data: any) => void;
    onClickUpdate: (data: any) => void;
    isEdit: boolean;
    data: any;
}

export interface ISubmitButtonProps {
    activeButton: boolean;
}

export interface IBoardWriteInput {
    writer: string;
    password: string;
    title: string;
    contents: string;
    zipcode?: string;
    address?: string;
    addressDetail?: string;
    youtubeUrl?: string;
    images?: string[];
}
