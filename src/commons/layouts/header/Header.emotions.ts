import styled from "@emotion/styled";
import DataObjectIcon from "@mui/icons-material/DataObject";

export const DivCenter = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1200px;
    height: 156px;
    margin: 0 100px;
`;

export const DataObjectWrapper = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 25px;
    font-weight: bold;
`;

export const DataObject = styled(DataObjectIcon)`
    color: #ffd600;
    font-size: 40px;
`;

export const LoginWrapper = styled.div`
    display: flex;
`;

export const LoginButton = styled.div`
    padding: 10px;
    margin: 0 10px;
    font-size: 13px;
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
    font-weight: bold;
`;

export const JoinButton = styled.div`
    padding: 10px;
    margin: 0 10px;
    background-color: #ffd600;
    border-radius: 10px;
    font-weight: bold;
    font-size: 13px;
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;
