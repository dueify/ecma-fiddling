const barker = (state) => ({
  bark: () => console.log("Woof, I am " + state.name),
});

const driver = (state) => ({
  drive: () => console.log("Wruuuum, here I come, my name is " + state.name),
});

const killer = (state) => ({
  kill: () => console.log("HGRRGG! I am killer named " + state.name),
});

const murderRobotDog = (name) => {
  let state = {
    name,
    speed: 100,
    position: 0,
  };
  return Object.assign({}, barker(state), driver(state), killer(state));
};

murderRobotDog("sniffles").bark();
