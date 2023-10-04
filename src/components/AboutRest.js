import { ThemeContext, themes } from "./ThemeCotnext";
import { useContext } from 'react'
// import {onClick} from 'Header'
import main from "./main.css";

function AboutRest({hendler}){

    const theme = useContext(ThemeContext)
    return (
        <div>
            <h1 className="text" style={{color: theme.textColor}}>О ресторане</h1>
            <p style={{color: theme.textColor}}>ДОБРО ПОЖАЛОВАТЬ, ДАМЫ И ГОСПОДА!!!</p>
        </div>
    )
}

export default AboutRest;