"use client";
import Card from "@/app/components/Card";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Page = ({ params: type }: any) => {
  const [data, setdata] = useState<any>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/type/${type.type}`
        );
        setdata(response.data.pokemon);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [type]);

  return (
    <div className="flex flex-wrap h-auto ml-12">
      {data.length > 0 ?
        data.map((item: any) => (
          <div key={item} className="p-4 m-2 shadow-lg">
            {item.pokemon.url !== null && (
              <>
              <Card name={item?.pokemon?.name} info={item?.pokemon?.url} />
              </>
            )}
          </div>
        )):"Nothign to show"}
    </div>
  );
};

export default Page;
