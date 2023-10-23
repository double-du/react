import React from "react";
import Botao from "../botao";

import style from './formulario.module.scss';

export default class Formulario extends React.Component{
    render(): React.ReactNode {
        return(
        <>
            <form action="" className={style.novaTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">Adicione um novo estudo</label>
                    <input 
                        name="tarefa" 
                        id="tarefa" 
                        placeholder="O que você quer estudar" 
                        type="text" 
                        required 
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
                    />
                </div>
                <Botao />
            </form>
        </>
        );
    }
}