import axios from "axios";
import Link from "next/link";
import React from "react";

type Tposts = {
  userId: string;
  id: number;
  title: string;
  body: string;
};

export async function getStaticProps() {
  const response = await axios("https://jsonplaceholder.typicode.com/posts");
  const data = response.data;

  return {
    props: {
      data,
    },
  };
}

const GetStaticPaths = ({ data }: { data: Tposts[] }) => {
  return (
    <>
      {data.map((item) => (
        <Link key={item.id} href={`get-static-paths/${item.id}`}>
          <div>{item.title}</div>
        </Link>
      ))}
    </>
  );
};

export default GetStaticPaths;
