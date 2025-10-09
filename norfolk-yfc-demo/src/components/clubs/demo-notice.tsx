"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle2 } from "lucide-react";

export function ClubsDemoNotice() {
  return (
    <Alert className="bg-green-50 border-green-200 mb-8">
      <CheckCircle2 className="h-4 w-4 text-green-600" />
      <AlertDescription className="text-green-800">
        <strong>Real Club Data:</strong> All clubs shown below feature accurate information from Norfolk YFC's website,
        including real club names, venues, meeting times, and contact details for all 11 senior clubs and 7 Countrysider groups.
        Member counts are estimates for demonstration purposes.
      </AlertDescription>
    </Alert>
  );
}
