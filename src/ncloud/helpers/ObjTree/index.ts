/*
 *	Based on ObjTree.js from
 *	Yusuke Kawasaki http://www.kawa.net/
 *  https://github.com/rranauro/ObjTree
 *  VERSION = "0.24";
*/

export class ObjTree {
  static xmlDecl = '<?xml version="1.0" encoding="UTF-8" ?>\n';
  static attr_prefix = '-';

  static writeXML ( tree ) {
    const xml = this.hash_to_xml( null, tree );
    return ObjTree.xmlDecl + xml;
  };

  static hash_to_xml ( name, tree ) {
    const elem = [];
    let attr = [];
    for( let key in tree ) {
      if ( ! tree.hasOwnProperty(key) ) continue;
      const val = tree[key];
      if ( key.charAt(0) != ObjTree.attr_prefix ) {
        if ( typeof(val) == "undefined" || val == null ) {
          elem[elem.length] = "<"+key+" />";
        } else if ( typeof(val) == "object" && val.constructor == Array ) {
          elem[elem.length] = this.array_to_xml( key, val );
        } else if ( typeof(val) == "object" ) {
          elem[elem.length] = this.hash_to_xml( key, val );
        } else {
          elem[elem.length] = this.scalar_to_xml( key, val );
        }
      } else {
        attr[attr.length] = " "+(key.substring(1))+'="'+(this.xml_escape( val ))+'"';
      }
    }
    let jattr = attr.join("");
    let jelem = elem.join("");
    if ( typeof(name) == "undefined" || name == null ) {
      // no tag
    } else if ( elem.length > 0 ) {
      if ( jelem.match( /\n/ )) {
        jelem = "<"+name+jattr+">\n"+jelem+"</"+name+">\n";
      } else {
        jelem = "<"+name+jattr+">"  +jelem+"</"+name+">\n";
      }
    } else {
      jelem = "<"+name+jattr+" />\n";
    }
    return jelem;
  };

  static array_to_xml ( name, array ) {
    let out = [];
    for( let i=0; i<array.length; i++ ) {
      const val = array[i];
      if ( typeof(val) == "undefined" || val == null ) {
        out[out.length] = "<"+name+" />";
      } else if ( typeof(val) == "object" && val.constructor == Array ) {
        out[out.length] = this.array_to_xml( name, val );
      } else if ( typeof(val) == "object" ) {
        out[out.length] = this.hash_to_xml( name, val );
      } else {
        out[out.length] = this.scalar_to_xml( name, val );
      }
    }
    return out.join("");
  };

  static scalar_to_xml ( name, text ) {
    if ( name == "#text" ) {
      return this.xml_escape(text);
    } else {
      return "<"+name+">"+this.xml_escape(text)+"</"+name+">\n";
    }
  };

  static xml_escape ( text ) {
    return String(text).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  };
}
