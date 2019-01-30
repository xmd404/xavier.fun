import React from 'react';

import SoundTapLogo from '../images/audio_tagger_logo.png';
import RocketChatLogo from '../images/rocket.png';
import PikapediaLogo from '../images/pokeball.png';

const ProjectList = () => (
  <div className="container-fluid" style={{ padding: '0 0 35px' }}>
    <ul id="id02" >
      <div className="container">
        {/* <!-- Row #1 --> */}
        <div className="row center">

          {/* <!-- RocketChat --> */}
          <div className="four columns">
            <li>
              <hr/>
              <a href="https://xavier.fun/rocket" target="_blank">
                <img
                  src={ RocketChatLogo }
                  alt="RocketChat Logo" 
                  style={{ width: '20%'}} 
                />
                <br/><br/>
                <h4 className="center">
                  RocketChat
                </h4>
              </a>
              <h6 className="">A lightning fast messaging app built with Angular 4 and Firebase.</h6>
              <p> 
                <a href="https://xavier.fun/rocket" target="_blank" className="black">🌎&nbsp; Demo</a> 
                &nbsp; | &nbsp; 
                <a href="https://github.com/theWebsiteKid/rocketchat" target="_blank" className="black"><i className="fa fa-code"></i>&nbsp; Source</a>
              </p>
            </li>
          </div>
          {/* <!-- RocketChat --> */}
          
          {/* <!-- AudioTagger --> */}
          <div className="four columns">
            <li>
              <hr/>
              <a href="https://xavier.fun/audio" target="_blank">
                <img  
                  src={ SoundTapLogo }
                  alt="AudioTagger Logo"
                  style={{ width: '22%' }}
                />
                <br/><br/>
                <h4 className="center">
                  AudioTagger
                </h4>
              </a>
              <h6 className="">An HTML5 widget that binds comments to audio file time-stamps.</h6>
              <p> 
                <a href="https://xavier.fun/audio" target="_blank" className="black">🌎&nbsp; Demo</a> 
                &nbsp; | &nbsp; 
                <a href="https://github.com/xduncan/audio-tagger" target="_blank" className="black"><i className="fa fa-code"></i>&nbsp; Source</a>
              </p>
            </li>
          </div>
          {/* <!-- AudioTagger --> */}

          {/* <!-- Pikapedia --> */}
          <div className="four columns">
            <li>
              <hr/>
              <a href="https://xavier.fun/pikapedia" target="_blank">
                <img 
                  src={ PikapediaLogo } 
                  alt="Pikapedia Logo" 
                  style={{ width: '20%' }}
                />
                <br/><br/>
                <h4 className="center">
                  Pikapedia
                </h4> 
              </a>
              <h6 className="">A full featured Pokedex built with Angular 4, Firebase, and PokeAPI.</h6>
              <p> 
                <a href="https://xavier.fun/pikapedia" target="_blank" className="black">🌎&nbsp; Demo</a> 
                &nbsp; | &nbsp; 
                <a href="https://github.com/theWebsiteKid/pikapedia" target="_blank" className="black"><i className="fa fa-code"></i>&nbsp; Source</a>
              </p>
            </li>
          </div>
          {/* <!-- Pikapedia --> */}
        </div>
        {/* <!-- Row #1 --> */}
      </div>
    </ul>
  </div>
)

export default ProjectList;