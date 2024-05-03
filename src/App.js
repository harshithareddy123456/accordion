import { useState } from "react";
import "./App.css";
import questions from "./data";

function App() {
  const [isactive, setisactive] = useState([]);
  const [checkbox, setcheckbox] = useState(true);
  const handleclick = (id) => {
    if (checkbox) {
      if (isactive.includes(id)) {
        console.log(true);
        let isactivefilter = isactive.filter((el) => el !== id);
        setisactive([...isactivefilter]);
      } else {
        setisactive([...isactive, id]);
      }
    } else {
      if (isactive.includes(id)) {
        let isactivefilter = isactive.filter((el) => el !== id);
        setisactive([...isactivefilter]);
      } else {
        setisactive([id]);
      }
    }
  };
  const handlecheckbox = () => {
    setcheckbox(!checkbox);
  };
  console.log(isactive);
  return (
    <div className="container">
      <div className="mainheading">
        Allow multiple accordions to open?
        <input
          type="checkbox"
          checked={checkbox}
          onChange={handlecheckbox}
        ></input>
      </div>
      <div className="content">
        {questions.map((item) => (
          <div className="contentmain">
            <div className="contentspace">
              {item.title}
              {isactive.includes(item.id) ? (
                <button onClick={() => handleclick(item.id)}>-</button>
              ) : (
                <button onClick={() => handleclick(item.id)}>+</button>
              )}
            </div>
            {isactive.includes(item.id) && (
              <div className="content2">{item.info}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
