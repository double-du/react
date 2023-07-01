import './reading.css';
import '../../assets/css/layouts/cover-menu-layout.css';

const Reading = () => {
    return <>
        <div className="container">
            <div className="reading cover-menu-laytout">
                <div className='cover reading__cover-container'>
                    <div className='reading__status'></div>
                    <div className='reading__cover'></div>
                </div>
                <div className='menu reading__menu'>
                    <ul>
                        <li className='reading__menu__item reading__menu__item--avancar'>Avançar leitura</li>
                        <li className='reading__menu__item reading__menu__item--impressoes'>Impressões até agora</li>
                        <li className='reading__menu__item reading__menu__item--critica reading__menu__item--desabilitar'>Escrever Crítica</li>
                        <li className='reading__menu__item reading__menu__item--avaliar'>Avaliar</li>
                        <li className='reading__menu__item reading__menu__item--categorizar'>Categorizar</li>
                        <li className='reading__menu__item reading__menu__item--desistir reading__menu__item--ultimo'>Desistir</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
}

export default Reading;