export default {
  appendPet: (state, { pet, species }) => {
    state[species].push(pet);
  }
};
