import './App.css';
import Header from './components/Header/Header'
import NavBar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <NavBar/>
      <div className='app-wrapper-content'>
      {/* <Profile /> */}
      <Dialogs />
      </div>
    </div>
  );
}

export default App;
