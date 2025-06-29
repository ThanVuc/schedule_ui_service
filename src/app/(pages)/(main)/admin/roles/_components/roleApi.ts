// // services/roleApi.ts
// import axios from 'axios';

// const API_BASE_URL = '/permissions';

// // Lấy danh sách quyền (có tìm kiếm và lọc)
// export const getPermissions = (params?: { search?: string; filter?: string }) => {
//   return axios.get(API_BASE_URL, { params });
// };

// // Tạo mới quyền
// export const createPermission = (data: any) => {
//   return axios.post(`${API_BASE_URL}/create`, data);
// };

// // Lấy chi tiết 1 quyền
// export const getPermissionById = (id: number | string) => {
//   return axios.get(`${API_BASE_URL}/${id}`);
// };

// // Cập nhật quyền
// export const updatePermission = (id: number | string, data: any) => {
//   return axios.put(`${API_BASE_URL}/${id}/update`, data);
// };

// // Xóa quyền
// export const deletePermission = (id: number | string) => {
//   return axios.delete(`${API_BASE_URL}/${id}/delete`);
// };

// // Lấy thống kê người dùng theo quyền
// export const getUserStatistics = () => {
//   return axios.get(`${API_BASE_URL}/users-statistic`);
// };

// // Lấy danh sách resources
// export const getResources = () => {
//   return axios.get(`${API_BASE_URL}/resources`);
// };

// // Lấy danh sách actions theo resource_id
// export const getActionsByResource = (resourceId: number | string) => {
//   return axios.get(`${API_BASE_URL}/actions/${resourceId}`);
// };


import axios from "axios";

const api = axios.create({
  baseURL: "/api", // thay đổi nếu cần
});

// export const fetchPermissions = (search?: string, filter?: string) => {
//   const params: Record<string, string> = {};
//   if (search) params.search = search;
//   if (filter) params.filter = filter;
//   return api.get("/permissions", { params });
// };

export const fetchPermissions = (search?: string, page = 1, limit = 5) => {
  const params: Record<string, string> = {
    page: page.toString(),
    limit: limit.toString(),
  };
  if (search) params.search = search;
  
  return api.get("/permissions", { params });
};

export const createPermission = (data: {
  name: string;
  note: string;
  resource: string;
  actions: string[];
}) => {
  return api.post("/permissions/create", data);
};

export const updatePermission = (id: number, data: {
  name: string;
  note: string;
  resource: string;
  actions: string[];
}) => {
  return api.put(`/permissions/${id}/update`, data);
};

export const deletePermission = (id: number) => {
  return api.delete(`/permissions/${id}/delete`);
};

export const getResources = () => {
  return api.get("/permissions/resources");
};

export const getActionsByResource = (resourceId: string) => {
  return api.get(`/permissions/actions/${resourceId}`);
};
