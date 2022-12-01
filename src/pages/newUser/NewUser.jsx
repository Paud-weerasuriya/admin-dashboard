import React from "react";
import "./NewUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="udara"></input>
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="Udara Weerasuriya"></input>
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="udara@gmail.com"></input>
        </div>
        <div className="newUserItem">
          <label>Passowrd</label>
          <input type="password" placeholder="password"></input>
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+94 323 433 12"></input>
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="Colombo | Sri Lanka"></input>
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male"></input>
            <label For="male">Male</label>
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
            ></input>
            <label For="female">Female</label>
            <input type="radio" name="gender" id="other" value="other"></input>
            <label For="other">Others</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}
