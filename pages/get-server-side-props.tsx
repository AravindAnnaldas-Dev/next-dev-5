import axios from "axios";
import React from "react";

export async function getServerSideProps() {
  const response = await axios("https://jsonplaceholder.typicode.com/posts");
  const data = response.data;

  return {
    props: { data },
  };
}

type Tposts = {
  userId: string;
  id: number;
  title: string;
  body: string;
};

const GetServerSideProps = ({ data }: { data: Tposts[] }) => {
  return (
    <>
      {data.map((item) => {
        return <li key={item.id}>{item.title}</li>;
      })}
    </>
  );
};

export default GetServerSideProps;
