import ItemsSideBar from "./item-side-bar";

const SideBar = () => {
    return (
        <div className="h-full w-full border-r border-gray-400 flex flex-col">
            <div className="w-full bg-[#EBF8FF] px-5 py-3">Logo</div>
            <ItemsSideBar />
        </div>
    );
}

export default SideBar;