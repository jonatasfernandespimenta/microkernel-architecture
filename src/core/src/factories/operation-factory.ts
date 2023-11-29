interface IOperationsFunctions {
  [key: string]: (...args: any[]) => any;
}

const operationsFunctions: IOperationsFunctions = {};

export class OperationFactory {
  register(operation: string, creationFunction: (...args: any[]) => any) {
    operationsFunctions[operation] = creationFunction;
  }
  
  unregister(operation: string) {
    delete operationsFunctions[operation];
  }
  
  create(operation: string, ...args: any[]) {
    const operationFunction = operationsFunctions[operation];
    
    if (!operationFunction) {
      throw new Error(`Operation ${operation} is not registered`);
    }
    
    return operationFunction(...args);
  }

  getRegisteredOperations() {
    return Object.keys(operationsFunctions);
  }
}

