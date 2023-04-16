import {useState} from "react";
import NewPost from "./Post.jsx";
import CreatePost from "./CreatePost.jsx";
import classes from "./PostList.module.css"
import Modal from "./Modal.jsx";

function PostList(props){
    let modalContent;
    const [body, setBody] = useState('');
    const [task, setTask] = useState('');
    function onBodyChangeHandler(event){
        setBody(event.target.value);
    }

    function onNameChangeHandler(event){
        setTask(event.target.value);
    }

    function onSubmitHandler(event){
        event.preventDefault();
        const postData ={
            content_body: body,
            task_name: task
        };
        console.log(postData);
        props.isNotPosting();
    }
    if (props.isPosting){
        modalContent = <Modal onClickEvent={props.isNotPosting}>
            <CreatePost onBodyChange={onBodyChangeHandler} onNameChange={onNameChangeHandler} onClickCancel={props.isNotPosting}
            onFormSubmit={onSubmitHandler}/>
        </Modal>
    }
    return(
        <>
            {modalContent}
      <ul className={classes.posts}>
          <li><NewPost task_name={task} content_body={body}/></li>
          <li><NewPost task_name="test_2" content_body="This is a test_2.This is a test_2."/></li>
      </ul>
        </>
    );
}

export default PostList;