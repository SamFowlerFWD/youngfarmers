"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";

export function DemoNotice() {
  return (
    <Alert className="bg-yellow-50 border-yellow-200 mb-8">
      <Info className="h-4 w-4 text-yellow-600" />
      <AlertDescription className="text-yellow-800">
        <strong>Demo Content:</strong> These articles are fictional examples created to demonstrate the news/blog system.
        In production, Norfolk YFC would manage real news and stories through the CMS.
      </AlertDescription>
    </Alert>
  );
}
