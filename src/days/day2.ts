import { readFileSync } from 'fs';

interface Movement {
  type: 'forward' | 'down' | 'up';
  amount: number;
}

interface Submarine {
  pos: {
    x: number;
    y: number;
  };
  aim: number;
}

export const day2 = async () => {
  const inputContents = readFileSync('./res/day2-input.txt', 'utf-8');
  const lines = inputContents.split('\n');

  const movements = lines.reduce((acc, line) => {
    const [move, amount] = line.split(/\s/);
    const movement: Movement = {
      type: move as Movement['type'],
      amount: Number(amount),
    };
    acc.push(movement);

    return acc;
  }, [] as Movement[]);

  const submarine: Submarine = { pos: { x: 0, y: 0 }, aim: 0 };

  movements.forEach((movement) => {
    switch (movement.type) {
      case 'forward': {
        submarine.pos.x += movement.amount;
        submarine.pos.y += movement.amount * submarine.aim;
        break;
      }
      case 'down': {
        submarine.aim += movement.amount;
        break;
      }
      case 'up': {
        submarine.aim -= movement.amount;
        break;
      }
    }
  });

  console.log(submarine.pos.x * submarine.pos.y);
};
