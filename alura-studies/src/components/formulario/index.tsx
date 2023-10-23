import React, { SetStateAction } from "react";
import Botao from "../botao";

import { Tarefa } from "../../types/tarefa";

import style from './formulario.module.scss';

import {v4 as uuidv4} from 'uuid'

export default class Formulario extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<Tarefa[]>>
}>
    {
    state = {
        tarefa: '',
        tempo: '00:00:00'
    }

    adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        this.props.setTarefas(
            tarefasAntigas => 
                [...tarefasAntigas, 
                    {
                        ...this.state,
                        selecionado: false,
                        completado: false,
                        id: uuidv4()
                    }
                ]
        );
        this.limparForm();
    }

    limparForm(){
        this.setState({
            tarefa: '',
            tempo: '00:00:00'
        });
    }

    render(): React.ReactNode {
        return(
        <>
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">Adicione um novo estudo</label>
                    <input 
                        name="tarefa" 
                        id="tarefa" 
                        placeholder="O que você quer estudar" 
                        type="text" 
                        required
                        value={this.state.tarefa}
                        onChange={
                            evt => {
                                this.setState({...this.state, tarefa: evt.target.value})
                            }
                        } 
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">Tempo</label>
                    <input 
                        type="time" 
                        name="tempo" 
                        id="tempo" 
                        step="1"
                        min="00:00:00" 
                        max="01:30:00" 
                        required
                        value={this.state.tempo}
                        onChange={
                            evt => {
                                this.setState({...this.state, tempo: evt.target.value})
                            }
                        }
                    />
                </div>
                <Botao type="submit">
                    Adicionar
                </Botao>
            </form>
        </>
        );
    }
}