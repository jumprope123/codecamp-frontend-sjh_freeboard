import styled from "@emotion/styled";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Tooltip from "@mui/material/Tooltip";

export const CenterDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const Wrapper = styled.div`
    width: 1200px;
    margin: 100px;
`;

export const CardWrapper = styled.div`
    border: 1px solid black;
    padding-top: 80px;
    padding-bottom: 80px;
    padding-left: 102px;
    padding-right: 102px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 0px 10px gray;
    border: none;
`;

export const BottomWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 87px;
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #bdbdbd;
    padding-bottom: 20px;
`;

export const Body = styled.div`
    width: 100%;
    min-height: 800px;
`;

export const Button = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 179px;
    height: 45px;
    background-color: white;
    border: 1px solid gray;
    margin: 0px 12px;
    cursor: pointer;

    &:hover {
        background-color: gold;
        border-color: white;
    }
`;

export const AvatarWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Avatar = styled.img`
    margin-right: 10px;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Writer = styled.div``;
export const CreatedAt = styled.div``;

export const Title = styled.h1`
    padding-top: 80px;
`;

export const Contents = styled.div`
    padding-top: 40px;
    padding-bottom: 120px;
`;

export const LikeWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin-top: 50px;
`;

export const LikeDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 20px;
    color: #ffd600;
    &:hover {
        cursor: pointer;
    }
`;

export const DisLikeDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 20px;
    &:hover {
        cursor: pointer;
    }
`;

export const YouTubeWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const HeaderInfoWrapper = styled.div`
    text-align: center;
`;

export const MuiTooltip = styled(Tooltip)``;

export const LocationIcon = styled(LocationOnIcon)`
    color: orange;
    font-size: 30px;
`;
