import React from 'react';
import SoundTapLogo from '../images/audio_tagger_logo.png';
import RocketChatLogo from '../images/rocket.png';
import PikapediaLogo from '../images/pokeball.png';

const FeaturedProjects = () =>
  <div className='container-fluid'>
    <div className='container center'>

      <div className='row'>
        <div className='four columns'>
          <hr/>
          <a href='https://xavier.fun/rocket' target='_blank'>
            <img 
              src={ RocketChatLogo }
              alt='RocketChat Logo'
              style={{ width: '20%'}}
            />
            <br/><br/>
            <h4>
              RocketChat
            </h4>
          </a>
          <h6 className=''>A lightning fast messaging app built with Angular 4 and Firebase.</h6>
          <p> 
            <a href='https://xavier.fun/rocket' target='_blank' className='black'>🌎&nbsp; Demo</a> 
            &nbsp; | &nbsp; 
            <a href='https://github.com/theWebsiteKid/rocketchat' target='_blank' className='black'><i className='fa fa-code'></i>&nbsp; Source</a>
          </p>
        </div>

        <div className='four columns'>
          <hr/>
          <a href='https://xavier.fun/audio' target='_blank'>
            <img
              src={ SoundTapLogo }
              alt='AudioTagger Logo'
              style={{ width: '22%'}}
            />
            <br/><br/>
            <h4>
              AudioTagger
            </h4>
          </a>
          <h6 className=''>An HTML5 widget that binds comments to audio file time-stamps.</h6>
          <p> 
            <a href='https://xavier.fun/audio' target='_blank' className='black'>🌎&nbsp; Demo</a> 
            &nbsp; | &nbsp; 
            <a href='https://github.com/theWebsiteKid/AudioTagger' target='_blank' className='black'><i className='fa fa-code'></i>&nbsp; Source</a>
          </p>
        </div>

        <div className='four columns'>
          <hr/>
          <a href='https://xavier.fun/pikapedia' target='_blank'>
            <img
              src={ PikapediaLogo }
              alt='Pikapedia Logo'
              style={{ width: '20%' }} />
            <br/><br/>
            <h4>
              Pikapedia
            </h4> 
          </a>
          <h6 className=''>A full featured Pokedex built with Angular 4, Firebase, and PokeAPI.</h6>
          <p> 
            <a href='https://xavier.fun/pikapedia' target='_blank' className='black'>🌎&nbsp; Demo</a> 
            &nbsp; | &nbsp; 
            <a href='https://github.com/theWebsiteKid/pikapedia' target='_blank' className='black'><i className='fa fa-code'></i>&nbsp; Source</a>
          </p>
        </div>
      </div>
      <br/>
      <a href='work.html' className='btn btn-green'>View All Projects</a>

    </div>
  </div>

export default FeaturedProjects;