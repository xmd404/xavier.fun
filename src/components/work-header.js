import React from 'react';
import ProjectList from './list-of-projects';

const WorkPageHeader = () =>
  <div>
    <div className='container-fluid' style={{ padding: '3.5em 0' }}>
      <div className='container'>
        <div className='row center'>
          <div className='eight columns offset-by-two columns'>
            <h2 className='slide'>Featured Work</h2>
            <h5 className='slide'>Projects I am currently working on.</h5>
            <form style={{ margin: '0', padding: '0' }}>
              <input type='text' name='SeachBox' placeholder=' Project Search...' className='full-width' oninput='w3.filterHTML("#id02", "li", this.value)' />
              <a href='#' className='btn btn-green'>🔍 &nbsp;Search</a>
              <a href='#' className='btn' onclick='randomProject()'><i className='fa fa-random fa-fw'></i>&nbsp; Random</a>
            </form>
          </div>
        </div>
      </div>
    </div>
    <ProjectList />
  </div>

export default WorkPageHeader