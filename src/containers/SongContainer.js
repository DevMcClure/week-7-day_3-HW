import React, {useEffect, useState} from 'react';
import SongList from '../components/SongList';
import ListItem from '../components/ListItem';


const SongContainer = () => {
    const [songs, setSongs] = useState([]);
    // const [selectedSong, setSelectedSong] = useState(null);


    useEffect(() => {
        getSongs();
    })



    const getSongs = function (){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(data => setSongs(data.feed.entry))
    }

    return (
        <div>
            <SongList songs={songs}/>

        </div>
    )

}


export default SongContainer;