// // "use client";

// // import React, { useState } from "react";
// // import RoleItem from "./_components/role";
// // import CustomPagination from "./_components/pagination"; 
// // import CreateRoleModal from "./_components/createRoleModal";

// // export default function RolesList() {
// //   const rolesData = Array.from({ length: 100 }, (_, i) => ({
// //     id: i + 1,
// //     name: `Quyền ${i + 1}`,
// //   }));

// //   const itemsPerPage = 5;

// //   const [searchQuery, setSearchQuery] = useState("");
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const [gotoPage, setGotoPage] = useState("");
// //   const [error, setError] = useState("");

// //   const filteredRoles = rolesData.filter((role) =>
// //     role.name.toLowerCase().includes(searchQuery.toLowerCase())
// //   );
// //   const totalPages = Math.ceil(filteredRoles.length / itemsPerPage);
// //   const currentItems = filteredRoles.slice(
// //     (currentPage - 1) * itemsPerPage,
// //     currentPage * itemsPerPage
// //   );

// //   const handlePageChange = (page: number) => {
// //     if (page >= 1 && page <= totalPages) {
// //       setCurrentPage(page);
// //     }
// //   };
// //   const handleGotoPage = () => {
// //     const page = parseInt(gotoPage);
// //     if (!isNaN(page) && page >= 1 && page <= totalPages) {
// //       setCurrentPage(page);
// //       setGotoPage("");
// //       setError("");
// //     } else {
// //       setError(`Trang phải nằm trong khoảng 1 - ${totalPages}`);
// //     }
// //   };
// //   const isGotoValid = () => {
// //     const page = parseInt(gotoPage);
// //     return !isNaN(page) && page >= 1 && page <= totalPages;
// //   };
  
// //   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     setSearchQuery(e.target.value);
// //     setCurrentPage(1);
// //   };
  
// //   return (
// //     <div className="relative w-full h-screen">
// //       <div
// //         className="absolute inset-0 z-0"
// //         style={{
// //           background:
// //             "linear-gradient(to right, #77A1D3, #79CBCA, #F896C0)",
// //           opacity: 0.3,
// //         }}
// //       />
// //       <div className="relative z-10 p-10">
// //         <h1 className="text-4xl font-bold">Danh sách quyền</h1>
// //       </div>
// //       <div className="relative z-10 flex flex-row items-center px-10 mb-4 justify-between">
// //         <div className="flex flex-row items-center space-x-4">
// //           <input
// //             type="text"
// //             placeholder="Tìm kiếm quyền..."
// //             className="h-12 px-5 rounded-full border-2 border-gray-200 focus:outline-none focus:border-blue-400 bg-white w-80"
// //             value={searchQuery}
// //             onChange={handleSearchChange}
// //           />
// //           <select className="h-12 px-4 rounded-full bg-[#D9D9D9] border-2 border-gray-200 focus:outline-none focus:border-blue-400">
// //             <option value="">Tất cả trạng thái</option>
// //             <option value="active">Hoạt động</option>
// //             <option value="inactive">Không hoạt động</option>
// //           </select>
// //         </div>


// //         {/* thêm quyền */}
// //         <CreateRoleModal />



// //       </div>
// //       <div className="relative z-10 p-10 pt-5 space-y-4">
// //         {currentItems.map((role) => (
// //           <RoleItem key={role.id} name={role.name} />
// //         ))}

// //         <CustomPagination
// //           totalPages={totalPages}
// //           currentPage={currentPage}
// //           onPageChange={handlePageChange}
// //           gotoPage={gotoPage}
// //           setGotoPage={setGotoPage}
// //           onGotoPage={handleGotoPage}
// //           isGotoValid={isGotoValid}
// //           error={error}
// //         />
// //       </div>
// //     </div>
// //   );
// // }

// "use client";

// import React, { useEffect, useState } from "react";
// import RoleItem from "./_components/role";
// import CustomPagination from "./_components/pagination";
// import CreateRoleModal from "./_components/createRoleModal";
// import { getPermissions } from "./_components/roleApi";

// interface Role {
//   id: number;
//   name: string;
//   status: string;
// }

// export default function RolesList() {
//   const [roles, setRoles] = useState<Role[]>([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [gotoPage, setGotoPage] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const itemsPerPage = 5;

//   const fetchData = async () => {
//     try {
//       setLoading(true);
//       const response = await getPermissions({ search: searchQuery });
//       setRoles(response.data);
//     } catch (error) {
//       console.error("Lỗi khi tải dữ liệu:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [searchQuery]);

//   const totalPages = Math.ceil(roles.length / itemsPerPage);
//   const currentItems = roles.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const handlePageChange = (page: number) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//   };

