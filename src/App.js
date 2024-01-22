import './App.scss';
import Todo from './components/Todo'

function App() {
  console.log(process.env.REACT_APP_API_KEY);
  return (
    <div className="App">
      <Todo/>
    </div>
  );
}

export default App;
