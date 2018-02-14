// @flow

function rand(value: number): number {
  return Math.floor(Math.random() * value) + value;
}

const data = [];

for (let i = 1; i <= 10; i++) {
  data.push(
    { name: `key${i}`, value1: rand(1000000), value2: rand(1000000) }
  );
}

export default data;
