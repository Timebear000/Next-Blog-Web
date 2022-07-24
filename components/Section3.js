import React from "react";
import Link from "next/link";
import Image from "next/image";
import Author from "./_child/Author";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
const Section3 = () => {
  return (
    <>
      <section className="container mx-auto md:px-20 py-10">
        <h1 className="font-bold text-4xl py-12 text-center "> Most Popular</h1>
        {/*  swiper */}
        <Swiper slidesPerView={2}>
          <SwiperSlide>{Post()}</SwiperSlide>
          <SwiperSlide>{Post()}</SwiperSlide>
          <SwiperSlide>{Post()}</SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Section3;

const Post = () => {
  return (
    <>
      <dir className="grid ">
        <div className="images">
          <Link href={"#"}>
            <a>
              <Image
                src={"/images/img1.jpg"}
                width={600}
                height={400}
                alt="메인이미지"
              />
            </a>
          </Link>
        </div>
        <div className="info flex justify-center flex-col py-4">
          <div className="cat">
            <Link href={"/"}>
              <a className="text-orange-600  hover:text-orange-800">
                Business, Travel
              </a>
            </Link>
            <Link href={"/"}>
              <a className="text-gray-600  hover:text-gray-800">
                {" "}
                - Jun 03, 2022
              </a>
            </Link>
          </div>
          <div className="title">
            <Link href={"/"}>
              <a className="text-3xl md:text-4xl font-bold text-gray-800  hover:text-gray-600">
                SSR NextJs에 대한 공부 클론코딩
              </a>
            </Link>
          </div>

          <p className="text-gray-500 py-3">
            Next.js는 서버 사이트 렌더링, 정적 웹 페이지 생성 등 리액트 기반 웹
            애플리케이션 기능들을 가능케 하는 Node.js 위에서 빌드된 오픈 소스 웹
            개발 프레임워크이다. 리액트 문서는 Next.js를 권고하는 툴체인들 중
            하나로 언급하며 개발자들이 Node.js로 서버 렌더링되는 웹사이트를
            빌드할 때의 해결책의 하나로 충고하고 있다.
          </p>
          <Author />
        </div>
      </dir>
    </>
  );
};
