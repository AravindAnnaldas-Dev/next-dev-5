import axios from "axios";
import React from "react";

export async function getStaticProps() {
  const response = await axios("https://jsonplaceholder.typicode.com/posts");
  const data = response.data;

  return {
    props: {
      data,
    },
    revalidate: 1,
  };
}

type Tposts = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const GetStaticProps = ({ data }: { data: Tposts[] }) => {
  return (
    <>
      {data.map((item) => {
        return <li key={item.id}>{item.title}</li>;
      })}
    </>
  );
};

export default GetStaticProps;
