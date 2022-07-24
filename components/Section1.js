import React from "react";
import Image from "next/image";
import Link from "next/link";
const Section1 = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
        {Slide()}
      </div>
    </section>
  );
};

export default Section1;

function Slide() {
  return (
    <div className="grid md:grid-cols-2">
      <div className="imgage">
        <Link href={"#"}>
          <a>
            <Image
              src={"/images/img1.jpg"}
              width={600}
              height={600}
              alt="메인이미지"
            />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
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
            <a className="text-3xl md:text-6xl font-bold text-gray-800  hover:text-gray-600">
              SSR NextJs에 대한 공부 클론코딩
            </a>
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          Next.js는 서버 사이트 렌더링, 정적 웹 페이지 생성 등 리액트 기반 웹
          애플리케이션 기능들을 가능케 하는 Node.js 위에서 빌드된 오픈 소스 웹
          개발 프레임워크이다. 리액트 문서는 Next.js를 권고하는 툴체인들 중
          하나로 언급하며 개발자들이 Node.js로 서버 렌더링되는 웹사이트를 빌드할
          때의 해결책의 하나로 충고하고 있다.
        </p>
        <h1>author</h1>
      </div>
    </div>
  );
}
