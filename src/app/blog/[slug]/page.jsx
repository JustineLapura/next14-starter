import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "../../../components/postUser/PostUser";
import { Suspense } from "react";
// import { Suspense } from "react";
import { getPost } from "../../../../lib/data";

// FETCH DATA WITH AN API
// const getData = async (slug) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// };

// export const generateMetadata = async ({ params }) => {
//   const { slug } = params;

//   // const post = await getPost(slug);

//   return {
//     title: post.title,
//     description: post.desc,
//   };
// };

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  console.log(params);

  // FETCH DATA WITH AN API
  // const post = await getData(slug);
  // console.log("SinglePost: ", post);

  // FETCH DATA WITHOUT AN API
  const post = await getPost(slug);
  console.log("Post: ", post);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/dj.jpg" alt="" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          <Image
            src="/profile.jpg"
            alt=""
            width={20}
            height={20}
            className={styles.avatar}
          />
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post?.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>March 15, 2024</span>
          </div>
        </div>
        <div className={styles.content}>{post?.body}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
