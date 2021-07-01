## Passo a passo: 

*Antes de iniciar*
- [ ] pensar sobre o que haverá no estado global;
- [ ] pensar sobre quais actions iremos precisar na aplicação;

*Instalação*
- [ ] npx create-react-app my-app-redux;
- [ ] npm install --save redux react-redux;
- [ ] npm install. (Caso necessário)

*Criar dentro do diretório src:*
- [ ] diretório actions;
- [ ] diretório reducers;
- [ ] diretório store.

*Criar dentro do diretório actions:*
- [ ] arquivo index.js.

*Criar dentro do diretório reducers:*
- [ ] arquivo index.js.

*Criar dentro do diretório store:*
- [ ] arquivo index.js.

*No arquivo App.js:*
- [ ] definir o Provider, `<Provider store={ store }>`, para fornecer os estados à todos os componentes encapsulados em `<App />`.

*No arquivo store/index.js:*
- [ ] importar o rootReducer e criar a store
- [ ] configurar o [Redux DevTools](https://github.com/reduxjs/redux-devtools)

*Na pasta reducers:*
- [ ] criar os reducers necessários
- [ ] configurar os exports do arquivo index.js

*Na pasta actions:*
- [ ] criar os actionTypes, por exemplo: `cosnt ADD_TODO = 'ADD_TODO'` (Não obrigatório)
- [ ] criar as actions necessárias

*Nos componentes:*
- [ ] fazer o connect
- [ ] criar a função mapStateToProps (Caso necessário)
- [ ] criar a função mapDispatchToProps (Caso necessário)
