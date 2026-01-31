import { userRepository } from "../repository/user.repository";

export const userController = {
  create: async (req, res) => {
    try {
      const user = await userRepository.create(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: "Failed to create user" });
    }
  },
  findById: async (req, res) => {
    try {
      const user = await userRepository.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve user" });
    }
  },
  findAll: async (req, res) => {
    try {
      const users = await userRepository.findAll();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve users" });
    }
  },
  update: async (req, res) => {
    try {
      const user = await userRepository.update(req.params.id, req.body);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: "Failed to update user" });
    }
  },
  delete: async (req, res) => {
    try {
      const user = await userRepository.delete(req.params.id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Failed to delete user" });
    }
  },
};
