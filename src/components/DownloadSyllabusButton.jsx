"use client";

import dynamic from "next/dynamic";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

// ssr:false guarantees @react-pdf/renderer (and SyllabusPDF) are never
// imported on the server — preventing the font-store hasOwnProperty crash.
const PDFButtonInner = dynamic(() => import("@/components/PDFButtonInner"), {
  ssr: false,
  loading: () => (
    <Button size="lg" className="w-full gap-2" disabled>
      <Download className="h-4 w-4" />
      Download Syllabus PDF
    </Button>
  ),
});

export function DownloadSyllabusButton({ course }) {
  return <PDFButtonInner course={course} />;
}
