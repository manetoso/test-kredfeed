import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { NavegationTransitions } from "./NavegationTransitions";
import { routes } from "./routes";

export const Navigation = () => {
    return (
        <Suspense fallback={<span className="bg-stone-300 w-screen h-screen">Loading...</span>}>
            <BrowserRouter>
                <div className="min-h-screen flex flex-col lg:flex-row bg-stone-300">
                    <nav
                        className="
                        bg-stone-400 lg:min-h-screen
                        p-5
                        leading-tight
                        lg:p-10
                    ">
                        <h2 className="hidden lg:flex text-slate-900 text-2xl font-bold tracking-tighter">
                            KredFeed
                        </h2>
                        <ul
                            className="
                            lg:mt-5
                            flex flex-row space-x-6 lg:space-y-2
                            lg:flex-col lg:space-x-0
                        ">
                            {
                                routes.map( ( { to, name }, index ) => (
                                    <li key={ index }>
                                        <NavLink
                                            to={ to }
                                            className={ ({ isActive }) => isActive ? 'font-semibold text-white' : 'font-semibold' }
                                        >
                                            { name }
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                    <main className="m-5 lg:m-10 md:w-full">
                        <NavegationTransitions />
                    </main>
                </div>
            </BrowserRouter>
        </Suspense>
    )
}
