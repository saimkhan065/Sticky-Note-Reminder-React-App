import classes from './CreatePost.module.css'

function CreatePost(){
    return(
      <form className={classes.form}>
          <p>
              <label htmlFor="body">Description</label>
              <textarea name="" id="body" cols="30" rows="10" required></textarea>
          </p>
          <p>
              <label htmlFor="name">Task Owner</label>
              <input type="text" id="name" required/>
          </p>
          <button>Submit</button>
      </form>
    );
}

export default CreatePost;