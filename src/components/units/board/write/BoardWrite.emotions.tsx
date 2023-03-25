import styled from "@emotion/styled";
import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";
import { type ISubmitButtonProps } from "./BoardWrite.typescript";

export const CenterDiv = styled.div`
    display: flex;
    justify-content: center;
`;

export const Wrapper = styled.div`
    width: 1200px;
    // height: 1847px;
    border: 1px solid black;
    margin: 100px;
    padding-top: 80px;
    padding-bottom: 100px;
    padding-left: 102px;
    padding-right: 102px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
    box-shadow: 0px 0px 10px gray;
    background-color: white;
`;

export const Title = styled.div`
    font-size: 36px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 700;
`;

export const WriterWrapper = styled.div`
    width: 100%;
    display: flex;
    padding-top: 40px;
    flex-direction: row;
    justify-content: space-between;
`;

export const InputWrapper = styled.div`
    padding-top: 40px;
`;

export const Label = styled.div`
    padding-bottom: 16px;
    font-size: 16px;
    font-weight: 500;
`;

export const Writer = styled.input`
    width: 486px;
    height: 52px;
    border: 1px solid #bdbdbd;
    padding-left: 16px;
`;

export const Password = styled.input`
    width: 486px;
    height: 52px;
    border: 1px solid #bdbdbd;
    padding-left: 16px;
`;

export const Subject = styled.input`
    width: 996px;
    height: 52px;
    border: 1px solid #bdbdbd;
    padding-left: 16px;
`;

export const Contents = styled.textarea`
    width: 996px;
    height: 480px;
    border: 1px solid #bdbdbd;
    padding-left: 16px;
    padding: 14px;
`;

export const ZipcodeWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export const SearchButton = styled.button`
    width: 124px;
    height: 52px;
    background-color: black;
    color: white;
    margin-left: 16px;

    &:hover {
        cursor: pointer;
    }
`;

export const Zipcode = styled.input`
    width: 77px;
    height: 52px;
    padding-left: 16px;
    border: 1px solid #bdbdbd;
`;

export const Address = styled.input`
    width: 996px;
    height: 52px;
    margin-top: 16px;
    padding-left: 16px;
    border: 1px solid #bdbdbd;
`;

export const Youtube = styled.input`
    width: 996px;
    height: 52px;
    padding-left: 16px;
    border: 1px solid #bdbdbd;
`;

export const UploadButton = styled.button`
    width: 78px;
    height: 78px;
    background-color: #bdbdbd;
    margin-right: 24px;
    outline: none;
    border: none;
    cursor: pointer;
`;

export const ImageWrapper = styled.div`
    width: 996px;
    padding-top: 40px;
`;

export const OptionWrapper = styled.div`
    width: 996px;
    padding-top: 40px;
`;

export const RadioButton = styled.input`
    cursor: pointer;
`;

export const RadioLabel = styled.label`
    margin-left: 8px;
    margin-right: 20px;
    font-weight: 500;
    cursor: pointer;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 80px;
`;

export const SubmitButton = styled.button`
    width: 179px;
    height: 52px;
    border: none;
    font-size: 16px;
    font-weight: 500;
    margin-left: 12px;
    margin-right: 12px;
    cursor: pointer;

    background-color: ${(props: ISubmitButtonProps) => (props.activeButton ? "yellow" : "default")};
`;

export const Error = styled.div`
    font-size: 14px;
    color: red;
`;

export const AddressModal = styled(Modal)`
    .ant-modal-close-x {
        display: none;
    }
`;

export const AddressSearchInput = styled(DaumPostcodeEmbed)``;
