import { mdToPdf } from "md-to-pdf";
import fs from "node:fs";

(async () => {
  const pdf = await mdToPdf(
    { path: "./README.md" },
    { dest: "./readme.pdf" },
  ).catch(console.error);

  if (pdf) {
    fs.writeFileSync(pdf.filename, pdf.content);
  }
})();
