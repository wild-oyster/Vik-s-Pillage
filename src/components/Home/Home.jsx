import './Home.css';

import Carousel from '../elements/Carousel/Carousel';
import { GoMute } from 'react-icons/go';
import React from 'react';
import sound from '../../assets/HomeImg/sound.mp3';

const Home = () => {
  function onPause() {
    const audio = document.getElementById('vikingMp3');
    audio.pause();
    audio.volume = 0.2;
  }

  return (
    <div className='main-home'>
      <audio id='vikingMp3' autoPlay>
        <source src={sound} type='audio/mp3' />
      </audio>
      <div className='snow'>
        <div className='globalContainer'>
          <div className='container'>
            <div className='container-text'>
              <h1 className='title-home-page'>Vikings</h1>
              <div className='content-text-home'>
                <blockquote cite='https://www.huxley.net/bnw/four.html'>
                  <p className='text-home'>
                    LES GUERRIERS VIVENT… ET MEURENT ENSEMBLE. SI TU NE FAIS PAS
                    CONFIANCES AUX HOMMES QUI SE TROUVENT À TES CÔTÉS, OU FACE À
                    TOI, T’ES DÉJÀ MORT.
                  </p>
                </blockquote>
                <div className='btn-pause-home'>
                  <button onClick={onPause} className='btn-mute'>
                    <GoMute className='icon-mute-home' />
                  </button>
                </div>
              </div>
            </div>
            <div className='container-carousel'>
              <div style={{ textAlign: 'left' }}>
                <h6 className='title-explorers'>Top explorers</h6>
              </div>
              <Carousel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
