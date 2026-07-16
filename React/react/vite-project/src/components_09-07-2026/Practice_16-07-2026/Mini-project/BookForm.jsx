import { useReducer } from "react";
import { formReducer, initialState } from "./formReducer";
import { useDispatch } from "react-redux";
import { addBook } from "./bookSlice";

function BookForm() {
    const [state, dispatchForm] = useReducer(
        formReducer,
        initialState
    );

    const dispatch = useDispatch();
    function handleSubmit(e){
        e.preventDefault();
        dispatch(
            addBook({
                id:Date.now(),
                title:state.title,
                author:state.author
            })
        );

        dispatchForm({
            type:"RESET"
        });

    }

    return(

        <form onSubmit={handleSubmit}>
            <input
            placeholder="Book Title"
            value={state.title}
            onChange={(e)=>
                dispatchForm({
                    type:"TITLE",
                    payload:e.target.value
                })} />
            <br/><br/>
            <input
            placeholder="Author"
            value={state.author}
            onChange={(e)=>
                dispatchForm({
                    type:"AUTHOR",
                    payload:e.target.value
                })
            }
            />

            <br/><br/>

            <button>Add Book</button>

        </form>

    );

}

export default BookForm;