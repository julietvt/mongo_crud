const { Animal } = require('./../models');

module.exports.createAnimal = async (req, res, next) => {
  const { body } = req;
  const animalInstance = new Animal(body);
  try {
    const createdAnimal = await animalInstance.save();
    //console.log('new animal was created:', createdAnimal);
    if (createdAnimal) {
      return res.status(201).send({ data: createdAnimal });
    }
    res.status(400).send('Bad request');
  } catch (err) {
    next(err);
  }
};

module.exports.getAnimal = async (req, res, next) => {};
// findById()

module.exports.getAllAnimal = async (req, res, next) => {};
// find()
