import React from 'react'

export const AboutPage = () => {
  return (
    <section className="header03 cid-rVmJmn8KSM mt-1 p-5" id="header03-2k">   

    <div className="mbr-overlay" style={{opacity: 0.5, backgroundColor: '#000000'}}></div>

    <div className="container align-left">
        <div className="row justify-content-left">
            <div className="mbr-white col-md-12 col-lg-6">
                <h1 className="mbr-section-title mbr-bold pb-3 mbr-fonts-style display-6">ABOUT</h1>
                <p className="mbr-section-subtitle mbr-light mbr-fonts-style">
                  Proyecto hecho en React 18 (powered by Vite). Conceptos practicados:</p>
                     <ul className='mt-2'>
                         <li>React Router</li>
                         <li>Navigate</li>
                         <li>useMemo</li>
                         <li>animaciones</li>
                         <li>protección de rutas</li>
                         <li>login</li>
                         <li>Context</li>
                         <li>Reducer</li>
                     </ul>
                  Parte del 
                        <a href="https://www.udemy.com/course/react-cero-experto" 
                          className='ms-1' 
                          target='_blank'> 
                        curso del Maestro Fernando Herrera 
                        </a>.
                  
                  <p className="mbr-section-subtitle mbr-light mbr-fonts-style">
                  Alumno: Mario Arturo Serrano Flores.
                  </p>
                
                <div className="mbr-section-btn">
                  <a className="btn btn-info" href="https://github.com/makadown" target='_blank'>
                  
                  <svg xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      fill="currentColor" 
                      className="bi bi-github me-2 mb-1" 
                      viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                  </svg>    
                  My Repos</a></div>
            </div>
        </div>
    </div>
</section>
  )
}
