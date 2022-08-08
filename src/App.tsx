import React from "react";
import "./App.css";

const myReducer = (state: {}, action: { type: string; payload: any }) => {
  switch (action.type) {
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "SET_SELECTED_USER":
      return {
        ...state,
        selectedUser: action.payload,
      };
    default:
      throw new Error("no action");
  }
};

function App() {
  const [filter, filterSet] = React.useState("");
  const [user, userSet] = React.useState(null);
  const [selectedUser, selectedUserSet] = React.useState(null);
  const [state, dispatch] = React.useReducer(myReducer, {
    user: [],
    filter: "",
    selectedUser: null,
  });

  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Desc" />
        <input type="text" placeholder="Price" />
        <input type="text" placeholder="Category" />
      </form>
    </div>
  );
}

export default App;
