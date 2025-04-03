<p align="center">
  <img src="src/assets/logo.png" alt="Random Resort" /><br />
</p>


## Generar la Base de Datos 🏃

Antes de ejecutar la aplicación, necesitarás generar la base de datos:

1. **Generar la base de datos**: Ejecuta `npm run generate-db` en tu terminal. Esto ejecutará el script `generate-hotels-db.js` para generar el archivo `db.json` con datos aleatorios de hoteles.

## Ejecutar la Aplicación 🚀

- Ejecuta `npm run start` para iniciar el servidor de desarrollo de Angular. La aplicación estará disponible en `http://localhost:4200`. Así mismo, al levantar la aplicación, también se iniciará `json-server`, que servirá la API en `http://localhost:3000/hotels`.

## Enlaces de Interés 💡

- **Novedades de Angular**: Para conocer las últimas funcionalidades y mejoras introducidas en Angular en sus últimas versiones, puedes visitar el [blog oficial de Angular](https://blog.angular.io/).

- **faker-js**: Hemos utilizado `faker-js` para generar datos falsos de hoteles de manera sencilla. Es muy útil para el desarrollo y pruebas de aplicaciones. Puedes encontrar más información y la documentación en el [repositorio de GitHub de faker-js](https://github.com/faker-js/faker).

- **json-server**: Hemos utilizado `json-server` para generar de una manera rápida un servidor REST API completo con operaciones CRUD a partir de un archivo JSON. Es útil para mockear APIs durante el desarrollo de aplicaciones frontend. Para más detalles, visita el [repositorio de GitHub de json-server](https://github.com/typicode/json-server).