//   const handleGotoPage = () => {
//     const page = parseInt(gotoPage);
//     if (!isNaN(page) && page >= 1 && page <= totalPages) {
//       setCurrentPage(page);
//       setGotoPage("");
//       setError("");
//     } else {
//       setError(`Trang phải nằm trong khoảng 1 - ${totalPages}`);
//     }
//   };

//   const isGotoValid = () => {
//     const page = parseInt(gotoPage);
//     return !isNaN(page) && page >= 1 && page <= totalPages;
//   };

//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(e.target.value);
//     setCurrentPage(1);
//   };

//   return (
//     <div className="relative w-full h-screen">
//       <div
//         className="absolute inset-0 z-0"
//         style={{
//           background: "linear-gradient(to right, #77A1D3, #79CBCA, #F896C0)",
//           opacity: 0.3,
//         }}
//       />
//       <div className="relative z-10 p-10">
//         <h1 className="text-4xl font-bold">Danh sách quyền</h1>
//       </div>

//       <div className="relative z-10 flex flex-row items-center px-10 mb-4 justify-between">
//         <div className="flex flex-row items-center space-x-4">
//           <input
//             type="text"
//             placeholder="Tìm kiếm quyền..."
//             className="h-12 px-5 rounded-full border-2 border-gray-200 focus:outline-none focus:border-blue-400 bg-white w-80"
//             value={searchQuery}
//             onChange={handleSearchChange}
//           />
//           <select className="h-12 px-4 rounded-full bg-[#D9D9D9] border-2 border-gray-200 focus:outline-none focus:border-blue-400">
//             <option value="">Tất cả trạng thái</option>
//             <option value="active">Hoạt động</option>
//             <option value="inactive">Không hoạt động</option>
//           </select>
//         </div>

//         <CreateRoleModal onSuccess={fetchData} />
//       </div>

//       <div className="relative z-10 p-10 pt-5 space-y-4">
//         {loading ? (
//           <p>Đang tải dữ liệu...</p>
//         ) : (
//           currentItems.map((role) => (
//             <RoleItem
//               key={role.id}
//               id={role.id}
//               name={role.name}
//               status={role.status}
//               onRefresh={fetchData}
//             />
//           ))
//         )}

//         <CustomPagination
//           totalPages={totalPages}
//           currentPage={currentPage}
//           onPageChange={handlePageChange}
//           gotoPage={gotoPage}
//           setGotoPage={setGotoPage}
//           onGotoPage={handleGotoPage}
//           isGotoValid={isGotoValid}
//           error={error}
//         />
//       </div>
//     </div>
//   );
// }


"use client";

import React, { useState, useEffect } from "react";
import RoleItem from "./_components/role";
import CustomPagination from "./_components/pagination";
import CreateRoleModal from "./_components/createRoleModal";
import { fetchPermissions } from "./_components/roleApi";

export default function RolesList() {
  const itemsPerPage = 5;

  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [gotoPage, setGotoPage] = useState("");
  const [error, setError] = useState("");
  const [rolesData, setRolesData] = useState<{ id: number; name: string }[]>([]);

  const fetchData = async () => {
    try {
      const res = await fetchPermissions(searchQuery);
      setRolesData(res.data);
    } catch (error) {
      console.error("Lỗi khi lấy danh sách quyền:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchQuery]);

  const filteredRoles = rolesData;
  const totalPages = Math.ceil(filteredRoles.length / itemsPerPage);
  const currentItems = filteredRoles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleGotoPage = () => {
    const page = parseInt(gotoPage);
    if (!isNaN(page) && page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      setGotoPage("");
      setError("");
    } else {
      setError(`Trang phải nằm trong khoảng 1 - ${totalPages}`);
    }
  };

  const isGotoValid = () => {
    const page = parseInt(gotoPage);
    return !isNaN(page) && page >= 1 && page <= totalPages;
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="relative w-full h-screen">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(to right, #77A1D3, #79CBCA, #F896C0)",
          opacity: 0.3,
        }}
      />
      <div className="relative z-10 p-10">
        <h1 className="text-4xl font-bold">Danh sách quyền</h1>
      </div>

      <div className="relative z-10 flex flex-row items-center px-10 mb-4 justify-between">
        <div className="flex flex-row items-center space-x-4">
          <input
            type="text"
            placeholder="Tìm kiếm quyền..."
            className="h-12 px-5 rounded-full border-2 border-gray-200 focus:outline-none focus:border-blue-400 bg-white w-80"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>

        <CreateRoleModal onSuccess={fetchData} />
      </div>

      <div className="relative z-10 p-10 pt-5 space-y-4">
        {currentItems.map((role) => (
          <RoleItem key={role.id} id={role.id} name={role.name} onRefresh={fetchData} />
        ))}

        <CustomPagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          gotoPage={gotoPage}
          setGotoPage={setGotoPage}
          onGotoPage={handleGotoPage}
          isGotoValid={isGotoValid}
          error={error}
        />
      </div>
    </div>
  );
}

//Màu hồng
