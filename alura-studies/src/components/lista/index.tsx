import { Tarefa } from '../../types/tarefa';
import Item from './item';
import style from './lista.module.scss';


export default function Lista({tarefas}:{tarefas: Tarefa[]}){
    return (
    <>
        <aside className={style.listaTarefas}>
            <h2>Estudos do Dia</h2>
            <ul>
                {
                    tarefas.map((tarefa, index) => (
                        // React precisa de um Indice do DOM, por isso o Index
                        <Item 
                            key={index}
                            // tarefa={tarefa.tarefa}
                            // tempo={tarefa.tempo}
                            {...tarefa}
                            // Isso é chamado de Spread. Transforma todos os atributos do componente em props
                        />
                    ))
                }
            </ul>      
        </aside>
    </>
    )
}