import logo from './logo.svg';
import './App.css';
import UserInput from './components/UserInput/UserInput';
import ResultList from './components/ResultList/ResultList';
import { useState } from 'react';
import Modal from './components/UI/Modal/Modal';

function App() {

  const [userInfo, setUserInfo] = useState([]);

  const addUserInfo = (userInfo) => {
    setUserInfo(prev => [userInfo, ...prev]);
  }

  return (
    <div>
      <UserInput getUserInfo={addUserInfo} />
      <ResultList results={userInfo} />
       
    </div>
  );
}

export default App;
