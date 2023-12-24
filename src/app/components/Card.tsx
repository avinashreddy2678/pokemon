import React, { useEffect, useState } from 'react'
import Cardinfo from './Cardinfo'
import axios from 'axios';

const Card = ({name,info}:any) => {
    const [data, setdata] = useState<any>([]);
  const fetchdata = async () => {
    const res = await axios.get(info);
    setdata(res.data);
  };
  useEffect(() => {
    fetchdata();
  }, [info]);
  return (
    <div className='h-auto flex flex-col flex-wrap items-center'>
     <div className='text-sm lg:text-lg md:text-md'> {name}</div>
      <Cardinfo data={data}/>
    </div>
  )
}

export default Card
