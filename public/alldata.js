function AllData() {
  let data = localStorage.getItem('userValues');
  data = JSON.parse(data);

  return (
    <>
    <div className="section">
      <div className="card">
        <div className="card-header">All Data</div>
        <table className="card-table table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{(data) ? data.name : ''}</td>
              <td>{(data) ? data.email : ''}</td>
              <td>{(data) ? data.password : ''}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}
