import {useState} from 'react';
import classes from './CreatePost.module.css'

function CreatePost(){
    const [current_state, set_current_state] = useState('');
    function submitHandler(event){
    set_current_state(event.target.value);
    }

    return(
      <form className={classes.form}>
          <p>
              <label htmlFor="body">Description</label>
              <textarea name="" id="body" cols="30" rows="10" required onChange={submitHandler}></textarea>
          </p>
          <p>{current_state}</p>
          <p>
              <label htmlFor="name">Task Owner</label>
              <input type="text" id="name" required/>
          </p>
          <button>Submit</button>
      </form>
    );
}

export default CreatePost;