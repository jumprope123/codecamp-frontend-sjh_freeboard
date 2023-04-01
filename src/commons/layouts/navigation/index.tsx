import { useRouter } from "next/router";
import { NavigationItemDiv, NavigationWrapper, VerticalBar } from "./navigation.emotions";
import { MouseEvent, Fragment } from "react";

const NAVIGATION_MENUS = [
    { name: "자유게시판", page: "/boards" },
    { name: "중고마켓", page: "/markets" },
    { name: "마이페이지", page: "/mypages" },
];

export default function LayoutNavigation() {
    const router = useRouter();

    const onClickMenu = (event: MouseEvent<HTMLDivElement>) => {
        void router.push(event.currentTarget.id);
    };
    return (
        <>
            <NavigationWrapper>
                {NAVIGATION_MENUS.map((item, index) => (
                    <Fragment key={item.page}>
                        <NavigationItemDiv id={item.page} onClick={onClickMenu}>
                            {item.name}
                        </NavigationItemDiv>
                        {NAVIGATION_MENUS.length - 1 !== index && <VerticalBar />}
                    </Fragment>
                ))}
            </NavigationWrapper>
        </>
    );
}
