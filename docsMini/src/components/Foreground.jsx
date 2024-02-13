import React from "react";
import Card from "./Card";
import { useState } from "react";
import { motion } from "framer-motion"
import { useRef } from "react";
function Foreground() {
  const ref = useRef(null);
  // useState()
  const data=[
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quae!",
      filesize: "25 MB",
      close: false,
      tag: { isopen: true,tagtitle: "Download Now", tagcolor: "blue"}
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quae!",
      filesize: "10 MB",
      close: false,
      tag: { isopen: true,tagtitle: "Download Now", tagcolor: "green"}
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quae!",
      filesize: "50 MB",
      close: false,
      tag: { isopen: true,tagtitle: "Download Now", tagcolor: "blue"}
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quae!",
      filesize: "60 MB",
      close: false,
      tag: { isopen: true,tagtitle: "Download Now", tagcolor: "green"}
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quae!",
      filesize: ".9mb",
      close: false,
      tag: { isopen: true,tagtitle: "Download Now", tagcolor: "green"}
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quae!",
      filesize: ".9mb",
      close: false,
      tag: { isopen: false,tagtitle: "Download Now", tagcolor: "green"}
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quae!",
      filesize: ".9mb",
      close: false,
      tag: { isopen: true,tagtitle: "Download Now", tagcolor: "green"}
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quae!",
      filesize: ".9mb",
      close: true,
      tag: { isopen: true,tagtitle: "Download Now", tagcolor: "green"}
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quae!",
      filesize: ".9mb",
      close: true,
      tag: { isopen: true,tagtitle: "Download Now", tagcolor: "green"}
    },
  ];
  return (
  <div ref={ref}className=" fixed  top-0 left-0 z-[3] h-full  w-full flex flex-wrap gap-10 flexwrap-wrap p-8">
    {data.map((item, index) =>(
      <Card data={item} reference={ref}/>
    ))}

  </div>
  )
}

export default Foreground;
