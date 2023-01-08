

import { Route, Routes  } from 'react-router-dom';
import Success from './pages/Success';
import Login from './pages/Login';
import Register from './pages/Register';
import Groups from './pages/Groups';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/groups"element={<Groups/>}/>
        <Route path="/register"element={<Register/>}/>
        <Route path="/login"element={<Login/>}/>
        <Route path="/:id"element={<Success/>}/>
      </Routes>
    </div>

  );
}

export default App;
