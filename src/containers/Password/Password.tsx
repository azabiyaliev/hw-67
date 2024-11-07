import { useDispatch, useSelector } from 'react-redux';
import { deletePassword, press, passwordChange } from './passwordSlice.ts';
import { RootState } from '../../app/store.ts';

const Password = () => {


  const dispatch = useDispatch();

  const passwordValue = useSelector((state: RootState) => state.password.value);
  const bgColor = useSelector((state: RootState) => state.password.bg);
  const type = useSelector((state: RootState) => state.password.type);

  const password = "1337";

  const checkPassword = () => {
    if (passwordValue === password) {
      dispatch(passwordChange("Access Granted"));
    } if (passwordValue != password) {
      dispatch(passwordChange("Access Denied"));
    }
  };

  return (
    <div className="d-flex flex-column align-items-center mx-auto justify-content-center mt-5 w-25">
      <input  type={type} value={passwordValue} readOnly className={`mt-5 border border-1 bg-${bgColor} rounded-2 border-secondary w-100 text-center pt-4 pb-4`}/>
      <div className="d-flex flex-column w-100">
        <div className="d-flex justify-content-between mt-2">
          <button type="button" onClick={() => dispatch(press('7'))} className="btn btn-outline-secondary mb-2 w-25">7</button>
          <button type="button" onClick={() => dispatch(press('8'))} className="btn btn-outline-secondary mb-2 w-25">8</button>
          <button type="button" onClick={() => dispatch(press('9'))} className="btn btn-outline-secondary mb-2 w-25">9</button>
        </div>
        <div className="d-flex justify-content-between mt-2">
          <button type="button" onClick={() => dispatch(press('4'))} className="btn btn-outline-secondary mb-2 w-25">4</button>
          <button type="button" onClick={() => dispatch(press('5'))} className="btn btn-outline-secondary mb-2 w-25">5</button>
          <button type="button" onClick={() => dispatch(press('6'))} className="btn btn-outline-secondary mb-2 w-25">6</button>
        </div>
        <div className="d-flex justify-content-between mt-2">
          <button type="button" onClick={() => dispatch(press('1'))} className="btn btn-outline-secondary mb-2 w-25">1</button>
          <button type="button" onClick={() => dispatch(press('2'))} className="btn btn-outline-secondary mb-2 w-25">2</button>
          <button type="button" onClick={() => dispatch(press('3'))} className="btn btn-outline-secondary mb-2 w-25">3</button>
        </div>
        <div className="d-flex justify-content-between mt-2">
          <button type="button" onClick={() => dispatch(deletePassword())} className="btn btn-outline-secondary mb-2 w-25">＜</button>
          <button type="button" onClick={() => dispatch(press('0'))} className="btn btn-outline-secondary mb-2 w-25">0</button>
          <button type="button" onClick={checkPassword} className="btn btn-outline-secondary mb-2 w-25">E</button>
        </div>
      </div>
    </div>
  );
};

export default Password;