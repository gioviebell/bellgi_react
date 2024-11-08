import Library from '../components/Library';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function LibraryPage({ setSongToEdit }) {
    const navigate = useNavigate();
    const [songs, setSong] = useState([]);

    const loadSong= async () => {
        // Created separately from useEffect because the parameter passed cannot be a promise //
        const response = await fetch('http://localhost:3008/songs');
        // promise is resolved if a response object is returned //
        const songData = await response.json();
        // calls function returned by useState and updates the state variable // 
        setSong(songData);

    };
    useEffect(() => {
        loadSong();
    }, []); 

    // Delete function created that uses fetch to return a response of the exercise being deleted //
    const onDelete = async (_id) => {
        const response = await fetch(`http://localhost:3008/songs/${_id._id}`, {method: 'DELETE'});
        if (response.status === 204){
           alert('Song deleted!')
            const newSong = songs.filter(song => song._id !== _id);
           
            setSong(newSong); 
        } else {
            console.error(`Unable to delete the song id = ${_id}, status code = ${response.status}`);
        }
    };

    const onEdit = (songToEdit) => {
        // Sets the exercise to edit, but doesn't read it
        navigate(`/edit-song/${songToEdit._id}`);

    };
    

    return (
        <>
            <h2>Current Exercises</h2>
            <p>Below is a comprehensive list of all of your songs. You can edit, delete, or add a new song to the library. Once finished 
                deleting songs, please refresh the page for an updated library.
            </p>
            <Library songs={songs} onDelete={onDelete} onEdit={onEdit} />
            <Link to="/add-song">Add Song </Link>
            <footer className='footer'>Giovanita Bell 2024</footer>
        </>
        
    );
}

export default LibraryPage;