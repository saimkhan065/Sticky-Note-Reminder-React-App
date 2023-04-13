import NewPost from "./Post.jsx";
import CreatePost from "./CreatePost.jsx";
import classes from "./PostList.module.css"

function PostList(){
    return(
        <>
        <CreatePost/>
      <ul className={classes.posts}>
          <li><NewPost task_name="test" content_body="This is a test.This is a test."/></li>
          <li><NewPost task_name="test_2" content_body="This is a test_2.This is a test_2."/></li>
      </ul>
        </>
    );
}

export default PostList;