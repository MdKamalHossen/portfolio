import { useState, useEffect, useContext, createContext } from 'react';

interface LayoutContextProps {
  children: React.ReactNode
}

const themes = {
  tatami: {
    borders: '',
    headerBg: '#E0D4B4',
    mainBg: '#E0D4B4',
    sidebarLeftBg: '#E0D4B4',
    sidebarRightBg: '#E0D4B4',
    bottombarBg: '#E0D4B4',
    poomgoBg: '#E0D4B4',
    dohandsBg: '#E0D4B4',
  },
  bauhaus: {
    borders: 'none',
    headerBg: '#EAEAEA',
    mainBg: '#EAEAEA',
    sidebarLeftBg: '#DF0000',
    sidebarRightBg: '#FFCF00',
    bottombarBg: '#2822DD',
    poomgoBg: '#2822DD',
    dohandsBg: '#FFF',
  }
}

const initialState = {
  theme: themes.bauhaus,
  toggle: () => { }
}

const LayoutContext = createContext(initialState);

export function LayoutWrapper({ children }: LayoutContextProps) {
  const [tatami, setTatami] = useState(false) // Default theme is tatami

  // On mount, read the preferred theme from the persistence
  useEffect(() => {
    const isTatami = localStorage.getItem('tatami') === 'false'
    setTatami(isTatami)
  }, [tatami])

  // To toggle between tatami and bauhaus modes
  const toggle = (): void => {
    const isTatami = tatami
    localStorage.setItem('tatami', JSON.stringify(isTatami))
    setTatami(!isTatami)
  }

  const theme = tatami ? themes.bauhaus : themes.tatami

  return (
    <LayoutContext.Provider value={{ theme, toggle }}>
      {children}
    </LayoutContext.Provider>
  );
}

export function useLayoutContext() {
  return useContext(LayoutContext);
}