import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

export const AddSongPage = () => {
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [mood, setMood] = useState('');

    const navigate = useNavigate();
    // create function that sends POST request to add songs to REST
    const addSong = async () => {
        const newSong = {title, artist, album, mood};
        
        const response = await fetch('http://localhost:3008/songs', {
          method: 'POST',  
          body: JSON.stringify(newSong),
          headers: {
            'Content-Type': 'application/json'
          },
        });
        if(response.status === 201) {
            alert('New song created');
        } else {
            alert('Failed to add new song ')
        }
        navigate("/library");
    };
    return (
        <div className="add-song">
            <h1>Add Song</h1>
            <table className="add-table">
                <thead>
                    <tr>
                        <th>Song Title</th>
                        <th> Artist Name</th>
                        <th>Album Name</th>
                        <th>Song Mood</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input
                                type="text"
                                placeholder= "Song Title"
                                value={title}
                                onChange={e => setTitle(e.target.value)} 
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                placeholder="Song Artist"
                                value={artist}
                                onChange={e => setArtist(e.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                 type="text"
                                 placeholder="Song Album"
                                 value={album}
                                 onChange={e => setAlbum(e.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                placeholder="Corresponding Song Mood"
                                value={mood}
                                onChange={e => setMood(e.target.value)}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>    
            <button onClick={addSong}>Add Song</button>
            <footer className="footer">Giovanita Bell 2024</footer>
        </div>
    );

};
export default AddSongPage;