"use client";

import Entries from "@/components/entries";
import ProtectedRoute from '@/components/protect';

export default function EntriesPage () {
return (
<ProtectedRoute>
  <div>
    < Entries />
  </div>
</ProtectedRoute>
)};