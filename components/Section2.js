import React from "react";
import Link from "next/link";
import Image from "next/image";
import Author from "./_child/Author";
import Fetcher from "../lib/fetcher";
import Spinner from "./_child/Spinner";
import CustomError from "./_child/error";
const Section2 = () => {
  const { data, isLoading, isError } = Fetcher("api/posts");
  if (isLoading) return <Spinner>Loadding....</Spinner>;
  if (isError) return <CustomError />;
  return (
    <>
      <section className="container mx-auto md:px-20 py-10">
        <h1 className="font-bold text-4xl py-12 text-center "> Latest Posts</h1>
        {/*  grid columns*/}
        {
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
            {data.map((value, index) => (
              <Post data={value} key={index}></Post>
            ))}
          </div>
        }
      </section>
    </>
  );
};

export default Section2;

const Post = ({ data }) => {
  const { id, category, img, published, author, title, subtitle } = data;
  return (
    <>
      <dir className="item">
        <div className="images">
          <Link href={`/posts/${id}`}>
            <a>
              <Image src={img || "/images/img1.jpg"} className="rounded" width={500} height={350} alt="메인이미지" />
            </a>
          </Link>
        </div>
        <div className="info flex justify-center flex-col py-4">
          <div className="cat">
            <Link href={`/posts/${id}`}>
              <a className="text-orange-600  hover:text-orange-800">{category}</a>
            </Link>
            <Link href={`/posts/${id}`}>
              <a className="text-gray-600  hover:text-gray-800"> - {published || "Unknown"}</a>
            </Link>
          </div>
          <div className="title">
            <Link href={`/posts/${id}`}>
              <a className="text-xl font-bold text-gray-800  hover:text-gray-600">{title}</a>
            </Link>
          </div>

          <p className="text-gray-500 py-3">{subtitle}</p>
          {author ? <Author {...author} /> : <></>}
        </div>
      </dir>
    </>
  );
};
