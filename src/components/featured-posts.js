import React from 'react';

const FeaturedPosts = () =>
  <div className='container-fluid' style={{ padding: '0 0 50px' }}>
    <div className='container'>

      <div className='row' style={{ margin: '7% 0 0' }}>
        <div className='two columns'>
          <hr/>
          <h6><b>02.08.17</b></h6>
        </div>
        <div className='ten columns'>
          <a href='./blog/why-web-development.html'>
            <h4 className=''>Why A Career In Web Development?</h4>
          </a>
          <h6 className=''>A short essay written for the Greater Sum Apprenticeship Program.</h6>
          <p><span role='img' aria-label='emoji'>📚</span>&nbsp; Essay &nbsp; | &nbsp; <i className='fa fa-clock-o'></i> &nbsp; 2 minute read</p>
        </div>
      </div>

      <div className='row' style={{ margin: '5% 0 0' }}>
        <div className='two columns'>
          <hr/>
          <h6><b>07.31.18</b></h6>
        </div>
        <div className='ten columns'>
          <a href='./blog/balloon-strings-part-i.html'><h4 className=''>Agile Writing: An Iterative Approach to Blogging</h4></a>
          <h6 className=''></h6>
          <p><span role='img' aria-label='emoji'>📰</span>&nbsp; Article &nbsp; | &nbsp; <i className='fa fa-clock-o'></i> &nbsp; 5 minute read</p>
        </div>
      </div>

      <div className='row' style={{ margin: '5% 0 0' }}>
        <div className='two columns'>
          <hr/>
          <h6><b>08.13.18</b></h6>
        </div>
        <div className='ten columns'>
          <a href='./blog/balloon-strings-part-i.html'><h4 className=''>Modularity: The Future of CSS & Front End Design</h4></a>
          <h6 className=''></h6>
          <p><span role='img' aria-label='emoji'>📰</span>&nbsp; Article &nbsp; | &nbsp; <i className='fa fa-clock-o'></i> &nbsp; 5 minute read</p>
          <br/>
          <a href='blog.html' className='btn btn-green'>View All Posts</a>
        </div>
      </div>
      
    </div>
  </div>

export default FeaturedPosts;