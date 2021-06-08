import Head from 'next/head';
import React from 'react';
import Header from '../components/Header';

function Search() {
    return (
        <div>
            <Head>
                <title>Search Results</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
        </div>
    );
}

export default Search;