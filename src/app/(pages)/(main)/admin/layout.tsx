import Sidebar from "./_components/Sidebar";


const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col">
            <div className="flex">
                <div>
                    <Sidebar />
                </div>
                {children}
            </div>
        </div>
    );
};

export default MainLayout;