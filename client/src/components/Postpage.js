import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { formatISO9075 } from 'date-fns';
import { FaArrowLeft, FaEdit, FaTrashAlt } from 'react-icons/fa';
import { UserContext } from '../Usercontext';

function Postpage() {
  const { id } = useParams();
  const { userinfo, isloading } = useContext(UserContext);
  const [comments, setComments] = useState("");
  const [data, setData] = useState([]);
  const [postinfo, setPostinfo] = useState(null);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (!isloading) {
      fetchPost();
      fetchComments();
       // Fetch comments when component mounts
    }
  }, [id, isloading]); // Depend on id and isloading

  const fetchPost = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:4000/post/${id}`, {
        credentials: 'include',
      });
      if (response.ok) {
        const postData = await response.json();
        // setPostinfo(postData);
        setPostinfo(postData);
        console.log(postData);
        console.log(postinfo);
        console.log(postinfo?.comments);
        setData(postData?.comments.reverse());

        fetchComments();
      } else {
        console.error('Error fetching post:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching post:', error);
    }
  };

  const deletePost = async () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        const response = await fetch(`http://127.0.0.1:4000/post/${id}`, {
          method: 'DELETE',
          credentials: 'include',
        });
        if (response.ok) {
          setRedirect(true);
        }
      } catch (error) {
        console.error('Error deleting post:', error);
      }
    }
  };

  const handleCommentChange = (e) => {
    setComments(e.target.value);
  };

  const saveComment = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:4000/post/${id}/comment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          commentedBy: userinfo.firstname,
          text: comments,
        }),
        credentials: 'include',
      });

      if (response.ok) {
        setComments(""); // Clear input after saving comment
        fetchComments(); // Fetch comments after saving
      } else {
        console.error('Error saving comment:', response.statusText);
      }
    } catch (error) {
      console.error('Error saving comment:', error);
    }
  };

  const fetchComments = async () => {
    if(postinfo){
      try {
        const response = await fetch(`http://127.0.0.1:4000/post/${id}/comments`, {
          credentials: 'include',
        });
        if (response.ok) {
          const commentsData = await response.json();
          console.log(commentsData.comments);
          setData(commentsData.comments.reverse());
          console.log(data);
        } else {
          console.error('Error fetching comments:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    }
   else{
    console.log("hello");
   }
  };

  if (isloading || !postinfo) {
    return <div>Loading...</div>;
  }

  if (redirect) {
    return <Navigate to={'/homepage'} />;
  }
  
  const isAuthor = userinfo && userinfo.id === postinfo.author._id;

  return (
    <div className="postpage">
      <div className="edit-delete-icons">
        <div className='icons'>
          <div>
            <Link to={'/homepage'}>
              <FaArrowLeft className='edit-icon' />
            </Link>
          </div>
          <div>
            {isAuthor && (
              <div>
                <Link to={`/edit/${postinfo._id}`}>
                  <FaEdit className="edit-icon" />
                </Link>
                <Link>
                  <FaTrashAlt className="delete-icon" onClick={deletePost} />
                </Link>
              </div>
            )}  
          </div>
        </div>
      </div>
      <h1 className="posttitle">{postinfo.title}</h1>
      <p className="posttag">{postinfo.tags}</p>
      <time className="time">{formatISO9075(new Date(postinfo.createdAt))}</time>
      <div className="postauthor">by {postinfo.author.firstname}</div>
      <div className="postimage">
        <img src={`http://127.0.0.1:4000/${postinfo.cover}`} alt="" />
      </div>
      <p className="postdescription" dangerouslySetInnerHTML={{ __html: postinfo.description }}></p>
      <div className="postcontent" dangerouslySetInnerHTML={{ __html: postinfo.content }}></div>
      <div className="postbuttons">
        <button className="viewdemo">View Demo</button>
        <button className="sourcecode">Source Code</button>
      </div>
      
      <input placeholder='Leave a comment' type='text' value={comments} onChange={handleCommentChange} />
      <button onClick={saveComment}>Submit Comment</button>
      
      {/* Render comments */}
      <div className="comments">
        <h2>Comments</h2>

        {data.length > 0 && 
          data.map((comment, index) => (
            <div key={index} className="comment">
              <h1>{comment.text}</h1>
              <p>Commented by: {comment.commentedBy}</p>    
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Postpage;
