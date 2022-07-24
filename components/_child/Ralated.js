import React from "react";
import Link from "next/link";
import Image from "next/image";
import Author from "./Author";
import Fetcher from "../../lib/fetcher";
import Spinner from "./Spinner";
import CustomError from "./error";
const Ralated = () => {
  const { data, isLoading, isError } = Fetcher("api/posts");
  if (isLoading) return <Spinner>Loadding....</Spinner>;
  if (isError) return <CustomError />;
  return (
    <section className="pt-20">
      <h1 className="font-bold text-3xl py-10">Related</h1>
      <div className="flex flex-col gap-10">
        {data.map((value, index) => (
          <Post data={value} key={index}></Post>
        ))}
      </div>
    </section>
  );
};

export default Ralated;

function Post({ data }) {
  const { id, title, category, img, published, author, description } = data;

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
              <a className="text-orange-600  hover:text-orange-800">{category}</a>
            </Link>
            <Link href={`/posts/${id}`}>
              <a className="text-gray-600  hover:text-gray-800"> - {published}</a>
            </Link>
          </div>
          <div className="title">
            <Link href={`/posts/${id}`}>
              <a className="text-xl font-bold text-gray-800  hover:text-gray-600">{title}</a>
            </Link>
          </div>

          <Author {...author} />
        </div>
      </div>
    </>
  );
}
