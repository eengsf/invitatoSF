// import playIcon from '../assets/musicon.svg';

export default function ButtonMusic({ onPlaybos, audioRef, onChange }) {

   return (
      <>
         <button className="button-music" type='button' onClick={onPlaybos}>
            <img src={onChange} alt='' />
            <audio className="music" controls ref={audioRef} autoPlay>
               <source src="https://invitato.net/template-nailalvia/static/bg-sound-946cc5b0fbb9759746fce004461e52cc.mp3" type="audio/mpeg" />
            </audio>
         </button>
      </>
   );
}