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
    results : [ 500, 2458, 1476, 3934, 221, 133 ]
  }, {
    name : "avro-specific",
    properties : [ "neutral", "binary", "fast" ],
    results : [ 127, 2109, 1840, 3949, 221, 133 ]
  }, {
    name : "bson/jackson/databind",
    properties : [ "neutral", "binary" ],
    results : [ 88, 6936, 8669, 15605, 506, 286 ]
  }, {
    name : "bson/mongodb/manual",
    properties : [ "neutral", "binary" ],
    results : [ 86, 4524, 10684, 15208, 495, 278 ]
  }, {
    name : "cbor-col/jackson/databind",
    properties : [ "neutral", "text", "json", "fast" ],
    results : [ 86, 1267, 1920, 3187, 251, 165 ]
  }, {
    name : "cbor/jackson+afterburner/databind",
    properties : [ "binary", "fast" ],
    results : [ 87, 1443, 2107, 3550, 397, 246 ]
  }, {
    name : "cbor/jackson/databind",
    properties : [ "neutral", "binary", "fast" ],
    results : [ 86, 1678, 2848, 4526, 397, 246 ]
  }, {
    name : "cbor/jackson/manual",
    properties : [ "neutral", "binary", "fast" ],
    results : [ 88, 1137, 1647, 2783, 386, 238 ]
  }, {
    name : "fst-flat-pre",
    properties : [ "binary", "fast" ],
    results : [ 85, 878, 1003, 1881, 251, 165 ]
  }, {
    name : "fst-flat",
    properties : [ "binary", "fast" ],
    results : [ 87, 1230, 1510, 2740, 314, 204 ]
  }, {
    name : "fst",
    properties : [ "binary", "fast" ],
    results : [ 87, 2086, 2057, 4143, 316, 203 ]
  }, {
    name : "hessian",
    properties : [ "neutral", "binary" ],
    results : [ 87, 4924, 7462, 12386, 501, 313 ]
  }, {
    name : "java-built-in",
    properties : [ "binary", "slow" ],
    results : [ 87, 7093, 40900, 47993, 889, 514 ]
  }, {
    name : "java-built-in-serializer",
    properties : [ "binary", "slow" ],
    results : [ 87, 7887, 39105, 46991, 889, 514 ]
  }, {
    name : "java-manual",
    properties : [ "binary", "fast" ],
    results : [ 89, 1151, 835, 1986, 255, 147 ]
  }, {
    name : "jboss-marshalling-river-ct-manual",
    properties : [ "binary", "fast" ],
    results : [ 88, 2238, 1715, 3954, 289, 167 ]
  }, {
    name : "jboss-marshalling-river-ct",
    properties : [ "binary" ],
    results : [ 87, 4095, 3132, 7227, 298, 199 ]
  }, {
    name : "jboss-marshalling-river-manual",
    properties : [ "binary" ],
    results : [ 87, 2826, 5742, 8568, 483, 240 ]
  }, {
    name : "jboss-marshalling-river",
    properties : [ "binary", "slow" ],
    results : [ 87, 6099, 33984, 40083, 694, 400 ]
  }, {
    name : "jboss-marshalling-serial",
    properties : [ "binary", "slow" ],
    results : [ 87, 14569, 40794, 55363, 856, 498 ]
  }, {
    name : "jboss-serialization",
    properties : [ "binary" ],
    results : [ 87, 8333, 8237, 16570, 932, 582 ]
  }, {
    name : "json/argo/manual-tree",
    properties : [ "neutral", "text", "json", "slow" ],
    results : [ 87, 87342, 19717, 107059, 485, 263 ]
  }, {
    name : "json-col/jackson/databind",
    properties : [ "neutral", "text", "json", "fast" ],
    results : [ 85, 1796, 2174, 3970, 293, 178 ]
  }, {
    name : "json/dsl-platform/full",
    properties : [ "neutral", "text", "json", "fast" ],
    results : [ 72, 991, 1353, 2345, 485, 261 ]
  }, {
    name : "json/dsl-platform/minimal",
    properties : [ "neutral", "text", "json", "fast" ],
    results : [ 72, 956, 1255, 2210, 437, 233 ]
  }, {
    name : "json/fastjson/databind",
    properties : [ "neutral", "text", "json", "fast" ],
    results : [ 85, 1629, 1549, 3179, 486, 262 ]
  }, {
    name : "json/flexjson/databind",
    properties : [ "neutral", "text", "json", "slow" ],
    results : [ 86, 25498, 36163, 61661, 503, 273 ]
  }, {
    name : "json/gson/databind",
    properties : [ "neutral", "text", "json" ],
    results : [ 86, 7042, 6341, 13383, 486, 259 ]
  }, {
    name : "json/gson/manual",
    properties : [ "neutral", "text", "json" ],
    results : [ 86, 4522, 5111, 9634, 468, 253 ]
  }, {
    name : "json/gson/manual-tree",
    properties : [ "neutral", "text", "json" ],
    results : [ 86, 6666, 7341, 14007, 485, 259 ]
  }, {
    name : "json/jackson+afterburner/databind",
    properties : [ "binary", "fast" ],
    results : [ 89, 1910, 2536, 4447, 485, 261 ]
  }, {
    name : "json/jackson/databind",
    properties : [ "neutral", "text", "json" ],
    results : [ 88, 2365, 3224, 5588, 485, 261 ]
  }, {
    name : "json/jackson-jr/databind",
    properties : [ "neutral", "text", "json" ],
    results : [ 88, 2346, 3390, 5735, 468, 255 ]
  }, {
    name : "json/jackson/manual",
    properties : [ "neutral", "text", "json", "fast" ],
    results : [ 88, 1463, 1969, 3431, 468, 253 ]
  }, {
    name : "json/javax-stream/glassfish",
    properties : [ "neutral", "text", "json", "slow" ],
    results : [ 88, 8536, 14472, 23008, 468, 253 ]
  }, {
    name : "json/javax-tree/glassfish",
    properties : [ "neutral", "text", "json", "slow" ],
    results : [ 1771, 12088, 16315, 28403, 485, 263 ]
  }, {
    name : "json/jsonij/manual-jpath",
    properties : [ "neutral", "text", "json", "slow" ],
    results : [ 87, 48688, 17186, 65874, 478, 259 ]
  }, {
    name : "json/json-lib/databind",
    properties : [ "neutral", "text", "json", "slow" ],
    results : [ 91, 33852, 150136, 183989, 485, 263 ]
  }, {
    name : "json/json.simple/manual",
    properties : [ "neutral", "text", "json" ],
    results : [ 86, 7351, 11031, 18382, 495, 269 ]
  }, {
    name : "json/json-smart/manual-tree",
    properties : [ "neutral", "text", "json" ],
    results : [ 86, 7307, 5442, 12749, 495, 269 ]
  }, {
    name : "json/org.json/manual-tree",
    properties : [ "neutral", "text", "json", "slow" ],
    results : [ 86, 8721, 11191, 19912, 485, 259 ]
  }, {
    name : "json/protobuf",
    properties : [ "neutral", "text", "json", "slow" ],
    results : [ 181, 11077, 72472, 83549, 488, 253 ]
  }, {
    name : "json/protostuff-manual",
    properties : [ "neutral", "text", "json", "fast" ],
    results : [ 87, 1785, 2428, 4213, 449, 233 ]
  }, {
    name : "json/protostuff-runtime",
    properties : [ "neutral", "text", "json" ],
    results : [ 86, 2086, 2747, 4832, 469, 243 ]
  }, {
    name : "json/svenson/databind",
    properties : [ "neutral", "text", "json", "slow" ],
    results : [ 86, 5639, 14464, 20103, 495, 269 ]
  }, {
    name : "kryo-flat-pre",
    properties : [ "binary", "fast" ],
    results : [ 87, 880, 1140, 2020, 212, 132 ]
  }, {
    name : "kryo-flat",
    properties : [ "binary", "fast" ],
    results : [ 87, 1088, 1460, 2547, 268, 177 ]
  }, {
    name : "kryo-manual",
    properties : [ "binary", "fast" ],
    results : [ 86, 689, 832, 1521, 211, 131 ]
  }, {
    name : "kryo-opt",
    properties : [ "binary", "fast" ],
    results : [ 87, 841, 1194, 2035, 209, 129 ]
  }, {
    name : "kryo-serializer",
    properties : [ "binary", "fast" ],
    results : [ 86, 2216, 1920, 4136, 286, 188 ]
  }, {
    name : "msgpack/databind",
    properties : [ "neutral", "binary", "fast" ],
    results : [ 86, 1185, 1794, 2979, 233, 146 ]
  }, {
    name : "msgpack/manual",
    properties : [ "neutral", "binary", "fast" ],
    results : [ 86, 1176, 1730, 2906, 233, 146 ]
  }, {
    name : "protobuf/protostuff",
    properties : [ "neutral", "binary", "fast" ],
    results : [ 113, 698, 967, 1665, 239, 149 ]
  }, {
    name : "protobuf/protostuff-runtime",
    properties : [ "neutral", "binary", "fast" ],
    results : [ 86, 942, 1179, 2120, 241, 150 ]
  }, {
    name : "protobuf",
    properties : [ "neutral", "binary", "fast" ],
    results : [ 180, 1700, 967, 2667, 239, 149 ]
  }, {
    name : "protostuff-graph",
    properties : [ "binary", "fast" ],
    results : [ 115, 956, 1027, 1983, 239, 150 ]
  }, {
    name : "protostuff-graph-runtime",
    properties : [ "binary", "fast" ],
    results : [ 89, 1153, 1309, 2462, 241, 151 ]
  }, {
    name : "protostuff-manual",
    properties : [ "binary", "fast" ],
    results : [ 87, 614, 940, 1554, 239, 150 ]
  }, {
    name : "protostuff",
    properties : [ "binary", "fast" ],
    results : [ 116, 640, 969, 1609, 239, 150 ]
  }, {
    name : "protostuff-runtime",
    properties : [ "binary", "fast" ],
    results : [ 87, 863, 1144, 2008, 241, 151 ]
  }, {
    name : "scala/java-built-in",
    properties : [ "slow" ],
    results : [ 612, 12489, 64668, 77157, 1293, 698 ]
  }, {
    name : "scala/sbinary",
    properties : [ "fast" ],
    results : [ 629, 2489, 1548, 4037, 255, 147 ]
  }, {
    name : "smile-col/jackson/databind",
    properties : [ "neutral", "text", "json", "fast" ],
    results : [ 86, 1336, 1914, 3250, 252, 165 ]
  }, {
    name : "smile/jackson+afterburner/databind",
    properties : [ "binary", "fast" ],
    results : [ 85, 1680, 1937, 3617, 352, 252 ]
  }, {
    name : "smile/jackson/databind",
    properties : [ "binary", "fast" ],
    results : [ 86, 2111, 2473, 4584, 338, 241 ]
  }, {
    name : "smile/jackson/manual",
    properties : [ "binary", "fast" ],
    results : [ 87, 1200, 1477, 2677, 341, 244 ]
  }, {
    name : "stephenerialization",
    properties : [ "binary", "slow" ],
    results : [ 82, 7922, 42954, 50876, 1093, 515 ]
  }, {
    name : "thrift-compact",
    properties : [ "neutral", "binary", "fast" ],
    results : [ 179, 1901, 1191, 3092, 240, 148 ]
  }, {
    name : "thrift",
    properties : [ "neutral", "binary", "fast" ],
    results : [ 176, 2297, 1277, 3574, 349, 197 ]
  }, {
    name : "wobly-compact",
    properties : [ "binary", "fast" ],
    results : [ 63, 1226, 772, 1998, 225, 139 ]
  }, {
    name : "wobly",
    properties : [ "binary", "fast" ],
    results : [ 63, 1161, 749, 1910, 251, 151 ]
  }, {
    name : "xml/aalto-manual",
    properties : [ "neutral", "text", "xml" ],
    results : [ 86, 2635, 3904, 6539, 653, 304 ]
  }, {
    name : "xml/exi-manual",
    properties : [ "neutral", "text", "xml", "slow" ],
    results : [ 89, 19909, 19579, 39488, 337, 327 ]
  }, {
    name : "xml/fastinfo-manual",
    properties : [ "neutral", "text", "xml" ],
    results : [ 86, 8000, 6896, 14897, 377, 284 ]
  }, {
    name : "xml/jackson/databind",
    properties : [ "neutral", "text", "xml" ],
    results : [ 88, 4203, 7056, 11259, 683, 286 ]
  }, {
    name : "xml/javolution/manual",
    properties : [ "neutral", "text", "xml" ],
    results : [ 86, 6980, 10970, 17949, 504, 263 ]
  }, {
    name : "xml/woodstox-manual",
    properties : [ "neutral", "text", "xml" ],
    results : [ 85, 3948, 6237, 10184, 653, 304 ]
  }, {
    name : "xml/xstream+c-aalto",
    properties : [ "neutral", "text", "xml" ],
    results : [ 87, 5905, 12817, 18722, 525, 273 ]
  }, {
    name : "xml/xstream+c-fastinfo",
    properties : [ "neutral", "text", "xml", "slow" ],
    results : [ 89, 10516, 11043, 21559, 345, 264 ]
  }, {
    name : "xml/xstream+c",
    properties : [ "neutral", "text", "xml", "slow" ],
    results : [ 86, 7338, 18430, 25768, 487, 244 ]
  }, {
    name : "xml/xstream+c-woodstox",
    properties : [ "neutral", "text", "xml", "slow" ],
    results : [ 87, 7143, 15567, 22710, 525, 273 ]
  }, {
    name : "yaml/jackson/databind",
    properties : [ "neutral", "text", "json", "slow" ],
    results : [ 86, 26138, 41324, 67462, 505, 260 ]
  } ]
}