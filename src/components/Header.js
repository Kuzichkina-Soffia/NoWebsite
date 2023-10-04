import main from "./main.css";
import { ThemeContext, themes } from "./ThemeCotnext";
import { useContext } from 'react'


function Header({hendler}){
    const theme = useContext(ThemeContext)
    return (
        <div>
            <table className="menu" style={{background: theme.background, outline: theme.outline}}>
                <tr>
                    <td><h1 style={{color: theme.textColor}}>СТРАНА КОТОРОЙ НЕТ</h1></td>
                    <td><a className="link" href="/" style={{color: theme.textColor}}>Страница привествия</a></td>
                    <td><a className="link" href="/aboutmeal" style={{color: theme.textColor}}>Карта блюд</a></td>
                    <td><a className="link" href="/aboutrest" style={{color: theme.textColor}}>О ресторане</a></td>
                    <td><div><button onClick={() => hendler()} style={{color: theme.textColor}}>Смена темы</button></div></td>
                </tr>
            </table>
        </div>
    )
}

export default Header;