import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Header from "../components/Header";
import SearchResults from "../components/SearchResults";
import Response from "../Response";

function Search({ results }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{router.query.term}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* Search Results */}
      <SearchResults results={results}/>
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = true;
  const startIndex = context.query.start || "0";

  const data = useDummyData
    ? Response
    : await axios
        .get(
          `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
        )
        .then(({ data }) => {
          return data;
        });

  return {
    props: {
      results: data,
    },
  };
}
