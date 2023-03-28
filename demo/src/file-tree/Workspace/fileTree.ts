import { JSONSchema4 } from 'json-schema';
import files from './defaultFiles';


export function getFileTreeJSon() {
    return files.map(f => f.path).reduce((fileTree: any, path: string) => {
        const parts = path.split("/");
        let currPath = fileTree;
        for (let i = 0; i < parts.length; i++) {
            if (i === parts.length - 1) {
                currPath[parts[i]] = null; // file
            } else if (!currPath[parts[i]]) {
                currPath[parts[i]] = {}; // directory 
            } 
            currPath = currPath[parts[i]];
        }
        return fileTree;
    }, {});
}