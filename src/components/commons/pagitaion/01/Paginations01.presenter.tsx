import { KeyboardArrowLeft, KeyboardArrowRight, KeyboardDoubleArrowLeft, KeyboardDoubleArrowRight, Page } from "./Paginations01.styles";
import { IPaginations01UIProps } from "./Paginations01.types";

export default function Pagination01UI(props: IPaginations01UIProps) {
    return (
        <div>
            <KeyboardDoubleArrowLeft isActive={props.startPage !== 1} onClick={props.onClickFirstPage} />
            <KeyboardArrowLeft isActive={props.startPage !== 1} onClick={props.onClickPrevPage} />
            {new Array(10).fill(1).map(
                (_, index) =>
                    index + props.startPage <= props.lastPage && (
                        <Page
                            id={(index + props.startPage).toString()}
                            key={index + props.startPage}
                            onClick={props.onClickPage}
                            isActive={props.activedPage === props.startPage + index}
                        >
                            {index + props.startPage}
                        </Page>
                    )
            )}
            <KeyboardArrowRight isActive={props.startPage + 10 <= props.lastPage} onClick={props.onClickNextPage} />
            <KeyboardDoubleArrowRight isActive={props.startPage + 10 <= props.lastPage} onClick={props.onClickLastPage} />
        </div>
    );
}
