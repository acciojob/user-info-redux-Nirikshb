import { useSelector, useDispatch } from 'react-redux';
import { updateName, updateEmail } from './userActions';

const UserProfile = () => {
  const name = useSelector(state => state.name);
  const email = useSelector(state => state.email);

  const dispatch = useDispatch();

  const handleNameChange = (event) => {
    dispatch(updateName(event.target.value));
  };

  const handleEmailChange = (event) => {
    dispatch(updateEmail(event.target.value));
  };

  return (
    <div>
      <p>Name: {name}</p>
      <input type="text" value={name} onChange={handleNameChange} />
      <p>Email: {email}</p>
      <input type="email" value={email} onChange={handleEmailChange} />
    </div>
  );
};

export default UserProfile;
