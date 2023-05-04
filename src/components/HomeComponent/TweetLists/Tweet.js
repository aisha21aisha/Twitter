import { useState } from "react";
import {COMMENTS, LIKES, RETWEETS, SHARE, DELETE } from "../images";


export default function Tweet({tweets, deleteTweet}) {
    const [title, setTitle] = useState (tweets.content);

    return (
        <div className="mt-3 mx-3" style={{borderBottom: '2px solid whitesmoke'}}>
                <p className="mx-5" style = {{fontSize: 14, fontWeight: '600'}}>You might like! 
                    <span style={{color:'#1D9BF0'}}> See more</span>
                </p>

            <div className="mx-3 d-flex flex-row">
                <img src = {tweets.img} style={{width:50, height: 50, borderRadius: 50}}/>

                <div className="mx-4">
                    <p style={{fontWeight:600}}>{tweets.authorName} 
                     <span style={{color:'grey'}}>{tweets.authorUsername}</span>
                    </p>
                <div  className="mx-1">
                    <p>{title.length>200 ? title.slice(0, 200) + '...' : title}</p>
                </div>
                </div>
                <button onClick={()=>deleteTweet(tweets.id)} style={{width:50 , height: 50, border: 'none', backgroundColor: 'transparent'}}> {DELETE}
                </button>
               
            </div>

            <div className="d-flex ">
                <div className="d-flex mx-3">
                    <div style= {{width: 20, height: 20,}}>{COMMENTS}</div>
                    <p className="px-1">{tweets.replies}</p>
                </div>
                <div className="d-flex mx-3">
                    <div style= {{width: 20, height: 20,}}>{RETWEETS}</div>
                    <p className="px-1">{tweets.retweets}</p>
                </div>
                <div className="d-flex mx-3">
                    <div style= {{width: 20, height: 20,}}>{LIKES}</div>
                    <p className="px-1">{tweets.likes}</p>
                </div>
                <div className="d-flex mx-3">
                    <div style= {{width: 20, height: 20,}}>{SHARE}</div>
                    <p className="px-1">{tweets.shares}</p>
                </div>
             </div>
        </div>

        
        
    )
}