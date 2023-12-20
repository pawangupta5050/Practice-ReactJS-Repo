import logo from './logo.svg';
import './App.css';
import Player from './components/Player';
import TimerChallenge from './components/TimerChallenge';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title='easy' targetTime={1} />
        <TimerChallenge title='tough' targetTime={5} />
        <TimerChallenge title='hard' targetTime={10} />
        <TimerChallenge title='very hard' targetTime={15} />
      </div>
    </>
  );
}

export default App;
