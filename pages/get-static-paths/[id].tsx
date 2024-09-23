import axios from "axios";
import React from "react";

type Tposts = {
  userId: string;
  id: number;
  title: string;
  body: string;
};

type Tid = {
  id: number;
};

export async function getStaticPaths() {
  const response = await axios("https://jsonplaceholder.typicode.com/posts");
  const data = response.data;

  const paths = data.map((user: Tposts) => ({
    params: { id: user.id.toString() },
  }));

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }: { params: Tid }) {
  const response = await axios(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const data = response.data;

  return {
    props: {
      data,
    },
  };
}

const Id = ({ data }: { data: Tposts }) => {
  return (
    <>
      <div>{data.title}</div>
    </>
  );
};

export default Id;
