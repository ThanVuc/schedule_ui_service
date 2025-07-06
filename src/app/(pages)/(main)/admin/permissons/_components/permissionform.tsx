import { useEffect, useState } from "react";

export interface PermissionData {
  name: string;
  note: string;
  resource: string;
  actions: string[];
}

interface Props {
  initialData?: Partial<PermissionData>;
  onChange: (data: PermissionData) => void;
  readOnly?: boolean;
}

// Dữ liệu giả thay cho API
const mockResources = ["users", "posts", "products"];
const mockActions: Record<string, string[]> = {
  users: ["create", "read", "update", "delete"],
  posts: ["read", "comment"],
  products: ["read", "buy"],
};

export default function PermissionForm({
  initialData = {},
  onChange,
  readOnly = false,
}: Props) {
  const [selectedResource, setSelectedResource] = useState(
    initialData.resource || mockResources[0]
  );
  const [selectedActions, setSelectedActions] = useState<string[]>(
    initialData.actions || []
  );
  const [name, setName] = useState(initialData.name || "");
  const [note, setNote] = useState(initialData.note || "");

  const actions = mockActions[selectedResource] || [];

  useEffect(() => {
    onChange({
      name,
      note,
      resource: selectedResource,
      actions: selectedActions,
    });
  }, [name, note, selectedResource, selectedActions]);

  const handleCheckboxChange = (action: string) => {
    if (readOnly) return;
    setSelectedActions((prev) =>
      prev.includes(action)
        ? prev.filter((a) => a !== action)
        : [...prev, action]
    );
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Resource */}
        <div className="space-y-4">
          <label className="font-medium">Resource</label>
          <select
            disabled={readOnly}
            value={selectedResource}
            onChange={(e) => setSelectedResource(e.target.value)}
            className="w-full border rounded px-3 py-2 mt-1 text-sm disabled:bg-gray-100"
          >
            {mockResources.map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </div>

        {/* Actions */}
        <div>
          <label className="font-medium">Hành động</label>
          <div className="border rounded px-3 py-2 mt-1 space-y-2 shadow-sm max-h-48 overflow-y-auto">
            {actions.length > 0 ? (
              actions.map((action) => (
                <div
                  key={action}
                  className="flex items-center gap-2 text-sm"
                >
                  <input
                    type="checkbox"
                    checked={selectedActions.includes(action)}
                    onChange={() => handleCheckboxChange(action)}
                    disabled={readOnly}
                  />
                  <span>{action}</span>
                </div>
              ))
            ) : (
              <span className="text-gray-500 italic">Chưa có hành động</span>
            )}
          </div>
        </div>
      </div>

      {/* Tên và Ghi chú */}
      <div className="mt-6 space-y-4">
        <div>
          <label className="font-medium">Tên quyền</label>
          <input
            type="text"
            placeholder="Tên quyền"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={readOnly}
            className="w-full border rounded px-3 py-2 mt-1 text-sm disabled:bg-gray-100"
          />
        </div>
        <div>
          <label className="font-medium">Ghi chú</label>
          <textarea
            placeholder="Ghi chú"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            disabled={readOnly}
            className="w-full border rounded px-3 py-2 mt-1 text-sm disabled:bg-gray-100"
            rows={3}
          />
        </div>
      </div>
    </div>
  );
}
