"use client"

import React from "react";


interface IntroduksjonData {
  _id: string;
  title: string;
  content: string;
  slug?: { current: string };
}

interface Props {
  data: IntroduksjonData[];
}


const Introduksjon: React.FC<Props> = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <div key={item._id}> 
          <h2>{item.title}</h2>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Introduksjon;





  

  