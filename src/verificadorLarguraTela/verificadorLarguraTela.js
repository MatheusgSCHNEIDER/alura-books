import { useState, useEffect } from 'react';

function ListenerLarguraTela () {
    const [larguraTela, setLarguraTela] = useState(window.innerWidth);

    useEffect(() => {
      function atualizarLargura() {
        setLarguraTela(window.innerWidth);
      }
  
      window.addEventListener('resize', atualizarLargura);
      return () => {
        window.removeEventListener('resize', atualizarLargura);
      };
    }, []);
  
    return larguraTela;
}

export default ListenerLarguraTela;