"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { BiBookOpen, BiSolidNews } from "react-icons/bi";
import { FiUsers, FiLoader } from "react-icons/fi";

export type Article = {
  id: string;
  title: string;
  author: string;
  urlToImage: string;
  description: string;
  url: string;
};

function HeadlinesDashboard() {
  const [data, setData] = useState([] as any);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const BASE_URL = process.env.NEXT_PUBLIC_NEWS_API_BASE_URL as string;
    const API_KEY = process.env.NEXT_PUBLIC_NEW_API_ACCESS_KEY as string;
    const url = new URL(BASE_URL);

    url.searchParams.append("country", "in");
    url.searchParams.append("category", "sports");
    url.searchParams.append("apiKey", API_KEY);

    fetch(url.href)
      .then((res) => res.json())
      .then((headlines) => {
        setData(headlines);
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="flex p-10 justify-center">
        <div>
          <FiLoader
            className="animate-spin"
            style={{
              color: "#999999",
              marginTop: "auto",
              fontSize: "25px",
            }}
          />
        </div>
      </div>
    );
  }
  if (!data) return <p>No profile data</p>;

  return (
    <div className="flex max-w-full flex-col overflow-hidden">
      <div className="grid grid-flow-col justify-center">
        <span className="text-white text-xl p-6">Top Headlines</span>
      </div>

      <div className="grid grid-cols-1 p-2 gap-1">
        <div className="carousel w-full">
          {data &&
            data.articles.map((article: Article, index: string) => (
              <>
                <div
                  key={`carousel-item-${index}`}
                  id={index}
                  className="carousel-item w-full"
                >
                  <div className="grid grid-cols-12 gap-3 border border-white p-3">
                    <div className="grid col-start-1 col-span-4 ">
                      {article.urlToImage && (
                        <Image
                          src={article.urlToImage}
                          width={100}
                          height={100}
                          alt={article.description}
                          className="w-full h-full object-cover rounded-md"
                        />
                      )}
                      {!article.urlToImage && (
                        <BiSolidNews className="m-10 inline-flex text-zinc-400 text-6xl" />
                      )}
                    </div>
                    <div className="grid col-span-6">
                      <span className="text-md text-zinc-300">
                        {article.title}
                      </span>
                      {article.author && (
                        <span className="text-sm text-zinc-400 inline-flex gap-2">
                          <FiUsers className="m-1" />
                          {article.author}
                        </span>
                      )}
                    </div>
                    <div className="grid col-span-1">
                      <Link href={article.url} target="_blank">
                        <BiBookOpen className="m-10 inline-flex text-zinc-400 text-3xl" />
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            ))}
        </div>

        <div className="flex justify-left max-w-60 p-2 gap-1 overflow-scroll">
          {data &&
            data.articles.map((article: Article, index: string) => (
              <a
                key={`link-${index}`}
                href={`#${index}`}
                className="btn btn-ghost text-xs text-zinc-100"
              >
                {index + 1}
              </a>
            ))}
        </div>
      </div>
    </div>
  );
}

export default HeadlinesDashboard;
