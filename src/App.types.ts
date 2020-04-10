export interface Source {
  title: string;
  video: string;
  data: string;
}

export interface Config {
  sources: Source[];
  selection: string[];
  max: number;
  min: number;
}
