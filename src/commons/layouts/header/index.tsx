import { DataObject, DataObjectWrapper, DivCenter, HeaderWrapper, JoinButton, LoginButton, LoginWrapper } from "./Header.emotions";

export default function LayoutHeader() {
    return (
        <>
            <DivCenter>
                <HeaderWrapper>
                    <DataObjectWrapper>
                        <DataObject /> &nbsp;&nbsp;code.camp
                    </DataObjectWrapper>
                    <LoginWrapper>
                        <LoginButton>로그인</LoginButton>
                        <JoinButton>회원가입</JoinButton>
                    </LoginWrapper>
                </HeaderWrapper>
            </DivCenter>
        </>
    );
}
