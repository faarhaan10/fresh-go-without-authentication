import React from 'react';
import { Link } from 'react-router-dom';

const allRoutes = [
    'fresh',
    'dry',
    'exotic'

]
const NavBar = () => {
    const user = {}
    return (
        <div className='container mx-auto'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                {
                                    allRoutes.map(route => <Link
                                        key={route}
                                        to={route}
                                    >
                                        {route.toUpperCase()}
                                    </Link>)
                                }
                            </li>


                        </ul>
                    </div>
                    <div>
                        <Link to=''>
                            <img src="https://cdn.shopify.com/s/files/1/0583/0564/2689/files/Group_666_180x@2x.png?v=1647861874" alt="" />
                        </Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            allRoutes.map(route => <li key={route}>
                                <Link to={'/' + route} >
                                    {route.toUpperCase()}
                                </Link></li>)
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {user?.email ? <div>
                        <Link to='/login' className="btn">Login</Link>
                    </div>
                        :
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>}
                </div>
            </div>
        </div>
    );
};

export default NavBar;