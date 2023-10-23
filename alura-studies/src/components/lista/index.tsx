import style from './lista.module.scss';

export default function Lista(){
    
    const tarefas = [{
        tarefa: 'React',
        tempo: '01:00:00'
    },{
        tarefa: 'Javascript',
        tempo: '00:30:00'
    },{
        tarefa: 'TypeScript',
        tempo: '00:30:00'
    }];
    return (
    <>
        <aside className={style.listaTarefas}>
            <h2>Estudos do Dia</h2>
            <ul>
                {
                    tarefas.map((tarefa, index) => (
                        // React precisa de um Indice do DOM, por isso o Index
                        <li className={style.item} key={index}>
                            <h3>{tarefa.tarefa}</h3>
                            <span>{tarefa.tempo}</span>
                        </li>
                    ))
                }
            </ul>      
        </aside>
    </>
    )
}