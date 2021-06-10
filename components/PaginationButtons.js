import { useRouter } from 'next/router';
import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";

function PaginationButtons(props) {
    const router = useRouter();
    const startIndex = Number(router.query.start) || 0;
    return (
        <div className="flex max-w-lg justify-between text-blue-700 mb-10">
            {startIndex >= 10 && (
                <Link href={`/search?term=${router.query.term}&start=${startIndex - 10}`}>
                    <div className="pagination-container">
                        <ChevronLeftIcon className="h-5" />
                        <p>Previous</p>
                    </div>
                </Link>
            )}
            <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
                <div className="pagination-container">
                    <ChevronRightIcon className="h-5" />
                    <p>Next</p>
                </div>
            </Link>
        </div>
    );
}

export default PaginationButtons;