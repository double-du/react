// Class components não são a maneira ideal de escrever components. Optar por Function Components
import React from "react";

import style from './botao.module.scss'

export default class Botao extends React.Component{
    render(): React.ReactNode {
        return (
            <>
            <button className={style.botao}>
                Botão
            </button>
            </>
        )
    }
}

// export default Botao;