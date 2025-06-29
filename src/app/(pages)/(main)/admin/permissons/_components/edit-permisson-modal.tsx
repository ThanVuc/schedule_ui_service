// // components/editRoleModal.tsx
// import { useState } from "react";
// import { Pencil } from "lucide-react";

// import ReusableModal from "./modal";
// // import { Button } from "../../../../components/ui/button";

// const resources = ["Admin", "Quản trị viên", "Người dùng"];
// const statuses = ["Hoạt động", "Tạm ngưng"];
// const allActions = ["Action 1", "Action 2", "Action 3", "Action 4", "Action 5"];

// export default function EditRoleModal({ roleName }: { roleName: string }) {
//   const [selectedResource, setSelectedResource] = useState(resources[0]);
//   const [status, setStatus] = useState(statuses[0]);
//   const [selectedActions, setSelectedActions] = useState<string[]>([
//     "Action 1",
//     "Action 2",
//     "Action 3",
//     "Action 4",
//   ]);
//   const [name, setName] = useState(roleName);
//   const [note, setNote] = useState("");

//   const handleCheckboxChange = (action: string) => {
//     setSelectedActions((prev) =>
//       prev.includes(action)
//         ? prev.filter((a) => a !== action)
//         : [...prev, action]
//     );
//   };

//   const handleSubmit = () => {
//     const data = {
//       name,
//       note,
//       resource: selectedResource,
//       status,
//       actions: selectedActions,
//     };
//     console.log("📝 Lưu dữ liệu:", data);
//   };

//   return (
//     <ReusableModal
//       title="Sửa quyền"
//       trigger={
//         <button className="flex items-center gap-1 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-md text-sm hover:bg-yellow-200">
//             <Pencil size={14} />
//            Sửa
//         </button>
//       }
//       onSubmit={handleSubmit}
//       submitText="Lưu"
//       cancelText="Thoát"
//     >
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Left column */}
//         <div className="space-y-4">
//           <div>
//             <label className="font-medium">Resource</label>
//             <select
//               value={selectedResource}
//               onChange={(e) => setSelectedResource(e.target.value)}
//               className="w-full border rounded px-3 py-2 mt-1"
//             >
//               {resources.map((r) => (
//                 <option key={r}>{r}</option>
//               ))}
//             </select>
//           </div>
//           <div>
//             <label className="font-medium">Trạng thái</label>
//             <select
//               value={status}
//               onChange={(e) => setStatus(e.target.value)}
//               className="w-full border rounded px-3 py-2 mt-1"
//             >
//               {statuses.map((s) => (
//                 <option key={s}>{s}</option>
//               ))}
//             </select>
//           </div>
//         </div>

//         {/* Right column - Actions */}
//         <div>
//           <label className="font-medium">Hành động</label>
//           <div className="border rounded px-3 py-2 mt-1 space-y-2 shadow-sm">
//             {allActions.map((action) => (
//               <div key={action} className="flex items-center gap-2">
//                 <input
//                   type="checkbox"
//                   checked={selectedActions.includes(action)}
//                   onChange={() => handleCheckboxChange(action)}
//                 />
//                 <span>{action}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Name + Note */}
//       <div className="mt-6 space-y-4">
//         <div>
//           <label className="font-medium">Tên quyền</label>
//           <input
//             type="text"
//             placeholder="Value"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="w-full border rounded px-3 py-2 mt-1"
//           />
//         </div>
//         <div>
//           <label className="font-medium">Ghi chú</label>
//           <textarea
//             placeholder="Value"
//             value={note}
//             onChange={(e) => setNote(e.target.value)}
//             className="w-full border rounded px-3 py-2 mt-1"
//             rows={3}
//           />
//         </div>
//       </div>
//     </ReusableModal>
//   );
// }

import { useState, useEffect } from "react";
import { Pencil } from "lucide-react";

import ReusableModal from "./modal";
import { updatePermission, getResources, getActionsByResource } from "./permisson-api";

interface Props {
  roleId: number;
  roleName: string;
  onSuccess: () => void;
}

export default function EditRoleModal({ roleId, roleName, onSuccess }: Props) {
  const [resources, setResources] = useState<string[]>([]);
  const [actions, setActions] = useState<string[]>([]);

  const [selectedResource, setSelectedResource] = useState("");
  const [selectedActions, setSelectedActions] = useState<string[]>([]);
  const [name, setName] = useState(roleName);
  const [note, setNote] = useState("");

  useEffect(() => {
    const fetchResources = async () => {
      const res = await getResources();
      setResources(res.data);
      setSelectedResource(res.data[0]);
    };
    fetchResources();
  }, []);

  useEffect(() => {
    const fetchActions = async () => {
      if (!selectedResource) return;
      const res = await getActionsByResource(selectedResource);
      setActions(res.data);
    };
    fetchActions();
  }, [selectedResource]);

  const handleCheckboxChange = (action: string) => {
    setSelectedActions((prev) =>
      prev.includes(action)
        ? prev.filter((a) => a !== action)
        : [...prev, action]
    );
  };

  const handleSubmit = async () => {
    try {
      const data = {
        name,
        note,
        resource: selectedResource,
        actions: selectedActions,
      };
      await updatePermission(roleId, data);
      onSuccess();
    } catch (error) {
      console.error("Lỗi khi cập nhật quyền:", error);
      alert("Cập nhật quyền thất bại");
    }
  };

  return (
    <ReusableModal
      title="Sửa quyền"
      trigger={
        <button className="flex items-center gap-1 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-md text-sm hover:bg-yellow-200">
          <Pencil size={14} />
          Sửa
        </button>
      }
      onSubmit={handleSubmit}
      submitText="Lưu"
      cancelText="Thoát"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left column */}
        <div className="space-y-4">
          <div>
            <label className="font-medium">Resource</label>
            <select
              value={selectedResource}
              onChange={(e) => setSelectedResource(e.target.value)}
              className="w-full border rounded px-3 py-2 mt-1"
            >
              {resources.map((r) => (
                <option key={r}>{r}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Right column - Actions */}
        <div>
          <label className="font-medium">Hành động</label>
          <div className="border rounded px-3 py-2 mt-1 space-y-2 shadow-sm">
            {actions.map((action) => (
              <div key={action} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedActions.includes(action)}
                  onChange={() => handleCheckboxChange(action)}
                />
                <span>{action}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Name + Note */}
      <div className="mt-6 space-y-4">
        <div>
          <label className="font-medium">Tên quyền</label>
          <input
            type="text"
            placeholder="Value"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded px-3 py-2 mt-1"
          />
        </div>
        <div>
          <label className="font-medium">Ghi chú</label>
          <textarea
            placeholder="Value"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="w-full border rounded px-3 py-2 mt-1"
            rows={3}
          />
        </div>
      </div>
    </ReusableModal>
  );
}
