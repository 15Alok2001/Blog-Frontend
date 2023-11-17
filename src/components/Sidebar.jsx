import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarItem"></div>
        <span className="sidebarTitle">ABOUT ME</span>
        <div className="dImage">
        <img src="https://images.pexels.com/photos/16913534/pexels-photo-16913534/free-photo-of-man-holding-camera-on-the-street.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
        alt="img3"/>
        </div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim ea eaque dicta reiciendis obcaecati similique laboriosam expedita accusamus, quo voluptas aliquid quibusdam! Unde provident saepe corrupti rerum ab consectetur deserunt excepturi suscipit ducimus, impedit fugit tempore, autem eius sed, quidem molestias eaque mollitia enim vel nesciunt exercitationem! Suscipit ab facere saepe mollitia ut! Expedita veritatis quae rem in vel cumque magni esse adipisci aut delectus dolor repudiandae tempora quasi dolores possimus, nihil voluptatibus quas a veniam corporis labore molestias quia! Illo excepturi aliquam blanditiis adipisci aliquid, dolorem commodi voluptatem laudantium laborum numquam tempore a deleniti ut quibusdam, omnis explicabo repudiandae!</p>
        <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
           Life
          </li>
          <li className="sidebarListItem">
          Music
          </li>
          <li className="sidebarListItem">
           Style
          </li>
          <li className="sidebarListItem">
            Sports
          </li>
          <li className="sidebarListItem">
            Cinema
          </li>
          <li className="sidebarListItem">
            Tech
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <i className="sidebarIcon fa-brands fa-instagram"></i>
        <i className="sidebarIcon fa-brands fa-twitter"></i>
        <i className="sidebarIcon fa-brands fa-facebook"></i>
        <i className ="sidebarIcon fa-brands fa-youtube"></i>
        </div>
      </div>  
    </div>
  )
}
