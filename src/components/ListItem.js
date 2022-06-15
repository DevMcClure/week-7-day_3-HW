import React from 'react';


const ListItem = ({song}) => {

    return <li>{song["im:name"].label} by {song["im:artist"].label} </li>
} 

export default ListItem;