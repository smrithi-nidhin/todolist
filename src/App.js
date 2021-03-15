import React, { useEffect } from "react";
import './App.css';
import styles from  "./style.css";
import InputField from "./components/InputField";
import TodosList from "./components/TodosList";
import Login from "./components/Login";
import { deleteAll, persistTodos,selectUser } from "./redux/action/addTodo.action";
import { connect, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
//import { selectUser } from "./redux/reducer/addTodo.reducer";
const App = ({ deleteAll, persistTodos }) => {
   const user = useSelector(selectUser)
  useEffect(() => {
    persistTodos();
  }, [persistTodos]);
  return (
    // <div className="todo-app container">
    //   <h1 style={{ textDecoration: "underline" }}> Todos App</h1>
    //  <div> 
    //    <Login />

    //  </div>
    //    <InputField /> 
    //    <TodosList />
    //   <div>
    //     <button
    //       style={{ marginTop: "20px", cursor: "pointer" }}
    //       onClick={deleteAll}
    //     >
    //       {" "}
    //       Delete All
    //     </button>
    //   </div>
    // </div>
    <Router>
      <div className="App"> 
      <Switch>
        
        <Route exact path="/" 
        render={() => (
          <React.Fragment>
            <Login />
          </React.Fragment>
        )}
        ></Route>
        <div className="todo-app container">
        <Route exact path="/inputadd"  render={() => (
          <React.Fragment>
           <div> <h1 style={{ textDecoration: "underline" }}> Todos App</h1></div>
             <InputField /> 
            <TodosList />
          </React.Fragment>
        )}>
         
        </Route></div>
      
      </Switch>
      </div>
    </Router>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteAll: () => dispatch(deleteAll()),
  persistTodos: () => dispatch(persistTodos())
});
export default connect(
  null,
  mapDispatchToProps
)(App);