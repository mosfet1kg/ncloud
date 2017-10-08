import { indexOf, zipObject } from 'lodash';

function alias( args, alias_set_object){
  if( Array.isArray( args )){
    return args.map( function(el){
      return replace_with_alias_set(el, alias_set_object);
    })
  }else{
    return replace_with_alias_set(args, alias_set_object);
  }
}

function replace_with_alias_set( args_object, alias_set_object: { src: string, dst: string }[] ){
  const keys: string[] = Object.keys( args_object );
  const values = keys.map( key=>args_object[key]);

  alias_set_object.forEach( el=>{
    const idx = indexOf( keys, el.src );
    keys[ idx ] = el.dst;
  });

  return zipObject( keys, values );
}

export { alias };
export default alias;
