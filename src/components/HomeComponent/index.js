import NewTweet from "./NewTweet";
import TweetLists from "./TweetLists";
import { AVATAR_PNG_PATH, PROFILE_PNG_PATH } from "./images";
import React from "react";
import Tweet from "./TweetLists/Tweet";


class Home extends React.Component {
    constructor() {
        super ();
        this.state = {
            content:'',

            tweets: [  
                        {
                            id: 0,
                            author: 'Free KZ today',
                            authorUsername: '@kz',
                            img: AVATAR_PNG_PATH,
                            content: 'Update. Alibek says he has not ...',
                            replies: 200,
                            retweets: 1000,
                            likes: 500,
                            shares: 10,
                
                        },
                        {
                            id: 1,
                            author: 'Free KZ today',
                            authorUsername: '@kz',
                            img: PROFILE_PNG_PATH,
                            content: 'Update. Alibek says he has not ...',
                            replies: 200,
                            retweets: 1000,
                            likes: 500,
                            shares: 10,
                
                        },
                        {
                            id: 2,
                            author: 'Free KZ today',
                            authorUsername: '@kz',
                            img: AVATAR_PNG_PATH,
                            content: 'Update. Alibek says he has not ...',
                            replies: 200,
                            retweets: 1000,
                            likes: 500,
                            shares: 10,
                
                        },
                        {
                            id: 3,
                            author: 'Free KZ today',
                            authorUsername: '@kz',
                            img: AVATAR_PNG_PATH,
                            content: 'Update. Alibek says he has not ...',
                            replies: 200,
                            retweets: 1000,
                            likes: 500,
                            shares: 10,
                
                        },
                        {
                            id: 4,
                            author: 'Free KZ today',
                            authorUsername: '@kz',
                            img: AVATAR_PNG_PATH,
                            content: 'Update. Alibek says he has not ...',
                            replies: 200,
                            retweets: 1000,
                            likes: 500,
                            shares: 10,
                
                        },
                        {
                            id: 5,
                            author: 'Free KZ today',
                            authorUsername: '@kz',
                            img: AVATAR_PNG_PATH,
                            content: 'I can buy myself flowers Write my name in the sand Talk to myself for hoursSay things you dont understand I can take myself dancing And I can hold my own hand Yeah, I can love me better than you can Can love me better I can love me better, baby',
                            replies: 200,
                            retweets: 1000,
                            likes: 500,
                            shares: 10,
                
                        },
                
                    ]
                }
            }

            onChangeTextInput = (e) => {

                this.setState({
                    content: e.target.value
                }

                )
            }

            addToTweets = () => {

                const newTweet = {
                            id: this.state.tweets.length,
                            author: 'Free KZ today',
                            authorUsername: '@Karina',
                            img: AVATAR_PNG_PATH,
                            content: this.state.content,
                            replies: 0,
                            retweets:0,
                            likes: 0,
                            shares: 0,

                }

                this.setState ({
                    tweets:[...this.state.tweets, newTweet ],
                    content: ''
                })

            }

            deleteTweet = (id) => {
                this.setState ({
                    tweets: this.state.tweets.filter(item=>item.id !== id)
                })
            }
    render () {

        const {tweets, content} = this.state;
                return (
                    <div className = "w-50 mt-3 mx-3">
                        <h5 className="mx-3">Home</h5>
                        <NewTweet content={content} onChangeTextInput = {this.onChangeTextInput} onTweet = {this.addToTweets}/>
                        <TweetLists tweets = {tweets} deleteTweet = {this.deleteTweet}/>
                </div>
        )
    }
}

export default Home;