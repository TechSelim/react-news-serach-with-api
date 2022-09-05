// context creation
// Provider 
// Consumer or useContext hook

import React, { useContext, useReducer, useEffect } from 'react'
import reducer from './reducer';
const initialState = {
    isLoading: false,
    query: "HTML",
    nbPages: 0,
    page: 1,
    hits: []
}

const AppContext = React.createContext();


const AppProvider = ({children})=>{
    
    const [state, dispatch] = useReducer( reducer, initialState);

    const url = 'https://hn.algolia.com/api/v1/search';

    const searchQuery = (q)=>{
        dispatch({
            type: 'SEARCH',
            payload: q
        });
    }

    const getPrePage = () =>{
        dispatch({
            type: 'GET_PREV',
        });
    }

    const getNextPage = ()=>{
        dispatch({
            type: 'GET_NEXT',
        });
    }

    const getApi = async (url)=>{

        dispatch({
            type: 'LOADING_STATE'
        });

        try {
            const res = await fetch(url);
            const data = await res.json();

            dispatch({
                type: 'GET_STRIES',
                payload: {
                    nbPages: data.nbPages,
                    hits: data.hits
                }
            });

        } catch (error) {
            
        }
    }

    useEffect(()=>{
        getApi(`${url}?query=${state.query}&page=${state.page}`);
    }, [state.query, state.page]);

    return <AppContext.Provider value={ { ...state, searchQuery, getPrePage, getNextPage } } >
        {children}
        </AppContext.Provider>
}

const useGlobalContext = ()=>{
    return useContext(AppContext);
}
export {AppContext, AppProvider, useGlobalContext}