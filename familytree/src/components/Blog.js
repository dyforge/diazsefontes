import React, {useEffect, useState} from 'react'
import { Navbar } from './navbar'
import Footer from './Footer/Footer'
import './Blog.css'
import axios from 'axios'
//import { phpBasePath } from '../config'

export const Blog = () => {

  const [blogs, setBlogs] = useState([]);
  const [getBlogs, setGetBlogs] = useState(false);
  const [searchText, setSearchText] = useState('');
  useEffect(() => {
    axios.get('https://hxj0776.uta.cloud/react-backend/blogs.php')
      .then(response => {
        let startIndex = response.data.indexOf("[");
        let data = JSON.parse( response.data.substring(startIndex) );
        let myBlogs = [];
        for(const iBlog of data) {
          myBlogs.push({...iBlog.post, author: iBlog.author} );
        }
        sortBlogs({target: {value: "latest"}}, myBlogs);
      });
  }, []);

  const sortBlogs = (e, renderedBlogs) => {
    let myBlogs = renderedBlogs === null ? blogs : renderedBlogs;
    switch(e.target.value) {
      case "old": {
        myBlogs = myBlogs.sort((a,b)=> { 
          const dateA = new Date(a.post_date);
          const dateB = new Date(b.post_date);
          if(dateA > dateB){
            return 1;
          }else if(dateA < dateB){
            return -1;
          }else{
            return 0;
          }
        });
        break;
      }
      case "title_asc": {
        myBlogs = myBlogs.sort((a,b)=> { 
          return a.post_title.localeCompare(b.post_title);
        });
        break;
      }
      case "title_desc": {
        myBlogs = myBlogs.sort((b,a)=> { 
          return a.post_title.localeCompare(b.post_title);
        });
        break;
      }
      default:
        myBlogs = myBlogs.sort((a,b)=> { 
          const dateB = new Date(a.post_date);
          const dateA = new Date(b.post_date);
          if(dateA > dateB){
            return 1;
          }else if(dateA < dateB){
            return -1;
          }else{
            return 0;
          }
        });

    }
    setGetBlogs(false);
    setTimeout(()=> {
      setBlogs(myBlogs);
      setGetBlogs(true);
    }, 500);
  }

  const SmallBlog = ({title, content, date, author}) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const d = new Date(date);
    let month = months[d.getMonth()];
    return (
      <div className='blog'>
        <div className='blog-wrapper'>  
          <div className='blg-row'>
            <div className="blg-tle">
              <h3>{title}</h3>
            </div>
            <div className="blg-date">
              <p>{month} {d.getDate()}, {d.getFullYear()}</p>
              <p>Posted By: {author}</p>
            </div>
          </div>
          <div className="blog-col" dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
    </div>
  )}

  let searchedBlogs = [];
  for( const iBlog of blogs ) {
    if(iBlog.post_title.toLowerCase().includes(searchText) || iBlog.post_content.toLowerCase().includes(searchText)) {
      searchedBlogs.push(iBlog);
    }
  }

  console.log(searchedBlogs);

  return (
    <>
      <Navbar />
      <section className='mainbody'>
        <div className="row">
          <div className='width_50'>
            <div className='blogsearch'>
              <input type="text" placeholder='Search Blog' onChange={(e) => setSearchText(e.target.value)} />
            </div>
          </div>
          <div className='width_50 bloglink'>
            <select className= 'sort' name="sort" id="sort" onChange={(e)=>sortBlogs(e, null)}>
              <option value="latest" selected>Latest</option>
              <option value="old">Oldest</option>
              <option value="title_asc">Title {"(A to Z)"}</option>
              <option value="title_desc">Title {"(Z to A)"}</option>
            </select>
            <a href="https://hxj0776.uta.cloud/phase2/blog/wp-admin">Add/Edit Blog</a>
          </div>
        </div>
          {
            getBlogs ? 
              (
                searchedBlogs.length > 0 ?
                  (
                    <div className='BlogPage'>
                      {searchedBlogs.map((element, index) => 
                          <SmallBlog key={index} title={element.post_title} content={element.post_content} date={element.post_date} author={element.author}/>
                      )}
                    </div>
                  )
                : 
                  <p>No blogs</p>
              )
            :
              <p>Loading</p>
          }
      </section>
      <Footer />
    </>
  )
}
