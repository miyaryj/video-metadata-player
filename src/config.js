export default {
  sources: [
    {
      title: "Tester21",
      video: "MAH08801.MP4",
      data: "person_20200207_tester21_1.tsv",
    },
    {
      title: "TesterM",
      video: "MAH08806.MP4",
      data: "person_20200210_testerm_1.tsv",
    },
    {
      title: "TesterT",
      video: "MAH08808.MP4",
      data: "person_20200210_testert_1.tsv",
    },
  ],
  selection: ["part_nose_nx", "part_nose_ny", "part_nose_nz", "face_roll", "face_pitch", "face_yaw"],
  max: 1.5,
  min: -1,
};
