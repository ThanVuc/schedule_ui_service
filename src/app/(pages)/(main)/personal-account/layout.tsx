
export const metadata = {
  title: "Tên trang",
  description: "Mô tả ngắn gọn của trang này",
};
const InfoLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" py-8 bg-gray-100 min-h-screen font-sans">
     
      {children}
    </div>
  );
};

export default InfoLayout;
