var benchmarkResults = {
  categories : [ {
    name : "Format",
    description : "The format used to serialize.",
    properties : [ {
      name : "neutral",
      description : "The serialization format is language-neutral."
    }, {
      name : "binary",
      description : "Some binary format."
    }, {
      name : "text",
      description : "Some human-readable text format."
    }, {
      name : "json",
      description : null
    }, {
      name : "xml",
      description : null
    } ]
  }, {
    name : "Spec",
    description : "How you specify the data structure to the serializer.",
    properties : [ {
      name : "pojo",
      description : "The serializer works with user-defined plain Java classes."
    }, {
      name : "schema",
      description : "You must define a schema for your data types and run the library's compiler to generate Java classes."
    }, {
      name : "manual",
      description : "You must call the serialization routines manually."
    }, {
      name : "manual.more",
      description : "You must call the serialization routines manually, and there is more effort than in the \"manual\" case."
    } ]
  }, {
    name : "POJO Hints",
    description : "For POJO serializers, did we specify any hints to help them out?",
    properties : [ {
      name : "hint.type",
      description : "The serializer was given the list of types."
    }, {
      name : "hint.null",
      description : "The serializer was given the list of non-null fields."
    } ]
  }, {
    name : "Speed",
    description : null,
    properties : [ {
      name : "fast",
      description : "Serializers whose round-trip time is in the top 50th percentile."
    }, {
      name : "slow",
      description : "Serializers whose round-trip time is in the bottom 25th percentile."
    } ]
  } ],
  columns : [ "create", "ser", "deser", "total", "size", "size-gz" ],
  entries : [ {
    name : "avro-generic",
    properties : [ "neutral", "binary", "fast" ],
    results : [ 497, 2400, 1598, 3998, 221, 133 ]
  }, {
    name : "avro-specific",
    properties : [ "neutral", "binary", "fast" ],
    results : [ 122, 2076, 1899, 3975, 221, 133 ]
  }, {
    name : "bson/jackson/databind",
    properties : [ "neutral", "binary" ],
    results : [ 89, 6984, 8650, 15634, 506, 286 ]
  }, {
    name : "bson/mongodb/manual",
    properties : [ "neutral", "binary" ],
    results : [ 88, 4528, 10808, 15336, 495, 278 ]
  }, {
    name : "cbor-col/jackson/databind",
    properties : [ "neutral", "text", "json", "fast" ],
    results : [ 87, 1265, 1925, 3190, 251, 165 ]
  }, {
    name : "cbor/jackson+afterburner/databind",
    properties : [ "binary", "fast" ],
    results : [ 87, 1384, 2202, 3587, 397, 246 ]
  }, {
    name : "cbor/jackson/databind",
    properties : [ "neutral", "binary", "fast" ],
    results : [ 89, 1657, 2636, 4294, 397, 246 ]
  }, {
    name : "cbor/jackson/manual",
    properties : [ "neutral", "binary", "fast" ],
    results : [ 89, 1128, 1803, 2930, 386, 238 ]
  }, {
    name : "fst-flat-pre",
    properties : [ "binary", "fast" ],
    results : [ 90, 889, 1016, 1905, 251, 165 ]
  }, {
    name : "fst-flat",
    properties : [ "binary", "fast" ],
    results : [ 90, 1209, 1535, 2745, 314, 204 ]
  }, {
    name : "fst",
    properties : [ "binary", "fast" ],
    results : [ 89, 2079, 1973, 4053, 316, 203 ]
  }, {
    name : "hessian",
    properties : [ "neutral", "binary" ],
    results : [ 90, 4886, 7384, 12270, 501, 313 ]
  }, {
    name : "java-built-in",
    properties : [ "binary", "slow" ],
    results : [ 85, 7293, 40026, 47319, 889, 514 ]
  }, {
    name : "java-built-in-serializer",
    properties : [ "binary", "slow" ],
    results : [ 90, 7346, 39383, 46728, 889, 514 ]
  }, {
    name : "java-manual",
    properties : [ "binary", "fast" ],
    results : [ 89, 1151, 849, 1999, 255, 147 ]
  }, {
    name : "jboss-marshalling-river-ct-manual",
    properties : [ "binary", "fast" ],
    results : [ 89, 2217, 1721, 3937, 289, 167 ]
  }, {
    name : "jboss-marshalling-river-ct",
    properties : [ "binary" ],
    results : [ 89, 3988, 3211, 7200, 298, 199 ]
  }, {
    name : "jboss-marshalling-river-manual",
    properties : [ "binary" ],
    results : [ 87, 2964, 6109, 9074, 483, 240 ]
  }, {
    name : "jboss-marshalling-river",
    properties : [ "binary", "slow" ],
    results : [ 89, 6112, 35780, 41892, 694, 400 ]
  }, {
    name : "jboss-marshalling-serial",
    properties : [ "binary", "slow" ],
    results : [ 88, 14631, 44533, 59164, 856, 498 ]
  }, {
    name : "jboss-serialization",
    properties : [ "binary" ],
    results : [ 87, 8476, 8205, 16681, 932, 582 ]
  }, {
    name : "json/argo/manual-tree",
    properties : [ "neutral", "text", "json", "slow" ],
    results : [ 90, 84065, 20037, 104102, 485, 263 ]
  }, {
    name : "json-col/jackson/databind",
    properties : [ "neutral", "text", "json", "fast" ],
    results : [ 86, 1705, 2145, 3850, 293, 178 ]
  }, {
    name : "json/dsl-platform",
    properties : [ "neutral", "text", "json", "fast" ],
    results : [ 76, 939, 1388, 2327, 437, 233 ]
  }, {
    name : "json/fastjson/databind",
    properties : [ "neutral", "text", "json", "fast" ],
    results : [ 87, 1616, 1553, 3169, 486, 262 ]
  }, {
    name : "json/flexjson/databind",
    properties : [ "neutral", "text", "json", "slow" ],
    results : [ 88, 25562, 36689, 62252, 503, 273 ]
  }, {
    name : "json/gson/databind",
    properties : [ "neutral", "text", "json" ],
    results : [ 88, 6965, 6318, 13282, 486, 259 ]
  }, {
    name : "json/gson/manual",
    properties : [ "neutral", "text", "json" ],
    results : [ 89, 4569, 5102, 9671, 468, 253 ]
  }, {
    name : "json/gson/manual-tree",
    properties : [ "neutral", "text", "json" ],
    results : [ 88, 6905, 7408, 14313, 485, 259 ]
  }, {
    name : "json/jackson+afterburner/databind",
    properties : [ "binary", "fast" ],
    results : [ 88, 1798, 2507, 4305, 485, 261 ]
  }, {
    name : "json/jackson/databind",
    properties : [ "neutral", "text", "json" ],
    results : [ 90, 2247, 3074, 5321, 485, 261 ]
  }, {
    name : "json/jackson-jr/databind",
    properties : [ "neutral", "text", "json" ],
    results : [ 86, 2358, 3421, 5779, 468, 255 ]
  }, {
    name : "json/jackson/manual",
    properties : [ "neutral", "text", "json", "fast" ],
    results : [ 89, 1461, 1995, 3456, 468, 253 ]
  }, {
    name : "json/javax-stream/glassfish",
    properties : [ "neutral", "text", "json", "slow" ],
    results : [ 92, 8681, 14860, 23541, 468, 253 ]
  }, {
    name : "json/javax-tree/glassfish",
    properties : [ "neutral", "text", "json", "slow" ],
    results : [ 1821, 12445, 17025, 29470, 485, 263 ]
  }, {
    name : "json/jsonij/manual-jpath",
    properties : [ "neutral", "text", "json", "slow" ],
    results : [ 88, 46843, 17791, 64635, 478, 258 ]
  }, {
    name : "json/json-lib/databind",
    properties : [ "neutral", "text", "json", "slow" ],
    results : [ 89, 34228, 154407, 188635, 485, 263 ]
  }, {
    name : "json/json.simple/manual",
    properties : [ "neutral", "text", "json" ],
    results : [ 89, 7335, 10673, 18009, 495, 269 ]
  }, {
    name : "json/json-smart/manual-tree",
    properties : [ "neutral", "text", "json" ],
    results : [ 85, 7458, 5575, 13033, 495, 269 ]
  }, {
    name : "json/org.json/manual-tree",
    properties : [ "neutral", "text", "json", "slow" ],
    results : [ 89, 8662, 11208, 19870, 485, 259 ]
  }, {
    name : "json/protobuf",
    properties : [ "neutral", "text", "json", "slow" ],
    results : [ 183, 11497, 73294, 84790, 488, 253 ]
  }, {
    name : "json/protostuff-manual",
    properties : [ "neutral", "text", "json", "fast" ],
    results : [ 90, 1797, 2423, 4220, 449, 233 ]
  }, {
    name : "json/protostuff-runtime",
    properties : [ "neutral", "text", "json", "fast" ],
    results : [ 90, 2113, 2773, 4885, 469, 243 ]
  }, {
    name : "json/svenson/databind",
    properties : [ "neutral", "text", "json", "slow" ],
    results : [ 89, 5603, 14162, 19765, 495, 269 ]
  }, {
    name : "kryo-flat-pre",
    properties : [ "binary", "fast" ],
    results : [ 86, 875, 1130, 2005, 212, 132 ]
  }, {
    name : "kryo-flat",
    properties : [ "binary", "fast" ],
    results : [ 90, 1126, 1504, 2631, 268, 177 ]
  }, {
    name : "kryo-manual",
    properties : [ "binary", "fast" ],
    results : [ 86, 687, 831, 1518, 211, 131 ]
  }, {
    name : "kryo-opt",
    properties : [ "binary", "fast" ],
    results : [ 90, 859, 1167, 2026, 209, 129 ]
  }, {
    name : "kryo-serializer",
    properties : [ "binary", "fast" ],
    results : [ 90, 2228, 1961, 4189, 286, 188 ]
  }, {
    name : "msgpack/databind",
    properties : [ "neutral", "binary", "fast" ],
    results : [ 87, 1194, 1815, 3008, 233, 146 ]
  }, {
    name : "msgpack/manual",
    properties : [ "neutral", "binary", "fast" ],
    results : [ 89, 1211, 1725, 2937, 233, 146 ]
  }, {
    name : "protobuf/protostuff",
    properties : [ "neutral", "binary", "fast" ],
    results : [ 117, 707, 976, 1684, 239, 149 ]
  }, {
    name : "protobuf/protostuff-runtime",
    properties : [ "neutral", "binary", "fast" ],
    results : [ 89, 949, 1168, 2117, 241, 150 ]
  }, {
    name : "protobuf",
    properties : [ "neutral", "binary", "fast" ],
    results : [ 184, 1721, 971, 2692, 239, 149 ]
  }, {
    name : "protostuff-graph",
    properties : [ "binary", "fast" ],
    results : [ 117, 928, 1049, 1977, 239, 150 ]
  }, {
    name : "protostuff-graph-runtime",
    properties : [ "binary", "fast" ],
    results : [ 85, 1138, 1293, 2431, 241, 151 ]
  }, {
    name : "protostuff-manual",
    properties : [ "binary", "fast" ],
    results : [ 90, 603, 963, 1566, 239, 150 ]
  }, {
    name : "protostuff",
    properties : [ "binary", "fast" ],
    results : [ 113, 642, 964, 1606, 239, 150 ]
  }, {
    name : "protostuff-runtime",
    properties : [ "binary", "fast" ],
    results : [ 88, 847, 1129, 1976, 241, 151 ]
  }, {
    name : "smile-col/jackson/databind",
    properties : [ "neutral", "text", "json", "fast" ],
    results : [ 89, 1402, 1916, 3318, 252, 165 ]
  }, {
    name : "smile/jackson+afterburner/databind",
    properties : [ "binary", "fast" ],
    results : [ 83, 1604, 1953, 3557, 352, 252 ]
  }, {
    name : "smile/jackson/databind",
    properties : [ "binary", "fast" ],
    results : [ 88, 2016, 2382, 4398, 338, 241 ]
  }, {
    name : "smile/jackson/manual",
    properties : [ "binary", "fast" ],
    results : [ 88, 1190, 1474, 2664, 341, 244 ]
  }, {
    name : "stephenerialization",
    properties : [ "binary", "slow" ],
    results : [ 84, 8155, 41364, 49519, 1093, 515 ]
  }, {
    name : "thrift-compact",
    properties : [ "neutral", "binary", "fast" ],
    results : [ 187, 1964, 1198, 3162, 240, 148 ]
  }, {
    name : "thrift",
    properties : [ "neutral", "binary", "fast" ],
    results : [ 177, 2370, 1299, 3669, 349, 197 ]
  }, {
    name : "wobly-compact",
    properties : [ "binary", "fast" ],
    results : [ 66, 1237, 771, 2008, 225, 139 ]
  }, {
    name : "wobly",
    properties : [ "binary", "fast" ],
    results : [ 65, 1171, 723, 1894, 251, 151 ]
  }, {
    name : "xml/aalto-manual",
    properties : [ "neutral", "text", "xml" ],
    results : [ 89, 2688, 3942, 6631, 653, 304 ]
  }, {
    name : "xml/exi-manual",
    properties : [ "neutral", "text", "xml", "slow" ],
    results : [ 87, 20553, 18737, 39290, 337, 327 ]
  }, {
    name : "xml/fastinfo-manual",
    properties : [ "neutral", "text", "xml" ],
    results : [ 89, 8186, 7235, 15421, 377, 284 ]
  }, {
    name : "xml/jackson/databind",
    properties : [ "neutral", "text", "xml" ],
    results : [ 89, 3769, 7053, 10822, 683, 286 ]
  }, {
    name : "xml/javolution/manual",
    properties : [ "neutral", "text", "xml" ],
    results : [ 87, 7082, 10723, 17805, 504, 263 ]
  }, {
    name : "xml/woodstox-manual",
    properties : [ "neutral", "text", "xml" ],
    results : [ 88, 4084, 6215, 10299, 653, 304 ]
  }, {
    name : "xml/xstream+c-aalto",
    properties : [ "neutral", "text", "xml" ],
    results : [ 87, 5926, 13494, 19420, 525, 273 ]
  }, {
    name : "xml/xstream+c-fastinfo",
    properties : [ "neutral", "text", "xml", "slow" ],
    results : [ 90, 10307, 10880, 21187, 345, 264 ]
  }, {
    name : "xml/xstream+c",
    properties : [ "neutral", "text", "xml", "slow" ],
    results : [ 87, 7240, 18378, 25619, 487, 244 ]
  }, {
    name : "xml/xstream+c-woodstox",
    properties : [ "neutral", "text", "xml", "slow" ],
    results : [ 89, 7098, 16334, 23433, 525, 273 ]
  }, {
    name : "yaml/jackson/databind",
    properties : [ "neutral", "text", "json", "slow" ],
    results : [ 88, 26053, 41809, 67862, 505, 260 ]
  } ]
}