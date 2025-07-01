import { useState } from 'react';
import { api } from '../servics/api';

export const useSearch = () => {
    const [searchResults, setsearchResult] = useState([]);
    const [loading, setLoading] = useState([false]);
    const [searchQuery, setsearchQuery] = useState(['']);

    const search = async (query) => {
        if (!query.trim()) {
            setsearchResult([]);
            return;
        }


        try {
            setLoading(true);
            setsearchQuery(query);
            const data = await api.searchProducts(query);
            setsearchResult(data)
        } catch (error) {
            console.error('Search error', error)
        } finally {
            setLoading(false)
        }

    }
    return { searchResults, loading, searchQuery, search }

}