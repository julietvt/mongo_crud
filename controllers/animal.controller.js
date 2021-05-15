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

module.exports.getAnimal = async (req, res, next) => {
  const {
    params: { animalId },
  } = req;
  try {
    const foundAnimal = await Animal.findById(animalId);
    //console.log('found animal: ', foundAnimal);
    return res.status(201).send({ data: foundAnimal });
  } catch (err) {
    next(err);
  }
};

module.exports.getAllAnimal = async (req, res, next) => {
  try {
    const foundAnimals = await Animal.find({});
    //console.log('found animals: ', foundAnimals);
    return res.status(201).send({ data: foundAnimals });
  } catch (err) {
    next(err);
  }
};

module.exports.updateAnimal = async (req, res, next) => {
  //Model.findByIdAndUpdate()
  const {
    body,
    params: { animalId },
  } = req;
  try {
    const updatedAnimal = await Animal.findByIdAndUpdate(animalId, body);
    console.log('updated animal', updatedAnimal);
    if (updatedAnimal) {
      return res.status(200).send({ data: updatedAnimal });
    }
    res.status(400).send('Bad request');
  } catch (err) {
    next(err);
  }
};

module.exports.deleteAnimal = async (req, res, next) => {
  //Model.findByIdAndDelete()
  const {
    params: { animalId },
  } = req;
  try {
    const foundAnimal = await Animal.findByIdAndDelete(animalId);
    //console.log('delete animal: ', foundAnimal);
    if (foundAnimal) {
      return res.status(201).send({ data: foundAnimal });
    }
    res.status(404).send('Animal not found');
  } catch (err) {
    next(err);
  }
};
