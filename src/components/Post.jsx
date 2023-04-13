import classes from './Post.module.css'
function NewPost(props){
    return(
      <div className={classes.post}>
          <p className={classes.author}>{props.task_name}</p>
          <p className={classes.text}>{props.content_body}</p>
      </div>
    );
}

export default NewPost;