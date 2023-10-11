

export default function MainAwal({ onClickButton }) {

     return (
          <>
               <main className='main-awal'>
                    <div className='main1-awal'>
                         <img src="../public/img/birdnew.jpg" alt="" className="bird" />
                         <div className="m1-awal">
                              <h6>THE WEDDING OF</h6>
                              <h2>Nailal and Via</h2>
                         </div>
                         <div className="m2-awal">
                              <button onClick={onClickButton}>Open Invitation</button>
                         </div>
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='wave-awal'>
                              <path fill="#b4c5d5" fillOpacity="1" d="M0,160L80,149.3C160,139,320,117,480,133.3C640,149,800,203,960,213.3C1120,224,1280,192,1360,176L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
                              </path>
                         </svg>
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='wave1-awal'>
                              <path fill="#b4c5d5" fillOpacity="0.5" d="M0,160L80,149.3C160,139,320,117,480,133.3C640,149,800,203,960,213.3C1120,224,1280,192,1360,176L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
                              </path>
                         </svg>
                    </div>
                    <div className='footer-awal'>
                         <h5>Created with by Invitato</h5>
                         <h5>2023 Nailal & Via. All Rights Reserved</h5>
                    </div>
               </main>
          </>
     );
}


