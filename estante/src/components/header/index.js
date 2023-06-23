import { Menu } from './Menu';
import './header.css';

const Header = () => {
    return <>
        <header className="header">
            MYLIB
            <Menu />
        </header>
    </>
}

export default Header;