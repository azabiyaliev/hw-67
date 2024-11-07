import Password from './containers/Password/Password.tsx';
import { NavLink, Route, Routes } from 'react-router-dom';
import Calculator from './containers/Calculator/Calculator.tsx';

const App = () => {
  return (
    <>
      <div className="container mt-5 text-center">
        <NavLink className="btn btn-outline-primary" to="/password">Password</NavLink>
        <NavLink className="btn btn-outline-primary ms-5" to="/calculator">Calculator</NavLink>
      </div>
      <Routes>
        <Route path="/password"  element={<Password/>} />
        <Route path="/calculator"  element={<Calculator/>} />
      </Routes>
    </>
);
};

export default App;
