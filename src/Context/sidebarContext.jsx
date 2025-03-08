import { createContext, useState } from 'react';

export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
    const [mobileSidebarVisible, setMobileSidebarVisible] = useState(false);

    return (
        <SidebarContext.Provider value={{ mobileSidebarVisible, setMobileSidebarVisible }}>
            {children}
        </SidebarContext.Provider>
    );
};

export default SidebarProvider;
