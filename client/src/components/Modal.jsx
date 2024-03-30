import React, { useRef, useEffect } from 'react';

const Modal = ({ isOpen, onClose }) => {
    const modalRef = useRef();

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        }
    }, [isOpen]);

    return (
        <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isOpen ? "" : "hidden"}`}>
            <div ref={modalRef} className='bg-indigo-900 text-center p-5 h-96 lg:w-[500px] rounded shadow-md'>
                {/* modal content */}
                <h1 className='text-xl font-semibold mt-6 mb-5 uppercase'>Please Login Here!</h1>
                <form className='px-4'>
                    <div className='mb-5'>
                        <input type='email' name='email' id='' placeholder='example@xyz.com' className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[$6a64f1] focus:shadow-md' />
                    </div>
                    <div className='mb-5'>
                        <input type='password' name='password' id='password' placeholder='Enter Your Password' className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[$6a64f1] focus:shadow-md' />
                    </div>
                    <div>
                        <button className='hover:shadow-md rounded-md bg-blue-500 hover:bg-blue-600 py-3 px-8 text-base font-semibold text-white outline-none'>Login</button>
                    </div>
                </form>
                <button onClick={onClose} className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center mt-5'>Close</button>
            </div>
        </div>
    );
};

export default Modal;
