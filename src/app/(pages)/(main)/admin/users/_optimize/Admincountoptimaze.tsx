import { IFUser } from "@/app/model/user";
interface AdminCountOptimizeProps {
    listUser: IFUser[];
}
const AdminCountOptimize = ({ listUser }: AdminCountOptimizeProps) => {
    const adminCount = listUser.filter((user) => user.role.some(role => role.toLowerCase() === "admin")).length;
    return (<div>
        <span className="text-[#2A70D2]">Tổng cộng: {adminCount} quản trị viên</span>
    </div>);
}

export default AdminCountOptimize;