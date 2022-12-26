import UserTable from './components/UserTable';
import CategoriesTab from './components/CategoriesTab';
import './css/index.css';
import datos from './data.json'
import { useState } from 'react';
function App() {

  const [display,setDisplay] = useState('weekly')

  const changeDisplay = (disp) =>{
    const anterior = document.getElementById(display)
    anterior.style.color = 'hsl(236, 100%, 87%)';
    setDisplay(disp)
    const seleccionado = document.getElementById(disp)
    seleccionado.style.color = 'white'
  }

  return (
    <div className='container'>
      <div className='dashboard'>
        <div className='User'>
          <UserTable changeDisplay={changeDisplay} img="./images/image-jeremy.png" name="Jeremy Robson"></UserTable>
        </div>
        <div className='info categorias'>
          {datos.map(dato => {
            return (
              <div>
                <CategoriesTab dato={dato} display={display}></CategoriesTab>
              </div>
            )
          })}
        </div>

      </div>

    </div>
  );
}

export default App;
