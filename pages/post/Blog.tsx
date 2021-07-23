import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";

export default function Blog() {
  return (
    <>
      <Layout>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      </Layout>
      
    </>
  );
}