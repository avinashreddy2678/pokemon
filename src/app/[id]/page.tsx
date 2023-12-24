"use client"
import React, { useEffect, useState } from "react";
import singlePokeman from "../libs/Getsinglepokeman";
import Card from "../components/Card";
import Cardinfo from "../components/Cardinfo";
const Pokeman =  ({ params: id }: any) => {
  const [data,setdata]=useState<any>([])
  const fetchdata=async()=>{
    const data = await singlePokeman(id);
    setdata(data);
  }
  useEffect(()=>{
    fetchdata()
  },[])
  console.log(data)
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      { data !== "Error" ? (<div className="shadow-lg"><Cardinfo data={data}/> </div>) : <div className="flex items-center justify-center w-full h-[80vh]">Please Check Your Input</div>}
    </div>
  );
};

export default Pokeman;
