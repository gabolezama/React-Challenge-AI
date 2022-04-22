## 2.1) ¿Cómo implementarías las acciones del frontend utilizando redux? ##
Se podría utilizar redux para ejecutar la funcion asíncrona de llamada a la API en el Login, y almacenar en un estado global el token generado, puesto que es un dato necesario para las consultas y debe ser de facil acceso para cualquier componente que lo requiera en nuestra app. También debería almacenarse la lista de clientes obtenidas tras el legueo, puesto que es un dato que debaría consultarse por unica vez para evitar sobrecargar el front con muchas llamadas asíncronas.

## 2.2) Si quisiéramos agregar una ruta nueva a la app, ¿cómo reestructurarías el index.js? ##
De hecho realicé una modificación en la raíz de la app para incluir un BrowserRouter de React para establecer dos pantallas: Login y Bots. Para agregar/ trabajar con rutas que direccionan a otros componente de nuestra app, para mí es práctico utilizar dicho componente, el cual provee de métodos de contexto que permiten acciones de navegación y paso de parámetros, en este caso, por cuestiones prácticas, paso el token como un url param y los capturo con el hook useParams. Esto claramente puede optimizarse utilizando redux o context aunque llevaría algo más de trabajo y tiempo.