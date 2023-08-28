import { useState, useRef } from 'react'
import './App.css'
import MainAkhir from './components/MainAkhir'
import MainAwal from './components/MainAwal'
import MainTetap from './components/MainTetap'
import ButtonMusic from './components/ButtonMusic'

function App() {

  const [showMainAwal, setShowMainAwal] = useState(true);
  const [showMainAkhir, setShowMainAkhir] = useState(false);
  const [showButtonMusic, setShowButtonMusic] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const [imageSrc, setImageSrc] = useState('../public/img/musicon.svg');
  const initImageSrc = '../public/img/musicon.svg';
  const audioRef = useRef(null);

  function handleMain() {
    setShowMainAwal(!showMainAwal);
    setShowMainAkhir(!showMainAkhir);
    setShowButtonMusic(!showButtonMusic);
    setIsMusicPlaying(true);
  }
  function playMusic() {
    const audioElement = audioRef.current;
    if (isMusicPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
    if (imageSrc === initImageSrc) {
      setImageSrc('../public/img/musicoff.svg');
    } else {
      setImageSrc(initImageSrc);
    }
    setIsMusicPlaying(!isMusicPlaying);
  }


  return (
    <>
      <section className='hero'>
        <MainTetap />
        {showMainAwal && <MainAwal onClickButton={handleMain} />}
        {showMainAkhir && <MainAkhir onPlaybos={playMusic} audioRef={audioRef} />}
        {showButtonMusic && <ButtonMusic onPlaybos={playMusic} audioRef={audioRef} onChange={imageSrc} />}

      </section>
    </>
  )
}

export default App

