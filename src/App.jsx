import './App.css';
import TodoProvider from './Context/todoContext';
import Layout from './components/Layout';

function App() {
  return (
    <div>
      <TodoProvider>
        <Layout />
      </TodoProvider>
    </div>
  );
}

export default App;
