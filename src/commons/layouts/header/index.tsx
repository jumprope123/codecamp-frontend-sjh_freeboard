import { useRouter } from "next/router";
import { DataObject, DataObjectWrapper, DivCenter, HeaderWrapper, JoinButton, LoginButton, LoginWrapper } from "./Header.emotions";

export default function LayoutHeader() {
    const router = useRouter();

    function onClickLoginButton() {
        void router.push("/login");
    }
    function onClickLogo() {
        void router.push("/boards");
    }
    function onClickJoinButton() {
        void router.push("");
    }
    return (
        <>
            <DivCenter>
                <HeaderWrapper>
                    <DataObjectWrapper onClick={onClickLogo}>
                        <DataObject /> &nbsp;&nbsp;code.camp
                    </DataObjectWrapper>
                    <LoginWrapper>
                        <LoginButton onClick={onClickLoginButton}>로그인</LoginButton>
                        <JoinButton onClick={onClickJoinButton}>회원가입</JoinButton>
                    </LoginWrapper>
                </HeaderWrapper>
            </DivCenter>
        </>
    );
}
