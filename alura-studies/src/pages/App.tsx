import style from './style.module.scss';

import Formulario from '../components/formulario';
import Lista from '../components/lista';
import Cronometro from '../components/cronometro';
import { useState } from 'react';
import { Tarefa } from '../types/tarefa';

function App() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  const [selecionado, setSelecionado] = useState<Tarefa>()

  function selecionarTarefa(tarefaSelecionada: Tarefa){
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })));
  }

  // Passo um state que pode receber ou um Array de Tarefas ou um array vazio
  //O React funciona unilateralmente apenas transmitindo dado do pai para o filho...
  //... por isso, precisamos criar as tarefas aqui no app, para passar o a função set tarefas pro formulario...
  //... e o estado tarefas (ou a lista de tarefas) para o componente lista

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista 
        tarefas={tarefas} 
        selecionarTarefa={selecionarTarefa}
      />
      <Cronometro />
    </div>
  );
}

export default App;
