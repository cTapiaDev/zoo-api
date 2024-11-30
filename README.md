# Zoo API

__Zoo API__ es una aplicación desarrollada en Node.js usando Express. Ofrece información sobre animales pertenecientes a un Zoológico en formato JSON. Los usuarios pueden consultar una lista de doce animales y obtener detalles específicos de cada uno usando su ID.

- - -
- - -
## Rutas en producción
- https://zoo-api.vercel.app/es/animales - Lista de animales (Español)
- https://zoo-api.vercel.app/es/animales/1 - Ejemplo de un animal con ID 1 (Español)
- - -
- - -

# Características
- Devuelve una lista de animales de un zoológico.
- Proporciona información detallada sobre cada uno de los animales basada en el ID.
- Desplegado en Vercel para acceso fácil y gratuito.

## Endpoints disponibles
- __GET /es/animales__ - Devuelve una lista de animales.
- __GET /es/animales/id__ - Devuelve información detallada sobre un animal en específico.

- - -
- - -

## Instalación y ejecución local
Sigue estos pasos para clonar el repositorio y ejecutar la aplicación de tu máquina local:

### 1. Clonar el repositorio
```
git clone https://github.com/cTapiaDev/zoo-api.git
cd zoo-api
```

### 2. Instalar dependencias
Asegúrate de tener Node.js instalado en tu sistemas. Luego instala las dependencias necesarias:
```
npm install
```

### 3. Ejecutar API localmente
Inicia el servidor ejecutando el siguiente comando:
```
node index.js
```
Esto iniciará la API en http://localhost:3000
- http://localhost:3000/es/animales - Lista de animales.
- http://localhost:3000/es/animales/id - Información detallada de un animal.

### 4. Pruebas de los endpoints
Puedes probar los endpoints utilizando herramientas como Postman o directamente desde el navegador, según las rutas configuradas en la API.
- - -
- - -

## Contribuciones
Las contribuciones son bienvenidas. Si deseas mejorar la API o añadir nuevas funcionalidades, por favor realizar un __fork__ del repositorio y envía un __pull request__.

1. Haz un fork del proyecto.
2. Crea una rama con tus cambios: `git checkout -b feature/nueva-funcionalidad`
3. Realiza un commit de tus cambios: `git commit -m 'Añadida nueva funcionalidad'`
4. Sube la rama: `git push origin feature/nueva-funcionalidad`
5. Abre un __pull request__.
- - -
- - -

## Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](./LICENSE) para más detalles.
