const { Course, Category, Rating } = require("../../db.js");
const { Op } = require("sequelize");

const updateCourse = async ({ id, name, description, category }) => {
  try {
    let courseDB = await Course.findOne({
      where: { id },
    });

    if (name) courseDB.name = name;
    if (description) courseDB.description = description;

    //Category
    //RESPECTO A CATEGORIA, FALTARIA HACER LA LOGICA SI LA PERSONA LE QUIERE ELIMINAR UNA CATEGORIA AL CURSO
    //LA LOGICA DEL IF DE ABAJIO, ES SOLAMENTE POR SI LA PERDONA LE QUIERE AGREGAR UNA CATEGORIA.
    if (category) {
      const [categoryDB, categoryCeated] = await Category.findOrCreate({
        where: { name: category },
        defaults: {
          name: category,
        },
      });

      courseDB.addCategory(categoryDB);
    }

    await courseDB.save({ fields: ["name", "description"] });
    await courseDB.reload();

    return "Actualizado";
  } catch (error) {
    return error;
  }
};

module.exports = { updateCourse };
