import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.queries";
import BoardCommentWriteUI from "./BoardCommentWrite.container";
import { CREATE_BOARD_COMMENT } from "./BoardCommentWrite.queries";

const initialState = {
    writer: "",
    contents: "",
    password: "",
};
export default function BoardCommentWrite() {
    const [commentData, setCommentData] = useState(initialState);
    const handleChange = (event) => {
        setCommentData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };

    const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
    const router = useRouter();

    const onSubmitComment = async () => {
        if (commentData?.writer && commentData?.password && commentData?.contents) {
            try {
                const result = await createBoardComment({
                    variables: {
                        boardId: router.query.boardId,
                        createBoardCommentInput: {
                            writer: commentData?.writer.toString(),
                            password: commentData?.password.toString(),
                            contents: commentData?.contents.toString(),
                            rating: 2,
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
            <BoardCommentWriteUI commentData={commentData} handleChange={handleChange} onSubmitComment={onSubmitComment} />
        </>
    );
}
