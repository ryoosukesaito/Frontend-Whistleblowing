export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const pageHeight = { height: "calc(100vh - 66px)" };

export const sidebarMenu = [
  { name: "Admin", href: "/api/admin/all" },
  { name: "Users", href: "/api/admin/users/all" },
  { name: "Categories", href: "/api/admin/category/all" },
];

export const reportTableHeaders = [
  "Status",
  "Subject",
  "Agent",
  "Post Date",
  "Update date",
];
export const adminsTableHeaders = ["ID", "Role", "Name", "Created Date"];
export const usersTableHeaders = ["UserID", "Email", "Name", "Created Date"];
