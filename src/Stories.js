import React from 'react'
import {useGlobalContext} from './context';

const Stories = () => {

    let {isLoading, hits} = useGlobalContext();

    if(isLoading){
        return (
            <div className='loader'>
                <img src='images/loader.gif' alt='Loading...' />
            </div>
        )    
    } 

    return (
        <>
            {hits.map((currentPost)=>{
                
                return ( 
                    <div className="card" key={currentPost.objectID} >
                        <h2>{currentPost.title}</h2>
                        <p>
                        Author: <span>{currentPost.author} </span> Comments: <span>{currentPost.num_comments} </span>
                        </p>
                    </div>
                );

            })}
        </>
    )
}

export default Stories