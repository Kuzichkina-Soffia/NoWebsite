import Article from "./Article";


const obj = [
    {id: 1, title: 'Блюдо 1', text: 'Название блюда 1', completed: true},
    {id: 2, title: 'Блюдо 2', text: 'Название блюда 2', completed: true},
    {id: 3, title: 'Блюдо 3', text: 'Название блюда 3', completed: true},
    {id: 4, title: 'Блюдо 4', text: 'Название блюда 4', completed: true},
    {id: 5, title: 'Блюдо 5', text: 'Название блюда 5', completed: true},
    {id: 6, title: 'Блюдо 6', text: 'Название блюда 6', completed: true},
    {id: 7, title: 'Блюдо 7', text: 'Название блюда 7', completed: true},
    {id: 8, title: 'Блюдо 8', text: 'Название блюда 8', completed: true},
    {id: 9, title: 'Блюдо 9', text: 'Название блюда 9', completed: true},
    {id: 10, title: 'Блюдо 10', text: 'Название блюда 10', completed: true},
    {id: 11, title: 'Блюдо 11', text: 'Название блюда 11', completed: true},
    {id: 12, title: 'Блюдо 12', text: 'Название блюда 12', completed: true},
    {id: 13, title: 'Блюдо 13', text: 'Название блюда 13', completed: true}
]

function ArticleList(){
    return (
        <div>
            {obj.map((e)=> <Article title = {e.title} text = {e.text}/>)}
        </div>
    )
}

export default ArticleList;