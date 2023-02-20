import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWriterUI from "./BoardWrite.presenter";
import { CREATE_BOARD } from "./BoardWrite.queries";

export default function BoardWrite() {
  const [createBoard] = useMutation(CREATE_BOARD);
  const rounter = useRouter();

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

      rounter.push(`/boards/${result?.data?.createBoard?._id}`);
    } catch (err) {
      console.error(err);
    }
  };

  return <BoardWriterUI onClickSubmit={onClickSubmit} />;
}
