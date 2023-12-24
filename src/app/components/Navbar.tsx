"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
const Navbar = () => {
  const [types, settypes] = useState([]);
  const router = useRouter();
  const fun = async () => {
    const res = await axios.get("https://pokeapi.co/api/v2/type/");
    settypes(res.data.results);
  };
  useEffect(() => {
    fun();
  }, []);
  //console.log(types);
  const hanldesubmit = (e: any) => {
    e.preventDefault();
    router.push(`/${searchvalue}`);
    setsearchvalue("")
  };
  const [theme, settheme] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("theme") || "light"
      : "dark"
  );
  const [searchvalue, setsearchvalue] = useState("");
  
  const handleTypeChange = (type: any) => {
      router.push(`/type/${type}`)
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme || "");
      document.querySelector("html")?.setAttribute("data-theme", theme || "");
    }
  }, [theme]);

  return (
    <div className="mx-16 mt-8 block md:flex lg:flex items-center justify-between">
      <div>
        <h2
          onClick={() => {
            router.push("/");
          }}
          className="text-3xl cursor-pointer font-serif"
        >
          Pokeman
        </h2>
      </div>
      <div className="mt-4 hidden lg:block md:block">
        <form onSubmit={(e) => hanldesubmit(e)}>
          <input
            className="px-3 py-2 border rounded-md"
            value={searchvalue}
            onChange={(e) => {
              setsearchvalue(e.target.value);
            }}
            type="text"
            placeholder="Search here for Your Pokeman"
          />
        </form>
      </div>
      <div className="max-h-[20vh] hidden lg:block md:block overflow-auto">
        <select
          id="types"
          className="text-sm overflow-scroll rounded-lg block w-full px-3 py-2 pr-2"
          defaultValue="Type"
          onChange={(e) => handleTypeChange(e.target.value)}
        >
          <option className="h-[50vh] p-3" disabled value="Type">
            Type
          </option>
          {types &&
            types.map((type: any) => (
              <option key={type.name} className="p-12 m-12" value={type.name}>
                {type.name}
              </option>
            ))}
        </select>
      </div>
      <div className="flex items-end form-control">
        <label className="label cursor-pointer">
          <input
            type="checkbox"
            onChange={() => {
              settheme(theme === "dark" ? "light" : "dark");
            }}
            className="toggle"
          />
        </label>
      </div>
      <div className="mt-4 block lg:hidden md:hidden">
        <form onSubmit={(e) => hanldesubmit(e)}>
          <input
            className="px-3 py-2 border rounded-md"
            value={searchvalue}
            onChange={(e) => {
              setsearchvalue(e.target.value);
            }}
            type="text"
            placeholder="Search here for Your Pokeman"
          />
        </form>
      </div>
      <div className="max-h-[20vh] block lg:hidden md:hidden overflow-auto">
        <select
          id="types"
          className="text-sm overflow-scroll rounded-lg block w-full px-3 py-2 pr-2"
          defaultValue="Type"
          onChange={(e) => handleTypeChange(e.target.value)}
        >
          <option className="h-[50vh] p-3" disabled value="Type">
            Type
          </option>
          {types &&
            types.map((type: any) => (
              <option key={type.name} className="p-12 m-12" value={type.name}>
                {type.name}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default Navbar;
