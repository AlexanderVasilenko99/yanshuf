import type { Photo } from "react-photo-album";
import yan1 from '../../../Assets/Images/GalleryImages/yan1.jpg'
import yan2 from '../../../Assets/Images/GalleryImages/yan2.jpg'
import yan3 from '../../../Assets/Images/GalleryImages/yan3.jpg'
import yan4 from '../../../Assets/Images/GalleryImages/yan4.jpg'
import yan5 from '../../../Assets/Images/GalleryImages/yan5.jpg'
import yan6 from '../../../Assets/Images/GalleryImages/yan6.jpg'
import yan7 from '../../../Assets/Images/GalleryImages/yan7.jpg'
import yan8 from '../../../Assets/Images/GalleryImages/yan8.jpg'
import yan9 from '../../../Assets/Images/GalleryImages/yan9.jpg'
import yan10 from '../../../Assets/Images/GalleryImages/yan10.jpg'
import yan11 from '../../../Assets/Images/GalleryImages/yan11.jpg'
import yan12 from '../../../Assets/Images/GalleryImages/yan12.jpg'
import yan13 from '../../../Assets/Images/GalleryImages/yan13.jpg'
import yan14 from '../../../Assets/Images/GalleryImages/yan14.jpg'
import yan15 from '../../../Assets/Images/GalleryImages/yan15.jpg'
import yan16 from '../../../Assets/Images/GalleryImages/yan16.jpg'
import yan17 from '../../../Assets/Images/GalleryImages/yan17.jpg'
import yan18 from '../../../Assets/Images/GalleryImages/yan18.jpg'
import yan19 from '../../../Assets/Images/GalleryImages/yan19.jpg'
import yan20 from '../../../Assets/Images/GalleryImages/yan20.jpg'
import yan21 from '../../../Assets/Images/GalleryImages/yan21.jpg'
import yan22 from '../../../Assets/Images/GalleryImages/yan22.jpg'

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

// function assetLink(asset: string, width: number) {
//     return `https://assets.react-photo-album.com/_next/image?url=${encodeURIComponent(`/_next/static/media/${asset}`)}&w=${width}&q=75`;
// }

const photos = [
    {
        asset: yan1,
        width: 1080,
        height: 1440,
        alt: "yanshuf_books1",
    },
    {
        asset: yan2,
        width: 1080,
        height: 780,
        alt: "yanshuf_books2",
    },
    {
        asset: yan3,
        width: 1080,
        height: 1620,
        alt: "yanshuf_books3",
    },
    {
        asset: yan4,
        width: 1080,
        height: 720,
        alt: "yanshuf_books4",
    },
    {
        asset: yan5,
        width: 1080,
        height: 720,
        alt: "yanshuf_books5",
    },
    {
        asset: yan6,
        width: 1080,
        height: 1620,
        alt: "yanshuf_books6",
    },
    {
        asset: yan7,
        width: 1080,
        height: 607,
        alt: "yanshuf_books7",
    },
    {
        asset: yan8,
        width: 1080,
        height: 608,
        alt: "yanshuf_books8",
    },
    {
        asset: yan9,
        width: 1080,
        height: 720,
        alt: "yanshuf_books9",
    },
    {
        asset: yan10,
        width: 1080,
        height: 1549,
        alt: "yanshuf_books10",
    },
    {
        asset: yan11,
        width: 1080,
        height: 720,
        alt: "yanshuf_books11",
    },
    {
        asset: yan12,
        width: 1080,
        height: 694,
        alt: "yanshuf_books12",
    },
    {
        asset: yan13,
        width: 1080,
        height: 1620,
        alt: "yanshuf_books13",
    },
    {
        asset: yan14,
        width: 1080,
        height: 720,
        alt: "yanshuf_books14",
    },
    {
        asset: yan15,
        width: 1080,
        height: 1440,
        alt: "yanshuf_books15",
    },
    {
        asset: yan16,
        width: 1080,
        height: 1620,
        alt: "yanshuf_books16",
    },
    {
        asset: yan17,
        width: 1080,
        height: 810,
        alt: "yanshuf_books17",
    },
    {
        asset: yan18,
        width: 1080,
        height: 595,
        alt: "yanshuf_books18",
    },
    // {
    //     asset: yan19,
    //     width: 1080,
    //     height: 160,
    //     alt: "yanshuf_books19",
    // },
    {
        asset: yan20,
        width: 1080,
        height: 810,
        alt: "yanshuf_books20",
    },
    {
        asset: yan21,
        width: 1080,
        height: 720,
        alt: "yanshuf_books21",
    },
    {
        asset: yan22,
        width: 1080,
        height: 720,
        alt: "yanshuf_books22",
    }
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
