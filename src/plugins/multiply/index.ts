import { OperationFactory } from "../../core/src/factories/operation-factory";

export default class MultiplyUseCase {
  execute(firstNumber: number, secondNumber: number) {
    return firstNumber * secondNumber;
  }
}

export function init() {
  const factory = new OperationFactory();
  factory.register('Multiply', (n1: number, n2: number) => new MultiplyUseCase().execute(n1, n2));
}
