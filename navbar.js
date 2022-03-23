function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          BANK
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item" data-toggle="tooltip" title="Manage your funds. Withdraw or deposit.">
              <a className="nav-link" id="balance" href="#/Balance/">
                Balance
              </a>
            </li>
            <li className="nav-item" data-toggle="tooltip" title="View all data.">
              <a className="nav-link" id="all-data" href="#/AllData/">
                All Data
              </a>
            </li>
          </ul>
          </div>
          <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav navbar-right">
          <li className="nav-item" data-toggle="tooltip" title="Create new accounts.">
            <a className="nav-link" id="create-account" href="#/CreateAccount/">
              Create Account
            </a>
          </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
