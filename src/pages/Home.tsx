import {
    PageAnimation,
    MainColumn,
    Highlighter
} from "../components/UI"

export const Home = () => {
    return (
        <>
            <PageAnimation>
                <MainColumn>
                    <p>
                        Esta es una demo sencilla sobre manejo de formularios para la 
                        compañia <Highlighter>KredFeed</Highlighter> como parte de una prueba técnica 
                        realizada por el <Highlighter>Desarrollador Emmanuel Cortes Tovar</Highlighter>.
                    </p>
                    <p>
                        Para llenar un formulario haga click en la 
                        sección <Highlighter>Formulario</Highlighter> del menú de navegación.
                    </p>
                    <p>
                        Si desea ver la información almacenada en el <Highlighter>LocalStorage</Highlighter> puede
                        hacer click en la opción <Highlighter>Datos Capturados</Highlighter> en el menú de 
                        navegación.
                    </p>
                </MainColumn>
            </PageAnimation>
        </>
    )
}

export default Home