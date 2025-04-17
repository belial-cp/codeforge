import React, { useState, createContext, useContext } from 'react'
import { modes, Mode } from '@/data/dev-mode'

interface DevModeContextType {
	activeTeam: Mode
	setActiveTeam: React.Dispatch<React.SetStateAction<Mode>>
}

const DevModeContext = createContext<DevModeContextType | undefined>(undefined)

export const DevModeProvider = ({ children }: { children: React.ReactNode }) => {
	const [activeTeam, setActiveTeam] = useState<Mode>(modes[0])
	return <DevModeContext.Provider value={{ activeTeam, setActiveTeam }}>{children}</DevModeContext.Provider>
}

export const useDevMode = () => {
	const context = useContext(DevModeContext)
	if (!context) throw new Error('useDevMode must be used within DevModeProvider')
	return context
}
