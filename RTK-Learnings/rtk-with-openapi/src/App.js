import logo from './logo.svg';
import './App.css';
import UserDetails from './components/userDetails/UserDetails';

function App() {
  return (
    <div className="App">
     <UserDetails userId={1}/>
    </div>
  );
}

export default App;
