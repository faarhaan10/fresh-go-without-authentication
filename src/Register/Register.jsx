import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data)
    return (
        <div className='container mx-auto flex justify-center py-26'>
            <div className="w-full  md:w-96 border rounded-xl p-4 my-28">
                <h4 className='text-xl font-bold'>Create Account</h4>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="Type your Name" className="input input-bordered input-success w-full max-w-xs mb-3" required
                        {...register("name")}
                    />
                    <input type="email" placeholder="Type your email" className="input input-bordered input-success w-full max-w-xs mb-3" required
                        {...register("email")}
                    />
                    <br />
                    <input type="password" placeholder="Type your password" className="input input-bordered input-success w-full max-w-xs" required
                        {...register("password")}
                    />
                    <span>Already hava an account? <Link to='/login'>sign-in</Link></span>
                    <br />
                    <br />
                    <div className="text-center">                    <button type='submit' className="btn btn-success">Submit</button>
                    </div>
                </form>
                <SocialLogin />
            </div>
        </div>
    );
};

export default Register;