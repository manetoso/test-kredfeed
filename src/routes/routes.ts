import { lazy, LazyExoticComponent } from "react";
type JSXComponent = () => JSX.Element

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const Form = lazy( () => import( /* webpackChunkName: "Form" */ '../pages/Form') );
const Home = lazy( () => import( /* webpackChunkName: "Home" */ '../pages/Home') );
const CapturedData = lazy( () => import( /* webpackChunkName: "Results" */ '../pages/CapturedData') );

export const routes: Route[] = [
    {
        to: '/home',
        path: 'home',
        Component: Home,
        name: 'Inicio'
    },
    {
        to: '/form',
        path: 'form',
        Component: Form,
        name: 'Formulario'
    },
    {
        to: '/capturedData',
        path: 'capturedData',
        Component: CapturedData,
        name: 'Datos Capturados'
    },
]