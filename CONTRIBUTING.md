# Para poner en marcha este proyecto en tu máquina local, sigue estos pasos:
1. Clona el repositorio: git clone [https://github.com/Bartoloni00/aragoge.git]
2. Navega hasta el directorio del proyecto:
``` Bash
cd aragoge
```
## Instala todas las dependencias del proyecto (requiere tener instalado Node en versiones superiores a la 18):
3. Ingresa desde la consola desde la carpeta back y realiza los siguientes comandos:
``` bash
cd back
npm i
```
4. Realiza el mismo proceso pero ahora instalando las dependencias del frontend:
``` bash
cd ../front
npm i
```
5. es muy importante tener el archivo [.env] del back con sus credenciales (el archivo [.env.example]) posee algunos ejemplos.
## Iniciar proyecto:
6. Para iniciar el backend posicionate en la carpeta back y ejecuta el siguiente comando:
- En caso de que no tengas pensado realizar cambios muy seguido en el back recomiendo usar este comando:
``` Bash
npm run dev1
```
- Si estaras realizando constantes modificaciones al backend utiliza este otro:
``` Bash
npm run dev
```
7. Para iniciar el frontend posicionate en la carpeta front y ejecuta el siguiente comando:
``` Bash
npm run dev
```