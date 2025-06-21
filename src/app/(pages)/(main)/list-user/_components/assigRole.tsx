interface AssigRoleProps {
    onClose: () => void;
    onAssig: (id: string) => void;

    id: string,
    name: string,
}

const AssigRole = ({ onClose, onAssig, id, name }: AssigRoleProps) => {
    return (<div className="bg-white w-full max-w-[600px] h-full max-h-[700px] border-2 border-[#bababa] 
    shadow-lg rounded-lg overflow-y-auto">
        <div>
            <button onClick={onClose}>huy</button>
        </div>
    </div>);
}

export default AssigRole;