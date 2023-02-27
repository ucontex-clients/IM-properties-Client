import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function AdminDashboardProfileView({ setPage }) {
  let [email, setEmail] = useState("");
  let [firstname, setFirst] = useState("");
  let [lastname, setLast] = useState("");
  let [gender, setGender] = useState("");
  let [country, setCountry] = useState("Nigeria");
  let [state, setState] = useState("");
  let [lga, setLga] = useState("");
  let [phone1, setPhone1] = useState("");
  let [date_of_birth, setDOB] = useState("");
  let [occupation, setOccupation] = useState("");
  let [address, setAddress] = useState("");
  let [city, setCity] = useState("");
  let [nextofkin, setNextOfKin] = useState("");
  let [kin_phone, setKin_phone] = useState("");
  let [kin_address, setKin_address] = useState("");
  let [loading, setLoading] = useState(true);
  let navigate = useNavigate();
  let [profile, setProfile] = useState(null);
  let [Id, setId] = useState(null);

  useEffect(() => {
    getUser();
  }, [])

  let getUser = () => {
    let url = "https://nice-tan-harp-seal-wrap.cyclic.app/api/user/single";
    let token = localStorage.getItem("imToken");
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      method: "GET"
    })
      .then((e) => e.json())
      .then(res => {
        setEmail(res.email)
        setFirst(res.firstname)
        setLast(res.lastname)
        setGender(res.gender)
        setState(res.state)
        setLga(res.lga)
        setPhone1(res.phone1)
        setDOB(res.date_of_birth)
        setOccupation(res.occupation)
        setAddress(res.address)
        setCity(res.city)
        setNextOfKin(res.nextofkin)
        setKin_phone(res.kin_phone)
        setKin_address(res.kin_address)
      })
  };

  const updateUser = async (e) => {
    setLoading(false)
    let url = "https://nice-tan-harp-seal-wrap.cyclic.app/api/user/addprofile";
    let token = localStorage.getItem("imToken");

    const formData = new FormData();
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("gender", gender);
    formData.append("occupation", occupation);
    formData.append("date_of_birth", date_of_birth);
    formData.append("city", city);
    formData.append("country", country);
    formData.append("address", address);
    formData.append("phone1", phone1);
    formData.append("lga", lga);
    formData.append("state", state);
    formData.append("nextofkin", nextofkin);
    formData.append("kin_phone", kin_phone);
    formData.append("kin_address", kin_address);
    formData.append("images", profile);
    formData.append("images", Id);


  
    const response = await axios.patch(url, formData, {
      headers: {
        'Authorization' : `Basic ${token}`
      }
    });
    if (response.status === 200){
        navigate("/dashboard/profile");
    }else console.log(response.error.message);
        setLoading(true)
  };

  return (
    <div className="admin-dashboard-right" style={{ backgroundColor: "#fff" }}>
      <div
        className="dashboard-layout-wrapper"
        id="view-profile-right"
        style={{ marginTop: "100px" }}
      >
        <p className="profile-update-buyer">Update Profile</p>
      
        <div className="update-profile-main">
          <div className="profile-update-row">
            <div>
              <label>First Name</label>
              <input type="text" placeholder="First Name" value={firstname} onChange={(e) => setFirst(e.target.value)} required></input>
            </div>
            <div>
              <label>Last Name</label>
              <input type="text" placeholder="Last Name" value={lastname} onChange={(e) => setLast(e.target.value)} required></input>
            </div>
            <div>
              <label>Gender</label>
              <select value={gender} onChange={(e) => setGender(e.target.value)} required>
                <option value="- - -">---</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>

          <div className="profile-update-row">
            <div>
              <label>Phone 1</label>
              <input type="text" placeholder="Phone Number" value={phone1} onChange={(e) => setPhone1(e.target.value)} required></input>
            </div>
            {/* <div>
              <label>Phone 2</label>
              <input type="text" placeholder="Phone Number"></input>
            </div> */}
            <div>
              <label>Date of Birth</label>
              <input type="date" placeholder="DD-MM-YY" value={date_of_birth} onChange={(e) => setDOB(e.target.value)} required></input>
            </div>
          </div>

          <div className="profile-update-row">
            <div>
              <label>Occupation</label>
              <input type="text" value={occupation} onChange={(e) => setOccupation(e.target.value)} required></input>
            </div>
            <div>
              <label>Country</label>
              <select disabled>
                <option>Nigeria</option>
              </select>
            </div>
            <div>
              <label>State</label>
              <input type="text" value={state} onChange={(e) => setState(e.target.value)} required></input>
            </div>
          </div>

          <div className="profile-update-row">
            <div>
              <label>City</label>
              <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} required></input>
            </div>
            <div>
              <label>LGA</label>
              <input type="text" placeholder="City" value={lga} onChange={(e) => setLga(e.target.value)} required></input>
            </div>
            <div>
              <label>Address</label>
              <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} required></input>
            </div>
          </div>

          <div className="profile-update-row">
            <div>
              <label>Email</label>
              <input disabled type="email" placeholder="Email" value={email}></input>
            </div>
            <div>
              <label>Upload a photograph</label>
              <input name="images" type="file" onChange={(e) => setProfile(e.target.files[0])} required></input>
            </div>
            <div>
              <label>Upload Valid ID </label>
              <input name="images" type="file" onChange={(e) => setId(e.target.files[0])} required></input>
            </div>
          </div>

          <p className="next-of-kin-data"><strong>NEXT OF KIN</strong></p>

          <div className="profile-update-row">
            <div>
              <label>Full Name</label>
              <input type="text" placeholder="Full Name" value={nextofkin} onChange={(e) => setNextOfKin(e.target.value)} required></input>
            </div>
            <div>
              <label>Phone Number</label>
              <input type="text" placeholder="Phone Number" value={kin_phone} onChange={(e) => setKin_phone(e.target.value)} required></input>
            </div>
            <div>
              <label>Address</label>
              <input type="text" placeholder="Address" value={kin_address} onChange={(e) => setKin_address(e.target.value)} required></input>
            </div>
          </div>

          <div className="save-profile-button-container">
            <button onClick={(e) => updateUser()}>{loading ? "Save Profile" : "Saving"}</button>
          </div>
        </div>

      </div>
    </div>
  );
}
