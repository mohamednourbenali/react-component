import Adress from './component/profile/Adress';
import FullName from './component/profile/FullName';
import ProfilePhoto from './component/profile/ProfilePhoto';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProfilePhoto/>
        <FullName />
        <Adress />
      </header>
    </div>
  );
}

export default App;
