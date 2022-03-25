import { sayHello, sayGoodbye } from "../src/hello-world";

test("sayHello prints hello", () => {
  const logSpy = jest.spyOn(console, "log");
  sayHello();
  expect(logSpy).toHaveBeenCalledWith("hello");
});

test("sayGoodbye prints goodbye", () => {
  const logSpy = jest.spyOn(console, "log");
  sayGoodbye();
  expect(logSpy).toHaveBeenCalledWith("goodbye");
});
