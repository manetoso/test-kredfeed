import { motion } from "framer-motion"

interface ICard {
    title: string
    isDone: boolean
    setDone: () => void
    unsetDone: () => void
}

export const Card = ( { title, isDone, setDone, unsetDone }:ICard ) => {
    return (
        <div
            className='
            bg-stone-100 p-5
            flex flex-col justify-between
            rounded-lg shadow-lg shadow-stone-400
            md:w-56
            lg:w-60
        '>
            <div>
                <h2 >{ title }</h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity:0 }}
                    transition={{ duration: 0.7, ease: 'backIn' }}
                    className='text-base text-stone-500 mb-10
                '>
                    { isDone ? 'Realizada' : 'Pendiente' }
                </motion.p>
            </div>
            <div
                className="
                flex flex-col-reverse space-y-2
                md:space-y-0 md:flex-row-reverse justify-between
                font-normal text-base
            ">
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity:0 }}
                    transition={{ duration: 0.7, ease: 'backIn' }}
                    onClick={ unsetDone }
                    className='
                    bg-transparent px-2 py-1 rounded-md
                    border border-transparent
                    text-stone-600 hover:border-stone-600
                    transition ease-in-out duration-300
                '>
                    Eliminar
                </motion.button>
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity:0 }}
                    transition={{ duration: 0.7, ease: 'backIn' }}
                    onClick={ setDone }
                    className={`
                    bg-stone-600 px-2 py-1 rounded-md 
                    text-white filter hover:brightness-125
                    transition ease-in-out duration-300
                    ${isDone && 'hidden'}
                `}>
                    Realizar
                </motion.button>
            </div>
        </div>
    )
}
