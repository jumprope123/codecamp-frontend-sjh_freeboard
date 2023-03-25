import LayoutBanner from "./banner";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";

interface IProps {
    children: JSX.Element;
}

export default function Layout(props: IProps) {
    return (
        <>
            <LayoutHeader />
            <LayoutBanner />
            <LayoutNavigation />
            {props.children}
        </>
    );
}
