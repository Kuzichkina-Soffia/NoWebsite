import ArticleList from "./ArticleList";
import { ThemeContext, themes } from "./ThemeCotnext";
import { useContext } from 'react'

function AboutMeal({hendler, AdItem}){
    const theme = useContext(ThemeContext)
    return (
        <div>
            <h1 style={{color: theme.textColor}}>Карта блюд</h1>
            <ThemeContext.Provider value={theme}><ArticleList/></ThemeContext.Provider>
        </div>
    )
}

export default AboutMeal;