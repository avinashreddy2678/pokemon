import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  DialogContent,
  DialogHeader,
  DialogTrigger,
  Dialog,
} from "./ui/dialog";

const Cardinfo = ({ data }: any) => {
  return (
    <div className="flex">
      <Dialog>
        <DialogTrigger asChild>
          
          <div className="flex flex-col justify-center items-center">
            <div className="">Id: {data?.id}</div>
            <Image
            src={data?.sprites?.front_default || "/fallback_image_url"}
            alt="hello"
            width={230}
            height={230}
          />
            
            {data?.types?.map((item: any) => (
              <div key={item.type.name}>{item.type.name}</div>
            ))}
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[100vw]">
          <DialogHeader>
            <div className="flex-col">
              <div className="text-2xl text-center text-white">
                {data?.name}
              </div>
              <Image
                src={data?.sprites?.front_default}
                alt={data?.name}
                width={430}
                height={430}
              />
              <div className="mt-2">
                {data?.stats?.map((item: any) => (
                  <div key={item} className="text-white">
                    {item?.stat?.name} :{item?.base_stat}
                    <progress
                      className="progress progress-primary ml-2 bg-slate-200 w-56"
                      value={item?.base_stat}
                      max="255"
                    ></progress>
                  </div>
                ))}
              </div>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Cardinfo;
