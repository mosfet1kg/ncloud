import * as fs from 'fs';
import * as path from 'path';

export function walkSync ( dir, fileList=[] ) {
  return fs.readdirSync( dir )
    .map(file => fs.statSync(path.join(dir, file)).isDirectory()
      ? walkSync(path.join(dir, file), fileList)
      : fileList.concat(path.join(dir, file))[0])
    .reduce( (prev,curr)=>{
      if( typeof( curr ) === 'string' ) return prev.concat( [curr]);
      else return prev.concat(curr);
    }, [])
    .filter( el=>{
      return (typeof el === 'string')&&( path.basename(el) ==='paramSet.js' )
    });
}

export function mergeParams( dir ) {
  return walkSync(dir).reduce((prev,curr)=>{
    const param = require(curr).default;
    prev = { ...prev, ...param};
    return prev;
  }, {})
}
