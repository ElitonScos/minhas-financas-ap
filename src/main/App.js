import React from 'react';

import Rotas from './rotas'
// import navbar from '../components/navbar';

import 'bootswatch/dist/flatly/bootstrap.css'
import '../custom.css'
// import CadastroUsuario from '../views/cadastroUsuario';
import Navbar from '../components/navbar';

class App extends React.Component {
      render(){
        return(
            <>
            <Navbar/>
        <div className='container'>
              <Rotas />
        </div>
        </>
        )
      }
}

export default App;
