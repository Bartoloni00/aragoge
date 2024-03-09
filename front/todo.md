//TODO: Perfil de profesional (cambio de fondo, colores)
//TODO: Marketplace: Sistema de Filtros
//TODO: Registro [Subir imagen del usuario]
//TODO: cuando el profesional crea una planificación se le asigna a otro
//TODO: fallo en planificaciones de tipo bodybulding y halterofilia
//TODO: fallo con las imagenes, falta el subir imagen
//TODO: fallo con el select de perfil, marca siempre atleta cuando puede ser profesional
//TODO: añadir un btn en register y login para ir a la home

//TODO: Rehacer el navbar teniendo en cuenta modificación de datos

- En el header no deberían figurar los links a los que no debería tener acceso. Como en el desplegable del usuario, los links de "Perfil" y "Cerrar Sesión" si no estoy autenticado. Solo si está autenticado. Lo mismo los liks de "Mis Planificaciones", "Admin" y "Crear".

* //TODO: Finalizar el menu de navegación y el ocultado de links

- Luego de la autenticación, no se ven los datos del usuario autenticado en ningún lado.

Correciones de un simple dios:

-- [Mis Planificaciones] si el usuario no tiene planificaciones, tira un error la petición de ajax, y no muestra una página. Debería simplemente informar que no hay planificaciones cargadas, e incitar al usuario a cargar la primera.

- //TODO: revisar

-- [Mis planificaciones] no funciona, al menos no con usuarios que no tuvieran previamente planificaciones. Probé de crear una con uno de los admins provistos en el [datos.txt]. Dijo la consola que funcionó (pero no la web, al no haber feedback). Y al ir a "Mis planificaciones" tira un error React de que "Planificaciones2.map" no es una función.

- //TODO: revisar

* Hay páginas que no tienen <h1>. Todo documento debería siempre tener un <h1>, preferentemente solo uno, que contenga de qué se trata el documento en cuestión, y desde el cual luego van desprendiendo los siguientes niveles. Los <h\*> marcan encabezados de secciones con distintos niveles de jerarquía. El <h1> es el encabezado central que dice de qué se trata el documento. Los <h2> son las subsecciones de contenido que se desprenden de ese <h1>. Los <h3> son las subsecciones de contenido del <h2> que los precede, etc. No deberían tampoco saltearse niveles de encabezados si puede evitarse. Esto es muy importante para accesibilidad ( https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements ). - Código desprolijo: Algunos "modelos" en el back empiezan con la primera letra mayúscula, y otros minúscula.

1. Clonar el repositorio de github
2. Ponerlo descomprimido en una carpeta vacia
3. agarrar el .env y tirarlo en la carpeta back
4. hacer npm i en el front, en el back por separados
5. hacer npm run dev en el front y npm run dev1 en el back
6. ir al url que te da el front en la consola despues de haber hecho el npm run dev
7. ir al login que se encuentra en el dropdown del perfil
8. ingresar credenciales

1- Tranquilo explicar en estructura
2- Nos presentamos
3- Problematica que soluciona la app
4- de que trata (nombre, identidad, promoción, merchandaising, icono grafico, que denota, conota la paleta, mostrar el lanzamiento)
5- recorrido de la funcionalidad / flujo del sitio
6- que funcionalidades nos comprometemos a realizar en la tesis, nadie se olvida y lo tenemos que cumplir ya que queda anotado
7- como validar tal cosa, como impedir que un usuario haga algo muchas veces, estrategias para afrontar problemas
