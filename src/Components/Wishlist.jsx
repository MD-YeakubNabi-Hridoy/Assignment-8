import { useEffect, useState } from 'react';
import {getStoredWishlist } from '../Utility/LocalStorage';
import WishListCard from './WishListCard';

const Wishlist = () => {

    const [wishList, setWishList] = useState([]);
    useEffect(() => {
        const storedWishBook = getStoredWishlist;
        setWishList(storedWishBook);
    },[])
    // console.log(wishList);
    return (
        <div className='mt-10'>
            {
                Array.isArray(wishList) && wishList?.map(wish => <WishListCard key={wish.bookId} wish={wish}></WishListCard>)
            }
        </div>
    );
};

export default Wishlist;