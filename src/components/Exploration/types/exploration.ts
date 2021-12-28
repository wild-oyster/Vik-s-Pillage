export type Resources = {
  gold: number;
  wood: number;
  food: number;
  enemies: number;
};

export type Marker = {
  name: string;
  position: number[];
  resources: Resources;
  done?: boolean;
};
