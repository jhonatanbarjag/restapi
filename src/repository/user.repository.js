import { User } from "../schema/user.schema";

export const userRepository = {
  create: async (userData) => { //esto hace que se cree un nuevo usuario en la base de datos
    const user = new User(userData); //esto crea una instancia del modelo User
    return await user.save(); //esto guarda el nuevo usuario en la base de datos
  },
  findById: async (id) => { //esto busca un usuario por su ID
    return await User.findById(id); //esto devuelve el usuario encontrado
  },
  findAll: async () => {
    return await User.find(); //esto devuelve todos los usuarios
  },
  update: async (id, userData) => {
    return await User.findByIdAndUpdate(id, userData, { new: true }); //esto actualiza un usuario por su ID
  },
  delete: async (id) => {
    return await User.findByIdAndDelete(id); //esto elimina un usuario por su ID
  },
};
