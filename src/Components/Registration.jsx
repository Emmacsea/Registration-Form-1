import { useState } from "react";
import PropTypes from 'prop-types';
import { FaGoogle } from 'react-icons/fa';

export const Registration = ({
    name,
    emailaddress,
    password,
    confirmpassword,
    onChangeName,
    onChangeEmailaddress,
    onChangePassword,
    onChangeConfirmPassword,
    onSubmitDetails,
}) => {
    const [error, setError] = useState({});


    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }


    const handleDetails = (e) => {
        e.preventDefault();
        const newError = {};


        if(!name) newError.name = `This field cannot be empty`;
        if(!emailaddress || !validateEmail(emailaddress)) newError.emailaddress = `Please provide a valid email address`;
        if(!password) newError.password = `Provide a strong password`;
        if(!confirmpassword) newError.confirmpassword = `Provide the same password as the above`;
        if(confirmpassword !== password) newError.confirmpassword = `Password do not match`;


        setError(newError);
        if(Object.keys(newError).length === 0){
            onSubmitDetails();
        }


    }

    return (
        <div className="h-screen bg-slate-200 w-full font-body">
            <div className="flex  h-full w-full">
                <div className="bg-left-image bg-cover bg-center w-1/2 h-full text-neutral-white px-20 flex flex-col justify-center items-start space-y-40">
                    <h2 className="text-5xl font-bold "><a href="/">abc.com</a></h2>

                    <p className="text-2xl font-medium ">
                        abc.com is the best place to find remote talent. 
                        We&apos;ve been super impress by the quality of applicants.
                    </p>


                    <div className="flex flex-col space-y-2 mt-24">
                        <h4 className="text-base font-normal">Madhushan sasanka</h4>
                        <p className="text-xs font-normal">CEO, abc.com</p>
                    </div>
                    
                </div>

                <div className="flex flex-col w-1/2 py-14 px-28">
                    <div className="space-y-1">
                        <h2 className="text-black text-xl font-bold">
                            Create an account
                        </h2>
                        <p className="text-neutral-lightgrey text-base font-medium">
                            Let&apos;s get started with your 30 days free trial.
                        </p>
                    </div>

                    <form action="" onSubmit={handleDetails}  method="get">
                        <div className="flex flex-col justify-start mt-4">
                            <div className="flex flex-col">
                                <label className="lab" htmlFor="">Name</label>
                                <input className="inp" type="text" value={name} onChange={onChangeName} />
                                {error.name && (<p className="text-red-400 text-sm font-medium">{error.name}</p>)}
                            </div>
                            <div className="flex flex-col">
                                <label className="lab" htmlFor="">Email</label>
                                <input className="inp" type="text" value={emailaddress} onChange={onChangeEmailaddress} />
                                {error.emailaddress && (<p className="text-red-400 text-sm font-medium">{error.emailaddress}</p>)}
                            </div>
                            <div className="flex flex-col">
                                <label className="lab" htmlFor="">Password</label>
                                <input className="inp" type="password" value={password} onChange={onChangePassword} />
                                {error.password && (<p className="text-red-400 text-sm font-medium">{error.password}</p>)}
                            </div>
                            <div className="flex flex-col">
                                <label className="lab" htmlFor="">Confirm Password</label>
                                <input className="inp" type="password" value={confirmpassword} onChange={onChangeConfirmPassword} />
                                {error.confirmpassword && (<p className="text-red-400 text-sm font-medium">{error.confirmpassword}</p>)}
                            </div>
                        </div>

                        <div className="mt-9 space-y-4 ">
                            <button className="btn" type="submit">Create Account</button>
                            <a className="bg-transparent w-full text-black border-2 border-neutral-lightgrey flex justify-center items-center gap-3 rounded-lg py-2" href="http://www.google.com" target="_blank" rel="noopener noreferrer">
                                <FaGoogle className="text-black text-base font-bold"/>
                                <p className="text-gray-950 text-base font-bold">Sign up with Google</p>
                            </a>
                        </div>


                        <div className="mt-14 flex items-center justify-center">
                            <p className="text-gray-800 text-xs font-normal flex items-center gap-2">Already have an account? <span className="text-cyan-300"> Sign In</span></p>

                        </div>

                        
                    </form>                    

                </div>

            </div>

        </div>
    )
}
Registration.propTypes = {
    name: PropTypes.string.isRequired,
    emailaddress: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    confirmpassword: PropTypes.string.isRequired,
    onChangeName: PropTypes.func.isRequired,
    onChangeEmailaddress: PropTypes.func.isRequired,
    onChangePassword: PropTypes.func.isRequired,
    onChangeConfirmPassword: PropTypes.func.isRequired,
    onSubmitDetails: PropTypes.func.isRequired,
}