import { MouseEvent, useState } from "react";
import Pagination01UI from "./Paginations01.presenter";
import { IPaginations01Props } from "./Paginations01.types";

export default function PageNation01(props: IPaginations01Props) {
    const [startPage, setStartPage] = useState(1);
    const [activedPage, setActivedPage] = useState(1);
    const lastPage = props.count != null ? Math.ceil(props.count / 10) : 0;
    const LastStartPage = Math.floor(lastPage / 10) * 10 + 1;

    const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
        setActivedPage(Number(event.currentTarget.id));
        void props.refetch({ page: Number(event.currentTarget.id) });
    };
    const onClickPrevPage = () => {
        if (startPage === 1) return;
        setStartPage((prev) => prev - 10);
        setActivedPage(startPage - 10);
        void props.refetch({ page: startPage - 10 });
    };
    const onClickNextPage = () => {
        if (startPage + 10 <= lastPage) {
            setStartPage((prev) => prev + 10);
            setActivedPage(startPage + 10);
            void props.refetch({ page: startPage + 10 });
        }
    };
    const onClickFirstPage = () => {
        if (startPage === 1) return;
        setStartPage(1);
        setActivedPage(1);
        void props.refetch({ page: 1 });
    };

    const onClickLastPage = () => {
        if (startPage + 10 <= lastPage) {
            setStartPage(LastStartPage);
            setActivedPage(lastPage);
            void props.refetch({ page: lastPage });
        }
    };
    return (
        <Pagination01UI
            onClickPage={onClickPage}
            onClickPrevPage={onClickPrevPage}
            onClickNextPage={onClickNextPage}
            onClickFirstPage={onClickFirstPage}
            onClickLastPage={onClickLastPage}
            startPage={startPage}
            lastPage={lastPage}
            activedPage={activedPage}
        />
    );
}
