

import { Route, Routes  } from 'react-router-dom';
import Members from './pages/Members';
import Login from './pages/Login';
import Register from './pages/Register';
import Groups from './pages/Groups';

import Presentations from './pages/Presentations';
import Presentation from './pages/Presentation';
import GroupDetail from './pages/GroupDetail';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/groups"element={<Groups/>}/>
        <Route path="/:id/presentations"element={<Presentations/>}/>
        <Route path="/register"element={<Register/>}/>
        <Route path="/login"element={<Login/>}/>
        <Route path="/:id/members"element={<Members/>}/>
        <Route path="/:id/presentation"element={<Presentation/>}/>
        <Route path="/:id"element={<GroupDetail></GroupDetail>}></Route>
        
      </Routes>
    </div>

  );
}

export default App;
