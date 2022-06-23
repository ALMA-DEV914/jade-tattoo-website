import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';
import TextField from "../components/TextField";
import { addMember } from "../redux/memberSlice"

const AddMember = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    date: ''
  });

  const handleAddMember = (e) => {
    e.preventDefault();
    setValues({ name: '', email: '',phone: '',message:'', date: '' });
    dispatch(addMember({
      id: uuidv4(),
      username: values.username,
      email: values.email,
      password: values.password,
      message: values.message,
      date: values.date
    }));
    navigate('/add-member');
  }

  return (
    <div className="container mt-4  mx-auto text-white">
      <form className="login-form col-lg-6 bg-dark mx-auto text-left p-3">
       <h3>SET AN SCHEDULE</h3>
      <TextField
        label="Name"
        value={values.username}
        onChange={(e) => setValues({ ...values, username: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Almita Braunova' }}
      />
      <TextField
        label="Email"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: 'email', placeholder: 'almita39@mail.com' }}
      />
    <TextField
        label="Phone Number"
        value={values.phone}
        onChange={(e) => setValues({ ...values, phone: e.target.value })}
        inputProps={{ type: 'number', placeholder: '09153467896' }}
      />

<TextField
        label="Message"
        value={values.message}
        onChange={(e) => setValues({ ...values, message: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Enter message' }}
      />
      <TextField
        label="Date"
        value={values.date}
        onChange={(e) => setValues({ ...values, date: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'March 27, 2022' }}
      />
      <br></br>

      <button onClick={handleAddMember} className="btns bg-success">Submit</button>
      </form>
    </div>
  )
}

export default AddMember;
