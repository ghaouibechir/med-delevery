const db = require("./index.js");
const { medecine } = require("./schemas.js");

const samplePosts = [
  {
    name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
    description:
      "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
    category: "COVID CARE AND PROTECTION",
    img: "https://www.merillife.com/assets/images/medical-devices/n4MiUrjJlOAxR6hIpFDz.png",
    price: 9.5,
  },
  {
    name: "Marico's Travel Protect Surface Disinfectant Spray, 200 ml",
    description:
      "Each 10 ml contains: Azadirachta indica (Neem) Oil Lf. 10 mg. Processed in Prasanna Q.S, Prasanna is rectified spirit (Denatured Alcohol content 77.77 % v/v), Propellant Q.S. ,Bhavaprakasha Nighantu",
    category: "COVID CARE AND PROTECTION",
    img: "https://newassets.apollo247.com/pub/media/catalog/product/t/r/travel_protect.jpg",
    price: 7.2,
  },
  {
    name: "PreVID Powered-Up Immunity Pack, 240 gm (30 sachets x 8 gm)",
    description:
      "PreVid is a revolutionary immunity-boosting health supplement that is FSSAI certified and uplifts the body’s natural protection against Viral Infectious Diseases (VID)",
    category: "COVID CARE AND PROTECTION",
    img: "https://newassets.apollo247.com/pub/media/catalog/product/p/r/pre1351.jpg",
    price: 30,
  },
  {
    name: "Romsons N95 Respirator Kare 6 Layer Child Mask, 3 Count",
    description:
      "99% Bacteria FilterationAnti Dust (PM 0.3)Comfortable Elastic Loop6 Layer protection",
    category: "COVID CARE AND PROTECTION",
    img: "https://m.media-amazon.com/images/I/41deqFfoz-L.jpg",
    price: 0.5,
  },
  {
    name: "Apollo Pharmacy Pulse Oximeter ZM-700-01, 1 Count",
    description:
      "Bright OLED Multi color and Multi Direction Display-The large and rotatable multidirectional display allows you to view your results in any direction easily.",
    category: "COVID CARE AND PROTECTION",
    img: "https://www.flemingmedical.ie/product/image/large/md1940_0.png",
    price: 89,
  },
  {
    name: "PreVID Powered-Up Immunity Pack, 48 gm (6 sachets x 8 gm)",
    description:
      "KeepSafe Multi-Purpose Disinfectant Kills 99.9% germs* without water",
    category: "COVID CARE AND PROTECTION",
    img: "https://newassets.apollo247.com/pub/media/catalog/product/p/r/pre1351.jpg",
    price: 11,
  },
  {
    name: "KeepSafe Multi-Purpose Disinfectant Spray, 90ml",
    description:
      "Cleanse your skin and remove the dirt with Dettol Original Multi-Use Skin & Surface Wipes",
    category: "COVID CARE AND PROTECTION",
    img: "https://5.imimg.com/data5/SELLER/Default/2021/1/EQ/PZ/IS/16159292/bodyguard-disinfectant-sanitizer-spray-for-multi-surfaces-alcohol-based-100-ml-500x500.jpg",
    price: 3,
  },
  {
    name: "Dettol Original Multi-Use Skin & Surface Wipes, 10 Count",
    description:
      "Cleanse your skin and remove the dirt with Dettol Original Multi-Use Skin & Surface Wipes. Now get on the go protection at home or outdoors in a skin safe and gentle formula that cleans up hands and surfaces instantly.",
    category: "COVID CARE AND PROTECTION",
    img: "https://newassets.apollo247.com/pub/media/catalog/product/d/e/det0217_1.jpg",
    price: 3,
  },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/d/e/det0217_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
  // {
  //   name: "COVIFIND Covid-19 Antigen Self Test Kit, 1 kit",
  //   description:
  //     "Now beat the doubt Covid with COVIFIND Covid-19 Antigen Self Test Kit that provides you accurate results in 4 simple steps.",
  //   category: "COVID CARE AND PROTECTION",
  //   img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
  //   price: 9.5,
  // },
];

const insertMedecines = function () {
  medecine
    .create(samplePosts)
    .then(() => {
      console.log("Database seeded successfully");
    })
    .catch((error) => {
      console.log("error seeding the database: ", error);
    })
    .finally(() => {
      db.close();
    });
};

insertMedecines();
