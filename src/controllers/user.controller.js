import { userRepository } from "../repository/user.repository.js";

export const createUser = async (req, res) => {
    try {
        const user = await userRepository.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });

    }
};

export const getUserById = async (req, res) => {
    try {
        const user = await userRepository.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: "El usuario no fue encontrado" });
        } else {
            res.json(user);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    } 
};

export const getAllUsers = async (req, res) => {
    try {
        const users = await userRepository.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateUser = async (req, res) => {
    try {
        const user = await userRepository.update(req.params.id, req.body);
        if (!user) {
            return res.status(404).json({ error: "El usuario no fue encontrado" });
        } else {
            res.json(user);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const user = await userRepository.delete(req.params.id);
        if (!user) {
            return res.status(404).json({ error: "El usuario no fue encontrado" });
        } else {
            res.json({ message: "Usuario eliminado exitosamente" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

