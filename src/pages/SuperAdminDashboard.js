import React, { useState } from "react"
import { AdminAllCustomer, AdminAllProperties, AdminDashboardHome, AdminDashboardProfileView, AdminNav, AdminUploadPropertyLayout, DashboardViewProfile, ViewCustomer } from "../components"
import { AdminSideNav } from "../components"
import { AdminUploadProperty } from "../components/AdminDashboard/AdminUploadProperty"
import UploadPropertyInfo from "./UploadPropertyInfo"



export default function SuperAdminDashboard(){

    const [adminPage, setAdminPage] = useState('edit')



    return(
        <div>
            <AdminNav />
            <div className="admin-dashboard-main-wrapper">
                <AdminSideNav setAdminPage={setAdminPage} />
                {adminPage == 'home' && <AdminDashboardHome />}
                {adminPage == 'customers' && <AdminAllCustomer />}
                {adminPage == 'view' && <ViewCustomer />}
                {adminPage == 'edit' && <AdminDashboardProfileView />}
                {adminPage == 'add' && <AdminUploadProperty setAdminPage={setAdminPage} />}
                {adminPage == 'layout' && <AdminUploadPropertyLayout />}
                {adminPage == 'all' && <AdminAllProperties />}


            </div>
        </div>
    )
}