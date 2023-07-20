// eslint-disable-next-line import/no-extraneous-dependencies
import runGoldenMaster from "jest-golden-master";
import { Game } from ".";

test("All correct scenario", async () => {
  runGoldenMaster(async () => {
    const game = new Game();
    game.add("Mathieu");
    game.add("Thomas");
    game.roll(6);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(4);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(3);
    game.wasCorrectlyAnswered();
  });
});
test("Wrong answer scenario", async () => {
  runGoldenMaster(async () => {
    const game = new Game();
    game.add("Mathieu");
    game.add("Thomas");
    game.roll(6);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(4);
    game.wrongAnswer();
  });
});

test("Wrong answer and even roll with correct answer scenario", async () => {
  runGoldenMaster(async () => {
    const game = new Game();
    game.add("Mathieu");
    game.add("Thomas");
    game.roll(6);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(4);
    game.wrongAnswer();
    game.roll(4);
    game.wasCorrectlyAnswered();
    game.roll(4);
  });
});
