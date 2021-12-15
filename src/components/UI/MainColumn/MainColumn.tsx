import { motion } from "framer-motion"

interface IMainColumn {
    children: JSX.Element | JSX.Element[]
    cancelFunc?: () => void
    showResults?: boolean
}

export const MainColumn = ( { children, cancelFunc, showResults }:IMainColumn ) => {
    return (
        <>
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className={`
                p-3
                flex flex-col
                text-slate-900 font-bold text-xl leading-relaxed lg:leading-loose
                ${ !showResults && 'space-y-4' }
                ${ !showResults && 'md:w-[700px]' }
                overflow-y-auto
                overflow-x-hidden
                max-h-[650px]
                lg:max-h-[850px]
                ${ showResults &&
                    'md:grid md:grid-cols-2 xl:grid-cols-4 gap-4'
                }
            `}>
                { children }
                {
                    cancelFunc &&
                        <button
                            onClick={ cancelFunc }
                            className="
                            bg-transparent px-2 py-1 rounded-md
                            border border-transparent
                            text-stone-600 hover:border-stone-600
                            transition ease-in-out duration-300
                        ">
                            Cancelar
                        </button>
                }
            </motion.section>
        </>
    )
}
