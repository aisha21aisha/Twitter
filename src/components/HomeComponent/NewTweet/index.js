import { PROFILE_PNG_PATH, AVATAR_PNG_PATH } from "../images"
import Tweet from "../TweetLists/Tweet"


export default function NewTweet ({content, onChangeTextInput, onTweet}) {
    return (
        <div className="p-3 d-flex flex column" style={{borderBottom: '2px solid whitesmoke'}}>
            <div>
                <img src = {PROFILE_PNG_PATH} style = {{width: 50, height: 50, borderRadius: 50}}/>
                <input onChange = {onChangeTextInput} value = {content} placeholder="What's hapenning?" style={{border:'none',  fontSize:18, outline: 'none'}} className='mx-3'/>
            </div>
            <div className="d-flex justify-content-end">
                <button onClick = {onTweet} style = {{alignSelf:'flex-end', color:'white', background:'#1D98F0', borderRadius:20, height: '30px' }}>Tweet</button>
            </div>
        </div>
    )
}