import React from "react";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/DashboardPage";
import { Routes, Route } from "react-router-dom";
import Logout from "./pages/Logout";
import MemberList from "./pages/MemberLists";
import AddMember from "./pages/AddMember";
import EditMember from "./pages/EditMember";

function App() {
  return (
   
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/schedule" element={<AddMember />} />
      <Route path="/add-member/edit-member/:id" element={<EditMember />}/>
      <Route path="/add-member" element={<MemberList/>}/>
    </Routes>
    
  );
}

export default App;
