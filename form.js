function Form() {
  const initialValues = { name: '', email: '', password: '' };
  const [values, setValues] = React.useState(initialValues);
  const [errors, setErrors] = React.useState({});
  const [isSubmit, setIsSubmit] = React.useState(false);
  const createBtn = document.getElementById('create-btn');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setValues({ ...values, [id]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmit(true);
  }

  React.useEffect(() => {
    console.log(errors);
    if(Object.keys(errors).length === 0 && isSubmit) {
      console.log(values);
      alert(`Account ${values.name} successfully created!`);
      localStorage.setItem('userValues', JSON.stringify(values));
      setValues(initialValues);
      createBtn.innerHTML = 'Add Another Account';
    }
  }, [errors])

  const validate = (values) => {
    const errors = {};
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!values.name) {
      errors.name = 'Name is required!';
    }
    if (!values.email) {
      errors.email = 'Email is required!';
    }
    if (!values.password) {
      errors.password = 'Password is required!';
    } else if (values.password.length < 8) {
      errors.password = 'Password must contain at least 8 characters.';
    }
    return errors;
  }

  return (
    <>
      <div className="section">
        <div className="card">
          <img
            className="card-img-top img-fluid"
            src="createaccount.png"
            alt="Card image cap"
            style={{ width: '5rem' }}
          />
          <div className="card-body">
            <h5 className="card-title">Add new account</h5>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="name"
                  className="form-control"
                  id="name"
                  placeholder="Enter name"
                  value={values.username}
                  onChange={handleChange}
                />
                <p className="text-danger">{ errors.name }</p>
              </div>
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  value={values.email}
                  onChange={handleChange}
                />
                <p className="text-danger">{ errors.email }</p>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                />
                <p className="text-danger">{ errors.password }</p>
              </div>
              <button type="submit" className="btn btn-primary" disabled={!values.name} id="create-btn">
                Create Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
