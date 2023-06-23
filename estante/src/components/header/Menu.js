import './menu.css';
import './menu-item.css';

export const Menu = () => {
    return (
        <>
            <ul className="menu">
                <li><a className="menu__item" href="#">Lendo</a></li>
                <li><a className="menu__item" href="#">Pilha de Leitura</a></li>
                <li><a className="menu__item" href="#">Desejos</a></li>
                <li><a className="menu__item" href="#">Amigos</a></li>
                <li><a className="menu__item" href="#">Sair</a></li>
            </ul>
        </>
    );
}