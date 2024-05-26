import React, { useEffect, useState } from 'react';
import { getStoredReadBook } from '../Utility/LocalStorage';
import ReadListCard from './ReadListCard';

const Readbook = () => {

    const [readList, setReadList] = useState([]);
    useEffect( () => {
        const storedReadBook = getStoredReadBook();
        setReadList(storedReadBook);
    }, []);

    return (
        <div className='my-10'>
            {
                readList.map(read => <ReadListCard key={readList.bookId} readCard={read}></ReadListCard>)
            }
        </div>
    );
};

export default Readbook;