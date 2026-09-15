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
  {
    src: "F:\\Copy of Nouveau dossier GNM\\Nouveau dossier photos\\GN pro\\_DND3673.jpg",
    out: "work-11.webp",
    width: 1300,
    quality: 80,
  },
  {
    src: "C:\\Users\\hp\\Downloads\\Photos-1-001\\IMG-20200525-WA0033.jpg",
    out: "work-14.webp",
    width: 1200,
    quality: 78,
  },
  {
    src: "C:\\Users\\hp\\Downloads\\Photos-1-001\\IMG-20200712-WA0016.jpg",
    out: "work-15.webp",
    width: 1200,
    quality: 78,
  },
  {
    src: "C:\\Users\\hp\\Downloads\\Photos-1-001\\IMG-20200522-WA0011.jpg",
    out: "work-16.webp",
    width: 1200,
    quality: 78,
  },
  {
    src: "C:\\Users\\hp\\Downloads\\Photos-1-001\\IMG-20210125-WA0019.jpg",
    out: "work-17.webp",
    width: 1200,
    quality: 78,
  },
  {
    src: "C:\\Users\\hp\\Downloads\\Photos-1-001\\IMG-20200712-WA0006.jpg",
    out: "work-18.webp",
    width: 1200,
    quality: 78,
  },
  {
    src: "C:\\Users\\hp\\Downloads\\Photos-1-001\\IMG-20200716-WA0023.jpg",
    out: "work-19.webp",
    width: 1200,
    quality: 78,
  },
  {
    src: "C:\\Users\\hp\\Downloads\\Photos-1-001\\IMG-20200522-WA0010.jpg",
    out: "work-20.webp",
    width: 1200,
    quality: 78,
  },
  {
    src: "C:\\Users\\hp\\Downloads\\Photos-1-001\\IMG-20200705-WA0003.jpg",
    out: "work-21.webp",
    width: 1200,
    quality: 78,
  },
  {
    src: "C:\\Users\\hp\\Downloads\\Photos-1-001\\IMG-20200411-WA0003.jpg",
    out: "work-22.webp",
    width: 1200,
    quality: 78,
  },
  {
    src: "C:\\Users\\hp\\Downloads\\Photos-1-001\\IMG-20200709-WA0176.jpg",
    out: "work-23.webp",
    width: 1200,
    quality: 78,
  },
  {
    src: "C:\\Users\\hp\\Downloads\\Photos-1-001\\IMG-20200602-WA0000.jpg",
    out: "work-24.webp",
    width: 1200,
    quality: 78,
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
