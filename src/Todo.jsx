import React, { useState } from "react";

export const Todo = () => {
  const [items, setItems] = useState();
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [isEdited, setIsEdited] = useState();

  const inputHandler = (event) => {
    let val = event.target.value;
    setItems(val);
  };

  const addData = () => {
    if (!items) {
      alert("No data Found");
    } else if (items && !toggle) {
      setData(
        data.map((elem) => {
          if (elem.id === isEdited) {
            return { ...elem, name: items };
          }
          return elem;
        })
      );
      setToggle(true);

      setItems("");
      setIsEdited("");
    } else {
      const allInputData = { id: new Date().getTime().toString(), name: items };
      setData([...data, allInputData]);
      setItems("");
    }
  };

  const deleteItems = (id) => {
    let fdata = data.filter((item) => {
      return item.id !== id;
    });
    setData(fdata);
  };

  const allDataRemove = () => {
    setData([]);
  };

  const editData = (id) => {
    let allEditData = data.find((item) => {
      return item.id === id;
    });
    setToggle(false);

    setItems(allEditData.name);
    setIsEdited(id);
  };

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img
              src={process.env.PUBLIC_URL + "./images/todo.svg"}
              alt="todo logo"
            />
            <figcaption>Add Your List Here 👌</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍ Add Items..."
              onChange={inputHandler}
              value={items}
            />
            {toggle ? (
              <i
                className="fa fa-plus add-btn"
                title="Add Items"
                onClick={addData}
              ></i>
            ) : (
              <i
                className="far fa-edit add-btn"
                title="Edit Item"
                onClick={addData}
              ></i>
            )}
          </div>

          {data.map((item) => {
            return (
              <div className="showItems" key={item.id}>
                <div className="eachItem">
                  <h3>{item.name}</h3>
                  <div className="todo-btn">
                    <i
                      className="far fa-edit add-btn"
                      title="Edit Item"
                      onClick={() => {
                        editData(item.id);
                      }}
                    ></i>
                    <i
                      className="far fa-trash-alt add-btn"
                      onClick={() => {
                        deleteItems(item.id);
                      }}
                      title="Delete Items"
                    ></i>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={allDataRemove}
            >
              <span>Check List</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
