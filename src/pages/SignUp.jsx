import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function SignUp() {
        const { register, handleSubmit, formState: { errors } } = useForm();
        const onSubmit = data => console.log(data);
        console.log(errors);

          return (
            <div className="flex justify-center items-center h-[70vh] font-second">
                <div className="max-w-2xl w-full rounded-xl p-20">
                        <div className='flex justify-center mb-11 text-2xl'>
                            <h3>CREATE ACCOUNT</h3>
                        </div>
                    <form  className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex justify-between'>
                        <div className='pr-16'>
                            <label htmlFor="firstName" >First Name</label>
                            <input type="text" {...register("First Name", {required: true, maxLength: 20})} className="border-bottom border-[black]" />
                        </div>
                        <div className='pl-16'>
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" {...register("Last Name", {required: true, maxLength: 20})} className="border-bottom border-[black]" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" >Email</label>
                        <input type="email" {...register("Email", {required: true, min: 0, maxLength: 20, pattern: /^\S+@\S+$/i})} className="border-bottom w-[100%] border-[black]"/>
                    </div>

                    <div>
                        <label htmlFor="password" >Password</label>
                        <input type="password" {...register("Password", {required: true, maxLength: 15})} className="border-bottom w-[100%] border-[black]"/>    
                    </div>
                    <div className='flex mt-4'>
                       <button type="submit" className="text-white text-sm w-[25%] h-12 bg-[black] ">CREATE</button>
                        <div className='pl-6 mt-4 text-sm'>
                            <Link to="/">
                              <button>RETURN TO STORE</button>
                            </Link>
                        </div>
                     </div>
            
                    </form>
                </div>
            </div>
          );
 }

export default SignUp;