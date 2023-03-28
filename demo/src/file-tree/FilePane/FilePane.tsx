import React from 'react'
import { Box, Typography } from '@mui/material'
import { FileRow } from './components/FileRow'
import { useWorkspaceContext } from '../Workspace/WorkspaceContext'
import { getFileTreeJSon } from '../Workspace/fileTree'
import { File } from '../Workspace/WorkspaceContext'
import './style.css'

export const FilePane = () => {
  const { files } = useWorkspaceContext()
  const fileTree = getFileTreeJSon();

  return (
    <Box>
      <Box p={1}>
        <Typography variant="h6">Files</Typography>
      </Box>
      <Box>
        <FileTree files={files} fileTree={fileTree} path=""/>
      </Box>
    </Box>
  )
}

const FileTree = ({files, fileTree, path}: {files: File[], fileTree: any, path: string}) => {
  const keys = Object.keys(fileTree).sort((a, b) => {
    if (fileTree[a] === null && fileTree[b] === null) {
      return a > b ? 1 : -1;
    } else if (fileTree[a] === null) {
      return 1;
    }
    return a > b ? 1 : -1;
  });
  return <span className="FileTree">
      {
        keys.filter(k => fileTree[k]).map(k => <ul>
          <li>{k}</li>
          <FileTree files={files} fileTree={fileTree[k]} path={path + k + "/"}/>
        </ul>)
      }
      {
        keys.filter(k => !fileTree[k]).map(k => {
          const filePath = path + k;
          const file = files.find(f => f.path === filePath);
          return <ul>
              <FileRow file={file!} name={k}/>
          </ul>
        })

      }
  </span>
}