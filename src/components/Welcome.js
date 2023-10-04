import { ThemeContext, themes } from "./ThemeCotnext";
import { useContext } from 'react'

function Welcome({hendler}){
    const theme = useContext(ThemeContext)
    return (
        <div className="welcome">
            <h1 style={{color: theme.textColor}}> СТРАНА КОТОРОЙ НЕТ</h1>
            <p style={{color: theme.textColor}}>Доставкой из рестарана по москве в течении 60 минут</p>
        </div>
    )
}

export default Welcome;