import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import TextField from "../components/TextField"
import { editMember } from "../redux/memberSlice"

const EditMember = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const members = useSelector(store => store.members);
  const navigate = useNavigate();
  const existingUser = members.filter(member => member.id === params.id);
  const { username, email, phone, message, date } = existingUser[0];
  const [values, setValues] = useState({
    username,
    email,
    phone,
    message,
    date
  });

  const handleEditMember = () => {
    setValues({ username: '', email: '', phone: '', message: '', date: '' });
    dispatch(editMember({
      id: params.id,
      username: values.username,
      email: values.email,
      phone: values.phone,
      message: values.message,
      date: values.date
    }));
    navigate('/');
  }

  return (
    <div className="container mt-4 col-lg-6 mx-auto text-white">
      <h2>Edit your details</h2><br></br>
      <TextField
        label="Name"
        value={values.username}
        onChange={(e) => setValues({ ...values, username: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Jhon Doe' }}
      />
      <br />
      <TextField
        label="Email"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: 'email', placeholder: 'jhondoe@mail.com' }}
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
      <button onClick={handleEditMember} className="btns">Edit</button>
    </div>
  )
}

export default EditMember;
