import registry from '../../registry.json';
import { OperationFactory } from './factories/operation-factory';
import { loadPlugins } from './loader';
import { SubtractUseCase } from './use-cases/subtract-use-case';
import { SumUseCase } from './use-cases/sum-use-case';
const prompt = require('prompt-sync')();

export class Core {
  execute() {
    console.log('Welcome to the Calculator!');

    console.log('Please enter the first number:');
    const input1 = prompt('> ');

    console.log('Please enter the second number:');
    const input2 = prompt('> ');

    const firstNumber = parseInt(input1);
    const secondNumber = parseInt(input2);

    const factory = new OperationFactory();
    
    factory.register('Sum', () => new SumUseCase().execute(firstNumber, secondNumber));
    factory.register('Sub', () => new SubtractUseCase().execute(firstNumber, secondNumber));

    loadPlugins(registry.plugins);

    const operations = factory.getRegisteredOperations();

    operations.forEach((operation) => {
      console.log(`- ${operation}`);
    });

    console.log('Please enter the operation:');
    const operation = prompt('> ');

    const result = factory.create(operation, firstNumber, secondNumber);

    console.log(`The result is ${result}`);

  }
}
