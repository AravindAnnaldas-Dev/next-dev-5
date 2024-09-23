"use client";

import axios from "axios";
import React from "react";
import useSWR from "swr";

type Tposts = {
  userId: string;
  id: number;
  title: string;
  body: string;
};

const fetcher = (url: string) =>
  axios.get(url).then((response) => response.data);

const ClinetSideUseSWRHook = () => {
  const { data, error, isLoading, mutate } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  if (error) return <div>Error in data fetching...</div>;
  if (isLoading)
    return (
      <div className="w-10 h-10 rounded-[50%] border-[5px] border-[#414141] border-t-[#cccccc] animate-spin"></div>
    );

  const onManualValidating = () => {
    mutate();
  };

  return (
    <>
      <div>
        {data.map((item: Tposts) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </div>
      <button
        className="absolute top-2 right-2 py-2 px-4 border-[1px] border-black"
        onClick={onManualValidating}
      >
        Manual Validating
      </button>
    </>
  );
};

export default ClinetSideUseSWRHook;
