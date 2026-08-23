import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "src", "assets");

const jobs = [
  {
    src: "F:\\Dossier Photo GNM\\20220108_121543.jpg",
    out: "work-7.webp",
    width: 1300,
    quality: 75,
  },
  {
    src: "F:\\Dossier Photo GNM\\20220106_142510.jpg",
    out: "work-8.webp",
    width: 950,
    quality: 75,
  },
  {
    src: "F:\\Dossier Photo GNM\\20220814_101830 (1).jpg",
    out: "work-9.webp",
    width: 1200,
    quality: 78,
  },
  {
    src: "F:\\Dossier Photo GNM\\20231130_173830.jpg",
    out: "work-10.webp",
    width: 1200,
    quality: 80,
  },
];

for (const job of jobs) {
  const outPath = path.join(outDir, job.out);
  await sharp(job.src)
    .rotate() // auto-orient from EXIF, then strip the tag
    .resize({ width: job.width })
    .webp({ quality: job.quality ?? 82 })
    .toFile(outPath);
  const meta = await sharp(outPath).metadata();
  console.log(`${job.out}: ${meta.width}x${meta.height}`);
}
