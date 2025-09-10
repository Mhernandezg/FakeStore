# FakeStore

Proyecto pensado para el uso de TypeScript en React.

El manejo que se brindo al proyecto tuvo dos inconsistencias.

1. La api no facilitaba un control de paginas por lo que no permitia un control optimo de recursos.
2. La api no contaba con un endpoint enfocado en busqueda y filtros de contenido.

Debido a esto se expresa que este aplicativo establece un contexto global de los datos obtenidos via APi de todos los productos lo cual en un contexto profesional no es optimo. Ya que implica que el control de paginacion y filtros de busqueda de los productos se trabajaban del lado del cliente.

Por esto mismo en aspectos de buenas practicas de codigo se establecio el uso de useMemo en el contexto del aplicativo para guardar en memoria el estado de dichas peticiones optimizando la navegabilidad entre los productos aplicando una buena practica frente al renderizado del aplicativo.

Se establecio un control de rutas con "react-router" lo que facilito el control de recursos segun las rutas que se visiten. Lo que impide cargar paginas sin contenido o su correspondiente fallBack en 404.

Para un control correcto del aplicativo se establecio una funcion que accede a useProductContext para una mayor legibilidad y control de codigo frente a los estados que se establecen en el useContext del aplicativo. (products, categories, loading, error, loadProducts, loadCategories)

Por ultimo la documentacion consultada que ha servido de apoyo para el proyecto es la siguiente:

- Documentacion:
https://create-react-app.dev/docs/adding-typescript/
https://reactrouter.com/start/framework/routing
https://react.dev/reference/react/useReducer
https://react.dev/reference/react/useContext
https://tailwindcss.com/plus/ui-blocks/ecommerce/page-examples/storefront-pages
https://thiraphat-ps-dev.medium.com/types-of-organization-folder-structures-in-react-typescript-projects-942556f0633b
https://flowbite.com/docs/components/skeleton/
https://caniuse.com/?search=-webkit-line-clamp
https://github.com/tailwindlabs/heroicons
https://tailwindcss.com/plus/ui-blocks/ecommerce/components/product-overviews

- API:
https://www.postman.com/postman/flows-snippets/request/mbhh1na/all-products?tab=overview
https://github.com/keikaavousi/fake-store-api/blob/master/README.md

- Video apoyo:
https://www.youtube.com/watch?v=JMn_yIVl8eo&ab_channel=PedroTech
https://www.youtube.com/watch?v=05ZM4ymK9Nc&ab_channel=DaveGray

- Errores:
https://github.com/remix-run/react-router/issues/13516
https://github.com/remix-run/react-router/issues/12753


Pasos a seguir:

- Implementacion de carrito de compras estableciendo una manera controlada de manejar el contexto del aplicativo.

- Consultar apis externas que faciliten la correcta estructura de un aplicativo front. Para consultas via api de busqueda por filtros y por paginacion u offset.