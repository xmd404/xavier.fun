import React from 'react';

const BlogList = () =>
  <div className="container-fluid" style={{ padding: '0 0 35px' }}>
    <div className="container">
      <ul id="id01">
        <li>
          <div className="row">
            <div className="two columns">
              <hr/>
              <h6><b>Sticky #1</b></h6>
            </div>
            <div className="ten columns">
              <a href="./blog/balloon-strings-part-i.html"><h4 className="">Angular, Deconstructed</h4></a>
              <h6 className="">A new version of Angular was recently released, so I put together this post to help myself and others get a better handle on some of it's more important concepts. This is Angular, deconstructed.</h6>
              <p>📰&nbsp; Article &nbsp; | &nbsp; <i className="fa fa-clock-o"></i> &nbsp; 5 minute read</p>
            </div>
          </div>
        </li>

        <li>
          <div className="row" style={{ margin: '5% 0 0' }}>
            <div className="two columns">
              <hr/>
              <h6><b>Sticky #2</b></h6>
            </div>
            <div className="ten columns">
              <a href="./blog/balloon-strings-part-i.html"><h4 className="">Agile Writing: The Iterative Approach to Blogging</h4></a>
              <h6 className=""></h6>
              <p>📰&nbsp; Article &nbsp; | &nbsp; <i className="fa fa-clock-o"></i> &nbsp; 5 minute read</p>
            </div>
          </div>
        </li>

        <li>
          <div className="row" style={{ margin: '5% 0 0' }}>
            <div className="two columns">
              <hr/>
              <h6><b>02.13.18</b></h6>
            </div>
            <div className="ten columns">
              <a href="./blog/balloon-strings-part-i.html"><h4 className="">Modularity: The Future of CSS & Front End Design</h4></a>
              <h6 className=""></h6>
              <p>📰&nbsp; Article &nbsp; | &nbsp; <i className="fa fa-clock-o"></i> &nbsp; 5 minute read</p>
            </div>
          </div>
        </li>

        <li>
          <div className="row" style={{ margin: '5% 0 0' }}>
            <div className="two columns">
              <hr/>
              <h6><b>02.06.18</b></h6>
            </div>
            <div className="ten columns">
              <a href="./blog/balloon-strings-part-i.html"><h4 className="">Building Angular Apps on Linux (Ubuntu)</h4></a>
              <h6 className="">I had some issues setting up my development environment and building Angular apps when I switched from Windows 10 to Ubuntu. Here's how I got everything working smoothly.</h6>
              <p>📰&nbsp; Article &nbsp; | &nbsp; <i className="fa fa-clock-o"></i> &nbsp; 5 minute read</p>
            </div>
          </div>
        </li>
        
        <li>
          <div className="row" style={{ margin: '5% 0 10px' }}>
            <div className="two columns">
              <hr/>
              <h6><b>02.08.17</b></h6>
            </div>
            <div className="ten columns">
              <a href="./blog/why-web-development.html"><h4 className="">Why A Career In Web Development?</h4></a>
              <h6 className="">A short essay written for the Greater Sum Apprenticeship Program.</h6>
              <p>📚&nbsp; Essay &nbsp; | &nbsp; <i className="fa fa-clock-o"></i> &nbsp; 2 minute read</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>


export default BlogList;