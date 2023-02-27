import { gql } from "@apollo/client";

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
      youtubeUrl
      likeCount
      dislikeCount
      images
      boardAddress {
        zipcode
        address
        addressDetail
      }
    }
  }
`;

export const UPDATE_BOARD = gql`
  mutation updateBoard($boardId: ID!, $updateBoardInput: UpdateBoardInput!, $password: String) {
    updateBoard(boardId: $boardId, updateBoardInput: $updateBoardInput, password: $password) {
      _id
    }
  }
`;
