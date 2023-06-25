import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';


const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data)

    return (
        <div className='container mx-auto py-24'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-16">
                <div className="border rounded-xl p-4">
                    <h4 className='text-xl font-bold'>New Customer?</h4>
                    <p>By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.</p>
                    <Link to='/register'>
                        <button className="btn btn-success">Create Account</button>

                    </Link>
                </div>
                <div className="border rounded-xl p-4">
                    <h4 className='text-xl font-bold'>Login</h4>
                    <p>If you have an account, please log in.

                    </p>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="email" placeholder="Type your email" className="input input-bordered input-success w-full max-w-xs mb-3" required
                            {...register("email")}
                        />
                        <br />
                        <input type="password" placeholder="Type your password" className="input input-bordered input-success w-full max-w-xs" required
                            {...register("password")}
                        />
                        <br />
                        <br />
                        <div className="text-center">                    <button type='submit' className="btn btn-success">Login</button>
                        </div>
                    </form>

                    <SocialLogin />
                </div>
                <div className=""></div>

            </div>

        </div>
    );
};

export default Login; 