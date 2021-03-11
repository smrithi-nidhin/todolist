import React from "react";
import { connect } from "react-redux";
import { deleteTodo, editTodo } from "../redux/action/addTodo.action";
import { toast } from 'react-toastify';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { Form } from "react-bootstrap";
toast.configure()

const Todo = ({ todo, idx, deleteTodo, editTodo, selected, text, onChangeStatus }) => {

 
  const currDate = new Date().toLocaleDateString();
  const currTime = new Date().toLocaleTimeString();
  return (
    <div 
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        border: "1px solid #ffffffa6",
        padding: "5px",
        cursor: "pointer",
      
    
      }}
    >
      <div 
      
      onClick={() => editTodo(idx)}>{selected === idx ? text : todo}
      </div>
      <div style={{ cursor: "pointer" }} onClick={() => {
      deleteTodo(idx)
       toast.error('Successfully deleted');
      }
      }>
        x
      </div>
{/*   
   <Dropdown>
  <Dropdown.Toggle variant="none" id="dropdown-basic">
    Status
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item value="done" >Done</Dropdown.Item>
    <Dropdown.Item href="#/action-2" >Pending</Dropdown.Item>
    <Dropdown.Item href="#/action-3"  >Cancelled</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown> */}
<div>
       
         
            {/* <Form.Label>custom</Form.Label> */}
            <Form.Control as="select" custom onChange={event =>
              onChangeStatus(
                this.setState({
                  value:event.target.value
                })
              
                )}>
            <option >Status</option>
              <option value="done">Done</option>
              <option value="pending">Pending</option>
              <option value="cancelled">Cancelled</option>
            </Form.Control>
        
</div>
<div>
{currDate}({currTime}
</div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteTodo: key => dispatch(deleteTodo(key)),
  editTodo: key => dispatch(editTodo(key))
});

const mapStateToProps = ({ text, selected }) => ({
  text,
  selected
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);