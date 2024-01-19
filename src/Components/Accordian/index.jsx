import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [isMultiSelectionOn, setisMultiSelectionOn] = useState(false);
  const [multiArray, setMultiArray] = useState([]);

  const handleSingleSelection = (id) => {
    setSelected(id === selected ? null : id);
  };
  const handleMultiSelection = (id) => {
    let cpyMultiple = [...multiArray];
    const index = cpyMultiple.indexOf(id);
    if (index === -1) {
      cpyMultiple.push(id);
    } else {
      cpyMultiple.splice(cpyMultiple.indexOf(id), 1);
    }
    setMultiArray(cpyMultiple);
  };

  const handleClick = (event) => {
    setisMultiSelectionOn(true);
  };

  return (
    <div className="wrapper">
      <div className="Accordian">
        <button className="button" onClick={handleClick}>
          Click For Multiselection
        </button>
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="item">
              <div
                className="title"
                onClick={
                  isMultiSelectionOn
                    ? () => {
                        handleMultiSelection(item.id);
                      }
                    : () => handleSingleSelection(item.id)
                }
              >
                <h3>{item.question}</h3>
              </div>
              <span>+</span>

              {isMultiSelectionOn ? (
                multiArray.indexOf(item.id) !== -1 ? (
                  <div className="content">{item.answer}</div>
                ) : null
              ) : selected === item.id ? (
                <div className="content">{item.answer}</div>
              ) : null}

            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}
