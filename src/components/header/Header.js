import './Header.css'
import {Link} from "react-router-dom";
import {switcher_menu} from "../../services/switchers";

export default function Header() {
  return (
    <div className='header'>
    <button className={'switcher'} onClick={switcher_menu}>switch</button>
        <Link to={'/movies'}>
        <p className={'menu_element'}>Movies</p><
      /Link>

        <Link to={'/genres'}>
          <p className={'menu_element'}>Genres</p><
      /Link>

    </div>
  );
}