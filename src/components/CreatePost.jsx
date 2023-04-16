import classes from './CreatePost.module.css'
import {useState} from "react";
import Modal from "./Modal.jsx";

function CreatePost(props){


    return(
      <form className={classes.form} onSubmit={props.onFormSubmit}>
          <p>
              <label htmlFor="body">Description</label>
              <textarea name="" id="body" cols="30" rows="10" required onChange={props.onBodyChange}></textarea>
          </p>
          <p>
              <label htmlFor="name">Task Owner</label>
              <input type="text" id="name" required onChange={props.onNameChange}/>
          </p>
          <p className={classes.actions}>
              <button type="button" onClick={props.onClickCancel}>Cancel</button>
              <button type="submit">Submit</button>
          </p>
      </form>
    );
}

export default CreatePost;