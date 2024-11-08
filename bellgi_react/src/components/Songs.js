import React from "react";
import {MdDeleteForever, MdEdit} from 'react-icons/md';

function Songs({song, onDelete, onEdit}) {
    return (
        // Creates the content for the song to be added 
        // Creates a table with the song and its attributes
                <tr>
                    <td>{song.title}</td>
                    <td>{song.artist}</td>
                    <td>{song.album}</td>
                    <td>{song.mood}</td>
                    <td><MdDeleteForever onClick={ () => onDelete(song)}/></td>
                    <td><MdEdit onClick={ () => onEdit(song)}/></td>
                </tr>

    );
}

export default Songs;