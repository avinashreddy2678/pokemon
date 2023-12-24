"use client";
import Card from "@/app/components/Card";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Page = ({ params: type }: any) => {
  const [data, setdata] = useState<any>([]);
  const [loading,setloading]=useState(false);
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
      finally{
        setloading(false)
      }
    };

    fetchData();
  }, [type]);

  return (
    <div className="flex flex-wrap h-auto ml-12">
      {
  loading ? (
    "loading..."
  ) : data.length > 0 ? (
    data.map((item: any) => (
      <div key={item.id} className="p-4 m-2 shadow-lg">
        {item.pokemon.url !== null && (
          <>
            <Card name={item?.pokemon?.name} info={item?.pokemon?.url} />
          </>
        )}
      </div>
    ))
  ) : (
    "Nothing to show"
  )
}

      
    </div>
  );
};

export default Page;
