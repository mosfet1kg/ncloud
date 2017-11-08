export class Logger {

  private constructor(){}

  debug( ...props ) {
    if ( process.env.NODE_ENV === 'ncloudDebug' ) {
      const created_at = new Date().toLocaleTimeString();
      const message  = Object.keys( props ).reduce((prev, key)=>{
        return [
          ...prev,
          props[key]
        ]
      }, [ "[" + created_at + "]" ]);

      console.log.apply( console, message );
    }
  }

  static createLogger(){
    return new Logger();
  }
}
