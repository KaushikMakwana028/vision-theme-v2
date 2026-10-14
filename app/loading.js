"use client";

import { LoaderOverlay } from "@/components/Loader";

export default function Loading() {
  return <LoaderOverlay destination="Page" progress={72} />;
}
