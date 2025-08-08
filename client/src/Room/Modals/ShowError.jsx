import React , {useEffect} from 'react'
import '../Styles/EditorPage.css'
import { useState } from 'react';

export default function ShowError({ errorMessage, CloseErrorMessageModal }) {

  const [AnimationTime , setAnimationTime] = useState(true);

    useEffect(()=> {
        const timers = errorMessage.map(err => {
          return setTimeout(() => {
             setAnimationTime(false);
             setTimeout(()=>{
               CloseErrorMessageModal(err.id)
             } , 2000)
            } , 15000)
        });

        return () => {
            timers.forEach(timer => clearTimeout(timer));
        }
    } , [errorMessage, CloseErrorMessageModal])

  return (
    <div className="toast-top-center" style={{zIndex:200000}}>
      {errorMessage.map((err) => (
        <div key={err.id} className={`toast error-toast show`}>
          <div className="toast-body d-flex justify-content-between align-items-center">
            <div className="toast-message">
              {err.message}
            </div>
            <button 
              type="button" 
              className="toast-close-btn"
              onClick={() => CloseErrorMessageModal(err.id)}
              aria-label="Close"
            >
              &times;
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}