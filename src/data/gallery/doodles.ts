import type { Photo } from "react-photo-album";

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const doodles = [
  {
    asset: "/images/gallery/doodles/1.JPG",
    width: 878,
    height: 800,
    alt: "Doodle 1",
    title: "Doodle 1",
  },
  {
    asset: "/images/gallery/doodles/2.JPG",
    width: 802,
    height: 800,
    alt: "Doodle 2",
    title: "Doodle 2",
  },
  {
    asset: "/images/gallery/doodles/3.JPG",
    width: 817,
    height: 800,
    alt: "Doodle 3",
    title: "Doodle 3",
  },
  {
    asset: "/images/gallery/doodles/4.JPG",
    width: 931,
    height: 800,
    alt: "Doodle 4",
    title: "Doodle 4",
  },
  {
    asset: "/images/gallery/doodles/5.JPG",
    width: 813,
    height: 800,
    alt: "Doodle 5",
    title: "Doodle 5",
  },
  {
    asset: "/images/gallery/doodles/6.JPG",
    width: 1086,
    height: 800,
    alt: "Doodle 6",
    title: "Doodle 6",
  },
  {
    asset: "/images/gallery/doodles/7.JPG",
    width: 808,
    height: 800,
    alt: "Doodle 7",
    title: "Doodle 7",
  },
  {
    asset: "/images/gallery/doodles/8.JPG",
    width: 763,
    height: 800,
    alt: "Doodle 8",
    title: "Doodle 8",
  },
  {
    asset: "/images/gallery/doodles/9.JPG",
    width: 531,
    height: 800,
    alt: "Doodle 9",
    title: "Doodle 9",
  },
  {
    asset: "/images/gallery/doodles/10.JPG",
    width: 609,
    height: 800,
    alt: "Doodle 10",
    title: "Doodle 10",
  },
  {
    asset: "/images/gallery/doodles/11.JPG",
    width: 1083,
    height: 800,
    alt: "Doodle 11",
    title: "Doodle 11",
  },
  {
    asset: "/images/gallery/doodles/12.JPG",
    width: 1052,
    height: 800,
    alt: "Doodle 12",
    title: "Doodle 12",
  },
  {
    asset: "/images/gallery/doodles/13.JPG",
    width: 944,
    height: 800,
    alt: "Doodle 13",
    title: "Doodle 13",
  },
  {
    asset: "/images/gallery/doodles/14.JPG",
    width: 513,
    height: 800,
    alt: "Doodle 14",
    title: "Doodle 14",
  },
  {
    asset: "/images/gallery/doodles/15.JPG",
    width: 578,
    height: 800,
    alt: "Doodle 15",
    title: "Doodle 15",
  },
  {
    asset: "/images/gallery/doodles/16.JPG",
    width: 1123,
    height: 800,
    alt: "Doodle 16",
    title: "Doodle 16",
  },
  {
    asset: "/images/gallery/doodles/17.JPG",
    width: 930,
    height: 800,
    alt: "Doodle 17",
    title: "Doodle 17",
  },
  {
    asset: "/images/gallery/doodles/18.JPG",
    width: 757,
    height: 800,
    alt: "Doodle 18",
    title: "Doodle 18",
  },
  {
    asset: "/images/gallery/doodles/19.JPG",
    width: 444,
    height: 800,
    alt: "Doodle 19",
    title: "Doodle 19",
  },
  {
    asset: "/images/gallery/doodles/20.JPG",
    width: 429,
    height: 800,
    alt: "Doodle 20",
    title: "Doodle 20",
  },
  {
    asset: "/images/gallery/doodles/21.JPG",
    width: 417,
    height: 800,
    alt: "Doodle 21",
    title: "Doodle 21",
  },
  {
    asset: "/images/gallery/doodles/22.JPG",
    width: 672,
    height: 800,
    alt: "Doodle 22",
    title: "Doodle 22",
  },
  {
    asset: "/images/gallery/doodles/23.JPG",
    width: 491,
    height: 800,
    alt: "Doodle 23",
    title: "Doodle 23",
  },
  {
    asset: "/images/gallery/doodles/24.JPG",
    width: 1041,
    height: 800,
    alt: "Doodle 24",
    title: "Doodle 24",
  },
  {
    asset: "/images/gallery/doodles/25.JPG",
    width: 830,
    height: 800,
    alt: "Doodle 25",
    title: "Doodle 25",
  },
  {
    asset: "/images/gallery/doodles/26.JPG",
    width: 498,
    height: 800,
    alt: "Doodle 26",
    title: "Doodle 26",
  },
  {
    asset: "/images/gallery/doodles/27.JPG",
    width: 634,
    height: 800,
    alt: "Doodle 27",
    title: "Doodle 27",
  },
  {
    asset: "/images/gallery/doodles/28.JPG",
    width: 492,
    height: 800,
    alt: "Doodle 28",
    title: "Doodle 28",
  },
  {
    asset: "/images/gallery/doodles/29.JPG",
    width: 1073,
    height: 800,
    alt: "Doodle 29",
    title: "Doodle 29",
  },
  {
    asset: "/images/gallery/doodles/30.JPG",
    width: 812,
    height: 800,
    alt: "Doodle 30",
    title: "Doodle 30",
  },
  {
    asset: "/images/gallery/doodles/31.JPG",
    width: 575,
    height: 800,
    alt: "Doodle 31",
    title: "Doodle 31",
  },
  {
    asset: "/images/gallery/doodles/32.JPG",
    width: 556,
    height: 800,
    alt: "Doodle 32",
    title: "Doodle 32",
  },
  {
    asset: "/images/gallery/doodles/33.JPG",
    width: 1178,
    height: 800,
    alt: "Doodle 33",
    title: "Doodle 33",
  },
  {
    asset: "/images/gallery/doodles/34.JPG",
    width: 914,
    height: 800,
    alt: "Doodle 34",
    title: "Doodle 34",
  },
  {
    asset: "/images/gallery/doodles/35.JPG",
    width: 542,
    height: 800,
    alt: "Doodle 35",
    title: "Doodle 35",
  },

].map(
  ({ asset, alt, width, height, title }) =>
    ({
      src: asset,
      alt,
      title: title ?? "",
      description: "",
      width,
      height,
      srcSet: breakpoints.map((breakpoint) => ({
        src: asset,
        width: breakpoint,
        height: Math.round((height / width) * breakpoint),
      })),
    }) as Photo,
);

export default doodles;