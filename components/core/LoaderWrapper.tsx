'use client';

import { useState } from "react";
import Loader from "../common/Loader";


export default function LoaderWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const [loading, setLoading] = useState(true);

    return (
        <>
            {loading && <Loader onComplete={() => setLoading(false)} />}
            {!loading && children}
        </>
    );
}