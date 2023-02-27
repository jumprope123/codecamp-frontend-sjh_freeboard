import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ICreateBoardInput, IMutation, IMutationCreateBoardArgs, IMutationUpdateBoardArgs, IQuery, IQueryFetchBoardArgs } from "../../../../commons/types/generated/types";
import { FETCH_BOARD } from "../detail/BoardDetail.queries";
import BoardWriterUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { IBoardWriteInput, IBoardWriteProps } from "./BoardWrite.typescript";

export default function BoardWrite(props: IBoardWriteProps) {
    const router = useRouter();
    const [createBoard] = useMutation<Pick<IMutation, "createBoard">, IMutationCreateBoardArgs>(CREATE_BOARD);
    const [updateBoard] = useMutation<Pick<IMutation, "updateBoard">, IMutationUpdateBoardArgs>(UPDATE_BOARD);

    const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(FETCH_BOARD, {
        variables: {
            boardId: router.query.boardId as string,
        },
    });

    const onClickSubmit = async (data: IBoardWriteInput) => {
        try {
            const result = await createBoard({
                variables: {
                    createBoardInput: {
                        writer: data?.writer,
                        password: data?.password,
                        title: data?.title,
                        contents: data?.contents,
                        youtubeUrl: data?.youtubeUrl,
                        boardAddress: {
                            zipcode: data?.zipcode,
                            address: data?.address,
                            addressDetail: data?.addressDetail,
                        },
                        images: data?.images,
                    },
                },
            });

            router.push(`/boards/${result?.data?.createBoard?._id}`);
        } catch (err) {
            console.error(err);
        }
    };

    const onClickUpdate = async (data: IBoardWriteInput) => {
        try {
            const result = await updateBoard({
                variables: {
                    boardId: router.query.boardId as string,
                    password: data?.password,
                    updateBoardInput: {
                        title: data?.title,
                        contents: data?.contents,
                        youtubeUrl: data?.youtubeUrl,
                        boardAddress: {
                            zipcode: data?.zipcode,
                            address: data?.address,
                            addressDetail: data?.addressDetail,
                        },
                        images: data?.images,
                    },
                },
            });
            router.push(`/boards/${result?.data?.updateBoard?._id}`);
        } catch (err) {
            console.error(err);
        }
    };

    return <BoardWriterUI onClickSubmit={onClickSubmit} onClickUpdate={onClickUpdate} isEdit={props.isEdit} data={data} />;
}
