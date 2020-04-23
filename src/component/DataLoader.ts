import { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Store, DataRow } from "../store";
import action from "../action";

const DataLoader = () => {
  const path = useSelector((state: Store) => state.source.dataPath);
  const videoTime = useSelector((state: Store) => state.videoTime);
  const [ data, setData ] = useState(new Map());
  const dispatch = useDispatch();

  useMemo(async () => {
    const result = await load(path);
    setData(result);
  }, [path]);

  const time = Math.floor(videoTime * 10) / 10;
  if (data.get(time)) {
    dispatch(action.setCurrentData(data.get(time)!));
  }

  return null;
}

async function load(path: string) {
  const response = await fetch(path);
  const csv = await response.text();
  const csvData = parseCsv(csv, "\t");
  console.log("CSV parsed", csvData);
  const data = timeIndex(csvData, "time_video");
  console.log("Loaded", data);
  return data;
}

function parseCsv(str: string, separator = ","): DataRow[] {
  const result: DataRow[] = [];
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

function timeIndex(data: any[], timeColumn: string, fps = 10): Map<number, DataRow> {
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

export default DataLoader;