import React, { useState } from "react";
import {
  AdminDashboardProfileView,
  DashboardLayout,
  DashboardUpdateProfile,
} from "../components";

export default function EditProfilePage() {
  const [page, setPage] = useState("1");

  return (
    <DashboardLayout>
      {page === "1" && <AdminDashboardProfileView setPage={setPage} />}
      {page === "2" && <DashboardUpdateProfile />}
    </DashboardLayout>
  );
}
