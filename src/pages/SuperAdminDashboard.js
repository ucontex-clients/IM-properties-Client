import React, { useState } from "react"
import { AdminAllCustomer, AdminAllProperties, AdminDashboardHome, AdminDashboardProfileView, AdminNav, AdminUploadPropertyLayout, DashboardViewProfile, ViewCustomer } from "../components"
import { AdminSideNav } from "../components"
import { AdminUploadProperty } from "../components/AdminDashboard/AdminUploadProperty"
import UploadPropertyInfo from "./UploadPropertyInfo"



export default function SuperAdminDashboard(){

    const [adminPage, setAdminPage] = useState('home')

    const [addPropertyData, setAddPropertyData] = useState({
        name:'',
        pricePerSm:'',
        description:{description:''},
        location:'',
        layoutPhoto:'',
        layouts: [],
        features:'',
        pictures:'',
        video:''
    })

const handleAddPropertyChange = (e) => {
    const {name, type, files, value} = e.target

    if (name == 'description'){
        setAddPropertyData(prevData => {
            return {...prevData, [name]:value}
        })
    }

    if (type == 'file') {
        setAddPropertyData(prevData => {
            return { ...prevData, [name]: name=='pictures'?[...addPropertyData.pictures, files]: files}
        })
    }else{
        setAddPropertyData(prevData => {
            return {...prevData, [e.target.name] : value}
        })
    }
}




    return(
        <div>
            <AdminNav />
            <div className="admin-dashboard-main-wrapper">
                <AdminSideNav setAdminPage={setAdminPage} />
                {adminPage == 'home' && <AdminDashboardHome />}
                {adminPage == 'customers' && <AdminAllCustomer />}
                {adminPage == 'view' && <ViewCustomer />}
                {adminPage == 'edit' && <AdminDashboardProfileView />}
                {adminPage == 'add' && <AdminUploadProperty 
                setAdminPage={setAdminPage} handleAddPropertyChange={handleAddPropertyChange}
                addPropertyData={addPropertyData} />}
                {adminPage == 'layout' && <AdminUploadPropertyLayout 
                handleAddPropertyChange={handleAddPropertyChange} addPropertyData={addPropertyData}
                setAddPropertyData={setAddPropertyData}/>}
                {adminPage == 'all' && <AdminAllProperties />}
            </div>
        </div>
    )
}