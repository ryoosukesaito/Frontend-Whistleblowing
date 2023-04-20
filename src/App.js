import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginAdmin from "./pages/Admin/LoginAdmin";
import AdminAccountCreate from "./pages/Admin/AdminAccountCreate";
import Signup from "./pages/Users/Signup";
import Navbar from "./components/Navbar";
import ReportsPage from "./pages/Admin/ReportsPage";
import AdminAccounts from "./pages/Admin/AdminAccounts";
import UserAccounts from "./pages/Admin/UserAccounts";
import Categories from "./pages/Admin/Categories";
import AddNewAdmin from "./components/Admin/AddNewAdmin";
import EditAdminAccount from "./components/Admin/EditAdminAccount";
import Report from "./pages/Admin/Report";

import { useSelector } from "react-redux";
import { useState } from "react";
import { AppContext } from "./context/appContext";

function App() {
  const [reports, setReports] = useState([]);
  const [reportDetail, setReportDetail] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState([]);
  const admin = useSelector((state) => state.admin);

  return (
    <AppContext.Provider
      value={{
        reports,
        setReports,
        reportDetail,
        setReportDetail,
        admins,
        setAdmins,
        users,
        setUsers,
        categories,
        setCategories,
      }}
    >
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<LoginAdmin />} />
          <Route path="/api/admin/signup" element={<AdminAccountCreate />} />
          {admin && (
            <>
              <Route path="/api/admin/reports" element={<ReportsPage />} />
            </>
          )}
          <Route path="/api/admin/reports/:id" element={<Report />} />
          <Route path="/api/admin/all" element={<AdminAccounts />} />
          <Route path="/api/admin/create/admin" element={<AddNewAdmin />} />
          <Route path="/api/admin/edit" element={<EditAdminAccount />} />
          <Route path="/api/admin/users/all" element={<UserAccounts />} />
          <Route path="/api/admin/category/all" element={<Categories />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
