import React, {useState, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";

const EditSongPage = () => {
    const {_id} = useParams();
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [mood, setMood] = useState('');

    const navigate = useNavigate();
    useEffect(() => {
        const loadSong = async () => {
            const response = await fetch(`http://localhost:3008/songs/${_id}`);
            const songData = await response.json();
            
            if (songData) {
                setTitle(songData.title || '');
                setArtist(songData.artist || '');
                setAlbum(songData.album || '');
                setMood(songData.mood || '');
            }
        };

        loadSong();
    }, [_id]); // 

    const editSong = async () => {
        const editedSong = {title, artist, album, mood};
        
        const response = await fetch(`http://localhost:3008/songs/${_id}`, {
          method: 'PUT',  
          body: JSON.stringify(editedSong),
          headers: {
            'Content-Type': 'application/json'
          },
        });
        if(response.status === 200) {
            alert('Song updated');
        } else {
            alert('Failed to edit song ')
        }
        navigate("/library");
    };
    return (
        <div className="edit-song">
            <h1>Add Song</h1>
            <input
                type="text"
                placeholder= "Song Title"
                value={title}
                onChange={e => setTitle(e.target.value)} 
                />
            <input
                type="text"
                placeholder="Song Artist"
                value={artist}
                onChange={e => setArtist(e.target.value)}
            />
            <input
                type="text"
                placeholder="Song Album"
                value={album}
                onChange={e => setAlbum(e.target.value)}
            />
            <input
                type="text"
                placeholder="Corresponding Song Mood"
                value={mood}
                onChange={e => setMood(e.target.value)}
            />
            <button onClick={editSong}>Edit Song</button>
        </div>
    );

};
export default EditSongPage;