import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'

import Demo from './demo.tsx'
import AppTest from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Event from './event.tsx';
import PropsPage from './PropsPage.tsx';




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
   <AppTest/>
   <Demo></Demo>
   <Event></Event>
   <PropsPage/>
   
  </StrictMode>,
)
