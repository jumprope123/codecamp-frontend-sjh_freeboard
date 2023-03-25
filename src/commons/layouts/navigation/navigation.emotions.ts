import styled from "@emotion/styled";

export const NavigationWrapper = styled.div`
    width: 100%;
    background-color: #ffd600;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const NavigationItemDiv = styled.div`
    font-weight: bold;
    font-size: 14px;
    margin: 0px 20px;
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;

export const VerticalBar = styled.div`
    height: 30%;
    border-left: 2px solid white;
`;
