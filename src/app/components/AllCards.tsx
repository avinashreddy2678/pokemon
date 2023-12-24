"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const AllCards = () => {
  const [offset, setoffset] = useState(0);
  const url = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`;
  const [data, setdata] = useState<any>([]);
  const fetchData = async () => {
    try {
      const res = await axios.get(url);
      setdata((prev: any) => [...prev, ...res.data.results]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const loadmore = () => {
    console.log("clicked");
    setoffset((prev) => prev + 20);
  };
  useEffect(() => {
    fetchData();
  }, [url, offset]);

  return (
    <div className="flex flex-col">
      <div className="flex  flex-wrap h-auto w-full ml-12">
        {data.map((item: any) => (
          <div key={item.name} className="p-4 m-2 shadow-lg">
            {<Card name={item.name} info={item.url} />}
          </div>
        ))}
      </div>
      {
        <div className="my-4 text-center">
        <button
        className="btn btn-success"
          onClick={() => {
            loadmore();
          }}
        >
          Load More
        </button>
        </div>
      }
    </div>
  );
};

export default AllCards;
