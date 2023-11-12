# Aragoge
Proyecto final de la carrera de Diseño y programacion Web de Escuela Da Vinci. Es un marketplace de servicios para atletas de alto rendimiento.

## Estructura de Carpetas/Archivos
La estructura de carpetas del Back-end utiliza es Patron de diseño MVC (Modelo Vista Controlador).

## Rutas
Las rutas estan separadas en diferentes archivos pero todas terminan siendo utilizadas en el archivo [/routes/usersRouters.js] el cual se encarga de unificar todas las rutas en el userRoutes y luego importado en el index.js del back.

## Carpeta endpoints y api/endpoints
Esta carpeta contiene archivos .http, estan separadas al igual que los archivos de rutas y contienen cada uno de los endpoints del proyecto.
Si utilizas la extencion de Visual Studio Code: **Rest Client** podras llamas directamente a los endpoints desde esos archivos.

## Carpeta examples_nosql
Esta carpeta tiene ejemplos de las collecciones que encontraremos en la base de datos de MongoDB. (tambien puede servir como seeders/ datos iniciales de ejemplo)
