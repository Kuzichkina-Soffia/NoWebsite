import Header from "./Header";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AboutMeal from "./AboutMeal";
import AboutRest from "./AboutRest";
import Welcome from "./Welcome";
import { ThemeContext, themes } from "./ThemeCotnext";
import { useSelector, useState } from 'react'

function App(){

    const [theme, setTheme] = useState(themes.dark)
    const hendler = () => setTheme((prevTheme)=> prevTheme === themes.dark? themes.light: themes.dark)
    return (
        <div>
            <ThemeContext.Provider value={theme}><Header hendler={hendler}/></ThemeContext.Provider>
            <Router>
                <Routes>
                    <Route path='/aboutmeal' element={<ThemeContext.Provider value={theme}><AboutMeal hendler={hendler}/></ThemeContext.Provider>}/>
                    <Route path='/aboutrest' element={<ThemeContext.Provider value={theme}><AboutRest hendler={hendler}/></ThemeContext.Provider>}/>
                    <Route path='/' element={<ThemeContext.Provider value={theme}><Welcome hendler={hendler}/></ThemeContext.Provider>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App;