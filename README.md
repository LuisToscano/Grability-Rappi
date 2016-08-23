
Prueba técnica para desarrollo Front-End Grability Rappi.

************************************************ Enunciado ***********************************************

Adjunto a este documento encontraras un gif llamado “test_ui.gif”. Este gif contiene la especificación general de la interacción y las animaciones a desarrollar.

La interfaz a construir es para una pequeña aplicación de feed de noticias. Los datos de las noticias están representados en el archivo adjunto news_mock.json.

Requisitos:

• La carga de los datos de noticias se deben hacer simulando la petición a un API externo de forma que los datos contenidos en news_mock.json puedan ser reemplazados de forma fácil por la llamada a un API que funcione sobre http, para evaluar este punto debes proveer una configuración que permita el cambio entre usar el archivo de prueba o una url real que retornara datos en el mismo formato del archivo ( al evaluar la prueba, ingresaremos la url en la configuración según tus instrucciones y esperaremos que la aplicación simplemente siga funcionando ).

• Los estilos generales deberán seguir los lineamientos mostrados en el gif adjunto pero te animamos a darle vida a la interfaz con tu propia creatividad y experiencia; por ejemplo, añadiendo una animación de carga mientras se solicita la información de noticias.

• La aplicación debe adaptarse a distintos tamaños de dispositivos (responsiva para tablets, smartphones y desktop).

• La aplicación deberá soportar las ultimas versiones de Firefox y Chrome y la experiencia entre los dos navegadores debe ser consistente.

*********************************************** Herramientas utilizadas *************************************************

AngularJS, SASS, npm, bower

************************************************ Para tener en cuenta ****************************************************

1. El valor de la URL para retornar news_mock.json debe ser asignado en el archivo:

'app/factories/constants.factory.js' modificando el valor 'newsProvider.url'

Si no se cambia, continuará apuntando a la carpeta 'app/data/news_mock.json'

2. Ya que el gif no especificaba cual información debía aparecer en el header al abrir una noticia, se ha implementado un generador de fechas automático para ubicar esta información en el espacio disponible.

********************************************* Instalación y Visualización ****************************************************

1. Ejecutar el comando npm install en el directorio raiz del proyecto.

o Descomprimir el archivo Prueba Grability Rappi Full.zip

2. Abrir index.html
