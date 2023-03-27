import React, { createContext, ReactNode, useContext, useMemo, useState } from 'react'

export type File = {
  path: string
  contents: string
}

export const workspaceContext = createContext<{
  activeFile: File | null,
  activateFile: React.Dispatch<React.SetStateAction<string | null>>,
  files: File[]
}>({
  activeFile: null,
  activateFile: () => {},
  files: [],
})

export const WorkspaceProvider: React.FC<{ files: File[], children: ReactNode }> = ({ files, children }) => {
  const [activeFilePath, setActiveFilePath] = useState<string|null>(null)

  const activeFile = useMemo(() => {
    const foundFile = files.find((f) => f.path === activeFilePath)
    return foundFile || files[0]
  }, [activeFilePath, files])

  const ctxVal: {
    activeFile: File | null,
    activateFile: React.Dispatch<React.SetStateAction<string | null>>,
    files: File[]
  } = {
    activeFile,
    activateFile: setActiveFilePath,
    files,
  }

  return <workspaceContext.Provider value={ctxVal}>{children}</workspaceContext.Provider>
}

export function useWorkspaceContext() {
  return useContext(workspaceContext)
}