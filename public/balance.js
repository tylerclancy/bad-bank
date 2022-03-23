function Balance() {
  const initialValues = {deposit: 0, withdraw: 0};
  const [balance, setBalance] = React.useState(100);
  const [values, setValues] = React.useState(initialValues);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setValues({...values, [id]: value});
  }

  const handleDeposit = (e) => {
    e.preventDefault();
    console.log(typeof balance);
    if (values.deposit > 0 && Number(values.deposit)) {
      setBalance(balance + Number(values.deposit));
    } else {
      alert(`Incorrect input.`)
      return;
    }
  };

  const handleWithdraw = (e) => {
    e.preventDefault();
    if (values.withdraw > 0 && Number(values.withdraw)) {
      if ((balance - Number(values.withdraw)) > 0) {
        setBalance(balance - Number(values.withdraw));
      } else {
        alert(`Insufficient funds.`);
      }
    } else {
      alert(`Incorrect input.`)
      return;
    }
  };

  return (
    <>
      <h1>Balance</h1>
      <div className="section balance">
        <div className="card">
          <div className="card-title">Your balance: {balance}</div>
          <div className="card">
            <div className="card-header">Deposit</div>
            <div className="card-body">
              <form onSubmit={handleDeposit}>
                <label>Deposit amount:</label>
                <input
                  id="deposit"
                  className="form-control"
                  placeholder="Enter amount"
                  onChange={handleChange}
                />
                <button
                  type="submit"
                  className="btn btn-primary"
                  id="submit-btn"
                  disabled={!values.deposit}
                >
                  Deposit
                </button>
              </form>
            </div>
          </div>
          <div className="card">
            <div className="card-header">Withdraw</div>
            <div className="card-body">
              <form onSubmit={handleWithdraw}>
                <label>Withdraw amount:</label>
                <input
                  id="withdraw"
                  className="form-control"
                  placeholder="Enter amount"
                  onChange={handleChange}
                />
                <button
                  type="submit"
                  className="btn btn-primary"
                  id="submit-btn"
                  disabled={!values.withdraw}
                >
                  Withdraw
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
