import React, { useState } from "react";
import "./index.css";

export const App = () => {
  const [inputData, setInputData] = useState("");
  const [dataSubmit, setDataSubmit] = useState([]);
  const [flag, setFlag] = useState(true);
  const [userId, setUserId] = useState("");

  const inputHandeler = (event) => {
    setInputData(event.target.value);
  };

  const submitData = () => {
    setDataSubmit([...dataSubmit, inputData]);
    setInputData("");
  };

  const deleteData = (id) => {
    let fData = dataSubmit.filter((items, index) => {
      return id !== index;
    });
    setDataSubmit(fData);
  };

  const editData = (id) => {
    let eData = dataSubmit.filter((items, index) => {
      return id === index;
    });
    setUserId(id);
    setInputData(eData);
    setFlag(false);
  };

  const dataEdited = () => {
    let id = userId;
    dataSubmit[id] = inputData;
    setDataSubmit(dataSubmit);

    setInputData("");
    setFlag(true);
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>TO Do List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a Items"
            value={inputData}
            onChange={inputHandeler}
          />
          {flag ? (
            <button onClick={submitData}> + </button>
          ) : (
            <i className="fa-regular fa-pen-to-square" onClick={dataEdited}></i>
          )}
          <ol>
            {dataSubmit.map((items, index) => {
              return (
                <div className="todo_style" key={index}>
                  <i
                    className="fa-solid fa-circle-xmark"
                    onClick={() => {
                      deleteData(index);
                    }}
                  ></i>
                  <i
                    className="fa-regular fa-pen-to-square"
                    onClick={() => {
                      editData(index);
                    }}
                  ></i>
                  <li>{items}</li>
                </div>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};
