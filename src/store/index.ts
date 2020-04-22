export interface Store {
  config: Config;
  source: Source;
  videoTime: number;
}

export interface Config {
  sources: ConfigSource[];
  selection: string[];
  max: number;
  min: number;
}

export interface ConfigSource {
  title: string;
  video: string;
  data: string;
}

export interface Source {
  videoPath: string;
  dataPath: string;
}