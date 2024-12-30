import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const pdfPath = path.resolve("public/resume-arif-wahyu-prasetyo.pdf"); // Pastikan path benar

  if (fs.existsSync(pdfPath)) {
    const fileBuffer = fs.readFileSync(pdfPath);

    const headers = new Headers();
    headers.set("Content-Type", "application/pdf");
    headers.set(
      "Content-Disposition",
      'attachment; filename="resume-arif-wahyu-prasetyo.pdf"'
    );

    return new NextResponse(fileBuffer, { headers });
  }

  return new NextResponse("File not found", { status: 404 });
}
