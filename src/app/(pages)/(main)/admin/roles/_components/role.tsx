// import React from "react";
// import { Eye } from "lucide-react";
// import ReusableModal from "./modal";
// // import { Button } from "../../../../components/ui/button";
// import EditRoleModal from "./editRoleModal";
// import DeleteRoleModal from "./deleteRoleModal";

// interface RoleItemProps {
//   name: string
// }


// export default function RoleItem({ name }: RoleItemProps) {
//   const handleDelete = () => {
//     alert(`Đã xóa quyền: ${name}`);
//   };

  
//   return (
//     <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border mb-4">
//       <span className="text-lg font-medium">{name}</span>

//       <div className="flex items-center gap-2">
//         <div className="flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full">
//           <span className="w-2 h-2 bg-green-500 rounded-full" />
//           <span className="text-sm">Hoạt động</span>
//         </div>

//         {/* Xem */}
//         <ReusableModal
//           title="Chi tiết quyền"
//           description="Thông tin chi tiết của quyền."
//           trigger={
//             <button className="flex items-center gap-1 bg-gray-100 text-gray-800 px-3 py-1 rounded-md text-sm hover:bg-gray-200">
//               <Eye size={14} />
//               Xem
//             </button>
//           }
//         >
//           <p>Tên quyền: <strong>{name}</strong></p>
//           <p>Trạng thái: Hoạt động</p>
//         </ReusableModal>

//         {/* Sửa */}
//         <EditRoleModal roleName={name} />

//         {/* Xóa */}
//         <DeleteRoleModal roleName={name} onDelete={handleDelete} />
//       </div>
//     </div>
//   );
// }




// import React from "react";
// import { Eye } from "lucide-react";
// import ReusableModal from "./modal";
// import EditRoleModal from "./editRoleModal";
// import DeleteRoleModal from "./deleteRoleModal";

// interface RoleItemProps {
//   id: number;
//   name: string;
//   status: string;
//   onRefresh: () => void;
// }

// export default function RoleItem({ id, name, status, onRefresh }: RoleItemProps) {
//   const handleDelete = async () => {
//     try {
//       const confirmed = confirm(`Bạn có chắc muốn xóa quyền "${name}"?`);
//       if (!confirmed) return;

//       const { deletePermission } = await import("./roleApi");
//       await deletePermission(id);
//       onRefresh();
//     } catch (error) {
//       console.error("Lỗi khi xóa quyền:", error);
//       alert("Xóa quyền thất bại!");
//     }
//   };

//   return (
//     <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border mb-4">
//       <span className="text-lg font-medium">{name}</span>

//       <div className="flex items-center gap-2">
//         <div className="flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full">
//           <span className="w-2 h-2 bg-green-500 rounded-full" />
//           <span className="text-sm">{status}</span>
//         </div>

//         {/* Xem */}
//         <ReusableModal
//           title="Chi tiết quyền"
//           description="Thông tin chi tiết của quyền."
//           trigger={
//             <button className="flex items-center gap-1 bg-gray-100 text-gray-800 px-3 py-1 rounded-md text-sm hover:bg-gray-200">
//               <Eye size={14} />
//               Xem
//             </button>
//           }
//         >
//           <p>Tên quyền: <strong>{name}</strong></p>
//           <p>Trạng thái: {status}</p>
//         </ReusableModal>

//         {/* Sửa */}
//         <EditRoleModal roleId={id} roleName={name} onSuccess={onRefresh} />

//         {/* Xóa */}
//         <DeleteRoleModal roleName={name} onDelete={handleDelete} />
//       </div>
//     </div>
//   );
// }


import React from "react";
import { Eye } from "lucide-react";
import ReusableModal from "./modal";
import EditRoleModal from "./editRoleModal";
import DeleteRoleModal from "./deleteRoleModal";

interface RoleItemProps {
  id: number;
  name: string;
  onRefresh: () => void;
}

export default function RoleItem({ id, name, onRefresh }: RoleItemProps) {
  const handleDelete = async () => {
    try {
      const confirmed = confirm(`Bạn có chắc muốn xóa quyền "${name}"?`);
      if (!confirmed) return;

      const { deletePermission } = await import("./roleApi");
      await deletePermission(id);
      onRefresh();
    } catch (error) {
      console.error("Lỗi khi xóa quyền:", error);
      alert("Xóa quyền thất bại!");
    }
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border mb-4">
      <span className="text-lg font-medium">{name}</span>

      <div className="flex items-center gap-2">
        {/* Xem */}
        <ReusableModal
          title="Chi tiết quyền"
          description="Thông tin chi tiết của quyền."
          trigger={
            <button className="flex items-center gap-1 bg-gray-100 text-gray-800 px-3 py-1 rounded-md text-sm hover:bg-gray-200">
              <Eye size={14} />
              Xem
            </button>
          }
        >
          <p>Tên quyền: <strong>{name}</strong></p>
        </ReusableModal>

        {/* Sửa */}
        <EditRoleModal roleId={id} roleName={name} onSuccess={onRefresh} />

        {/* Xóa */}
        <DeleteRoleModal roleName={name} onDelete={handleDelete} />
      </div>
    </div>
  );
}
