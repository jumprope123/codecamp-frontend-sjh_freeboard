import styled from "@emotion/styled";
import { IPageProps } from "./Paginations01.types";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

export const Page = styled.span`
    margin: 0px 10px;
    color: ${(props: IPageProps) => (props.isActive ? "blue" : "black")};
    font-weight: ${(props: IPageProps) => (props.isActive ? "bold" : "normal")};
    cursor: ${(props: IPageProps) => (props.isActive ? "default" : "pointer")};

    &:hover {
        ${({ isActive }) => !isActive && "text-decoration: underline;"}
    }
`;

export const PrevNextSpan = styled.span`
    cursor: ${(props: IPageProps) => (props.isActive ? "pointer" : "default")};
    font-weight: bold;
`;

export const KeyboardArrowRight = styled(KeyboardArrowRightIcon)`
    cursor: ${(props: IPageProps) => (props.isActive ? "pointer" : "default")};
    font-weight: bold;
    position: relative;
    top: 6px;
`;

export const KeyboardArrowLeft = styled(KeyboardArrowLeftIcon)`
    cursor: ${(props: IPageProps) => (props.isActive ? "pointer" : "default")};
    font-weight: bold;
    position: relative;
    top: 6px;
`;

export const KeyboardDoubleArrowRight = styled(KeyboardDoubleArrowRightIcon)`
    cursor: ${(props: IPageProps) => (props.isActive ? "pointer" : "default")};
    font-weight: bold;
    position: relative;
    top: 6px;
`;

export const KeyboardDoubleArrowLeft = styled(KeyboardDoubleArrowLeftIcon)`
    cursor: ${(props: IPageProps) => (props.isActive ? "pointer" : "default")};
    font-weight: bold;
    position: relative;
    top: 6px;
`;
