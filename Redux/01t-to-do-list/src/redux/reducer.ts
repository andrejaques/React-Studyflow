import * as actionTypes from "./actionTypes"

const initialState: ArticleState = {
  articles: [
    {
      id: 1,
      title: "post 1",
      body:
        "EN - Tsting React + Redux + Typescript doing a To-Do-List App",
    },
    {
      id: 2,
      title: "post 2",
      body:
        "PT-BR: Testando React + Redux + Typescript com um App de To-Do-List",
    },
  ],
}

const reducer = (
    state: ArticleState = initialState,
    action: ArticleAction
  ): ArticleState => {
    switch (action.type) {
      case actionTypes.ADD_ARTICLE:
        const newArticle: IArticle = {
          id: Math.random(), // not really unique
          title: action.article.title,
          body: action.article.body,
        }
        return {
          ...state,
          articles: state.articles.concat(newArticle),
        }
      case actionTypes.REMOVE_ARTICLE:
        const updatedArticles: IArticle[] = state.articles.filter(
          article => article.id !== action.article.id
        )
        return {
          ...state,
          articles: updatedArticles,
        }
    }
    return state
  }
  
  export default reducer
  