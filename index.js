function Spa() {
  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={{users:[{
        name: 'tyler',
        email: 'tyler@mail.com',
        password: 'secret',
        balance: 100
      }]}}>
        <Route path="/" exact component={Home} />
        <Route path="/balance/" component={Balance} />
        <Route path="/createaccount/" component={CreateAccount} />
        <Route path="/alldata/" component={AllData} />
      </UserContext.Provider>
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa />,
  document.getElementById('root')
);
