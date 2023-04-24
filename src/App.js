import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginAdmin from "./pages/Admin/LoginAdmin";
import RequestResetPassword from "./pages/Admin/RequestResetPassword";
import ResetPasswordAdmin from "./pages/Admin/ResetPasswordAdmin";
import AdminAccountCreate from "./pages/Admin/AdminAccountCreate";
import NavbarAdmin from "./components/NavbarAdmin";
import ReportsPage from "./pages/Admin/ReportsPage";
import AdminAccounts from "./pages/Admin/AdminAccounts";
import UserAccounts from "./pages/Admin/UserAccounts";
import Categories from "./pages/Admin/Categories";
import AddNewAdmin from "./components/Admin/AddNewAdmin";
import EditAdminAccount from "./components/Admin/EditAdminAccount";
import Report from "./pages/Admin/Report";
import AdminsDetail from "./components/Admin/AdminsDetail";
import AdminsDelete from "./components/Admin/AdminsDelete";

//Users router
import Signup from "./pages/User/SignupUser";
import LoginUser from "./pages/User/LoginUser";
import Navbar from "./components/Navbar";
import UserReportsPage from "./pages/User/UserReportsPage";
import UserReport from "./pages/User/UserReport";

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
  const user = useSelector((state) => state.user);

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
        {admin && (
          <>
            <NavbarAdmin />
          </>
        )}
        {user && (
          <>
            <Navbar />
          </>
        )}

        <Routes>
          {/* user authentication route before logging in */}
          <Route path="/user" element={<LoginUser />} />
          <Route path="/api/user/register" element={<Signup />} />
          {/* user router after logging in */}
          <Route path="/api/user/reports" element={<UserReportsPage />} />
          <Route path="/api/user/reports/id" element={<UserReport />} />

          {/* admin authentication route before logging in*/}
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

          {/* admin route after logging in */}
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
