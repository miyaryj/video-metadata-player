export default class DataLoader {
  private data: Map<number, object> | null = null;

  async load(path: string) {
    const response = await fetch(path);
    const csv = await response.text();
    const data = this.parseCsv(csv, "\t");
    console.log("CSV parsed", data);
    this.data = this.timeIndex(data, "time_video");
    console.log("Loaded", this.data);
    return this;
  }

  private parseCsv(str: string, separator = ",") {
    const result: object[] = [];
    const lines = str.split("\n");

    const columns = lines[0].split(separator);

    lines.slice(1).forEach((line) => {
      if (line === "") return;

      const row: any = {};
      line.split(separator).forEach((value, index) => {
        row[columns[index]] = value;
      });
      result.push(row);
    });

    return result;
  }

  private timeIndex(data: any[], timeColumn: string, fps = 10) {
    const result = new Map();
    data.forEach((row) => {
      const timeStr = row[timeColumn];
      let time;
      const split = timeStr.split(":");
      if (split.length === 1) {
        time = Math.floor(Number(timeStr) * fps) / fps;
      } else {
        const min = Number(split[split.length - 2]);
        const sec = Math.floor(Number(split[split.length - 1]) * fps) / fps;
        time = min * 60 + sec;
      }
      result.set(time, row);
    });
    return result;
  }

  get(key: number) {
    if (!this.data) return null;

    return this.data.get(key);
  }
}
