import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState, type ChangeEvent } from "react";
import { type IMutation, type IMutationCreateBoardCommentArgs } from "../../../../commons/types/generated/types";
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.queries";
import BoardCommentWriteUI from "./BoardCommentWrite.container";
import { CREATE_BOARD_COMMENT } from "./BoardCommentWrite.queries";

import { type IInitialState } from "./BoardCommentWrite.typescript";

const initialState: IInitialState = {
    writer: "",
    contents: "",
    password: "",
    rating: 5,
};
export default function BoardCommentWrite() {
    const [commentData, setCommentData] = useState(initialState);
    const handleChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        setCommentData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };

    const handleRating = (rating: number) => {
        setCommentData((prev) => ({
            ...prev,
            rating,
        }));
    };

    const [createBoardComment] = useMutation<Pick<IMutation, "createBoardComment">, IMutationCreateBoardCommentArgs>(CREATE_BOARD_COMMENT);
    const router = useRouter();

    const onSubmitComment = async () => {
        if (commentData?.writer && commentData?.password && commentData?.contents && commentData?.rating) {
            try {
                await createBoardComment({
                    variables: {
                        boardId: router.query.boardId as string,
                        createBoardCommentInput: {
                            writer: commentData.writer.toString(),
                            password: commentData.password.toString(),
                            contents: commentData.contents.toString(),
                            rating: commentData.rating,
                        },
                    },
                    refetchQueries: [
                        {
                            query: FETCH_BOARD_COMMENTS,
                            variables: {
                                boardId: router.query.boardId,
                            },
                        },
                    ],
                });
                setCommentData(initialState);
            } catch (error) {
                console.error(error);
            }
        } else {
            alert("작성자,비밀번호,내용중 빈 값이 있습니다.");
        }
    };
    return (
        <>
            <BoardCommentWriteUI commentData={commentData} handleChange={handleChange} onSubmitComment={onSubmitComment} handleRating={handleRating} />
        </>
    );
}
