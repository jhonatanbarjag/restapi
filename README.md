🚀 Backend API – Node.js & MongoDB

Este proyecto es una API RESTful backend desarrollada con Node.js y Express, utilizando MongoDB como base de datos.
Las pruebas y validaciones de los endpoints se realizaron exclusivamente mediante Postman (no incluye frontend).


🧱 Arquitectura del Proyecto

El proyecto sigue una arquitectura modular y escalable, separando responsabilidades para facilitar el mantenimiento y crecimiento del sistema.

```
src/
├── config/        # Configuración general (DB, variables de entorno, etc.)
├── controllers/   # Lógica de negocio y manejo de peticiones HTTP
├── repository/    # Acceso y manipulación de datos (MongoDB)
├── routes/        # Definición de rutas/endpoints
├── schema/        # Esquemas de MongoDB (Mongoose)
└── app.js         # Configuración e inicialización del servidor Express
```

🛠️ Tecnologías Utilizadas

- Node.js – Entorno de ejecución
- Express – Framework para crear la API
- MongoDB – Base de datos NoSQL
- Mongoose – ODM para MongoDB
- Morgan – Middleware para registrar las peticiones HTTP
- Postman – Pruebas de la API

📡 Registro de Peticiones (Morgan)
Se utilizó Morgan para visualizar en consola todas las solicitudes HTTP entrantes, lo que permite:

- Ver métodos (`GET`, `POST`, `PUT`, `DELETE`)
- Ver rutas solicitadas
- Controlar el estado de las respuestas
- Facilitar el debugging

🧪 Pruebas con Postman

- Todas las rutas fueron probadas mediante Postman
- No se incluye interfaz gráfica (Frontend)
- La API responde en formato JSON

📌 Estado del Proyecto

- ✅ Backend funcional  
- ✅ Arquitectura organizada  
- ✅ Conexión a MongoDB  
- ✅ Pruebas realizadas con Postman 



✍️ Autor

Jhonatan Barja
Backend Developer Junior