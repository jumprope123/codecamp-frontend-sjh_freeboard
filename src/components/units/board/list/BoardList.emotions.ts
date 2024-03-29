import styled from "@emotion/styled";

export const CenterDiv = styled.div`
    display: flex;
    justify-content: center;
`;

export const Wrapper = styled.div`
    width: 1200px;
    margin: 100px;
`;

export const TableTop = styled.div`
    border-top: 2px solid gray;
    margin-top: 20px;
`;

export const HeaderRow = styled.div`
    display: flex;
    flex-direction: row;
    height: 52px;
    line-height: 52px;
    border-bottom: 1px solid gray;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    height: 52px;
    line-height: 52px;
    border-bottom: 1px solid gray;
    cursor: pointer;

    :hover {
        color: blue;
    }
`;

export const ColumnHeaderBasic = styled.div`
    width: 10%;
    text-align: center;
`;

export const ColumnHeaderTitle = styled.div`
    width: 70%;
    text-align: center;
`;

export const ColumnBasic = styled.div`
    width: 10%;
    text-align: center;
`;

export const ColumnTitle = styled.div`
    width: 70%;
    text-align: center;
`;

export const TableBottom = styled.div`
    border-bottom: 2px solid gray;
`;

export const NavigationWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 50px;
`;

export const Footer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: -30px;
`;

export const Button = styled.button`
    width: 171px;
    height: 52px;
    background-color: white;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;

    :hover {
        background-color: #f5f2fc;
    }
`;

export const PencilIcon = styled.img``;
