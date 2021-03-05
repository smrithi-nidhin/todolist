import React from "react";
import { connect } from "react-redux";
import { addTodo, addText, editAddTodo } from "../redux/action/addTodo.action";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
const InputField = ({ addText, text, selected, addTodo }) => {
  // const handleChange = e => addText(e.target.value);
  const handleChange = (e) => { 
    addText(e.target.value);
  }
  const handleSubmit = e => {
    e.preventDefault();
    if (selected || selected === 0)
      editAddTodo({
        value: text,
        selected: selected,
        obj:toast('Successfully Updated'),
        
      });
    else {
      addTodo(text);
      toast.success('Successfully added');
   

    }
   

  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="todo"
        value={text}
        placeholder="Enter your todo..."
        onChange={handleChange}
      />
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo)),
  addText: value => dispatch(addText(value)),
  editAddTodo: obj => dispatch(editAddTodo(obj)),
  
});
const mapStateToProps = ({ text, selected }) => ({
  text,
  selected
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputField);