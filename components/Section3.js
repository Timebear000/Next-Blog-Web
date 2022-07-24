import React from "react";
import Link from "next/link";
import Image from "next/image";
import Author from "./_child/Author";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import Fetcher from "../lib/fetcher";
import Spinner from "./_child/Spinner";
import CustomError from "./_child/error";
const Section3 = () => {
  const { data, isLoading, isError } = Fetcher("api/trending");
  if (isLoading) return <Spinner>Loadding....</Spinner>;
  if (isError) return <CustomError />;
  return (
    <>
      <section className="container mx-auto md:px-20 py-10">
        <h1 className="font-bold text-4xl py-12 text-center "> Most Popular</h1>
        {/*  swiper */}
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
        >
          {data.map((value, index) => (
            <SwiperSlide key={index}>
              <Post data={value}></Post>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Section3;

const Post = ({ data }) => {
  const { id, title, category, img, published, author, description } = data;
  return (
    <>
      <dir className="grid ">
        <div className="images">
          <Link href={`/posts/${id}`}>
            <a>
              <Image src={img || "/images/img1.jpg"} width={600} height={400} alt="메인이미지" />
            </a>
          </Link>
        </div>
        <div className="info flex justify-center flex-col py-4">
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
              <a className="text-3xl md:text-4xl font-bold text-gray-800  hover:text-gray-600">{title}</a>
            </Link>
          </div>

          <p className="text-gray-500 py-3">{description}</p>
          {author ? <Author {...author} /> : <></>}
        </div>
      </dir>
    </>
  );
};
