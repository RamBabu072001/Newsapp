
import React , {useContext , useEffect} from "react"
import Mycontext from "./Mycontext"
import { useReducer } from "react";
import reducer from "./reducer";

const API_key = import.meta.env.VITE_APP_KEY
let API = `https://newsapi.org/v2/everything?`;


const initialState = {
    isLoading : true,
    pageSize:'20',
    q:"sports",
    page:1,
    articles:[]

};

const MycontextProvider = ({children})=>{
    const [state ,dispatch] = useReducer(reducer , initialState);

    const removePost = (postId)=>{
        dispatch({type:"REMOVE_POST" , payload:postId})
    }

    const SearchPost = (searchquery)=>{
        dispatch({type:"SEARCH_POST",
            payload:searchquery
        })
    }
    
    const getNextPage = ()=>{
        dispatch(
            {type:"NEXT_PAGE"}
        )
    }

    const getPrevPage = ()=>{
        dispatch({
            type:"PREV_PAGES"
        })
    }

    // let isLoading = true;
    const fetchApiData = async(url) =>{
        dispatch({type:"SET_STORIES"})
        try
        {
            const res = await fetch(url);
            const data = await res.json();
            dispatch({
                type:"GET_STORIES",
                payload: {
                    articles: data.articles,
                    
                }
            })
            // isLoading = false;
            console.log(data);
        }
        catch(error){
            console.log("error")
        }
    };

    useEffect(()=>{
        fetchApiData(`${API}q=${state.q}&pageSize=${state.pageSize}&page=${state.page}&apiKey=${API_key}`);
    }, [state.q , state.page] );


    return(
    <Mycontext.Provider value={{ ...state, removePost , SearchPost , getNextPage , getPrevPage}}>
        {children}
    </Mycontext.Provider>
    )
}; 

export default MycontextProvider