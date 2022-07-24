import React from "react";
import Author from "../../components/_child/Author";
import Format from "../../layout/format";
import Image from "next/image";
import Ralated from "../../components/_child/Ralated";
import getPosts, { getPost } from "../../lib/helper";
import Fetcher from "../../lib/fetcher";
import Spinner from "../../components/_child/Spinner";
import Error from "../../components/_child/Error";
import { useRouter } from "next/router";
import { SWRConfig } from "swr";
export default function Page({ fallback }) {
  const router = useRouter();
  const { postId } = router.query;
  const { data, isLoading, isError } = Fetcher(`api/posts/${postId}`);
  if (isLoading) return <Spinner />;
  if (isError) return <Error />;
  console.log(data);

  return (
    <SWRConfig value={{ fallback }}>
      <Aticle {...data} />
    </SWRConfig>
  );
}

const Aticle = ({ title, img, subtitle, description, author }) => {
  return (
    <Format>
      <section className="container mx-auto md:px-2 py-16 w-1/2 ">
        <div className="flex justify-center">{author ? <Author /> : <></>}</div>
        <div className="post py-10">
          <h1 className="font-bold text-4xl text-center pb-5">{title}</h1>
          <p className="text-gray-500 text-xl text-center">{subtitle}</p>

          <div className="py-10">
            <Image src={img || "/images/img1.jpg"} width={900} height={600} alt="포스트 이미지" />
          </div>
          <div className="content text-gray-600 text-lg flex flex-col gap-4">
            <p>{description}</p>
          </div>
        </div>
        <Ralated></Ralated>
      </section>
    </Format>
  );
};

export async function getStaticProps({ params }) {
  const post = await getPost(params.postId);
  return {
    props: {
      fallback: { "/api/posts": post },
    },
  };
}
// 미리 사전된

export async function getStaticPaths() {
  const posts = await getPosts();
  const paths = posts.map((value) => {
    return {
      params: {
        postId: value.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
