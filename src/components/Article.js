import { ThemeContext, themes } from "./ThemeCotnext";
import { useContext } from 'react'

function Article(props){
    const {title, text} = props
    const theme = useContext(ThemeContext)
    return (
        <div>
            <h2 style={{color: theme.textColor}}>{title}</h2>
            <div>
                <p style={{color: theme.textColor}}>{text}</p>
            </div>
        </div>
    )
}

export default Article;