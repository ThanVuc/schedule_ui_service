export interface CurtainProps {
    children: React.ReactNode;
}

export const Curtain = ({ children }: CurtainProps) => {
    return (
        <div className="fixed inset-0 z-1000 flex items-center justify-center backdrop-blur-[] bg-black/10">
            {children}
        </div>
    )
}