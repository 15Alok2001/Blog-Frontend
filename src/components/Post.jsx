import './post.css'

export default function Post() {
  return (
    <div className='post'>
     <img className='postImg' src='https://images.pexels.com/photos/3974036/pexels-photo-3974036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
     alt='img4'/>
     <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Travel</span>
            <span className="postCat">Life</span>
        </div>
       
     <span className="postTitel">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, odio!    </span>
     <hr/>
     <span className="postDate">1 hr ago</span>
     </div>
     <p className='postDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam tempora rem totam iste ratione aspernatur iusto velit maiores expedita vitae ipsa dolorum debitis, et nam similique. Porro neque saepe officia obcaecati nemo accusantium consequatur, odio aut. Quae adipisci minus deleniti nostrum cum exercitationem, eaque sequi debitis, quibusdam voluptates asperiores quasi!
     </p>
    </div>
  )
}
