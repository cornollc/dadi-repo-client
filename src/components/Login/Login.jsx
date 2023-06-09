import React, { useContext, useState } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {


    const { signIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location);

    const from = location?.state?.from?.pathname || '/';



    const handelLogin = event => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;


        signIn(email, password)
            .then(result => {
                const logUser = result.user;
                console.log(logUser)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring ring-2 ring-purple-600 lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 underline uppercase decoration-wavy">
                    Login
                </h1>
                <Form onSubmit={handelLogin} className="mt-6">
                    <div className="mb-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name='email'
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            name='password'
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <a
                        href="#"
                        className="text-xs text-purple-600 hover:underline"
                    >
                        Forget Password?
                    </a>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Login
                        </button>
                    </div>
                </Form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">

                    Don't have an account?
                    <Link
                        className="font-medium text-purple-600 hover:underline"
                        to='/register'
                    >
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;