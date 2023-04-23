import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginAdmin from "./pages/Admin/LoginAdmin";
import RequestResetPassword from "./pages/Admin/RequestResetPassword";
import ResetPasswordAdmin from "./pages/Admin/ResetPasswordAdmin";
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

import AdminsDetail from "./components/Admin/AdminsDetail";
import AdminsDelete from "./components/Admin/AdminsDelete";

import { useSelector } from "react-redux";
import { useState } from "react";
import { AppContext } from "./context/appContext";

function App() {
  const [reports, setReports] = useState([]);
  const [reportDetail, setReportDetail] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState([]);
  const [histories, setHistories] = useState([]);
  const [adminDetail, setAdminDetail] = useState([]);
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
        newCategory,
        setNewCategory,
        histories,
        setHistories,
        adminDetail,
        setAdminDetail,
      }}
    >
      <BrowserRouter>
        {/* {admin && (
          <>
            <Navbar />
          </>
        )} */}

        <Routes>
          <Route path="/" element={<LoginAdmin />} />
          <Route
            path="/auth/requestResetPassword"
            element={<RequestResetPassword />}
          />
          <Route
            path="/api/auth/passwordReset"
            element={<ResetPasswordAdmin />}
          />
          <Route path="/api/admin/signup" element={<AdminAccountCreate />} />
          {admin && (
            <>
              <Route path="/api/admin/reports" element={<ReportsPage />} />

              <Route path="/api/admin/reports/:id" element={<Report />} />
              <Route path="/api/admin/all" element={<AdminAccounts />} />
              <Route path="/api/admin/create/admin" element={<AddNewAdmin />} />
              <Route path="/api/admin/edit" element={<EditAdminAccount />} />
              <Route path="/api/admin/users/all" element={<UserAccounts />} />
              <Route path="/api/admin/category/all" element={<Categories />} />
            </>
          )}

          <Route path="/api/admin/:id" element={<AdminsDetail />} />
          <Route path="/api/admin/delete/:id" element={<AdminsDelete />} />

          <Route path="/signup" element={<Signup />} />

          <Route
            path="/api/admin/admins/adminsdetail"
            element={<AdminsDetail />}
          />
          <Route
            path="/api/admin/admins/adminsdelete"
            element={<AdminsDelete />}
          />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
