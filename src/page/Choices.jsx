import React, { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import '../assets/App.css'
import MyChart from '../component/MyChart'
import { useNavigate } from 'react-router-dom';

const Choices = () => {

  const navigate = new useNavigate()
  const [controlAnimation,setControlAnimation] = useState(false)




  useEffect(() => {
    let luckyGameClockCookie = sessionStorage.getItem('lucky-cookie')

    if(!luckyGameClockCookie){
      navigate('/')
    }
  },[])

  useEffect(() => {
      setTimeout(() => {
          setControlAnimation(true)
      }, 0);

      setTimeout(() => {
          setControlAnimation(false)
      }, 2000);
  }, [])

  return (
    <>
      {
          controlAnimation ? 
          (
              <div id="dash-load-home" className="d-flex align-items-center justify-content-center w-100 h-100 position-fixed top-0 end-0 bottom-0 start-0 bg-load z-3">
                  <div className="text-center">
                      <div className="spinner-border text-white" role="status">
                          <span className="col visually-hidden"></span>
                      </div>
                  </div>
              </div>
          ) :
          ''
      }
      <section className='container'>
        <MyChart
          rule='all-lucky'
        ></MyChart>
      </section>
    </>
  )
}

export default Choices

























