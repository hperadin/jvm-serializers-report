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
    results : [ 496, 2436, 1546, 3982, 221, 133 ]
  }, {
    name : "avro-specific",
    properties : [ "neutral", "binary", "fast" ],
    results : [ 123, 2105, 1894, 3999, 221, 133 ]
  }, {
    name : "bson/jackson/databind",
    properties : [ "neutral", "binary" ],
    results : [ 87, 6777, 8448, 15225, 506, 286 ]
  }, {
    name : "bson/mongodb/manual",
    properties : [ "neutral", "binary" ],
    results : [ 89, 4459, 10444, 14904, 495, 278 ]
  }, {
    name : "cbor-col/jackson/databind",
    properties : [ "neutral", "text", "json", "fast" ],
    results : [ 88, 1200, 1938, 3138, 251, 165 ]
  }, {
    name : "cbor/jackson+afterburner/databind",
    properties : [ "binary", "fast" ],
    results : [ 90, 1376, 2148, 3524, 397, 246 ]
  }, {
    name : "cbor/jackson/databind",
    properties : [ "neutral", "binary", "fast" ],
    results : [ 87, 1645, 2728, 4373, 397, 246 ]
  }, {
    name : "cbor/jackson/manual",
    properties : [ "neutral", "binary", "fast" ],
    results : [ 88, 1106, 1707, 2813, 386, 238 ]
  }, {
    name : "fst-flat-pre",
    properties : [ "binary", "fast" ],
    results : [ 88, 891, 988, 1879, 251, 165 ]
  }, {
    name : "fst-flat",
    properties : [ "binary", "fast" ],
    results : [ 86, 1208, 1495, 2703, 314, 204 ]
  }, {
    name : "fst",
    properties : [ "binary", "fast" ],
    results : [ 87, 2135, 1961, 4095, 316, 203 ]
  }, {
    name : "hessian",
    properties : [ "neutral", "binary" ],
    results : [ 89, 4905, 7387, 12292, 501, 313 ]
  }, {
    name : "java-built-in",
    properties : [ "binary", "slow" ],
    results : [ 87, 7217, 39786, 47002, 889, 514 ]
  }, {
    name : "java-built-in-serializer",
    properties : [ "binary", "slow" ],
    results : [ 87, 7319, 40197, 47516, 889, 514 ]
  }, {
    name : "java-manual",
    properties : [ "binary", "fast" ],
    results : [ 85, 1128, 846, 1975, 255, 147 ]
  }, {
    name : "jboss-marshalling-river-ct-manual",
    properties : [ "binary", "fast" ],
    results : [ 90, 2250, 1709, 3958, 289, 167 ]
  }, {
    name : "jboss-marshalling-river-ct",
    properties : [ "binary" ],
    results : [ 89, 3993, 3103, 7096, 298, 199 ]
  }, {
    name : "jboss-marshalling-river-manual",
    properties : [ "binary" ],
    results : [ 88, 2837, 5880, 8718, 483, 240 ]
  }, {
    name : "jboss-marshalling-river",
    properties : [ "binary", "slow" ],
    results : [ 88, 6122, 32148, 38270, 694, 400 ]
  }, {
    name : "jboss-marshalling-serial",
    properties : [ "binary", "slow" ],
    results : [ 87, 14611, 41838, 56448, 856, 498 ]
  }, {
    name : "jboss-serialization",
    properties : [ "binary" ],
    results : [ 88, 8895, 8133, 17028, 932, 582 ]
  }, {
    name : "json/argo/manual-tree",
    properties : [ "neutral", "text", "json", "slow" ],
    results : [ 87, 88452, 19248, 107700, 485, 263 ]
  }, {
    name : "json-col/jackson/databind",
    properties : [ "neutral", "text", "json", "fast" ],
    results : [ 88, 1814, 2167, 3981, 293, 178 ]
  }, {
    name : "json/dsl-platform",
    properties : [ "neutral", "text", "json", "slow" ],
    results : [ 78, 945, 836466, 837411, 437, 233 ]
  }, {
    name : "json/fastjson/databind",
    properties : [ "neutral", "text", "json", "fast" ],
    results : [ 90, 1588, 1581, 3169, 486, 262 ]
  }, {
    name : "json/flexjson/databind",
    properties : [ "neutral", "text", "json", "slow" ],
    results : [ 88, 25665, 36120, 61784, 503, 273 ]
  }, {
    name : "json/gson/databind",
    properties : [ "neutral", "text", "json" ],
    results : [ 87, 6905, 6267, 13172, 486, 259 ]
  }, {
    name : "json/gson/manual",
    properties : [ "neutral", "text", "json" ],
    results : [ 88, 4509, 5064, 9573, 468, 253 ]
  }, {
    name : "json/gson/manual-tree",
    properties : [ "neutral", "text", "json" ],
    results : [ 86, 6746, 7426, 14172, 485, 259 ]
  }, {
    name : "json/jackson+afterburner/databind",
    properties : [ "binary", "fast" ],
    results : [ 87, 1840, 2551, 4391, 485, 261 ]
  }, {
    name : "json/jackson/databind",
    properties : [ "neutral", "text", "json", "fast" ],
    results : [ 88, 2292, 3080, 5372, 485, 261 ]
  }, {
    name : "json/jackson-jr/databind",
    properties : [ "neutral", "text", "json" ],
    results : [ 88, 2308, 3435, 5743, 468, 255 ]
  }, {
    name : "json/jackson/manual",
    properties : [ "neutral", "text", "json", "fast" ],
    results : [ 88, 1463, 1987, 3450, 468, 253 ]
  }, {
    name : "json/javax-stream/glassfish",
    properties : [ "neutral", "text", "json", "slow" ],
    results : [ 88, 8835, 14769, 23604, 468, 253 ]
  }, {
    name : "json/javax-tree/glassfish",
    properties : [ "neutral", "text", "json", "slow" ],
    results : [ 1742, 12389, 16522, 28911, 485, 263 ]
  }, {
    name : "json/jsonij/manual-jpath",
    properties : [ "neutral", "text", "json", "slow" ],
    results : [ 87, 46702, 16315, 63018, 478, 255 ]
  }, {
    name : "json/json-lib/databind",
    properties : [ "neutral", "text", "json", "slow" ],
    results : [ 86, 34332, 144000, 178332, 485, 263 ]
  }, {
    name : "json/json.simple/manual",
    properties : [ "neutral", "text", "json" ],
    results : [ 87, 7342, 11076, 18418, 495, 269 ]
  }, {
    name : "json/json-smart/manual-tree",
    properties : [ "neutral", "text", "json" ],
    results : [ 91, 7339, 5581, 12920, 495, 269 ]
  }, {
    name : "json/org.json/manual-tree",
    properties : [ "neutral", "text", "json" ],
    results : [ 89, 8615, 11171, 19786, 485, 259 ]
  }, {
    name : "json/protobuf",
    properties : [ "neutral", "text", "json", "slow" ],
    results : [ 180, 11543, 68684, 80227, 488, 253 ]
  }, {
    name : "json/protostuff-manual",
    properties : [ "neutral", "text", "json", "fast" ],
    results : [ 88, 1796, 2495, 4292, 449, 233 ]
  }, {
    name : "json/protostuff-runtime",
    properties : [ "neutral", "text", "json", "fast" ],
    results : [ 89, 2118, 2749, 4866, 469, 243 ]
  }, {
    name : "json/svenson/databind",
    properties : [ "neutral", "text", "json", "slow" ],
    results : [ 87, 5605, 14480, 20085, 495, 271 ]
  }, {
    name : "kryo-flat-pre",
    properties : [ "binary", "fast" ],
    results : [ 88, 864, 1135, 1999, 212, 132 ]
  }, {
    name : "kryo-flat",
    properties : [ "binary", "fast" ],
    results : [ 91, 1053, 1501, 2554, 268, 177 ]
  }, {
    name : "kryo-manual",
    properties : [ "binary", "fast" ],
    results : [ 88, 689, 835, 1525, 211, 131 ]
  }, {
    name : "kryo-opt",
    properties : [ "binary", "fast" ],
    results : [ 90, 894, 1148, 2042, 209, 129 ]
  }, {
    name : "kryo-serializer",
    properties : [ "binary", "fast" ],
    results : [ 89, 2134, 2001, 4135, 286, 188 ]
  }, {
    name : "msgpack/databind",
    properties : [ "neutral", "binary", "fast" ],
    results : [ 87, 1180, 1875, 3055, 233, 146 ]
  }, {
    name : "msgpack/manual",
    properties : [ "neutral", "binary", "fast" ],
    results : [ 91, 1185, 1727, 2912, 233, 146 ]
  }, {
    name : "protobuf/protostuff",
    properties : [ "neutral", "binary", "fast" ],
    results : [ 116, 709, 968, 1678, 239, 149 ]
  }, {
    name : "protobuf/protostuff-runtime",
    properties : [ "neutral", "binary", "fast" ],
    results : [ 89, 949, 1145, 2094, 241, 150 ]
  }, {
    name : "protobuf",
    properties : [ "neutral", "binary", "fast" ],
    results : [ 185, 1707, 984, 2691, 239, 149 ]
  }, {
    name : "protostuff-graph",
    properties : [ "binary", "fast" ],
    results : [ 116, 961, 1031, 1992, 239, 150 ]
  }, {
    name : "protostuff-graph-runtime",
    properties : [ "binary", "fast" ],
    results : [ 88, 1170, 1290, 2460, 241, 151 ]
  }, {
    name : "protostuff-manual",
    properties : [ "binary", "fast" ],
    results : [ 87, 600, 943, 1543, 239, 150 ]
  }, {
    name : "protostuff",
    properties : [ "binary", "fast" ],
    results : [ 117, 643, 963, 1605, 239, 150 ]
  }, {
    name : "protostuff-runtime",
    properties : [ "binary", "fast" ],
    results : [ 88, 860, 1152, 2012, 241, 151 ]
  }, {
    name : "smile-col/jackson/databind",
    properties : [ "neutral", "text", "json", "fast" ],
    results : [ 88, 1316, 1849, 3166, 252, 165 ]
  }, {
    name : "smile/jackson+afterburner/databind",
    properties : [ "binary", "fast" ],
    results : [ 88, 1629, 1898, 3527, 352, 252 ]
  }, {
    name : "smile/jackson/databind",
    properties : [ "binary", "fast" ],
    results : [ 88, 2063, 2310, 4374, 338, 241 ]
  }, {
    name : "smile/jackson/manual",
    properties : [ "binary", "fast" ],
    results : [ 88, 1170, 1495, 2665, 341, 244 ]
  }, {
    name : "stephenerialization",
    properties : [ "binary", "slow" ],
    results : [ 83, 8032, 40666, 48698, 1093, 515 ]
  }, {
    name : "thrift-compact",
    properties : [ "neutral", "binary", "fast" ],
    results : [ 181, 1929, 1214, 3143, 240, 148 ]
  }, {
    name : "thrift",
    properties : [ "neutral", "binary", "fast" ],
    results : [ 176, 2291, 1277, 3568, 349, 197 ]
  }, {
    name : "wobly-compact",
    properties : [ "binary", "fast" ],
    results : [ 65, 1238, 767, 2006, 225, 139 ]
  }, {
    name : "wobly",
    properties : [ "binary", "fast" ],
    results : [ 66, 1166, 751, 1916, 251, 151 ]
  }, {
    name : "xml/aalto-manual",
    properties : [ "neutral", "text", "xml" ],
    results : [ 88, 2655, 3939, 6593, 653, 304 ]
  }, {
    name : "xml/exi-manual",
    properties : [ "neutral", "text", "xml", "slow" ],
    results : [ 87, 19761, 18343, 38103, 337, 327 ]
  }, {
    name : "xml/fastinfo-manual",
    properties : [ "neutral", "text", "xml" ],
    results : [ 86, 8588, 7181, 15769, 377, 284 ]
  }, {
    name : "xml/jackson/databind",
    properties : [ "neutral", "text", "xml" ],
    results : [ 88, 3637, 6860, 10497, 683, 286 ]
  }, {
    name : "xml/javolution/manual",
    properties : [ "neutral", "text", "xml" ],
    results : [ 87, 7035, 10966, 18001, 504, 263 ]
  }, {
    name : "xml/woodstox-manual",
    properties : [ "neutral", "text", "xml" ],
    results : [ 87, 3927, 6340, 10267, 653, 304 ]
  }, {
    name : "xml/xstream+c-aalto",
    properties : [ "neutral", "text", "xml" ],
    results : [ 87, 5971, 13062, 19032, 525, 273 ]
  }, {
    name : "xml/xstream+c-fastinfo",
    properties : [ "neutral", "text", "xml", "slow" ],
    results : [ 88, 10598, 10904, 21502, 345, 264 ]
  }, {
    name : "xml/xstream+c",
    properties : [ "neutral", "text", "xml", "slow" ],
    results : [ 88, 7692, 17626, 25318, 487, 244 ]
  }, {
    name : "xml/xstream+c-woodstox",
    properties : [ "neutral", "text", "xml", "slow" ],
    results : [ 88, 7274, 15981, 23255, 525, 273 ]
  }, {
    name : "yaml/jackson/databind",
    properties : [ "neutral", "text", "json", "slow" ],
    results : [ 88, 25952, 40144, 66096, 505, 260 ]
  } ]
}