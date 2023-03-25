import { BannerItems, BannerWrapper, SliderBox } from "./banner.emotions";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutBanner() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        appendDots: (dots: React.ReactNode) => (
            <div
                style={{
                    padding: "40px",
                }}
            >
                {dots}
            </div>
        ),
    };

    return (
        <>
            <BannerWrapper>
                <SliderBox {...settings}>
                    <BannerItems src="/images/layoutBanner/image_01.png" />
                    <BannerItems src="/images/layoutBanner/image_02.png" />
                    <BannerItems src="/images/layoutBanner/image_03.png" />
                    <BannerItems src="/images/layoutBanner/image_04.png" />
                </SliderBox>
            </BannerWrapper>
        </>
    );
}
