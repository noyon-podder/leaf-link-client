"use client";
import Post from "@/components/module/Profiile/post/Post";
import { useGetAllPost } from "@/hooks/post.hook";
import { IPost } from "@/types";
import React from "react";

const HomePage = () => {
  // const res = await fetch(`${envConfig.baseApi}/post`, {
  //   cache: "no-store",
  // });
  // const data = await res.json();

  // console.log(data?.data);

  const { data } = useGetAllPost();
  console.log(data);

  return (
    <div className="">
      {data?.data.map((item: IPost) => (
        <Post key={item._id} post={item} />
      ))}
    </div>
  );
};

export default HomePage;
