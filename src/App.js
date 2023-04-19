import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginAdmin from "./pages/Admin/LoginAdmin";
import Signup from "./pages/Users/Signup";
import Navbar from "./components/Navbar";
import ReportsPage from "./pages/Admin/ReportsPage";
import AdminAccounts from "./pages/Admin/AdminAccounts";
import UserAccounts from "./pages/Admin/UserAccounts";
import Categories from "./pages/Admin/Categories";
import AddNewAdmin from "./components/Admin/AddNewAdmin";
import EditAdminAccount from "./components/Admin/EditAdminAccount";
import ReportDetail from "./pages/Admin/Report";
import AdminsDetail from "./components/Admin/AdminsDetail";
import AdminsDelete from "./components/Admin/AdminsDelete";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<LoginAdmin />} />
        <Route path="/api/admin/reports" element={<ReportsPage />} />
        <Route path="/api/admin/reports/report" element={<ReportDetail />} />

        <Route path="/api/admin/all" element={<AdminAccounts />} />
        <Route path="/api/admin/create/admin" element={<AddNewAdmin />} />
        <Route path="/api/admin/edit" element={<EditAdminAccount />} />
        <Route path="/api/admin/users/all" element={<UserAccounts />} />
        <Route path="/api/admin/category/all" element={<Categories />} />

        <Route path="/api/admin/admins/adminsdetail" element={<AdminsDetail />} />
        <Route path="/api/admin/admins/adminsdelete" element={<AdminsDelete />} />

        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
