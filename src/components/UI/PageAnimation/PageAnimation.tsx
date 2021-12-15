import { motion } from "framer-motion"

interface IPageAnimation {
    children: JSX.Element | JSX.Element[]
}

export const PageAnimation = ( { children }:IPageAnimation ) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex flex-col md:items-center"
        >
            { children }
        </motion.div>
    )
}
