import { AnimatePresence } from "framer-motion"
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { routes } from './routes';

export const NavegationTransitions = () => {
    const location = useLocation()
    return (
        <>
            <AnimatePresence exitBeforeEnter initial={true}>
                    <Routes location={ location } key={ location.pathname }>
                        {
                            routes.map( ({ path, Component }) => (
                                <Route key={ path } path={ path } element={ <Component /> } />
                            ))
                        }
                        <Route path="/*" element={ <Navigate to={ routes[0].to } replace /> } />
                    </Routes>
            </AnimatePresence>
        </>
    )
}