// Class components não são a maneira ideal de escrever components. Optar por Function Components
import React from "react";

import style from './botao.module.scss'

export default class Botao extends React.Component<{children: string, type?: 'button' | 'submit' | 'reset' | undefined}>{
    render(): React.ReactNode {
        const {type = 'button'} = this.props
        return (
            <>
            <button type={this.props.type} className={style.botao}>
                {this.props.children}
            </button>
            </>
        )
    }
}

// export default Botao;