import React from "react";
import Image from "next/image";
import Link from "next/link";
import Author from "./_child/Author";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";

// Import API
import Fetcher from "../lib/fetcher";
import Spinner from "./_child/Spinner";
import CustomError from "./_child/error";

const Section1 = () => {
  const { data, isLoading, isError } = Fetcher("api/trending");
  if (isLoading) return <Spinner>Loadding....</Spinner>;
  if (isError) return <CustomError />;
  SwiperCore.use([Autoplay]);

  const bg = {
    background: "url('/images/banner.png') no-repeat",
    backgroundPosition: "right",
  };
  return (
    <section className="py-16" style={bg}>
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2000,
          }}
        >
          {data.map((value, index) => (
            <SwiperSlide key={index}>
              <Slide data={value}></Slide>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Section1;

function Slide({ data }) {
  const { id, title, category, img, published, author, description } = data;
  return (
    <div className="grid md:grid-cols-2">
      <div className="imgage">
        <Link href={`/posts/${id}`}>
          <a>
            <Image src={img || "/images/img1.jpg"} width={600} height={600} alt="메인이미지" />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link href={`/posts/${id}`}>
            <a className="text-orange-600  hover:text-orange-800">{category}</a>
          </Link>
          <Link href={`/posts/${id}`}>
            <a className="text-gray-600  hover:text-gray-800"> - {published}</a>
          </Link>
        </div>
        <div className="title">
          <Link href={`/posts/${id}`}>
            <a className="text-3xl md:text-6xl font-bold text-gray-800  hover:text-gray-600">{title}</a>
          </Link>
        </div>
        <p className="text-gray-500 py-3">{description}</p>
        {author ? <Author {...author} /> : <></>}
      </div>
    </div>
  );
}
