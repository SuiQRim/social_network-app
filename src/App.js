import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DialoguesContainer from './Assets/Content/Dialogues/DialoguesContainer';
import ProfileContainer from './Assets/Content/Profile/ProfileContainer';
import Tape from './Assets/Content/Tape/Tape';
import TapeContainer from './Assets/Content/Tape/TapeContainer';
import UsersContainer from './Assets/Content/Users/UsersContainer';
import Header from './Assets/Header/Header';
import Navigation from './Assets/MainNavigationMenu/Navigation';


function App() {
  return (
    <BrowserRouter>
      <div className='wrapper'>
          <div className="header">
            <Header />
          </div>

          <div className="navigation">
            <Navigation />
          </div>
          
       
          <div className="content">
             <Routes>
              <Route path="/profile" element={<ProfileContainer/>}/>
              <Route path="/tape" element={<TapeContainer/>}/>
              <Route path="/messenger" element={<DialoguesContainer/>}/>
              <Route path="/users" element={<UsersContainer/>}/>
            </Routes>
          </div>
        
      </div>
    </BrowserRouter>
    
  );
}

export default App;
