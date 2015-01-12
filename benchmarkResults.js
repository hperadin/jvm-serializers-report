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
    results : [ 490, 2453, 1580, 4032, 221, 133 ]
  }, {
    name : "avro-specific",
    properties : [ "neutral", "binary", "fast" ],
    results : [ 123, 2136, 1875, 4011, 221, 133 ]
  }, {
    name : "bson/jackson/databind",
    properties : [ "neutral", "binary" ],
    results : [ 85, 6806, 8388, 15194, 506, 286 ]
  }, {
    name : "bson/mongodb/manual",
    properties : [ "neutral", "binary" ],
    results : [ 90, 4534, 10664, 15198, 495, 278 ]
  }, {
    name : "cbor-col/jackson/databind",
    properties : [ "neutral", "text", "json", "fast" ],
    results : [ 88, 1306, 2009, 3314, 251, 165 ]
  }, {
    name : "cbor/jackson+afterburner/databind",
    properties : [ "binary", "fast" ],
    results : [ 88, 1404, 2145, 3550, 397, 246 ]
  }, {
    name : "cbor/jackson/databind",
    properties : [ "neutral", "binary", "fast" ],
    results : [ 86, 1685, 2687, 4371, 397, 246 ]
  }, {
    name : "cbor/jackson/manual",
    properties : [ "neutral", "binary", "fast" ],
    results : [ 87, 1123, 1738, 2861, 386, 238 ]
  }, {
    name : "fst-flat-pre",
    properties : [ "binary", "fast" ],
    results : [ 89, 906, 997, 1903, 251, 165 ]
  }, {
    name : "fst-flat",
    properties : [ "binary", "fast" ],
    results : [ 86, 1219, 1531, 2750, 314, 204 ]
  }, {
    name : "fst",
    properties : [ "binary", "fast" ],
    results : [ 88, 2059, 1983, 4042, 316, 203 ]
  }, {
    name : "hessian",
    properties : [ "neutral", "binary" ],
    results : [ 88, 4894, 7360, 12254, 501, 313 ]
  }, {
    name : "java-built-in",
    properties : [ "binary", "slow" ],
    results : [ 87, 7189, 40870, 48059, 889, 514 ]
  }, {
    name : "java-built-in-serializer",
    properties : [ "binary", "slow" ],
    results : [ 89, 7351, 40477, 47828, 889, 514 ]
  }, {
    name : "java-manual",
    properties : [ "binary", "fast" ],
    results : [ 88, 1145, 866, 2012, 255, 147 ]
  }, {
    name : "jboss-marshalling-river-ct-manual",
    properties : [ "binary", "fast" ],
    results : [ 87, 2248, 1695, 3944, 289, 167 ]
  }, {
    name : "jboss-marshalling-river-ct",
    properties : [ "binary" ],
    results : [ 91, 3997, 3166, 7162, 298, 199 ]
  }, {
    name : "jboss-marshalling-river-manual",
    properties : [ "binary" ],
    results : [ 86, 2881, 6012, 8893, 483, 240 ]
  }, {
    name : "jboss-marshalling-river",
    properties : [ "binary", "slow" ],
    results : [ 91, 6206, 34808, 41014, 694, 400 ]
  }, {
    name : "jboss-marshalling-serial",
    properties : [ "binary", "slow" ],
    results : [ 89, 14576, 41973, 56550, 856, 498 ]
  }, {
    name : "jboss-serialization",
    properties : [ "binary" ],
    results : [ 89, 8383, 8345, 16727, 932, 582 ]
  }, {
    name : "json/argo/manual-tree",
    properties : [ "neutral", "text", "json", "slow" ],
    results : [ 89, 85448, 19574, 105022, 485, 263 ]
  }, {
    name : "json-col/jackson/databind",
    properties : [ "neutral", "text", "json", "fast" ],
    results : [ 89, 1795, 2169, 3964, 293, 178 ]
  }, {
    name : "json/dsl-platform",
    properties : [ "neutral", "text", "json", "fast" ],
    results : [ 73, 928, 1386, 2314, 437, 233 ]
  }, {
    name : "json/fastjson/databind",
    properties : [ "neutral", "text", "json", "fast" ],
    results : [ 93, 1657, 1563, 3220, 486, 262 ]
  }, {
    name : "json/flexjson/databind",
    properties : [ "neutral", "text", "json", "slow" ],
    results : [ 87, 25134, 37071, 62205, 503, 273 ]
  }, {
    name : "json/gson/databind",
    properties : [ "neutral", "text", "json" ],
    results : [ 86, 7002, 6283, 13285, 486, 259 ]
  }, {
    name : "json/gson/manual",
    properties : [ "neutral", "text", "json" ],
    results : [ 94, 4481, 5068, 9549, 468, 253 ]
  }, {
    name : "json/gson/manual-tree",
    properties : [ "neutral", "text", "json" ],
    results : [ 89, 6607, 7391, 13998, 485, 259 ]
  }, {
    name : "json/jackson+afterburner/databind",
    properties : [ "binary", "fast" ],
    results : [ 90, 1812, 2531, 4343, 485, 261 ]
  }, {
    name : "json/jackson/databind",
    properties : [ "neutral", "text", "json" ],
    results : [ 90, 2261, 3058, 5319, 485, 261 ]
  }, {
    name : "json/jackson-jr/databind",
    properties : [ "neutral", "text", "json" ],
    results : [ 90, 2362, 3322, 5684, 468, 255 ]
  }, {
    name : "json/jackson/manual",
    properties : [ "neutral", "text", "json", "fast" ],
    results : [ 89, 1440, 1983, 3423, 468, 253 ]
  }, {
    name : "json/javax-stream/glassfish",
    properties : [ "neutral", "text", "json", "slow" ],
    results : [ 89, 8842, 14683, 23525, 468, 253 ]
  }, {
    name : "json/javax-tree/glassfish",
    properties : [ "neutral", "text", "json", "slow" ],
    results : [ 1733, 12271, 16516, 28787, 485, 263 ]
  }, {
    name : "json/jsonij/manual-jpath",
    properties : [ "neutral", "text", "json", "slow" ],
    results : [ 89, 46846, 17481, 64327, 478, 255 ]
  }, {
    name : "json/json-lib/databind",
    properties : [ "neutral", "text", "json", "slow" ],
    results : [ 90, 34255, 155134, 189389, 485, 263 ]
  }, {
    name : "json/json.simple/manual",
    properties : [ "neutral", "text", "json" ],
    results : [ 88, 7322, 10567, 17889, 495, 269 ]
  }, {
    name : "json/json-smart/manual-tree",
    properties : [ "neutral", "text", "json" ],
    results : [ 88, 7289, 5478, 12768, 495, 269 ]
  }, {
    name : "json/org.json/manual-tree",
    properties : [ "neutral", "text", "json", "slow" ],
    results : [ 91, 8579, 11313, 19892, 485, 259 ]
  }, {
    name : "json/protobuf",
    properties : [ "neutral", "text", "json", "slow" ],
    results : [ 183, 11487, 73519, 85006, 488, 253 ]
  }, {
    name : "json/protostuff-manual",
    properties : [ "neutral", "text", "json", "fast" ],
    results : [ 90, 1839, 2460, 4299, 449, 233 ]
  }, {
    name : "json/protostuff-runtime",
    properties : [ "neutral", "text", "json", "fast" ],
    results : [ 89, 2161, 2809, 4970, 469, 243 ]
  }, {
    name : "json/svenson/databind",
    properties : [ "neutral", "text", "json", "slow" ],
    results : [ 85, 5788, 14248, 20037, 495, 269 ]
  }, {
    name : "kryo-flat-pre",
    properties : [ "binary", "fast" ],
    results : [ 88, 860, 1188, 2048, 212, 132 ]
  }, {
    name : "kryo-flat",
    properties : [ "binary", "fast" ],
    results : [ 87, 1099, 1432, 2531, 268, 177 ]
  }, {
    name : "kryo-manual",
    properties : [ "binary", "fast" ],
    results : [ 85, 698, 842, 1540, 211, 131 ]
  }, {
    name : "kryo-opt",
    properties : [ "binary", "fast" ],
    results : [ 89, 908, 1149, 2057, 209, 129 ]
  }, {
    name : "kryo-serializer",
    properties : [ "binary", "fast" ],
    results : [ 85, 2159, 2088, 4247, 286, 188 ]
  }, {
    name : "msgpack/databind",
    properties : [ "neutral", "binary", "fast" ],
    results : [ 89, 1170, 1844, 3014, 233, 146 ]
  }, {
    name : "msgpack/manual",
    properties : [ "neutral", "binary", "fast" ],
    results : [ 91, 1225, 1754, 2980, 233, 146 ]
  }, {
    name : "protobuf/protostuff",
    properties : [ "neutral", "binary", "fast" ],
    results : [ 119, 710, 965, 1675, 239, 149 ]
  }, {
    name : "protobuf/protostuff-runtime",
    properties : [ "neutral", "binary", "fast" ],
    results : [ 87, 964, 1144, 2108, 241, 150 ]
  }, {
    name : "protobuf",
    properties : [ "neutral", "binary", "fast" ],
    results : [ 181, 1741, 999, 2740, 239, 149 ]
  }, {
    name : "protostuff-graph",
    properties : [ "binary", "fast" ],
    results : [ 117, 939, 1034, 1973, 239, 150 ]
  }, {
    name : "protostuff-graph-runtime",
    properties : [ "binary", "fast" ],
    results : [ 87, 1153, 1300, 2454, 241, 151 ]
  }, {
    name : "protostuff-manual",
    properties : [ "binary", "fast" ],
    results : [ 85, 576, 951, 1527, 239, 150 ]
  }, {
    name : "protostuff",
    properties : [ "binary", "fast" ],
    results : [ 118, 648, 968, 1616, 239, 150 ]
  }, {
    name : "protostuff-runtime",
    properties : [ "binary", "fast" ],
    results : [ 94, 876, 1139, 2015, 241, 151 ]
  }, {
    name : "smile-col/jackson/databind",
    properties : [ "neutral", "text", "json", "fast" ],
    results : [ 89, 1365, 1868, 3232, 252, 165 ]
  }, {
    name : "smile/jackson+afterburner/databind",
    properties : [ "binary", "fast" ],
    results : [ 88, 1591, 1897, 3488, 352, 252 ]
  }, {
    name : "smile/jackson/databind",
    properties : [ "binary", "fast" ],
    results : [ 88, 2041, 2263, 4304, 338, 241 ]
  }, {
    name : "smile/jackson/manual",
    properties : [ "binary", "fast" ],
    results : [ 90, 1180, 1479, 2659, 341, 244 ]
  }, {
    name : "stephenerialization",
    properties : [ "binary", "slow" ],
    results : [ 84, 8411, 40248, 48658, 1093, 515 ]
  }, {
    name : "thrift-compact",
    properties : [ "neutral", "binary", "fast" ],
    results : [ 176, 1902, 1188, 3090, 240, 148 ]
  }, {
    name : "thrift",
    properties : [ "neutral", "binary", "fast" ],
    results : [ 182, 2303, 1277, 3580, 349, 197 ]
  }, {
    name : "wobly-compact",
    properties : [ "binary", "fast" ],
    results : [ 67, 1233, 768, 2001, 225, 139 ]
  }, {
    name : "wobly",
    properties : [ "binary", "fast" ],
    results : [ 65, 1181, 756, 1937, 251, 151 ]
  }, {
    name : "xml/aalto-manual",
    properties : [ "neutral", "text", "xml" ],
    results : [ 89, 2608, 3908, 6516, 653, 304 ]
  }, {
    name : "xml/exi-manual",
    properties : [ "neutral", "text", "xml", "slow" ],
    results : [ 87, 20496, 18714, 39209, 337, 327 ]
  }, {
    name : "xml/fastinfo-manual",
    properties : [ "neutral", "text", "xml" ],
    results : [ 84, 7914, 7088, 15002, 377, 284 ]
  }, {
    name : "xml/jackson/databind",
    properties : [ "neutral", "text", "xml" ],
    results : [ 89, 3592, 6792, 10384, 683, 286 ]
  }, {
    name : "xml/javolution/manual",
    properties : [ "neutral", "text", "xml" ],
    results : [ 91, 6803, 10953, 17756, 504, 263 ]
  }, {
    name : "xml/woodstox-manual",
    properties : [ "neutral", "text", "xml" ],
    results : [ 89, 4017, 6210, 10227, 653, 304 ]
  }, {
    name : "xml/xstream+c-aalto",
    properties : [ "neutral", "text", "xml" ],
    results : [ 87, 5941, 12981, 18922, 525, 273 ]
  }, {
    name : "xml/xstream+c-fastinfo",
    properties : [ "neutral", "text", "xml", "slow" ],
    results : [ 88, 10049, 10925, 20973, 345, 264 ]
  }, {
    name : "xml/xstream+c",
    properties : [ "neutral", "text", "xml", "slow" ],
    results : [ 87, 7674, 18165, 25839, 487, 244 ]
  }, {
    name : "xml/xstream+c-woodstox",
    properties : [ "neutral", "text", "xml", "slow" ],
    results : [ 88, 7243, 15667, 22910, 525, 273 ]
  }, {
    name : "yaml/jackson/databind",
    properties : [ "neutral", "text", "json", "slow" ],
    results : [ 86, 26013, 41376, 67389, 505, 260 ]
  } ]
}