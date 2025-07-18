import { Checkbox } from "@/components/ui/checkbox";
import { FormatRole } from "@/utils/formatRole";
import { AssigListRoleModel } from "../model/assiglistrole";
interface AssigListRoleProps {
    IFuser: AssigListRoleModel;
    checked?: boolean;
    onToggle?: () => void;
}
const AssigListRole = ({ IFuser, checked, onToggle }: AssigListRoleProps) => {
    console.log("AssigListRole", IFuser, checked);
    return (
        <div className="flex items-center justify-start gap-6 p-4 border-b border-gray-200">
            <div>
                <Checkbox checked={checked} onCheckedChange={onToggle}>{IFuser.roleName}</Checkbox>
            </div>
            <div>
                <p>{FormatRole(IFuser.roleName)}</p>
            </div>
        </div>
    );
}

export default AssigListRole;