import { Link, Form, useNavigation, useActionData, useNavigate } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { Logo, FormRow, SubmitBtn } from '../components';
import customFetch from '../utils/customFetch';
import { useEffect } from 'react';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const errors = { msg: '' };
  if (data.password.length < 8) {
    errors.msg = 'password too short';
    return errors;
  }
  try {
    await customFetch.post('/auth/login', data);
    return { msg: '' , status:200} 
  } catch (error) {
    errors.msg = error?.response?.data?.msg || 'Something went wrong';
    return errors;
  }
};

const Login = () => {
  const errors = useActionData();
  const navigate = useNavigate();

  const loginDemoUser = async () => {
    const data = {
      email: 'test@test.com',
      password: 'secret123',
    };
    try {
      await customFetch.post('/auth/login', data);
      navigate('/dashboard');
    } catch (error) {
    }
  };
 
  useEffect(() => {
    if (errors?.status) {
      navigate('/dashboard'); 
    }
  }, [errors, navigate]);
  return (
    <Wrapper>
      <Form method='post' className='form'>
          {errors && <p style={{ color: 'red' }}>{errors.msg}</p>}
        <Logo />
        <h4>Login</h4>
        <FormRow type='email' name='email'  />
        <FormRow type='password' name='password' />
        < SubmitBtn />
        <button type='button' className='btn btn-block' onClick={loginDemoUser}>
          explore the app
        </button>
        <p>
          Not a member yet?
          <Link to='/register' className='member-btn'>
            Register
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};
export default Login;