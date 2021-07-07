const renderWithReduxAndRouter = (
    routes,
    {
      initialState = {},
      store = createStore(reducer, initialState, applyMiddleware(thunk))
    } = {},
    {
      route = '/',
      history = createMemoryHistory({ initialEntries: [route] })
    } = {}
) => ({
    ...render(
      <Provider store={store}>
        <Router history={history}>
          <Switch>{routes}</Switch>
        </Router>
      </Provider>
    ),
    store,
    history
})