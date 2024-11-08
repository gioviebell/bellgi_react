import React from "react";
import Songs from "./Songs";

// creates a table that has all of the songs in one comprehensive library 
// maps the songs from the song component into the library table
function Library({songs, onDelete, onEdit}) {
    return (
        <table id="songs_lib">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Mood</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {songs.length === 0 ? (
                    <tr>
                        <td>Empty library</td>
                    </tr>
                ) : (
                    songs.map(song => (
                        <Songs 
                            key={song._id} 
                            song={song} 
                            onDelete={onDelete} 
                            onEdit={onEdit} 
                        />
                    ))
                )}
            </tbody>
        </table>
);
}

export default Library;