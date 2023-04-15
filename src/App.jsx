import './App.css'
import PostList from './components/PostList.jsx';
import CreatePost from './components/CreatePost.jsx'
import NewPost from "./components/Post.jsx";
import MainHeader from "./components/MainHeader.jsx";
import {useState} from "react";
import Modal from "./components/Modal.jsx";


function App() {
    const [modalIsVisible, setModalIsVisible] = useState(false);
    console.log(modalIsVisible);

    function hideModalHandler(){
        setModalIsVisible(false);
    }
    function showModalHandler(){
        setModalIsVisible(true);
    }

  return (
      <>
          <MainHeader onCreatePost={showModalHandler} />
          <main>
              <PostList isPosting={modalIsVisible} isNotPosting={hideModalHandler}/>
          </main>

      </>
  );
}

export default App
