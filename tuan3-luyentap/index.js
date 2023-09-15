import express from "express";
import RootRouter from './routes/index.js';

const app = express();
const PORT = 8888;

export const listSubject = [
  {
    id: 1,
    subjectName: "toan",
    resource: "NXB Kim dong",
    course: "KTN",
    avg: 8.8,
  },
  {
    id: 2,
    subjectName: "vat li",
    resource: "NXB Kim dong",
    course: "KTN",
    avg: 8.2,
  },
  {
    id: 3,
    subjectName: "hoa",
    resource: "NXB Kim dong",
    course: "KTN",
    avg: 9.1,
  },
  {
    id: 4,
    subjectName: "su",
    resource: "NXB Kim lien",
    course: "KXH",
    avg: 10,
  },
];

app.use("/api/v1", RootRouter);

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
