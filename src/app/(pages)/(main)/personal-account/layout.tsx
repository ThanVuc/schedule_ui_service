import Sidebar from "./_components/Sidebar";

export const metadata = {
  title: "Tên trang",
  description: "Mô tả ngắn gọn của trang này",
};
const InfoLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="pl-64 py-8 bg-gray-100 min-h-screen font-sans">
      <Sidebar />
      {children}
    </div>
  );
};

export default InfoLayout;
