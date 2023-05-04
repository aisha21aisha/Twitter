import { AVATAR_PNG_PATH, PROFILE_PNG_PATH } from "../images"
import Tweet from "./Tweet"

export default function TweetLists ({tweets, deleteTweet}) {

    return tweets.map((tweets) => <Tweet tweets={tweets} key = {tweets.id} deleteTweet={deleteTweet}/>)
     
}