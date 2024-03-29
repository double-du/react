import Botao from "../botao";
import Relogio from "./relogio";

import style from './cronometro.module.scss'

export default function Cronometro() {
    return(
        <>
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o Cronometro</p>
            <div className={style.relogioWrapper}>
                <Relogio />
            </div>
            <Botao>Começar!</Botao>
        </div>
        </>
    );
}