import { createContext, useState } from "react";

interface IModalContext {
    modal: boolean;
    close: () => void;
    open: () => void;
}

export const ModalContext = createContext<IModalContext>({
    modal: false,
    close: () => {},
    open: () => {},
});

export const ModalState = ({ children }: { children: React.ReactNode }) => {
    const [modal, setModal] = useState(false);

    // open modal
    const open = () => setModal(true);

    // close modal
    const close = () => setModal(false);

    return (
        <ModalContext.Provider value={{ modal, open, close }}>
            {children}
        </ModalContext.Provider>
    );
};
