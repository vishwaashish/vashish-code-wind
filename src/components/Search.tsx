"use client";
import Fuse from "fuse.js";

const data = [{ title: "Introduction", content: "Welcome to docs" }];
const fuse = new Fuse(data, { keys: ["title", "content"] });

export default function Search() {
  const search = (query: string) => {
    const results = fuse.search(query);
    console.log(results);
  };

  return (
    <input onChange={(e) => search(e.target.value)} placeholder="Search" />
  );
}
