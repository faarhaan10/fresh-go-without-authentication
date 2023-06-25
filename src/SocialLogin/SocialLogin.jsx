import React from 'react';

const SocialLogin = () => {
    return (
        <div>
            <br />
            <hr />
            <div className="text-center text-xl">
                <h1 className=''>Login with</h1>

            </div>
            <div className="flex justify-around">
                <button className="btn btn-info">Google</button>
                <button className="btn btn-info">GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogin;