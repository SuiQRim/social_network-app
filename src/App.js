import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LigonContainer from './Components/Content/Account/Login/LigonContainer';
import DialoguesContainer from './Components/Content/Dialogues/DialoguesContainer';
import ProfileContainer from './Components/Content/Profile/ProfileContainer';
import TapeContainer from './Components/Content/Tape/TapeContainer';
import UsersContainer from './Components/Content/Users/UsersContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Navigation from './Components/MainNavigationMenu/Navigation';


function App() {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <div className="header">
          <HeaderContainer />
        </div>

        <div className="navigation">
          <Navigation />
        </div>


        <div className="content">
          <Routes>
            <Route path='/profile/:userId' element={<ProfileContainer />} />
            <Route path='/profile' element={<ProfileContainer />} />
            <Route path="/tape" element={<TapeContainer />} />
            <Route path="/messenger" element={<DialoguesContainer />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/login" element={<LigonContainer/>}/>
          </Routes>
        </div>

      </div>
    </BrowserRouter>

  );
}

export default App;
