import { useSelector, useDispatch } from "react-redux";
import { deleteBook } from "./bookSlice";


function BookList() {

    const books = useSelector(
        (state)=>state.library.books
    )
    const dispatch = useDispatch();
    return(
        <div>
            <h2>Books</h2>
            {
                books.map((book)=>(
                    <div key={book.id}>
                        <h4>{book.title}</h4>
                        <p>{book.author}</p>
                        <button onClick={()=>dispatch(deleteBook(book.id))}>Delete</button>
                        <hr/>
                    </div>
                ))
            }
        </div>
    );
}

export default BookList;