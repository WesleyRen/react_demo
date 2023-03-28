import React from 'react'
import { Box, Typography } from '@mui/material'
import { FileIcon } from './FileIcon'
import { useWorkspaceContext } from '../../Workspace/WorkspaceContext'
import { File } from '../../Workspace/WorkspaceContext'

interface IFileRowProps {
  file: File;
  name: string;
}

export const FileRow = ({ file, name }: IFileRowProps) => {
  const { activeFile, activateFile } = useWorkspaceContext()

  return (
    <Box
      display='flex'
      height='1.5rem'
      flexDirection='row'
      alignItems='center'
      key={file.path}
      px={1}
      style={{paddingLeft: 0}}
      sx={{ 
        cursor: 'default',
        background: activeFile === file ? '#DADADA' : 'inherit',
        '&:hover': {
          background: '#E6E6E6',
        }
      }}
      onClick={() => activateFile(file.path)}
    >
      <Box width="1.5rem">
        <FileIcon fileName={file.path} />
      </Box>
      <Typography variant='body2'>{name}</Typography>
    </Box>
  )
}