import React from 'react';
import BlogList from './list-of-posts';

const BlogPageHeader = () =>
<div>
  <div className='container-fluid' style={{ padding: '3.5em 0' }}>
    <div className='container'>
      <div className='row center'>
        <div className='eight columns offset-by-two columns'>
          <h2 className='slide'>Perspective<b>*</b></h2>
          <h5 className='slide'>Essays, short stories, and articles.</h5>
          <form style={{ margin: '0', padding: '0' }}>
            <input type='text' name='SeachBox' placeholder=' Blog Search...' className='full-width' oninput="w3.filterHTML('#id01', 'li', this.value)" />
            <a href='#' className='btn btn-green'>🔍 &nbsp;Search</a>
            <a href='#' className='btn' onclick='randomBlog()'><i className='fa fa-random fa-fw'></i>&nbsp; Random</a>
          </form>
        </div>
      </div>
    </div>
  </div>
  <BlogList />
</div>

export default BlogPageHeader;