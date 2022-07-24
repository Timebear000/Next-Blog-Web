import React from "react";
import Link from "next/link";
import Image from "next/image";
import Author from "./_child/Author";

import Fetcher from "../lib/fetcher";
import Spinner from "./_child/Spinner";
import CustomError from "./_child/error";
const Section4 = () => {
  const { data, isLoading, isError } = Fetcher("api/trending");
  if (isLoading) return <Spinner>Loadding....</Spinner>;
  if (isError) return <CustomError />;
  return (
    <>
      <section className="container mx-auto md:px-20 py-10">
        <div className="grid lg:grid-cols-2">
          <div className="item">
            <h1 className="font-bold text-4xl py-12">Business</h1>
            <div className="flex flex-col gap-6">
              {data[0] ? <Post data={data[0]} /> : <></>}
              {data[1] ? <Post data={data[1]} /> : <></>}
              {data[2] ? <Post data={data[2]} /> : <></>}
            </div>
          </div>
          <div className="item">
            <h1 className="font-bold text-4xl py-12">Travel</h1>
            <div className="flex flex-col gap-6">
              {data[4] ? <Post data={data[4]} /> : <></>}
              {data[5] ? <Post data={data[5]} /> : <></>}
              {data[2] ? <Post data={data[2]} /> : <></>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section4;

function Post({ data }) {
  const { id, category, img, published, author, title, subtitle } = data;

  return (
    <>
      <div className="flex gap-5">
        <div className="image flex flex-col justify-start">
          <Link href={`/posts/${id}`}>
            <a>
              <Image src={img || "/images/img1.jpg"} className="rounded" width={300} height={250} alt="메인이미지" />
            </a>
          </Link>
        </div>
        <div className="info flex justify-center flex-col">
          <div className="cat">
            <Link href={`/posts/${id}`}>
              <a className="text-orange-600  hover:text-orange-800">{category || "No Category"}</a>
            </Link>
            <Link href={`/posts/${id}`}>
              <a className="text-gray-600  hover:text-gray-800"> - {published}</a>
            </Link>
          </div>
          <div className="title">
            <Link href={`/posts/${id}`}>
              <a className="text-xl font-bold text-gray-800  hover:text-gray-600"> {title || "No Title"}</a>
            </Link>
          </div>

          {author ? <Author {...author} /> : <></>}
        </div>
      </div>
    </>
  );
}
