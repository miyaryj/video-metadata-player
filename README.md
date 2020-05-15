# video-metadata-player

A Web App to play video with its metadata synchronously.

## Preparation

- Install

```
npm install
```

- Place video files in `src/media/`

- Place metadata CSV files in `src/data/`
  - Must include `time_video` column to synchronize with video (sec)

- Modify `src/config.js`
  - `sources` : your video and CSV files
  - `selection` : CSV columns to display in metadata view
  - `max`/`min` : max/min value for displaying in metadata view

## Usage

- Start WebApp

```
npm start
```

- Access `http://localhost:3000/`