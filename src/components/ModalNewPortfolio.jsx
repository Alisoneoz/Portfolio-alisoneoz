import React from 'react'
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import "./modal.css"


const ModalNewPortfolio = ({ closeModal }) => {

    return (
        <div className='fixed modal-bg flex items-center justify-center  h-screen w-screen'>
            <div className="modal-container px-6 py-6 bg-stone-100 rounded-lg  mx-auto max-w-fit h-fit shadow-2xl dark:bg-fuchsia-800/90 flex justify-center items-center">
                <div className="flex flex-col  mx-auto text-center items-center justify-center">
                    <h2 className='p-2 h-1/2 text-lg sm:text-xl font-bold text-center mt-2 mb-1 max-w-full max-h-full'>✨ Explore My New Portfolio! ✨</h2> <p className='w-5/6 xl:w-1/3 mb-3'>Check out my updated portfolio to see the refreshed layout and new projects.<b> Click on the button below to explore!</b></p>
                    <div className='animate-bounce w-6 h-6 my-2 rounded-lg shadow-2xl dark:bg-zinc-200/4 flex flex-col justify-center text-center items-center'><FaRegArrowAltCircleDown /></div>
                  
                    <button className="px-9 py-2 font-bold mx-auto flex justify-center  bg-fuchsia-700 rounded-3xl hover:text-xl dark:bg-purple-900 dark:shadow-lg dark:shadow-indigo-500/50 text-stone-100">
                        <a href='https://portfolio.alisonestephany.com/'>Let's go to the New Porfolio!</a>
                    </button>
                </div>
                <button onClick={() => { closeModal(false) }} className="button">x</button>
            </div>

        </div>
    )
}

export default ModalNewPortfolio