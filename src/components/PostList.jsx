import {useState} from "react";
import NewPost from "./Post.jsx";
import CreatePost from "./CreatePost.jsx";
import classes from "./PostList.module.css"
import Modal from "./Modal.jsx";

function PostList(){
    const [body, setBody] = useState('');
    const [task, setTask] = useState('');
    const [modalIsVisible, setModalIsVisible] = useState('true');
    let modalContent;

    function onBodyChangeHandler(event){
        setBody(event.target.value);
    }

    function onNameChangeHandler(event){
        setTask(event.target.value);
    }

    function hideModalHandler(){
        setModalIsVisible(false);
    }

    if (modalIsVisible){
        modalContent = <Modal onClickEvent={hideModalHandler}>
            <CreatePost onBodyChange={onBodyChangeHandler} onNameChange={onNameChangeHandler}/>
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