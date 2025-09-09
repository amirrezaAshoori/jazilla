'use client';

import { atom, useAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export function createQueryString(queryObj) {
    let path = [];
    for (const [key, value] of Object.entries(queryObj)) {
        path.push(`${key} = ${value}`);
    }
    return path.join('&').toString();
}

const queryAtom = atom('');

export default function useQueryParam(pathname = '/') {
    const [query, setQuery] = useAtom(queryAtom);
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const l = setTimeout(() => {
            setLoading(false);
        }, 500);
        return () => clearTimeout(l);
    }, [query]);

    const clearQueryParam = (keys) => {
        let url = new URL(location.href);
        keys.forEach((item) => url.searchParams.delete(item));
        setQuery(url.search);
        router.replace(`${pathname}${url.search}`);
    };

    const setQueryparams = (data) => {
        let queryString = '';
        if (typeof data !== 'string') {
            queryString = createQueryString(data);
        }
        setQuery(queryString);
    };

    function getParams(url = window.location) {
        const params = {};
        new URL(url).searchParams.forEach((val, key) => {
            if (params[key] !== undefined) {
                if (!Array.isArray(params[key])) {
                    params[key] = [params[key]];
                }
                params[key].push(val);
            } else {
                params[key] = val;
            }
        });
        return params;
    }

    const updateQueryparams = (key, value) => {
        if (!value) {
            clearQueryParam([key]);
            return;
        }
        const url = new URL(location.href);
        url.searchParams.set(key, value.toString());
        setQuery(url.search);
        router.replace(`${pathname}${url.search}`);
    };

    return {
        query,
        loading,
        getParams,
        setQueryparams,
        updateQueryparams,
        clearQueryParam,
    };
}