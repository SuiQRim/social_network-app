import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DialoguesContainer from './Assets/Content/Dialogues/DialoguesContainer';
import ProfileContainer from './Assets/Content/Profile/ProfileContainer';
import Tape from './Assets/Content/Tape/Tape';
import Header from './Assets/Header/Header';
import Navigation from './Assets/MainNavigationMenu/Navigation';


function App(props) {
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
              <Route path="/profile" element={<ProfileContainer profile={props.state.profile} dispatch={props.dispatch}/>}/>
              <Route path="/tape" element={<Tape tape={props.state.tape}/>}/>
              <Route path="/messenger" element={<DialoguesContainer messages={props.state.messenger} dispatch={props.dispatch}/>}/>
            </Routes>
          </div>
        
      </div>
    </BrowserRouter>
    
  );
}

export default App;
