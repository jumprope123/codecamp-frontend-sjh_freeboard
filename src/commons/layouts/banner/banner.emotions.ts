import styled from "@emotion/styled";
import Slider from "react-slick";

export const BannerWrapper = styled.div`
    width: 100%;
    .slick-dots li button:before {
        opacity: 0.5;
        color: white !important;
    }
    .slick-prev {
        left: 3% !important;
        z-index: 1;
        ::before {
            font-size: 32px;
        }
    }
    .slick-next {
        right: 3% !important;
        z-index: 1;
        ::before {
            font-size: 32px;
        }
    }
`;

export const BannerItems = styled.img``;

export const SliderBox = styled(Slider)`
    margin-bottom: -4px;
`;
