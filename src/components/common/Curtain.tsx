import { useEffect, useState } from "react";

export interface CurtainProps {
    children: React.ReactNode;
    onClose: (isOpen: boolean) => void;
}

export const Curtain = ({ children, onClose }: CurtainProps) => {


    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose(false);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);
    return (
        <div className="fixed inset-0 z-1000 flex items-center justify-center backdrop-blur-[] bg-black/10"
            onClick={() => onClose(false)}
        >
            {children}
        </div>
    )
}