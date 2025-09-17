declare module "@3d-dice/dice-box" {
  export default class DiceBox {
    constructor(selector: string, options: DiceBoxOptions);

    init(): Promise<void>;
    roll(
      notation: string,
      options?: { theme?: string; label?: string; color?: string }
    ): void;
    clear(): void;
    setScale(scale: number): void;
    // можно добавлять сюда методы по мере необходимости
  }

  export interface DiceBoxOptions {
    assetPath: string;
    theme?: string;
    scale?: number;
    gravity?: number;
    friction?: number;
    restitution?: number;
    lightIntensity?: number;
    lightColor?: string;
  }
}
