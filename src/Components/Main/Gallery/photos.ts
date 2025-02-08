import type { Photo } from "react-photo-album";

import yan1 from '../../../Assets/Images/GalleryImages/yan1.jpg'
import yan2 from '../../../Assets/Images/GalleryImages/yan2.jpg'
import yan3 from '../../../Assets/Images/GalleryImages/yan3.jpg'
import yan4 from '../../../Assets/Images/GalleryImages/yan4.jpg'
// import yan5 from '../../../Assets/Images/GalleryImages/yan5.jpg'
import yan6 from '../../../Assets/Images/GalleryImages/yan6.jpg'
import yan7 from '../../../Assets/Images/GalleryImages/yan7.jpg'
import yan8 from '../../../Assets/Images/GalleryImages/yan8.jpg'
import yan9 from '../../../Assets/Images/GalleryImages/yan9.jpg'
import yan10 from '../../../Assets/Images/GalleryImages/yan10.jpg'

import yan100 from '../../../Assets/Images/GalleryImages/yan100.jpeg'
import yan101 from '../../../Assets/Images/GalleryImages/yan101.jpeg'
import yan102 from '../../../Assets/Images/GalleryImages/yan102.jpeg'
import yan103 from '../../../Assets/Images/GalleryImages/yan103.jpeg'
import yan104 from '../../../Assets/Images/GalleryImages/yan104.jpeg'
import yan105 from '../../../Assets/Images/GalleryImages/yan105.jpeg'
import yan106 from '../../../Assets/Images/GalleryImages/yan106.jpeg'
import yan107 from '../../../Assets/Images/GalleryImages/yan107.jpeg'
import yan108 from '../../../Assets/Images/GalleryImages/yan108.jpeg'
import yan109 from '../../../Assets/Images/GalleryImages/yan109.jpeg'
import yan110 from '../../../Assets/Images/GalleryImages/yan110.jpeg'
import yan111 from '../../../Assets/Images/GalleryImages/yan111.jpeg'
import yan112 from '../../../Assets/Images/GalleryImages/yan112.jpeg'
import yan113 from '../../../Assets/Images/GalleryImages/yan113.jpeg'
import yan114 from '../../../Assets/Images/GalleryImages/yan114.jpeg'
import yan115 from '../../../Assets/Images/GalleryImages/yan115.jpeg'
import yan116 from '../../../Assets/Images/GalleryImages/yan116.jpeg'
// import yan117 from '../../../Assets/Images/GalleryImages/yan117.jpeg'

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

// function assetLink(asset: string, width: number) {
//     return `https://assets.react-photo-album.com/_next/image?url=${encodeURIComponent(`/_next/static/media/${asset}`)}&w=${width}&q=75`;
// }

const photos = [
    {
        asset: yan1,
        width: 1936,
        height: 1296,
        alt: "yanshuf_books1",
    },
    {
        asset: yan2,
        width: 2048,
        height: 1365,
        alt: "yanshuf_books2",
    },
    {
        asset: yan3,
        width: 1440,
        height: 1639,
        alt: "yanshuf_books3",
    },
    {
        asset: yan4,
        width: 1440,
        height: 1636,
        alt: "yanshuf_books4",
    },
    // {
    //     asset: yan5,
    //     width: 1440,
    //     height: 1800,
    //     alt: "yanshuf_books5",
    // },
    {
        asset: yan6,
        width: 1600,
        height: 900,
        alt: "yanshuf_books6",
    },
    {
        asset: yan7,
        width: 480,
        height: 640,
        alt: "yanshuf_books7",
    },
    {
        asset: yan8,
        width: 1280,
        height: 1279,
        alt: "yanshuf_books8",
    },
    {
        asset: yan9,
        width: 1200,
        height: 1600,
        alt: "yanshuf_books9",
    },
    {
        asset: yan10,
        width: 1200,
        height: 1600,
        alt: "yanshuf_books10",
    },
    {
        asset: yan100,
        width: 1200,
        height: 1600,
        alt: "yanshuf_books1",
    },
    {
        asset: yan101,
        width: 900,
        height: 1600,
        alt: "yanshuf_books2",
    },
    {
        asset: yan102,
        width: 1208,
        height: 1600,
        alt: "yanshuf_books2",
    },
    {
        asset: yan103,
        width: 900,
        height: 1600,
        alt: "yanshuf_books3",
    },
    {
        asset: yan104,
        width: 900,
        height: 900,
        alt: "yanshuf_books4",
    },
    {
        asset: yan105,
        width: 900,
        height: 1600,
        alt: "yanshuf_books5",
    },
    {
        asset: yan106,
        width: 900,
        height: 1600,
        alt: "yanshuf_books6",
    },
    {
        asset: yan107,
        width: 1134,
        height: 1512,
        alt: "yanshuf_books7",
    },
    {
        asset: yan108,
        width: 960,
        height: 720,
        alt: "yanshuf_books8",
    },
    {
        asset: yan109,
        width: 960,
        height: 720,
        alt: "yanshuf_books9",
    },
    {
        asset: yan110,
        width: 720,
        height: 960,
        alt: "yanshuf_books10",
    },
    {
        asset: yan111,
        width: 1134,
        height: 1512,
        alt: "yanshuf_books11",
    },
    {
        asset: yan112,
        width: 720,
        height: 960,
        alt: "yanshuf_books12",
    },
    {
        asset: yan113,
        width: 720,
        height: 960,
        alt: "yanshuf_books13",
    },
    {
        asset: yan114,
        width: 960,
        height: 720,
        alt: "yanshuf_books14",
    },
    {
        asset: yan115,
        width: 720,
        height: 960,
        alt: "yanshuf_books15",
    },
    {
        asset: yan116,
        width: 720,
        height: 960,
        alt: "yanshuf_books16",
    }
    // {
    //     asset: yan117,
    //     width: 1600,
    //     height: 1071,
    //     alt: "yanshuf_books17",
    // }

].map(
    ({ asset, alt, width, height }) =>
        ({
            // src: assetLink(asset, width),
            src: asset,
            alt,
            width,
            height,
            srcSet: breakpoints.map((breakpoint) => ({
                // src: assetLink(asset, breakpoint),
                src: asset,
                width: breakpoint,
                height: Math.round((height / width) * breakpoint),
            })),
        }) as Photo,
);

export default photos;
