(function () {
'use strict';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};



function unwrapExports (x) {
	return x && x.__esModule ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var jquery = createCommonjsModule(function (module) {
/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
( function( global, factory ) {

	{

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : commonjsGlobal, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		noModule: true
	};

	function DOMEval( code, doc, node ) {
		doc = doc || document;

		var i,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {
				if ( node[ i ] ) {
					script[ i ] = node[ i ];
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.3.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

}
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc, node );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		div.style.position = "absolute";
		scrollboxSizeVal = div.offsetWidth === 36 || "absolute";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5
		) );
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),
		val = curCSS( elem, dimension, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox;

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = valueIsBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ dimension ] );

	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	if ( val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) {

		val = elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ];

		// offsetWidth/offsetHeight provide border-box values
		valueIsBorderBox = true;
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),
				isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra && boxModelAdjustment(
					elem,
					dimension,
					extra,
					isBorderBox,
					styles
				);

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && support.scrollboxSize() === styles.position ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof undefined === "function" && undefined.amd ) {
	undefined( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );
});

var flatpickr_1 = createCommonjsModule(function (module) {
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var flatpickr = function flatpickr(selector, config) {
	var elements = void 0;

	var createInstance = function createInstance(element) {
		if (element._flatpickr) {
			element._flatpickr.destroy();
		}

		element._flatpickr = new flatpickr.init(element, config);
		return element._flatpickr;
	};

	if (selector.nodeName) {
		return createInstance(selector);
	}
	/*
 Utilize the performance of native getters if applicable
 https://jsperf.com/getelementsbyclassname-vs-queryselectorall/18
 https://jsperf.com/jquery-vs-javascript-performance-comparison/22
 */
	else if (/^#[a-zA-Z0-9\-_]*$/.test(selector)) {
			return createInstance(document.getElementById(selector.slice(1)));
		} else if (/^\.[a-zA-Z0-9\-_]*$/.test(selector)) {
			elements = document.getElementsByClassName(selector.slice(1));
		} else {
			elements = document.querySelectorAll(selector);
		}

	var instances = [];

	for (var i = 0; i < elements.length; i++) {
		instances.push(createInstance(elements[i]));
	}

	if (instances.length === 1) {
		return instances[0];
	}

	return {
		calendars: instances,
		byID: function byID(id) {
			return document.getElementById(id)._flatpickr;
		}
	};
};

/**
 * @constructor
 */
flatpickr.init = function (element, instanceConfig) {
	function createElement(tag, className, content) {
		var newElement = document.createElement(tag);

		if (content) {
			newElement.textContent = content;
		}

		if (className) {
			newElement.className = className;
		}

		return newElement;
	}

	var debounce = function debounce(func, wait, immediate) {
		var timeout = void 0;
		return function () {
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			var context = this;

			var later = function later() {
				timeout = null;
				if (!immediate) {
					func.apply(context, args);
				}
			};

			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (immediate && !timeout) {
				func.apply(context, args);
			}
		};
	};

	// functions
	var self = this;
	var parseConfig = void 0,
	    init = void 0,
	    wrap = void 0,
	    uDate = void 0,
	    equalDates = void 0,
	    pad = void 0,
	    monthToStr = void 0,
	    isEnabled = void 0,
	    buildMonthNavigation = void 0,
	    buildWeekdays = void 0,
	    buildCalendar = void 0,
	    buildDays = void 0,
	    buildWeeks = void 0,
	    buildTime = void 0,
	    timeWrapper = void 0,
	    yearScroll = void 0,
	    updateValue = void 0,
	    amPMToggle = void 0,
	    onKeyDown = void 0,
	    onResize = void 0,
	    updateNavigationCurrentMonth = void 0,
	    handleYearChange = void 0,
	    changeMonth = void 0,
	    getDaysinMonth = void 0,
	    documentClick = void 0,
	    selectDate = void 0,
	    getRandomCalendarIdStr = void 0,
	    bind = void 0,
	    triggerChange = void 0;

	// elements & variables
	var calendarContainer = void 0,
	    weekdayContainer = void 0,
	    timeContainer = void 0,
	    navigationCurrentMonth = void 0,
	    monthsNav = void 0,
	    prevMonthNav = void 0,
	    currentYearElement = void 0,
	    currentMonthElement = void 0,
	    nextMonthNav = void 0,
	    calendar = void 0,
	    weekNumbers = void 0,
	    now = new Date(),
	    wrapperElement = void 0,
	    clickEvt = void 0;

	self.formats = {
		// weekday name, short, e.g. Thu
		D: function D() {
			return self.l10n.weekdays.shorthand[self.formats.w()];
		},

		// full month name e.g. January
		F: function F() {
			return monthToStr(self.formats.n() - 1, false);
		},

		// hours with leading zero e.g. 03
		H: function H() {
			return pad(self.selectedDateObj.getHours());
		},

		// day (1-30) with ordinal suffix e.g. 1st, 2nd
		J: function J() {
			return self.formats.j() + self.l10n.ordinal(self.formats.j());
		},

		// AM/PM
		K: function K() {
			return self.selectedDateObj.getHours() > 11 ? "PM" : "AM";
		},

		// shorthand month e.g. Jan, Sep, Oct, etc
		M: function M() {
			return monthToStr(self.formats.n() - 1, true);
		},

		// seconds 00-59
		S: function S() {
			return pad(self.selectedDateObj.getSeconds());
		},

		// unix timestamp
		U: function U() {
			return self.selectedDateObj.getTime() / 1000;
		},

		// full year e.g. 2016
		Y: function Y() {
			return self.selectedDateObj.getFullYear();
		},

		// day in month, padded (01-30)
		d: function d() {
			return pad(self.formats.j());
		},

		// hour from 1-12 (am/pm)
		h: function h() {
			return self.selectedDateObj.getHours() % 12 ? self.selectedDateObj.getHours() % 12 : 12;
		},

		// minutes, padded with leading zero e.g. 09
		i: function i() {
			return pad(self.selectedDateObj.getMinutes());
		},

		// day in month (1-30)
		j: function j() {
			return self.selectedDateObj.getDate();
		},

		// weekday name, full, e.g. Thursday
		l: function l() {
			return self.l10n.weekdays.longhand[self.formats.w()];
		},

		// padded month number (01-12)
		m: function m() {
			return pad(self.formats.n());
		},

		// the month number (1-12)
		n: function n() {
			return self.selectedDateObj.getMonth() + 1;
		},

		// seconds 0-59
		s: function s() {
			return self.selectedDateObj.getSeconds();
		},

		// number of the day of the week
		w: function w() {
			return self.selectedDateObj.getDay();
		},

		// last two digits of year e.g. 16 for 2016
		y: function y() {
			return String(self.formats.Y()).substring(2);
		}
	};

	self.defaultConfig = {
		/* if true, dates will be parsed, formatted, and displayed in UTC.
  preloading date strings w/ timezones is recommended but not necessary */
		utc: false,

		// wrap: see https://chmln.github.io/flatpickr/#strap
		wrap: false,

		// enables week numbers
		weekNumbers: false,

		allowInput: false,

		/*
  	clicking on input opens the date(time)picker.
  	disable if you wish to open the calendar manually with .open()
  */
		clickOpens: true,

		// display time picker in 24 hour mode
		time_24hr: false,

		// enables the time picker functionality
		enableTime: false,

		// noCalendar: true will hide the calendar. use for a time picker along w/ enableTime
		noCalendar: false,

		// more date format chars at https://chmln.github.io/flatpickr/#dateformat
		dateFormat: "Y-m-d",

		// altInput - see https://chmln.github.io/flatpickr/#altinput
		altInput: false,

		// the created altInput element will have this class.
		altInputClass: "",

		// same as dateFormat, but for altInput
		altFormat: "F j, Y", // defaults to e.g. June 10, 2016

		// defaultDate - either a datestring or a date object. used for datetimepicker"s initial value
		defaultDate: null,

		// the minimum date that user can pick (inclusive)
		minDate: null,

		// the maximum date that user can pick (inclusive)
		maxDate: null,

		// dateparser that transforms a given string to a date object
		parseDate: null,

		// see https://chmln.github.io/flatpickr/#disable
		enable: [],

		// see https://chmln.github.io/flatpickr/#disable
		disable: [],

		// display the short version of month names - e.g. Sep instead of September
		shorthandCurrentMonth: false,

		// displays calendar inline. see https://chmln.github.io/flatpickr/#inline-calendar
		inline: false,

		// position calendar inside wrapper and next to the input element
		// leave at false unless you know what you"re doing
		static: false,

		// code for previous/next icons. this is where you put your custom icon code e.g. fontawesome
		prevArrow: "&lt;",
		nextArrow: "&gt;",

		// enables seconds in the time picker
		enableSeconds: false,

		// step size used when scrolling/incrementing the hour element
		hourIncrement: 1,

		// step size used when scrolling/incrementing the minute element
		minuteIncrement: 5,

		// onChange callback when user selects a date or time
		onChange: null, // function (dateObj, dateStr) {}

		// called every time calendar is opened
		onOpen: null, // function (dateObj, dateStr) {}

		// called every time calendar is closed
		onClose: null, // function (dateObj, dateStr) {}

		onValueUpdate: null
	};

	init = function init() {
		instanceConfig = instanceConfig || {};

		self.element = element;

		parseConfig();

		self.input = self.config.wrap ? element.querySelector("[data-input]") : element;
		self.input.classList.add("flatpickr-input");

		if (self.config.defaultDate) {
			self.config.defaultDate = uDate(self.config.defaultDate);
		}

		if (self.input.value || self.config.defaultDate) {
			self.selectedDateObj = uDate(self.config.defaultDate || self.input.value);
		}

		wrap();
		buildCalendar();
		bind();

		self.uDate = uDate;
		self.jumpToDate();
		updateValue();
	};

	parseConfig = function parseConfig() {
		self.config = {};

		Object.keys(self.defaultConfig).forEach(function (key) {
			if (instanceConfig.hasOwnProperty(key)) {
				self.config[key] = instanceConfig[key];
			} else if (self.element.dataset && self.element.dataset.hasOwnProperty(key.toLowerCase())) {
				self.config[key] = self.element.dataset[key.toLowerCase()];
			} else if (!self.element.dataset && self.element.hasAttribute("data-" + key)) {
				self.config[key] = self.element.getAttribute("data-" + key);
			} else {
				self.config[key] = flatpickr.init.prototype.defaultConfig[key] || self.defaultConfig[key];
			}

			if (typeof self.defaultConfig[key] === "boolean") {
				self.config[key] = self.config[key] === true || self.config[key] === "" || self.config[key] === "true";
			}

			if (key === "enableTime" && self.config[key]) {
				self.defaultConfig.dateFormat = !self.config.time_24hr ? "Y-m-d h:i K" : "Y-m-d H:i";
				self.defaultConfig.altFormat = !self.config.time_24hr ? "F j Y, h:i K" : "F j, Y H:i";
			} else if (key === "noCalendar" && self.config[key]) {
				self.defaultConfig.dateFormat = "h:i K";
				self.defaultConfig.altFormat = "h:i K";
			}
		});
	};

	getRandomCalendarIdStr = function getRandomCalendarIdStr() {
		var randNum = void 0,
		    idStr = void 0;
		do {
			randNum = Math.round(Math.random() * Math.pow(10, 10));
			idStr = "flatpickr-" + randNum;
		} while (document.getElementById(idStr) !== null);

		return idStr;
	};

	uDate = function uDate(date, timeless) {
		timeless = timeless || false;

		if (date === "today") {
			date = new Date();
			timeless = true;
		} else if (typeof date === "string") {
			date = date.trim();

			if (self.config.parseDate) {
				date = self.config.parseDate(date);
			} else if (/^\d\d\d\d\-\d{1,2}\-\d\d$/.test(date)) {
				// this utc datestring gets parsed, but incorrectly by Date.parse
				date = new Date(date.replace(/(\d)-(\d)/g, "$1/$2"));
			} else if (Date.parse(date)) {
				date = new Date(date);
			} else if (/^\d\d\d\d\-\d\d\-\d\d/.test(date)) {
				// disable special utc datestring
				date = new Date(date.replace(/(\d)-(\d)/g, "$1/$2"));
			} else if (/^(\d?\d):(\d\d)/.test(date)) {
				// time-only picker
				var matches = date.match(/^(\d?\d):(\d\d)(:(\d\d))?/),
				    seconds = matches[4] !== undefined ? matches[4] : 0;

				date = new Date();
				date.setHours(matches[1], matches[2], seconds, 0);
			} else {
				console.error("flatpickr: invalid date string " + date);
				console.info(self.element);
			}
		}

		if (!(date instanceof Date) || !date.getTime()) {
			return null;
		}

		if (self.config.utc && !date.fp_isUTC) {
			date = date.fp_toUTC();
		}

		if (timeless) {
			date.setHours(0, 0, 0, 0);
		}

		return date;
	};

	equalDates = function equalDates(date1, date2) {
		return date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear();
	};

	wrap = function wrap() {
		wrapperElement = createElement("div", "flatpickr-wrapper");

		if (self.config.inline || self.config.static) {
			// Wrap input and place calendar underneath
			self.element.parentNode.insertBefore(wrapperElement, self.element);
			wrapperElement.appendChild(self.element);

			wrapperElement.classList.add(self.config.inline ? "inline" : "static");
		} else {
			// Insert at bottom of BODY tag to display outside
			// of relative positioned elements with css "overflow: hidden;"
			// property set.
			document.body.appendChild(wrapperElement);
		}

		if (self.config.altInput) {
			// replicate self.element
			self.altInput = createElement(self.input.nodeName, self.config.altInputClass + " flatpickr-input");
			self.altInput.placeholder = self.input.placeholder;
			self.altInput.type = "text";

			self.input.type = "hidden";
			self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
		}
	};

	getDaysinMonth = function getDaysinMonth() {
		var month = arguments.length <= 0 || arguments[0] === undefined ? self.currentMonth : arguments[0];

		var yr = self.currentYear;

		if (month === 1 && (yr % 4 === 0 && yr % 100 !== 0 || yr % 400 === 0)) {
			return 29;
		}

		return self.l10n.daysInMonth[month];
	};

	updateValue = function updateValue(e) {
		if (self.config.noCalendar && !self.selectedDateObj) {
			// picking time only and method triggered from picker
			self.selectedDateObj = new Date();
		} else if (!self.selectedDateObj) {
			return;
		}

		if (e) {
			e.target.blur();
		}

		var timeHasChanged = void 0;

		if (self.config.enableTime) {
			var previousTimestamp = self.selectedDateObj.getTime();

			// update time
			var hours = parseInt(self.hourElement.value, 10) || 0,
			    seconds = void 0;

			var minutes = (60 + (parseInt(self.minuteElement.value, 10) || 0)) % 60;

			if (self.config.enableSeconds) {
				seconds = (60 + parseInt(self.secondElement.value, 10) || 0) % 60;
			}

			if (!self.config.time_24hr) {
				// the real number of hours for the date object
				hours = hours % 12 + 12 * (self.amPM.innerHTML === "PM");
			}

			self.selectedDateObj.setHours(hours, minutes, seconds === undefined ? self.selectedDateObj.getSeconds() : seconds);

			self.hourElement.value = pad(!self.config.time_24hr ? (12 + hours) % 12 + 12 * (hours % 12 === 0) : hours);
			self.minuteElement.value = pad(minutes);

			if (seconds !== undefined) {
				self.secondElement.value = pad(seconds);
			}

			timeHasChanged = self.selectedDateObj.getTime() !== previousTimestamp;
		}

		self.input.value = self.formatDate(self.config.dateFormat);

		if (self.altInput) {
			self.altInput.value = self.formatDate(self.config.altFormat);
		}

		if (e && (timeHasChanged || e.target.classList.contains("flatpickr-day"))) {
			triggerChange();
		}

		if (self.config.onValueUpdate) {
			self.config.onValueUpdate(self.selectedDateObj, self.input.value, self);
		}
	};

	pad = function pad(num) {
		return ("0" + num).slice(-2);
	};

	self.formatDate = function (dateFormat) {
		var formattedDate = "";
		var formatPieces = dateFormat.split("");

		for (var i = 0; i < formatPieces.length; i++) {
			var c = formatPieces[i];
			if (self.formats.hasOwnProperty(c) && formatPieces[i - 1] !== "\\") {
				formattedDate += self.formats[c]();
			} else if (c !== "\\") {
				formattedDate += c;
			}
		}

		return formattedDate;
	};

	monthToStr = function monthToStr(date, shorthand) {
		if (shorthand || self.config.shorthandCurrentMonth) {
			return self.l10n.months.shorthand[date];
		}

		return self.l10n.months.longhand[date];
	};

	isEnabled = function isEnabled(dateToCheck) {
		if (self.config.minDate && dateToCheck < self.config.minDate || self.config.maxDate && dateToCheck > self.config.maxDate) {
			return false;
		}

		dateToCheck = uDate(dateToCheck, true); // timeless

		var bool = self.config.enable.length > 0,
		    array = bool ? self.config.enable : self.config.disable;

		var d = void 0;

		for (var i = 0; i < array.length; i++) {
			d = array[i];

			if (d instanceof Function && d(dateToCheck)) {
				// disabled by function
				return bool;
			} else if ( // disabled weekday
			typeof d === "string" && /^wkd/.test(d) && dateToCheck.getDay() === (parseInt(d.slice(-1), 10) + self.l10n.firstDayOfWeek - 1) % 7) {
				return bool;
			} else if ((d instanceof Date || typeof d === "string" && !/^wkd/.test(d)) && uDate(d, true).getTime() === dateToCheck.getTime()) {
				// disabled by date string
				return bool;
			} else if ( // disabled by range
			(typeof d === "undefined" ? "undefined" : _typeof(d)) === "object" && d.hasOwnProperty("from") && dateToCheck >= uDate(d.from) && dateToCheck <= uDate(d.to)) {
				return bool;
			}
		}

		return !bool;
	};

	yearScroll = function yearScroll(event) {
		event.preventDefault();

		var delta = Math.max(-1, Math.min(1, event.wheelDelta || -event.deltaY));
		self.currentYear = event.target.value = parseInt(event.target.value, 10) + delta;
		self.redraw();
	};

	timeWrapper = function timeWrapper(e) {
		e.preventDefault();

		var min = parseInt(e.target.min, 10),
		    max = parseInt(e.target.max, 10),
		    step = parseInt(e.target.step, 10),
		    value = parseInt(e.target.value, 10);

		var newValue = value;

		if (e.type === "wheel") {
			newValue = value + step * Math.max(-1, Math.min(1, e.wheelDelta || -e.deltaY));
		}

		if (newValue <= min) {
			newValue = max - step;
		} else if (newValue >= max) {
			newValue = min + step;
		}

		e.target.value = pad(newValue);
	};

	updateNavigationCurrentMonth = function updateNavigationCurrentMonth() {
		currentMonthElement.textContent = monthToStr(self.currentMonth) + " ";
		currentYearElement.value = self.currentYear;
	};

	handleYearChange = function handleYearChange() {
		if (self.currentMonth < 0 || self.currentMonth > 11) {
			self.currentYear += self.currentMonth % 11;
			self.currentMonth = (self.currentMonth + 12) % 12;
		}
	};

	documentClick = function documentClick(e) {
		var isCalendarElement = wrapperElement.contains(e.relatedTarget || e.target),
		    isInput = self.element.contains(e.relatedTarget || e.target) || e.relatedTarget || e.target === self.altInput;

		if (self.isOpen && !isCalendarElement && !isInput) {
			self.close();
		}
	};

	changeMonth = function changeMonth(offset) {
		self.currentMonth += offset;

		handleYearChange();
		updateNavigationCurrentMonth();
		buildDays();
		(self.config.noCalendar ? timeContainer : calendar).focus();
	};

	selectDate = function selectDate(e) {
		e.preventDefault();
		e.stopPropagation();

		if (self.config.allowInput && e.target === (self.altInput || self.input) && e.which === 13) {
			self.setDate((self.altInput || self.input).value);
			self.redraw();
		} else if (e.target.classList.contains("flatpickr-day")) {
			var isPrevMonthDay = e.target.classList.contains("prevMonthDay"),
			    isNextMonthDay = e.target.classList.contains("nextMonthDay"),
			    monthNum = self.currentMonth - isPrevMonthDay + isNextMonthDay;

			if (isPrevMonthDay || isNextMonthDay) {
				changeMonth(+isNextMonthDay - isPrevMonthDay);
			}

			self.selectedDateObj = new Date(self.currentYear, monthNum, e.target.innerHTML);

			updateValue(e);
			buildDays();

			if (!self.config.enableTime) {
				self.close();
			}
		}
	};

	buildCalendar = function buildCalendar() {
		calendarContainer = createElement("div", "flatpickr-calendar");
		calendarContainer.id = getRandomCalendarIdStr();

		calendar = createElement("div", "flatpickr-days");
		calendar.tabIndex = -1;

		if (!self.config.noCalendar) {
			buildMonthNavigation();
			buildWeekdays();

			if (self.config.weekNumbers) {
				buildWeeks();
			}

			buildDays();

			calendarContainer.appendChild(calendar);
		}

		wrapperElement.appendChild(calendarContainer);

		if (self.config.enableTime) {
			buildTime();
		}
	};

	buildMonthNavigation = function buildMonthNavigation() {
		monthsNav = createElement("div", "flatpickr-month");

		prevMonthNav = createElement("span", "flatpickr-prev-month");
		prevMonthNav.innerHTML = self.config.prevArrow;

		currentMonthElement = createElement("span", "cur_month");

		currentYearElement = createElement("input", "cur_year");
		currentYearElement.type = "number";
		currentYearElement.title = self.l10n.scrollTitle;

		nextMonthNav = createElement("span", "flatpickr-next-month");
		nextMonthNav.innerHTML = self.config.nextArrow;

		navigationCurrentMonth = createElement("span", "flatpickr-current-month");
		navigationCurrentMonth.appendChild(currentMonthElement);
		navigationCurrentMonth.appendChild(currentYearElement);

		monthsNav.appendChild(prevMonthNav);
		monthsNav.appendChild(navigationCurrentMonth);
		monthsNav.appendChild(nextMonthNav);

		calendarContainer.appendChild(monthsNav);
		updateNavigationCurrentMonth();
	};

	buildWeekdays = function buildWeekdays() {
		weekdayContainer = createElement("div", "flatpickr-weekdays");
		var firstDayOfWeek = self.l10n.firstDayOfWeek;

		var weekdays = self.l10n.weekdays.shorthand.slice();

		if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
			weekdays = [].concat(weekdays.splice(firstDayOfWeek, weekdays.length), weekdays.splice(0, firstDayOfWeek));
		}

		if (self.config.weekNumbers) {
			weekdayContainer.innerHTML = "<span>" + self.l10n.weekAbbreviation + "</span>";
		}

		weekdayContainer.innerHTML += "<span>" + weekdays.join("</span><span>") + "</span>";

		calendarContainer.appendChild(weekdayContainer);
	};

	buildWeeks = function buildWeeks() {
		calendarContainer.classList.add("hasWeeks");

		weekNumbers = createElement("div", "flatpickr-weeks");
		calendarContainer.appendChild(weekNumbers);
	};

	buildDays = function buildDays() {
		var firstOfMonth = (new Date(self.currentYear, self.currentMonth, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7,
		    daysInMonth = getDaysinMonth(),
		    prevMonthDays = getDaysinMonth((self.currentMonth - 1 + 12) % 12),
		    days = document.createDocumentFragment();

		var dayNumber = prevMonthDays + 1 - firstOfMonth,
		    currentDate = void 0,
		    dateIsDisabled = void 0;

		if (self.config.weekNumbers) {
			weekNumbers.innerHTML = "";
		}

		calendar.innerHTML = "";

		self.config.minDate = uDate(self.config.minDate, true);
		self.config.maxDate = uDate(self.config.maxDate, true);

		// prepend days from the ending of previous month
		for (; dayNumber <= prevMonthDays; dayNumber++) {
			var curDate = new Date(self.currentYear, self.currentMonth - 1, dayNumber, 0, 0, 0, 0, 0),
			    dateIsEnabled = isEnabled(curDate),
			    dayElem = createElement("span", dateIsEnabled ? "flatpickr-day prevMonthDay" : "disabled", dayNumber);

			if (dateIsEnabled) {
				dayElem.tabIndex = 0;
			}

			days.appendChild(dayElem);
		}

		// Start at 1 since there is no 0th day
		for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++) {
			currentDate = new Date(self.currentYear, self.currentMonth, dayNumber, 0, 0, 0, 0, 0);

			if (self.config.weekNumbers && dayNumber % 7 === 1) {
				weekNumbers.appendChild(createElement("span", "disabled flatpickr-day", currentDate.fp_getWeek()));
			}

			dateIsDisabled = !isEnabled(currentDate);

			var dayElement = createElement("span", dateIsDisabled ? "disabled" : "flatpickr-day", dayNumber);

			if (!dateIsDisabled) {
				dayElement.tabIndex = 0;

				if (equalDates(currentDate, now)) {
					dayElement.classList.add("today");
				}

				if (self.selectedDateObj && equalDates(currentDate, self.selectedDateObj)) {
					dayElement.classList.add("selected");
				}
			}

			days.appendChild(dayElement);
		}

		// append days from the next month
		for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth; dayNum++) {
			var _curDate = new Date(self.currentYear, self.currentMonth + 1, dayNum % daysInMonth, 0, 0, 0, 0, 0),
			    _dateIsEnabled = isEnabled(_curDate),
			    _dayElement = createElement("span", _dateIsEnabled ? "nextMonthDay flatpickr-day" : "disabled", dayNum % daysInMonth);

			if (self.config.weekNumbers && dayNum % 7 === 1) {
				weekNumbers.appendChild(createElement("span", "disabled", _curDate.fp_getWeek()));
			}

			if (_dateIsEnabled) {
				_dayElement.tabIndex = 0;
			}

			days.appendChild(_dayElement);
		}

		calendar.appendChild(days);
	};

	buildTime = function buildTime() {
		timeContainer = createElement("div", "flatpickr-time");
		timeContainer.tabIndex = -1;
		var separator = createElement("span", "flatpickr-time-separator", ":");

		self.hourElement = createElement("input", "flatpickr-hour");
		self.minuteElement = createElement("input", "flatpickr-minute");

		self.hourElement.tabIndex = self.minuteElement.tabIndex = 0;
		self.hourElement.type = self.minuteElement.type = "number";

		self.hourElement.value = self.selectedDateObj ? pad(self.selectedDateObj.getHours()) : 12;

		self.minuteElement.value = self.selectedDateObj ? pad(self.selectedDateObj.getMinutes()) : "00";

		self.hourElement.step = self.config.hourIncrement;
		self.minuteElement.step = self.config.minuteIncrement;

		self.hourElement.min = -self.config.time_24hr;
		self.hourElement.max = self.config.time_24hr ? 24 : 13;

		self.minuteElement.min = -self.minuteElement.step;
		self.minuteElement.max = 60;

		self.hourElement.title = self.minuteElement.title = self.l10n.scrollTitle;

		timeContainer.appendChild(self.hourElement);
		timeContainer.appendChild(separator);
		timeContainer.appendChild(self.minuteElement);

		if (self.config.enableSeconds) {
			timeContainer.classList.add("has-seconds");

			self.secondElement = createElement("input", "flatpickr-second");
			self.secondElement.type = "number";
			self.secondElement.value = self.selectedDateObj ? pad(self.selectedDateObj.getSeconds()) : "00";

			self.secondElement.step = self.minuteElement.step;
			self.secondElement.min = self.minuteElement.min;
			self.secondElement.max = self.minuteElement.max;

			timeContainer.appendChild(createElement("span", "flatpickr-time-separator", ":"));
			timeContainer.appendChild(self.secondElement);
		}

		if (!self.config.time_24hr) {
			// add self.amPM if appropriate
			self.amPM = createElement("span", "flatpickr-am-pm", ["AM", "PM"][self.hourElement.value > 11 | 0]);
			self.amPM.title = self.l10n.toggleTitle;
			self.amPM.tabIndex = 0;
			timeContainer.appendChild(self.amPM);
		}

		calendarContainer.appendChild(timeContainer);
	};

	bind = function bind() {
		document.addEventListener("keydown", onKeyDown);
		window.addEventListener("resize", onResize);

		if (self.config.clickOpens) {
			(self.altInput || self.input).addEventListener("click", self.open);
			(self.altInput || self.input).addEventListener("focus", self.open);
		}

		if (self.config.wrap && self.element.querySelector("[data-open]")) {
			self.element.querySelector("[data-open]").addEventListener("click", self.open);
		}

		if (self.config.wrap && self.element.querySelector("[data-close]")) {
			self.element.querySelector("[data-close]").addEventListener("click", self.close);
		}

		if (self.config.wrap && self.element.querySelector("[data-toggle]")) {
			self.element.querySelector("[data-toggle]").addEventListener("click", self.toggle);
		}

		if (self.config.wrap && self.element.querySelector("[data-clear]")) {
			self.element.querySelector("[data-clear]").addEventListener("click", self.clear);
		}

		if (!self.config.noCalendar) {
			prevMonthNav.addEventListener("click", function () {
				changeMonth(-1);
			});

			nextMonthNav.addEventListener("click", function () {
				changeMonth(1);
			});

			currentYearElement.addEventListener("wheel", yearScroll);
			currentYearElement.addEventListener("focus", currentYearElement.select);

			currentYearElement.addEventListener("input", function (event) {
				self.currentYear = parseInt(event.target.value, 10);
				self.redraw();
			});

			calendar.addEventListener("click", selectDate);
		}

		document.addEventListener("click", documentClick, true);
		document.addEventListener("focus", documentClick, true);

		if (self.config.enableTime) {
			self.hourElement.addEventListener("wheel", timeWrapper);
			self.minuteElement.addEventListener("wheel", timeWrapper);

			self.hourElement.addEventListener("input", timeWrapper);
			self.minuteElement.addEventListener("input", timeWrapper);

			self.hourElement.addEventListener("mouseout", updateValue);
			self.minuteElement.addEventListener("mouseout", updateValue);

			self.hourElement.addEventListener("change", updateValue);
			self.minuteElement.addEventListener("change", updateValue);

			self.hourElement.addEventListener("focus", self.hourElement.select);
			self.minuteElement.addEventListener("focus", self.minuteElement.select);

			if (self.config.enableSeconds) {
				self.secondElement.addEventListener("wheel", timeWrapper);
				self.secondElement.addEventListener("input", timeWrapper);
				self.secondElement.addEventListener("mouseout", updateValue);
				self.secondElement.addEventListener("change", updateValue);
				self.secondElement.addEventListener("focus", self.secondElement.select);
			}

			if (!self.config.time_24hr) {
				self.amPM.addEventListener("click", amPMToggle);

				self.amPM.addEventListener("wheel", amPMToggle);
				self.amPM.addEventListener("mouseout", updateValue);

				self.amPM.addEventListener("keydown", function (e) {
					if (e.which === 38 || e.which === 40) {
						amPMToggle(e);
					}
				});
			}
		}

		if (document.createEvent) {
			clickEvt = document.createEvent("MouseEvent");
			// without all these args ms edge spergs out
			clickEvt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
		} else {
			clickEvt = new MouseEvent("click", {
				view: window,
				bubbles: true,
				cancelable: true
			});
		}
	};

	self.open = function () {
		if (self.isOpen || (self.altInput || self.input).disabled || self.config.inline) {
			return;
		} else if (!self.config.static) {
			self.positionCalendar();
		}

		self.isOpen = true;

		wrapperElement.classList.add("open");

		if (!self.config.allowInput) {
			(self.altInput || self.input).blur();
			(self.config.noCalendar ? timeContainer : calendar).focus();
		}

		(self.altInput || self.input).classList.add("active");

		if (self.config.onOpen) {
			self.config.onOpen(self.selectedDateObj, self.input.value, self);
		}
	};

	// For calendars inserted in BODY (as opposed to inline wrapper)
	// it"s necessary to properly calculate top/left position.
	self.positionCalendar = function () {
		var calendarHeight = calendarContainer.offsetHeight,
		    input = self.altInput || self.input,
		    inputBounds = input.getBoundingClientRect(),
		    distanceFromBottom = window.innerHeight - inputBounds.bottom + input.offsetHeight;

		var top = void 0,
		    left = window.pageXOffset + inputBounds.left;

		if (distanceFromBottom < calendarHeight) {
			top = window.pageYOffset - calendarHeight + inputBounds.top - 2;
			calendarContainer.classList.remove("arrowTop");
			calendarContainer.classList.add("arrowBottom");
		} else {
			top = window.pageYOffset + input.offsetHeight + inputBounds.top + 2;
			calendarContainer.classList.remove("arrowBottom");
			calendarContainer.classList.add("arrowTop");
		}

		wrapperElement.style.top = top + "px";
		wrapperElement.style.left = left + "px";
	};

	self.toggle = function () {
		if (self.isOpen) {
			self.close();
		} else {
			self.open();
		}
	};

	self.close = function () {
		self.isOpen = false;
		wrapperElement.classList.remove("open");
		(self.altInput || self.input).classList.remove("active");

		if (self.config.onClose) {
			self.config.onClose(self.selectedDateObj, self.input.value, self);
		}
	};

	self.clear = function () {
		self.input.value = "";

		if (self.altInput) {
			self.altInput.value = "";
		}

		self.selectedDateObj = null;

		triggerChange();
		self.jumpToDate();
	};

	triggerChange = function triggerChange() {
		self.input.dispatchEvent(clickEvt);

		if (self.config.onChange) {
			self.config.onChange(self.selectedDateObj, self.input.value, self);
		}
	};

	self.destroy = function () {
		document.removeEventListener("click", documentClick, false);

		if (self.altInput) {
			self.altInput.parentNode.removeChild(self.altInput);
		}

		if (self.config.inline) {
			var parent = self.element.parentNode,
			    removedElement = parent.removeChild(self.element);

			parent.removeChild(calendarContainer);
			parent.parentNode.replaceChild(removedElement, parent);
		} else {
			document.getElementsByTagName("body")[0].removeChild(wrapperElement);
		}
	};

	self.redraw = function () {
		if (self.config.noCalendar) {
			return;
		}

		updateNavigationCurrentMonth();
		buildDays();
	};

	self.jumpToDate = function (jumpDate) {
		jumpDate = uDate(jumpDate || self.selectedDateObj || self.config.defaultDate || self.config.minDate || now);

		self.currentYear = jumpDate.getFullYear();
		self.currentMonth = jumpDate.getMonth();
		self.redraw();
	};

	self.setDate = function (date, triggerChangeEvent) {
		date = uDate(date);

		if (date instanceof Date && date.getTime()) {
			self.selectedDateObj = uDate(date);
			self.jumpToDate(self.selectedDateObj);
			updateValue();

			if (triggerChangeEvent) {
				triggerChange();
			}
		}
	};

	self.setTime = function (hour, minute, triggerChangeEvent) {
		if (!self.selectedDateObj) {
			return;
		}

		self.hourElement.value = parseInt(hour, 10) % 24;
		self.minuteElement.value = parseInt(minute || 0, 10) % 60;

		if (!self.config.time_24hr) {
			self.amPM.innerHTML = hour > 11 ? "PM" : "AM";
		}

		updateValue();

		if (triggerChangeEvent) {
			triggerChange();
		}
	};

	self.set = function (key, value) {
		if (key in self.config) {
			self.config[key] = value;
			self.jumpToDate();
		}
	};

	amPMToggle = function amPMToggle(e) {
		e.preventDefault();
		self.amPM.textContent = ["AM", "PM"][self.amPM.innerHTML === "AM" | 0];
	};

	onKeyDown = function onKeyDown(e) {
		if (!self.isOpen || self.config.enableTime && timeContainer.contains(e.target)) {
			return;
		}

		switch (e.which) {
			case 13:
				selectDate(e);
				break;

			case 27:
				self.close();
				break;

			case 37:
				changeMonth(-1);
				break;

			case 38:
				e.preventDefault();
				self.currentYear++;
				self.redraw();
				break;

			case 39:
				changeMonth(1);
				break;

			case 40:
				e.preventDefault();
				self.currentYear--;
				self.redraw();
				break;

			default:
				break;
		}
	};

	onResize = debounce(function () {
		if (self.isOpen && !self.config.inline && !self.config.static) {
			self.positionCalendar();
		}
	}, 300);

	try {
		init();
	} catch (error) {
		// skip and carry on
		console.error(error);
		console.info(self.element);
	}

	return self;
};

flatpickr.init.prototype = {

	defaultConfig: {},

	l10n: {
		weekdays: {
			shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
			longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
		},
		months: {
			shorthand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			longhand: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
		},
		daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
		firstDayOfWeek: 0,
		ordinal: function ordinal(nth) {
			var s = nth % 100;
			if (s > 3 && s < 21) return "th";
			switch (s % 10) {
				case 1:
					return "st";
				case 2:
					return "nd";
				case 3:
					return "rd";
				default:
					return "th";
			}
		},
		weekAbbreviation: "Wk",
		scrollTitle: "Scroll to increment",
		toggleTitle: "Click to toggle"
	}

};

Date.prototype.fp_incr = function (days) {
	return new Date(this.getFullYear(), this.getMonth(), this.getDate() + parseInt(days, 10));
};

Date.prototype.fp_isUTC = false;
Date.prototype.fp_toUTC = function () {
	var newDate = new Date(this.getTime() + this.getTimezoneOffset() * 60000);
	newDate.fp_isUTC = true;

	return newDate;
};

Date.prototype.fp_getWeek = function () {
	var date = new Date(this.getTime());
	date.setHours(0, 0, 0, 0);

	// Thursday in current week decides the year.
	date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
	// January 4 is always in week 1.
	var week1 = new Date(date.getFullYear(), 0, 4);
	// Adjust to Thursday in week 1 and count number of weeks from date to week1.
	return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
};

// classList polyfill
if (!("classList" in document.documentElement) && Object.defineProperty && typeof HTMLElement !== "undefined") {
	Object.defineProperty(HTMLElement.prototype, "classList", {
		get: function get() {
			var selfElements = this;
			function update(fn) {
				return function (value) {
					var classes = selfElements.className.split(/\s+/);
					var index = classes.indexOf(value);

					fn(classes, index, value);
					selfElements.className = classes.join(" ");
				};
			}

			var ret = {
				add: update(function (classes, index, value) {
					return ~index || classes.push(value);
				}),
				remove: update(function (classes, index) {
					return ~index && classes.splice(index, 1);
				}),
				toggle: update(function (classes, index, value) {
					if (~index) {
						classes.splice(index, 1);
					} else {
						classes.push(value);
					}
				}),
				contains: function contains(value) {
					return !! ~selfElements.className.split(/\s+/).indexOf(value);
				}
			};

			return ret;
		}
	});
}

{
	module.exports = flatpickr;
}
});

var slick_es6_min = createCommonjsModule(function (module, exports) {
!function(e,t){for(var o in t)e[o]=t[o];}(exports,function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t), r.loaded=!0, r.exports}var o={};return t.m=e, t.c=o, t.p="/", t(0)}([function(e,t,o){e.exports=o(25);},function(e,t){function o(){var e=!1,t=!1;this.stopPropagation=function(){e=!0;}, this.isPropagationStopped=function(){return e}, this.stopImmediatePropagation=function(){t=!0;}, this.isImmediatePropagationStopped=function(){return t};}function n(){var e=[];this.subscribe=function(t){e.push(t);}, this.unsubscribe=function(t){for(var o=e.length-1;o>=0;o--)e[o]===t&&e.splice(o,1);}, this.notify=function(t,n,r){n=n||new o, r=r||this;for(var i,s=0;s<e.length&&!n.isPropagationStopped()&&!n.isImmediatePropagationStopped();s++)i=e[s].call(r,n,t);return i};}function r(){var e=[];this.subscribe=function(t,o){return e.push({event:t,handler:o}), t.subscribe(o), this}, this.unsubscribe=function(t,o){for(var n=e.length;n--;)if(e[n].event===t&&e[n].handler===o)return e.splice(n,1), void t.unsubscribe(o);return this}, this.unsubscribeAll=function(){for(var t=e.length;t--;)e[t].event.unsubscribe(e[t].handler);return e=[], this};}function i(e,t,o,n){void 0===o&&void 0===n&&(o=e, n=t), this.fromRow=Math.min(e,o), this.fromCell=Math.min(t,n), this.toRow=Math.max(e,o), this.toCell=Math.max(t,n), this.isSingleRow=function(){return this.fromRow==this.toRow}, this.isSingleCell=function(){return this.fromRow==this.toRow&&this.fromCell==this.toCell}, this.contains=function(e,t){return e>=this.fromRow&&e<=this.toRow&&t>=this.fromCell&&t<=this.toCell}, this.toString=function(){return this.isSingleCell()?"("+this.fromRow+":"+this.fromCell+")":"("+this.fromRow+":"+this.fromCell+" - "+this.toRow+":"+this.toCell+")"};}function s(){this.__nonDataRow=!0;}function l(){this.__group=!0, this.level=0, this.count=0, this.value=null, this.title=null, this.collapsed=!1, this.totals=null, this.rows=[], this.groups=null, this.groupingKey=null;}function a(){this.__groupTotals=!0, this.group=null, this.initialized=!1;}function c(){var e=null;this.isActive=function(t){return t?e===t:null!==e}, this.activate=function(t){if(t!==e){if(null!==e)throw"SlickGrid.EditorLock.activate: an editController is still active, can't activate another editController";if(!t.commitCurrentEdit)throw"SlickGrid.EditorLock.activate: editController must implement .commitCurrentEdit()";if(!t.cancelCurrentEdit)throw"SlickGrid.EditorLock.activate: editController must implement .cancelCurrentEdit()";e=t;}}, this.deactivate=function(t){if(e!==t)throw"SlickGrid.EditorLock.deactivate: specified editController is not the currently active one";e=null;}, this.commitCurrentEdit=function(){return!e||e.commitCurrentEdit()}, this.cancelCurrentEdit=function(){return!e||e.cancelCurrentEdit()};}function d(e){function t(){o(e);}function o(e){e.forEach(function(e){d[e.id]=e, e.columns&&o(e.columns);});}function n(e,t){return e.filter(function(e){var o=t.call(e);return o&&e.columns&&(e.columns=n(e.columns,t)), o&&(!e.columns||e.columns.length)})}function r(e,t){e.sort(function(e,o){var n=i(t.getColumnIndex(e.id)),r=i(t.getColumnIndex(o.id));return n-r}).forEach(function(e){e.columns&&r(e.columns,t);});}function i(e){return"undefined"==typeof e?-1:e}function s(e){if(!e.length)return e.columns?1+s(e.columns):1;for(var t in e)return s(e[t])}function l(e,t,o){var n=[];if(o=o||0, t==o)return e.length&&e.forEach(function(e){e.columns&&(e.extractColumns=function(){return a(e)});}), e;for(var r in e)e[r].columns&&(n=n.concat(l(e[r].columns,t,o+1)));return n}function a(e){var t=[];if(e.hasOwnProperty("length"))for(var o=0;o<e.length;o++)t=t.concat(a(e[o]));else{if(!e.hasOwnProperty("columns"))return e;t=t.concat(a(e.columns));}return t}function c(){return $.extend(!0,[],e)}var d={};t(), this.hasDepth=function(){for(var t in e)if(e[t].hasOwnProperty("columns"))return!0;return!1}, this.getTreeColumns=function(){return e}, this.extractColumns=function(){return this.hasDepth()?a(e):e}, this.getDepth=function(){return s(e)}, this.getColumnsInDepth=function(t){return l(e,t)}, this.getColumnsInGroup=function(e){return a(e)}, this.visibleColumns=function(){return n(c(),function(){return this.visible})}, this.filter=function(e){return n(c(),e)}, this.reOrder=function(t){return r(e,t)}, this.getById=function(e){return d[e]}, this.getInIds=function(e){return e.map(function(e){return d[e]})};}Object.defineProperty(t,"__esModule",{value:!0});var u={Event:n,EventData:o,EventHandler:r,Range:i,NonDataRow:s,Group:l,GroupTotals:a,EditorLock:c,GlobalEditorLock:new c,TreeColumns:d,keyCode:{BACKSPACE:8,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,RIGHT:39,TAB:9,UP:38,SPACE:32}};t.default=u, l.prototype=new s, l.prototype.equals=function(e){return this.value===e.value&&this.count===e.count&&this.collapsed===e.collapsed&&this.title===e.title}, a.prototype=new s;},function(e,t){e.exports=jquery;},function(e,t,o){function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){function o(o){r||(r=(0, s.default)("<div></div>",{css:t.selectionCss}).addClass(t.selectionCssClass).css("position","absolute").appendTo(e.getCanvasNode()));var n=e.getCellNodeBox(o.fromRow,o.fromCell),i=e.getCellNodeBox(o.toRow,o.toCell);return r.css({top:n.top-1,left:n.left-1,height:i.bottom-n.top-2,width:i.right-n.left-2}), r}function n(){r&&(r.remove(), r=null);}var r=void 0,i={selectionCssClass:"slick-range-decorator",selectionCss:{zIndex:"9999",border:"2px dashed red"}};t=Object.assign({},i,t), Object.assign(this,{show:o,hide:n});}Object.defineProperty(t,"__esModule",{value:!0});var i=o(2),s=n(i),l=o(1);n(l);t.default=r;},function(e,t,o){function n(e){return e&&e.__esModule?e:{default:e}}function r(e){function t(t){e=Object.assign({},m,e), p=new d.default(t,e), c=t, u=c.getCanvasNode(), v.subscribe(c.onDragInit,n).subscribe(c.onDragStart,r).subscribe(c.onDrag,i).subscribe(c.onDragEnd,l);}function o(){v.unsubscribeAll();}function n(e,t){e.stopImmediatePropagation();}function r(e,t){var o=c.getCellFromEvent(t.originalEvent);if(g.onBeforeCellRangeSelected.notify(o)!==!1&&c.canCellBeSelected(o.row,o.cell)&&(h=!0), h){c.focus();var n=c.getCellFromPoint(t.x0-(0, s.default)(u).offset().left,t.y0-(0, s.default)(u).offset().top);return f={start:n,end:{}}, p.show(new a.default.Range(n.row,n.cell))}}function i(e,t){if(h){var o=c.getCellFromPoint(t.pageX-(0, s.default)(u).offset().left,t.pageY-(0, s.default)(u).offset().top);c.canCellBeSelected(o.row,o.cell)&&(f.end=o, p.show(new a.default.Range(f.start.row,f.start.cell,o.row,o.cell)));}}function l(e){h&&(h=!1, p.hide(), g.onCellRangeSelected.notify({range:new a.default.Range(f.start.row,f.start.cell,f.end.row,f.end.cell)}), f={});}var c=void 0,u=void 0,h=void 0,p=void 0,f={},g=this,v=new a.default.EventHandler,m={selectionCss:{}};Object.assign(this,{init:t,destroy:o,onBeforeCellRangeSelected:new a.default.Event,onCellRangeSelected:new a.default.Event});}Object.defineProperty(t,"__esModule",{value:!0});var i=o(2),s=n(i),l=o(1),a=n(l),c=o(3),d=n(c);t.default=r;},function(e,t,o){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(o){function r(){}function i(e){if(!e||"object"!==("undefined"==typeof e?"undefined":n(e)))return!1;var t=$(e)||Ce;return/object|function/.test(n(t.Element))?e instanceof t.Element:1===e.nodeType&&"string"==typeof e.nodeName}function s(e){return e===Ce||!(!e||!e.Window)&&e instanceof e.Window}function l(e){return!!e&&e instanceof ye}function a(e){return c(e)&&void 0!==n(e.length)&&d(e.splice)}function c(e){return!!e&&"object"===("undefined"==typeof e?"undefined":n(e))}function d(e){return"function"==typeof e}function u(e){return"number"==typeof e}function h(e){return"boolean"==typeof e}function p(e){return"string"==typeof e}function f(e){return!!p(e)&&(Re.querySelector(e), !0)}function g(e,t){for(var o in t)e[o]=t[o];return e}function v(e,t){for(var o in t){var n=!1;for(var r in Ze)if(0===o.indexOf(r)&&Ze[r].test(o)){n=!0;break}n||(e[o]=t[o]);}return e}function m(e,t){e.page=e.page||{}, e.page.x=t.page.x, e.page.y=t.page.y, e.client=e.client||{}, e.client.x=t.client.x, e.client.y=t.client.y, e.timeStamp=t.timeStamp;}function w(e,t,o){var n=t.length>1?D(t):t[0];b(n,Pe,o), e.page.x=Pe.x, e.page.y=Pe.y, S(n,Pe,o), e.client.x=Pe.x, e.client.y=Pe.y, e.timeStamp=(new Date).getTime();}function C(e,t,o){e.page.x=o.page.x-t.page.x, e.page.y=o.page.y-t.page.y, e.client.x=o.client.x-t.client.x, e.client.y=o.client.y-t.client.y, e.timeStamp=(new Date).getTime()-t.timeStamp;var n=Math.max(e.timeStamp/1e3,.001);e.page.speed=$e(e.page.x,e.page.y)/n, e.page.vx=e.page.x/n, e.page.vy=e.page.y/n, e.client.speed=$e(e.client.x,e.page.y)/n, e.client.vx=e.client.x/n, e.client.vy=e.client.y/n;}function R(e){return e instanceof Ce.Event||He&&Ce.Touch&&e instanceof Ce.Touch}function y(e,t,o){return o=o||{}, e=e||"page", o.x=t[e+"X"], o.y=t[e+"Y"], o}function b(e,t){return t=t||{}, Ye&&R(e)?(y("screen",e,t), t.x+=Ce.scrollX, t.y+=Ce.scrollY):y("page",e,t), t}function S(e,t){return t=t||{}, Ye&&R(e)?y("screen",e,t):y("client",e,t), t}function x(e){return e=e||Ce, {x:e.scrollX||e.document.documentElement.scrollLeft,y:e.scrollY||e.document.documentElement.scrollTop}}function E(e){return u(e.pointerId)?e.pointerId:e.identifier}function _(e){return e instanceof xe?e.correspondingUseElement:e}function $(e){if(s(e))return e;var t=e.ownerDocument||e;return t.defaultView||t.parentWindow||Ce}function P(e){var t=e instanceof be?e.getBoundingClientRect():e.getClientRects()[0];return t&&{left:t.left,right:t.right,top:t.top,bottom:t.bottom,width:t.width||t.right-t.left,height:t.height||t.bottom-t.top}}function T(e){var t=P(e);if(!Ge&&t){var o=x($(e));t.left+=o.x, t.right+=o.x, t.top+=o.y, t.bottom+=o.y;}return t}function k(e){var t=[];return a(e)?(t[0]=e[0], t[1]=e[1]):"touchend"===e.type?1===e.touches.length?(t[0]=e.touches[0], t[1]=e.changedTouches[0]):0===e.touches.length&&(t[0]=e.changedTouches[0], t[1]=e.changedTouches[1]):(t[0]=e.touches[0], t[1]=e.touches[1]), t}function D(e){for(var t,o={pageX:0,pageY:0,clientX:0,clientY:0,screenX:0,screenY:0},n=0;n<e.length;n++)for(t in o)o[t]+=e[n][t];for(t in o)o[t]/=e.length;return o}function z(e){if(e.length||e.touches&&e.touches.length>1){var t=k(e),o=Math.min(t[0].pageX,t[1].pageX),n=Math.min(t[0].pageY,t[1].pageY),r=Math.max(t[0].pageX,t[1].pageX),i=Math.max(t[0].pageY,t[1].pageY);return{x:o,y:n,left:o,top:n,width:r-o,height:i-n}}}function L(e,t){t=t||Fe.deltaSource;var o=t+"X",n=t+"Y",r=k(e),i=r[0][o]-r[1][o],s=r[0][n]-r[1][n];return $e(i,s)}function F(e,t,o){o=o||Fe.deltaSource;var n=o+"X",r=o+"Y",i=k(e),s=i[0][n]-i[1][n],l=i[0][r]-i[1][r],a=180*Math.atan(l/s)/Math.PI;if(u(t)){var c=a-t,d=c%360;d>315?a-=360+a/360|0:d>135?a-=180+a/360|0:d<-315?a+=360+a/360|0:d<-135&&(a+=180+a/360|0);}return a}function M(e,t){var o=e?e.options.origin:Fe.origin;return"parent"===o?o=j(t):"self"===o?o=e.getRect(t):f(o)&&(o=W(t,o)||{x:0,y:0}), d(o)&&(o=o(e&&t)), i(o)&&(o=T(o)), o.x="x"in o?o.x:o.left, o.y="y"in o?o.y:o.top, o}function H(e,t,o,n){var r=1-e;return r*r*t+2*r*e*o+e*e*n}function I(e,t,o,n,r,i,s){return{x:H(s,e,o,r),y:H(s,t,n,i)}}function A(e,t,o,n){return e/=n, -o*e*(e-2)+t}function N(e,t){for(;t;){if(t===e)return!0;t=t.parentNode;}return!1}function W(e,t){for(var o=j(e);i(o);){if(ge(o,t))return o;o=j(o);}return null}function j(e){var t=e.parentNode;if(l(t)){for(;(t=t.host)&&l(t););return t}return t}function q(e,t){return e._context===t.ownerDocument||N(e._context,t)}function B(e,t,o){var n=e.options.ignoreFrom;return!(!n||!i(o))&&(p(n)?ve(o,n,t):!!i(n)&&N(n,o))}function V(e,t,o){var n=e.options.allowFrom;return!n||!!i(o)&&(p(n)?ve(o,n,t):!!i(n)&&N(n,o))}function O(e,t){if(!t)return!1;var o=t.options.drag.axis;return"xy"===e||"xy"===o||o===e}function X(e,t){var o=e.options;return/^resize/.test(t)&&(t="resize"), o[t].snap&&o[t].snap.enabled}function Y(e,t){var o=e.options;return/^resize/.test(t)&&(t="resize"), o[t].restrict&&o[t].restrict.enabled}function G(e,t){var o=e.options;return/^resize/.test(t)&&(t="resize"), o[t].autoScroll&&o[t].autoScroll.enabled}function K(e,t,o){for(var n=e.options,r=n[o.name].max,i=n[o.name].maxPerElement,s=0,l=0,a=0,c=0,d=De.length;c<d;c++){var u=De[c],h=u.prepared.name,p=u.interacting();if(p){if(s++, s>=je)return!1;if(u.target===e){if(l+=h===o.name|0, l>=r)return!1;if(u.element===t&&(a++, h!==o.name||a>=i))return!1}}}return je>0}function U(e){var t,o,n,r,i,s=e[0],l=s?0:-1,a=[],c=[];for(r=1;r<e.length;r++)if(t=e[r], t&&t!==s)if(s){if(t.parentNode!==t.ownerDocument)if(s.parentNode!==t.ownerDocument){if(!a.length)for(o=s;o.parentNode&&o.parentNode!==o.ownerDocument;)a.unshift(o), o=o.parentNode;if(s instanceof Ee&&t instanceof be&&!(t instanceof Se)){if(t===s.parentNode)continue;o=t.ownerSVGElement;}else o=t;for(c=[];o.parentNode!==o.ownerDocument;)c.unshift(o), o=o.parentNode;for(i=0;c[i]&&c[i]===a[i];)i++;var d=[c[i-1],c[i],a[i]];for(n=d[0].lastChild;n;){if(n===d[1]){s=t, l=r, a=[];break}if(n===d[2])break;n=n.previousSibling;}}else s=t, l=r;}else s=t, l=r;return l}function Q(){if(this.target=null, this.element=null, this.dropTarget=null, this.dropElement=null, this.prevDropTarget=null, this.prevDropElement=null, this.prepared={name:null,axis:null,edges:null}, this.matches=[], this.matchElements=[], this.inertiaStatus={active:!1,smoothEnd:!1,ending:!1,startEvent:null,upCoords:{},xe:0,ye:0,sx:0,sy:0,t0:0,vx0:0,vys:0,duration:0,resumeDx:0,resumeDy:0,lambda_v0:0,one_ve_v0:0,i:null}, d(Function.prototype.bind))this.boundInertiaFrame=this.inertiaFrame.bind(this), this.boundSmoothEndFrame=this.smoothEndFrame.bind(this);else{var e=this;this.boundInertiaFrame=function(){return e.inertiaFrame()}, this.boundSmoothEndFrame=function(){return e.smoothEndFrame()};}this.activeDrops={dropzones:[],elements:[],rects:[]}, this.pointers=[], this.pointerIds=[], this.downTargets=[], this.downTimes=[], this.holdTimers=[], this.prevCoords={page:{x:0,y:0},client:{x:0,y:0},timeStamp:0}, this.curCoords={page:{x:0,y:0},client:{x:0,y:0},timeStamp:0}, this.startCoords={page:{x:0,y:0},client:{x:0,y:0},timeStamp:0}, this.pointerDelta={page:{x:0,y:0,vx:0,vy:0,speed:0},client:{x:0,y:0,vx:0,vy:0,speed:0},timeStamp:0}, this.downEvent=null, this.downPointer={}, this._eventTarget=null, this._curEventTarget=null, this.prevEvent=null, this.tapTime=0, this.prevTap=null, this.startOffset={left:0,right:0,top:0,bottom:0}, this.restrictOffset={left:0,right:0,top:0,bottom:0}, this.snapOffsets=[], this.gesture={start:{x:0,y:0},startDistance:0,prevDistance:0,distance:0,scale:1,startAngle:0,prevAngle:0}, this.snapStatus={x:0,y:0,dx:0,dy:0,realX:0,realY:0,snappedX:0,snappedY:0,targets:[],locked:!1,changed:!1}, this.restrictStatus={dx:0,dy:0,restrictedX:0,restrictedY:0,snap:null,restricted:!1,changed:!1}, this.restrictStatus.snap=this.snapStatus, this.pointerIsDown=!1, this.pointerWasMoved=!1, this.gesturing=!1, this.dragging=!1, this.resizing=!1, this.resizeAxes="xy", this.mouse=!1, De.push(this);}function J(e,t,o){var n,r=0,i=De.length,s=/mouse/i.test(e.pointerType||t)||4===e.pointerType,l=E(e);if(/down|start/i.test(t))for(r=0;r<i;r++){n=De[r];var a=o;if(n.inertiaStatus.active&&n.target.options[n.prepared.name].inertia.allowResume&&n.mouse===s)for(;a;){if(a===n.element)return n;a=j(a);}}if(s||!He||Ie){for(r=0;r<i;r++)if(De[r].mouse&&!De[r].inertiaStatus.active)return De[r];for(r=0;r<i;r++)if(De[r].mouse&&(!/down/.test(t)||!De[r].inertiaStatus.active))return n;return n=new Q, n.mouse=!0, n}for(r=0;r<i;r++)if(fe(De[r].pointerIds,l))return De[r];if(/up|end|out/i.test(t))return null;for(r=0;r<i;r++)if(n=De[r], (!n.prepared.name||n.target.options.gesture.enabled)&&!n.interacting()&&(s||!n.mouse))return n;return new Q}function Z(e){return function(t){var o,n,r=_(t.path?t.path[0]:t.target),i=_(t.currentTarget);if(He&&/touch/.test(t.type))for(We=(new Date).getTime(), n=0;n<t.changedTouches.length;n++){var s=t.changedTouches[n];o=J(s,t.type,r), o&&(o._updateEventTargets(r,i), o[e](s,t,r,i));}else{if(!Ie&&/mouse/.test(t.type)){for(n=0;n<De.length;n++)if(!De[n].mouse&&De[n].pointerIsDown)return;if((new Date).getTime()-We<500)return}if(o=J(t,t.type,r), !o)return;o._updateEventTargets(r,i), o[e](t,t,r,i);}}}function ee(e,t,o,n,r,i){var s,l,a=e.target,c=e.snapStatus,d=e.restrictStatus,u=e.pointers,h=(a&&a.options||Fe).deltaSource,p=h+"X",f=h+"Y",v=a?a.options:Fe,m=M(a,r),w="start"===n,C="end"===n,R=w?e.startCoords:e.curCoords;r=r||e.element, l=g({},R.page), s=g({},R.client), l.x-=m.x, l.y-=m.y, s.x-=m.x, s.y-=m.y;var y=v[o].snap&&v[o].snap.relativePoints;!X(a,o)||w&&y&&y.length||(this.snap={range:c.range,locked:c.locked,x:c.snappedX,y:c.snappedY,realX:c.realX,realY:c.realY,dx:c.dx,dy:c.dy}, c.locked&&(l.x+=c.dx, l.y+=c.dy, s.x+=c.dx, s.y+=c.dy)), !Y(a,o)||w&&v[o].restrict.elementRect||!d.restricted||(l.x+=d.dx, l.y+=d.dy, s.x+=d.dx, s.y+=d.dy, this.restrict={dx:d.dx,dy:d.dy}), this.pageX=l.x, this.pageY=l.y, this.clientX=s.x, this.clientY=s.y, this.x0=e.startCoords.page.x-m.x, this.y0=e.startCoords.page.y-m.y, this.clientX0=e.startCoords.client.x-m.x, this.clientY0=e.startCoords.client.y-m.y, this.ctrlKey=t.ctrlKey, this.altKey=t.altKey, this.shiftKey=t.shiftKey, this.metaKey=t.metaKey, this.button=t.button, this.buttons=t.buttons, this.target=r, this.t0=e.downTimes[0], this.type=o+(n||""), this.interaction=e, this.interactable=a;var b=e.inertiaStatus;if(b.active&&(this.detail="inertia"), i&&(this.relatedTarget=i), C?"client"===h?(this.dx=s.x-e.startCoords.client.x, this.dy=s.y-e.startCoords.client.y):(this.dx=l.x-e.startCoords.page.x, this.dy=l.y-e.startCoords.page.y):w?(this.dx=0, this.dy=0):"inertiastart"===n?(this.dx=e.prevEvent.dx, this.dy=e.prevEvent.dy):"client"===h?(this.dx=s.x-e.prevEvent.clientX, this.dy=s.y-e.prevEvent.clientY):(this.dx=l.x-e.prevEvent.pageX, this.dy=l.y-e.prevEvent.pageY), e.prevEvent&&"inertia"===e.prevEvent.detail&&!b.active&&v[o].inertia&&v[o].inertia.zeroResumeDelta&&(b.resumeDx+=this.dx, b.resumeDy+=this.dy, this.dx=this.dy=0), "resize"===o&&e.resizeAxes?v.resize.square?("y"===e.resizeAxes?this.dx=this.dy:this.dy=this.dx, this.axes="xy"):(this.axes=e.resizeAxes, "x"===e.resizeAxes?this.dy=0:"y"===e.resizeAxes&&(this.dx=0)):"gesture"===o&&(this.touches=[u[0],u[1]], w?(this.distance=L(u,h), this.box=z(u), this.scale=1, this.ds=0, this.angle=F(u,void 0,h), this.da=0):C||t instanceof ee?(this.distance=e.prevEvent.distance, this.box=e.prevEvent.box, this.scale=e.prevEvent.scale, this.ds=this.scale-1, this.angle=e.prevEvent.angle, this.da=this.angle-e.gesture.startAngle):(this.distance=L(u,h), this.box=z(u), this.scale=this.distance/e.gesture.startDistance, this.angle=F(u,e.gesture.prevAngle,h), this.ds=this.scale-e.gesture.prevScale, this.da=this.angle-e.gesture.prevAngle)), w)this.timeStamp=e.downTimes[0], this.dt=0, this.duration=0, this.speed=0, this.velocityX=0, this.velocityY=0;else if("inertiastart"===n)this.timeStamp=e.prevEvent.timeStamp, this.dt=e.prevEvent.dt, this.duration=e.prevEvent.duration, this.speed=e.prevEvent.speed, this.velocityX=e.prevEvent.velocityX, this.velocityY=e.prevEvent.velocityY;else if(this.timeStamp=(new Date).getTime(), this.dt=this.timeStamp-e.prevEvent.timeStamp, this.duration=this.timeStamp-e.downTimes[0], t instanceof ee){var S=this[p]-e.prevEvent[p],x=this[f]-e.prevEvent[f],E=this.dt/1e3;this.speed=$e(S,x)/E, this.velocityX=S/E, this.velocityY=x/E;}else this.speed=e.pointerDelta[h].speed, this.velocityX=e.pointerDelta[h].vx, this.velocityY=e.pointerDelta[h].vy;if((C||"inertiastart"===n)&&e.prevEvent.speed>600&&this.timeStamp-e.prevEvent.timeStamp<150){var _=180*Math.atan2(e.prevEvent.velocityY,e.prevEvent.velocityX)/Math.PI,$=22.5;_<0&&(_+=360);var P=135-$<=_&&_<225+$,T=225-$<=_&&_<315+$,k=!P&&(315-$<=_||_<45+$),D=!T&&45-$<=_&&_<135+$;this.swipe={up:T,down:D,left:P,right:k,angle:_,speed:e.prevEvent.speed,velocity:{x:e.prevEvent.velocityX,y:e.prevEvent.velocityY}};}}function te(){this.originalEvent.preventDefault();}function oe(e){var t="";if("drag"===e.name&&(t=qe.drag), "resize"===e.name)if(e.axis)t=qe[e.name+e.axis];else if(e.edges){for(var o="resize",n=["top","bottom","left","right"],r=0;r<4;r++)e.edges[n[r]]&&(o+=n[r]);t=qe[o];}return t}function ne(e,t,o,n,r,s,l){if(!t)return!1;if(t===!0){var a=u(s.width)?s.width:s.right-s.left,c=u(s.height)?s.height:s.bottom-s.top;if(a<0&&("left"===e?e="right":"right"===e&&(e="left")), c<0&&("top"===e?e="bottom":"bottom"===e&&(e="top")), "left"===e)return o.x<(a>=0?s.left:s.right)+l;if("top"===e)return o.y<(c>=0?s.top:s.bottom)+l;if("right"===e)return o.x>(a>=0?s.right:s.left)-l;if("bottom"===e)return o.y>(c>=0?s.bottom:s.top)-l}return!!i(n)&&(i(t)?t===n:ve(n,t,r))}function re(e,t,o){var n,r=this.getRect(o),i=!1,s=null,l=null,a=g({},t.curCoords.page),d=this.options;if(!r)return null;if(Be.resize&&d.resize.enabled){var u=d.resize;if(n={left:!1,right:!1,top:!1,bottom:!1}, c(u.edges)){for(var h in n)n[h]=ne(h,u.edges[h],a,t._eventTarget,o,r,u.margin||Ae);n.left=n.left&&!n.right, n.top=n.top&&!n.bottom, i=n.left||n.right||n.top||n.bottom;}else{var p="y"!==d.resize.axis&&a.x>r.right-Ae,f="x"!==d.resize.axis&&a.y>r.bottom-Ae;i=p||f, l=(p?"x":"")+(f?"y":"");}}return s=i?"resize":Be.drag&&d.drag.enabled?"drag":null, Be.gesture&&t.pointerIds.length>=2&&!t.dragging&&!t.resizing&&(s="gesture"), s?{name:s,axis:l,edges:n}:null}function ie(e,t){if(!c(e))return null;var o=e.name,n=t.options;return("resize"===o&&n.resize.enabled||"drag"===o&&n.drag.enabled||"gesture"===o&&n.gesture.enabled)&&Be[o]?("resize"!==o&&"resizeyx"!==o||(o="resizexy"), e):null}function se(e,t){var o={},n=Le[e.type],r=_(e.path?e.path[0]:e.target),s=r;t=!!t;for(var l in e)o[l]=e[l];for(o.originalEvent=e, o.preventDefault=te;i(s);){for(var a=0;a<n.selectors.length;a++){var c=n.selectors[a],d=n.contexts[a];if(ge(s,c)&&N(d,r)&&N(d,s)){var u=n.listeners[a];o.currentTarget=s;for(var h=0;h<u.length;h++)u[h][1]===t&&u[h][0](o);}}s=j(s);}}function le(e){return se.call(this,e,!0)}function ae(e,t){return ke.get(e,t)||new ce(e,t)}function ce(e,t){this._element=e, this._iEvents=this._iEvents||{};var o;if(f(e)){this.selector=e;var n=t&&t.context;o=n?$(n):Ce, n&&(o.Node?n instanceof o.Node:i(n)||n===o.document)&&(this._context=n);}else o=$(e), i(e,o)&&(Ie?(Je.add(this._element,me.down,et.pointerDown), Je.add(this._element,me.move,et.pointerHover)):(Je.add(this._element,"mousedown",et.pointerDown), Je.add(this._element,"mousemove",et.pointerHover), Je.add(this._element,"touchstart",et.pointerDown), Je.add(this._element,"touchmove",et.pointerHover)));this._doc=o.document, fe(Te,this._doc)||he(this._doc), ke.push(this), this.set(t);}function de(e,t){var o=!1;return function(){return o||(Ce.console.warn(t), o=!0), e.apply(this,arguments)}}function ue(e){for(var t=0;t<De.length;t++)De[t].pointerEnd(e,e);}function he(e){if(!fe(Te,e)){var t=e.defaultView||e.parentWindow;for(var o in Le)Je.add(e,o,se), Je.add(e,o,le,!0);Ie?(me=_e===t.MSPointerEvent?{up:"MSPointerUp",down:"MSPointerDown",over:"mouseover",out:"mouseout",move:"MSPointerMove",cancel:"MSPointerCancel"}:{up:"pointerup",down:"pointerdown",over:"pointerover",out:"pointerout",move:"pointermove",cancel:"pointercancel"}, Je.add(e,me.down,et.selectorDown), Je.add(e,me.move,et.pointerMove), Je.add(e,me.over,et.pointerOver), Je.add(e,me.out,et.pointerOut), Je.add(e,me.up,et.pointerUp), Je.add(e,me.cancel,et.pointerCancel), Je.add(e,me.move,et.autoScrollMove)):(Je.add(e,"mousedown",et.selectorDown), Je.add(e,"mousemove",et.pointerMove), Je.add(e,"mouseup",et.pointerUp), Je.add(e,"mouseover",et.pointerOver), Je.add(e,"mouseout",et.pointerOut), Je.add(e,"touchstart",et.selectorDown), Je.add(e,"touchmove",et.pointerMove), Je.add(e,"touchend",et.pointerUp), Je.add(e,"touchcancel",et.pointerCancel), Je.add(e,"mousemove",et.autoScrollMove), Je.add(e,"touchmove",et.autoScrollMove)), Je.add(t,"blur",ue);try{if(t.frameElement){var n=t.frameElement.ownerDocument,r=n.defaultView;Je.add(n,"mouseup",et.pointerEnd), Je.add(n,"touchend",et.pointerEnd), Je.add(n,"touchcancel",et.pointerEnd), Je.add(n,"pointerup",et.pointerEnd), Je.add(n,"MSPointerUp",et.pointerEnd), Je.add(r,"blur",ue);}}catch(e){ae.windowParentError=e;}Je.add(e,"dragstart",function(e){for(var t=0;t<De.length;t++){var o=De[t];if(o.element&&(o.element===e.target||N(o.element,e.target)))return void o.checkAndPreventDefault(e,o.target,o.element)}}), Je.useAttachEvent&&(Je.add(e,"selectstart",function(e){var t=De[0];t.currentAction()&&t.checkAndPreventDefault(e);}), Je.add(e,"dblclick",Z("ie8Dblclick"))), Te.push(e);}}function pe(e,t){for(var o=0,n=e.length;o<n;o++)if(e[o]===t)return o;return-1}function fe(e,t){return pe(e,t)!==-1}function ge(e,t,n){return we?we(e,t,n):(Ce!==o&&(t=t.replace(/\/deep\//g," ")), e[Ke](t))}function ve(e,t,o){for(;i(e);){if(ge(e,t))return!0;if(e=j(e), e===o)return ge(e,t)}return!1}if(o){var me,we,Ce=function(){var e=o.document.createTextNode("");return e.ownerDocument!==o.document&&"function"==typeof o.wrap&&o.wrap(e)===e?o.wrap(o):o}(),Re=Ce.document,ye=Ce.DocumentFragment||r,be=Ce.SVGElement||r,Se=Ce.SVGSVGElement||r,xe=Ce.SVGElementInstance||r,Ee=Ce.HTMLElement||Ce.Element,_e=Ce.PointerEvent||Ce.MSPointerEvent,$e=Math.hypot||function(e,t){return Math.sqrt(e*e+t*t)},Pe={},Te=[],ke=[],De=[],ze=!1,Le={},Fe={base:{accept:null,actionChecker:null,styleCursor:!0,preventDefault:"auto",origin:{x:0,y:0},deltaSource:"page",allowFrom:null,ignoreFrom:null,_context:Re,dropChecker:null},drag:{enabled:!1,manualStart:!0,max:1/0,maxPerElement:1,snap:null,restrict:null,inertia:null,autoScroll:null,axis:"xy"},drop:{enabled:!1,accept:null,overlap:"pointer"},resize:{enabled:!1,manualStart:!1,max:1/0,maxPerElement:1,snap:null,restrict:null,inertia:null,autoScroll:null,square:!1,preserveAspectRatio:!1,axis:"xy",margin:NaN,edges:null,invert:"none"},gesture:{manualStart:!1,enabled:!1,max:1/0,maxPerElement:1,restrict:null},perAction:{manualStart:!1,max:1/0,maxPerElement:1,snap:{enabled:!1,endOnly:!1,range:1/0,targets:null,offsets:null,relativePoints:null},restrict:{enabled:!1,endOnly:!1},autoScroll:{enabled:!1,container:null,margin:60,speed:300},inertia:{enabled:!1,resistance:10,minSpeed:100,endSpeed:10,allowResume:!0,zeroResumeDelta:!0,smoothEndDuration:300}},_holdDuration:600},Me={interaction:null,i:null,x:0,y:0,scroll:function(){var e,t,o,n,r=Me.interaction.target.options[Me.interaction.prepared.name].autoScroll,i=r.container||$(Me.interaction.element),l=(new Date).getTime(),a=(l-Me.prevTimeX)/1e3,c=(l-Me.prevTimeY)/1e3;r.velocity?(e=r.velocity.x, t=r.velocity.y):e=t=r.speed, o=e*a, n=t*c, (o>=1||n>=1)&&(s(i)?i.scrollBy(Me.x*o,Me.y*n):i&&(i.scrollLeft+=Me.x*o, i.scrollTop+=Me.y*n), o>=1&&(Me.prevTimeX=l), n>=1&&(Me.prevTimeY=l)), Me.isScrolling&&(Qe(Me.i), Me.i=Ue(Me.scroll));},isScrolling:!1,prevTimeX:0,prevTimeY:0,start:function(e){Me.isScrolling=!0, Qe(Me.i), Me.interaction=e, Me.prevTimeX=(new Date).getTime(), Me.prevTimeY=(new Date).getTime(), Me.i=Ue(Me.scroll);},stop:function(){Me.isScrolling=!1, Qe(Me.i);}},He="ontouchstart"in Ce||Ce.DocumentTouch&&Re instanceof Ce.DocumentTouch,Ie=_e&&!/Chrome/.test(navigator.userAgent),Ae=He||Ie?20:10,Ne=1,We=0,je=1/0,qe=Re.all&&!Ce.atob?{drag:"move",resizex:"e-resize",resizey:"s-resize",resizexy:"se-resize",resizetop:"n-resize",resizeleft:"w-resize",resizebottom:"s-resize",resizeright:"e-resize",resizetopleft:"se-resize",resizebottomright:"se-resize",resizetopright:"ne-resize",resizebottomleft:"ne-resize",gesture:""}:{drag:"move",resizex:"ew-resize",resizey:"ns-resize",resizexy:"nwse-resize",resizetop:"ns-resize",resizeleft:"ew-resize",resizebottom:"ns-resize",resizeright:"ew-resize",resizetopleft:"nwse-resize",resizebottomright:"nwse-resize",resizetopright:"nesw-resize",resizebottomleft:"nesw-resize",gesture:""},Be={drag:!0,resize:!0,gesture:!0},Ve="onmousewheel"in Re?"mousewheel":"wheel",Oe=["dragstart","dragmove","draginertiastart","dragend","dragenter","dragleave","dropactivate","dropdeactivate","dropmove","drop","resizestart","resizemove","resizeinertiastart","resizeend","gesturestart","gesturemove","gestureinertiastart","gestureend","down","move","up","cancel","tap","doubletap","hold"],Xe={},Ye="Opera"==navigator.appName&&He&&navigator.userAgent.match("Presto"),Ge=/iP(hone|od|ad)/.test(navigator.platform)&&/OS 7[^\d]/.test(navigator.appVersion),Ke="matches"in Element.prototype?"matches":"webkitMatchesSelector"in Element.prototype?"webkitMatchesSelector":"mozMatchesSelector"in Element.prototype?"mozMatchesSelector":"oMatchesSelector"in Element.prototype?"oMatchesSelector":"msMatchesSelector",Ue=o.requestAnimationFrame,Qe=o.cancelAnimationFrame,Je=function(){function e(e,t,l,h){var p=pe(c,e),f=d[p];if(f||(f={events:{},typeCount:0}, p=c.push(e)-1, d.push(f), u.push(i?{supplied:[],wrapped:[],useCount:[]}:null)), f.events[t]||(f.events[t]=[], f.typeCount++), !fe(f.events[t],l)){var g;if(i){var v=u[p],m=pe(v.supplied,l),w=v.wrapped[m]||function(t){t.immediatePropagationStopped||(t.target=t.srcElement, t.currentTarget=e, t.preventDefault=t.preventDefault||o, t.stopPropagation=t.stopPropagation||n, t.stopImmediatePropagation=t.stopImmediatePropagation||r, /mouse|click/.test(t.type)&&(t.pageX=t.clientX+$(e).document.documentElement.scrollLeft, t.pageY=t.clientY+$(e).document.documentElement.scrollTop), l(t));};g=e[s](a+t,w,Boolean(h)), m===-1?(v.supplied.push(l), v.wrapped.push(w), v.useCount.push(1)):v.useCount[m]++;}else g=e[s](t,l,h||!1);return f.events[t].push(l), g}}function t(e,o,n,r){var s,h,p,f=pe(c,e),g=d[f],v=n;if(g&&g.events)if(i&&(h=u[f], p=pe(h.supplied,n), v=h.wrapped[p]), "all"!==o){if(g.events[o]){var m=g.events[o].length;if("all"===n){for(s=0;s<m;s++)t(e,o,g.events[o][s],Boolean(r));return}for(s=0;s<m;s++)if(g.events[o][s]===n){e[l](a+o,v,r||!1), g.events[o].splice(s,1), i&&h&&(h.useCount[p]--, 0===h.useCount[p]&&(h.supplied.splice(p,1), h.wrapped.splice(p,1), h.useCount.splice(p,1)));break}g.events[o]&&0===g.events[o].length&&(g.events[o]=null, g.typeCount--);}g.typeCount||(d.splice(f,1), c.splice(f,1), u.splice(f,1));}else for(o in g.events)g.events.hasOwnProperty(o)&&t(e,o,"all");}function o(){this.returnValue=!1;}function n(){this.cancelBubble=!0;}function r(){this.cancelBubble=!0, this.immediatePropagationStopped=!0;}var i="attachEvent"in Ce&&!("addEventListener"in Ce),s=i?"attachEvent":"addEventListener",l=i?"detachEvent":"removeEventListener",a=i?"on":"",c=[],d=[],u=[];return{add:e,remove:t,useAttachEvent:i,_elements:c,_targets:d,_attachedListeners:u}}(),Ze={webkit:/(Movement[XY]|Radius[XY]|RotationAngle|Force)$/};Q.prototype={getPageXY:function(e,t){return b(e,t,this)},getClientXY:function(e,t){return S(e,t,this)},setEventXY:function(e,t){return w(e,t,this)},pointerOver:function(e,t,o){function n(e,t){e&&q(e,o)&&!B(e,o,o)&&V(e,o,o)&&ge(o,t)&&(r.push(e), i.push(o));}if(!this.prepared.name&&this.mouse){var r=[],i=[],s=this.element;this.addPointer(e), !this.target||!B(this.target,this.element,o)&&V(this.target,this.element,o)||(this.target=null, this.element=null, this.matches=[], this.matchElements=[]);var l=ke.get(o),a=l&&!B(l,o,o)&&V(l,o,o)&&ie(l.getAction(e,t,this,o),l);a&&!K(l,o,a)&&(a=null), a?(this.target=l, this.element=o, this.matches=[], this.matchElements=[]):(ke.forEachSelector(n), this.validateSelector(e,t,r,i)?(this.matches=r, this.matchElements=i, this.pointerHover(e,t,this.matches,this.matchElements), Je.add(o,Ie?me.move:"mousemove",et.pointerHover)):this.target&&(N(s,o)?(this.pointerHover(e,t,this.matches,this.matchElements), Je.add(this.element,Ie?me.move:"mousemove",et.pointerHover)):(this.target=null, this.element=null, this.matches=[], this.matchElements=[])));}},pointerHover:function(e,t,o,n,r,i){var s=this.target;if(!this.prepared.name&&this.mouse){var l;this.setEventXY(this.curCoords,[e]), r?l=this.validateSelector(e,t,r,i):s&&(l=ie(s.getAction(this.pointers[0],t,this,this.element),this.target)), s&&s.options.styleCursor&&(l?s._doc.documentElement.style.cursor=oe(l):s._doc.documentElement.style.cursor="");}else this.prepared.name&&this.checkAndPreventDefault(t,s,this.element);},pointerOut:function(e,t,o){this.prepared.name||(ke.get(o)||Je.remove(o,Ie?me.move:"mousemove",et.pointerHover), this.target&&this.target.options.styleCursor&&!this.interacting()&&(this.target._doc.documentElement.style.cursor=""));
},selectorDown:function(e,t,o,n){function r(e,t,n){var r=we?n.querySelectorAll(t):void 0;q(e,c)&&!B(e,c,o)&&V(e,c,o)&&ge(c,t,r)&&(l.matches.push(e), l.matchElements.push(c));}var s,l=this,a=Je.useAttachEvent?g({},t):t,c=o,d=this.addPointer(e);if(this.holdTimers[d]=setTimeout(function(){l.pointerHold(Je.useAttachEvent?a:e,a,o,n);},Fe._holdDuration), this.pointerIsDown=!0, this.inertiaStatus.active&&this.target.selector)for(;i(c);){if(c===this.element&&ie(this.target.getAction(e,t,this,this.element),this.target).name===this.prepared.name)return Qe(this.inertiaStatus.i), this.inertiaStatus.active=!1, void this.collectEventTargets(e,t,o,"down");c=j(c);}if(this.interacting())return void this.collectEventTargets(e,t,o,"down");for(this.setEventXY(this.curCoords,[e]), this.downEvent=t;i(c)&&!s;)this.matches=[], this.matchElements=[], ke.forEachSelector(r), s=this.validateSelector(e,t,this.matches,this.matchElements), c=j(c);return s?(this.prepared.name=s.name, this.prepared.axis=s.axis, this.prepared.edges=s.edges, this.collectEventTargets(e,t,o,"down"), this.pointerDown(e,t,o,n,s)):(this.downTimes[d]=(new Date).getTime(), this.downTargets[d]=o, v(this.downPointer,e), m(this.prevCoords,this.curCoords), this.pointerWasMoved=!1, void this.collectEventTargets(e,t,o,"down"))},pointerDown:function(e,t,o,n,r){if(!r&&!this.inertiaStatus.active&&this.pointerWasMoved&&this.prepared.name)return void this.checkAndPreventDefault(t,this.target,this.element);this.pointerIsDown=!0, this.downEvent=t;var i,s=this.addPointer(e);if(this.pointerIds.length>1&&this.target._element===this.element){var l=ie(r||this.target.getAction(e,t,this,this.element),this.target);K(this.target,this.element,l)&&(i=l), this.prepared.name=null;}else if(!this.prepared.name){var a=ke.get(n);a&&!B(a,n,o)&&V(a,n,o)&&(i=ie(r||a.getAction(e,t,this,n),a,o))&&K(a,n,i)&&(this.target=a, this.element=n);}var c=this.target,d=c&&c.options;if(!c||!r&&this.prepared.name)this.inertiaStatus.active&&n===this.element&&ie(c.getAction(e,t,this,this.element),c).name===this.prepared.name&&(Qe(this.inertiaStatus.i), this.inertiaStatus.active=!1, this.checkAndPreventDefault(t,c,this.element));else{if(i=i||ie(r||c.getAction(e,t,this,n),c,this.element), this.setEventXY(this.startCoords,this.pointers), !i)return;d.styleCursor&&(c._doc.documentElement.style.cursor=oe(i)), this.resizeAxes="resize"===i.name?i.axis:null, "gesture"===i&&this.pointerIds.length<2&&(i=null), this.prepared.name=i.name, this.prepared.axis=i.axis, this.prepared.edges=i.edges, this.snapStatus.snappedX=this.snapStatus.snappedY=this.restrictStatus.restrictedX=this.restrictStatus.restrictedY=NaN, this.downTimes[s]=(new Date).getTime(), this.downTargets[s]=o, v(this.downPointer,e), m(this.prevCoords,this.startCoords), this.pointerWasMoved=!1, this.checkAndPreventDefault(t,c,this.element);}},setModifications:function(e,t){var o=this.target,n=!0,r=X(o,this.prepared.name)&&(!o.options[this.prepared.name].snap.endOnly||t),i=Y(o,this.prepared.name)&&(!o.options[this.prepared.name].restrict.endOnly||t);return r?this.setSnapping(e):this.snapStatus.locked=!1, i?this.setRestriction(e):this.restrictStatus.restricted=!1, r&&this.snapStatus.locked&&!this.snapStatus.changed?n=i&&this.restrictStatus.restricted&&this.restrictStatus.changed:i&&this.restrictStatus.restricted&&!this.restrictStatus.changed&&(n=!1), n},setStartOffsets:function(e,t,o){var n,r,i=t.getRect(o),s=M(t,o),l=t.options[this.prepared.name].snap,a=t.options[this.prepared.name].restrict;i?(this.startOffset.left=this.startCoords.page.x-i.left, this.startOffset.top=this.startCoords.page.y-i.top, this.startOffset.right=i.right-this.startCoords.page.x, this.startOffset.bottom=i.bottom-this.startCoords.page.y, n="width"in i?i.width:i.right-i.left, r="height"in i?i.height:i.bottom-i.top):this.startOffset.left=this.startOffset.top=this.startOffset.right=this.startOffset.bottom=0, this.snapOffsets.splice(0);var c=l&&"startCoords"===l.offset?{x:this.startCoords.page.x-s.x,y:this.startCoords.page.y-s.y}:l&&l.offset||{x:0,y:0};if(i&&l&&l.relativePoints&&l.relativePoints.length)for(var d=0;d<l.relativePoints.length;d++)this.snapOffsets.push({x:this.startOffset.left-n*l.relativePoints[d].x+c.x,y:this.startOffset.top-r*l.relativePoints[d].y+c.y});else this.snapOffsets.push(c);i&&a.elementRect?(this.restrictOffset.left=this.startOffset.left-n*a.elementRect.left, this.restrictOffset.top=this.startOffset.top-r*a.elementRect.top, this.restrictOffset.right=this.startOffset.right-n*(1-a.elementRect.right), this.restrictOffset.bottom=this.startOffset.bottom-r*(1-a.elementRect.bottom)):this.restrictOffset.left=this.restrictOffset.top=this.restrictOffset.right=this.restrictOffset.bottom=0;},start:function(e,t,o){this.interacting()||!this.pointerIsDown||this.pointerIds.length<("gesture"===e.name?2:1)||(pe(De,this)===-1&&De.push(this), this.prepared.name||this.setEventXY(this.startCoords), this.prepared.name=e.name, this.prepared.axis=e.axis, this.prepared.edges=e.edges, this.target=t, this.element=o, this.setStartOffsets(e.name,t,o), this.setModifications(this.startCoords.page), this.prevEvent=this[this.prepared.name+"Start"](this.downEvent));},pointerMove:function(e,t,o,n,r){if(this.inertiaStatus.active){var s=this.inertiaStatus.upCoords.page,l=this.inertiaStatus.upCoords.client,a={pageX:s.x+this.inertiaStatus.sx,pageY:s.y+this.inertiaStatus.sy,clientX:l.x+this.inertiaStatus.sx,clientY:l.y+this.inertiaStatus.sy};this.setEventXY(this.curCoords,[a]);}else this.recordPointer(e), this.setEventXY(this.curCoords,this.pointers);var c,d,u=this.curCoords.page.x===this.prevCoords.page.x&&this.curCoords.page.y===this.prevCoords.page.y&&this.curCoords.client.x===this.prevCoords.client.x&&this.curCoords.client.y===this.prevCoords.client.y,h=this.mouse?0:pe(this.pointerIds,E(e));if(this.pointerIsDown&&!this.pointerWasMoved&&(c=this.curCoords.client.x-this.startCoords.client.x, d=this.curCoords.client.y-this.startCoords.client.y, this.pointerWasMoved=$e(c,d)>Ne), u||this.pointerIsDown&&!this.pointerWasMoved||(this.pointerIsDown&&clearTimeout(this.holdTimers[h]), this.collectEventTargets(e,t,o,"move")), this.pointerIsDown){if(u&&this.pointerWasMoved&&!r)return void this.checkAndPreventDefault(t,this.target,this.element);if(C(this.pointerDelta,this.prevCoords,this.curCoords), this.prepared.name){if(this.pointerWasMoved&&(!this.inertiaStatus.active||e instanceof ee&&/inertiastart/.test(e.type))){if(!this.interacting()&&(C(this.pointerDelta,this.prevCoords,this.curCoords), "drag"===this.prepared.name)){var p=Math.abs(c),f=Math.abs(d),g=this.target.options.drag.axis,v=p>f?"x":p<f?"y":"xy";if("xy"!==v&&"xy"!==g&&g!==v){this.prepared.name=null;for(var w=o;i(w);){var R=ke.get(w);if(R&&R!==this.target&&!R.options.drag.manualStart&&"drag"===R.getAction(this.downPointer,this.downEvent,this,w).name&&O(v,R)){this.prepared.name="drag", this.target=R, this.element=w;break}w=j(w);}if(!this.prepared.name){var y=this,b=function(e,t,n){var r=we?n.querySelectorAll(t):void 0;if(e!==y.target)return q(e,o)&&!e.options.drag.manualStart&&!B(e,w,o)&&V(e,w,o)&&ge(w,t,r)&&"drag"===e.getAction(y.downPointer,y.downEvent,y,w).name&&O(v,e)&&K(e,w,"drag")?e:void 0};for(w=o;i(w);){var S=ke.forEachSelector(b);if(S){this.prepared.name="drag", this.target=S, this.element=w;break}w=j(w);}}}}var x=!!this.prepared.name&&!this.interacting();if(x&&(this.target.options[this.prepared.name].manualStart||!K(this.target,this.element,this.prepared)))return void this.stop(t);if(this.prepared.name&&this.target){x&&this.start(this.prepared,this.target,this.element);var _=this.setModifications(this.curCoords.page,r);(_||x)&&(this.prevEvent=this[this.prepared.name+"Move"](t)), this.checkAndPreventDefault(t,this.target,this.element);}}m(this.prevCoords,this.curCoords), (this.dragging||this.resizing)&&this.autoScrollMove(e);}}},dragStart:function(e){var t=new ee(this,e,"drag","start",this.element);t.originalEvent=e, this.dragging=!0, this.target.fire(t), this.activeDrops.dropzones=[], this.activeDrops.elements=[], this.activeDrops.rects=[], this.dynamicDrop||this.setActiveDrops(this.element);var o=this.getDropEvents(e,t);return o.activate&&this.fireActiveDrops(o.activate), t},dragMove:function(e){var t=this.target,o=new ee(this,e,"drag","move",this.element),n=this.element,r=this.getDrop(o,e,n);o.originalEvent=e, this.dropTarget=r.dropzone, this.dropElement=r.element;var i=this.getDropEvents(e,o);return t.fire(o), i.leave&&this.prevDropTarget.fire(i.leave), i.enter&&this.dropTarget.fire(i.enter), i.move&&this.dropTarget.fire(i.move), this.prevDropTarget=this.dropTarget, this.prevDropElement=this.dropElement, o},resizeStart:function(e){var t=new ee(this,e,"resize","start",this.element);if(this.prepared.edges){var o=this.target.getRect(this.element);if(this.target.options.resize.square||this.target.options.resize.preserveAspectRatio){var n=g({},this.prepared.edges);n.top=n.top||n.left&&!n.bottom, n.left=n.left||n.top&&!n.right, n.bottom=n.bottom||n.right&&!n.top, n.right=n.right||n.bottom&&!n.left, this.prepared._linkedEdges=n;}else this.prepared._linkedEdges=null;this.target.options.resize.preserveAspectRatio&&(this.resizeStartAspectRatio=o.width/o.height), this.resizeRects={start:o,current:g({},o),restricted:g({},o),previous:g({},o),delta:{left:0,right:0,width:0,top:0,bottom:0,height:0}}, t.rect=this.resizeRects.restricted, t.deltaRect=this.resizeRects.delta;}return this.target.fire(t), this.resizing=!0, t},resizeMove:function(e){var t=new ee(this,e,"resize","move",this.element),o=this.prepared.edges,n=this.target.options.resize.invert,r="reposition"===n||"negate"===n;if(o){var i=t.dx,s=t.dy,l=this.resizeRects.start,a=this.resizeRects.current,c=this.resizeRects.restricted,d=this.resizeRects.delta,u=g(this.resizeRects.previous,c),h=o;if(this.target.options.resize.preserveAspectRatio){var p=this.resizeStartAspectRatio;o=this.prepared._linkedEdges, h.left&&h.bottom||h.right&&h.top?s=-i/p:h.left||h.right?s=i/p:(h.top||h.bottom)&&(i=s*p);}else this.target.options.resize.square&&(o=this.prepared._linkedEdges, h.left&&h.bottom||h.right&&h.top?s=-i:h.left||h.right?s=i:(h.top||h.bottom)&&(i=s));if(o.top&&(a.top+=s), o.bottom&&(a.bottom+=s), o.left&&(a.left+=i), o.right&&(a.right+=i), r){if(g(c,a), "reposition"===n){var f;c.top>c.bottom&&(f=c.top, c.top=c.bottom, c.bottom=f), c.left>c.right&&(f=c.left, c.left=c.right, c.right=f);}}else c.top=Math.min(a.top,l.bottom), c.bottom=Math.max(a.bottom,l.top), c.left=Math.min(a.left,l.right), c.right=Math.max(a.right,l.left);c.width=c.right-c.left, c.height=c.bottom-c.top;for(var v in c)d[v]=c[v]-u[v];t.edges=this.prepared.edges, t.rect=c, t.deltaRect=d;}return this.target.fire(t), t},gestureStart:function(e){var t=new ee(this,e,"gesture","start",this.element);return t.ds=0, this.gesture.startDistance=this.gesture.prevDistance=t.distance, this.gesture.startAngle=this.gesture.prevAngle=t.angle, this.gesture.scale=1, this.gesturing=!0, this.target.fire(t), t},gestureMove:function(e){if(!this.pointerIds.length)return this.prevEvent;var t;return t=new ee(this,e,"gesture","move",this.element), t.ds=t.scale-this.gesture.scale, this.target.fire(t), this.gesture.prevAngle=t.angle, this.gesture.prevDistance=t.distance, t.scale===1/0||null===t.scale||void 0===t.scale||isNaN(t.scale)||(this.gesture.scale=t.scale), t},pointerHold:function(e,t,o){this.collectEventTargets(e,t,o,"hold");},pointerUp:function(e,t,o,n){var r=this.mouse?0:pe(this.pointerIds,E(e));clearTimeout(this.holdTimers[r]), this.collectEventTargets(e,t,o,"up"), this.collectEventTargets(e,t,o,"tap"), this.pointerEnd(e,t,o,n), this.removePointer(e);},pointerCancel:function(e,t,o,n){var r=this.mouse?0:pe(this.pointerIds,E(e));clearTimeout(this.holdTimers[r]), this.collectEventTargets(e,t,o,"cancel"), this.pointerEnd(e,t,o,n), this.removePointer(e);},ie8Dblclick:function(e,t,o){this.prevTap&&t.clientX===this.prevTap.clientX&&t.clientY===this.prevTap.clientY&&o===this.prevTap.target&&(this.downTargets[0]=o, this.downTimes[0]=(new Date).getTime(), this.collectEventTargets(e,t,o,"tap"));},pointerEnd:function(e,t,o,n){var r,i=this.target,s=i&&i.options,l=s&&this.prepared.name&&s[this.prepared.name].inertia,a=this.inertiaStatus;if(this.interacting()){if(a.active&&!a.ending)return;var c,d,u=(new Date).getTime(),h=!1,p=!1,f=!1,v=X(i,this.prepared.name)&&s[this.prepared.name].snap.endOnly,w=Y(i,this.prepared.name)&&s[this.prepared.name].restrict.endOnly,C=0,R=0;if(c=this.dragging?"x"===s.drag.axis?Math.abs(this.pointerDelta.client.vx):"y"===s.drag.axis?Math.abs(this.pointerDelta.client.vy):this.pointerDelta.client.speed:this.pointerDelta.client.speed, h=l&&l.enabled&&"gesture"!==this.prepared.name&&t!==a.startEvent, p=h&&u-this.curCoords.timeStamp<50&&c>l.minSpeed&&c>l.endSpeed, h&&!p&&(v||w)){var y={};y.snap=y.restrict=y, v&&(this.setSnapping(this.curCoords.page,y), y.locked&&(C+=y.dx, R+=y.dy)), w&&(this.setRestriction(this.curCoords.page,y), y.restricted&&(C+=y.dx, R+=y.dy)), (C||R)&&(f=!0);}if(p||f){if(m(a.upCoords,this.curCoords), this.pointers[0]=a.startEvent=d=new ee(this,t,this.prepared.name,"inertiastart",this.element), a.t0=u, i.fire(a.startEvent), p){a.vx0=this.pointerDelta.client.vx, a.vy0=this.pointerDelta.client.vy, a.v0=c, this.calcInertia(a);var b,S=g({},this.curCoords.page),x=M(i,this.element);if(S.x=S.x+a.xe-x.x, S.y=S.y+a.ye-x.y, b={useStatusXY:!0,x:S.x,y:S.y,dx:0,dy:0,snap:null}, b.snap=b, C=R=0, v){var E=this.setSnapping(this.curCoords.page,b);E.locked&&(C+=E.dx, R+=E.dy);}if(w){var _=this.setRestriction(this.curCoords.page,b);_.restricted&&(C+=_.dx, R+=_.dy);}a.modifiedXe+=C, a.modifiedYe+=R, a.i=Ue(this.boundInertiaFrame);}else a.smoothEnd=!0, a.xe=C, a.ye=R, a.sx=a.sy=0, a.i=Ue(this.boundSmoothEndFrame);return void(a.active=!0)}(v||w)&&this.pointerMove(e,t,o,n,!0);}if(this.dragging){r=new ee(this,t,"drag","end",this.element);var $=this.element,P=this.getDrop(r,t,$);this.dropTarget=P.dropzone, this.dropElement=P.element;var T=this.getDropEvents(t,r);T.leave&&this.prevDropTarget.fire(T.leave), T.enter&&this.dropTarget.fire(T.enter), T.drop&&this.dropTarget.fire(T.drop), T.deactivate&&this.fireActiveDrops(T.deactivate), i.fire(r);}else this.resizing?(r=new ee(this,t,"resize","end",this.element), i.fire(r)):this.gesturing&&(r=new ee(this,t,"gesture","end",this.element), i.fire(r));this.stop(t);},collectDrops:function(e){var t,o=[],n=[];for(e=e||this.element, t=0;t<ke.length;t++)if(ke[t].options.drop.enabled){var r=ke[t],s=r.options.drop.accept;if(!(i(s)&&s!==e||p(s)&&!ge(e,s)))for(var l=r.selector?r._context.querySelectorAll(r.selector):[r._element],a=0,c=l.length;a<c;a++){var d=l[a];d!==e&&(o.push(r), n.push(d));}}return{dropzones:o,elements:n}},fireActiveDrops:function(e){var t,o,n,r;for(t=0;t<this.activeDrops.dropzones.length;t++)o=this.activeDrops.dropzones[t], n=this.activeDrops.elements[t], n!==r&&(e.target=n, o.fire(e)), r=n;},setActiveDrops:function(e){var t=this.collectDrops(e,!0);this.activeDrops.dropzones=t.dropzones, this.activeDrops.elements=t.elements, this.activeDrops.rects=[];for(var o=0;o<this.activeDrops.dropzones.length;o++)this.activeDrops.rects[o]=this.activeDrops.dropzones[o].getRect(this.activeDrops.elements[o]);},getDrop:function(e,t,o){var n=[];ze&&this.setActiveDrops(o);for(var r=0;r<this.activeDrops.dropzones.length;r++){var i=this.activeDrops.dropzones[r],s=this.activeDrops.elements[r],l=this.activeDrops.rects[r];n.push(i.dropCheck(e,t,this.target,o,s,l)?s:null);}var a=U(n),c=this.activeDrops.dropzones[a]||null,d=this.activeDrops.elements[a]||null;return{dropzone:c,element:d}},getDropEvents:function(e,t){var o={enter:null,leave:null,activate:null,deactivate:null,move:null,drop:null};return this.dropElement!==this.prevDropElement&&(this.prevDropTarget&&(o.leave={target:this.prevDropElement,dropzone:this.prevDropTarget,relatedTarget:t.target,draggable:t.interactable,dragEvent:t,interaction:this,timeStamp:t.timeStamp,type:"dragleave"}, t.dragLeave=this.prevDropElement, t.prevDropzone=this.prevDropTarget), this.dropTarget&&(o.enter={target:this.dropElement,dropzone:this.dropTarget,relatedTarget:t.target,draggable:t.interactable,dragEvent:t,interaction:this,timeStamp:t.timeStamp,type:"dragenter"}, t.dragEnter=this.dropElement, t.dropzone=this.dropTarget)), "dragend"===t.type&&this.dropTarget&&(o.drop={target:this.dropElement,dropzone:this.dropTarget,relatedTarget:t.target,draggable:t.interactable,dragEvent:t,interaction:this,timeStamp:t.timeStamp,type:"drop"}, t.dropzone=this.dropTarget), "dragstart"===t.type&&(o.activate={target:null,dropzone:null,relatedTarget:t.target,draggable:t.interactable,dragEvent:t,interaction:this,timeStamp:t.timeStamp,type:"dropactivate"}), "dragend"===t.type&&(o.deactivate={target:null,dropzone:null,relatedTarget:t.target,draggable:t.interactable,dragEvent:t,interaction:this,timeStamp:t.timeStamp,type:"dropdeactivate"}), "dragmove"===t.type&&this.dropTarget&&(o.move={target:this.dropElement,dropzone:this.dropTarget,relatedTarget:t.target,draggable:t.interactable,dragEvent:t,interaction:this,dragmove:t,timeStamp:t.timeStamp,type:"dropmove"}, t.dropzone=this.dropTarget), o},currentAction:function(){return this.dragging&&"drag"||this.resizing&&"resize"||this.gesturing&&"gesture"||null},interacting:function(){return this.dragging||this.resizing||this.gesturing},clearTargets:function(){this.target=this.element=null, this.dropTarget=this.dropElement=this.prevDropTarget=this.prevDropElement=null;},stop:function(e){if(this.interacting()){Me.stop(), this.matches=[], this.matchElements=[];var t=this.target;t.options.styleCursor&&(t._doc.documentElement.style.cursor=""), e&&d(e.preventDefault)&&this.checkAndPreventDefault(e,t,this.element), this.dragging&&(this.activeDrops.dropzones=this.activeDrops.elements=this.activeDrops.rects=null);}this.clearTargets(), this.pointerIsDown=this.snapStatus.locked=this.dragging=this.resizing=this.gesturing=!1, this.prepared.name=this.prevEvent=null, this.inertiaStatus.resumeDx=this.inertiaStatus.resumeDy=0;for(var o=0;o<this.pointers.length;o++)pe(this.pointerIds,E(this.pointers[o]))===-1&&this.pointers.splice(o,1);},inertiaFrame:function(){var e=this.inertiaStatus,t=this.target.options[this.prepared.name].inertia,o=t.resistance,n=(new Date).getTime()/1e3-e.t0;if(n<e.te){var r=1-(Math.exp(-o*n)-e.lambda_v0)/e.one_ve_v0;if(e.modifiedXe===e.xe&&e.modifiedYe===e.ye)e.sx=e.xe*r, e.sy=e.ye*r;else{var i=I(0,0,e.xe,e.ye,e.modifiedXe,e.modifiedYe,r);e.sx=i.x, e.sy=i.y;}this.pointerMove(e.startEvent,e.startEvent), e.i=Ue(this.boundInertiaFrame);}else e.ending=!0, e.sx=e.modifiedXe, e.sy=e.modifiedYe, this.pointerMove(e.startEvent,e.startEvent), this.pointerEnd(e.startEvent,e.startEvent), e.active=e.ending=!1;},smoothEndFrame:function(){var e=this.inertiaStatus,t=(new Date).getTime()-e.t0,o=this.target.options[this.prepared.name].inertia.smoothEndDuration;t<o?(e.sx=A(t,0,e.xe,o), e.sy=A(t,0,e.ye,o), this.pointerMove(e.startEvent,e.startEvent), e.i=Ue(this.boundSmoothEndFrame)):(e.ending=!0, e.sx=e.xe, e.sy=e.ye, this.pointerMove(e.startEvent,e.startEvent), this.pointerEnd(e.startEvent,e.startEvent), e.smoothEnd=e.active=e.ending=!1);},addPointer:function(e){var t=E(e),o=this.mouse?0:pe(this.pointerIds,t);return o===-1&&(o=this.pointerIds.length), this.pointerIds[o]=t, this.pointers[o]=e, o},removePointer:function(e){var t=E(e),o=this.mouse?0:pe(this.pointerIds,t);o!==-1&&(this.pointers.splice(o,1), this.pointerIds.splice(o,1), this.downTargets.splice(o,1), this.downTimes.splice(o,1), this.holdTimers.splice(o,1));},recordPointer:function(e){var t=this.mouse?0:pe(this.pointerIds,E(e));t!==-1&&(this.pointers[t]=e);},collectEventTargets:function(e,t,o,n){function r(e,t,r){var s=we?r.querySelectorAll(t):void 0;e._iEvents[n]&&i(c)&&q(e,c)&&!B(e,c,o)&&V(e,c,o)&&ge(c,t,s)&&(l.push(e), a.push(c));}var s=this.mouse?0:pe(this.pointerIds,E(e));if("tap"!==n||!this.pointerWasMoved&&this.downTargets[s]&&this.downTargets[s]===o){for(var l=[],a=[],c=o;c;)ae.isSet(c)&&ae(c)._iEvents[n]&&(l.push(ae(c)), a.push(c)), ke.forEachSelector(r), c=j(c);(l.length||"tap"===n)&&this.firePointers(e,t,o,l,a,n);}},firePointers:function(e,t,o,n,r,i){var s,l,a,c=this.mouse?0:pe(this.pointerIds,E(e)),d={};for("doubletap"===i?d=e:(v(d,t), t!==e&&v(d,e), d.preventDefault=te, d.stopPropagation=ee.prototype.stopPropagation, d.stopImmediatePropagation=ee.prototype.stopImmediatePropagation, d.interaction=this, d.timeStamp=(new Date).getTime(), d.originalEvent=t, d.originalPointer=e, d.type=i, d.pointerId=E(e), d.pointerType=this.mouse?"mouse":Ie?p(e.pointerType)?e.pointerType:[,,"touch","pen","mouse"][e.pointerType]:"touch"), "tap"===i&&(d.dt=d.timeStamp-this.downTimes[c], l=d.timeStamp-this.tapTime, a=!!(this.prevTap&&"doubletap"!==this.prevTap.type&&this.prevTap.target===d.target&&l<500), d.double=a, this.tapTime=d.timeStamp), s=0;s<n.length&&(d.currentTarget=r[s], d.interactable=n[s], n[s].fire(d), !(d.immediatePropagationStopped||d.propagationStopped&&r[s+1]!==d.currentTarget));s++);if(a){var u={};g(u,d), u.dt=l, u.type="doubletap", this.collectEventTargets(u,t,o,"doubletap"), this.prevTap=u;}else"tap"===i&&(this.prevTap=d);},validateSelector:function(e,t,o,n){for(var r=0,i=o.length;r<i;r++){var s=o[r],l=n[r],a=ie(s.getAction(e,t,this,l),s);if(a&&K(s,l,a))return this.target=s, this.element=l, a}},setSnapping:function(e,t){var o,n,r,i=this.target.options[this.prepared.name].snap,s=[];if(t=t||this.snapStatus, t.useStatusXY)n={x:t.x,y:t.y};else{var l=M(this.target,this.element);n=g({},e), n.x-=l.x, n.y-=l.y;}t.realX=n.x, t.realY=n.y, n.x=n.x-this.inertiaStatus.resumeDx, n.y=n.y-this.inertiaStatus.resumeDy;for(var a=i.targets?i.targets.length:0,c=0;c<this.snapOffsets.length;c++){var h={x:n.x-this.snapOffsets[c].x,y:n.y-this.snapOffsets[c].y};for(r=0;r<a;r++)o=d(i.targets[r])?i.targets[r](h.x,h.y,this):i.targets[r], o&&s.push({x:u(o.x)?o.x+this.snapOffsets[c].x:h.x,y:u(o.y)?o.y+this.snapOffsets[c].y:h.y,range:u(o.range)?o.range:i.range});}var p={target:null,inRange:!1,distance:0,range:0,dx:0,dy:0};for(r=0, a=s.length;r<a;r++){o=s[r];var f=o.range,v=o.x-n.x,m=o.y-n.y,w=$e(v,m),C=w<=f;f===1/0&&p.inRange&&p.range!==1/0&&(C=!1), p.target&&!(C?p.inRange&&f!==1/0?w/f<p.distance/p.range:f===1/0&&p.range!==1/0||w<p.distance:!p.inRange&&w<p.distance)||(f===1/0&&(C=!0), p.target=o, p.distance=w, p.range=f, p.inRange=C, p.dx=v, p.dy=m, t.range=f);}var R;return p.target?(R=t.snappedX!==p.target.x||t.snappedY!==p.target.y, t.snappedX=p.target.x, t.snappedY=p.target.y):(R=!0, t.snappedX=NaN, t.snappedY=NaN), t.dx=p.dx, t.dy=p.dy, t.changed=R||p.inRange&&!t.locked, t.locked=p.inRange, t},setRestriction:function(e,t){var o,n=this.target,r=n&&n.options[this.prepared.name].restrict,s=r&&r.restriction;if(!s)return t;t=t||this.restrictStatus, o=o=t.useStatusXY?{x:t.x,y:t.y}:g({},e), t.snap&&t.snap.locked&&(o.x+=t.snap.dx||0, o.y+=t.snap.dy||0), o.x-=this.inertiaStatus.resumeDx, o.y-=this.inertiaStatus.resumeDy, t.dx=0, t.dy=0, t.restricted=!1;var l,a,c;return p(s)&&(s="parent"===s?j(this.element):"self"===s?n.getRect(this.element):W(this.element,s), !s)?t:(d(s)&&(s=s(o.x,o.y,this.element)), i(s)&&(s=T(s)), l=s, s?"x"in s&&"y"in s?(a=Math.max(Math.min(l.x+l.width-this.restrictOffset.right,o.x),l.x+this.restrictOffset.left), c=Math.max(Math.min(l.y+l.height-this.restrictOffset.bottom,o.y),l.y+this.restrictOffset.top)):(a=Math.max(Math.min(l.right-this.restrictOffset.right,o.x),l.left+this.restrictOffset.left), c=Math.max(Math.min(l.bottom-this.restrictOffset.bottom,o.y),l.top+this.restrictOffset.top)):(a=o.x, c=o.y), t.dx=a-o.x, t.dy=c-o.y, t.changed=t.restrictedX!==a||t.restrictedY!==c, t.restricted=!(!t.dx&&!t.dy), t.restrictedX=a, t.restrictedY=c, t)},checkAndPreventDefault:function(e,t,o){if(t=t||this.target){var n=t.options,r=n.preventDefault;if("auto"===r&&o&&!/^(input|select|textarea)$/i.test(e.target.nodeName)){if(/down|start/i.test(e.type)&&"drag"===this.prepared.name&&"xy"!==n.drag.axis)return;if(n[this.prepared.name]&&n[this.prepared.name].manualStart&&!this.interacting())return;return void e.preventDefault()}return"always"===r?void e.preventDefault():void 0}},calcInertia:function(e){var t=this.target.options[this.prepared.name].inertia,o=t.resistance,n=-Math.log(t.endSpeed/e.v0)/o;e.x0=this.prevEvent.pageX, e.y0=this.prevEvent.pageY, e.t0=e.startEvent.timeStamp/1e3, e.sx=e.sy=0, e.modifiedXe=e.xe=(e.vx0-n)/o, e.modifiedYe=e.ye=(e.vy0-n)/o, e.te=n, e.lambda_v0=o/e.v0, e.one_ve_v0=1-t.endSpeed/e.v0;},autoScrollMove:function(e){if(this.interacting()&&G(this.target,this.prepared.name)){if(this.inertiaStatus.active)return void(Me.x=Me.y=0);var t,o,n,r,i=this.target.options[this.prepared.name].autoScroll,l=i.container||$(this.element);if(s(l))r=e.clientX<Me.margin, t=e.clientY<Me.margin, o=e.clientX>l.innerWidth-Me.margin, n=e.clientY>l.innerHeight-Me.margin;else{var a=P(l);r=e.clientX<a.left+Me.margin, t=e.clientY<a.top+Me.margin, o=e.clientX>a.right-Me.margin, n=e.clientY>a.bottom-Me.margin;}Me.x=o?1:r?-1:0, Me.y=n?1:t?-1:0, Me.isScrolling||(Me.margin=i.margin, Me.speed=i.speed, Me.start(this));}},_updateEventTargets:function(e,t){this._eventTarget=e, this._curEventTarget=t;}}, ee.prototype={preventDefault:r,stopImmediatePropagation:function(){this.immediatePropagationStopped=this.propagationStopped=!0;},stopPropagation:function(){this.propagationStopped=!0;}};for(var et={},tt=["dragStart","dragMove","resizeStart","resizeMove","gestureStart","gestureMove","pointerOver","pointerOut","pointerHover","selectorDown","pointerDown","pointerMove","pointerUp","pointerCancel","pointerEnd","addPointer","removePointer","recordPointer","autoScrollMove"],ot=0,nt=tt.length;ot<nt;ot++){var rt=tt[ot];et[rt]=Z(rt);}ke.indexOfElement=function(e,t){t=t||Re;for(var o=0;o<this.length;o++){var n=this[o];if(n.selector===e&&n._context===t||!n.selector&&n._element===e)return o}return-1}, ke.get=function(e,t){return this[this.indexOfElement(e,t&&t.context)]}, ke.forEachSelector=function(e){for(var t=0;t<this.length;t++){var o=this[t];if(o.selector){var n=e(o,o.selector,o._context,t,this);if(void 0!==n)return n}}}, ce.prototype={setOnEvents:function(e,t){return"drop"===e?(d(t.ondrop)&&(this.ondrop=t.ondrop), d(t.ondropactivate)&&(this.ondropactivate=t.ondropactivate), d(t.ondropdeactivate)&&(this.ondropdeactivate=t.ondropdeactivate), d(t.ondragenter)&&(this.ondragenter=t.ondragenter), d(t.ondragleave)&&(this.ondragleave=t.ondragleave), d(t.ondropmove)&&(this.ondropmove=t.ondropmove)):(e="on"+e, d(t.onstart)&&(this[e+"start"]=t.onstart), d(t.onmove)&&(this[e+"move"]=t.onmove), d(t.onend)&&(this[e+"end"]=t.onend), d(t.oninertiastart)&&(this[e+"inertiastart"]=t.oninertiastart)), this},draggable:function(e){return c(e)?(this.options.drag.enabled=e.enabled!==!1, this.setPerAction("drag",e), this.setOnEvents("drag",e), /^x$|^y$|^xy$/.test(e.axis)?this.options.drag.axis=e.axis:null===e.axis&&delete this.options.drag.axis, this):h(e)?(this.options.drag.enabled=e, this):this.options.drag},setPerAction:function(e,t){for(var o in t)o in Fe[e]&&(c(t[o])?(this.options[e][o]=g(this.options[e][o]||{},t[o]), c(Fe.perAction[o])&&"enabled"in Fe.perAction[o]&&(this.options[e][o].enabled=t[o].enabled!==!1)):h(t[o])&&c(Fe.perAction[o])?this.options[e][o].enabled=t[o]:void 0!==t[o]&&(this.options[e][o]=t[o]));},dropzone:function(e){return c(e)?(this.options.drop.enabled=e.enabled!==!1, this.setOnEvents("drop",e), /^(pointer|center)$/.test(e.overlap)?this.options.drop.overlap=e.overlap:u(e.overlap)&&(this.options.drop.overlap=Math.max(Math.min(1,e.overlap),0)), "accept"in e&&(this.options.drop.accept=e.accept), "checker"in e&&(this.options.drop.checker=e.checker), this):h(e)?(this.options.drop.enabled=e, this):this.options.drop},dropCheck:function(e,t,o,n,r,i){var s=!1;if(!(i=i||this.getRect(r)))return!!this.options.drop.checker&&this.options.drop.checker(e,t,s,this,r,o,n);var l=this.options.drop.overlap;if("pointer"===l){var a,c,d=b(e),h=M(o,n);d.x+=h.x, d.y+=h.y, a=d.x>i.left&&d.x<i.right, c=d.y>i.top&&d.y<i.bottom, s=a&&c;}var p=o.getRect(n);if("center"===l){var f=p.left+p.width/2,g=p.top+p.height/2;s=f>=i.left&&f<=i.right&&g>=i.top&&g<=i.bottom;}if(u(l)){var v=Math.max(0,Math.min(i.right,p.right)-Math.max(i.left,p.left))*Math.max(0,Math.min(i.bottom,p.bottom)-Math.max(i.top,p.top)),m=v/(p.width*p.height);s=m>=l;}return this.options.drop.checker&&(s=this.options.drop.checker(e,t,s,this,r,o,n)), s},dropChecker:function(e){return d(e)?(this.options.drop.checker=e, this):null===e?(delete this.options.getRect, this):this.options.drop.checker},accept:function(e){return i(e)?(this.options.drop.accept=e, this):f(e)?(this.options.drop.accept=e, this):null===e?(delete this.options.drop.accept, this):this.options.drop.accept},resizable:function(e){return c(e)?(this.options.resize.enabled=e.enabled!==!1, this.setPerAction("resize",e), this.setOnEvents("resize",e), /^x$|^y$|^xy$/.test(e.axis)?this.options.resize.axis=e.axis:null===e.axis&&(this.options.resize.axis=Fe.resize.axis), h(e.preserveAspectRatio)?this.options.resize.preserveAspectRatio=e.preserveAspectRatio:h(e.square)&&(this.options.resize.square=e.square), this):h(e)?(this.options.resize.enabled=e, this):this.options.resize},squareResize:function(e){return h(e)?(this.options.resize.square=e, this):null===e?(delete this.options.resize.square, this):this.options.resize.square},gesturable:function(e){return c(e)?(this.options.gesture.enabled=e.enabled!==!1, this.setPerAction("gesture",e), this.setOnEvents("gesture",e), this):h(e)?(this.options.gesture.enabled=e, this):this.options.gesture},autoScroll:function(e){return c(e)?e=g({actions:["drag","resize"]},e):h(e)&&(e={actions:["drag","resize"],enabled:e}), this.setOptions("autoScroll",e)},snap:function(e){var t=this.setOptions("snap",e);return t===this?this:t.drag},setOptions:function(e,t){var o,n=t&&a(t.actions)?t.actions:["drag"];if(c(t)||h(t)){for(o=0;o<n.length;o++){var r=/resize/.test(n[o])?"resize":n[o];if(c(this.options[r])){var i=this.options[r][e];c(t)?(g(i,t), i.enabled=t.enabled!==!1, "snap"===e&&("grid"===i.mode?i.targets=[ae.createSnapGrid(g({offset:i.gridOffset||{x:0,y:0}},i.grid||{}))]:"anchor"===i.mode?i.targets=i.anchors:"path"===i.mode&&(i.targets=i.paths), "elementOrigin"in t&&(i.relativePoints=[t.elementOrigin]))):h(t)&&(i.enabled=t);}}return this}var s={},l=["drag","resize","gesture"];for(o=0;o<l.length;o++)e in Fe[l[o]]&&(s[l[o]]=this.options[l[o]][e]);return s},inertia:function(e){var t=this.setOptions("inertia",e);return t===this?this:t.drag},getAction:function(e,t,o,n){var r=this.defaultActionChecker(e,o,n);return this.options.actionChecker?this.options.actionChecker(e,t,r,this,n,o):r},defaultActionChecker:re,actionChecker:function(e){return d(e)?(this.options.actionChecker=e, this):null===e?(delete this.options.actionChecker, this):this.options.actionChecker},getRect:function(e){return e=e||this._element, this.selector&&!i(e)&&(e=this._context.querySelector(this.selector)), T(e)},rectChecker:function(e){return d(e)?(this.getRect=e, this):null===e?(delete this.options.getRect, this):this.getRect},styleCursor:function(e){return h(e)?(this.options.styleCursor=e, this):null===e?(delete this.options.styleCursor, this):this.options.styleCursor},preventDefault:function(e){return/^(always|never|auto)$/.test(e)?(this.options.preventDefault=e, this):h(e)?(this.options.preventDefault=e?"always":"never", this):this.options.preventDefault},origin:function(e){return f(e)?(this.options.origin=e, this):c(e)?(this.options.origin=e, this):this.options.origin},deltaSource:function(e){return"page"===e||"client"===e?(this.options.deltaSource=e, this):this.options.deltaSource},restrict:function(e){if(!c(e))return this.setOptions("restrict",e);for(var t,o=["drag","resize","gesture"],n=0;n<o.length;n++){var r=o[n];if(r in e){var i=g({actions:[r],restriction:e[r]},e);t=this.setOptions("restrict",i);}}return t},context:function(){return this._context},_context:Re,ignoreFrom:function(e){return f(e)?(this.options.ignoreFrom=e, this):i(e)?(this.options.ignoreFrom=e, this):this.options.ignoreFrom},allowFrom:function(e){return f(e)?(this.options.allowFrom=e, this):i(e)?(this.options.allowFrom=e, this):this.options.allowFrom},element:function(){return this._element},fire:function(e){if(!e||!e.type||!fe(Oe,e.type))return this;var t,o,n,r="on"+e.type,i="";if(e.type in this._iEvents)for(t=this._iEvents[e.type], o=0, n=t.length;o<n&&!e.immediatePropagationStopped;o++)i=t[o].name, t[o](e);if(d(this[r])&&(i=this[r].name, this[r](e)), e.type in Xe&&(t=Xe[e.type]))for(o=0, n=t.length;o<n&&!e.immediatePropagationStopped;o++)i=t[o].name, t[o](e);return this},on:function(e,t,o){var n;if(p(e)&&e.search(" ")!==-1&&(e=e.trim().split(/ +/)), a(e)){for(n=0;n<e.length;n++)this.on(e[n],t,o);return this}if(c(e)){for(var r in e)this.on(r,e[r],t);return this}if("wheel"===e&&(e=Ve), o=!!o, fe(Oe,e))e in this._iEvents?this._iEvents[e].push(t):this._iEvents[e]=[t];else if(this.selector){if(!Le[e])for(Le[e]={selectors:[],contexts:[],listeners:[]}, n=0;n<Te.length;n++)Je.add(Te[n],e,se), Je.add(Te[n],e,le,!0);var i,s=Le[e];for(i=s.selectors.length-1;i>=0&&(s.selectors[i]!==this.selector||s.contexts[i]!==this._context);i--);i===-1&&(i=s.selectors.length, s.selectors.push(this.selector), s.contexts.push(this._context), s.listeners.push([])), s.listeners[i].push([t,o]);}else Je.add(this._element,e,t,o);return this},off:function(e,t,o){var n;if(p(e)&&e.search(" ")!==-1&&(e=e.trim().split(/ +/)), a(e)){for(n=0;n<e.length;n++)this.off(e[n],t,o);return this}if(c(e)){for(var r in e)this.off(r,e[r],t);return this}var i,s=-1;if(o=!!o, "wheel"===e&&(e=Ve), fe(Oe,e))i=this._iEvents[e], i&&(s=pe(i,t))!==-1&&this._iEvents[e].splice(s,1);else if(this.selector){var l=Le[e],d=!1;if(!l)return this;for(s=l.selectors.length-1;s>=0;s--)if(l.selectors[s]===this.selector&&l.contexts[s]===this._context){var u=l.listeners[s];for(n=u.length-1;n>=0;n--){var h=u[n][0],f=u[n][1];if(h===t&&f===o){u.splice(n,1), u.length||(l.selectors.splice(s,1), l.contexts.splice(s,1), l.listeners.splice(s,1), Je.remove(this._context,e,se), Je.remove(this._context,e,le,!0), l.selectors.length||(Le[e]=null)), d=!0;break}}if(d)break}}else Je.remove(this._element,e,t,o);return this},set:function(e){c(e)||(e={}), this.options=g({},Fe.base);var t,o=["drag","drop","resize","gesture"],n=["draggable","dropzone","resizable","gesturable"],r=g(g({},Fe.perAction),e[i]||{});for(t=0;t<o.length;t++){var i=o[t];this.options[i]=g({},Fe[i]), this.setPerAction(i,r), this[n[t]](e[i]);}var s=["accept","actionChecker","allowFrom","deltaSource","dropChecker","ignoreFrom","origin","preventDefault","rectChecker","styleCursor"];for(t=0, nt=s.length;t<nt;t++){var l=s[t];this.options[l]=Fe.base[l], l in e&&this[l](e[l]);}return this},unset:function(){if(Je.remove(this._element,"all"), p(this.selector))for(var e in Le)for(var t=Le[e],o=0;o<t.selectors.length;o++){t.selectors[o]===this.selector&&t.contexts[o]===this._context&&(t.selectors.splice(o,1), t.contexts.splice(o,1), t.listeners.splice(o,1), t.selectors.length||(Le[e]=null)), Je.remove(this._context,e,se), Je.remove(this._context,e,le,!0);break}else Je.remove(this,"all"), this.options.styleCursor&&(this._element.style.cursor="");return this.dropzone(!1), ke.splice(pe(ke,this),1), ae}}, ce.prototype.snap=de(ce.prototype.snap,"Interactable#snap is deprecated. See the new documentation for snapping at http://interactjs.io/docs/snapping"), ce.prototype.restrict=de(ce.prototype.restrict,"Interactable#restrict is deprecated. See the new documentation for resticting at http://interactjs.io/docs/restriction"), ce.prototype.inertia=de(ce.prototype.inertia,"Interactable#inertia is deprecated. See the new documentation for inertia at http://interactjs.io/docs/inertia"), ce.prototype.autoScroll=de(ce.prototype.autoScroll,"Interactable#autoScroll is deprecated. See the new documentation for autoScroll at http://interactjs.io/docs/#autoscroll"), ce.prototype.squareResize=de(ce.prototype.squareResize,"Interactable#squareResize is deprecated. See http://interactjs.io/docs/#resize-square"), ce.prototype.accept=de(ce.prototype.accept,"Interactable#accept is deprecated. use Interactable#dropzone({ accept: target }) instead"), ce.prototype.dropChecker=de(ce.prototype.dropChecker,"Interactable#dropChecker is deprecated. use Interactable#dropzone({ dropChecker: checkerFunction }) instead"), ce.prototype.context=de(ce.prototype.context,"Interactable#context as a method is deprecated. It will soon be a DOM Node instead"), ae.isSet=function(e,t){return ke.indexOfElement(e,t&&t.context)!==-1}, ae.on=function(e,t,o){if(p(e)&&e.search(" ")!==-1&&(e=e.trim().split(/ +/)), a(e)){for(var n=0;n<e.length;n++)ae.on(e[n],t,o);return ae}if(c(e)){for(var r in e)ae.on(r,e[r],t);return ae}return fe(Oe,e)?Xe[e]?Xe[e].push(t):Xe[e]=[t]:Je.add(Re,e,t,o), ae}, ae.off=function(e,t,o){if(p(e)&&e.search(" ")!==-1&&(e=e.trim().split(/ +/)), a(e)){for(var n=0;n<e.length;n++)ae.off(e[n],t,o);return ae}if(c(e)){for(var r in e)ae.off(r,e[r],t);return ae}if(fe(Oe,e)){var i;e in Xe&&(i=pe(Xe[e],t))!==-1&&Xe[e].splice(i,1);}else Je.remove(Re,e,t,o);return ae}, ae.enableDragging=de(function(e){return null!==e&&void 0!==e?(Be.drag=e, ae):Be.drag},"interact.enableDragging is deprecated and will soon be removed."), ae.enableResizing=de(function(e){return null!==e&&void 0!==e?(Be.resize=e, ae):Be.resize},"interact.enableResizing is deprecated and will soon be removed."), ae.enableGesturing=de(function(e){return null!==e&&void 0!==e?(Be.gesture=e, ae):Be.gesture},"interact.enableGesturing is deprecated and will soon be removed."), ae.eventTypes=Oe, ae.debug=function(){var e=De[0]||new Q;return{interactions:De,target:e.target,dragging:e.dragging,resizing:e.resizing,gesturing:e.gesturing,prepared:e.prepared,matches:e.matches,matchElements:e.matchElements,prevCoords:e.prevCoords,startCoords:e.startCoords,pointerIds:e.pointerIds,pointers:e.pointers,addPointer:et.addPointer,removePointer:et.removePointer,recordPointer:et.recordPointer,snap:e.snapStatus,restrict:e.restrictStatus,inertia:e.inertiaStatus,downTime:e.downTimes[0],downEvent:e.downEvent,downPointer:e.downPointer,prevEvent:e.prevEvent,Interactable:ce,interactables:ke,pointerIsDown:e.pointerIsDown,defaultOptions:Fe,defaultActionChecker:re,actionCursors:qe,dragMove:et.dragMove,resizeMove:et.resizeMove,gestureMove:et.gestureMove,pointerUp:et.pointerUp,pointerDown:et.pointerDown,pointerMove:et.pointerMove,pointerHover:et.pointerHover,eventTypes:Oe,events:Je,globalEvents:Xe,delegatedEvents:Le,prefixedPropREs:Ze}}, ae.getPointerAverage=D, ae.getTouchBBox=z, ae.getTouchDistance=L, ae.getTouchAngle=F, ae.getElementRect=T, ae.getElementClientRect=P, ae.matchesSelector=ge, ae.closest=W, ae.margin=de(function(e){return u(e)?(Ae=e, ae):Ae},"interact.margin is deprecated. Use interact(target).resizable({ margin: number }); instead."), ae.supportsTouch=function(){return He}, ae.supportsPointerEvent=function(){return Ie}, ae.stop=function(e){for(var t=De.length-1;t>=0;t--)De[t].stop(e);return ae}, ae.dynamicDrop=function(e){return h(e)?(ze=e, ae):ze}, ae.pointerMoveTolerance=function(e){return u(e)?(Ne=e, this):Ne}, ae.maxInteractions=function(e){return u(e)?(je=e, this):je}, ae.createSnapGrid=function(e){return function(t,o){var n=0,r=0;c(e.offset)&&(n=e.offset.x, r=e.offset.y);var i=Math.round((t-n)/e.x),s=Math.round((o-r)/e.y),l=i*e.x+n,a=s*e.y+r;return{x:l,y:a,range:e.range}}}, he(Re), Ke in Element.prototype&&d(Element.prototype[Ke])||(we=function(e,t,o){o=o||e.parentNode.querySelectorAll(t);for(var n=0,r=o.length;n<r;n++)if(o[n]===e)return!0;return!1}), function(){for(var e=0,t=["ms","moz","webkit","o"],n=0;n<t.length&&!o.requestAnimationFrame;++n)Ue=o[t[n]+"RequestAnimationFrame"], Qe=o[t[n]+"CancelAnimationFrame"]||o[t[n]+"CancelRequestAnimationFrame"];Ue||(Ue=function(t){var o=(new Date).getTime(),n=Math.max(0,16-(o-e)),r=setTimeout(function(){t(o+n);},n);return e=o+n, r}), Qe||(Qe=function(e){clearTimeout(e);});}(), "undefined"!=typeof e&&e.exports&&(t=e.exports=ae), t.interact=ae;}}("undefined"==typeof window?void 0:window);},function(e,t,o){function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}), t.RowSelectionModel=t.RowMoveManager=t.HeaderMenu=t.HeaderButtons=t.CheckboxSelectColumn=t.CellSelectionModel=t.CellRangeSelector=t.CellRangeDecorator=t.CellCopyManager=t.AutoTooltips=void 0;var r=o(7),i=n(r),s=o(9),l=n(s),a=o(11),c=n(a),d=o(12),u=n(d),h=o(13),p=n(h),f=o(15),g=n(f),v=o(17),m=n(v),w=o(19),C=n(w),R=o(21),y=n(R),b=o(23),S=n(b);t.AutoTooltips=i.default, t.CellCopyManager=l.default, t.CellRangeDecorator=c.default, t.CellRangeSelector=u.default, t.CellSelectionModel=p.default, t.CheckboxSelectColumn=g.default, t.HeaderButtons=m.default, t.HeaderMenu=C.default, t.RowMoveManager=y.default, t.RowSelectionModel=S.default;},function(e,t,o){function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(8),i=n(r);t.default=i.default;},function(e,t,o){function n(e){return e&&e.__esModule?e:{default:e}}function r(e){function t(t){e=Object.assign({},l,e), i=t, e.enableForCells&&i.onMouseEnter.subscribe(n), e.enableForHeaderCells&&i.onHeaderMouseEnter.subscribe(r);}function o(){e.enableForCells&&i.onMouseEnter.unsubscribe(n), e.enableForHeaderCells&&i.onHeaderMouseEnter.unsubscribe(r);}function n(t){var o=i.getCellFromEvent(t);if(o){var n=(0, s.default)(i.getCellNode(o.row,o.cell)),r=void 0;n.innerWidth()<n[0].scrollWidth?(r=s.default.trim(n.text()), e.maxToolTipLength&&r.length>e.maxToolTipLength&&(r=r.substr(0,e.maxToolTipLength-3)+"...")):r="", n.attr("title",r);}}function r(e,t){var o=t.column,n=(0, s.default)(e.target).closest(".slick-header-column");o&&!o.toolTip&&n.attr("title",n.innerWidth()<n[0].scrollWidth?o.name:"");}var i=void 0,l={enableForCells:!0,enableForHeaderCells:!1,maxToolTipLength:null};Object.assign(this,{init:t,destroy:o});}Object.defineProperty(t,"__esModule",{value:!0});var i=o(2),s=n(i);t.default=r;},function(e,t,o){function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(10),i=n(r);t.default=i.default;},function(e,t,o){function n(e){return e&&e.__esModule?e:{default:e}}function r(){function e(e){i=e, i.onKeyDown.subscribe(o);}function t(){i.onKeyDown.unsubscribe(o);}function o(e,t){var o;i.getEditorLock().isActive()||(e.which==l.ESCAPE&&a&&(e.preventDefault(), r(), c.onCopyCancelled.notify({ranges:a}), a=null), 67==e.which&&(e.ctrlKey||e.metaKey)&&(o=i.getSelectionModel().getSelectedRanges(), 0!=o.length&&(e.preventDefault(), a=o, n(o), c.onCopyCells.notify({ranges:o}))), 86==e.which&&(e.ctrlKey||e.metaKey)&&a&&(e.preventDefault(), r(), o=i.getSelectionModel().getSelectedRanges(), c.onPasteCells.notify({from:a,to:o}), a=null));}function n(e){for(var t=i.getColumns(),o={},n=0;n<e.length;n++)for(var r=e[n].fromRow;r<=e[n].toRow;r++){o[r]={};for(var s=e[n].fromCell;s<=e[n].toCell;s++)o[r][t[s].id]="copied";}i.setCellCssStyles("copy-manager",o);}function r(){i.removeCellCssStyles("copy-manager");}var i,a,c=this;Object.assign(this,{init:e,destroy:t,clearCopySelection:r,onCopyCells:new s.default.Event,onCopyCancelled:new s.default.Event,onPasteCells:new s.default.Event});}Object.defineProperty(t,"__esModule",{value:!0});var i=o(1),s=n(i),l=s.default.keyCode;t.default=r;},function(e,t,o){function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(3),i=n(r);t.default=i.default;},function(e,t,o){function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(4),i=n(r);t.default=i.default;},function(e,t,o){function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(14),i=n(r);t.default=i.default;},function(e,t,o){function n(e){return e&&e.__esModule?e:{default:e}}function r(){function e(e){m=Object.assign({},u), h=e, p=h.getCanvasNode(), h.onActiveCellChanged.subscribe(c), h.onKeyDown.subscribe(d), e.registerPlugin(v), v.onCellRangeSelected.subscribe(l), v.onBeforeCellRangeSelected.subscribe(i);}function t(){h.onActiveCellChanged.unsubscribe(c), h.onKeyDown.unsubscribe(d), v.onCellRangeSelected.unsubscribe(l), v.onBeforeCellRangeSelected.unsubscribe(i), h.unregisterPlugin(v);}function o(e){for(var t=[],o=0;o<e.length;o++){var n=e[o];h.canCellBeSelected(n.fromRow,n.fromCell)&&h.canCellBeSelected(n.toRow,n.toCell)&&t.push(n);}return t}function n(e){(f&&0!==f.length||e&&0!==e.length)&&(f=o(e), g.onSelectedRangesChanged.notify(f));}function r(){return f}function i(e,t){if(h.getEditorLock().isActive())return e.stopPropagation(), !1}function l(e,t){n([t.range]);}function c(e,t){m.selectActiveCell&&null!=t.row&&null!=t.cell&&n([new s.default.Range(t.row,t.cell)]);}function d(e){var t=void 0,i=void 0,l=h.getActiveCell();if(l&&e.shiftKey&&!e.ctrlKey&&!e.altKey&&(37==e.which||39==e.which||38==e.which||40==e.which)){t=r(), t.length||t.push(new s.default.Range(l.row,l.cell)), i=t.pop(), i.contains(l.row,l.cell)||(i=new s.default.Range(l.row,l.cell));var a=i.toRow-i.fromRow,c=i.toCell-i.fromCell,d=l.row==i.fromRow?1:-1,u=l.cell==i.fromCell?1:-1;37==e.which?c-=u:39==e.which?c+=u:38==e.which?a-=d:40==e.which&&(a+=d);var p=new s.default.Range(l.row,l.cell,l.row+d*a,l.cell+u*c);if(o([p]).length){t.push(p);var f=d>0?p.toRow:p.fromRow,g=u>0?p.toCell:p.fromCell;h.scrollRowIntoView(f), h.scrollCellIntoView(f,g);}else t.push(i);n(t), e.preventDefault(), e.stopPropagation();}}var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{selectActiveCell:!0},h=void 0,p=void 0,f=[],g=this,v=new a.default({selectionCss:{border:"2px solid black"}}),m=void 0;Object.assign(this,{getSelectedRanges:r,setSelectedRanges:n,init:e,destroy:t,onSelectedRangesChanged:new s.default.Event});}Object.defineProperty(t,"__esModule",{value:!0});var i=o(1),s=n(i),l=o(4),a=n(l);t.default=r;},function(e,t,o){function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(16),i=n(r);t.default=i.default;},function(e,t,o){function n(e){return e&&e.__esModule?e:{default:e}}function r(e){function t(e){h=e, p.subscribe(h.onSelectedRowsChanged,n).subscribe(h.onClick,i).subscribe(h.onHeaderClick,c).subscribe(h.onKeyDown,r);}function o(){p.unsubscribeAll();}function n(e,t){var o=h.getSelectedRows(),n={},r=void 0,i=void 0;for(i=0;i<o.length;i++)r=o[i], n[r]=!0, n[r]!==f[r]&&(h.invalidateRow(r), delete f[r]);for(i in f)h.invalidateRow(i);f=n, h.render(), o.length&&o.length==h.getDataLength()?h.updateColumnHeader(v.columnId,"<input type='checkbox' checked='checked'>",v.toolTip):h.updateColumnHeader(v.columnId,"<input type='checkbox'>",v.toolTip);}function r(e,t){32==e.which&&h.getColumns()[t.cell].id===v.columnId&&(h.getEditorLock().isActive()&&!h.getEditorLock().commitCurrentEdit()||l(t.row), e.preventDefault(), e.stopImmediatePropagation());}function i(e,t){if(h.getColumns()[t.cell].id===v.columnId&&(0, s.default)(e.target).is(":checkbox")){if(h.getEditorLock().isActive()&&!h.getEditorLock().commitCurrentEdit())return e.preventDefault(), void e.stopImmediatePropagation();l(t.row), e.stopPropagation(), e.stopImmediatePropagation();}}function l(e){f[e]?h.setSelectedRows(s.default.grep(h.getSelectedRows(),function(t){return t!=e})):h.setSelectedRows(h.getSelectedRows().concat(e));}function c(e,t){if(t.column.id==v.columnId&&(0, s.default)(e.target).is(":checkbox")){if(h.getEditorLock().isActive()&&!h.getEditorLock().commitCurrentEdit())return e.preventDefault(), void e.stopImmediatePropagation();if((0, s.default)(e.target).is(":checked")){for(var o=[],n=0;n<h.getDataLength();n++)o.push(n);h.setSelectedRows(o);}else h.setSelectedRows([]);e.stopPropagation(), e.stopImmediatePropagation();}}function d(){return{id:v.columnId,name:"<input type='checkbox'>",toolTip:v.toolTip,field:"sel",width:v.width,resizable:!1,sortable:!1,cssClass:v.cssClass,formatter:u}}function u(e,t,o,n,r){return r?f[e]?"<input type='checkbox' checked='checked'>":"<input type='checkbox'>":null}var h=void 0,p=new a.default.EventHandler,f={},g={columnId:"_checkbox_selector",cssClass:null,toolTip:"Select/Deselect All",width:30},v=s.default.extend(!0,{},g,e);Object.assign(this,{init:t,destroy:o,getColumnDefinition:d});}Object.defineProperty(t,"__esModule",{value:!0});var i=o(2),s=n(i),l=o(1),a=n(l);t.default=r;},function(e,t,o){function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(18),i=n(r);t.default=i.default;},function(e,t,o){function n(e){return e&&e.__esModule?e:{default:e}}function r(e){function t(t){e=Object.assign({},u,e), l=t, d.subscribe(l.onHeaderCellRendered,n).subscribe(l.onBeforeHeaderCellDestroy,r), l.setColumns(l.getColumns());}function o(){d.unsubscribeAll();}function n(t,o){var n=o.column;if(n.header&&n.header.buttons)for(var r=n.header.buttons.length;r--;){var l=n.header.buttons[r],a=(0, s.default)("<div></div>").addClass(e.buttonCssClass).data("column",n).data("button",l);l.showOnHover&&a.addClass("slick-header-button-hidden"), l.image&&a.css("backgroundImage","url("+l.image+")"), l.cssClass&&a.addClass(l.cssClass), l.tooltip&&a.attr("title",l.tooltip), l.command&&a.data("command",l.command), l.handler&&a.bind("click",l.handler), a.bind("click",i).appendTo(o.node), o.node.classList.add("has-buttons");}}function r(t,o){var n=o.column;n.header&&n.header.buttons&&(0, s.default)(o.node).find("."+e.buttonCssClass).remove();}function i(e){var t=(0, s.default)(this).data("command"),o=(0, s.default)(this).data("column"),n=(0, s.default)(this).data("button");null!=t&&(c.onCommand.notify({grid:l,column:o,command:t,button:n},e,c), l.updateColumnHeader(o.id)), e.preventDefault(), e.stopPropagation();}var l,c=this,d=new a.default.EventHandler,u={buttonCssClass:"slick-header-button"};Object.assign(this,{init:t,destroy:o,onCommand:new a.default.Event});}Object.defineProperty(t,"__esModule",{value:!0});var i=o(2),s=n(i),l=o(1),a=n(l);t.default=r;},function(e,t,o){function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(20),i=n(r);t.default=i.default;},function(e,t,o){function n(e){return e&&e.__esModule?e:{default:e}}function r(e){function t(t){e=Object.assign({},f,e), u=t, p.subscribe(u.onHeaderCellRendered,i).subscribe(u.onBeforeHeaderCellDestroy,l), u.setColumns(u.getColumns()), (0, s.default)(document.body).bind("mousedown",n);}function o(){p.unsubscribeAll(), (0, s.default)(document.body).unbind("mousedown",n);}function n(e){g&&g[0]!=e.target&&!s.default.contains(g[0],e.target)&&r();}function r(){g&&(g.remove(), g=null, v.removeClass("slick-header-column-active"));}function i(t,o){var n=o.column,r=n.header&&n.header.menu;if(r){var i=(0, s.default)("<div></div>").addClass("slick-header-menubutton").data("column",n).data("menu",r);e.buttonCssClass&&i.addClass(e.buttonCssClass), e.buttonImage&&i.css("background-image","url("+e.buttonImage+")"), r.tooltip&&i.attr("title",r.tooltip), i.bind("click",c).appendTo(o.node);}}function l(e,t){var o=t.column;o.header&&o.header.menu&&(0, s.default)(t.node).find(".slick-header-menubutton").remove();}function c(e){var t=(0, s.default)(this),o=t.data("menu"),n=t.data("column");if(0!=h.onBeforeMenuShow.notify({grid:u,column:n,menu:o},e,h)){g||(g=(0, s.default)("<div class='slick-header-menu'></div>").appendTo(u.getContainerNode())), g.empty();for(var r=0;r<o.items.length;r++){var i=o.items[r],l=(0, s.default)("<div class='slick-header-menuitem'></div>").data("command",i.command||"").data("column",n).data("item",i).bind("click",d).appendTo(g);i.disabled&&l.addClass("slick-header-menuitem-disabled"), i.tooltip&&l.attr("title",i.tooltip);var a=(0, s.default)("<div class='slick-header-menuicon'></div>").appendTo(l);i.iconCssClass&&a.addClass(i.iconCssClass), i.iconImage&&a.css("background-image","url("+i.iconImage+")"), (0, s.default)("<span class='slick-header-menucontent'></span>").text(i.title).appendTo(l);}g.offset({top:(0, s.default)(this).offset().top+(0, s.default)(this).height(),left:(0, s.default)(this).offset().left}), v=t.closest(".slick-header-column"), v.addClass("slick-header-column-active"), e.preventDefault(), e.stopPropagation();}}function d(e){var t=(0, s.default)(this).data("command"),o=(0, s.default)(this).data("column"),n=(0, s.default)(this).data("item");n.disabled||(r(), null!=t&&""!=t&&h.onCommand.notify({grid:u,column:o,command:t,item:n},e,h), e.preventDefault(), e.stopPropagation());}var u=void 0,h=this,p=new a.default.EventHandler,f={buttonCssClass:null,buttonImage:null},g=void 0,v=void 0;Object.assign(this,{init:t,destroy:o,onBeforeMenuShow:new a.default.Event,onCommand:new a.default.Event});}Object.defineProperty(t,"__esModule",{value:!0});var i=o(2),s=n(i),l=o(1),a=n(l);t.default=r;},function(e,t,o){function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(22),i=n(r);t.default=i.default;},function(e,t,o){function n(e){return e&&e.__esModule?e:{default:e}}function r(e){function t(t){e=Object.assign({},p,e), a=t, c=a.getCanvasNode(), h.subscribe(a.onDragInit,n).subscribe(a.onDragStart,r).subscribe(a.onDrag,i).subscribe(a.onDragEnd,l);}function o(){h.unsubscribeAll();}function n(e,t){e.stopImmediatePropagation();}function r(t,o){var n=a.getCellFromEvent(t);if(e.cancelEditOnDrag&&a.getEditorLock().isActive()&&a.getEditorLock().cancelCurrentEdit(), a.getEditorLock().isActive()||!/move|selectAndMove/.test(a.getColumns()[n.cell].behavior))return!1;d=!0, t.stopImmediatePropagation();var r=a.getSelectedRows();0!=r.length&&$.inArray(n.row,r)!=-1||(r=[n.row], a.setSelectedRows(r));var i=a.getOptions().rowHeight;o.selectedRows=r, o.selectionProxy=$("<div class='slick-reorder-proxy'/>").css("position","absolute").css("zIndex","99999").css("width",$(c).innerWidth()).css("height",i*r.length).appendTo(c), o.guide=$("<div class='slick-reorder-guide'/>").css("position","absolute").css("zIndex","99998").css("width",$(c).innerWidth()).css("top",-1e3).appendTo(c), o.insertBefore=-1;}function i(e,t){if(d){e.stopImmediatePropagation();var o=e.pageY-$(c).offset().top;t.selectionProxy.css("top",o-5);var n=Math.max(0,Math.min(Math.round(o/a.getOptions().rowHeight),a.getDataLength()));if(n!==t.insertBefore){var r={rows:t.selectedRows,insertBefore:n};u.onBeforeMoveRows.notify(r)===!1?(t.guide.css("top",-1e3), t.canMove=!1):(t.guide.css("top",n*a.getOptions().rowHeight), t.canMove=!0), t.insertBefore=n;}}}function l(e,t){if(d&&(d=!1, e.stopImmediatePropagation(), t.guide.remove(), t.selectionProxy.remove(), t.canMove)){var o={rows:t.selectedRows,insertBefore:t.insertBefore};u.onMoveRows.notify(o);}}var a=void 0,c=void 0,d=void 0,u=this,h=new s.default.EventHandler,p={cancelEditOnDrag:!1};Object.assign(this,{onBeforeMoveRows:new s.default.Event,onMoveRows:new s.default.Event,init:t,destroy:o});}Object.defineProperty(t,"__esModule",{value:!0});var i=o(1),s=n(i);t.default=r;},function(e,t,o){function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(24),i=n(r);t.default=i.default;},function(e,t,o){function n(e){return e&&e.__esModule?e:{default:e}}function r(e){function t(t){y=Object.assign({},b,e), v=t, C.subscribe(v.onActiveCellChanged,n(p)), C.subscribe(v.onKeyDown,n(f)), C.subscribe(v.onClick,n(g));}function o(){C.unsubscribeAll();}function n(e){return function(){R||(R=!0, e.apply(this,arguments), R=!1);}}function r(e){for(var t=[],o=0;o<e.length;o++)for(var n=e[o].fromRow;n<=e[o].toRow;n++)t.push(n);return t}function i(e){for(var t=[],o=v.getColumns().length-1,n=0;n<e.length;n++)t.push(new a.default.Range(e[n],0,e[n],o));return t}function l(e,t){var o=void 0,n=[];for(o=e;o<=t;o++)n.push(o);for(o=t;o<e;o++)n.push(o);return n}function c(){return r(m)}function d(e){u(i(e));}function u(e){(m&&0!==m.length||e&&0!==e.length)&&(m=e, w.onSelectedRangesChanged.notify(m));}function h(){return m}function p(e,t){y.selectActiveRow&&null!=t.row&&u([new a.default.Range(t.row,0,t.row,v.getColumns().length-1)]);}function f(e){var t=v.getActiveCell();if(t&&e.shiftKey&&!e.ctrlKey&&!e.altKey&&!e.metaKey&&(38==e.which||40==e.which)){var o=c();o.sort(function(e,t){return e-t}), o.length||(o=[t.row]);var n=o[0],r=o[o.length-1],s=void 0;s=40==e.which?t.row<r||n==r?++r:++n:t.row<r?--r:--n, s>=0&&s<v.getDataLength()&&(v.scrollRowIntoView(s), m=i(l(n,r)), u(m)), e.preventDefault(), e.stopPropagation();}}function g(e){var t=v.getCellFromEvent(e);if(!t||!v.canCellBeActive(t.row,t.cell))return!1;if(!v.getOptions().multiSelect||!e.ctrlKey&&!e.shiftKey&&!e.metaKey)return!1;var o=r(m),n=s.default.inArray(t.row,o);if(n===-1&&(e.ctrlKey||e.metaKey))o.push(t.row), v.setActiveCell(t.row,t.cell);else if(n!==-1&&(e.ctrlKey||e.metaKey))o=s.default.grep(o,function(e,o){return e!==t.row}), v.setActiveCell(t.row,t.cell);else if(o.length&&e.shiftKey){var l=o.pop(),a=Math.min(t.row,l),c=Math.max(t.row,l);o=[];for(var d=a;d<=c;d++)d!==l&&o.push(d);o.push(l), v.setActiveCell(t.row,t.cell);}return m=i(o), u(m), e.stopImmediatePropagation(), !0}var v=void 0,m=[],w=this,C=new a.default.EventHandler,R=void 0,y=void 0,b={selectActiveRow:!0};Object.assign(this,{getSelectedRows:c,setSelectedRows:d,getSelectedRanges:h,setSelectedRanges:u,init:t,destroy:o,onSelectedRangesChanged:new a.default.Event});}Object.defineProperty(t,"__esModule",{value:!0});var i=o(2),s=n(i),l=o(1),a=n(l);t.default=r;},function(e,t,o){function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e, t}function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}), t.Plugins=t.FrozenGrid=t.Grid=t.Data=t.Formatters=t.Editors=t.Slick=void 0;var i=o(1),s=r(i),l=o(28),a=r(l),c=o(27),d=r(c),u=o(30),h=r(u),p=o(26),f=r(p),g=o(29),v=r(g),m=o(6),w=n(m);t.Slick=s.default, t.Editors=a.default, t.Formatters=v.default, t.Data=d.default, t.Grid=h.default, t.FrozenGrid=f.default, t.Plugins=w;},function(module,exports,__webpack_require__){function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function SlickGrid(container,data,columns,options){function init(){if($container=(0, _jquery2.default)(container), $container.length<1)throw new Error("SlickGrid requires a valid container, "+container+" does not exist in the DOM.");maxSupportedCssHeight=maxSupportedCssHeight||getMaxSupportedCssHeight(), scrollbarDimensions=scrollbarDimensions||measureScrollbar(), options=_jquery2.default.extend({},defaults,options), validateAndEnforceOptions(), columnDefaults.width=options.defaultColumnWidth, treeColumns=new _slick2.default.TreeColumns(columns), columns=treeColumns.extractColumns(), columnsById={};for(var e=0;e<columns.length;e++){var t=columns[e]=_jquery2.default.extend({},columnDefaults,columns[e]);columnsById[t.id]=e, t.minWidth&&t.width<t.minWidth&&(t.width=t.minWidth), t.maxWidth&&t.width>t.maxWidth&&(t.width=t.maxWidth);}if(editController={commitCurrentEdit:commitCurrentEdit,cancelCurrentEdit:cancelCurrentEdit}, $container.empty().css("overflow","hidden").css("outline",0).addClass(uid).addClass("ui-widget"), /relative|absolute|fixed/.test($container.css("position"))||$container.css("position","relative"), $focusSink=(0, _jquery2.default)("<div tabIndex='0' hideFocus style='position:fixed;width:0;height:0;top:0;left:0;outline:0;'></div>").appendTo($container), $paneHeaderL=(0, _jquery2.default)("<div class='slick-pane slick-pane-header slick-pane-left' tabIndex='0' />").appendTo($container), $paneHeaderR=(0, _jquery2.default)("<div class='slick-pane slick-pane-header slick-pane-right' tabIndex='0' />").appendTo($container), $paneTopL=(0, _jquery2.default)("<div class='slick-pane slick-pane-top slick-pane-left' tabIndex='0' />").appendTo($container), $paneTopR=(0, _jquery2.default)("<div class='slick-pane slick-pane-top slick-pane-right' tabIndex='0' />").appendTo($container), $paneBottomL=(0, _jquery2.default)("<div class='slick-pane slick-pane-bottom slick-pane-left' tabIndex='0' />").appendTo($container), $paneBottomR=(0, _jquery2.default)("<div class='slick-pane slick-pane-bottom slick-pane-right' tabIndex='0' />").appendTo($container), $headerScrollerL=(0, _jquery2.default)("<div class='ui-state-default slick-header slick-header-left' />").appendTo($paneHeaderL), $headerScrollerR=(0, _jquery2.default)("<div class='ui-state-default slick-header slick-header-right' />").appendTo($paneHeaderR), $headerScroller=(0, _jquery2.default)().add($headerScrollerL).add($headerScrollerR), treeColumns.hasDepth()){$groupHeadersL=[], $groupHeadersR=[];for(var o=0;o<treeColumns.getDepth()-1;o++)$groupHeadersL[o]=(0, _jquery2.default)("<div class='slick-group-header-columns slick-group-header-columns-left' style='left:-1000px' />").appendTo($headerScrollerL), $groupHeadersR[o]=(0, _jquery2.default)("<div class='slick-group-header-columns slick-group-header-columns-right' style='left:-1000px' />").appendTo($headerScrollerR);$groupHeaders=(0, _jquery2.default)().add($groupHeadersL).add($groupHeadersR);}$headerL=(0, _jquery2.default)("<div class='slick-header-columns slick-header-columns-left' style='left:-1000px' />").appendTo($headerScrollerL), $headerR=(0, _jquery2.default)("<div class='slick-header-columns slick-header-columns-right' style='left:-1000px' />").appendTo($headerScrollerR), $headers=(0, _jquery2.default)().add($headerL).add($headerR), $headerRowScrollerL=(0, _jquery2.default)("<div class='ui-state-default slick-headerrow' />").appendTo($paneTopL), $headerRowScrollerR=(0, _jquery2.default)("<div class='ui-state-default slick-headerrow' />").appendTo($paneTopR), $headerRowScroller=(0, _jquery2.default)().add($headerRowScrollerL).add($headerRowScrollerR), $headerRowSpacerL=(0, _jquery2.default)("<div style='display:block;height:1px;position:absolute;top:0;left:0;'></div>").css("width",getCanvasWidth()+scrollbarDimensions.width+"px").appendTo($headerRowScrollerL), $headerRowSpacerR=(0, _jquery2.default)("<div style='display:block;height:1px;position:absolute;top:0;left:0;'></div>").css("width",getCanvasWidth()+scrollbarDimensions.width+"px").appendTo($headerRowScrollerR), $headerRowL=(0, _jquery2.default)("<div class='slick-headerrow-columns slick-headerrow-columns-left' />").appendTo($headerRowScrollerL), $headerRowR=(0, _jquery2.default)("<div class='slick-headerrow-columns slick-headerrow-columns-right' />").appendTo($headerRowScrollerR), $headerRow=(0, _jquery2.default)().add($headerRowL).add($headerRowR), $topPanelScrollerL=(0, _jquery2.default)("<div class='ui-state-default slick-top-panel-scroller' />").appendTo($paneTopL), $topPanelScrollerR=(0, _jquery2.default)("<div class='ui-state-default slick-top-panel-scroller' />").appendTo($paneTopR), $topPanelScroller=(0, _jquery2.default)().add($topPanelScrollerL).add($topPanelScrollerR), $topPanelL=(0, _jquery2.default)("<div class='slick-top-panel' style='width:10000px' />").appendTo($topPanelScrollerL), $topPanelR=(0, _jquery2.default)("<div class='slick-top-panel' style='width:10000px' />").appendTo($topPanelScrollerR), $topPanel=(0, _jquery2.default)().add($topPanelL).add($topPanelR), options.showTopPanel||$topPanelScroller.hide(), options.showHeaderRow||$headerRowScroller.hide(), $viewportTopL=(0, _jquery2.default)("<div class='slick-viewport slick-viewport-top slick-viewport-left' tabIndex='0' hideFocus />").appendTo($paneTopL), $viewportTopR=(0, _jquery2.default)("<div class='slick-viewport slick-viewport-top slick-viewport-right' tabIndex='0' hideFocus />").appendTo($paneTopR), $viewportBottomL=(0, _jquery2.default)("<div class='slick-viewport slick-viewport-bottom slick-viewport-left' tabIndex='0' hideFocus />").appendTo($paneBottomL), $viewportBottomR=(0, _jquery2.default)("<div class='slick-viewport slick-viewport-bottom slick-viewport-right' tabIndex='0' hideFocus />").appendTo($paneBottomR), $viewport=(0, _jquery2.default)().add($viewportTopL).add($viewportTopR).add($viewportBottomL).add($viewportBottomR), $activeViewportNode=$viewportTopL, $canvasTopL=(0, _jquery2.default)("<div class='grid-canvas grid-canvas-top grid-canvas-left' tabIndex='0' hideFocus />").appendTo($viewportTopL), $canvasTopR=(0, _jquery2.default)("<div class='grid-canvas grid-canvas-top grid-canvas-right' tabIndex='0' hideFocus />").appendTo($viewportTopR), $canvasBottomL=(0, _jquery2.default)("<div class='grid-canvas grid-canvas-bottom grid-canvas-left' tabIndex='0' hideFocus />").appendTo($viewportBottomL), $canvasBottomR=(0, _jquery2.default)("<div class='grid-canvas grid-canvas-bottom grid-canvas-right' tabIndex='0' hideFocus />").appendTo($viewportBottomR), $canvas=(0, _jquery2.default)().add($canvasTopL).add($canvasTopR).add($canvasBottomL).add($canvasBottomR), $activeCanvasNode=$canvasTopL, $footerRowScrollerR=(0, _jquery2.default)("<div class='ui-state-default slick-footerrow' />").appendTo($paneTopR), $footerRowScrollerL=(0, _jquery2.default)("<div class='ui-state-default slick-footerrow' />").appendTo($paneTopL), $footerRowScroller=(0, _jquery2.default)().add($footerRowScrollerL).add($footerRowScrollerR), $footerRowSpacerL=(0, _jquery2.default)("<div style='display:block;height:1px;position:absolute;top:0;left:0;'></div>").css("width",getCanvasWidth()+scrollbarDimensions.width+"px").appendTo($footerRowScrollerL), $footerRowSpacerR=(0, _jquery2.default)("<div style='display:block;height:1px;position:absolute;top:0;left:0;'></div>").css("width",getCanvasWidth()+scrollbarDimensions.width+"px").appendTo($footerRowScrollerR), $footerRowL=(0, _jquery2.default)("<div class='slick-footerrow-columns slick-footerrow-columns-left' />").appendTo($footerRowScrollerL), $footerRowR=(0, _jquery2.default)("<div class='slick-footerrow-columns slick-footerrow-columns-right' />").appendTo($footerRowScrollerR), $footerRow=(0, _jquery2.default)().add($footerRowL).add($footerRowR), options.showFooterRow||$footerRowScroller.hide(), $focusSink2=$focusSink.clone().appendTo($container), options.explicitInitialization||finishInitialization();}function finishInitialization(){initialized||(initialized=!0, getViewportWidth(), getViewportHeight(), measureCellPaddingAndBorder(), disableSelection($headers), options.enableTextSelectionOnCells||$viewport.bind("selectstart.ui",function(e){return(0, _jquery2.default)(e.target).is("input,textarea")}), setFrozenOptions(), setPaneVisibility(), setScroller(), setOverflow(), updateColumnCaches(), createColumnHeaders(), createColumnGroupHeaders(), createColumnFooter(), setupColumnSort(), createCssRules(), resizeCanvas(), bindAncestorScrollEvents(), $container.bind("resize.slickgrid",resizeCanvas), $viewport.on("scroll",handleScroll), _jquery2.default.fn.mousewheel&&(options.frozenColumn>-1||hasFrozenRows)&&$viewport.on("mousewheel",handleMouseWheel), $headerScroller.bind("contextmenu",handleHeaderContextMenu).bind("click",handleHeaderClick).delegate(".slick-header-column","mouseenter",handleHeaderMouseEnter).delegate(".slick-header-column","mouseleave",handleHeaderMouseLeave), $headerRowScroller.bind("scroll",handleHeaderRowScroll), $footerRowScroller.bind("scroll",handleFooterRowScroll), $focusSink.add($focusSink2).bind("keydown",handleKeyDown), $canvas.bind("keydown",handleKeyDown).bind("click",handleClick).bind("dblclick",handleDblClick).bind("contextmenu",handleContextMenu).delegate(".slick-cell","mouseenter",handleMouseEnter).delegate(".slick-cell","mouseleave",handleMouseLeave), (0, _interact2.default)($canvas[0]).allowFrom("div.slick-cell").draggable({onmove:handleDrag,onstart:handleDragStart,onend:handleDragEnd}).styleCursor(!1), navigator.userAgent.toLowerCase().match(/webkit/)&&navigator.userAgent.toLowerCase().match(/macintosh/)&&$canvas.on("mousewheel",handleMouseWheel));}function hasFrozenColumns(){return options.frozenColumn>-1}function registerPlugin(e){plugins.unshift(e), e.init(self);}function unregisterPlugin(e){for(var t=plugins.length;t>=0;t--)if(plugins[t]===e){plugins[t].destroy&&plugins[t].destroy(), plugins.splice(t,1);break}}function setSelectionModel(e){selectionModel&&(selectionModel.onSelectedRangesChanged.unsubscribe(handleSelectedRangesChanged), selectionModel.destroy&&selectionModel.destroy()), selectionModel=e, selectionModel&&(selectionModel.init(self), selectionModel.onSelectedRangesChanged.subscribe(handleSelectedRangesChanged));}function getSelectionModel(){return selectionModel}function getCanvasNode(){return $canvas[0]}function getActiveCanvasNode(e){return setActiveCanvasNode(e), $activeCanvasNode[0]}function getCanvases(){return $canvas}function setActiveCanvasNode(e){e&&($activeCanvasNode=(0, _jquery2.default)(e.target).closest(".grid-canvas"));}function getViewportNode(){return $viewport[0]}function getActiveViewportNode(e){return setActiveViewportNode(e), $activeViewportNode[0]}function setActiveViewportNode(e){e&&($activeViewportNode=(0, _jquery2.default)(e.target).closest(".slick-viewport"));}function measureScrollbar(){var e=(0, _jquery2.default)("<div class='scrollbar-fix' style='position:absolute; top:-10000px; left:-10000px; width:100px; height:100px; overflow:scroll;'></div>").appendTo(document.body),t={width:e.width()-e[0].clientWidth,height:e.height()-e[0].clientHeight};return e.remove(), t}function getHeadersWidth(){headersWidth=headersWidthL=headersWidthR=0;for(var e=0,t=columns.length;e<t;e++){var o=columns[e].width;options.frozenColumn>-1&&e>options.frozenColumn?headersWidthR+=o:headersWidthL+=o;}hasFrozenColumns()?(headersWidthL+=1e3, headersWidthR=Math.max(headersWidthR,viewportW)+headersWidthL, headersWidthR+=scrollbarDimensions.width):(headersWidthL+=scrollbarDimensions.width, headersWidthL=Math.max(headersWidthL,viewportW)+1e3), headersWidth=headersWidthL+headersWidthR;}function getHeadersWidthL(){return headersWidthL=0, columns.forEach(function(e,t){options.frozenColumn>-1&&t>options.frozenColumn||(headersWidthL+=e.width);}), hasFrozenColumns()?headersWidthL+=1e3:(headersWidthL+=scrollbarDimensions.width, headersWidthL=Math.max(headersWidthL,viewportW)+1e3), headersWidthL}function getHeadersWidthR(){return headersWidthR=0, columns.forEach(function(e,t){options.frozenColumn>-1&&t>options.frozenColumn&&(headersWidthR+=e.width);}), hasFrozenColumns()&&(headersWidthR=Math.max(headersWidthR,viewportW)+getHeadersWidthL(), headersWidthR+=scrollbarDimensions.width), headersWidthR}function getCanvasWidth(){var e=viewportHasVScroll?viewportW-scrollbarDimensions.width:viewportW,t=columns.length;for(canvasWidthL=canvasWidthR=0;t--;)hasFrozenColumns()&&t>options.frozenColumn?canvasWidthR+=columns[t].width:canvasWidthL+=columns[t].width;var o=canvasWidthL+canvasWidthR;return options.fullWidthRows?Math.max(o,e):o}function updateCanvasWidth(e){var t,o=canvasWidth,n=canvasWidthL,r=canvasWidthR;canvasWidth=getCanvasWidth(), t=canvasWidth!==o||canvasWidthL!==n||canvasWidthR!==r, (t||hasFrozenColumns()||hasFrozenRows)&&($canvasTopL.width(canvasWidthL), getHeadersWidth(), $headerL.width(headersWidthL), $headerR.width(headersWidthR), hasFrozenColumns()?($canvasTopR.width(canvasWidthR), $paneHeaderL.width(canvasWidthL), $paneHeaderR.css("left",canvasWidthL), $paneHeaderR.css("width",viewportW-canvasWidthL), $paneTopL.width(canvasWidthL), $paneTopR.css("left",canvasWidthL), $paneTopR.css("width",viewportW-canvasWidthL), $headerRowScrollerL.width(canvasWidthL), $headerRowScrollerR.width(viewportW-canvasWidthL), $headerRowL.width(canvasWidthL), $headerRowR.width(canvasWidthR), $footerRowScrollerL.width(canvasWidthL), $footerRowScrollerR.width(viewportW-canvasWidthL), $footerRowL.width(canvasWidthL), $footerRowR.width(canvasWidthR), $viewportTopL.width(canvasWidthL), $viewportTopR.width(viewportW-canvasWidthL), hasFrozenRows&&($paneBottomL.width(canvasWidthL), $paneBottomR.css("left",canvasWidthL), $viewportBottomL.width(canvasWidthL), $viewportBottomR.width(viewportW-canvasWidthL), $canvasBottomL.width(canvasWidthL), $canvasBottomR.width(canvasWidthR))):($paneHeaderL.width("100%"), $paneTopL.width("100%"), $headerRowScrollerL.width("100%"), $headerRowL.width(canvasWidth), $footerRowScrollerL.width("100%"), $footerRowL.width(canvasWidth), $viewportTopL.width("100%"), hasFrozenRows&&($viewportBottomL.width("100%"), $canvasBottomL.width(canvasWidthL))), viewportHasHScroll=canvasWidth>viewportW-scrollbarDimensions.width), $headerRowSpacerL.width(canvasWidth+(viewportHasVScroll?scrollbarDimensions.width:0)), $headerRowSpacerR.width(canvasWidth+(viewportHasVScroll?scrollbarDimensions.width:0)), $footerRowSpacerL.width(canvasWidth+(viewportHasVScroll?scrollbarDimensions.width:0)), $footerRowSpacerR.width(canvasWidth+(viewportHasVScroll?scrollbarDimensions.width:0)), (t||e)&&applyColumnWidths();}function disableSelection(e){e&&e.jquery&&e.attr("unselectable","on").css("MozUserSelect","none").bind("selectstart.ui",function(){return!1});}function getMaxSupportedCssHeight(){for(var e=1e6,t=navigator.userAgent.toLowerCase().match(/firefox/)?6e6:1e9,o=(0, _jquery2.default)("<div style='display:none' />").appendTo(document.body);;){var n=2*e;if(o.css("height",n), n>t||o.height()!==n)break;e=n;}return o.remove(), e}function bindAncestorScrollEvents(){for(var e=hasFrozenRows&&!options.frozenBottom?$canvasBottomL[0]:$canvasTopL[0];(e=e.parentNode)!=document.body&&null!=e;)if(e==$viewportTopL[0]||e.scrollWidth!=e.clientWidth||e.scrollHeight!=e.clientHeight){var t=(0, _jquery2.default)(e);$boundAncestors=$boundAncestors?$boundAncestors.add(t):t, t.bind("scroll."+uid,handleActiveCellPositionChange);}}function unbindAncestorScrollEvents(){$boundAncestors&&($boundAncestors.unbind("scroll."+uid), $boundAncestors=null);}function updateColumnHeader(e,t,o){if(initialized){var n=getColumnIndex(e);if(null!=n){var r=columns[n],i=$headers.children().eq(n);i&&(void 0!==t&&(columns[n].name=t), void 0!==o&&(columns[n].toolTip=o), trigger(self.onBeforeHeaderCellDestroy,{node:i[0],column:r}), i.attr("title",o||"").children().eq(0).html(t), trigger(self.onHeaderCellRendered,{node:i[0],column:r}));}}}function getHeaderRow(){return hasFrozenColumns()?$headerRow:$headerRow[0]}function getHeaderRowColumn(e){var t,o=getColumnIndex(e);hasFrozenColumns()?o<=options.frozenColumn?t=$headerRowL:(t=$headerRowR, o-=options.frozenColumn+1):t=$headerRowL;var n=t.children().eq(o);return n&&n[0]}function getFooterRow(){return hasFrozenColumns()?$footerRow:$footerRow[0]}function getFooterRowColumn(e){var t,o=getColumnIndex(e);hasFrozenColumns()?o<=options.frozenColumn?t=$footerRowL:(t=$footerRowR, o-=options.frozenColumn+1):t=$footerRowL;var n=t.children().eq(o);return n&&n[0]}function createColumnFooter(){$footerRow.find(".slick-footerrow-column").each(function(){var e=(0, _jquery2.default)(this).data("column");e&&trigger(self.onBeforeFooterRowCellDestroy,{node:this,column:e});}), $footerRowL.empty(), $footerRowR.empty();for(var e=0;e<columns.length;e++){var t=columns[e],o=(0, _jquery2.default)("<div class='ui-state-default slick-footerrow-column l"+e+" r"+e+"'></div>").data("column",t).addClass(hasFrozenColumns()&&e<=options.frozenColumn?"frozen":"").appendTo(hasFrozenColumns()&&e>options.frozenColumn?$footerRowR:$footerRowL);trigger(self.onFooterRowCellRendered,{node:o[0],column:t});}}function createColumnGroupHeaders(){var e=0,t=!1;if(treeColumns.hasDepth()){for(var o=0;o<$groupHeadersL.length;o++){$groupHeadersL[o].empty(), $groupHeadersR[o].empty();var n=treeColumns.getColumnsInDepth(o);for(var r in n){var i=n[r];e+=i.extractColumns().length, hasFrozenColumns()&&0==o&&e-1===options.frozenColumn&&(t=!0), (0, _jquery2.default)("<div class='ui-state-default slick-group-header-column' />").html("<span class='slick-column-name'>"+i.name+"</span>").attr("id",""+uid+i.id).attr("title",i.toolTip||"").data("column",i).addClass(i.headerCssClass||"").addClass(hasFrozenColumns()&&e-1<=options.frozenColumn?"frozen":"").appendTo(hasFrozenColumns()&&e-1>options.frozenColumn?$groupHeadersR[o]:$groupHeadersL[o]);}if(hasFrozenColumns()&&0==o&&!t){$groupHeadersL[o].empty(), $groupHeadersR[o].empty(), alert("All columns of group should to be grouped!");break}}applyColumnGroupHeaderWidths();}}function createColumnHeaders(){function e(){(0, _jquery2.default)(this).addClass("ui-state-hover");}function t(){(0, _jquery2.default)(this).removeClass("ui-state-hover");}$headers.find(".slick-header-column").each(function(){var e=(0, _jquery2.default)(this).data("column");e&&trigger(self.onBeforeHeaderCellDestroy,{node:this,column:e});}), $headerL.empty(), $headerR.empty(), getHeadersWidth(), $headerL.width(headersWidthL), $headerR.width(headersWidthR), $headerRow.find(".slick-headerrow-column").each(function(){var e=(0, _jquery2.default)(this).data("column");e&&trigger(self.onBeforeHeaderRowCellDestroy,{node:this,column:e});}), $headerRowL.empty(), $headerRowR.empty();for(var o=0;o<columns.length;o++){var n=columns[o],r=hasFrozenColumns()?o<=options.frozenColumn?$headerL:$headerR:$headerL,i=hasFrozenColumns()?o<=options.frozenColumn?$headerRowL:$headerRowR:$headerRowL,s=(0, _jquery2.default)("<div class='ui-state-default slick-header-column' />").html("<span class='slick-column-name'>"+n.name+"</span>").width(n.width-headerColumnWidthDiff).attr("id",""+uid+n.id).attr("title",n.toolTip||"").data("column",n).addClass(n.headerCssClass||"").addClass(hasFrozenColumns()&&o<=options.frozenColumn?"frozen":"").appendTo(r);if((options.enableColumnReorder||n.sortable)&&s.on("mouseenter",e).on("mouseleave",t), n.sortable&&(s.addClass("slick-header-sortable"), s.append("<span class='slick-sort-indicator' />")), trigger(self.onHeaderCellRendered,{node:s[0],column:n}), options.showHeaderRow){var l=(0, _jquery2.default)("<div class='ui-state-default slick-headerrow-column l"+o+" r"+o+"'></div>").data("column",n).appendTo(i);trigger(self.onHeaderRowCellRendered,{node:l[0],column:n});}}setSortColumns(sortColumns), setupColumnResize(), options.enableColumnReorder&&setupColumnReorder();}function setupColumnSort(){$headers.click(function(e){if(e.metaKey=e.metaKey||e.ctrlKey, !(0, _jquery2.default)(e.target).hasClass("slick-resizable-handle")){var t=(0, _jquery2.default)(e.target).closest(".slick-header-column");if(t.length){var o=t.data("column");if(o.sortable){if(!getEditorLock().commitCurrentEdit())return;for(var n=null,r=0;r<sortColumns.length;r++)if(sortColumns[r].columnId==o.id){n=sortColumns[r], n.sortAsc=!n.sortAsc;break}e.metaKey&&options.multiColumnSort?n&&sortColumns.splice(r,1):((e.shiftKey||e.metaKey)&&options.multiColumnSort||(sortColumns=[]), n?0==sortColumns.length&&sortColumns.push(n):(n={columnId:o.id,sortAsc:o.defaultSortAsc}, sortColumns.push(n))), setSortColumns(sortColumns), options.multiColumnSort?trigger(self.onSort,{multiColumnSort:!0,sortCols:_jquery2.default.map(sortColumns,function(e){return{sortCol:columns[getColumnIndex(e.columnId)],sortAsc:e.sortAsc}})},e):trigger(self.onSort,{multiColumnSort:!1,sortCol:o,sortAsc:n.sortAsc},e);}}}});}function currentPositionInHeader(e){var t=0;return $headers.find(".slick-header-column").each(function(o){if(this.id==e)return t=o, !1}), t}function limitPositionInGroup(e){var t,o=0,n=0;return treeColumns.getColumnsInDepth($groupHeadersL.length-1).some(function(r){return o=n, n+=r.columns.length, r.columns.some(function(o){return o.id===e&&(t=r), t}), t}), n--, {start:o,end:n,group:t}}function columnPositionValidInGroup(e){var t=currentPositionInHeader(e[0].id),o=limitPositionInGroup(e.data("column").id),n=o.start<=t&&t<=o.end;return{limit:o,valid:n,message:n?"":'Column "'.concat(e.text(),'" can be reordered only within the "',o.group.name,'" group!')}}function setupColumnReorder(){var e=0,t=0,o=document.createElement("div");o.className="interact-placeholder", (0, _interact2.default)(".slick-header-column").ignoreFrom(".slick-resizable-handle").draggable({inertia:!0,restrict:{restriction:"parent",endOnly:!0,elementRect:{top:0,left:0,bottom:0,right:0}},autoScroll:!0,axis:"x",onstart:function(n){e=0, t=n.target.offsetWidth, $headers.find(".slick-header-column").each(function(e){(0, _jquery2.default)(this).data("index",e);}), o.style.height=n.target.offsetHeight+"px", o.style.width=t+"px", (0, _jquery2.default)(n.target).after(o).css({position:"absolute",zIndex:1e3,marginLeft:(0, _jquery2.default)(n.target).position().left-1e3});},onmove:function(t){e+=t.dx, t.target.style.transform="translate3d("+e+"px, -3px, 100px)";},onend:function(n){if(e=0, t=0, treeColumns.hasDepth()){var r=columnPositionValidInGroup((0, _jquery2.default)(n.target)),i=r.limit,s=!r.valid;s&&alert(r.message);}if(o.parentNode.removeChild(o), s)return n.target.style.transform="none", void setColumns(getColumns());(0, _jquery2.default)(n.target).css({position:"relative",zIndex:"",marginLeft:0,transform:"none"});var l=[];$headers.find(".slick-header-column").each(function(e){l.push(columns[(0, _jquery2.default)(this).data("index")]), (0, _jquery2.default)(this).removeData("index");}), setColumns(l), trigger(self.onColumnsReordered,{impactedColumns:getImpactedColumns(i),grid:self}), setupColumnResize();}}).dropzone({accept:".slick-header-column",ondragenter:function(e){e.target.classList.add("interact-drop-active"), e.relatedTarget.classList.add("interact-can-drop");},ondragleave:function(e){e.target.classList.remove("interact-drop-active"), e.relatedTarget.classList.remove("interact-can-drop");},ondrop:function(t){t.target.classList.remove("interact-drop-active"), t.relatedTarget.classList.remove("interact-can-drop"), (0, _jquery2.default)(t.target)[e>0?"after":"before"](t.relatedTarget);}}).styleCursor(!1);}function getImpactedColumns(e){var t=[];if(void 0!=e)for(var o=e.start;o<=e.end;o++)t.push(columns[o]);else t=columns;return t}function setupColumnResize(){var e,t,o,n;t=$headers.children(), t.find(".slick-resizable-handle").remove(), t.each(function(e,t){columns[e].resizable&&(void 0===o&&(o=e), n=e);}), void 0!==o&&t.each(function(t,r){if(!(t<o||options.forceFitColumns&&t>=n)){e=(0, _jquery2.default)(r);var i=(0, _jquery2.default)("<div class='slick-resizable-handle' />");if(i.appendTo(r), !e.data("resizable")){var s=columns[t];s.resizable&&(e.data("resizable",!0), (0, _interact2.default)(r).resizable({preserveAspectRatio:!1,edges:{left:!0,right:!0,bottom:!1,top:!1}}).on("resizestart",function(e){return!!getEditorLock().commitCurrentEdit()&&(s.previousWidth=e.rect.width, void e.target.classList.add("slick-header-column-active"))}).on("resizemove",function(e){var t=e.dx,o=s.width+=t;s.minWidth>0&&s.minWidth>o?o=s.minWidth:s.maxWidth>0&&s.maxWidth<o&&(o=s.maxWidth), s.width=o, options.forceFitColumns&&autosizeColumns(), applyColumnHeaderWidths(), options.syncColumnCellResize&&applyColumnWidths();}).on("resizeend",function(e){e.target.classList.remove("slick-header-column-active"), treeColumns.hasDepth()&&createColumnGroupHeaders(), invalidateAllRows(), updateCanvasWidth(!0), render(), trigger(self.onColumnsResized,{grid:self});}));}}});}function getVBoxDelta(e){var t=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],o=0;return _jquery2.default.each(t,function(t,n){o+=parseFloat(e.css(n))||0;}), o}function setFrozenOptions(){if(options.frozenColumn=options.frozenColumn>=0&&options.frozenColumn<columns.length?parseInt(options.frozenColumn):-1, options.frozenRow=options.frozenRow>=0&&options.frozenRow<numVisibleRows?parseInt(options.frozenRow):-1, options.frozenRow>-1){hasFrozenRows=!0, frozenRowsHeight=options.frozenRow*options.rowHeight;var e=getDataLength()||this.data.length;actualFrozenRow=options.frozenBottom?e-options.frozenRow:options.frozenRow;}else hasFrozenRows=!1;}function setPaneVisibility(){hasFrozenColumns()?($paneHeaderR.show(), $paneTopR.show(), hasFrozenRows?($paneBottomL.show(), $paneBottomR.show()):($paneBottomR.hide(), $paneBottomL.hide())):($paneHeaderR.hide(), $paneTopR.hide(), $paneBottomR.hide(), hasFrozenRows?$paneBottomL.show():($paneBottomR.hide(), $paneBottomL.hide()));}function setOverflow(){$viewportTopL.css({"overflow-x":hasFrozenColumns()?hasFrozenRows?"hidden":"scroll":hasFrozenRows?"hidden":"auto","overflow-y":hasFrozenColumns()?"hidden":hasFrozenRows?"scroll":"auto"}), $viewportTopR.css({"overflow-x":hasFrozenColumns()?hasFrozenRows?"hidden":"scroll":hasFrozenRows?"hidden":"auto","overflow-y":hasFrozenColumns()?hasFrozenRows?"scroll":"auto":hasFrozenRows?"scroll":"auto"}), $viewportBottomL.css({"overflow-x":hasFrozenColumns()&&hasFrozenRows?"scroll":"auto","overflow-y":hasFrozenColumns()?"hidden":hasFrozenRows?"scroll":"auto"}), $viewportBottomR.css({"overflow-x":hasFrozenColumns()&&hasFrozenRows?"scroll":"auto","overflow-y":(hasFrozenColumns(), "auto")});}function setScroller(){hasFrozenColumns()?($headerScrollContainer=$headerScrollerR, $headerRowScrollContainer=$headerRowScrollerR, $footerRowScrollContainer=$footerRowScrollerR, hasFrozenRows?options.frozenBottom?($viewportScrollContainerX=$viewportBottomR, $viewportScrollContainerY=$viewportTopR):$viewportScrollContainerX=$viewportScrollContainerY=$viewportBottomR:$viewportScrollContainerX=$viewportScrollContainerY=$viewportTopR):($headerScrollContainer=$headerScrollerL, $headerRowScrollContainer=$headerRowScrollerL, $footerRowScrollContainer=$footerRowScrollerL, hasFrozenRows?options.frozenBottom?($viewportScrollContainerX=$viewportBottomL, $viewportScrollContainerY=$viewportTopL):$viewportScrollContainerX=$viewportScrollContainerY=$viewportBottomL:$viewportScrollContainerX=$viewportScrollContainerY=$viewportTopL);}function measureCellPaddingAndBorder(){var e,t=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],o=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"];e=(0, _jquery2.default)("<div class='ui-state-default slick-header-column' style='visibility:hidden'>-</div>").appendTo($headers), headerColumnWidthDiff=headerColumnHeightDiff=0, "border-box"!=e.css("box-sizing")&&"border-box"!=e.css("-moz-box-sizing")&&"border-box"!=e.css("-webkit-box-sizing")&&(_jquery2.default.each(t,function(t,o){headerColumnWidthDiff+=parseFloat(e.css(o))||0;}), _jquery2.default.each(o,function(t,o){headerColumnHeightDiff+=parseFloat(e.css(o))||0;})), e.remove();var n=(0, _jquery2.default)("<div class='slick-row' />").appendTo($canvas);e=(0, _jquery2.default)("<div class='slick-cell' id='' style='visibility:hidden'>-</div>").appendTo(n), cellWidthDiff=cellHeightDiff=0, "border-box"!=e.css("box-sizing")&&"border-box"!=e.css("-moz-box-sizing")&&"border-box"!=e.css("-webkit-box-sizing")&&(_jquery2.default.each(t,function(t,o){cellWidthDiff+=parseFloat(e.css(o))||0;}), _jquery2.default.each(o,function(t,o){cellHeightDiff+=parseFloat(e.css(o))||0;})), n.remove(), absoluteColumnMinWidth=Math.max(headerColumnWidthDiff,cellWidthDiff);}function createCssRules(){$style=(0, _jquery2.default)("<style type='text/css' rel='stylesheet' />").appendTo((0, _jquery2.default)("head"));for(var e=options.rowHeight-cellHeightDiff,t=["."+uid+" .slick-group-header-column { left: 1000px; }","."+uid+" .slick-header-column { left: 1000px; }","."+uid+" .slick-top-panel { height:"+options.topPanelHeight+"px; }","."+uid+" .slick-headerrow-columns { height:"+options.headerRowHeight+"px; }","."+uid+" .slick-cell { height:"+e+"px; }","."+uid+" .slick-row { height:"+options.rowHeight+"px; }","."+uid+" .slick-footerrow-columns { height:"+options.footerRowHeight+"px; }"],o=0;o<columns.length;o++)t.push("."+uid+" .l"+o+" { }"), t.push("."+uid+" .r"+o+" { }");$style[0].styleSheet?$style[0].styleSheet.cssText=t.join(" "):$style[0].appendChild(document.createTextNode(t.join(" ")));}function getColumnCssRules(e){if(!stylesheet){for(var t=document.styleSheets,o=0;o<t.length;o++)if((t[o].ownerNode||t[o].owningElement)==$style[0]){stylesheet=t[o];break}if(!stylesheet)throw new Error("Cannot find stylesheet.");columnCssRulesL=[], columnCssRulesR=[];for(var n,r,i=stylesheet.cssRules||stylesheet.rules,o=0;o<i.length;o++){var s=i[o].selectorText;(n=/\.l\d+/.exec(s))?(r=parseInt(n[0].substr(2,n[0].length-2),10), columnCssRulesL[r]=i[o]):(n=/\.r\d+/.exec(s))&&(r=parseInt(n[0].substr(2,n[0].length-2),10), columnCssRulesR[r]=i[o]);}}return{left:columnCssRulesL[e],right:columnCssRulesR[e]}}function removeCssRules(){$style.remove(), stylesheet=null;}function destroy(){getEditorLock().cancelCurrentEdit(), trigger(self.onBeforeDestroy,{});for(var e=plugins.length;e--;)unregisterPlugin(plugins[e]);unbindAncestorScrollEvents(), $container.unbind(".slickgrid"), removeCssRules(), $container.empty().removeClass(uid);}function trigger(e,t,o){return o=o||new _slick2.default.EventData, t=t||{}, t.grid=self, e.notify(t,o,self)}function getEditorLock(){return options.editorLock}function getEditController(){return editController}function getColumnIndex(e){return columnsById[e]}function autosizeColumns(){var e,t,o,n=[],r=0,i=0,s=viewportHasVScroll?viewportW-scrollbarDimensions.width:viewportW;for(e=0;e<columns.length;e++)t=columns[e], n.push(t.width), i+=t.width, t.resizable&&(r+=t.width-Math.max(t.minWidth,absoluteColumnMinWidth));for(o=i;i>s&&r;){var l=(i-s)/r;for(e=0;e<columns.length&&i>s;e++){t=columns[e];var a=n[e];if(!(!t.resizable||a<=t.minWidth||a<=absoluteColumnMinWidth)){var c=Math.max(t.minWidth,absoluteColumnMinWidth),d=Math.floor(l*(a-c))||1;d=Math.min(d,a-c), i-=d, r-=d, n[e]-=d;}}if(o<=i)break;o=i;}for(o=i;i<s;){var u=s/i;for(e=0;e<columns.length&&i<s;e++){t=columns[e];var h,p=n[e];h=!t.resizable||t.maxWidth<=p?0:Math.min(Math.floor(u*p)-p,t.maxWidth-p||1e6)||1, i+=h, n[e]+=h;}if(o>=i)break;o=i;}var f=!1;for(e=0;e<columns.length;e++)columns[e].rerenderOnResize&&columns[e].width!=n[e]&&(f=!0), columns[e].width=n[e];applyColumnHeaderWidths(), applyColumnGroupHeaderWidths(), updateCanvasWidth(!0), f&&(invalidateAllRows(), render());}function applyColumnGroupHeaderWidths(){if(treeColumns.hasDepth())for(var e=$groupHeadersL.length-1;e>=0;e--){treeColumns.getColumnsInDepth(e);(0, _jquery2.default)().add($groupHeadersL[e]).add($groupHeadersR[e]).each(function(e){var t=(0, _jquery2.default)(this),o=0;t.width(0==e?getHeadersWidthL():getHeadersWidthR()), t.children().each(function(){var e=(0, _jquery2.default)(this),n=(0, _jquery2.default)(this).data("column");n.width=0, n.columns.forEach(function(){var e=t.next().children(":eq("+o++ +")");n.width+=e.outerWidth();}), e.width(n.width-headerColumnWidthDiff);});});}}function applyColumnHeaderWidths(){if(initialized){for(var e,t=0,o=$headers.children(),n=o.length;t<n;t++)e=(0, _jquery2.default)(o[t]), e.width()!==columns[t].width-headerColumnWidthDiff&&e.width(columns[t].width-headerColumnWidthDiff);updateColumnCaches();}}function applyColumnWidths(){for(var e,t,o=0,n=0;n<columns.length;n++)e=columns[n].width, t=getColumnCssRules(n), t.left.style.left=o+"px", t.right.style.right=(options.frozenColumn!=-1&&n>options.frozenColumn?canvasWidthR:canvasWidthL)-o-e+"px", options.frozenColumn==n?o=0:o+=columns[n].width;}function setSortColumn(e,t){setSortColumns([{columnId:e,sortAsc:t}]);}function setSortColumns(e){sortColumns=e;var t=$headers.children();t.removeClass("slick-header-column-sorted").find(".slick-sort-indicator").removeClass("slick-sort-indicator-asc slick-sort-indicator-desc"), _jquery2.default.each(sortColumns,function(e,o){null==o.sortAsc&&(o.sortAsc=!0);var n=getColumnIndex(o.columnId);null!=n&&t.eq(n).addClass("slick-header-column-sorted").find(".slick-sort-indicator").addClass(o.sortAsc?"slick-sort-indicator-asc":"slick-sort-indicator-desc");});}function getSortColumns(){return sortColumns}function handleSelectedRangesChanged(e,t){selectedRows=[];for(var o={},n=0;n<t.length;n++)for(var r=t[n].fromRow;r<=t[n].toRow;r++){o[r]||(selectedRows.push(r), o[r]={});for(var i=t[n].fromCell;i<=t[n].toCell;i++)canCellBeSelected(r,i)&&(o[r][columns[i].id]=options.selectedCellCssClass);}setCellCssStyles(options.selectedCellCssClass,o), trigger(self.onSelectedRowsChanged,{rows:getSelectedRows()},e);}function getColumns(){return columns}function updateColumnCaches(){columnPosLeft=[], columnPosRight=[];for(var e=0,t=0,o=columns.length;t<o;t++)columnPosLeft[t]=e, columnPosRight[t]=e+columns[t].width, options.frozenColumn==t?e=0:e+=columns[t].width;}function setColumns(e){var t=new _slick2.default.TreeColumns(e);t.hasDepth()?(treeColumns=t, columns=treeColumns.extractColumns()):columns=e, columnsById={};for(var o=0;o<columns.length;o++){var n=columns[o]=_jquery2.default.extend({},columnDefaults,columns[o]);columnsById[n.id]=o, n.minWidth&&n.width<n.minWidth&&(n.width=n.minWidth), n.maxWidth&&n.width>n.maxWidth&&(n.width=n.maxWidth);}updateColumnCaches(), initialized&&(setPaneVisibility(), setOverflow(), invalidateAllRows(), createColumnHeaders(), createColumnGroupHeaders(), createColumnFooter(), removeCssRules(), createCssRules(), resizeCanvas(), updateCanvasWidth(), applyColumnWidths(), handleScroll());}function getOptions(){return options}function setOptions(e){getEditorLock().commitCurrentEdit()&&(makeActiveCellNormal(), options.enableAddRow!==e.enableAddRow&&invalidateRow(getDataLength()), options=_jquery2.default.extend(options,e), validateAndEnforceOptions(), setFrozenOptions(), setScroller(), zombieRowNodeFromLastMouseWheelEvent=null, setColumns(treeColumns.extractColumns()), render());}function validateAndEnforceOptions(){options.autoHeight&&(options.leaveSpaceForNewRows=!1);}function setData(e,t){data=e, invalidateAllRows(), updateRowCount(), t&&scrollTo(0);}function getData(){return data}function getDataLength(){return data.getLength?data.getLength():data.length}function getDataLengthIncludingAddNew(){return getDataLength()+(options.enableAddRow?1:0)}function getDataItem(e){return data.getItem?data.getItem(e):data[e]}function getTopPanel(){return $topPanel[0]}function setTopPanelVisibility(e){options.showTopPanel!=e&&(options.showTopPanel=e, e?$topPanelScroller.slideDown("fast",resizeCanvas):$topPanelScroller.slideUp("fast",resizeCanvas));}function setHeaderRowVisibility(e){options.showHeaderRow!=e&&(options.showHeaderRow=e, e?$headerRowScroller.slideDown("fast",resizeCanvas):$headerRowScroller.slideUp("fast",resizeCanvas));}function setFooterRowVisibility(e){options.showFooterRow!=e&&(options.showFooterRow=e, e?$footerRowScroller.fadeIn("fast",resizeCanvas):$footerRowScroller.slideDown("fast",resizeCanvas));}function getContainerNode(){return $container.get(0)}function getRowTop(e){return options.rowHeight*e-offset}function getRowFromPosition(e){return Math.floor((e+offset)/options.rowHeight)}function scrollTo(e){e=Math.max(e,0), e=Math.min(e,th-$viewportScrollContainerY.height()+(viewportHasHScroll||hasFrozenColumns()?scrollbarDimensions.height:0));var t=offset;page=Math.min(n-1,Math.floor(e/ph)), offset=Math.round(page*cj);var o=e-offset;if(offset!=t){var r=getVisibleRange(o);cleanupRows(r), updateRowPositions();}prevScrollTop!=o&&(vScrollDir=prevScrollTop+t<o+offset?1:-1, lastRenderedScrollTop=scrollTop=prevScrollTop=o, hasFrozenColumns()&&($viewportTopL[0].scrollTop=o), hasFrozenRows&&($viewportBottomL[0].scrollTop=$viewportBottomR[0].scrollTop=o), $viewportScrollContainerY[0].scrollTop=o, trigger(self.onViewportChanged,{}));}function defaultFormatter(e,t,o,n,r){return null==o?"":(o+"").replace(/&/g,"&").replace(/</g,"<").replace(/>/g,">")}function getFormatter(e,t){var o=data.getItemMetadata&&data.getItemMetadata(e),n=o&&o.columns&&(o.columns[t.id]||o.columns[getColumnIndex(t.id)]);return n&&n.formatter||o&&o.formatter||t.formatter||options.formatterFactory&&options.formatterFactory.getFormatter(t)||options.defaultFormatter}function callFormatter(e,t,o,n,r){var i,s=data.getItemMetadata&&data.getItemMetadata(e);if(s=s&&s.columns){var l=s[n.id]||s[t];i=getFormatter(e,n)(e,t,o,n,r,l);}else i=getFormatter(e,n)(e,t,o,n,r);return i}function getEditor(e,t){var o=columns[t],n=data.getItemMetadata&&data.getItemMetadata(e),r=n&&n.columns;return r&&r[o.id]&&void 0!==r[o.id].editor?r[o.id].editor:r&&r[t]&&void 0!==r[t].editor?r[t].editor:o.editor||options.editorFactory&&options.editorFactory.getEditor(o)}function getDataItemValueForColumn(e,t){return options.dataItemColumnValueExtractor?options.dataItemColumnValueExtractor(e,t):e[t.field]}function appendRowHtml(e,t,o,n,r){var i=getDataItem(o),s=o<r&&!i,l="slick-row"+(hasFrozenRows&&o<options.frozenRow?" frozen":"")+(s?" loading":"")+(o===activeRow?" active":"")+(o%2==1?" odd":" even");i||(l+=" "+options.addNewRowCssClass);var a=data.getItemMetadata&&data.getItemMetadata(o);a&&a.cssClasses&&(l+=" "+a.cssClasses);var c=getFrozenRowOffset(o),d="<div class='ui-widget-content "+l+"' style='top:"+(getRowTop(o)-c)+"px'>";e.push(d), hasFrozenColumns()&&t.push(d);for(var u,h,p=0,f=columns.length;p<f;p++){if(h=columns[p], u=1, a&&a.columns){var g=a.columns[h.id]||a.columns[p];u=g&&g.colspan||1, "*"===u&&(u=f-p);}if(columnPosRight[Math.min(f-1,p+u-1)]>n.leftPx){if(columnPosLeft[p]>n.rightPx)break;hasFrozenColumns()&&p>options.frozenColumn?appendCellHtml(t,o,p,u,i):appendCellHtml(e,o,p,u,i);}else hasFrozenColumns()&&p<=options.frozenColumn&&appendCellHtml(e,o,p,u,i);u>1&&(p+=u-1);}e.push("</div>"), hasFrozenColumns()&&t.push("</div>");}function appendCellHtml(e,t,o,n,r){var i=columns[o],s="slick-cell l"+o+" r"+Math.min(columns.length-1,o+n-1)+(i.cssClass?" "+i.cssClass:"");
hasFrozenColumns()&&o<=options.frozenColumn&&(s+=" frozen"), t===activeRow&&o===activeCell&&(s+=" active");for(var l in cellCssClasses)cellCssClasses[l][t]&&cellCssClasses[l][t][i.id]&&(s+=" "+cellCssClasses[l][t][i.id]);if(e.push("<div class='"+s+"'>"), r){var a=getDataItemValueForColumn(r,i);e.push(callFormatter(t,o,a,i,r));}e.push("</div>"), rowsCache[t].cellRenderQueue.push(o), rowsCache[t].cellColSpans[o]=n;}function cleanupRows(e){for(var t in rowsCache){var o=!0;hasFrozenRows&&(options.frozenBottom&&t>=actualFrozenRow||!options.frozenBottom&&t<=actualFrozenRow)&&(o=!1), (t=parseInt(t,10))!==activeRow&&(t<e.top||t>e.bottom)&&o&&removeRowFromCache(t);}}function invalidate(){updateRowCount(), invalidateAllRows(), render();}function invalidateAllRows(){currentEditor&&makeActiveCellNormal();for(var e in rowsCache)removeRowFromCache(e);}function removeRowFromCache(e){var t=rowsCache[e];t&&(rowNodeFromLastMouseWheelEvent==t.rowNode[0]||hasFrozenColumns()&&rowNodeFromLastMouseWheelEvent==t.rowNode[1]?(t.rowNode.hide(), zombieRowNodeFromLastMouseWheelEvent=t.rowNode):t.rowNode.each(function(){this.parentElement.removeChild(this);}), delete rowsCache[e], delete postProcessedRows[e], renderedRows--, counter_rows_removed++);}function invalidateRows(e){var t,o;if(e&&e.length)for(vScrollDir=0, t=0, o=e.length;t<o;t++)currentEditor&&activeRow===e[t]&&makeActiveCellNormal(), rowsCache[e[t]]&&removeRowFromCache(e[t]);}function invalidateRow(e){invalidateRows([e]);}function updateCell(e,t){var o=getCellNode(e,t);if(o){var n=columns[t],r=getDataItem(e);currentEditor&&activeRow===e&&activeCell===t?currentEditor.loadValue(r):(o.innerHTML=r?callFormatter(e,t,getDataItemValueForColumn(r,n),n,r):"", invalidatePostProcessingResults(e));}}function updateRow(e){var t=rowsCache[e];if(t){ensureCellNodesInRowsCache(e);var o=getDataItem(e);for(var n in t.cellNodesByColumnIdx)if(t.cellNodesByColumnIdx.hasOwnProperty(n)){n|=0;var r=columns[n],i=t.cellNodesByColumnIdx[n][0];e===activeRow&&n===activeCell&&currentEditor?currentEditor.loadValue(o):o?i.innerHTML=callFormatter(e,n,getDataItemValueForColumn(o,r),r,o):i.innerHTML="";}invalidatePostProcessingResults(e);}}function getViewportHeight(){options.autoHeight?viewportH=options.rowHeight*getDataLengthIncludingAddNew()+(options.frozenColumn==-1?$headers.outerHeight():0):(topPanelH=options.showTopPanel?options.topPanelHeight+getVBoxDelta($topPanelScroller):0, headerRowH=options.showHeaderRow?options.headerRowHeight+getVBoxDelta($headerRowScroller):0, footerRowH=options.showFooterRow?options.footerRowHeight+getVBoxDelta($footerRowScroller):0, viewportH=parseFloat(_jquery2.default.css($container[0],"height",!0))-parseFloat(_jquery2.default.css($container[0],"paddingTop",!0))-parseFloat(_jquery2.default.css($container[0],"paddingBottom",!0))-parseFloat(_jquery2.default.css($headerScroller[0],"height"))-getVBoxDelta($headerScroller)-topPanelH-headerRowH-footerRowH), numVisibleRows=Math.ceil(viewportH/options.rowHeight);}function getViewportWidth(){viewportW=parseFloat(_jquery2.default.css($container[0],"width",!0));}function resizeCanvas(){if(initialized){paneTopH=0, paneBottomH=0, viewportTopH=0, getViewportWidth(), getViewportHeight(), hasFrozenRows?options.frozenBottom?(paneTopH=viewportH-frozenRowsHeight-scrollbarDimensions.height, paneBottomH=frozenRowsHeight+scrollbarDimensions.height):(paneTopH=frozenRowsHeight, paneBottomH=viewportH-frozenRowsHeight):paneTopH=viewportH, paneTopH+=topPanelH+headerRowH+footerRowH, hasFrozenColumns()&&options.autoHeight&&(paneTopH+=scrollbarDimensions.height), viewportTopH=paneTopH-topPanelH-headerRowH-footerRowH, options.autoHeight&&(hasFrozenColumns()&&$container.height(paneTopH+parseFloat(_jquery2.default.css($headerScrollerL[0],"height"))), $paneTopL.css("position","relative")), $paneTopL.css({top:$paneHeaderL.height(),height:paneTopH});var e=$paneTopL.position().top+paneTopH;$viewportTopL.height(viewportTopH), hasFrozenColumns()?($paneTopR.css({top:$paneHeaderL.height(),height:paneTopH}), $viewportTopR.height(viewportTopH), hasFrozenRows&&($paneBottomL.css({top:e,height:paneBottomH}), $paneBottomR.css({top:e,height:paneBottomH}), $viewportBottomR.height(paneBottomH))):hasFrozenRows&&($paneBottomL.css({width:"100%",height:paneBottomH}), $paneBottomL.css("top",e)), hasFrozenRows?($viewportBottomL.height(paneBottomH), options.frozenBottom?($canvasBottomL.height(frozenRowsHeight), hasFrozenColumns()&&$canvasBottomR.height(frozenRowsHeight)):($canvasTopL.height(frozenRowsHeight), hasFrozenColumns()&&$canvasTopR.height(frozenRowsHeight))):$viewportTopR.height(viewportTopH), options.forceFitColumns&&autosizeColumns(), updateRowCount(), handleScroll(), lastRenderedScrollLeft=-1, render();}}function updateRowCount(){if(initialized){var e=getDataLengthIncludingAddNew(),t=0,o=hasFrozenRows&&!options.frozenBottom?$canvasBottomL.height():$canvasTopL.height();if(hasFrozenRows)var t=getDataLength()-options.frozenRow;else var t=e+(options.leaveSpaceForNewRows?numVisibleRows-1:0);var r=$viewportScrollContainerY.height(),i=viewportHasVScroll;viewportHasVScroll=!options.autoHeight&&t*options.rowHeight>r, makeActiveCellNormal();var s=e-1;for(var l in rowsCache)l>=s&&removeRowFromCache(l);th=Math.max(options.rowHeight*t,r-scrollbarDimensions.height), activeCellNode&&activeRow>s&&resetActiveCell(), th<maxSupportedCssHeight?(h=ph=th, n=1, cj=0):(h=maxSupportedCssHeight, ph=h/100, n=Math.floor(th/ph), cj=(th-h)/(n-1)), h!==o&&(hasFrozenRows&&!options.frozenBottom?($canvasBottomL.css("height",h), hasFrozenColumns()&&$canvasBottomR.css("height",h)):($canvasTopL.css("height",h), $canvasTopR.css("height",h)), scrollTop=$viewportScrollContainerY[0].scrollTop);var a=scrollTop+offset<=th-r;0==th||0==scrollTop?page=offset=0:scrollTo(a?scrollTop+offset:th-r), h!=o&&options.autoHeight&&resizeCanvas(), options.forceFitColumns&&i!=viewportHasVScroll&&autosizeColumns(), updateCanvasWidth(!1);}}function getVisibleRange(e,t){return null==e&&(e=scrollTop), null==t&&(t=scrollLeft), {top:getRowFromPosition(e),bottom:getRowFromPosition(e+viewportH)+1,leftPx:t,rightPx:t+viewportW}}function getRenderedRange(e,t){var o=getVisibleRange(e,t),n=Math.round(viewportH/options.rowHeight),r=3;return vScrollDir==-1?(o.top-=n, o.bottom+=r):1==vScrollDir?(o.top-=r, o.bottom+=n):(o.top-=r, o.bottom+=r), o.top=Math.max(0,o.top), o.bottom=Math.min(getDataLengthIncludingAddNew()-1,o.bottom), o.leftPx-=viewportW, o.rightPx+=viewportW, o.leftPx=Math.max(0,o.leftPx), o.rightPx=Math.min(canvasWidth,o.rightPx), o}function ensureCellNodesInRowsCache(e){var t=rowsCache[e];if(t&&t.cellRenderQueue.length)for(var o=t.rowNode.children().last();t.cellRenderQueue.length;){var n=t.cellRenderQueue.pop();t.cellNodesByColumnIdx[n]=o, o=o.prev(), 0==o.length&&(o=(0, _jquery2.default)(t.rowNode[0]).children().last());}}function cleanUpCells(e,t){if(!hasFrozenRows||!(options.frozenBottom&&t>actualFrozenRow||t<=actualFrozenRow)){var o=0,n=rowsCache[t],r=[];for(var i in n.cellNodesByColumnIdx)if(n.cellNodesByColumnIdx.hasOwnProperty(i)&&(i|=0, !(i<=options.frozenColumn))){var s=n.cellColSpans[i];(columnPosLeft[i]>e.rightPx||columnPosRight[Math.min(columns.length-1,i+s-1)]<e.leftPx)&&(t==activeRow&&i==activeCell||r.push(i));}for(var l;null!=(l=r.pop());)n.cellNodesByColumnIdx[l][0].parentElement.removeChild(n.cellNodesByColumnIdx[l][0]), delete n.cellColSpans[l], delete n.cellNodesByColumnIdx[l], postProcessedRows[t]&&delete postProcessedRows[t][l], o++;}}function cleanUpAndRenderCells(e){for(var t,o,n,r=[],i=[],s=0,l=e.top,a=e.bottom;l<=a;l++)if(t=rowsCache[l]){ensureCellNodesInRowsCache(l), cleanUpCells(e,l), o=0;var c=data.getItemMetadata&&data.getItemMetadata(l);c=c&&c.columns;for(var d=getDataItem(l),u=0,h=columns.length;u<h&&!(columnPosLeft[u]>e.rightPx);u++)if(null==(n=t.cellColSpans[u])){if(n=1, c){var p=c[columns[u].id]||c[u];n=p&&p.colspan||1, "*"===n&&(n=h-u);}columnPosRight[Math.min(h-1,u+n-1)]>e.leftPx&&(appendCellHtml(r,l,u,n,d), o++), u+=n>1?n-1:0;}else u+=n>1?n-1:0;o&&(i.push(l));}if(r.length){var f=document.createElement("div");f.innerHTML=r.join("");for(var g,v;null!=(g=i.pop());){t=rowsCache[g];for(var m;null!=(m=t.cellRenderQueue.pop());)v=(0, _jquery2.default)(f).children().last(), hasFrozenColumns()&&m>options.frozenColumn?(0, _jquery2.default)(t.rowNode[1]).append(v):(0, _jquery2.default)(t.rowNode[0]).append(v), t.cellNodesByColumnIdx[m]=v;}}}function renderRows(e){for(var t=[],o=[],n=[],r=!1,i=getDataLength(),s=e.top,l=e.bottom;s<=l;s++)rowsCache[s]||hasFrozenRows&&options.frozenBottom&&s==getDataLength()||(renderedRows++, n.push(s), rowsCache[s]={rowNode:null,cellColSpans:[],cellNodesByColumnIdx:[],cellRenderQueue:[]}, appendRowHtml(t,o,s,e,i), activeCellNode&&activeRow===s&&(r=!0), counter_rows_rendered++);if(n.length){var a=document.createElement("div"),c=document.createElement("div");a.innerHTML=t.join(""), c.innerHTML=o.join("");for(var s=0,l=n.length;s<l;s++)hasFrozenRows&&n[s]>=actualFrozenRow?hasFrozenColumns()?rowsCache[n[s]].rowNode=(0, _jquery2.default)().add((0, _jquery2.default)(a.firstChild).appendTo($canvasBottomL)).add((0, _jquery2.default)(c.firstChild).appendTo($canvasBottomR)):rowsCache[n[s]].rowNode=(0, _jquery2.default)().add((0, _jquery2.default)(a.firstChild).appendTo($canvasBottomL)):hasFrozenColumns()?rowsCache[n[s]].rowNode=(0, _jquery2.default)().add((0, _jquery2.default)(a.firstChild).appendTo($canvasTopL)).add((0, _jquery2.default)(c.firstChild).appendTo($canvasTopR)):rowsCache[n[s]].rowNode=(0, _jquery2.default)().add((0, _jquery2.default)(a.firstChild).appendTo($canvasTopL));r&&(activeCellNode=getCellNode(activeRow,activeCell));}}function startPostProcessing(){options.enableAsyncPostRender&&(clearTimeout(h_postrender), h_postrender=setTimeout(asyncPostProcessRows,options.asyncPostRenderDelay));}function invalidatePostProcessingResults(e){delete postProcessedRows[e], postProcessFromRow=Math.min(postProcessFromRow,e), postProcessToRow=Math.max(postProcessToRow,e), startPostProcessing();}function updateRowPositions(){for(var e in rowsCache)rowsCache[e].rowNode.css("top",getRowTop(e)+"px");}function render(){if(initialized){var e=getVisibleRange(),t=getRenderedRange();if(cleanupRows(t), lastRenderedScrollLeft!=scrollLeft){if(hasFrozenRows){var o=_jquery2.default.extend(!0,{},t);options.frozenBottom?(o.top=actualFrozenRow, o.bottom=getDataLength()):(o.top=0, o.bottom=options.frozenRow), cleanUpAndRenderCells(o);}cleanUpAndRenderCells(t);}renderRows(t), hasFrozenRows&&renderRows(options.frozenBottom?{top:actualFrozenRow,bottom:getDataLength()-1,leftPx:t.leftPx,rightPx:t.rightPx}:{top:0,bottom:options.frozenRow-1,leftPx:t.leftPx,rightPx:t.rightPx}), postProcessFromRow=e.top, postProcessToRow=Math.min(getDataLengthIncludingAddNew()-1,e.bottom), startPostProcessing(), lastRenderedScrollTop=scrollTop, lastRenderedScrollLeft=scrollLeft, h_render=null;}}function handleHeaderRowScroll(){var e=$headerRowScrollContainer[0].scrollLeft;e!=$viewportScrollContainerX[0].scrollLeft&&($viewportScrollContainerX[0].scrollLeft=e);}function handleFooterRowScroll(){var e=$footerRowScrollContainer[0].scrollLeft;e!=$viewportScrollContainerX[0].scrollLeft&&($viewportScrollContainerX[0].scrollLeft=e);}function handleMouseWheel(e,t,o,n){var r=(0, _jquery2.default)(e.target).closest(".slick-row"),i=r[0];if(i!=rowNodeFromLastMouseWheelEvent){var s=r.parents(".grid-canvas"),l=s.hasClass("grid-canvas-left");if(zombieRowNodeFromLastMouseWheelEvent&&zombieRowNodeFromLastMouseWheelEvent[l?0:1]!=i){var a=zombieRowNodeFromLastMouseWheelEvent[l||1==zombieRowNodeFromLastMouseWheelEvent.length?0:1];a.parentElement.removeChild(a), zombieRowNodeFromLastMouseWheelEvent=null;}rowNodeFromLastMouseWheelEvent=i;}scrollTop=Math.max(0,$viewportScrollContainerY[0].scrollTop-n*options.rowHeight), scrollLeft=$viewportScrollContainerX[0].scrollLeft+10*o;var c=_handleScroll(!0);c&&e.preventDefault();}function handleScroll(){return scrollTop=$viewportScrollContainerY[0].scrollTop, scrollLeft=$viewportScrollContainerX[0].scrollLeft, _handleScroll(!1)}function _handleScroll(e){var t=$viewportScrollContainerY[0].scrollHeight-$viewportScrollContainerY[0].clientHeight,o=$viewportScrollContainerY[0].scrollWidth-$viewportScrollContainerY[0].clientWidth,r=hasFrozenColumns();scrollTop>t&&(scrollTop=t), scrollLeft>o&&(scrollLeft=o);var i=Math.abs(scrollTop-prevScrollTop),s=Math.abs(scrollLeft-prevScrollLeft);if(s&&(prevScrollLeft=scrollLeft, $viewportScrollContainerX[0].scrollLeft=scrollLeft, $headerScrollContainer[0].scrollLeft=scrollLeft, $topPanelScroller[0].scrollLeft=scrollLeft, $headerRowScrollContainer[0].scrollLeft=scrollLeft, $footerRowScrollContainer[0].scrollLeft=scrollLeft, r?hasFrozenRows&&($viewportTopR[0].scrollLeft=scrollLeft):hasFrozenRows&&($viewportTopL[0].scrollLeft=scrollLeft)), i)if(vScrollDir=prevScrollTop<scrollTop?1:-1, prevScrollTop=scrollTop, e&&($viewportScrollContainerY[0].scrollTop=scrollTop), r&&(hasFrozenRows&&!options.frozenBottom?$viewportBottomL[0].scrollTop=scrollTop:$viewportTopL[0].scrollTop=scrollTop), i<viewportH)scrollTo(scrollTop+offset);else{var l=offset;page=h==viewportH?0:Math.min(n-1,Math.floor(scrollTop*((th-viewportH)/(h-viewportH))*(1/ph))), offset=Math.round(page*cj), l!=offset&&invalidateAllRows();}return(s||i)&&(h_render&&clearTimeout(h_render), (Math.abs(lastRenderedScrollTop-scrollTop)>20||Math.abs(lastRenderedScrollLeft-scrollLeft)>20)&&(options.forceSyncScrolling||Math.abs(lastRenderedScrollTop-scrollTop)<viewportH&&Math.abs(lastRenderedScrollLeft-scrollLeft)<viewportW?render():h_render=setTimeout(render,50), trigger(self.onViewportChanged,{}))), trigger(self.onScroll,{scrollLeft:scrollLeft,scrollTop:scrollTop}), !(!s&&!i)}function asyncPostProcessRows(){for(var e=getDataLength();postProcessFromRow<=postProcessToRow;){var t=vScrollDir>=0?postProcessFromRow++:postProcessToRow--,o=rowsCache[t];if(o&&!(t>=e)){postProcessedRows[t]||(postProcessedRows[t]={}), ensureCellNodesInRowsCache(t);for(var n in o.cellNodesByColumnIdx)if(o.cellNodesByColumnIdx.hasOwnProperty(n)){n|=0;var r=columns[n];if(r.asyncPostRender&&!postProcessedRows[t][n]){var i=o.cellNodesByColumnIdx[n];i&&r.asyncPostRender(i,t,getDataItem(t),r), postProcessedRows[t][n]=!0;}}return void(h_postrender=setTimeout(asyncPostProcessRows,options.asyncPostRenderDelay))}}}function updateCellCssStylesOnRenderedRows(e,t){var o,n,r,i;for(var s in rowsCache){if(i=t&&t[s], r=e&&e[s], i)for(n in i)r&&i[n]==r[n]||(o=getCellNode(s,getColumnIndex(n)), o&&(0, _jquery2.default)(o).removeClass(i[n]));if(r)for(n in r)i&&i[n]==r[n]||(o=getCellNode(s,getColumnIndex(n)), o&&(0, _jquery2.default)(o).addClass(r[n]));}}function addCellCssStyles(e,t){if(cellCssClasses[e])throw"addCellCssStyles: cell CSS hash with key '"+e+"' already exists.";cellCssClasses[e]=t, updateCellCssStylesOnRenderedRows(t,null), trigger(self.onCellCssStylesChanged,{key:e,hash:t});}function removeCellCssStyles(e){cellCssClasses[e]&&(updateCellCssStylesOnRenderedRows(null,cellCssClasses[e]), delete cellCssClasses[e], trigger(self.onCellCssStylesChanged,{key:e,hash:null}));}function setCellCssStyles(e,t){var o=cellCssClasses[e];cellCssClasses[e]=t, updateCellCssStylesOnRenderedRows(t,o), trigger(self.onCellCssStylesChanged,{key:e,hash:t});}function getCellCssStyles(e){return cellCssClasses[e]}function flashCell(e,t,o){if(o=o||100, rowsCache[e]){var n=function e(t){t&&setTimeout(function(){r.queue(function(){r.toggleClass(options.cellFlashingCssClass).dequeue(), e(t-1);});},o);},r=(0, _jquery2.default)(getCellNode(e,t));n(4);}}function handleDragStart(e){var t=_jquery2.default.Event(e.originalEvent.type,e.originalEvent),o=getCellFromEvent(t);if(!o||!cellExists(o.row,o.cell))return!1;var n=trigger(self.onDragStart,e,t);return!!t.isImmediatePropagationStopped()&&n}function handleDrag(e){var t=_jquery2.default.Event(e.originalEvent.type,e.originalEvent);return trigger(self.onDrag,e,t)}function handleDragEnd(e){trigger(self.onDragEnd,e,_jquery2.default.Event("mousedown"));}function handleKeyDown(e){trigger(self.onKeyDown,{row:activeRow,cell:activeCell},e);var t=e.isImmediatePropagationStopped();if(!t)if(e.shiftKey||e.altKey||e.ctrlKey)9!=e.which||!e.shiftKey||e.ctrlKey||e.altKey||(t=navigatePrev());else if(27==e.which){if(!getEditorLock().isActive())return;cancelEditAndSetFocus();}else 34==e.which?(navigatePageDown(), t=!0):33==e.which?(navigatePageUp(), t=!0):37==e.which?t=navigateLeft():39==e.which?t=navigateRight():38==e.which?t=navigateUp():40==e.which?t=navigateDown():9==e.which?t=navigateNext():13==e.which&&(options.editable&&(currentEditor?activeRow===getDataLength()?navigateDown():commitEditAndSetFocus():getEditorLock().commitCurrentEdit()&&makeActiveCellEditable()), t=!0);if(t){e.stopPropagation(), e.preventDefault();try{e.originalEvent.keyCode=0;}catch(e){}}}function handleClick(e){currentEditor||(e.target!=document.activeElement||(0, _jquery2.default)(e.target).hasClass("slick-cell"))&&setFocus();var t=getCellFromEvent(e);!t||null!==currentEditor&&activeRow==t.row&&activeCell==t.cell||(trigger(self.onClick,{row:t.row,cell:t.cell},e), e.isImmediatePropagationStopped()||activeCell==t.cell&&activeRow==t.row||!canCellBeActive(t.row,t.cell)||getEditorLock().isActive()&&!getEditorLock().commitCurrentEdit()||(scrollRowIntoView(t.row,!1), setActiveCellInternal(getCellNode(t.row,t.cell))));}function handleContextMenu(e){var t=(0, _jquery2.default)(e.target).closest(".slick-cell",$canvas);0!==t.length&&(activeCellNode===t[0]&&null!==currentEditor||trigger(self.onContextMenu,{},e));}function handleDblClick(e){var t=getCellFromEvent(e);!t||null!==currentEditor&&activeRow==t.row&&activeCell==t.cell||(trigger(self.onDblClick,{row:t.row,cell:t.cell},e), e.isImmediatePropagationStopped()||options.editable&&gotoCell(t.row,t.cell,!0));}function handleHeaderMouseEnter(e){trigger(self.onHeaderMouseEnter,{column:(0, _jquery2.default)(this).data("column")},e);}function handleHeaderMouseLeave(e){trigger(self.onHeaderMouseLeave,{column:(0, _jquery2.default)(this).data("column")},e);}function handleHeaderContextMenu(e){var t=(0, _jquery2.default)(e.target).closest(".slick-header-column",".slick-header-columns"),o=t&&t.data("column");trigger(self.onHeaderContextMenu,{column:o},e);}function handleHeaderClick(e){var t=(0, _jquery2.default)(e.target).closest(".slick-header-column",".slick-header-columns"),o=t&&t.data("column");o&&trigger(self.onHeaderClick,{column:o},e);}function handleMouseEnter(e){trigger(self.onMouseEnter,{},e);}function handleMouseLeave(e){trigger(self.onMouseLeave,{},e);}function cellExists(e,t){return!(e<0||e>=getDataLength()||t<0||t>=columns.length)}function getCellFromPoint(e,t){for(var o=getRowFromPosition(t),n=0,r=0,i=0;i<columns.length&&r<e;i++)r+=columns[i].width, n++;return n<0&&(n=0), {row:o,cell:n-1}}function getCellFromNode(e){var t=/l\d+/.exec(e.className);if(!t)throw"getCellFromNode: cannot get cell - "+e.className;return parseInt(t[0].substr(1,t[0].length-1),10)}function getRowFromNode(e){for(var t in rowsCache)for(var o in rowsCache[t].rowNode)if(rowsCache[t].rowNode[o]===e)return 0|t;return null}function getFrozenRowOffset(e){var t=hasFrozenRows?options.frozenBottom?e>=actualFrozenRow?h<viewportTopH?actualFrozenRow*options.rowHeight:h:0:e>=actualFrozenRow?frozenRowsHeight:0:0;return t}function getCellFromEvent(e){var t,o,n=(0, _jquery2.default)(e.target).closest(".slick-cell",$canvas);if(!n.length)return null;if(t=getRowFromNode(n[0].parentNode), hasFrozenRows){var r=n.parents(".grid-canvas").offset(),i=0,s=n.parents(".grid-canvas-bottom").length;s&&(i=options.frozenBottom?$canvasTopL.height():frozenRowsHeight), t=getCellFromPoint(e.clientX-r.left,e.clientY-r.top+i+(0, _jquery2.default)(document).scrollTop()).row;}return o=getCellFromNode(n[0]), null==t||null==o?null:{row:t,cell:o}}function getCellNodeBox(e,t){if(!cellExists(e,t))return null;for(var o=getFrozenRowOffset(e),n=getRowTop(e)-o,r=n+options.rowHeight-1,i=0,s=0;s<t;s++)i+=columns[s].width, options.frozenColumn==s&&(i=0);var l=i+columns[t].width;return{top:n,left:i,bottom:r,right:l}}function resetActiveCell(){setActiveCellInternal(null,!1);}function setFocus(){tabbingDirection==-1?$focusSink[0].focus():$focusSink2[0].focus();}function scrollCellIntoView(e,t,o){if(!(t<=options.frozenColumn)){e<actualFrozenRow&&scrollRowIntoView(e,o);var n=getColspan(e,t),r=columnPosLeft[t],i=columnPosRight[t+(n>1?n-1:0)],s=scrollLeft+$viewportScrollContainerX.width();r<scrollLeft?($viewportScrollContainerX.scrollLeft(r), handleScroll(), render()):i>s&&($viewportScrollContainerX.scrollLeft(Math.min(r,i-$viewportScrollContainerX[0].clientWidth)), handleScroll(), render());}}function setActiveCellInternal(e,t){null!==activeCellNode&&(makeActiveCellNormal(), (0, _jquery2.default)(activeCellNode).removeClass("active"), rowsCache[activeRow]&&(0, _jquery2.default)(rowsCache[activeRow].rowNode).removeClass("active"));var o=activeCellNode!==e;if(activeCellNode=e, null!=activeCellNode){var n=(0, _jquery2.default)(activeCellNode),r=n.offset(),i=Math.floor(n.parents(".grid-canvas").offset().top),s=n.parents(".grid-canvas-bottom").length;hasFrozenRows&&s&&(i-=options.frozenBottom?$canvasTopL.height():frozenRowsHeight);var l=getCellFromPoint(r.left,Math.ceil(r.top)-i);activeRow=l.row, activeCell=activePosX=activeCell=activePosX=getCellFromNode(activeCellNode[0]), n.addClass("active"), rowsCache[activeRow]&&(0, _jquery2.default)(rowsCache[activeRow].rowNode).addClass("active"), null==t&&(t=activeRow==getDataLength()||options.autoEdit), options.editable&&t&&isCellPotentiallyEditable(activeRow,activeCell)&&(clearTimeout(h_editorLoader), options.asyncEditorLoading?h_editorLoader=setTimeout(function(){makeActiveCellEditable();},options.asyncEditorLoadDelay):makeActiveCellEditable());}else activeRow=activeCell=null;o&&(setTimeout(scrollActiveCellIntoView,50), trigger(self.onActiveCellChanged,getActiveCell()));}function clearTextSelection(){if(document.selection&&document.selection.empty)try{document.selection.empty();}catch(e){}else if(window.getSelection){var e=window.getSelection();e&&e.removeAllRanges&&e.removeAllRanges();}}function isCellPotentiallyEditable(e,t){var o=getDataLength();return!(e<o&&!getDataItem(e))&&(!(columns[t].cannotTriggerInsert&&e>=o)&&!!getEditor(e,t))}function makeActiveCellNormal(){if(currentEditor){if(trigger(self.onBeforeCellEditorDestroy,{editor:currentEditor}), currentEditor.destroy(), currentEditor=null, activeCellNode){var e=getDataItem(activeRow);if((0, _jquery2.default)(activeCellNode).removeClass("editable invalid"), e){var t=columns[activeCell];activeCellNode[0].innerHTML=callFormatter(activeRow,activeCell,getDataItemValueForColumn(e,t),t,e), invalidatePostProcessingResults(activeRow);}}navigator.userAgent.toLowerCase().match(/msie/)&&clearTextSelection(), getEditorLock().deactivate(editController);}}function makeActiveCellEditable(e){if(activeCellNode){if(!options.editable)throw"Grid : makeActiveCellEditable : should never get called when options.editable is false";if(clearTimeout(h_editorLoader), isCellPotentiallyEditable(activeRow,activeCell)){var t=columns[activeCell],o=getDataItem(activeRow);if(trigger(self.onBeforeEditCell,{row:activeRow,cell:activeCell,item:o,column:t})===!1)return void setFocus();getEditorLock().activate(editController), (0, _jquery2.default)(activeCellNode).addClass("editable"), e||(activeCellNode[0].innerHTML=""), currentEditor=new(e||getEditor(activeRow,activeCell))({grid:self,gridPosition:absBox($container[0]),position:absBox(activeCellNode[0]),container:activeCellNode,column:t,item:o||{},commitChanges:commitEditAndSetFocus,cancelChanges:cancelEditAndSetFocus}), o&&currentEditor.loadValue(o), serializedEditorValue=currentEditor.serializeValue(), currentEditor.position&&handleActiveCellPositionChange();}}}function commitEditAndSetFocus(){getEditorLock().commitCurrentEdit()&&(setFocus(), options.autoEdit&&navigateDown());}function cancelEditAndSetFocus(){getEditorLock().cancelCurrentEdit()&&setFocus();}function absBox(e){var t={top:e.offsetTop,left:e.offsetLeft,bottom:0,right:0,width:(0, _jquery2.default)(e).outerWidth(),height:(0, _jquery2.default)(e).outerHeight(),visible:!0};t.bottom=t.top+t.height, t.right=t.left+t.width;for(var o=e.offsetParent;(e=e.parentNode)!=document.body;)t.visible&&e.scrollHeight!=e.offsetHeight&&"visible"!=(0, _jquery2.default)(e).css("overflowY")&&(t.visible=t.bottom>e.scrollTop&&t.top<e.scrollTop+e.clientHeight), t.visible&&e.scrollWidth!=e.offsetWidth&&"visible"!=(0, _jquery2.default)(e).css("overflowX")&&(t.visible=t.right>e.scrollLeft&&t.left<e.scrollLeft+e.clientWidth), t.left-=e.scrollLeft, t.top-=e.scrollTop, e===o&&(t.left+=e.offsetLeft, t.top+=e.offsetTop, o=e.offsetParent), t.bottom=t.top+t.height, t.right=t.left+t.width;return t}function getActiveCellPosition(){return absBox(activeCellNode[0])}function getGridPosition(){return absBox($container[0])}function handleActiveCellPositionChange(){if(activeCellNode&&(trigger(self.onActiveCellPositionChanged,{}), currentEditor)){var e=getActiveCellPosition();currentEditor.show&&currentEditor.hide&&(e.visible?currentEditor.show():currentEditor.hide()), currentEditor.position&&currentEditor.position(e);}}function getCellEditor(){return currentEditor}function getActiveCell(){return activeCellNode?{row:activeRow,cell:activeCell}:null}function getActiveCellNode(){return activeCellNode}function scrollActiveCellIntoView(){null!=activeRow&&null!=activeCell&&scrollCellIntoView(activeRow,activeCell);}function scrollRowIntoView(e,t){if(!hasFrozenRows||!options.frozenBottom&&e>actualFrozenRow-1||options.frozenBottom&&e<actualFrozenRow-1){var o=$viewportScrollContainerY.height(),n=e*options.rowHeight,r=(e+1)*options.rowHeight-o+(viewportHasHScroll?scrollbarDimensions.height:0);(e+1)*options.rowHeight>scrollTop+o+offset?(scrollTo(t?n:r), render()):e*options.rowHeight<scrollTop+offset&&(scrollTo(t?r:n), render());}}function scrollRowToTop(e){scrollTo(e*options.rowHeight), render();}function scrollPage(e){var t=e*numVisibleRows;if(scrollTo((getRowFromPosition(scrollTop)+t)*options.rowHeight), render(), options.enableCellNavigation&&null!=activeRow){var o=activeRow+t,n=getDataLengthIncludingAddNew();o>=n&&(o=n-1), o<0&&(o=0);for(var r=0,i=null,s=activePosX;r<=activePosX;)canCellBeActive(o,r)&&(i=r), r+=getColspan(o,r);null!==i?(setActiveCellInternal(getCellNode(o,i)), activePosX=s):resetActiveCell();}}function navigatePageDown(){scrollPage(1);}function navigatePageUp(){scrollPage(-1);}function getColspan(e,t){var o=data.getItemMetadata&&data.getItemMetadata(e);if(!o||!o.columns)return 1;var n=columns[t]&&(o.columns[columns[t].id]||o.columns[t]),r=n&&n.colspan;return r="*"===r?columns.length-t:r||1}function findFirstFocusableCell(e){for(var t=0;t<columns.length;){if(canCellBeActive(e,t))return t;t+=getColspan(e,t);}return null}function findLastFocusableCell(e){for(var t=0,o=null;t<columns.length;)canCellBeActive(e,t)&&(o=t), t+=getColspan(e,t);return o}function gotoRight(e,t,o){if(t>=columns.length)return null;do t+=getColspan(e,t);while(t<columns.length&&!canCellBeActive(e,t));return t<columns.length?{row:e,cell:t,posX:t}:null}function gotoLeft(e,t,o){if(t<=0)return null;var n=findFirstFocusableCell(e);if(null===n||n>=t)return null;for(var r,i={row:e,cell:n,posX:n};;){if(r=gotoRight(i.row,i.cell,i.posX), !r)return null;if(r.cell>=t)return i;i=r;}}function gotoDown(e,t,o){for(var n,r=getDataLengthIncludingAddNew();;){if(++e>=r)return null;for(n=t=0;t<=o;)n=t, t+=getColspan(e,t);if(canCellBeActive(e,n))return{row:e,cell:n,posX:o}}}function gotoUp(e,t,o){for(var n;;){if(--e<0)return null;for(n=t=0;t<=o;)n=t, t+=getColspan(e,t);if(canCellBeActive(e,n))return{row:e,cell:n,posX:o}}}function gotoNext(e,t,o){if(null==e&&null==t&&(e=t=o=0, canCellBeActive(e,t)))return{row:e,cell:t,posX:t};var n=gotoRight(e,t,o);if(n)return n;for(var r=null,i=getDataLengthIncludingAddNew();++e<i;)if(r=findFirstFocusableCell(e), null!==r)return{row:e,cell:r,posX:r};return null}function gotoPrev(e,t,o){if(null==e&&null==t&&(e=getDataLengthIncludingAddNew()-1, t=o=columns.length-1, canCellBeActive(e,t)))return{row:e,cell:t,posX:t};for(var n,r;!n&&!(n=gotoLeft(e,t,o));){if(--e<0)return null;t=0, r=findLastFocusableCell(e), null!==r&&(n={row:e,cell:r,posX:r});}return n}function navigateRight(){return navigate("right")}function navigateLeft(){return navigate("left")}function navigateDown(){return navigate("down")}function navigateUp(){return navigate("up")}function navigateNext(){return navigate("next")}function navigatePrev(){return navigate("prev")}function navigate(e){if(!options.enableCellNavigation)return!1;if(!activeCellNode&&"prev"!=e&&"next"!=e)return!1;if(!getEditorLock().commitCurrentEdit())return!0;setFocus();var t={up:-1,down:1,left:-1,right:1,prev:-1,next:1};tabbingDirection=t[e];var o={up:gotoUp,down:gotoDown,left:gotoLeft,right:gotoRight,prev:gotoPrev,next:gotoNext},n=o[e],r=n(activeRow,activeCell,activePosX);if(r){if(hasFrozenRows&&options.frozenBottom&r.row==getDataLength())return;var i=r.row==getDataLength();return(!options.frozenBottom&&r.row>=actualFrozenRow||options.frozenBottom&&r.row<actualFrozenRow)&&scrollCellIntoView(r.row,r.cell,!i), setActiveCellInternal(getCellNode(r.row,r.cell)), activePosX=r.posX, !0}return setActiveCellInternal(getCellNode(activeRow,activeCell)), !1}function getCellNode(e,t){return rowsCache[e]?(ensureCellNodesInRowsCache(e), rowsCache[e].cellNodesByColumnIdx[t]):null}function setActiveCell(e,t){initialized&&(e>getDataLength()||e<0||t>=columns.length||t<0||options.enableCellNavigation&&(scrollCellIntoView(e,t,!1), setActiveCellInternal(getCellNode(e,t),!1)));}function canCellBeActive(e,t){if(!options.enableCellNavigation||e>=getDataLengthIncludingAddNew()||e<0||t>=columns.length||t<0)return!1;var o=data.getItemMetadata&&data.getItemMetadata(e);if(o&&"boolean"==typeof o.focusable)return o.focusable;var n=o&&o.columns;return n&&columns[t]&&n[columns[t].id]&&"boolean"==typeof n[columns[t].id].focusable?n[columns[t].id].focusable:n&&n[t]&&"boolean"==typeof n[t].focusable?n[t].focusable:columns[t]&&columns[t].focusable}function canCellBeSelected(e,t){if(e>=getDataLength()||e<0||t>=columns.length||t<0)return!1;var o=data.getItemMetadata&&data.getItemMetadata(e);if(o&&"boolean"==typeof o.selectable)return o.selectable;var n=o&&o.columns&&(o.columns[columns[t].id]||o.columns[t]);return n&&"boolean"==typeof n.selectable?n.selectable:columns[t].selectable}function gotoCell(e,t,o){if(initialized&&canCellBeActive(e,t)&&getEditorLock().commitCurrentEdit()){scrollCellIntoView(e,t,!1);var n=getCellNode(e,t);setActiveCellInternal(n,o||e===getDataLength()||options.autoEdit), currentEditor||setFocus();}}function commitCurrentEdit(){var e=getDataItem(activeRow),t=columns[activeCell];if(currentEditor){if(currentEditor.isValueChanged()){var o=currentEditor.validate();if(o.valid){if(activeRow<getDataLength()){var n={row:activeRow,cell:activeCell,editor:currentEditor,serializedValue:currentEditor.serializeValue(),prevSerializedValue:serializedEditorValue,execute:function(){this.editor.applyValue(e,this.serializedValue), updateRow(this.row), trigger(self.onCellChange,{row:activeRow,cell:activeCell,item:e});},undo:function(){this.editor.applyValue(e,this.prevSerializedValue), updateRow(this.row), trigger(self.onCellChange,{row:activeRow,cell:activeCell,item:e});}};options.editCommandHandler?(makeActiveCellNormal(), options.editCommandHandler(e,t,n)):(n.execute(), makeActiveCellNormal());}else{var r={};currentEditor.applyValue(r,currentEditor.serializeValue()), makeActiveCellNormal(), trigger(self.onAddNewRow,{item:r,column:t});}return!getEditorLock().isActive()}return(0, _jquery2.default)(activeCellNode).removeClass("invalid"), (0, _jquery2.default)(activeCellNode).width(), (0, _jquery2.default)(activeCellNode).addClass("invalid"), trigger(self.onValidationError,{editor:currentEditor,cellNode:activeCellNode,validationResults:o,row:activeRow,cell:activeCell,column:t}), currentEditor.focus(), !1}makeActiveCellNormal();}return!0}function cancelCurrentEdit(){return makeActiveCellNormal(), !0}function rowsToRanges(e){for(var t=[],o=columns.length-1,n=0;n<e.length;n++)t.push(new _slick2.default.Range(e[n],0,e[n],o));
return t}function getSelectedRows(){if(!selectionModel)throw"Selection model is not set";return selectedRows}function setSelectedRows(e){if(!selectionModel)throw"Selection model is not set";selectionModel.setSelectedRanges(rowsToRanges(e));}var defaults={explicitInitialization:!1,rowHeight:25,defaultColumnWidth:80,enableAddRow:!1,leaveSpaceForNewRows:!1,editable:!1,autoEdit:!0,enableCellNavigation:!0,enableColumnReorder:!0,asyncEditorLoading:!1,asyncEditorLoadDelay:100,forceFitColumns:!1,enableAsyncPostRender:!1,asyncPostRenderDelay:50,autoHeight:!1,editorLock:_slick2.default.GlobalEditorLock,showHeaderRow:!1,headerRowHeight:25,showFooterRow:!1,footerRowHeight:25,showTopPanel:!1,topPanelHeight:25,formatterFactory:null,editorFactory:null,cellFlashingCssClass:"flashing",selectedCellCssClass:"selected",multiSelect:!0,enableTextSelectionOnCells:!1,dataItemColumnValueExtractor:null,frozenBottom:!1,frozenColumn:-1,frozenRow:-1,fullWidthRows:!1,multiColumnSort:!1,defaultFormatter:defaultFormatter,forceSyncScrolling:!1,addNewRowCssClass:"new-row"},columnDefaults={name:"",resizable:!0,sortable:!1,minWidth:30,rerenderOnResize:!1,headerCssClass:null,defaultSortAsc:!0,focusable:!0,selectable:!0},th,h,ph,n,cj,page=0,offset=0,vScrollDir=1,initialized=!1,$container,uid="slickgrid_"+Math.round(1e6*Math.random()),self=this,$focusSink,$focusSink2,$groupHeaders=(0, _jquery2.default)(),$headerScroller,$headers,$headerRow,$headerRowScroller,$headerRowSpacerL,$headerRowSpacerR,$footerRow,$footerRowScroller,$footerRowSpacerL,$footerRowSpacerR,$topPanelScroller,$topPanel,$viewport,$canvas,$style,$boundAncestors,treeColumns,stylesheet,columnCssRulesL,columnCssRulesR,viewportH,viewportW,canvasWidth,canvasWidthL,canvasWidthR,headersWidth,headersWidthL,headersWidthR,viewportHasHScroll,viewportHasVScroll,headerColumnWidthDiff=0,headerColumnHeightDiff=0,cellWidthDiff=0,cellHeightDiff=0,absoluteColumnMinWidth,hasFrozenRows=!1,frozenRowsHeight=0,actualFrozenRow=-1,paneTopH=0,paneBottomH=0,viewportTopH=0,viewportBottomH=0,topPanelH=0,headerRowH=0,footerRowH=0,tabbingDirection=1,$activeCanvasNode,$activeViewportNode,activePosX,activeRow,activeCell,activeCellNode=null,currentEditor=null,serializedEditorValue,editController,rowsCache={},renderedRows=0,numVisibleRows=0,prevScrollTop=0,scrollTop=0,lastRenderedScrollTop=0,lastRenderedScrollLeft=0,prevScrollLeft=0,scrollLeft=0,selectionModel,selectedRows=[],plugins=[],cellCssClasses={},columnsById={},sortColumns=[],columnPosLeft=[],columnPosRight=[],h_editorLoader=null,h_render=null,h_postrender=null,postProcessedRows={},postProcessToRow=null,postProcessFromRow=null,counter_rows_rendered=0,counter_rows_removed=0,rowNodeFromLastMouseWheelEvent,zombieRowNodeFromLastMouseWheelEvent,$paneHeaderL,$paneHeaderR,$paneTopL,$paneTopR,$paneBottomL,$paneBottomR,$headerScrollerL,$headerScrollerR,$headerL,$headerR,$groupHeadersL,$groupHeadersR,$headerRowScrollerL,$headerRowScrollerR,$footerRowScrollerL,$footerRowScrollerR,$headerRowL,$headerRowR,$footerRowL,$footerRowR,$topPanelScrollerL,$topPanelScrollerR,$topPanelL,$topPanelR,$viewportTopL,$viewportTopR,$viewportBottomL,$viewportBottomR,$canvasTopL,$canvasTopR,$canvasBottomL,$canvasBottomR,$viewportScrollContainerX,$viewportScrollContainerY,$headerScrollContainer,$headerRowScrollContainer,$footerRowScrollContainer;this.debug=function(){var e="";e+="\ncounter_rows_rendered:  "+counter_rows_rendered, e+="\ncounter_rows_removed:  "+counter_rows_removed, e+="\nrenderedRows:  "+renderedRows, e+="\nnumVisibleRows:  "+numVisibleRows, e+="\nmaxSupportedCssHeight:  "+maxSupportedCssHeight, e+="\nn(umber of pages):  "+n, e+="\n(current) page:  "+page, e+="\npage height (ph):  "+ph, e+="\nvScrollDir:  "+vScrollDir, alert(e);}, this.eval=function(expr){return eval(expr)}, _jquery2.default.extend(this,{slickGridVersion:"2.1",onScroll:new _slick2.default.Event,onSort:new _slick2.default.Event,onHeaderMouseEnter:new _slick2.default.Event,onHeaderMouseLeave:new _slick2.default.Event,onHeaderContextMenu:new _slick2.default.Event,onHeaderClick:new _slick2.default.Event,onHeaderCellRendered:new _slick2.default.Event,onBeforeHeaderCellDestroy:new _slick2.default.Event,onHeaderRowCellRendered:new _slick2.default.Event,onFooterRowCellRendered:new _slick2.default.Event,onBeforeHeaderRowCellDestroy:new _slick2.default.Event,onBeforeFooterRowCellDestroy:new _slick2.default.Event,onMouseEnter:new _slick2.default.Event,onMouseLeave:new _slick2.default.Event,onClick:new _slick2.default.Event,onDblClick:new _slick2.default.Event,onContextMenu:new _slick2.default.Event,onKeyDown:new _slick2.default.Event,onAddNewRow:new _slick2.default.Event,onValidationError:new _slick2.default.Event,onViewportChanged:new _slick2.default.Event,onColumnsReordered:new _slick2.default.Event,onColumnsResized:new _slick2.default.Event,onCellChange:new _slick2.default.Event,onBeforeEditCell:new _slick2.default.Event,onBeforeCellEditorDestroy:new _slick2.default.Event,onBeforeDestroy:new _slick2.default.Event,onActiveCellChanged:new _slick2.default.Event,onActiveCellPositionChanged:new _slick2.default.Event,onDragInit:new _slick2.default.Event,onDragStart:new _slick2.default.Event,onDrag:new _slick2.default.Event,onDragEnd:new _slick2.default.Event,onSelectedRowsChanged:new _slick2.default.Event,onCellCssStylesChanged:new _slick2.default.Event,registerPlugin:registerPlugin,unregisterPlugin:unregisterPlugin,getColumns:getColumns,setColumns:setColumns,getColumnIndex:getColumnIndex,updateColumnHeader:updateColumnHeader,setSortColumn:setSortColumn,setSortColumns:setSortColumns,getSortColumns:getSortColumns,autosizeColumns:autosizeColumns,getOptions:getOptions,setOptions:setOptions,getData:getData,getDataLength:getDataLength,getDataItem:getDataItem,setData:setData,getSelectionModel:getSelectionModel,setSelectionModel:setSelectionModel,getSelectedRows:getSelectedRows,setSelectedRows:setSelectedRows,getContainerNode:getContainerNode,render:render,invalidate:invalidate,invalidateRow:invalidateRow,invalidateRows:invalidateRows,invalidateAllRows:invalidateAllRows,updateCell:updateCell,updateRow:updateRow,getViewport:getVisibleRange,getRenderedRange:getRenderedRange,resizeCanvas:resizeCanvas,updateRowCount:updateRowCount,scrollRowIntoView:scrollRowIntoView,scrollRowToTop:scrollRowToTop,scrollCellIntoView:scrollCellIntoView,getCanvasNode:getCanvasNode,getCanvases:getCanvases,getActiveCanvasNode:getActiveCanvasNode,setActiveCanvasNode:setActiveCanvasNode,getViewportNode:getViewportNode,getActiveViewportNode:getActiveViewportNode,setActiveViewportNode:setActiveViewportNode,focus:setFocus,getCellFromPoint:getCellFromPoint,getCellFromEvent:getCellFromEvent,getActiveCell:getActiveCell,setActiveCell:setActiveCell,getActiveCellNode:getActiveCellNode,getActiveCellPosition:getActiveCellPosition,resetActiveCell:resetActiveCell,editActiveCell:makeActiveCellEditable,getCellEditor:getCellEditor,getCellNode:getCellNode,getCellNodeBox:getCellNodeBox,canCellBeSelected:canCellBeSelected,canCellBeActive:canCellBeActive,navigatePrev:navigatePrev,navigateNext:navigateNext,navigateUp:navigateUp,navigateDown:navigateDown,navigateLeft:navigateLeft,navigateRight:navigateRight,navigatePageUp:navigatePageUp,navigatePageDown:navigatePageDown,gotoCell:gotoCell,getTopPanel:getTopPanel,setTopPanelVisibility:setTopPanelVisibility,setHeaderRowVisibility:setHeaderRowVisibility,getHeaderRow:getHeaderRow,getHeaderRowColumn:getHeaderRowColumn,setFooterRowVisibility:setFooterRowVisibility,getFooterRow:getFooterRow,getFooterRowColumn:getFooterRowColumn,getGridPosition:getGridPosition,flashCell:flashCell,addCellCssStyles:addCellCssStyles,setCellCssStyles:setCellCssStyles,removeCellCssStyles:removeCellCssStyles,getCellCssStyles:getCellCssStyles,getFrozenRowOffset:getFrozenRowOffset,init:finishInitialization,destroy:destroy,getEditorLock:getEditorLock,getEditController:getEditController}), init();}Object.defineProperty(exports,"__esModule",{value:!0});var _jquery=__webpack_require__(2),_jquery2=_interopRequireDefault(_jquery),_interact=__webpack_require__(5),_interact2=_interopRequireDefault(_interact),_slick=__webpack_require__(1),_slick2=_interopRequireDefault(_slick);_slick2.default.FrozenGrid=SlickGrid, exports.default=SlickGrid;var scrollbarDimensions,maxSupportedCssHeight;},function(e,t,o){function n(e){return e&&e.__esModule?e:{default:e}}function r(e){function t(){fe=!0;}function o(){fe=!1, oe();}function n(e){we=e;}function r(e){Re=e;}function i(e){e=e||0;for(var t=void 0,o=e,n=ae.length;o<n;o++){if(t=ae[o][le], void 0===t)throw"Each data element must implement a unique 'id' property";de[t]=o;}}function s(){for(var e=void 0,t=0,o=ae.length;t<o;t++)if(e=ae[t][le], void 0===e||de[e]!==t)throw"Each data element must implement a unique 'id' property"}function l(){return ae}function a(e,t){void 0!==t&&(le=t), ae=ye=e, de={}, i(), s(), oe();}function c(e){void 0!=e.pageSize&&(ke=e.pageSize, De=ke?Math.min(De,Math.max(0,Math.ceil(ze/ke)-1)):0), void 0!=e.pageNum&&(De=Math.min(e.pageNum,Math.max(0,Math.ceil(ze/ke)-1))), Me.notify(u(),null,ie), oe();}function u(){var e=ke?Math.max(1,Math.ceil(ze/ke)):1;return{pageSize:ke,pageNum:De,totalRows:ze,totalPages:e,dataView:ie}}function p(e,t){ge=t, me=e, ve=null, t===!1&&ae.reverse(), ae.sort(e), t===!1&&ae.reverse(), de={}, i(), oe();}function f(e,t){ge=t, ve=e, me=null;var o=Object.prototype.toString;Object.prototype.toString="function"==typeof e?e:function(){return this[e]}, t===!1&&ae.reverse(), ae.sort(), Object.prototype.toString=o, t===!1&&ae.reverse(), de={}, i(), oe();}function g(){me?p(me,ge):ve&&f(ve,ge);}function v(t){he=t, e.inlineFilters&&(be=K(), Se=U()), oe();}function m(){return _e}function w(t){e.groupItemMetadataProvider||(e.groupItemMetadataProvider=GroupItemMetadataProvider()), $e=[], Pe=[], t=t||[], _e=t instanceof Array?t:[t];for(var o=0;o<_e.length;o++){var n=_e[o]=h.default.extend(!0,{},Ee,_e[o]);n.getterIsAFn="function"==typeof n.getter, n.compiledAccumulators=[];for(var r=n.aggregators.length;r--;)n.compiledAccumulators[r]=G(n.aggregators[r]);Pe[o]={};}oe();}function C(e,t,o){return null==e?void w([]):void w({getter:e,formatter:t,comparer:o})}function R(e,t){if(!_e.length)throw new Error("At least one grouping must be specified before calling setAggregators().");_e[0].aggregators=e, _e[0].aggregateCollapsed=t, w(_e);}function y(e){return ae[e]}function b(e){return de[e]}function S(){if(!ue){ue={};for(var e=0,t=ce.length;e<t;e++)ue[ce[e][le]]=e;}}function x(e){return S(), ue[e]}function E(e){return ae[de[e]]}function _(e){var t=[];S();for(var o=0,n=e.length;o<n;o++){var r=ue[e[o]];null!=r&&(t[t.length]=r);}return t}function $(e){for(var t=[],o=0,n=e.length;o<n;o++)e[o]<ce.length&&(t[t.length]=ce[e[o]][le]);return t}function P(e,t){if(void 0===de[e]||e!==t[le])throw"Invalid or non-matching id";ae[de[e]]=t, pe||(pe={}), pe[e]=!0, oe();}function T(e,t){ae.splice(e,0,t), i(e), oe();}function k(e){ae.push(e), i(ae.length-1), oe();}function D(e){var t=de[e];if(void 0===t)throw"Invalid id";delete de[e], ae.splice(t,1), i(t), oe();}function z(){return ce.length}function L(e){var t=ce[e];if(t&&t.__group&&t.totals&&!t.totals.initialized){var o=_e[t.level];o.displayTotalsRow||(B(t.totals), t.title=o.formatter?o.formatter(t):t.value);}else t&&t.__groupTotals&&!t.initialized&&B(t);return t}function F(t){var o=ce[t];return void 0===o?null:o.__group?e.groupItemMetadataProvider.getGroupRowMetadata(o):o.__groupTotals?e.groupItemMetadataProvider.getTotalsRowMetadata(o):null}function M(e,t){if(null==e)for(var o=0;o<_e.length;o++)Pe[o]={}, _e[o].collapsed=t;else Pe[e]={}, _e[e].collapsed=t;oe();}function H(e){M(e,!0);}function I(e){M(e,!1);}function A(e,t,o){Pe[e][t]=_e[e].collapsed^o, oe();}function N(e){var t=Array.prototype.slice.call(arguments),o=t[0];1==t.length&&o.indexOf(Te)!=-1?A(o.split(Te).length-1,o,!0):A(t.length-1,t.join(Te),!0);}function W(e){var t=Array.prototype.slice.call(arguments),o=t[0];1==t.length&&o.indexOf(Te)!=-1?A(o.split(Te).length-1,o,!1):A(t.length-1,t.join(Te),!1);}function j(){return $e}function q(e,t){for(var o=void 0,n=void 0,r=[],i={},s=void 0,l=t?t.level+1:0,a=_e[l],c=0,u=a.predefinedValues.length;c<u;c++)n=a.predefinedValues[c], o=i[n], o||(o=new d.default.Group, o.value=n, o.level=l, o.groupingKey=(t?t.groupingKey+Te:"")+n, r[r.length]=o, i[n]=o);for(var h=0,p=e.length;h<p;h++)s=e[h], n=a.getterIsAFn?a.getter(s):s[a.getter], o=i[n], o||(o=new d.default.Group, o.value=n, o.level=l, o.groupingKey=(t?t.groupingKey+Te:"")+n, r[r.length]=o, i[n]=o), o.rows[o.count++]=s;if(l<_e.length-1)for(var f=0;f<r.length;f++)o=r[f], o.groups=q(o.rows,o);return r.sort(_e[l].comparer), r}function B(e){var t=e.group,o=_e[t.level],n=t.level==_e.length,r=void 0,i=o.aggregators.length;if(!n&&o.aggregateChildGroups)for(var s=t.groups.length;s--;)t.groups[s].totals.initialized||B(t.groups[s].totals);for(;i--;)r=o.aggregators[i], r.init(), !n&&o.aggregateChildGroups?o.compiledAccumulators[i].call(r,t.groups):o.compiledAccumulators[i].call(r,t.rows), r.storeResult(e);e.initialized=!0;}function V(e){var t=_e[e.level],o=new d.default.GroupTotals;o.group=e, e.totals=o, t.lazyTotalsCalculation||B(o);}function O(e,t){t=t||0;for(var o=_e[t],n=o.collapsed,r=Pe[t],i=e.length,s=void 0;i--;)s=e[i], s.collapsed&&!o.aggregateCollapsed||(s.groups&&O(s.groups,t+1), o.aggregators.length&&(o.aggregateEmpty||s.rows.length||s.groups&&s.groups.length)&&V(s), s.collapsed=n^r[s.groupingKey], s.title=o.formatter?o.formatter(s):s.value);}function X(e,t){t=t||0;for(var o=_e[t],n=[],r=void 0,i=0,s=void 0,l=0,a=e.length;l<a;l++){if(s=e[l], n[i++]=s, !s.collapsed){r=s.groups?X(s.groups,t+1):s.rows;for(var c=0,d=r.length;c<d;c++)n[i++]=r[c];}s.totals&&o.displayTotalsRow&&(!s.collapsed||o.aggregateCollapsed)&&(n[i++]=s.totals);}return n}function Y(e){var t=/^function[^(]*\(([^)]*)\)\s*{([\s\S]*)}$/,o=e.toString().match(t);return{params:o[1].split(","),body:o[2]}}function G(e){var t=Y(e.accumulate),o=new Function("_items","for (let "+t.params[0]+", _i=0, _il=_items.length; _i<_il; _i++) {"+t.params[0]+" = _items[_i]; "+t.body+"}");return o.displayName="compiledAccumulatorLoop", o}function K(){var e=Y(he),t="{ continue _coreloop; }$1",o="{ _retval[_idx++] = $item$; continue _coreloop; }$1",n=e.body.replace(/return false\s*([;}]|\}|$)/gi,t).replace(/return!1([;}]|\}|$)/gi,t).replace(/return true\s*([;}]|\}|$)/gi,o).replace(/return!0([;}]|\}|$)/gi,o).replace(/return ([^;}]+?)\s*([;}]|$)/gi,"{ if ($1) { _retval[_idx++] = $item$; }; continue _coreloop; }$2"),r=["let _retval = [], _idx = 0; ","let $item$, $args$ = _args; ","_coreloop: ","for (let _i = 0, _il = _items.length; _i < _il; _i++) { ","$item$ = _items[_i]; ","$filter$; ","} ","return _retval; "].join("");r=r.replace(/\$filter\$/gi,n), r=r.replace(/\$item\$/gi,e.params[0]), r=r.replace(/\$args\$/gi,e.params[1]);var i=new Function("_items,_args",r);return i.displayName="compiledFilter", i}function U(){var e=Y(he),t="{ continue _coreloop; }$1",o="{ _cache[_i] = true;_retval[_idx++] = $item$; continue _coreloop; }$1",n=e.body.replace(/return false\s*([;}]|\}|$)/gi,t).replace(/return!1([;}]|\}|$)/gi,t).replace(/return true\s*([;}]|\}|$)/gi,o).replace(/return!0([;}]|\}|$)/gi,o).replace(/return ([^;}]+?)\s*([;}]|$)/gi,"{ if ((_cache[_i] = $1)) { _retval[_idx++] = $item$; }; continue _coreloop; }$2"),r=["let _retval = [], _idx = 0; ","let $item$, $args$ = _args; ","_coreloop: ","for (let _i = 0, _il = _items.length; _i < _il; _i++) { ","$item$ = _items[_i]; ","if (_cache[_i]) { ","_retval[_idx++] = $item$; ","continue _coreloop; ","} ","$filter$; ","} ","return _retval; "].join("");r=r.replace(/\$filter\$/gi,n), r=r.replace(/\$item\$/gi,e.params[0]), r=r.replace(/\$args\$/gi,e.params[1]);var i=new Function("_items,_args,_cache",r);return i.displayName="compiledFilterWithCaching", i}function Q(e,t){for(var o=[],n=0,r=0,i=e.length;r<i;r++)he(e[r],t)&&(o[n++]=e[r]);return o}function J(e,t,o){for(var n=[],r=0,i=void 0,s=0,l=e.length;s<l;s++)i=e[s], o[s]?n[r++]=i:he(i,t)&&(n[r++]=i, o[s]=!0);return n}function Z(t){if(he){var o=e.inlineFilters?be:Q,n=e.inlineFilters?Se:J;we.isFilterNarrowing?ye=o(ye,Re):we.isFilterExpanding?ye=n(t,Re,xe):we.isFilterUnchanged||(ye=o(t,Re));}else ye=ke?t:t.concat();var r=void 0;return ke?(ye.length<De*ke&&(De=Math.floor(ye.length/ke)), r=ye.slice(ke*De,ke*De+ke)):r=ye, {totalRows:ye.length,rows:r}}function ee(e,t){var o=void 0,n=void 0,r=void 0,i=[],s=0,l=t.length;we&&we.ignoreDiffsBefore&&(s=Math.max(0,Math.min(t.length,we.ignoreDiffsBefore))), we&&we.ignoreDiffsAfter&&(l=Math.min(t.length,Math.max(0,we.ignoreDiffsAfter)));for(var a=s,c=e.length;a<l;a++)a>=c?i[i.length]=a:(o=t[a], n=e[a], (_e.length&&(r=o.__nonDataRow||n.__nonDataRow)&&o.__group!==n.__group||o.__group&&!o.equals(n)||r&&(o.__groupTotals||n.__groupTotals)||o[le]!=n[le]||pe&&pe[o[le]])&&(i[i.length]=a));return i}function te(e){ue=null, we.isFilterNarrowing==Ce.isFilterNarrowing&&we.isFilterExpanding==Ce.isFilterExpanding||(xe=[]);var t=Z(e);ze=t.totalRows;var o=t.rows;$e=[], _e.length&&($e=q(o), $e.length&&(O($e), o=X($e)));var n=ee(ce,o);return ce=o, n}function oe(){if(!fe){var e=ce.length,t=ze,o=te(ae,he);ke&&ze<De*ke&&(De=Math.max(0,Math.ceil(ze/ke)-1), o=te(ae,he)), pe=null, Ce=we, we={}, t!==ze&&Me.notify(u(),null,ie), e!==ce.length&&Le.notify({previous:e,current:ce.length,dataView:ie},null,ie), o.length>0&&Fe.notify({rows:o,dataView:ie},null,ie);}}function ne(e,t,o){function n(t){l.join(",")!=t.join(",")&&(l=t, a.notify({grid:e,ids:l,dataView:i},new d.default.EventData,i));}function r(){if(l.length>0){s=!0;var o=i.mapIdsToRows(l);t||n(i.mapRowsToIds(o)), e.setSelectedRows(o), s=!1;}}var i=this,s=void 0,l=i.mapRowsToIds(e.getSelectedRows()),a=new d.default.Event;return e.onSelectedRowsChanged.subscribe(function(t,r){if(!s){var a=i.mapRowsToIds(e.getSelectedRows());if(o&&e.getOptions().multiSelect){var c=h.default.grep(l,function(e){return void 0===i.getRowById(e)});n(c.concat(a));}else n(a);}}), this.onRowsChanged.subscribe(r), this.onRowCountChanged.subscribe(r), a}function re(e,t){function o(e){r={};for(var t in e){var o=ce[t][le];r[o]=e[t];}}function n(){if(r){i=!0, S();var o={};for(var n in r){var s=ue[n];void 0!=s&&(o[s]=r[n]);}e.setCellCssStyles(t,o), i=!1;}}var r=void 0,i=void 0;o(e.getCellCssStyles(t)), e.onCellCssStylesChanged.subscribe(function(e,n){i||t==n.key&&n.hash&&o(n.hash);}), this.onRowsChanged.subscribe(n), this.onRowCountChanged.subscribe(n);}var ie=this,se={groupItemMetadataProvider:null,inlineFilters:!1},le="id",ae=[],ce=[],de={},ue=null,he=null,pe=null,fe=!1,ge=!0,ve=void 0,me=void 0,we={},Ce={},Re=void 0,ye=[],be=void 0,Se=void 0,xe=[],Ee={getter:null,formatter:null,comparer:function(e,t){return e.value===t.value?0:e.value>t.value?1:-1},predefinedValues:[],aggregators:[],aggregateEmpty:!1,aggregateCollapsed:!1,aggregateChildGroups:!1,collapsed:!1,displayTotalsRow:!0,lazyTotalsCalculation:!1},_e=[],$e=[],Pe=[],Te=":|:",ke=0,De=0,ze=0,Le=new d.default.Event,Fe=new d.default.Event,Me=new d.default.Event;e=h.default.extend(!0,{},se,e), h.default.extend(this,{beginUpdate:t,endUpdate:o,setPagingOptions:c,getPagingInfo:u,getItems:l,setItems:a,setFilter:v,sort:p,fastSort:f,reSort:g,setGrouping:w,getGrouping:m,groupBy:C,setAggregators:R,collapseAllGroups:H,expandAllGroups:I,collapseGroup:N,expandGroup:W,getGroups:j,getIdxById:b,getRowById:x,getItemById:E,getItemByIdx:y,mapRowsToIds:$,mapIdsToRows:_,setRefreshHints:n,setFilterArgs:r,refresh:oe,updateItem:P,insertItem:T,addItem:k,deleteItem:D,syncGridSelection:ne,syncGridCellCssStyles:re,getLength:z,getItem:L,getItemMetadata:F,onRowCountChanged:Le,onRowsChanged:Fe,onPagingInfoChanged:Me});}function i(e){this.field_=e, this.init=function(){this.count_=0, this.nonNullCount_=0, this.sum_=0;}, this.accumulate=function(e){var t=e[this.field_];this.count_++, null==t||""===t||isNaN(t)||(this.nonNullCount_++, this.sum_+=parseFloat(t));}, this.storeResult=function(e){e.avg||(e.avg={}), 0!=this.nonNullCount_&&(e.avg[this.field_]=this.sum_/this.nonNullCount_);};}function s(e){this.field_=e, this.init=function(){this.min_=null;}, this.accumulate=function(e){var t=e[this.field_];null==t||""===t||isNaN(t)||(null==this.min_||t<this.min_)&&(this.min_=t);}, this.storeResult=function(e){e.min||(e.min={}), e.min[this.field_]=this.min_;};}function l(e){this.field_=e, this.init=function(){this.max_=null;}, this.accumulate=function(e){var t=e[this.field_];null==t||""===t||isNaN(t)||(null==this.max_||t>this.max_)&&(this.max_=t);}, this.storeResult=function(e){e.max||(e.max={}), e.max[this.field_]=this.max_;};}function a(e){this.field_=e, this.init=function(){this.sum_=null;}, this.accumulate=function(e){var t=e[this.field_];null==t||""===t||isNaN(t)||(this.sum_+=parseFloat(t));}, this.storeResult=function(e){e.sum||(e.sum={}), e.sum[this.field_]=this.sum_;};}Object.defineProperty(t,"__esModule",{value:!0});var c=o(1),d=n(c),u=o(2),h=n(u),p=o(31),f=n(p),g={Avg:i,Min:s,Max:l,Sum:a},v={DataView:r,GroupMetaDataProvider:f.default,Aggregators:g};t.default=v;},function(e,t,o){function n(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=void 0,o=void 0;this.init=function(){t=(0, v.default)("<INPUT type=text class='editor-text' />").appendTo(e.container).bind("keydown.nav",function(e){e.keyCode!==m.LEFT&&e.keyCode!==m.RIGHT||e.stopImmediatePropagation();}).focus().select();}, this.destroy=function(){t.remove();}, this.focus=function(){t.focus();}, this.getValue=function(){return t.val()}, this.setValue=function(e){t.val(e);}, this.loadValue=function(n){o=n[e.column.field]||"", t.val(o), t[0].defaultValue=o, t.select();}, this.serializeValue=function(){return t.val()}, this.applyValue=function(t,o){t[e.column.field]=o;}, this.isValueChanged=function(){return!(""==t.val()&&null==o)&&t.val()!=o}, this.validate=function(){var o=!0,n=null;if(e.column.validator){var r=e.column.validator(t.val(),e);o=r.valid, n=r.msg;}return{valid:!0,msg:null}}, this.init();}function i(e){var t=void 0,o=void 0;this.init=function(){t=(0, v.default)("<INPUT type=text class='editor-text' />"), t.bind("keydown.nav",function(e){e.keyCode!==m.LEFT&&e.keyCode!==m.RIGHT||e.stopImmediatePropagation();}), t.appendTo(e.container), t.focus().select();}, this.destroy=function(){t.remove();}, this.focus=function(){t.focus();}, this.loadValue=function(n){o=n[e.column.field], t.val(o), t[0].defaultValue=o, t.select();}, this.serializeValue=function(){return parseInt(t.val(),10)||0}, this.applyValue=function(t,o){t[e.column.field]=o;}, this.isValueChanged=function(){return!(""==t.val()&&null==o)&&t.val()!=o}, this.validate=function(){if(isNaN(t.val()))return{valid:!1,msg:"Please enter a valid integer"};if(e.column.validator){var o=e.column.validator(t.val());if(!o.valid)return o}return{valid:!0,msg:null}}, this.init();}function s(e){function t(){var t=e.column.editorFixedDecimalPlaces;return"undefined"==typeof t&&(t=s.DefaultDecimalPlaces), t||0===t?t:null}var o=void 0,n=void 0;this.init=function(){o=(0, v.default)("<INPUT type=text class='editor-text' />"), o.bind("keydown.nav",function(e){e.keyCode!==m.LEFT&&e.keyCode!==m.RIGHT||e.stopImmediatePropagation();}), o.appendTo(e.container), o.focus().select();}, this.destroy=function(){o.remove();}, this.focus=function(){o.focus();}, this.loadValue=function(r){n=r[e.column.field];var i=t();null!==i&&(n||0===n)&&n.toFixed&&(n=n.toFixed(i)), o.val(n), o[0].defaultValue=n, o.select();}, this.serializeValue=function(){var e=parseFloat(o.val())||0,n=t();return null!==n&&(e||0===e)&&e.toFixed&&(e=parseFloat(e.toFixed(n))), e}, this.applyValue=function(t,o){t[e.column.field]=o;}, this.isValueChanged=function(){return!(""==o.val()&&null==n)&&o.val()!=n}, this.validate=function(){if(isNaN(o.val()))return{valid:!1,msg:"Please enter a valid number"};if(e.column.validator){var t=e.column.validator(o.val(),e);if(!t.valid)return t}return{valid:!0,msg:null}}, this.init();}function l(e){var t=void 0,o=void 0,n=void 0,r=e.column.options&&e.column.options.date?e.column.options.date:{};this.init=function(){n=r.defaultDate=e.item[e.column.field], t=(0, v.default)('<input type=text data-default-date="'+n+'" class="editor-text" />'), t.appendTo(e.container), t.focus().val(n).select(), o=(0, f.default)(t[0],r);}, this.destroy=function(){o.destroy(), t.remove();}, this.show=function(){o.open(), o.positionCalendar();}, this.hide=function(){o.close();}, this.position=function(e){o.positionCalendar();}, this.focus=function(){t.focus();}, this.loadValue=function(o){n=o[e.column.field], t.val(n), t.select();}, this.serializeValue=function(){return t.val()}, this.applyValue=function(t,o){t[e.column.field]=o;}, this.isValueChanged=function(){return!(""==t.val()&&null==n)&&t.val()!=n}, this.validate=function(){if(e.column.validator){var o=e.column.validator(t.val(),e);if(!o.valid)return o}return{valid:!0,msg:null}}, this.init();}function a(e){var t=void 0,o=void 0;this.init=function(){t=(0, v.default)("<select tabIndex='0' class='editor-yesno'><option value='yes'>Yes</option><option value='no'>No</option></select>"), t.appendTo(e.container), t.focus();}, this.destroy=function(){t.remove();}, this.focus=function(){t.focus();}, this.loadValue=function(n){t.val((o=n[e.column.field])?"yes":"no"), t.select();}, this.serializeValue=function(){return"yes"==t.val()}, this.applyValue=function(t,o){t[e.column.field]=o;}, this.isValueChanged=function(){return t.val()!=o}, this.validate=function(){var o=!0,n=null;if(e.column.validator){var r=e.column.validator(t.val(),e);o=r.valid, n=r.msg;}return{valid:!0,msg:null}}, this.init();}function c(e){var t=void 0,o=void 0;this.init=function(){t=(0, v.default)("<INPUT type=checkbox value='true' class='editor-checkbox' hideFocus>"), t.appendTo(e.container), t.focus();}, this.destroy=function(){t.remove();}, this.focus=function(){t.focus();}, this.loadValue=function(n){o=!!n[e.column.field], o?t.prop("checked",!0):t.prop("checked",!1);}, this.serializeValue=function(){return t.prop("checked")}, this.applyValue=function(t,o){t[e.column.field]=o;}, this.isValueChanged=function(){return this.serializeValue()!==o}, this.validate=function(){var o=!0,n=null;if(e.column.validator){var r=e.column.validator(t.val(),e);o=r.valid, n=r.msg;}return{valid:!0,msg:null}}, this.init();}function d(e){var t=void 0,o=void 0,n=void 0,r=this;this.init=function(){var n=(0, v.default)("body");o=(0, v.default)("<div class='slick-large-editor-text' />").appendTo(n), t=(0, v.default)("<textarea hidefocus rows=5 />").appendTo(o), (0, v.default)("<div><button>Save</button> <button>Cancel</button></div>").appendTo(o), o.find("button:first").bind("click",this.save), o.find("button:last").bind("click",this.cancel), t.bind("keydown",this.handleKeyDown), r.position(e.position), t.focus().select();}, this.handleKeyDown=function(t){t.which==m.ENTER&&t.ctrlKey?r.save():t.which==m.ESCAPE?(t.preventDefault(), r.cancel()):t.which==m.TAB&&t.shiftKey?(t.preventDefault(), e.grid.navigatePrev()):t.which==m.TAB&&(t.preventDefault(), e.grid.navigateNext());}, this.save=function(){e.commitChanges();}, this.cancel=function(){t.val(n), e.cancelChanges();}, this.hide=function(){o.hide();}, this.show=function(){o.show();}, this.position=function(e){o.css("top",e.top-5).css("left",e.left-5);}, this.destroy=function(){o.remove();}, this.focus=function(){t.focus();}, this.loadValue=function(o){t.val(n=o[e.column.field]), t.select();}, this.serializeValue=function(){return t.val()}, this.applyValue=function(t,o){t[e.column.field]=o;}, this.isValueChanged=function(){return!(""==t.val()&&null==n)&&t.val()!=n}, this.validate=function(){var t=!0,o=null;if(e.column.validator){var n=e.column.validator($select.val(),e);t=n.valid, o=n.msg;}return{valid:!0,msg:null}}, this.init();}Object.defineProperty(t,"__esModule",{value:!0});var u=o(1),h=n(u),p=o(32),f=n(p),g=o(2),v=n(g),m=h.default.keyCode,w={Text:r,Integer:i,Float:s,Date:l,YesNoSelect:a,Checkbox:c,LongText:d};h.default.Editors=w, t.default=w, s.DefaultDecimalPlaces=null;},function(e,t){function o(e,t,o,n,r){return null==o||""===o?"-":o<50?"<span style='color:red;font-weight:bold;'>"+o+"%</span>":"<span style='color:green'>"+o+"%</span>"}function n(e,t,o,n,r){if(null==o||""===o)return"";var i=void 0;return i=o<30?"red":o<70?"silver":"green", "<span class='percent-complete-bar' style='background:"+i+";width:"+o+"%'></span>"}function r(e,t,o,n,r){return o?"Yes":"No"}function i(e,t,o,n,r){return o?"✔":""}Object.defineProperty(t,"__esModule",{value:!0}), t.default={PercentComplete:o,PercentCompleteBar:n,YesNo:r,Checkmark:i};},function(module,exports,__webpack_require__){function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function SlickGrid(container,data,columns,options){function init(){if($container=(0, _jquery2.default)(container), $container.length<1)throw new Error("SlickGrid requires a valid container, "+container+" does not exist in the DOM.");cacheCssForHiddenInit(), maxSupportedCssHeight=maxSupportedCssHeight||getMaxSupportedCssHeight(), scrollbarDimensions=scrollbarDimensions||measureScrollbar(), options=_jquery2.default.extend({},defaults,options), validateAndEnforceOptions(), columnDefaults.width=options.defaultColumnWidth, columnsById={};for(var e=0;e<columns.length;e++){var t=columns[e]=_jquery2.default.extend({},columnDefaults,columns[e]);columnsById[t.id]=e, t.minWidth&&t.width<t.minWidth&&(t.width=t.minWidth), t.maxWidth&&t.width>t.maxWidth&&(t.width=t.maxWidth);}editController={commitCurrentEdit:commitCurrentEdit,cancelCurrentEdit:cancelCurrentEdit}, $container.empty().css("overflow","hidden").css("outline",0).addClass(uid).addClass("ui-widget"), /relative|absolute|fixed/.test($container.css("position"))||$container.css("position","relative"), $focusSink=(0, _jquery2.default)("<div tabIndex='0' hideFocus style='position:fixed;width:0;height:0;top:0;left:0;outline:0;'></div>").appendTo($container), $headerScroller=(0, _jquery2.default)("<div class='slick-header ui-state-default' style='overflow:hidden;position:relative;' />").appendTo($container), $headers=(0, _jquery2.default)("<div class='slick-header-columns' />").appendTo($headerScroller), $headers.width(getHeadersWidth()), $headerRowScroller=(0, _jquery2.default)("<div class='slick-headerrow ui-state-default' style='overflow:hidden;position:relative;' />").appendTo($container), $headerRow=(0, _jquery2.default)("<div class='slick-headerrow-columns' />").appendTo($headerRowScroller), $headerRowSpacer=(0, _jquery2.default)("<div style='display:block;height:1px;position:absolute;top:0;left:0;'></div>").css("width",getCanvasWidth()+scrollbarDimensions.width+"px").appendTo($headerRowScroller), $topPanelScroller=(0, _jquery2.default)("<div class='slick-top-panel-scroller ui-state-default' style='overflow:hidden;position:relative;' />").appendTo($container), $topPanel=(0, _jquery2.default)("<div class='slick-top-panel' style='width:10000px' />").appendTo($topPanelScroller), options.showTopPanel||$topPanelScroller.hide(), options.showHeaderRow||$headerRowScroller.hide(), $viewport=(0, _jquery2.default)("<div class='slick-viewport' style='width:100%;overflow:auto;outline:0;position:relative;;'>").appendTo($container), $viewport.css("overflow-y",options.autoHeight?"hidden":"auto"), $canvas=(0, _jquery2.default)("<div class='grid-canvas' />").appendTo($viewport), options.createFooterRow&&($footerRowScroller=(0, _jquery2.default)("<div class='slick-footerrow ui-state-default' style='overflow:hidden;position:relative;' />").appendTo($container), $footerRow=(0, _jquery2.default)("<div class='slick-footerrow-columns' />").appendTo($footerRowScroller), $footerRowSpacer=(0, _jquery2.default)("<div style='display:block;height:1px;position:absolute;top:0;left:0;'></div>").css("width",getCanvasWidth()+scrollbarDimensions.width+"px").appendTo($footerRowScroller), options.showFooterRow||$footerRowScroller.hide()), $focusSink2=$focusSink.clone().appendTo($container), options.explicitInitialization||finishInitialization();}function finishInitialization(){initialized||(initialized=!0, viewportW=parseFloat(_jquery2.default.css($container[0],"width",!0)), measureCellPaddingAndBorder(), disableSelection($headers), options.enableTextSelectionOnCells||$viewport.bind("selectstart.ui",function(e){return(0, _jquery2.default)(e.target).is("input,textarea")}), updateColumnCaches(), createColumnHeaders(), setupColumnSort(), createCssRules(), resizeCanvas(), bindAncestorScrollEvents(), $container.bind("resize.slickgrid",resizeCanvas), $viewport.bind("scroll",handleScroll), $headerScroller.bind("contextmenu",handleHeaderContextMenu).bind("click",handleHeaderClick).delegate(".slick-header-column","mouseenter",handleHeaderMouseEnter).delegate(".slick-header-column","mouseleave",handleHeaderMouseLeave), $headerRowScroller.bind("scroll",handleHeaderRowScroll), options.createFooterRow&&$footerRowScroller.bind("scroll",handleFooterRowScroll), $focusSink.add($focusSink2).bind("keydown",handleKeyDown), $canvas.bind("keydown",handleKeyDown).bind("click",handleClick).bind("dblclick",handleDblClick).bind("contextmenu",handleContextMenu).delegate(".slick-cell","mouseenter",handleMouseEnter).delegate(".slick-cell","mouseleave",handleMouseLeave), (0, _interact2.default)($canvas[0]).allowFrom("div.slick-cell").draggable({onmove:handleDrag,onstart:handleDragStart,onend:handleDragEnd}).styleCursor(!1), navigator.userAgent.toLowerCase().match(/webkit/)&&navigator.userAgent.toLowerCase().match(/macintosh/)&&$canvas.bind("mousewheel",handleMouseWheel), restoreCssFromHiddenInit());}function cacheCssForHiddenInit(){$hiddenParents=$container.parents().addBack().not(":visible"), $hiddenParents.each(function(){var e={};for(var t in cssShow)e[t]=this.style[t], this.style[t]=cssShow[t];oldProps.push(e);});}function restoreCssFromHiddenInit(){$hiddenParents.each(function(e){var t=oldProps[e];for(var o in cssShow)this.style[o]=t[o];});}function registerPlugin(e){plugins.unshift(e), e.init(self);}function unregisterPlugin(e){for(var t=plugins.length;t>=0;t--)if(plugins[t]===e){plugins[t].destroy&&plugins[t].destroy(), plugins.splice(t,1);break}}function setSelectionModel(e){selectionModel&&(selectionModel.onSelectedRangesChanged.unsubscribe(handleSelectedRangesChanged), selectionModel.destroy&&selectionModel.destroy()), selectionModel=e, selectionModel&&(selectionModel.init(self), selectionModel.onSelectedRangesChanged.subscribe(handleSelectedRangesChanged));}function getSelectionModel(){return selectionModel}function getCanvasNode(){return $canvas[0]}function measureScrollbar(){var e=(0, _jquery2.default)("<div style='position:absolute; top:-10000px; left:-10000px; width:100px; height:100px; overflow:scroll;'></div>").appendTo("body"),t={width:e.width()-e[0].clientWidth,height:e.height()-e[0].clientHeight};return e.remove(), t}function getHeadersWidth(){for(var e=0,t=0,o=columns.length;t<o;t++){var n=columns[t].width;e+=n;}return e+=scrollbarDimensions.width, Math.max(e,viewportW)+1e3}function getCanvasWidth(){for(var e=viewportHasVScroll?viewportW-scrollbarDimensions.width:viewportW,t=0,o=columns.length;o--;)t+=columns[o].width;return options.fullWidthRows?Math.max(t,e):t}function updateCanvasWidth(e){var t=canvasWidth;canvasWidth=getCanvasWidth(), canvasWidth!=t&&($canvas.width(canvasWidth), $headerRow.width(canvasWidth), options.createFooterRow&&$footerRow.width(canvasWidth), $headers.width(getHeadersWidth()), viewportHasHScroll=canvasWidth>viewportW-scrollbarDimensions.width);var o=canvasWidth+(viewportHasVScroll?scrollbarDimensions.width:0);$headerRowSpacer.width(o), options.createFooterRow&&$footerRowSpacer.width(o), (canvasWidth!=t||e)&&applyColumnWidths();}function disableSelection(e){e&&e.jquery&&e.attr("unselectable","on").css("MozUserSelect","none").bind("selectstart.ui",function(){return!1});}function getMaxSupportedCssHeight(){for(var e=1e6,t=navigator.userAgent.toLowerCase().match(/firefox/)?6e6:1e9,o=(0, _jquery2.default)("<div style='display:none' />").appendTo(document.body);;){var n=2*e;if(o.css("height",n), n>t||o.height()!==n)break;e=n;}return o.remove(), e}function bindAncestorScrollEvents(){for(var e=$canvas[0];(e=e.parentNode)!=document.body&&null!=e;)if(e==$viewport[0]||e.scrollWidth!=e.clientWidth||e.scrollHeight!=e.clientHeight){var t=(0, _jquery2.default)(e);$boundAncestors=$boundAncestors?$boundAncestors.add(t):t, t.bind("scroll."+uid,handleActiveCellPositionChange);}}function unbindAncestorScrollEvents(){$boundAncestors&&($boundAncestors.unbind("scroll."+uid), $boundAncestors=null);}function updateColumnHeader(e,t,o){if(initialized){var n=getColumnIndex(e);if(null!=n){var r=columns[n],i=$headers.children().eq(n);i&&(void 0!==t&&(columns[n].name=t), void 0!==o&&(columns[n].toolTip=o), trigger(self.onBeforeHeaderCellDestroy,{node:i[0],column:r,grid:self}), i.attr("title",o||"").children().eq(0).html(t), trigger(self.onHeaderCellRendered,{node:i[0],column:r,grid:self}));}}}function getHeaderRow(){return $headerRow[0]}function getFooterRow(){return $footerRow[0]}function getHeaderRowColumn(e){var t=getColumnIndex(e),o=$headerRow.children().eq(t);return o&&o[0]}function getFooterRowColumn(e){var t=getColumnIndex(e),o=$footerRow.children().eq(t);return o&&o[0]}function createColumnHeaders(){function e(){(0, _jquery2.default)(this).addClass("ui-state-hover");}function t(){(0, _jquery2.default)(this).removeClass("ui-state-hover");}$headers.find(".slick-header-column").each(function(){var e=(0, _jquery2.default)(this).data("column");e&&trigger(self.onBeforeHeaderCellDestroy,{node:this,column:e,grid:self});}), $headers.empty(), $headers.width(getHeadersWidth()), $headerRow.find(".slick-headerrow-column").each(function(){var e=(0, _jquery2.default)(this).data("column");e&&trigger(self.onBeforeHeaderRowCellDestroy,{node:this,column:e,grid:self});}), $headerRow.empty(), options.createFooterRow&&($footerRow.find(".slick-footerrow-column").each(function(){var e=(0, _jquery2.default)(this).data("column");e&&trigger(self.onBeforeFooterRowCellDestroy,{node:this,column:e});}), $footerRow.empty());for(var o=0;o<columns.length;o++){var n=columns[o],r=(0, _jquery2.default)("<div class='ui-state-default slick-header-column' />").html("<span class='slick-column-name'>"+n.name+"</span>").width(n.width-headerColumnWidthDiff).attr("id",""+uid+n.id).attr("title",n.toolTip||"").data("column",n).addClass(n.headerCssClass||"").appendTo($headers);if((options.enableColumnReorder||n.sortable)&&r.on("mouseenter",e).on("mouseleave",t), n.sortable&&(r.addClass("slick-header-sortable"), r.append("<span class='slick-sort-indicator' />")), trigger(self.onHeaderCellRendered,{node:r[0],column:n,grid:self}), options.showHeaderRow){var i=(0, _jquery2.default)("<div class='ui-state-default slick-headerrow-column l"+o+" r"+o+"'></div>").data("column",n).appendTo($headerRow);trigger(self.onHeaderRowCellRendered,{node:i[0],column:n,grid:self});}if(options.createFooterRow&&options.showFooterRow){var s=(0, _jquery2.default)("<div class='ui-state-default slick-footerrow-column l"+o+" r"+o+"'></div>").data("column",n).appendTo($footerRow);trigger(self.onFooterRowCellRendered,{node:s[0],column:n});}}setSortColumns(sortColumns), setupColumnResize(), options.enableColumnReorder&&setupColumnReorder();}function setupColumnSort(){$headers.click(function(e){if(e.metaKey=e.metaKey||e.ctrlKey, !(0, _jquery2.default)(e.target).hasClass("slick-resizable-handle")){var t=(0, _jquery2.default)(e.target).closest(".slick-header-column");if(t.length){var o=t.data("column");if(o.sortable){if(!getEditorLock().commitCurrentEdit())return;for(var n=null,r=0;r<sortColumns.length;r++)if(sortColumns[r].columnId==o.id){n=sortColumns[r], n.sortAsc=!n.sortAsc;break}e.metaKey&&options.multiColumnSort?n&&sortColumns.splice(r,1):((e.shiftKey||e.metaKey)&&options.multiColumnSort||(sortColumns=[]), n?0==sortColumns.length&&sortColumns.push(n):(n={columnId:o.id,sortAsc:o.defaultSortAsc}, sortColumns.push(n))), setSortColumns(sortColumns), options.multiColumnSort?trigger(self.onSort,{multiColumnSort:!0,sortCols:_jquery2.default.map(sortColumns,function(e){return{sortCol:columns[getColumnIndex(e.columnId)],sortAsc:e.sortAsc}}),grid:self},e):trigger(self.onSort,{multiColumnSort:!1,sortCol:o,sortAsc:n.sortAsc,grid:self},e);}}}});}function setupColumnReorder(){var e=0,t=0,o=document.createElement("div");o.className="interact-placeholder", (0, _interact2.default)(".slick-header-column").ignoreFrom(".slick-resizable-handle").draggable({inertia:!0,restrict:{restriction:"parent",endOnly:!0,elementRect:{top:0,left:0,bottom:0,right:0}},autoScroll:!0,axis:"x",onstart:function(n){e=0, t=n.target.offsetWidth, $headers.find(".slick-header-column").each(function(e){(0, _jquery2.default)(this).data("index",e);}), o.style.height=n.target.offsetHeight+"px", o.style.width=t+"px", (0, _jquery2.default)(n.target).after(o).css({position:"absolute",zIndex:1e3,marginLeft:(0, _jquery2.default)(n.target).position().left});},onmove:function(t){e+=t.dx, t.target.style.transform="translate3d("+e+"px, -3px, 100px)";},onend:function(n){e=0, t=0, (0, _jquery2.default)(n.target).css({position:"relative",zIndex:"",marginLeft:0,transform:"none"}), o.parentNode.removeChild(o);var r=[];$headers.find(".slick-header-column").each(function(e){r.push(columns[(0, _jquery2.default)(this).data("index")]), (0, _jquery2.default)(this).removeData("index");}), setColumns(r), trigger(self.onColumnsReordered,{grid:self}), setupColumnResize();}}).dropzone({accept:".slick-header-column",ondragenter:function(e){e.target.classList.add("interact-drop-active"), e.relatedTarget.classList.add("interact-can-drop");},ondragleave:function(e){e.target.classList.remove("interact-drop-active"), e.relatedTarget.classList.remove("interact-can-drop");},ondrop:function(t){t.target.classList.remove("interact-drop-active"), t.relatedTarget.classList.remove("interact-can-drop"), (0, _jquery2.default)(t.target)[e>0?"after":"before"](t.relatedTarget);}}).styleCursor(!1);}function setupColumnResize(){var e,t,o,n;t=$headers.children(), t.find(".slick-resizable-handle").remove(), t.each(function(e,t){columns[e].resizable&&(void 0===o&&(o=e), n=e);}), void 0!==o&&t.each(function(t,r){if(!(t<o||options.forceFitColumns&&t>=n)){e=(0, _jquery2.default)(r);var i=(0, _jquery2.default)("<div class='slick-resizable-handle' />");if(i.appendTo(r), !e.data("resizable")){var s=columns[t];s.resizable&&(e.data("resizable",!0), (0, _interact2.default)(r).resizable({preserveAspectRatio:!1,edges:{left:!0,right:!0,bottom:!1,top:!1}}).on("resizestart",function(e){return!!getEditorLock().commitCurrentEdit()&&(s.previousWidth=e.rect.width, void e.target.classList.add("slick-header-column-active"))}).on("resizemove",function(e){var t=e.dx,o=s.width+=t;s.minWidth>0&&s.minWidth>o?o=s.minWidth:s.maxWidth>0&&s.maxWidth<o&&(o=s.maxWidth), s.width=o, options.forceFitColumns&&autosizeColumns(), applyColumnHeaderWidths(), options.syncColumnCellResize&&applyColumnWidths();}).on("resizeend",function(e){e.target.classList.remove("slick-header-column-active"), invalidateAllRows(), updateCanvasWidth(!0), render(), trigger(self.onColumnsResized,{grid:self});}));}}});}function getVBoxDelta(e){var t=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],o=0;return _jquery2.default.each(t,function(t,n){o+=parseFloat(e.css(n))||0;}), o}function measureCellPaddingAndBorder(){var e,t=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],o=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],n=_jquery2.default.fn.jquery.split(".");jQueryNewWidthBehaviour=1==n[0]&&n[1]>=8||n[0]>=2, e=(0, _jquery2.default)("<div class='ui-state-default slick-header-column' style='visibility:hidden'>-</div>").appendTo($headers), headerColumnWidthDiff=headerColumnHeightDiff=0, "border-box"!=e.css("box-sizing")&&"border-box"!=e.css("-moz-box-sizing")&&"border-box"!=e.css("-webkit-box-sizing")&&(_jquery2.default.each(t,function(t,o){headerColumnWidthDiff+=parseFloat(e.css(o))||0;}), _jquery2.default.each(o,function(t,o){headerColumnHeightDiff+=parseFloat(e.css(o))||0;})), e.remove();var r=(0, _jquery2.default)("<div class='slick-row' />").appendTo($canvas);e=(0, _jquery2.default)("<div class='slick-cell' id='' style='visibility:hidden'>-</div>").appendTo(r), cellWidthDiff=cellHeightDiff=0, "border-box"!=e.css("box-sizing")&&"border-box"!=e.css("-moz-box-sizing")&&"border-box"!=e.css("-webkit-box-sizing")&&(_jquery2.default.each(t,function(t,o){cellWidthDiff+=parseFloat(e.css(o))||0;}), _jquery2.default.each(o,function(t,o){cellHeightDiff+=parseFloat(e.css(o))||0;})), r.remove(), absoluteColumnMinWidth=Math.max(headerColumnWidthDiff,cellWidthDiff);}function createCssRules(){$style=(0, _jquery2.default)("<style type='text/css' rel='stylesheet' />").appendTo((0, _jquery2.default)("head"));for(var e=options.rowHeight-cellHeightDiff,t=["."+uid+" .slick-header-column { left: 0; }","."+uid+" .slick-top-panel { height:"+options.topPanelHeight+"px; }","."+uid+" .slick-headerrow-columns { height:"+options.headerRowHeight+"px; }","."+uid+" .slick-footerrow-columns { height:"+options.footerRowHeight+"px; }","."+uid+" .slick-cell { height:"+e+"px; }","."+uid+" .slick-row { height:"+options.rowHeight+"px; }"],o=0;o<columns.length;o++)t.push("."+uid+" .l"+o+" { }"), t.push("."+uid+" .r"+o+" { }");$style[0].styleSheet?$style[0].styleSheet.cssText=t.join(" "):$style[0].appendChild(document.createTextNode(t.join(" ")));}function getColumnCssRules(e){if(!stylesheet){for(var t=document.styleSheets,o=0;o<t.length;o++)if((t[o].ownerNode||t[o].owningElement)==$style[0]){stylesheet=t[o];break}if(!stylesheet)throw new Error("Cannot find stylesheet.");columnCssRulesL=[], columnCssRulesR=[];for(var n,r,i=stylesheet.cssRules||stylesheet.rules,o=0;o<i.length;o++){var s=i[o].selectorText;(n=/\.l\d+/.exec(s))?(r=parseInt(n[0].substr(2,n[0].length-2),10), columnCssRulesL[r]=i[o]):(n=/\.r\d+/.exec(s))&&(r=parseInt(n[0].substr(2,n[0].length-2),10), columnCssRulesR[r]=i[o]);}}return{left:columnCssRulesL[e],right:columnCssRulesR[e]}}function removeCssRules(){$style.remove(), stylesheet=null;}function destroy(){getEditorLock().cancelCurrentEdit(), trigger(self.onBeforeDestroy,{grid:self});for(var e=plugins.length;e--;)unregisterPlugin(plugins[e]);unbindAncestorScrollEvents(), $container.unbind(".slickgrid"), removeCssRules(), $container.empty().removeClass(uid);}function trigger(e,t,o){return o=o||new _slick2.default.EventData, t=t||{}, t.grid=self, e.notify(t,o,self)}function getEditorLock(){return options.editorLock}function getEditController(){return editController}function getColumnIndex(e){return columnsById[e]}function autosizeColumns(){var e,t,o,n=[],r=0,i=0,s=viewportHasVScroll?viewportW-scrollbarDimensions.width:viewportW;for(e=0;e<columns.length;e++)t=columns[e], n.push(t.width), i+=t.width, t.resizable&&(r+=t.width-Math.max(t.minWidth,absoluteColumnMinWidth));for(o=i;i>s&&r;){var l=(i-s)/r;for(e=0;e<columns.length&&i>s;e++){t=columns[e];var a=n[e];if(!(!t.resizable||a<=t.minWidth||a<=absoluteColumnMinWidth)){var c=Math.max(t.minWidth,absoluteColumnMinWidth),d=Math.floor(l*(a-c))||1;d=Math.min(d,a-c), i-=d, r-=d, n[e]-=d;}}if(o<=i)break;o=i;}for(o=i;i<s;){var u=s/i;for(e=0;e<columns.length&&i<s;e++){t=columns[e];var h,p=n[e];h=!t.resizable||t.maxWidth<=p?0:Math.min(Math.floor(u*p)-p,t.maxWidth-p||1e6)||1, i+=h, n[e]+=i<=s?h:0;}if(o>=i)break;o=i;}var f=!1;for(e=0;e<columns.length;e++)columns[e].rerenderOnResize&&columns[e].width!=n[e]&&(f=!0), columns[e].width=n[e];applyColumnHeaderWidths(), updateCanvasWidth(!0), f&&(invalidateAllRows(), render());}function applyColumnHeaderWidths(){if(initialized){for(var e,t=0,o=$headers.children("[id]"),n=o.length;t<n;t++)e=(0, _jquery2.default)(o[t]), jQueryNewWidthBehaviour?e.outerWidth()!==columns[t].width&&e.outerWidth(columns[t].width):e.width()!==columns[t].width-headerColumnWidthDiff&&e.width(columns[t].width-headerColumnWidthDiff);updateColumnCaches();}}function applyColumnWidths(){for(var e,t,o=0,n=0;n<columns.length;n++)e=columns[n].width, t=getColumnCssRules(n), t.left.style.left=o+"px", t.right.style.right=canvasWidth-o-e+"px", o+=columns[n].width;}function setSortColumn(e,t){setSortColumns([{columnId:e,sortAsc:t}]);}function setSortColumns(e){sortColumns=e;var t=$headers.children();t.removeClass("slick-header-column-sorted").find(".slick-sort-indicator").removeClass("slick-sort-indicator-asc slick-sort-indicator-desc"), _jquery2.default.each(sortColumns,function(e,o){null==o.sortAsc&&(o.sortAsc=!0);var n=getColumnIndex(o.columnId);null!=n&&t.eq(n).addClass("slick-header-column-sorted").find(".slick-sort-indicator").addClass(o.sortAsc?"slick-sort-indicator-asc":"slick-sort-indicator-desc");});}function getSortColumns(){return sortColumns}function handleSelectedRangesChanged(e,t){selectedRows=[];for(var o={},n=0;n<t.length;n++)for(var r=t[n].fromRow;r<=t[n].toRow;r++){o[r]||(selectedRows.push(r), o[r]={});for(var i=t[n].fromCell;i<=t[n].toCell;i++)canCellBeSelected(r,i)&&(o[r][columns[i].id]=options.selectedCellCssClass);}setCellCssStyles(options.selectedCellCssClass,o), trigger(self.onSelectedRowsChanged,{rows:getSelectedRows(),grid:self},e);}function getColumns(){return columns}function updateColumnCaches(){columnPosLeft=[], columnPosRight=[];for(var e=0,t=0,o=columns.length;t<o;t++)columnPosLeft[t]=e, columnPosRight[t]=e+columns[t].width, e+=columns[t].width;}function setColumns(e){columns=e, columnsById={};for(var t=0;t<columns.length;t++){var o=columns[t]=_jquery2.default.extend({},columnDefaults,columns[t]);columnsById[o.id]=t, o.minWidth&&o.width<o.minWidth&&(o.width=o.minWidth), o.maxWidth&&o.width>o.maxWidth&&(o.width=o.maxWidth);}updateColumnCaches(), initialized&&(invalidateAllRows(), createColumnHeaders(), removeCssRules(), createCssRules(), resizeCanvas(), applyColumnWidths(), handleScroll());}function getOptions(){return options}function setOptions(e){getEditorLock().commitCurrentEdit()&&(makeActiveCellNormal(), options.enableAddRow!==e.enableAddRow&&invalidateRow(getDataLength()), options=_jquery2.default.extend(options,e), validateAndEnforceOptions(), $viewport.css("overflow-y",options.autoHeight?"hidden":"auto"), render());}function validateAndEnforceOptions(){options.autoHeight&&(options.leaveSpaceForNewRows=!1);}function setData(e,t){data=e, invalidateAllRows(), updateRowCount(), t&&scrollTo(0);}function getData(){return data}function getDataLength(){return data.getLength?data.getLength():data.length}function getDataLengthIncludingAddNew(){return getDataLength()+(options.enableAddRow?1:0)}function getDataItem(e){return data.getItem?data.getItem(e):data[e]}function getTopPanel(){return $topPanel[0]}function setTopPanelVisibility(e){options.showTopPanel!=e&&(options.showTopPanel=e, e?$topPanelScroller.slideDown("fast",resizeCanvas):$topPanelScroller.slideUp("fast",resizeCanvas));}function setHeaderRowVisibility(e){options.showHeaderRow!=e&&(options.showHeaderRow=e, e?$headerRowScroller.slideDown("fast",resizeCanvas):$headerRowScroller.slideUp("fast",resizeCanvas));}function setFooterRowVisibility(e){options.showFooterRow!=e&&(options.showFooterRow=e, e?$footerRowScroller.slideDown("fast",resizeCanvas):$footerRowScroller.slideUp("fast",resizeCanvas));}function getContainerNode(){return $container.get(0)}function getRowTop(e){return options.rowHeight*e-offset}function getRowFromPosition(e){return Math.floor((e+offset)/options.rowHeight)}function scrollTo(e){e=Math.max(e,0), e=Math.min(e,th-viewportH+(viewportHasHScroll?scrollbarDimensions.height:0));var t=offset;page=Math.min(n-1,Math.floor(e/ph)), offset=Math.round(page*cj);var o=e-offset;if(offset!=t){var r=getVisibleRange(o);cleanupRows(r), updateRowPositions();}prevScrollTop!=o&&(vScrollDir=prevScrollTop+t<o+offset?1:-1, $viewport[0].scrollTop=lastRenderedScrollTop=scrollTop=prevScrollTop=o, trigger(self.onViewportChanged,{grid:self}));}function defaultFormatter(e,t,o,n,r){return null==o?"":(o+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function getFormatter(e,t){var o=data.getItemMetadata&&data.getItemMetadata(e),n=o&&o.columns&&(o.columns[t.id]||o.columns[getColumnIndex(t.id)]);return n&&n.formatter||o&&o.formatter||t.formatter||options.formatterFactory&&options.formatterFactory.getFormatter(t)||options.defaultFormatter}function getEditor(e,t){var o=columns[t],n=data.getItemMetadata&&data.getItemMetadata(e),r=n&&n.columns;return r&&r[o.id]&&void 0!==r[o.id].editor?r[o.id].editor:r&&r[t]&&void 0!==r[t].editor?r[t].editor:o.editor||options.editorFactory&&options.editorFactory.getEditor(o)}function getDataItemValueForColumn(e,t){return options.dataItemColumnValueExtractor?options.dataItemColumnValueExtractor(e,t):e[t.field]}function appendRowHtml(e,t,o,n){var r=getDataItem(t),i=t<n&&!r,s="slick-row"+(i?" loading":"")+(t===activeRow?" active":"")+(t%2==1?" odd":" even");r||(s+=" "+options.addNewRowCssClass);var l=data.getItemMetadata&&data.getItemMetadata(t);l&&l.cssClasses&&(s+=" "+l.cssClasses), e.push("<div class='ui-widget-content "+s+"' style='top:"+getRowTop(t)+"px'>");for(var a,c,d=0,u=columns.length;d<u;d++){if(c=columns[d], a=1, l&&l.columns){var h=l.columns[c.id]||l.columns[d];a=h&&h.colspan||1, "*"===a&&(a=u-d);}if(columnPosRight[Math.min(u-1,d+a-1)]>o.leftPx){if(columnPosLeft[d]>o.rightPx)break;appendCellHtml(e,t,d,a,r);}a>1&&(d+=a-1);}e.push("</div>");}function appendCellHtml(e,t,o,n,r){var i=columns[o],s="slick-cell l"+o+" r"+Math.min(columns.length-1,o+n-1)+(i.cssClass?" "+i.cssClass:"");t===activeRow&&o===activeCell&&(s+=" active");for(var l in cellCssClasses)cellCssClasses[l][t]&&cellCssClasses[l][t][i.id]&&(s+=" "+cellCssClasses[l][t][i.id]);if(e.push("<div class='"+s+"'>"), r){var a=getDataItemValueForColumn(r,i);e.push(getFormatter(t,i)(t,o,a,i,r));}e.push("</div>"), rowsCache[t].cellRenderQueue.push(o), rowsCache[t].cellColSpans[o]=n;}function cleanupRows(e){for(var t in rowsCache)(t=parseInt(t,10))!==activeRow&&(t<e.top||t>e.bottom)&&removeRowFromCache(t);options.enableAsyncPostRenderCleanup&&startPostProcessingCleanup();}function invalidate(){updateRowCount(), invalidateAllRows(), render();}function invalidateAllRows(){currentEditor&&makeActiveCellNormal();for(var e in rowsCache)removeRowFromCache(e);options.enableAsyncPostRenderCleanup&&startPostProcessingCleanup();}function queuePostProcessedRowForCleanup(e,t,o){postProcessgroupId++;for(var n in t)t.hasOwnProperty(n)&&postProcessedCleanupQueue.push({actionType:"C",groupId:postProcessgroupId,node:e.cellNodesByColumnIdx[0|n],columnIdx:0|n,rowIdx:o});postProcessedCleanupQueue.push({actionType:"R",groupId:postProcessgroupId,node:e.rowNode}), (0, _jquery2.default)(e.rowNode).detach();}function queuePostProcessedCellForCleanup(e,t,o){postProcessedCleanupQueue.push({actionType:"C",groupId:postProcessgroupId,node:e,columnIdx:t,rowIdx:o}), (0, _jquery2.default)(e).detach();}function removeRowFromCache(e){var t=rowsCache[e];t&&(rowNodeFromLastMouseWheelEvent===t.rowNode?(t.rowNode.style.display="none", zombieRowNodeFromLastMouseWheelEvent=rowNodeFromLastMouseWheelEvent, zombieRowCacheFromLastMouseWheelEvent=t, zombieRowPostProcessedFromLastMouseWheelEvent=postProcessedRows[e]):options.enableAsyncPostRenderCleanup&&postProcessedRows[e]?queuePostProcessedRowForCleanup(t,postProcessedRows[e],e):$canvas[0].removeChild(t.rowNode), delete rowsCache[e], delete postProcessedRows[e], renderedRows--, counter_rows_removed++);}function invalidateRows(e){var t,o;if(e&&e.length){for(vScrollDir=0, t=0, o=e.length;t<o;t++)currentEditor&&activeRow===e[t]&&makeActiveCellNormal(), rowsCache[e[t]]&&removeRowFromCache(e[t]);options.enableAsyncPostRenderCleanup&&startPostProcessingCleanup();}}function invalidateRow(e){invalidateRows([e]);}function updateCell(e,t){var o=getCellNode(e,t);if(o){var n=columns[t],r=getDataItem(e);currentEditor&&activeRow===e&&activeCell===t?currentEditor.loadValue(r):(o.innerHTML=r?getFormatter(e,n)(e,t,getDataItemValueForColumn(r,n),n,r):"", invalidatePostProcessingResults(e));}}function updateRow(e){var t=rowsCache[e];if(t){ensureCellNodesInRowsCache(e);var o=getDataItem(e);for(var n in t.cellNodesByColumnIdx)if(t.cellNodesByColumnIdx.hasOwnProperty(n)){n|=0;var r=columns[n],i=t.cellNodesByColumnIdx[n];e===activeRow&&n===activeCell&&currentEditor?currentEditor.loadValue(o):o?i.innerHTML=getFormatter(e,r)(e,n,getDataItemValueForColumn(o,r),r,o):i.innerHTML="";}invalidatePostProcessingResults(e);}}function getViewportHeight(){return parseFloat(_jquery2.default.css($container[0],"height",!0))-parseFloat(_jquery2.default.css($container[0],"paddingTop",!0))-parseFloat(_jquery2.default.css($container[0],"paddingBottom",!0))-parseFloat(_jquery2.default.css($headerScroller[0],"height"))-getVBoxDelta($headerScroller)-(options.showTopPanel?options.topPanelHeight+getVBoxDelta($topPanelScroller):0)-(options.showHeaderRow?options.headerRowHeight+getVBoxDelta($headerRowScroller):0)-(options.createFooterRow&&options.showFooterRow?options.footerRowHeight+getVBoxDelta($footerRowScroller):0)}function resizeCanvas(){initialized&&(viewportH=options.autoHeight?options.rowHeight*getDataLengthIncludingAddNew():getViewportHeight(), numVisibleRows=Math.ceil(viewportH/options.rowHeight), viewportW=parseFloat(_jquery2.default.css($container[0],"width",!0)), options.autoHeight||$viewport.height(viewportH), options.forceFitColumns&&autosizeColumns(), updateRowCount(), handleScroll(), lastRenderedScrollLeft=-1, render());}function updateRowCount(){if(initialized){var e=getDataLengthIncludingAddNew(),t=e+(options.leaveSpaceForNewRows?numVisibleRows-1:0),o=viewportHasVScroll;viewportHasVScroll=!options.autoHeight&&t*options.rowHeight>viewportH, viewportHasHScroll=canvasWidth>viewportW-scrollbarDimensions.width, makeActiveCellNormal();var r=e-1;for(var i in rowsCache)i>r&&removeRowFromCache(i);options.enableAsyncPostRenderCleanup&&startPostProcessingCleanup(), activeCellNode&&activeRow>r&&resetActiveCell();var s=h;th=Math.max(options.rowHeight*t,viewportH-scrollbarDimensions.height), th<maxSupportedCssHeight?(h=ph=th, n=1, cj=0):(h=maxSupportedCssHeight, ph=h/100, n=Math.floor(th/ph), cj=(th-h)/(n-1)), h!==s&&($canvas.css("height",h), scrollTop=$viewport[0].scrollTop);var l=scrollTop+offset<=th-viewportH;0==th||0==scrollTop?page=offset=0:scrollTo(l?scrollTop+offset:th-viewportH), h!=s&&options.autoHeight&&resizeCanvas(), options.forceFitColumns&&o!=viewportHasVScroll&&autosizeColumns(), updateCanvasWidth(!1);}}function getVisibleRange(e,t){return null==e&&(e=scrollTop), null==t&&(t=scrollLeft), {top:getRowFromPosition(e),bottom:getRowFromPosition(e+viewportH)+1,leftPx:t,rightPx:t+viewportW}}function getRenderedRange(e,t){var o=getVisibleRange(e,t),n=Math.round(viewportH/options.rowHeight),r=3;return vScrollDir==-1?(o.top-=n, o.bottom+=r):1==vScrollDir?(o.top-=r, o.bottom+=n):(o.top-=r, o.bottom+=r), o.top=Math.max(0,o.top), o.bottom=Math.min(getDataLengthIncludingAddNew()-1,o.bottom), o.leftPx-=viewportW, o.rightPx+=viewportW, o.leftPx=Math.max(0,o.leftPx), o.rightPx=Math.min(canvasWidth,o.rightPx), o}function ensureCellNodesInRowsCache(e){var t=rowsCache[e];if(t&&t.cellRenderQueue.length)for(var o=t.rowNode.lastChild;t.cellRenderQueue.length;){var n=t.cellRenderQueue.pop();t.cellNodesByColumnIdx[n]=o, o=o.previousSibling;}}function cleanUpCells(e,t){var o=0,n=rowsCache[t],r=[];for(var i in n.cellNodesByColumnIdx)if(n.cellNodesByColumnIdx.hasOwnProperty(i)){i|=0;var s=n.cellColSpans[i];(columnPosLeft[i]>e.rightPx||columnPosRight[Math.min(columns.length-1,i+s-1)]<e.leftPx)&&(t==activeRow&&i==activeCell||r.push(i));}var l,a;for(postProcessgroupId++;null!=(l=r.pop());)a=n.cellNodesByColumnIdx[l], options.enableAsyncPostRenderCleanup&&postProcessedRows[t]&&postProcessedRows[t][l]?queuePostProcessedCellForCleanup(a,l,t):n.rowNode.removeChild(a), delete n.cellColSpans[l], delete n.cellNodesByColumnIdx[l], postProcessedRows[t]&&delete postProcessedRows[t][l], o++;}function cleanUpAndRenderCells(e){for(var t,o,n,r=[],i=[],s=0,l=e.top,a=e.bottom;l<=a;l++)if(t=rowsCache[l]){ensureCellNodesInRowsCache(l), cleanUpCells(e,l), o=0;var c=data.getItemMetadata&&data.getItemMetadata(l);c=c&&c.columns;for(var d=getDataItem(l),u=0,h=columns.length;u<h&&!(columnPosLeft[u]>e.rightPx);u++)if(null==(n=t.cellColSpans[u])){if(n=1, c){var p=c[columns[u].id]||c[u];n=p&&p.colspan||1, "*"===n&&(n=h-u);}columnPosRight[Math.min(h-1,u+n-1)]>e.leftPx&&(appendCellHtml(r,l,u,n,d), o++), u+=n>1?n-1:0;}else u+=n>1?n-1:0;o&&(i.push(l));}if(r.length){var f=document.createElement("div");f.innerHTML=r.join("");for(var g,v;null!=(g=i.pop());){t=rowsCache[g];for(var m;null!=(m=t.cellRenderQueue.pop());)v=f.lastChild, t.rowNode.appendChild(v), t.cellNodesByColumnIdx[m]=v;}}}function renderRows(e){for(var t=$canvas[0],o=[],n=[],r=!1,i=getDataLength(),s=e.top,l=e.bottom;s<=l;s++)rowsCache[s]||(renderedRows++, n.push(s), rowsCache[s]={rowNode:null,cellColSpans:[],cellNodesByColumnIdx:[],cellRenderQueue:[]}, appendRowHtml(o,s,e,i), activeCellNode&&activeRow===s&&(r=!0), counter_rows_rendered++);if(n.length){var a=document.createElement("div");a.innerHTML=o.join("");for(var s=0,l=n.length;s<l;s++)rowsCache[n[s]].rowNode=t.appendChild(a.firstChild);r&&(activeCellNode=getCellNode(activeRow,activeCell));}}function startPostProcessing(){options.enableAsyncPostRender&&(clearTimeout(h_postrender), h_postrender=setTimeout(asyncPostProcessRows,options.asyncPostRenderDelay));}function startPostProcessingCleanup(){options.enableAsyncPostRenderCleanup&&(clearTimeout(h_postrenderCleanup), h_postrenderCleanup=setTimeout(asyncPostProcessCleanupRows,options.asyncPostRenderCleanupDelay));}function invalidatePostProcessingResults(e){for(var t in postProcessedRows[e])postProcessedRows[e].hasOwnProperty(t)&&(postProcessedRows[e][t]="C");postProcessFromRow=Math.min(postProcessFromRow,e), postProcessToRow=Math.max(postProcessToRow,e), startPostProcessing();}function updateRowPositions(){for(var e in rowsCache)rowsCache[e].rowNode.style.top=getRowTop(e)+"px";}function render(){if(initialized){var e=getVisibleRange(),t=getRenderedRange();cleanupRows(t), lastRenderedScrollLeft!=scrollLeft&&cleanUpAndRenderCells(t), renderRows(t), postProcessFromRow=e.top, postProcessToRow=Math.min(getDataLengthIncludingAddNew()-1,e.bottom), startPostProcessing(), lastRenderedScrollTop=scrollTop, lastRenderedScrollLeft=scrollLeft, h_render=null;}}function handleHeaderRowScroll(){var e=$headerRowScroller[0].scrollLeft;e!=$viewport[0].scrollLeft&&($viewport[0].scrollLeft=e);}function handleFooterRowScroll(){var e=$footerRowScroller[0].scrollLeft;e!=$viewport[0].scrollLeft&&($viewport[0].scrollLeft=e);}function handleScroll(){scrollTop=$viewport[0].scrollTop, scrollLeft=$viewport[0].scrollLeft;var e=Math.abs(scrollTop-prevScrollTop),t=Math.abs(scrollLeft-prevScrollLeft);if(t&&(prevScrollLeft=scrollLeft, $headerScroller[0].scrollLeft=scrollLeft, $topPanelScroller[0].scrollLeft=scrollLeft, $headerRowScroller[0].scrollLeft=scrollLeft, options.createFooterRow&&($footerRowScroller[0].scrollLeft=scrollLeft)), e)if(vScrollDir=prevScrollTop<scrollTop?1:-1, prevScrollTop=scrollTop, e<viewportH)scrollTo(scrollTop+offset);else{var o=offset;page=h==viewportH?0:Math.min(n-1,Math.floor(scrollTop*((th-viewportH)/(h-viewportH))*(1/ph))), offset=Math.round(page*cj), o!=offset&&invalidateAllRows();}(t||e)&&(h_render&&clearTimeout(h_render), (Math.abs(lastRenderedScrollTop-scrollTop)>20||Math.abs(lastRenderedScrollLeft-scrollLeft)>20)&&(options.forceSyncScrolling||Math.abs(lastRenderedScrollTop-scrollTop)<viewportH&&Math.abs(lastRenderedScrollLeft-scrollLeft)<viewportW?render():h_render=setTimeout(render,50), trigger(self.onViewportChanged,{grid:self}))), trigger(self.onScroll,{scrollLeft:scrollLeft,scrollTop:scrollTop,grid:self});}function asyncPostProcessRows(){for(var e=getDataLength();postProcessFromRow<=postProcessToRow;){var t=vScrollDir>=0?postProcessFromRow++:postProcessToRow--,o=rowsCache[t];if(o&&!(t>=e)){postProcessedRows[t]||(postProcessedRows[t]={}), ensureCellNodesInRowsCache(t);for(var n in o.cellNodesByColumnIdx)if(o.cellNodesByColumnIdx.hasOwnProperty(n)){n|=0;var r=columns[n],i=postProcessedRows[t][n];if(r.asyncPostRender&&"R"!==i){var s=o.cellNodesByColumnIdx[n];s&&r.asyncPostRender(s,t,getDataItem(t),r,"C"===i), postProcessedRows[t][n]="R";}}return void(h_postrender=setTimeout(asyncPostProcessRows,options.asyncPostRenderDelay))}}}function asyncPostProcessCleanupRows(){if(postProcessedCleanupQueue.length>0){for(var e=postProcessedCleanupQueue[0].groupId;postProcessedCleanupQueue.length>0&&postProcessedCleanupQueue[0].groupId==e;){var t=postProcessedCleanupQueue.shift();if("R"==t.actionType&&(0, _jquery2.default)(t.node).remove(), "C"==t.actionType){var o=columns[t.columnIdx];o.asyncPostRenderCleanup&&t.node&&o.asyncPostRenderCleanup(t.node,t.rowIdx,o);}}h_postrenderCleanup=setTimeout(asyncPostProcessCleanupRows,options.asyncPostRenderCleanupDelay);
}}function updateCellCssStylesOnRenderedRows(e,t){var o,n,r,i;for(var s in rowsCache){if(i=t&&t[s], r=e&&e[s], i)for(n in i)r&&i[n]==r[n]||(o=getCellNode(s,getColumnIndex(n)), o&&(0, _jquery2.default)(o).removeClass(i[n]));if(r)for(n in r)i&&i[n]==r[n]||(o=getCellNode(s,getColumnIndex(n)), o&&(0, _jquery2.default)(o).addClass(r[n]));}}function addCellCssStyles(e,t){if(cellCssClasses[e])throw"addCellCssStyles: cell CSS hash with key '"+e+"' already exists.";cellCssClasses[e]=t, updateCellCssStylesOnRenderedRows(t,null), trigger(self.onCellCssStylesChanged,{key:e,hash:t,grid:self});}function removeCellCssStyles(e){cellCssClasses[e]&&(updateCellCssStylesOnRenderedRows(null,cellCssClasses[e]), delete cellCssClasses[e], trigger(self.onCellCssStylesChanged,{key:e,hash:null,grid:self}));}function setCellCssStyles(e,t){var o=cellCssClasses[e];cellCssClasses[e]=t, updateCellCssStylesOnRenderedRows(t,o), trigger(self.onCellCssStylesChanged,{key:e,hash:t,grid:self});}function getCellCssStyles(e){return cellCssClasses[e]}function flashCell(e,t,o){if(o=o||100, rowsCache[e]){var n=function e(t){t&&setTimeout(function(){r.queue(function(){r.toggleClass(options.cellFlashingCssClass).dequeue(), e(t-1);});},o);},r=(0, _jquery2.default)(getCellNode(e,t));n(4);}}function handleMouseWheel(e){var t=(0, _jquery2.default)(e.target).closest(".slick-row")[0];t!=rowNodeFromLastMouseWheelEvent&&(zombieRowNodeFromLastMouseWheelEvent&&zombieRowNodeFromLastMouseWheelEvent!=t&&(options.enableAsyncPostRenderCleanup&&zombieRowPostProcessedFromLastMouseWheelEvent?queuePostProcessedRowForCleanup(zombieRowCacheFromLastMouseWheelEvent,zombieRowPostProcessedFromLastMouseWheelEvent):$canvas[0].removeChild(zombieRowNodeFromLastMouseWheelEvent), zombieRowNodeFromLastMouseWheelEvent=null, zombieRowCacheFromLastMouseWheelEvent=null, zombieRowPostProcessedFromLastMouseWheelEvent=null, options.enableAsyncPostRenderCleanup&&startPostProcessingCleanup()), rowNodeFromLastMouseWheelEvent=t);}function handleDragStart(e){var t=_jquery2.default.Event(e.originalEvent.type,e.originalEvent),o=getCellFromEvent(t);if(!o||!cellExists(o.row,o.cell))return!1;var n=trigger(self.onDragStart,e,t);return!!t.isImmediatePropagationStopped()&&n}function handleDrag(e){var t=_jquery2.default.Event(e.originalEvent.type,e.originalEvent);return trigger(self.onDrag,e,t)}function handleDragEnd(e){trigger(self.onDragEnd,e,_jquery2.default.Event("mousedown"));}function handleKeyDown(e){trigger(self.onKeyDown,{row:activeRow,cell:activeCell,grid:self},e);var t=e.isImmediatePropagationStopped(),o=_slick2.default.keyCode;if(!t)if(e.shiftKey||e.altKey||e.ctrlKey)e.which!=o.TAB||!e.shiftKey||e.ctrlKey||e.altKey||(t=navigatePrev());else{if(options.editable&&currentEditor&&currentEditor.keyCaptureList&&currentEditor.keyCaptureList.indexOf(e.which)>-1)return;if(e.which==o.ESCAPE){if(!getEditorLock().isActive())return;cancelEditAndSetFocus();}else e.which==o.PAGE_DOWN?(navigatePageDown(), t=!0):e.which==o.PAGE_UP?(navigatePageUp(), t=!0):e.which==o.LEFT?t=navigateLeft():e.which==o.RIGHT?t=navigateRight():e.which==o.UP?t=navigateUp():e.which==o.DOWN?t=navigateDown():e.which==o.TAB?t=navigateNext():e.which==o.ENTER&&(options.editable&&(currentEditor?activeRow===getDataLength()?navigateDown():commitEditAndSetFocus():getEditorLock().commitCurrentEdit()&&makeActiveCellEditable()), t=!0);}if(t){e.stopPropagation(), e.preventDefault();try{e.originalEvent.keyCode=0;}catch(e){}}}function handleClick(e){currentEditor||(e.target!=document.activeElement||(0, _jquery2.default)(e.target).hasClass("slick-cell"))&&setFocus();var t=getCellFromEvent(e);!t||null!==currentEditor&&activeRow==t.row&&activeCell==t.cell||(trigger(self.onClick,{row:t.row,cell:t.cell,grid:self},e), e.isImmediatePropagationStopped()||activeCell==t.cell&&activeRow==t.row||!canCellBeActive(t.row,t.cell)||getEditorLock().isActive()&&!getEditorLock().commitCurrentEdit()||(scrollRowIntoView(t.row,!1), setActiveCellInternal(getCellNode(t.row,t.cell))));}function handleContextMenu(e){var t=(0, _jquery2.default)(e.target).closest(".slick-cell",$canvas);0!==t.length&&(activeCellNode===t[0]&&null!==currentEditor||trigger(self.onContextMenu,{grid:self},e));}function handleDblClick(e){var t=getCellFromEvent(e);!t||null!==currentEditor&&activeRow==t.row&&activeCell==t.cell||(trigger(self.onDblClick,{row:t.row,cell:t.cell,grid:self},e), e.isImmediatePropagationStopped()||options.editable&&gotoCell(t.row,t.cell,!0));}function handleHeaderMouseEnter(e){trigger(self.onHeaderMouseEnter,{column:(0, _jquery2.default)(this).data("column"),grid:self},e);}function handleHeaderMouseLeave(e){trigger(self.onHeaderMouseLeave,{column:(0, _jquery2.default)(this).data("column"),grid:self},e);}function handleHeaderContextMenu(e){var t=(0, _jquery2.default)(e.target).closest(".slick-header-column",".slick-header-columns"),o=t&&t.data("column");trigger(self.onHeaderContextMenu,{column:o,grid:self},e);}function handleHeaderClick(e){var t=(0, _jquery2.default)(e.target).closest(".slick-header-column",".slick-header-columns"),o=t&&t.data("column");o&&trigger(self.onHeaderClick,{column:o,grid:self},e);}function handleMouseEnter(e){trigger(self.onMouseEnter,{grid:self},e);}function handleMouseLeave(e){trigger(self.onMouseLeave,{grid:self},e);}function cellExists(e,t){return!(e<0||e>=getDataLength()||t<0||t>=columns.length)}function getCellFromPoint(e,t){for(var o=getRowFromPosition(t),n=0,r=0,i=0;i<columns.length&&r<e;i++)r+=columns[i].width, n++;return n<0&&(n=0), {row:o,cell:n-1}}function getCellFromNode(e){var t=/l\d+/.exec(e.className);if(!t)throw"getCellFromNode: cannot get cell - "+e.className;return parseInt(t[0].substr(1,t[0].length-1),10)}function getRowFromNode(e){for(var t in rowsCache)if(rowsCache[t].rowNode===e)return 0|t;return null}function getCellFromEvent(e){var t=(0, _jquery2.default)(e.target).closest(".slick-cell",$canvas);if(!t.length)return null;var o=getRowFromNode(t[0].parentNode),n=getCellFromNode(t[0]);return null==o||null==n?null:{row:o,cell:n}}function getCellNodeBox(e,t){if(!cellExists(e,t))return null;for(var o=getRowTop(e),n=o+options.rowHeight-1,r=0,i=0;i<t;i++)r+=columns[i].width;var s=r+columns[t].width;return{top:o,left:r,bottom:n,right:s}}function resetActiveCell(){setActiveCellInternal(null,!1);}function setFocus(){tabbingDirection==-1?$focusSink[0].focus():$focusSink2[0].focus();}function scrollCellIntoView(e,t,o){scrollRowIntoView(e,o);var n=getColspan(e,t),r=columnPosLeft[t],i=columnPosRight[t+(n>1?n-1:0)],s=scrollLeft+viewportW;r<scrollLeft?($viewport.scrollLeft(r), handleScroll(), render()):i>s&&($viewport.scrollLeft(Math.min(r,i-$viewport[0].clientWidth)), handleScroll(), render());}function setActiveCellInternal(e,t){null!==activeCellNode&&(makeActiveCellNormal(), (0, _jquery2.default)(activeCellNode).removeClass("active"), rowsCache[activeRow]&&(0, _jquery2.default)(rowsCache[activeRow].rowNode).removeClass("active"));var o=activeCellNode!==e;activeCellNode=e, null!=activeCellNode?(activeRow=getRowFromNode(activeCellNode.parentNode), activeCell=activePosX=getCellFromNode(activeCellNode), null==t&&(t=activeRow==getDataLength()||options.autoEdit), (0, _jquery2.default)(activeCellNode).addClass("active"), (0, _jquery2.default)(rowsCache[activeRow].rowNode).addClass("active"), options.editable&&t&&isCellPotentiallyEditable(activeRow,activeCell)&&(clearTimeout(h_editorLoader), options.asyncEditorLoading?h_editorLoader=setTimeout(function(){makeActiveCellEditable();},options.asyncEditorLoadDelay):makeActiveCellEditable())):activeRow=activeCell=null, o&&trigger(self.onActiveCellChanged,getActiveCell());}function clearTextSelection(){if(document.selection&&document.selection.empty)try{document.selection.empty();}catch(e){}else if(window.getSelection){var e=window.getSelection();e&&e.removeAllRanges&&e.removeAllRanges();}}function isCellPotentiallyEditable(e,t){var o=getDataLength();return!(e<o&&!getDataItem(e))&&(!(columns[t].cannotTriggerInsert&&e>=o)&&!!getEditor(e,t))}function makeActiveCellNormal(){if(currentEditor){if(trigger(self.onBeforeCellEditorDestroy,{editor:currentEditor,grid:self}), currentEditor.destroy(), currentEditor=null, activeCellNode){var e=getDataItem(activeRow);if((0, _jquery2.default)(activeCellNode).removeClass("editable invalid"), e){var t=columns[activeCell],o=getFormatter(activeRow,t);activeCellNode.innerHTML=o(activeRow,activeCell,getDataItemValueForColumn(e,t),t,e,self), invalidatePostProcessingResults(activeRow);}}navigator.userAgent.toLowerCase().match(/msie/)&&clearTextSelection(), getEditorLock().deactivate(editController);}}function makeActiveCellEditable(e){if(activeCellNode){if(!options.editable)throw"Grid : makeActiveCellEditable : should never get called when options.editable is false";if(clearTimeout(h_editorLoader), isCellPotentiallyEditable(activeRow,activeCell)){var t=columns[activeCell],o=getDataItem(activeRow);if(trigger(self.onBeforeEditCell,{row:activeRow,cell:activeCell,item:o,column:t,grid:self})===!1)return void setFocus();getEditorLock().activate(editController), (0, _jquery2.default)(activeCellNode).addClass("editable");var n=e||getEditor(activeRow,activeCell);e||n.suppressClearOnEdit||(activeCellNode.innerHTML=""), currentEditor=new n({grid:self,gridPosition:absBox($container[0]),position:absBox(activeCellNode),container:activeCellNode,column:t,item:o||{},commitChanges:commitEditAndSetFocus,cancelChanges:cancelEditAndSetFocus}), o&&currentEditor.loadValue(o), serializedEditorValue=currentEditor.serializeValue(), currentEditor.position&&handleActiveCellPositionChange();}}}function commitEditAndSetFocus(){getEditorLock().commitCurrentEdit()&&(setFocus(), options.autoEdit&&navigateDown());}function cancelEditAndSetFocus(){getEditorLock().cancelCurrentEdit()&&setFocus();}function absBox(e){var t={top:e.offsetTop,left:e.offsetLeft,bottom:0,right:0,width:(0, _jquery2.default)(e).outerWidth(),height:(0, _jquery2.default)(e).outerHeight(),visible:!0};t.bottom=t.top+t.height, t.right=t.left+t.width;for(var o=e.offsetParent;(e=e.parentNode)!=document.body&&null!=e;)t.visible&&e.scrollHeight!=e.offsetHeight&&"visible"!=(0, _jquery2.default)(e).css("overflowY")&&(t.visible=t.bottom>e.scrollTop&&t.top<e.scrollTop+e.clientHeight), t.visible&&e.scrollWidth!=e.offsetWidth&&"visible"!=(0, _jquery2.default)(e).css("overflowX")&&(t.visible=t.right>e.scrollLeft&&t.left<e.scrollLeft+e.clientWidth), t.left-=e.scrollLeft, t.top-=e.scrollTop, e===o&&(t.left+=e.offsetLeft, t.top+=e.offsetTop, o=e.offsetParent), t.bottom=t.top+t.height, t.right=t.left+t.width;return t}function getActiveCellPosition(){return absBox(activeCellNode)}function getGridPosition(){return absBox($container[0])}function handleActiveCellPositionChange(){if(activeCellNode&&(trigger(self.onActiveCellPositionChanged,{grid:self}), currentEditor)){var e=getActiveCellPosition();currentEditor.show&&currentEditor.hide&&(e.visible?currentEditor.show():currentEditor.hide()), currentEditor.position&&currentEditor.position(e);}}function getCellEditor(){return currentEditor}function getActiveCell(){return activeCellNode?{row:activeRow,cell:activeCell,grid:self}:null}function getActiveCellNode(){return activeCellNode}function scrollRowIntoView(e,t){var o=e*options.rowHeight,n=(e+1)*options.rowHeight-viewportH+(viewportHasHScroll?scrollbarDimensions.height:0);(e+1)*options.rowHeight>scrollTop+viewportH+offset?(scrollTo(t?o:n), render()):e*options.rowHeight<scrollTop+offset&&(scrollTo(t?n:o), render());}function scrollRowToTop(e){scrollTo(e*options.rowHeight), render();}function scrollPage(e){var t=e*numVisibleRows;if(scrollTo((getRowFromPosition(scrollTop)+t)*options.rowHeight), render(), options.enableCellNavigation&&null!=activeRow){var o=activeRow+t,n=getDataLengthIncludingAddNew();o>=n&&(o=n-1), o<0&&(o=0);for(var r=0,i=null,s=activePosX;r<=activePosX;)canCellBeActive(o,r)&&(i=r), r+=getColspan(o,r);null!==i?(setActiveCellInternal(getCellNode(o,i)), activePosX=s):resetActiveCell();}}function navigatePageDown(){scrollPage(1);}function navigatePageUp(){scrollPage(-1);}function getColspan(e,t){var o=data.getItemMetadata&&data.getItemMetadata(e);if(!o||!o.columns)return 1;var n=o.columns[columns[t].id]||o.columns[t],r=n&&n.colspan;return r="*"===r?columns.length-t:r||1}function findFirstFocusableCell(e){for(var t=0;t<columns.length;){if(canCellBeActive(e,t))return t;t+=getColspan(e,t);}return null}function findLastFocusableCell(e){for(var t=0,o=null;t<columns.length;)canCellBeActive(e,t)&&(o=t), t+=getColspan(e,t);return o}function gotoRight(e,t,o){if(t>=columns.length)return null;do t+=getColspan(e,t);while(t<columns.length&&!canCellBeActive(e,t));return t<columns.length?{row:e,cell:t,posX:t}:null}function gotoLeft(e,t,o){if(t<=0)return null;var n=findFirstFocusableCell(e);if(null===n||n>=t)return null;for(var r,i={row:e,cell:n,posX:n};;){if(r=gotoRight(i.row,i.cell,i.posX), !r)return null;if(r.cell>=t)return i;i=r;}}function gotoDown(e,t,o){for(var n,r=getDataLengthIncludingAddNew();;){if(++e>=r)return null;for(n=t=0;t<=o;)n=t, t+=getColspan(e,t);if(canCellBeActive(e,n))return{row:e,cell:n,posX:o}}}function gotoUp(e,t,o){for(var n;;){if(--e<0)return null;for(n=t=0;t<=o;)n=t, t+=getColspan(e,t);if(canCellBeActive(e,n))return{row:e,cell:n,posX:o}}}function gotoNext(e,t,o){if(null==e&&null==t&&(e=t=o=0, canCellBeActive(e,t)))return{row:e,cell:t,posX:t};var n=gotoRight(e,t,o);if(n)return n;for(var r=null,i=getDataLengthIncludingAddNew();++e<i;)if(r=findFirstFocusableCell(e), null!==r)return{row:e,cell:r,posX:r};return null}function gotoPrev(e,t,o){if(null==e&&null==t&&(e=getDataLengthIncludingAddNew()-1, t=o=columns.length-1, canCellBeActive(e,t)))return{row:e,cell:t,posX:t};for(var n,r;!n&&!(n=gotoLeft(e,t,o));){if(--e<0)return null;t=0, r=findLastFocusableCell(e), null!==r&&(n={row:e,cell:r,posX:r});}return n}function navigateRight(){return navigate("right")}function navigateLeft(){return navigate("left")}function navigateDown(){return navigate("down")}function navigateUp(){return navigate("up")}function navigateNext(){return navigate("next")}function navigatePrev(){return navigate("prev")}function navigate(e){if(!options.enableCellNavigation)return!1;if(!activeCellNode&&"prev"!=e&&"next"!=e)return!1;if(!getEditorLock().commitCurrentEdit())return!0;setFocus();var t={up:-1,down:1,left:-1,right:1,prev:-1,next:1};tabbingDirection=t[e];var o={up:gotoUp,down:gotoDown,left:gotoLeft,right:gotoRight,prev:gotoPrev,next:gotoNext},n=o[e],r=n(activeRow,activeCell,activePosX);if(r){var i=r.row==getDataLength();return scrollCellIntoView(r.row,r.cell,!i), setActiveCellInternal(getCellNode(r.row,r.cell)), activePosX=r.posX, !0}return setActiveCellInternal(getCellNode(activeRow,activeCell)), !1}function getCellNode(e,t){return rowsCache[e]?(ensureCellNodesInRowsCache(e), rowsCache[e].cellNodesByColumnIdx[t]):null}function setActiveCell(e,t){initialized&&(e>getDataLength()||e<0||t>=columns.length||t<0||options.enableCellNavigation&&(scrollCellIntoView(e,t,!1), setActiveCellInternal(getCellNode(e,t),!1)));}function canCellBeActive(e,t){if(!options.enableCellNavigation||e>=getDataLengthIncludingAddNew()||e<0||t>=columns.length||t<0)return!1;var o=data.getItemMetadata&&data.getItemMetadata(e);if(o&&"boolean"==typeof o.focusable)return o.focusable;var n=o&&o.columns;return n&&n[columns[t].id]&&"boolean"==typeof n[columns[t].id].focusable?n[columns[t].id].focusable:n&&n[t]&&"boolean"==typeof n[t].focusable?n[t].focusable:columns[t].focusable}function canCellBeSelected(e,t){if(e>=getDataLength()||e<0||t>=columns.length||t<0)return!1;var o=data.getItemMetadata&&data.getItemMetadata(e);if(o&&"boolean"==typeof o.selectable)return o.selectable;var n=o&&o.columns&&(o.columns[columns[t].id]||o.columns[t]);return n&&"boolean"==typeof n.selectable?n.selectable:columns[t].selectable}function gotoCell(e,t,o){if(initialized&&canCellBeActive(e,t)&&getEditorLock().commitCurrentEdit()){scrollCellIntoView(e,t,!1);var n=getCellNode(e,t);setActiveCellInternal(n,o||e===getDataLength()||options.autoEdit), currentEditor||setFocus();}}function commitCurrentEdit(){var e=getDataItem(activeRow),t=columns[activeCell];if(currentEditor){if(currentEditor.isValueChanged()){var o=currentEditor.validate();if(o.valid){if(activeRow<getDataLength()){var n={row:activeRow,cell:activeCell,editor:currentEditor,serializedValue:currentEditor.serializeValue(),prevSerializedValue:serializedEditorValue,execute:function(){this.editor.applyValue(e,this.serializedValue), updateRow(this.row), trigger(self.onCellChange,{row:activeRow,cell:activeCell,item:e,grid:self});},undo:function(){this.editor.applyValue(e,this.prevSerializedValue), updateRow(this.row), trigger(self.onCellChange,{row:activeRow,cell:activeCell,item:e,grid:self});}};options.editCommandHandler?(makeActiveCellNormal(), options.editCommandHandler(e,t,n)):(n.execute(), makeActiveCellNormal());}else{var r={};currentEditor.applyValue(r,currentEditor.serializeValue()), makeActiveCellNormal(), trigger(self.onAddNewRow,{item:r,column:t,grid:self});}return!getEditorLock().isActive()}return(0, _jquery2.default)(activeCellNode).removeClass("invalid"), (0, _jquery2.default)(activeCellNode).width(), (0, _jquery2.default)(activeCellNode).addClass("invalid"), trigger(self.onValidationError,{editor:currentEditor,cellNode:activeCellNode,validationResults:o,row:activeRow,cell:activeCell,column:t,grid:self}), currentEditor.focus(), !1}makeActiveCellNormal();}return!0}function cancelCurrentEdit(){return makeActiveCellNormal(), !0}function rowsToRanges(e){for(var t=[],o=columns.length-1,n=0;n<e.length;n++)t.push(new _slick2.default.Range(e[n],0,e[n],o));return t}function getSelectedRows(){if(!selectionModel)throw"Selection model is not set";return selectedRows}function setSelectedRows(e){if(!selectionModel)throw"Selection model is not set";selectionModel.setSelectedRanges(rowsToRanges(e));}var defaults={explicitInitialization:!1,rowHeight:25,defaultColumnWidth:80,enableAddRow:!1,leaveSpaceForNewRows:!1,editable:!1,autoEdit:!0,enableCellNavigation:!0,enableColumnReorder:!0,asyncEditorLoading:!1,asyncEditorLoadDelay:100,forceFitColumns:!1,enableAsyncPostRender:!1,asyncPostRenderDelay:50,enableAsyncPostRenderCleanup:!1,asyncPostRenderCleanupDelay:40,autoHeight:!1,editorLock:_slick2.default.GlobalEditorLock,showHeaderRow:!1,headerRowHeight:25,createFooterRow:!1,showFooterRow:!1,footerRowHeight:25,showTopPanel:!1,topPanelHeight:25,formatterFactory:null,editorFactory:null,cellFlashingCssClass:"flashing",selectedCellCssClass:"selected",multiSelect:!0,enableTextSelectionOnCells:!1,dataItemColumnValueExtractor:null,fullWidthRows:!1,multiColumnSort:!1,defaultFormatter:defaultFormatter,forceSyncScrolling:!1,addNewRowCssClass:"new-row"},columnDefaults={name:"",resizable:!0,sortable:!1,minWidth:30,rerenderOnResize:!1,headerCssClass:null,defaultSortAsc:!0,focusable:!0,selectable:!0},th,h,ph,n,cj,page=0,offset=0,vScrollDir=1,initialized=!1,$container,uid="slickgrid_"+Math.round(1e6*Math.random()),self=this,$focusSink,$focusSink2,$headerScroller,$headers,$headerRow,$headerRowScroller,$headerRowSpacer,$footerRow,$footerRowScroller,$footerRowSpacer,$topPanelScroller,$topPanel,$viewport,$canvas,$style,$boundAncestors,stylesheet,columnCssRulesL,columnCssRulesR,viewportH,viewportW,canvasWidth,viewportHasHScroll,viewportHasVScroll,headerColumnWidthDiff=0,headerColumnHeightDiff=0,cellWidthDiff=0,cellHeightDiff=0,jQueryNewWidthBehaviour=!1,absoluteColumnMinWidth,tabbingDirection=1,activePosX,activeRow,activeCell,activeCellNode=null,currentEditor=null,serializedEditorValue,editController,rowsCache={},renderedRows=0,numVisibleRows,prevScrollTop=0,scrollTop=0,lastRenderedScrollTop=0,lastRenderedScrollLeft=0,prevScrollLeft=0,scrollLeft=0,selectionModel,selectedRows=[],plugins=[],cellCssClasses={},columnsById={},sortColumns=[],columnPosLeft=[],columnPosRight=[],h_editorLoader=null,h_render=null,h_postrender=null,h_postrenderCleanup=null,postProcessedRows={},postProcessToRow=null,postProcessFromRow=null,postProcessedCleanupQueue=[],postProcessgroupId=0,counter_rows_rendered=0,counter_rows_removed=0,rowNodeFromLastMouseWheelEvent,zombieRowNodeFromLastMouseWheelEvent,zombieRowCacheFromLastMouseWheelEvent,zombieRowPostProcessedFromLastMouseWheelEvent,cssShow={position:"absolute",visibility:"hidden",display:"block"},$hiddenParents,oldProps=[];this.debug=function(){var e="";e+="\ncounter_rows_rendered:  "+counter_rows_rendered, e+="\ncounter_rows_removed:  "+counter_rows_removed, e+="\nrenderedRows:  "+renderedRows, e+="\nnumVisibleRows:  "+numVisibleRows, e+="\nmaxSupportedCssHeight:  "+maxSupportedCssHeight, e+="\nn(umber of pages):  "+n, e+="\n(current) page:  "+page, e+="\npage height (ph):  "+ph, e+="\nvScrollDir:  "+vScrollDir, alert(e);}, this.eval=function(expr){return eval(expr)}, _jquery2.default.extend(this,{slickGridVersion:"2.2.4",onScroll:new _slick2.default.Event,onSort:new _slick2.default.Event,onHeaderMouseEnter:new _slick2.default.Event,onHeaderMouseLeave:new _slick2.default.Event,onHeaderContextMenu:new _slick2.default.Event,onHeaderClick:new _slick2.default.Event,onHeaderCellRendered:new _slick2.default.Event,onBeforeHeaderCellDestroy:new _slick2.default.Event,onHeaderRowCellRendered:new _slick2.default.Event,onFooterRowCellRendered:new _slick2.default.Event,onBeforeHeaderRowCellDestroy:new _slick2.default.Event,onBeforeFooterRowCellDestroy:new _slick2.default.Event,onMouseEnter:new _slick2.default.Event,onMouseLeave:new _slick2.default.Event,onClick:new _slick2.default.Event,onDblClick:new _slick2.default.Event,onContextMenu:new _slick2.default.Event,onKeyDown:new _slick2.default.Event,onAddNewRow:new _slick2.default.Event,onValidationError:new _slick2.default.Event,onViewportChanged:new _slick2.default.Event,onColumnsReordered:new _slick2.default.Event,onColumnsResized:new _slick2.default.Event,onCellChange:new _slick2.default.Event,onBeforeEditCell:new _slick2.default.Event,onBeforeCellEditorDestroy:new _slick2.default.Event,onBeforeDestroy:new _slick2.default.Event,onActiveCellChanged:new _slick2.default.Event,onActiveCellPositionChanged:new _slick2.default.Event,onDragInit:new _slick2.default.Event,onDragStart:new _slick2.default.Event,onDrag:new _slick2.default.Event,onDragEnd:new _slick2.default.Event,onSelectedRowsChanged:new _slick2.default.Event,onCellCssStylesChanged:new _slick2.default.Event,registerPlugin:registerPlugin,unregisterPlugin:unregisterPlugin,getColumns:getColumns,setColumns:setColumns,getColumnIndex:getColumnIndex,updateColumnHeader:updateColumnHeader,setSortColumn:setSortColumn,setSortColumns:setSortColumns,getSortColumns:getSortColumns,autosizeColumns:autosizeColumns,getOptions:getOptions,setOptions:setOptions,getData:getData,getDataLength:getDataLength,getDataItem:getDataItem,setData:setData,getSelectionModel:getSelectionModel,setSelectionModel:setSelectionModel,getSelectedRows:getSelectedRows,setSelectedRows:setSelectedRows,getContainerNode:getContainerNode,render:render,invalidate:invalidate,invalidateRow:invalidateRow,invalidateRows:invalidateRows,invalidateAllRows:invalidateAllRows,updateCell:updateCell,updateRow:updateRow,getViewport:getVisibleRange,getRenderedRange:getRenderedRange,resizeCanvas:resizeCanvas,updateRowCount:updateRowCount,scrollRowIntoView:scrollRowIntoView,scrollRowToTop:scrollRowToTop,scrollCellIntoView:scrollCellIntoView,getCanvasNode:getCanvasNode,focus:setFocus,getCellFromPoint:getCellFromPoint,getCellFromEvent:getCellFromEvent,getActiveCell:getActiveCell,setActiveCell:setActiveCell,getActiveCellNode:getActiveCellNode,getActiveCellPosition:getActiveCellPosition,resetActiveCell:resetActiveCell,editActiveCell:makeActiveCellEditable,getCellEditor:getCellEditor,getCellNode:getCellNode,getCellNodeBox:getCellNodeBox,canCellBeSelected:canCellBeSelected,canCellBeActive:canCellBeActive,navigatePrev:navigatePrev,navigateNext:navigateNext,navigateUp:navigateUp,navigateDown:navigateDown,navigateLeft:navigateLeft,navigateRight:navigateRight,navigatePageUp:navigatePageUp,navigatePageDown:navigatePageDown,gotoCell:gotoCell,getTopPanel:getTopPanel,setTopPanelVisibility:setTopPanelVisibility,setHeaderRowVisibility:setHeaderRowVisibility,getHeaderRow:getHeaderRow,getHeaderRowColumn:getHeaderRowColumn,setFooterRowVisibility:setFooterRowVisibility,getFooterRow:getFooterRow,getFooterRowColumn:getFooterRowColumn,getGridPosition:getGridPosition,flashCell:flashCell,addCellCssStyles:addCellCssStyles,setCellCssStyles:setCellCssStyles,removeCellCssStyles:removeCellCssStyles,getCellCssStyles:getCellCssStyles,init:finishInitialization,destroy:destroy,getEditorLock:getEditorLock,getEditController:getEditController}), init();}Object.defineProperty(exports,"__esModule",{value:!0});var _jquery=__webpack_require__(2),_jquery2=_interopRequireDefault(_jquery),_interact=__webpack_require__(5),_interact2=_interopRequireDefault(_interact),_slick=__webpack_require__(1),_slick2=_interopRequireDefault(_slick);_slick2.default.Grid=SlickGrid, exports.default=SlickGrid;var scrollbarDimensions,maxSupportedCssHeight;},function(e,t,o){function n(e){return e&&e.__esModule?e:{default:e}}function r(e){function t(t,o,n,r,i){if(!e.enableExpandCollapse)return i.title;var s=15*i.level+"px";return"<span class='"+e.toggleCssClass+" "+(i.collapsed?e.toggleCollapsedCssClass:e.toggleExpandedCssClass)+"' style='margin-left:"+s+"'></span><span class='"+e.groupTitleCssClass+"' level='"+i.level+"'>"+i.title+"</span>"}function o(e,t,o,n,r){return n.groupTotalsFormatter&&n.groupTotalsFormatter(r,n)||""}function n(e){u=e, u.onClick.subscribe(i), u.onKeyDown.subscribe(l);}function r(){u&&(u.onClick.unsubscribe(i), u.onKeyDown.unsubscribe(l));}function i(t,o){var n=this.getDataItem(o.row);if(n&&n instanceof a.default.Group&&(0, s.default)(t.target).hasClass(e.toggleCssClass)){var r=u.getRenderedRange();this.getData().setRefreshHints({ignoreDiffsBefore:r.top,ignoreDiffsAfter:r.bottom+1}), n.collapsed?this.getData().expandGroup(n.groupingKey):this.getData().collapseGroup(n.groupingKey), t.stopImmediatePropagation(), t.preventDefault();}}function l(t){if(e.enableExpandCollapse&&t.which==a.default.keyCode.SPACE){var o=this.getActiveCell();if(o){var n=this.getDataItem(o.row);if(n&&n instanceof a.default.Group){var r=u.getRenderedRange();this.getData().setRefreshHints({ignoreDiffsBefore:r.top,ignoreDiffsAfter:r.bottom+1}), n.collapsed?this.getData().expandGroup(n.groupingKey):this.getData().collapseGroup(n.groupingKey), t.stopImmediatePropagation(), t.preventDefault();}}}}function c(t){return{selectable:!1,focusable:e.groupFocusable,cssClasses:e.groupCssClass,columns:{0:{colspan:"*",formatter:e.groupFormatter,editor:null}}}}function d(t){return{selectable:!1,focusable:e.totalsFocusable,cssClasses:e.totalsCssClass,formatter:e.totalsFormatter,editor:null}}var u=void 0,h={groupCssClass:"slick-group",groupTitleCssClass:"slick-group-title",totalsCssClass:"slick-group-totals",groupFocusable:!0,totalsFocusable:!1,toggleCssClass:"slick-group-toggle",toggleExpandedCssClass:"expanded",toggleCollapsedCssClass:"collapsed",enableExpandCollapse:!0,groupFormatter:t,totalsFormatter:o};return e=s.default.extend(!0,{},h,e), {init:n,destroy:r,getGroupRowMetadata:c,getTotalsRowMetadata:d}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(2),s=n(i),l=o(1),a=n(l);t.default=r;},function(e,t){e.exports=flatpickr_1;}]));

});

var Slickgrid = unwrapExports(slick_es6_min);

class StyleBuilder {

    constructor(){
    }

    /**
     * Builds theme css
     */
    build(){
        return `
       
       /*
IMPORTANT:
In order to preserve the uniform grid appearance, all cell styles need to have padding, margin and border sizes.
No built-in (selected, editable, highlight, flashing, invalid, loading, :focus) or user-specified CSS
classes should alter those!
*/

.slick-header-columns {
  border-bottom: 1px solid #c1c6c8;
}

.slick-header-column {
  border-right: 1px solid #c1c6c8;
}

.slick-header-column:hover, .slick-header-column-active {

}

.slick-headerrow {

}

.slick-headerrow-column {
  border-bottom: 0;
  height: 100%;
}

.slick-row.ui-state-active {

}

.slick-row {
  position: absolute;
  background: #ffffff;
  border: 0px;
  line-height: 20px;
}

.slick-row.selected {
  z-index: 10;
  background: #ffffff;
}

.slick-cell {
  padding-left: 4px;
  padding-right: 4px;
}

.slick-group {
  border-bottom: 2px solid #c1c6c8
}

.slick-group-toggle {
  width: 9px;
  height: 9px;
  margin-right: 5px;
}

.slick-group-toggle.expanded {
  background: url('data:image/gif;base64,R0lGODlhCQAJAPcAAAFGeoCAgNXz/+v5/+v6/+z5/+36//L7//X8//j9/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwAAAAACQAJAAAIMwADCBxIUIDBgwIEChgwwECBAgQUFjBAkaJCABgxGlB4AGHCAAIQiBypEEECkScJqgwQEAA7') no-repeat center center;
}

.slick-group-toggle.collapsed {
  background: url('data:image/gif;base64,R0lGODlhCQAJAPcAAAFGeoCAgNXz/+v5/+v6/+z5/+36//L7//X8//j9/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwAAAAACQAJAAAIOAADCBxIUIDBgwIEChgwAECBAgQUFjAAQIABAwoBaNSIMYCAAwIqGlSIAEHFkiQTIBCgkqDLAAEBADs=') no-repeat center center;
}

.slick-group-totals {
  color: gray;
  background: #ffffff;
}

.slick-group-select-checkbox {
  width: 13px;
  height: 13px;
  margin: 3px 10px 0 0;
  display: inline-block;
}
.slick-cell.selected {
    font-weight: bold;
    color: #333333;
    background-color: #a5c7d2;
}

.slick-cell.active {
  border-color: gray;
  border-style: solid;
}

.slick-sortable-placeholder {
  background: silver !important;
}

.slick-row.odd {
  background: #fafafa;
}

.slick-row.ui-state-active {

}

.slick-row.loading {
  opacity: 0.5;
  filter: alpha(opacity = 50);
}

.slick-cell.invalid {
  border-color: #ff3c52;
  -moz-animation-duration: 0.2s;
  -webkit-animation-duration: 0.2s;
  -moz-animation-name: slickgrid-invalid-hilite;
  -webkit-animation-name: slickgrid-invalid-hilite;  
}

@-moz-keyframes slickgrid-invalid-hilite {
  from { box-shadow: 0 0 6px red; }
  to { box-shadow: none; }
}

@-webkit-keyframes slickgrid-invalid-hilite {
  from { box-shadow: 0 0 6px #ff3c52; }
  to { box-shadow: none; }
}
/*
IMPORTANT:
In order to preserve the uniform grid appearance, all cell styles need to have padding, margin and border sizes.
No built-in (selected, editable, highlight, flashing, invalid, loading, :focus) or user-specified CSS
classes should alter those!
*/

.slick-header.ui-state-default, .slick-headerrow.ui-state-default, .slick-footerrow.ui-state-default, .slick-top-panel-scroller.ui-state-default {
  width: 100%;
  overflow: auto;
  position: relative;
  border-left: 0px !important;
}

.slick-header.ui-state-default {
  overflow: inherit;
}

.slick-header::-webkit-scrollbar,  .slick-headerrow::-webkit-scrollbar, .slick-footerrow::-webkit-scrollbar {
  display: none
}

.slick-header-columns, .slick-headerrow-columns, .slick-footerrow-columns {
  position: relative;
  white-space: nowrap;
  cursor: default;
  overflow: hidden;
}

.slick-header-column.ui-state-default {
  position: relative;
  display: inline-block;
 /*box-sizing: content-box !important; use this for Firefox! */ 
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  height: 16px;
  line-height: 16px;
  margin: 0;
  padding: 4px;
  border-right: 1px solid #c1c6c8
  border-left: 0px !important;
  border-top: 0px !important;
  border-bottom: 0px !important;
  float: left;
}

.slick-headerrow-column.ui-state-default, .slick-footerrow-column.ui-state-default {
  padding: 4px;
}

.slick-header-column-sorted {
  font-style: italic;
}

.slick-sort-indicator {
  display: inline-block;
  width: 8px;
  height: 5px;
  margin-left: 4px;
  margin-top: 6px;
  float: left;
}

.slick-sort-indicator-numbered {
  display: inline-block;
  width: 8px;
  height: 5px;
  margin-left: 4px;
  margin-top: 0;
  line-height: 20px;
  float: left;
  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  color: #ffffff;
}

.slick-sort-indicator-desc {
  background: url('data:image/gif;base64,R0lGODlhDQAFAIcAAGGQzUD/QOPu+wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAMAAAEALAAAAAANAAUAAAgeAAUAGEgQgIAACBEKLHgwYcKFBh1KFNhQosOKEgMCADs=');
}

.slick-sort-indicator-asc {
  background: url('data:image/gif;base64,R0lGODlhDQAFAIcAAGGQzUD/QOPu+wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAMAAAEALAAAAAANAAUAAAgbAAMIDABgoEGDABIeRJhQ4cKGEA8KmEiRosGAADs=');
}

.slick-resizable-handle {
  position: absolute;
  font-size: 0.1px;
  display: block;
  cursor: col-resize;
  width: 9px;
  right: -5px;
  top: 0;
  height: 100%;
  z-index: 1;
}

.slick-sortable-placeholder {
  background: #c1c6c8
}

.grid-canvas {
  position: relative;
  outline: 0;
}

.slick-row.ui-widget-content, .slick-row.ui-state-active {
  position: absolute;
  border: 0px;
  width: 100%;
}

.slick-cell, .slick-headerrow-column , .slick-footerrow-column{
  position: absolute;
  border: 1px solid transparent;
  border-right: 1px dotted #c1c6c8
  border-bottom-color: #c1c6c8
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  vertical-align: middle;
  z-index: 1;
  padding: 1px 2px 2px 1px;
  margin: 0;
  white-space: nowrap;
  cursor: default;
}
.slick-cell, .slick-headerrow-column{
  border-bottom-color: #c1c6c8
}
.slick-footerrow-column {
  border-top-color: #c1c6c8
}
 
.slick-group {
}

.slick-group-toggle {
  display: inline-block;
}

.slick-cell.highlighted {
  background: #ffffff;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
}

.slick-cell.flashing {
  border: 1px solid #ff3c52 !important;
}
.interact-can-drop {
    background: #c1c6c8
}
.slick-cell.editable {
  z-index: 11;
  overflow: visible;
  background: #ffffff;
  border-color: black;
  border-style: solid;
}

.slick-cell:focus {
  outline: none;
}

.slick-reorder-proxy {
  display: inline-block;
  background: #c1c6c8
  cursor: move;
}

.slick-reorder-guide {
  display: inline-block;
  height: 2px;
  background: #c1c6c8
}

.slick-selection {
  z-index: 10;
  position: absolute;
  border: 2px dashed #000000;
}

.grid-header {
  border: 1px solid #c1c6c8
  border-bottom: 0;
  border-top: 0;
  color: #000000;
  height: 24px;
  line-height: 24px;
}

.grid-header label {
  display: inline-block;
  font-weight: bold;
  margin: auto auto auto 6px;
}

.grid-header .ui-icon {
  margin: 4px 4px auto 6px;
  background-color: transparent;
  border-color: transparent;
}

.grid-header .ui-icon.ui-state-hover {
  background-color: #ffffff;
}

.grid-header #txtSearch {
  margin: 0 4px 0 4px;
  padding: 2px 2px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border: 1px solid #c1c6c8
}

.options-panel {
  -moz-border-radius: 6px;
  -webkit-border-radius: 6px;
  border: 1px solid #c1c6c8
  background: #f0f0f0;
  padding: 4px;
  margin-bottom: 20px;
  width: 320px;
  position: absolute;
  top: 0px;
  left: 650px;
}

/* Individual cell styles */
.slick-cell.task-name {
  font-weight: bold;
  text-align: right;
}

.slick-cell.task-percent {
  text-align: right;
}

.slick-cell.cell-move-handle {
  font-weight: bold;
  text-align: right;
  border-right: solid #c1c6c8

  cursor: move;
}

.cell-move-handle:hover {
  background: #c1c6c8
}

.slick-row.selected .cell-move-handle {
  background: green;
}

.slick-row .cell-actions {
  text-align: left;
}

.slick-row.complete {
  
}

      
        `;
    }
}

class SlickgridCore {

    constructor(Slickgrid, container) {
        this._grid = null;
        this._width = null;
        this._height = null;
        this.slickgrid = Slickgrid;
        this.container = container;
    }

    addTable(data, options) {
        this._grid = new this.slickgrid.Grid(this.container, data.rowData, data.headerData, options);
        this._grid.onColumnsReordered.subscribe(function (e, args) {
            console.info('columns reordered');
        });
    }

    setSize(width, height) {
        if (width) this.container.style.width = `${parseInt(width)}px`;
        if (height) this.container.style.height = `${parseInt(height)}px`;
        if (this._grid) {
            // Update grid
            this._grid.resizeCanvas();
            this._grid.autosizeColumns();
        }
    }
}

class SlickGridComponent extends HTMLElement {

    // Not supported yet, but this is the eventual spec...
    constructor() {
        super();
        this._init();
    }

    _init() {

        let builder = new StyleBuilder();
        let styleTag = document.createElement('style');
        styleTag.innerHTML = builder.build();
        styleTag.setAttribute('scoped', '');
        this.appendChild(styleTag);

        this.container = document.createElement('div');
        this.appendChild(this.container);
        this._core = new SlickgridCore(Slickgrid, this.container);
    }

    addTable(data, options) {
        this._core.addTable(data, options);
    }

    setSize(width, height) {
        this._core.setSize(width, height);
    }

    createdCallback() {
        this._init();
    }
}
document.registerElement('slick-grid', SlickGridComponent);

}());
