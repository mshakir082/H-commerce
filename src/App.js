
import './App.css';
import Button from "@mui/material/Button";
function App() {
  
// run npm install @material-ui/core @material-ui/icons 
  return (
    <div>
    <nav class="navigation-bar">
    <img class="logo" src="https://res.cloudinary.com/dlpvqt7fp/image/upload/v1669278072/Internship%20Task/WhatsApp_Image_2022-11-24_at_12.01.12_PM_gorkxv.jpg" alt='logo'/>
    <a href="#" className="navbar-link dashboard">Dashboard</a>
    <a href="#" className="navbar-link">Library</a>
    <a href="#" className="navbar-link">Let's Start</a>
    <div class="icon-bar">
    <a href='#'><i className="fa-solid fa-magnifying-glass nav-icon "></i></a>
    <a href='#'><i className="fa-regular fa-bell nav-icon"></i></a>
    <a href='#'><i className="fa-regular fa-comment nav-icon"></i></a>
    <a href='#'><img src="https://res.cloudinary.com/dlpvqt7fp/image/upload/v1660921894/samples/bike.jpg" className="nav-icon-profile"/></a>
    
    </div>
  </nav>

  <div>
    <div className="row">
      <div  className='col-2'>

      </div>
      <div className="col-9 notification-header">
        <h3>Notifications<span>(3)</span></h3>
        <div className='btn-card'>
        <button className='btn'>Clear All</button>
        <button className='btn'>Mark All Read</button>
        </div>
      </div>
      <div  className='col-1'>

      </div>
    </div>
  </div>
    
    <div class="bottom-container">
      <div className="row">
        <div className="col-2 checkbox-container m-4 d-flex flex-column justify-content-center">
          <div className='mb-2'>
            <p className='checkbox-titles'>Notification Type:</p>
            <div>
            <input type="checkbox" id='claps'></input>
            <label for="claps">Claps</label>
            </div>
            <div>
            <input type="checkbox" id='comments'></input>
            <label for="comments">Comments</label>
            </div>
            <div>
            <input type="checkbox" id='shares'></input>
            <label for="shares">Shares</label>
            </div>
            </div>

          <div>
          <p className='checkbox-titles'>Post Type:</p>
            <div>
            <input type="checkbox" id='blog'></input>
            <label for="blog">Blog</label>
            </div>
            <div>
            <input type="checkbox" id='essay'></input>
            <label for="essay">Essay</label>
            </div>
            <div>
            <input type="checkbox" id='poem'></input>
            <label for="poem">Poem</label>
            </div>
            <div>
            <input type="checkbox" id='poem'></input>
            <label for="card">Card</label>
            </div>
            </div>

        </div>

        <div className='col-9 comments-container'>
          <div className='comment-card'>
            <div className='cooment-card-left-part'>
              <p className='commented-person'>Sam Mathew commented on your blog</p>
              <p className='comment-text'>Lorem ipsum dolor dslk dgsokfs dsvbds dsfhsgo sdvv sdfsjo vx<br/>
              kvjbdvi jvhsdo jvhsd</p>
            </div>
            <div className='cooment-card-right-part'>
              <p className='comment-text'>10 Minutes ago</p>
              <p className='mark-read'>Mark Read</p>
            </div>
          </div>

          <div className='comment-card'>
            <div className='cooment-card-left-part'>
              <p className='commented-person'>Sam Mathew commented on your blog</p>
              <p className='comment-text'>Lorem ipsum dolor dslk dgsokfs dsvbds dsfhsgo sdvv sdfsjo vx<br/>
              kvjbdvi jvhsdo jvhsd</p>
            </div>
            <div className='cooment-card-right-part'>
              <p className='comment-text'>10 Minutes ago</p>
              <p className='mark-read'>Mark Read</p>
            </div>
          </div>

          <div className='comment-card'>
            <div className='cooment-card-left-part'>
              <p className='commented-person'>Sam Mathew commented on your blog</p>
              <p className='comment-text'>Lorem ipsum dolor dslk dgsokfs dsvbds dsfhsgo sdvv sdfsjo vx<br/>
              kvjbdvi jvhsdo jvhsd</p>
            </div>
            <div className='comment-card-right-part'>
              <p className='comment-text'>10 Minutes ago</p>
              <p className='mark-read'>Mark Read</p>
            </div>
          </div>

          <div className='comment-card'>
            <div className='cooment-card-left-part'>
              <p className='commented-person'>Sam Mathew commented on your blog</p>
              <p className='comment-text'>Lorem ipsum dolor dslk dgsokfs dsvbds dsfhsgo sdvv sdfsjo vx<br/>
              kvjbdvi jvhsdo jvhsd</p>
            </div>
            <div className='comment-card-right-part'>
              <p className='comment-text'>10 Minutes ago</p>
              <p className='mark-read'>Mark Read</p>
            </div>
          </div>

          <div className='comment-card'>
            <div className='cooment-card-left-part'>
              <p className='commented-person'>Sam Mathew commented on your blog</p>
              <p className='comment-text'>Lorem ipsum dolor dslk dgsokfs dsvbds dsfhsgo sdvv sdfsjo vx<br/>
              kvjbdvi jvhsdo jvhsd</p>
            </div>
            <div className='cooment-card-right-part'>
              <p className='comment-text'>10 Minutes ago</p>
              <p className='mark-read'>Mark Read</p>
            </div>
          </div>

          <div className='comment-card'>
            <div className='cooment-card-left-part'>
              <p className='commented-person'>Sam Mathew commented on your blog</p>
              <p className='comment-text'>Lorem ipsum dolor dslk dgsokfs dsvbds dsfhsgo sdvv sdfsjo vx<br/>
              kvjbdvi jvhsdo jvhsd</p>
            </div>
            <div className='cooment-card-right-part'>
              <p className='comment-text'>10 Minutes ago</p>
              <p className='mark-read'>Mark Read</p>
            </div>
          </div>
        </div>
      </div>
  </div>

</div>
  );
}

export default App;
