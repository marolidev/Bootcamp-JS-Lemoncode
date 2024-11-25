# Laboratorio módulo 0
## 1. Crear un repositorio en local

### Abre tu terminal y navega hasta el directorio donde deseas crear el repositorio. Crea una carpeta con el nombre del repositorio. Ingresa a la carpeta que acabas de crear.
Primero, se crea la carpeta donde se va a trabajar, después con cd se cambia el directorio a esa carpeta.

### Inicializa el repositorio de Git. 
Con git init se inicializa el repositorio en la carpeta de trabajo.
```
git init
```
## 2. Subir el repositorio a GitHub

Crea un nuevo repositorio en GitHub. 
Copia el URL del repositorio que acabas de crear en GitHub.
Conecta tu repositorio local con el repositorio en GitHub.
```
git remote add origin git@github.com:marolidev/Bootcamp-JS-Lemoncode.git
```
Verifica que la conexión se haya establecido correctamente.
```
$ git remote -v
origin  git@github.com:marolidev/Bootcamp-JS-Lemoncode.git (fetch)
origin  git@github.com:marolidev/Bootcamp-JS-Lemoncode.git (push)
```
## 3. Hacer un commit y un push
### Crea un archivo en la carpeta del repositorio.
Se crea un archivo llamado index.html
### Añade el archivo al staging.
```
git add .
```
### Crea un commit con un mensaje descriptivo.
```
git commit -m "Primer mensaje"

[master (root-commit) 8b425d2] Primer mensaje
 2 files changed, 5 insertions(+)
 create mode 100644 index.html
 create mode 100644 readme.md
```
### Sube los cambios al repositorio en GitHub.
```
git push
```
## 5. Hacer un merge

### Vuelve a la rama "main".
```
git checkout master
```

### Haz un merge de la rama "development" a la rama "main".
```
git merge development
```
Si no hay conflictos, los cambios realizados en la rama "development" se incorporarán a la rama "main".

Hax un push de los cambios al repositorio en GitHub.
```
git push
```
