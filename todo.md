//TODO: Perfil de profesional (cambio de fondo, colores)
//TODO: Marketplace: Sistema de Filtros
//TODO: Registro [Subir imagen del usuario]

//TODO: Rehacer el navbar teniendo en cuenta modificación de datos

- En el header no deberían figurar los links a los que no debería tener acceso. Como en el desplegable del usuario, los links de "Perfil" y "Cerrar Sesión" si no estoy autenticado. Solo si está autenticado. Lo mismo los liks de "Mis Planificaciones", "Admin" y "Crear".

* //TODO: Finalizar el menu de navegación y el ocultado de links

- Luego de la autenticación, no se ven los datos del usuario autenticado en ningún lado.

//TODO: Perfil normal: Editar datos

Correciones de un simple dios:

- Faltan mensajes de feedback. Tanto para los casos de éxito, como especialmente también para los casos de error.

* //TODO: Implementar en perfil, y profesionales

-- [Mis Planificaciones] si el usuario no tiene planificaciones, tira un error la petición de ajax, y no muestra una página. Debería simplemente informar que no hay planificaciones cargadas, e incitar al usuario a cargar la primera.

- //TODO: revisar

-- [Mis planificaciones] no funciona, al menos no con usuarios que no tuvieran previamente planificaciones. Probé de crear una con uno de los admins provistos en el [datos.txt]. Dijo la consola que funcionó (pero no la web, al no haber feedback). Y al ir a "Mis planificaciones" tira un error React de que "Planificaciones2.map" no es una función.

- //TODO: revisar

* Hay páginas que no tienen <h1>. Todo documento debería siempre tener un <h1>, preferentemente solo uno, que contenga de qué se trata el documento en cuestión, y desde el cual luego van desprendiendo los siguientes niveles. Los <h\*> marcan encabezados de secciones con distintos niveles de jerarquía. El <h1> es el encabezado central que dice de qué se trata el documento. Los <h2> son las subsecciones de contenido que se desprenden de ese <h1>. Los <h3> son las subsecciones de contenido del <h2> que los precede, etc. No deberían tampoco saltearse niveles de encabezados si puede evitarse. Esto es muy importante para accesibilidad ( https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements ). - Código desprolijo: Algunos "modelos" en el back empiezan con la primera letra mayúscula, y otros minúscula.
