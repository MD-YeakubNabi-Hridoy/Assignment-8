import toast from 'react-hot-toast';

// add to read list item

const getStoredReadBook = () => {
    const storedReadBook = localStorage.getItem('read-the-book');

    if(storedReadBook){
        return JSON.parse(storedReadBook);
    }
    else{
        return [];
    }
}

const addToReadBook  = book =>{

    const storedReadBook = getStoredReadBook();
    const Exist = storedReadBook.find(b => b.bookId === book.bookId);
    if(!Exist){
        storedReadBook.push(book);
        localStorage.setItem('read-the-book', JSON.stringify(storedReadBook));
        toast.success('Successfully add to Read!');
    }
    else{
       return toast.error('Already add to read');
    }
}

// add to wishlist item

const getStoredWishlist = () => {
    const storedWishlist = localStorage.getItem('add-to-wishlist');

    if(storedWishlist){
        return JSON.parse(storedWishlist);
    }
    else{
        return [];
    }
}

const addToWishlist = book => {
    const storedWishlist = getStoredWishlist();
    const Exists = storedWishlist.find(bw => bw.bookId === book.bookId);
    if(!Exists){
        storedWishlist.push(book);
        localStorage.setItem('add-to-wishlist', JSON.stringify(storedWishlist));
        toast.success('Successfully add to Wishlist!');
    }
    else{
        toast.error('Already add to wishlist');
    }
}

export {addToReadBook, getStoredReadBook, addToWishlist, getStoredWishlist}