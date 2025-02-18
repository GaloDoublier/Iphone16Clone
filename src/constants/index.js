import {
    blackImg,
    blueImg,
    highlightFirstVideo,
    highlightFourthVideo,
    highlightSecondVideo,
    highlightThirdVideo,
    whiteImg,
    yellowImg,
  } from "../utils";
  
  export const navLists = ["Tienda", "Mac", "iPhone", "Soporte"];
  
  export const hightlightsSlides = [
    {
      id: 1,
      textLists: [
        "El nuevo chip A18 Pro",
        " ofrece un rendimiento imparable ",
        "y una eficiencia incomparable.",
      ],
      video: highlightFirstVideo,
      videoDuration: 5,
    },
    {
      id: 2,
      textLists: ["Nuevo Control de la Cámara.", " Tu talento fluye como nunca."],
      video: highlightSecondVideo,
      videoDuration: 5,
    },
    {
      id: 3,
      textLists: [
        "4K Dolby Vision a 120 cps.",
        " 4 micrófonos nivel pro.",
        " Un estudio en tu bolsillo.",
      ],
      video: highlightThirdVideo,
      videoDuration: 5,
    },
    {
      id: 4,
      textLists: ["El primer iPhone diseñado con Apple Intelligence en mente.", "Personal, privado y poderoso."],
      video: highlightFourthVideo,
      videoDuration: 5,
    },
  ];
  
  export const models = [
    {
      id: 1,
      title: "iPhone 15 Pro in Natural Titanium",
      color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
      img: yellowImg,
    },
    {
      id: 2,
      title: "iPhone 15 Pro in Blue Titanium",
      color: ["#53596E", "#6395ff", "#21242e"],
      img: blueImg,
    },
    {
      id: 3,
      title: "iPhone 15 Pro in White Titanium",
      color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
      img: whiteImg,
    },
    {
      id: 4,
      title: "iPhone 15 Pro in Black Titanium",
      color: ["#454749", "#3b3b3b", "#181819"],
      img: blackImg,
    },
  ];
  
  export const sizes = [
    { label: '6.1"', value: "small" },
    { label: '6.7"', value: "large" },
  ];
  
  export const footerLinks = [
    "politica de privacidad",
    "Terminos de uso",
    "politicas de venta",
    "Legal",
    "Mapa del sitio",
  ];