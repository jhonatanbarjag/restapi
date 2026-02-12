import { Router } from "express";
import { createUser, getAllUsers, getUserById, updateUser, deleteUser } from "../controllers/user.controller.js";

const router = Router();  

router.post("/users", createUser); //ruta para crear un nuevo usuario
router.get("/users", getAllUsers); //ruta para obtener todos los usuarios
router.get("/users/:id", getUserById); //ruta para obtener un usuario por su ID
router.put("/users/:id", updateUser); //ruta para actualizar un usuario por su ID
router.delete("/users/:id", deleteUser); //ruta para eliminar un usuario por su ID 

export default router; //exportamos el router para usarlo en el archivo principal de la aplicación
