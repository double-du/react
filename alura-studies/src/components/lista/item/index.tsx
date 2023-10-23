import { Tarefa } from '../../../types/tarefa';
import style from '../lista.module.scss'

interface Props extends Tarefa{
    selecionarTarefa: (tarefaSelecionada:Tarefa) => void
}

export default function Item({
    tarefa, 
    tempo, 
    selecionado, 
    completado, 
    id, 
    selecionarTarefa
}: Props){    
    return (
        <>
            <li 
                onClick={() => selecionarTarefa(
                    {
                        tarefa,
                        tempo,
                        selecionado,
                        completado,
                        id
                    }
                )}
                className={`
                    ${style.item} 
                    ${selecionado ? style.itemSelecionado : ''}
                    ${completado ? style.itemCompletado : ''}
                `}>
                <h3>{tarefa}</h3>
                <span>{tempo}</span>
            </li>
        </>
    );
}