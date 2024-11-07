import { deletePassword, press } from '../Password/passwordSlice.ts';
import { useDispatch } from 'react-redux';


const Calculator = () => {

  const dispatch = useDispatch();

  return (
    <div className="d-flex flex-column align-items-center mx-auto justify-content-center mt-5 w-25">
      <input type="text"
             className={`mt-5 border border-1 rounded-2 border-secondary w-100 text-center pt-4 pb-4`}/>
      <div className="d-flex flex-column w-100">
        <div className="d-flex justify-content-between mt-2">
          <button type="button" onClick={() => dispatch(press('7'))} className="btn btn-outline-secondary mb-2 w-25">7
          </button>
          <button type="button" onClick={() => dispatch(press('8'))} className="btn btn-outline-secondary mb-2 w-25">8
          </button>
          <button type="button" onClick={() => dispatch(press('9'))} className="btn btn-outline-secondary mb-2 w-25">9
          </button>
        </div>
        <div className="d-flex justify-content-between mt-2">
          <button type="button" onClick={() => dispatch(press('4'))} className="btn btn-outline-secondary mb-2 w-25">4
          </button>
          <button type="button" onClick={() => dispatch(press('5'))} className="btn btn-outline-secondary mb-2 w-25">5
          </button>
          <button type="button" onClick={() => dispatch(press('6'))} className="btn btn-outline-secondary mb-2 w-25">6
          </button>
        </div>
        <div className="d-flex justify-content-between mt-2">
          <button type="button" onClick={() => dispatch(press('1'))} className="btn btn-outline-secondary mb-2 w-25">1
          </button>
          <button type="button" onClick={() => dispatch(press('2'))} className="btn btn-outline-secondary mb-2 w-25">2
          </button>
          <button type="button" onClick={() => dispatch(press('3'))} className="btn btn-outline-secondary mb-2 w-25">3
          </button>
        </div>
        <div className="d-flex justify-content-between mt-2">
          <button type="button" onClick={() => dispatch(deletePassword())}
                  className="btn btn-outline-secondary mb-2 w-25">＜
          </button>
          <button type="button" onClick={() => dispatch(press('0'))} className="btn btn-outline-secondary mb-2 w-25">0
          </button>
          <button type="button" className="btn btn-outline-secondary mb-2 w-25">E</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;