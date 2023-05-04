import { Bookmarks_SVG, Explore_SVG, Home_SVG, Messages_SVG, Notification_SVG, Smile_SVG } from './images/index'
import MenuItem from './menuItem'

import './styles.css'

export default function SideMenu () {

    const menu = [
        {
            icon: Home_SVG,
            name: 'Home'
        },
        {
            icon: Explore_SVG,
            name: 'Explore'
        },
        {
            icon: Notification_SVG,
            name: 'Notification'
        },
        {
            icon: Messages_SVG,
            name: 'Messages'
        },
        {
            icon: Bookmarks_SVG,
            name: 'Bookmarks'
        },
        

    ]
    return (
        <div className = "w-25 mt-3 mx-5">
            <img src={require('./images/logo.png')} className="logo-icon mx-3 my-3"/>
           {menu.map ((item, index) => <MenuItem item={item} key={index}/>)}
        </div>
           )}