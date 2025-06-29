// // components/CreateRoleModal.tsx
// import { useState } from "react";
// import ReusableModal from "./modal";

// const resources = ["Admin", "Quản trị viên", "Người dùng"];

// const allActions = ["Action 1", "Action 2", "Action 3", "Action 4", "Action 5"];

// export default function CreateRoleModal() {
//   const [selectedResource, setSelectedResource] = useState(resources[0]);
 
//   const [selectedActions, setSelectedActions] = useState<string[]>([]);
//   const [name, setName] = useState("");
//   const [note, setNote] = useState("");

//   const handleCheckboxChange = (action: string) => {
//     setSelectedActions((prev) =>
//       prev.includes(action)
//         ? prev.filter((a) => a !== action)
//         : [...prev, action]
//     );
//   };

//   const handleSubmit = () => {
//     const newRole = {
//       name,
//       note,
//       resource: selectedResource,
//       status,
//       actions: selectedActions,
//     };
//     console.log("➕ Thêm quyền mới:", newRole);
//     // Gọi API hoặc callback truyền từ props nếu cần
//   };

//   return (
//     <ReusableModal
//       title="Thêm quyền"
//       trigger={
//         <button className="h-12 px-6 rounded-2xl cursor-pointer bg-blue-500 text-white font-semibold hover:bg-blue-600 transition">
//           Thêm quyền
//         </button>
//       }
//       onSubmit={handleSubmit}
//       submitText="Lưu"
//       cancelText="Thoát"
//     >
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        
//         </div>

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
import ReusableModal from "./modal";
import { createPermission, getResources, getActionsByResource } from "./roleApi";

interface Props {
  onSuccess: () => void;
}

export default function CreateRoleModal({ onSuccess }: Props) {
  const [resources, setResources] = useState<string[]>([]);
  const [actions, setActions] = useState<string[]>([]);

  const [selectedResource, setSelectedResource] = useState("");
  const [selectedActions, setSelectedActions] = useState<string[]>([]);
  const [name, setName] = useState("");
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
      const newRole = {
        name,
        note,
        resource: selectedResource,
        actions: selectedActions,
      };
      await createPermission(newRole);
      onSuccess();
    } catch (error) {
      console.error("Lỗi khi tạo quyền:", error);
      alert("Tạo quyền thất bại");
    }
  };

  return (
    <ReusableModal
      title="Thêm quyền"
      trigger={
        <button className="h-12 px-6 rounded-2xl cursor-pointer bg-blue-500 text-white font-semibold hover:bg-blue-600 transition">
          Thêm quyền
        </button>
      }
      onSubmit={handleSubmit}
      submitText="Lưu"
      cancelText="Thoát"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

 