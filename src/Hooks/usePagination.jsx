import { useState, useEffect } from "react";

const usePagination = (fetchData) => {
    const [data, setData] = useState([]);
    const [loadingPage, setLoadingPage] = useState(true);
    const [fetchingData, setFetchingData] = useState(false);
    const [fetchMore, setFetchMore] = useState(true);
    const [currentDocument, setCurrentDocument] = useState();
    useEffect(() => {
        setLoadingPage(true);
        fetchData(setFetchMore, currentDocument, setCurrentDocument).then(
            (data) => {
                setData(data);
                setLoadingPage(false);
                if (data.length === 0) setFetchMore(false);
            }
        );
    }, []);
    let fetchNextData = async () => {
        setFetchingData(true);
        let data = await fetchData(
            setFetchMore,
            currentDocument,
            setCurrentDocument
        );
        setData((prevJobPosts) => [...prevJobPosts, ...data]);
        setFetchingData(false);
    };
    return [data, loadingPage, fetchingData, fetchMore, fetchNextData];
};

export default usePagination;
