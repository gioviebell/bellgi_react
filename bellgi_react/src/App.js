import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import AddSongPage from './pages/AddSong';
import EditSongPage from './pages/EditSong';
import LibraryPage from './pages/LibraryPage';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div> 
        <Router>
          <Navigation />
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/library' element={<LibraryPage/>}/>
            <Route path='/add-song' element={<AddSongPage/>}/>
            <Route path='/edit-song/:_id' element={<EditSongPage/>}></Route>
          </Routes>
        </Router>
  </div>
  ); 
}
export default App;