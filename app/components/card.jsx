"use client";
import { appContext } from "@/context";
import { useContext, useState } from "react";

export default function Card() {
  const { jobData } = useContext(appContext);
  const [arr, setArr] = useState([])

  const elements = jobData.map(item => {
    const {
      id,
      company,
      logo,
      featured,
      position,
      role,
      level,
      postedAt,
      contract,
      location,
      languages,
      tools,
    } = item;

    return (
      <div
        key={id}
        className={`bg-white ${featured ? "border-l-4": ""} rounded-md shadow-b-6 shadow-desaturatedDarkCyan border-desaturatedDarkCyan w-full flex flex-col md:flex-row md:justify-between md:items-center p-4`}
      >
        <section className="flex space-x-4 items-center  border-b-2 md:border-none py-5 md:py-0">
          <img src={logo} alt="" className="w-14" />
          <article className="flex items-start space-y-2 text-xs flex-col">
            <div className="flex text-[10px] space-x-2 text-lightGrayishCyan font-semibold items-center">
              <h2 className="text-desaturatedDarkCyan">{company}</h2>
              {item.new && (
                <h2 className="uppercase p-1 px-2 rounded-xl bg-desaturatedDarkCyan">
                  new!
                </h2>
              )}
              {featured && (
                <h2 className="uppercase p-1 px-2 rounded-xl bg-veryDarkGrayishCyan">
                  featured
                </h2>
              )}
            </div>
            <h1 className="font-bold capitalize text-veryDarkGrayishCyan">
              {position}
            </h1>
            <div className="flex space-x-3 font-semibold text-darkGrayishCyan">
              <p className="">{postedAt}</p>
              <p>.</p>
              <p>{contract}</p>
              <p>.</p>
              <p>{location}</p>
            </div>
          </article>
        </section>

        <section className="flex items-center overflow-x-scroll space-x-3 text-[10px] font-bold capitalize text-desaturatedDarkCyan py-5 md:py-0">

          {languages.concat(tools, role, level).map((item, index) => {
            return (
              <h4 key={index} className="p-2 py-1 bg-lightGrayishCyanFilterTablets rounded-md">
                {item}
              </h4>
            );
          })}
        </section>
      </div>
    );
  });

  return (
    <>
      {elements}
    </>
  )
}
