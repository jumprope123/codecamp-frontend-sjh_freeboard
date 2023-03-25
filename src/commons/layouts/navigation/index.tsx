import { NavigationItemDiv, NavigationWrapper, VerticalBar } from "./navigation.emotions";

export default function LayoutNavigation() {
    return (
        <>
            <NavigationWrapper>
                <NavigationItemDiv>자유게시판</NavigationItemDiv>
                <VerticalBar />
                <NavigationItemDiv>중고마켓</NavigationItemDiv>
                <VerticalBar />
                <NavigationItemDiv>마이페이지</NavigationItemDiv>
            </NavigationWrapper>
        </>
    );
}
