import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginContainer from './Components/Content/Account/Login/LoginContainer';
import DialoguesContainer from './Components/Content/Dialogues/DialoguesContainer';
import ProfileContainer from './Components/Content/Profile/ProfileContainer';
import TapeContainer from './Components/Content/Tape/TapeContainer';
import UsersContainer from './Components/Content/Users/UsersContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Navigation from './Components/MainNavigationMenu/Navigation';
import Preloader from './Prefabs/Preloader';
import { Initialize } from './redux/app-reducer';
class App extends React.Component {

  componentDidMount() {
    this.props.Initialize();
  }

  render() {
    return (
      !this.props.isInitialazeFinish ? <Preloader /> :
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
                <Route path="/login" element={<LoginContainer />} />
              </Routes>
            </div>

          </div>
        </BrowserRouter>

    );

  }
}

let mapStateToProps = (state) => ({
  isInitialazeFinish: state.app.isInitialazeFinish
})

let mapDistaptchToProps = {
  Initialize
}

export default connect(mapStateToProps, mapDistaptchToProps)(App);
