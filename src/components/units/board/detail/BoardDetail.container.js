import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import { DELETE_BORAD, FETCH_BOARD } from "./BoardDetail.queries";

export default function BoardDetail() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  const [deleteBoard] = useMutation(DELETE_BORAD);

  const onDelete = async () => {
    try {
      const result = await deleteBoard({
        variables: {
          boardId: router.query.boardId,
        },
      });

      router.push("/boards");
    } catch (error) {
      console.error(error);
    }
  };

  const onClickMoveToBoardList = () => {
    router.push("/boards");
  };

  return (
    <BoardDetailUI
      data={data}
      onDelete={onDelete}
      onClickMoveToBoardList={onClickMoveToBoardList}
    />
  );
}
