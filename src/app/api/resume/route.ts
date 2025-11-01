import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const pdfPath = path.resolve("public/resume-arif-wahyu-prasetyo.pdf");

  if (!fs.existsSync(pdfPath)) {
    return new NextResponse("File not found", { status: 404 });
  }

  const fileBuffer = fs.readFileSync(pdfPath);
  const uint8Array = new Uint8Array(fileBuffer); // konversi Buffer → Uint8Array

  const headers = new Headers({
    "Content-Type": "application/pdf",
    "Content-Disposition":
      'attachment; filename="resume-arif-wahyu-prasetyo.pdf"',
  });

  return new NextResponse(uint8Array, { headers });
}
