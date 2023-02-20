import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARD } from "../detail/BoardDetail.queries";
import BoardWriterUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";

export default function BoardWrite(props) {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  const onClickSubmit = async (data) => {
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

  const onClickUpdate = async (data) => {
    try {
      const result = await updateBoard({
        variables: {
          boardId: router.query.boardId,
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
