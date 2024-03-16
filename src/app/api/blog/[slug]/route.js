import { NextResponse } from "next/server";
import { connectToDb } from "../../../../../lib/utils";
import { Post } from "../../../../../lib/models";

export const GET = async (request, { params }) => {
  const { slug } = params;
  try {
    connectToDb();

    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts");
  }
};

export const DELETE = async (request, { params }) => {
  const { slug } = params;
  try {
    connectToDb();

    await Post.deleteOne({ slug });
    return NextResponse.json("Post has been deleted!");
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete post");
  }
};
