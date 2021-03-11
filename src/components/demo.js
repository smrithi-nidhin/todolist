import React from "react";
import { connect } from "react-redux";
import { addTodo, addText, editAddTodo } from "../redux/action/addTodo.action";
import { toast } from 'react-toastify';
import AutoComplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

import 'react-toastify/dist/ReactToastify.css';
import { FilterList } from "@material-ui/icons";
toast.configure()
const InputField = ({ addText, text, selected, addTodo}) => {
  // const handleChange = e => addText(e.target.value);
  // const handleChange = (e) => { 
  
  //   addText(e.target.value);
  // }
 
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   if (selected || selected === 0)
  //     editAddTodo({
  //       value: text,
  //       selected: selected,
  //       obj:toast('Successfully Updated'),
        
  //     });
  //   else {  
  //     addTodo(text);
  //     toast.success('Successfully added');
  //   }
  // };
  const handleChange = e => this.props.addText(e.target.value) 
  const handleSubmit = e => {
    e.preventDefault();
   if(this.props.selected || this.props.selected === 0)
   this.props.editAddTodo({
     value: this.props.text,
     selected: this.props.selected
   });
   else
   this.props.addTodo(this.props.text);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <AutoComplete  
   
    value={text}
    onChange={handleChange}
   renderInput={(
    <input
        type="text"
        name="todo"
        value={text}
        placeholder="Enter your todo..."
        onChange={handleChange}
      /> 
   )}
      >
     
      </AutoComplete> */}
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