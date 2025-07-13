
export const mockRoles = [
  {
    id: 1,
    name: "Quản trị hệ thống",
    note: "Quyền cao nhất",
    resource: "user",
    actions: ["create", "update", "delete"],
  },
  {
    id: 2,
    name: "Người dùng cơ bản",
    note: "Chỉ được xem dữ liệu",
    resource: "user",
    actions: ["read"],
  },
  {
    id: 3,
    name: "Quản lý nội dung",
    note: "Quản lý bài viết và bình luận",
    resource: "post",
    actions: ["create", "update", "delete", "read"],
  },
  {
    id: 4,
    name: "Biên tập viên",
    note: "Chỉ chỉnh sửa bài viết",
    resource: "post",
    actions: ["update"],
  },
  {
    id: 5,
    name: "Quản lý người dùng",
    note: "Toàn quyền với tài khoản người dùng",
    resource: "users",
    actions: ["create", "read", "update", "delete"],
  },
  {
    id: 6,
    name: "Biên tập bài viết",
    note: "Chỉ đọc và bình luận bài viết",
    resource: "posts",
    actions: ["read", "comment"],
  },
  {
    id: 7,
    name: "Khách hàng",
    note: "Chỉ được xem và mua sản phẩm",
    resource: "products",
    actions: ["read", "buy"],
  },
];
