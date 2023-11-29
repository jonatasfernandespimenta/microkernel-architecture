export interface PluginInterface {
  execute(firstNumber: number, secondNumber: number): number;
}

export function importModule(moduleName: string) {
  return require(moduleName);
}

export function loadPlugins(plugins: string[]) {
  const loadedPlugins: PluginInterface[] = [];

  plugins.forEach((plugin) => {
    const loadedPlugin = importModule(`../../plugins/${plugin}`);

    loadedPlugin.init();

    loadedPlugins.push(loadedPlugin);
  });

  return loadedPlugins;
}
