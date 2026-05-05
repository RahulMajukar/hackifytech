"use client";

// This file is only ever loaded client-side (via next/dynamic ssr:false).
// Importing @react-pdf/renderer statically here avoids the partial-init
// "hasOwnProperty" crash that occurs when the library is dynamically chunked.
import { useState } from "react";
import { pdf } from "@react-pdf/renderer";
import { Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SyllabusPDF } from "@/components/SyllabusPDF";

export default function PDFButtonInner({ course }) {
  const [generating, setGenerating] = useState(false);

  const handleDownload = async () => {
    setGenerating(true);
    try {
      const blob = await pdf(<SyllabusPDF course={course} />).toBlob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${course.slug}-syllabus-hackifytech.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("PDF generation failed:", err);
    } finally {
      setGenerating(false);
    }
  };

  return (
    <Button size="lg" className="w-full gap-2" onClick={handleDownload} disabled={generating}>
      {generating ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          Generating PDF...
        </>
      ) : (
        <>
          <Download className="h-4 w-4" />
          Download Syllabus PDF
        </>
      )}
    </Button>
  );
}
