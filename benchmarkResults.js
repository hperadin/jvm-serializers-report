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
    results : [ 496, 2390, 1465, 3855, 221, 133 ]
  }, {
    name : "avro-specific",
    properties : [ "neutral", "binary", "fast" ],
    results : [ 127, 2088, 1874, 3962, 221, 133 ]
  }, {
    name : "bson/jackson/databind",
    properties : [ "neutral", "binary" ],
    results : [ 85, 6859, 8670, 15528, 506, 286 ]
  }, {
    name : "bson/mongodb/manual",
    properties : [ "neutral", "binary" ],
    results : [ 87, 4558, 10642, 15200, 495, 278 ]
  }, {
    name : "cbor-col/jackson/databind",
    properties : [ "neutral", "text", "json", "fast" ],
    results : [ 87, 1293, 2055, 3348, 251, 165 ]
  }, {
    name : "cbor/jackson+afterburner/databind",
    properties : [ "binary", "fast" ],
    results : [ 87, 1409, 2045, 3453, 397, 246 ]
  }, {
    name : "cbor/jackson/databind",
    properties : [ "neutral", "binary", "fast" ],
    results : [ 90, 1768, 2839, 4606, 397, 246 ]
  }, {
    name : "cbor/jackson/manual",
    properties : [ "neutral", "binary", "fast" ],
    results : [ 87, 1165, 1640, 2805, 386, 238 ]
  }, {
    name : "fst-flat-pre",
    properties : [ "binary", "fast" ],
    results : [ 86, 900, 995, 1895, 251, 165 ]
  }, {
    name : "fst-flat",
    properties : [ "binary", "fast" ],
    results : [ 90, 1232, 1525, 2757, 314, 204 ]
  }, {
    name : "fst",
    properties : [ "binary", "fast" ],
    results : [ 86, 2063, 1960, 4023, 316, 203 ]
  }, {
    name : "hessian",
    properties : [ "neutral", "binary" ],
    results : [ 88, 4860, 7367, 12227, 501, 313 ]
  }, {
    name : "java-built-in",
    properties : [ "binary", "slow" ],
    results : [ 88, 7147, 39095, 46242, 889, 514 ]
  }, {
    name : "java-built-in-serializer",
    properties : [ "binary", "slow" ],
    results : [ 86, 7339, 39686, 47025, 889, 514 ]
  }, {
    name : "java-manual",
    properties : [ "binary", "fast" ],
    results : [ 89, 1121, 844, 1965, 255, 147 ]
  }, {
    name : "jboss-marshalling-river-ct-manual",
    properties : [ "binary", "fast" ],
    results : [ 87, 2304, 1746, 4050, 289, 167 ]
  }, {
    name : "jboss-marshalling-river-ct",
    properties : [ "binary" ],
    results : [ 87, 3931, 3103, 7034, 298, 199 ]
  }, {
    name : "jboss-marshalling-river-manual",
    properties : [ "binary" ],
    results : [ 88, 2850, 5963, 8812, 483, 240 ]
  }, {
    name : "jboss-marshalling-river",
    properties : [ "binary", "slow" ],
    results : [ 88, 6248, 34475, 40723, 694, 400 ]
  }, {
    name : "jboss-marshalling-serial",
    properties : [ "binary", "slow" ],
    results : [ 84, 14591, 46266, 60857, 856, 498 ]
  }, {
    name : "jboss-serialization",
    properties : [ "binary" ],
    results : [ 87, 8306, 8158, 16464, 932, 582 ]
  }, {
    name : "json/argo/manual-tree",
    properties : [ "neutral", "text", "json", "slow" ],
    results : [ 87, 85586, 20149, 105734, 485, 263 ]
  }, {
    name : "json-col/jackson/databind",
    properties : [ "neutral", "text", "json", "fast" ],
    results : [ 88, 1746, 2183, 3928, 293, 178 ]
  }, {
    name : "json/dsl-platform/omit-defaults",
    properties : [ "neutral", "text", "json", "fast" ],
    results : [ 73, 752, 1005, 1757, 437, 233 ]
  }, {
    name : "json/dsl-platform",
    properties : [ "neutral", "text", "json", "fast" ],
    results : [ 73, 780, 1103, 1883, 485, 261 ]
  }, {
    name : "json/fastjson/databind",
    properties : [ "neutral", "text", "json", "fast" ],
    results : [ 88, 1606, 1574, 3180, 486, 262 ]
  }, {
    name : "json/flexjson/databind",
    properties : [ "neutral", "text", "json", "slow" ],
    results : [ 88, 25413, 37560, 62973, 503, 273 ]
  }, {
    name : "json/gson/databind",
    properties : [ "neutral", "text", "json" ],
    results : [ 87, 6988, 6317, 13305, 486, 259 ]
  }, {
    name : "json/gson/manual",
    properties : [ "neutral", "text", "json" ],
    results : [ 88, 4566, 5038, 9604, 468, 253 ]
  }, {
    name : "json/gson/manual-tree",
    properties : [ "neutral", "text", "json" ],
    results : [ 86, 6773, 7378, 14151, 485, 259 ]
  }, {
    name : "json/jackson+afterburner/databind",
    properties : [ "binary", "fast" ],
    results : [ 88, 1925, 2622, 4548, 485, 261 ]
  }, {
    name : "json/jackson/databind",
    properties : [ "neutral", "text", "json" ],
    results : [ 85, 2284, 3180, 5463, 485, 261 ]
  }, {
    name : "json/jackson-jr/databind",
    properties : [ "neutral", "text", "json" ],
    results : [ 87, 2286, 3456, 5742, 468, 255 ]
  }, {
    name : "json/jackson/manual",
    properties : [ "neutral", "text", "json", "fast" ],
    results : [ 88, 1488, 1991, 3479, 468, 253 ]
  }, {
    name : "json/javax-stream/glassfish",
    properties : [ "neutral", "text", "json", "slow" ],
    results : [ 88, 8569, 14823, 23392, 468, 253 ]
  }, {
    name : "json/javax-tree/glassfish",
    properties : [ "neutral", "text", "json", "slow" ],
    results : [ 1753, 12150, 16507, 28657, 485, 263 ]
  }, {
    name : "json/jsonij/manual-jpath",
    properties : [ "neutral", "text", "json", "slow" ],
    results : [ 86, 50058, 17364, 67422, 478, 259 ]
  }, {
    name : "json/json-lib/databind",
    properties : [ "neutral", "text", "json", "slow" ],
    results : [ 86, 34472, 154128, 188600, 485, 263 ]
  }, {
    name : "json/json.simple/manual",
    properties : [ "neutral", "text", "json" ],
    results : [ 89, 7484, 10616, 18100, 495, 269 ]
  }, {
    name : "json/json-smart/manual-tree",
    properties : [ "neutral", "text", "json" ],
    results : [ 87, 7508, 5499, 13008, 495, 269 ]
  }, {
    name : "json/org.json/manual-tree",
    properties : [ "neutral", "text", "json", "slow" ],
    results : [ 86, 9094, 11431, 20525, 485, 259 ]
  }, {
    name : "json/protobuf",
    properties : [ "neutral", "text", "json", "slow" ],
    results : [ 179, 11394, 73555, 84950, 488, 253 ]
  }, {
    name : "json/protostuff-manual",
    properties : [ "neutral", "text", "json", "fast" ],
    results : [ 86, 1818, 2433, 4251, 449, 233 ]
  }, {
    name : "json/protostuff-runtime",
    properties : [ "neutral", "text", "json" ],
    results : [ 87, 2051, 2794, 4844, 469, 243 ]
  }, {
    name : "json/svenson/databind",
    properties : [ "neutral", "text", "json", "slow" ],
    results : [ 86, 5629, 14105, 19734, 495, 269 ]
  }, {
    name : "kryo-flat-pre",
    properties : [ "binary", "fast" ],
    results : [ 88, 896, 1171, 2068, 212, 132 ]
  }, {
    name : "kryo-flat",
    properties : [ "binary", "fast" ],
    results : [ 86, 1131, 1502, 2633, 268, 177 ]
  }, {
    name : "kryo-manual",
    properties : [ "binary", "fast" ],
    results : [ 89, 708, 843, 1551, 211, 131 ]
  }, {
    name : "kryo-opt",
    properties : [ "binary", "fast" ],
    results : [ 87, 889, 1146, 2035, 209, 129 ]
  }, {
    name : "kryo-serializer",
    properties : [ "binary", "fast" ],
    results : [ 87, 2151, 1923, 4074, 286, 188 ]
  }, {
    name : "msgpack/databind",
    properties : [ "neutral", "binary", "fast" ],
    results : [ 91, 1191, 1841, 3032, 233, 146 ]
  }, {
    name : "msgpack/manual",
    properties : [ "neutral", "binary", "fast" ],
    results : [ 88, 1209, 1766, 2976, 233, 146 ]
  }, {
    name : "protobuf/protostuff",
    properties : [ "neutral", "binary", "fast" ],
    results : [ 117, 723, 976, 1699, 239, 149 ]
  }, {
    name : "protobuf/protostuff-runtime",
    properties : [ "neutral", "binary", "fast" ],
    results : [ 87, 964, 1183, 2147, 241, 150 ]
  }, {
    name : "protobuf",
    properties : [ "neutral", "binary", "fast" ],
    results : [ 180, 1726, 972, 2698, 239, 149 ]
  }, {
    name : "protostuff-graph",
    properties : [ "binary", "fast" ],
    results : [ 115, 941, 1038, 1979, 239, 150 ]
  }, {
    name : "protostuff-graph-runtime",
    properties : [ "binary", "fast" ],
    results : [ 86, 1197, 1317, 2514, 241, 151 ]
  }, {
    name : "protostuff-manual",
    properties : [ "binary", "fast" ],
    results : [ 87, 620, 948, 1569, 239, 150 ]
  }, {
    name : "protostuff",
    properties : [ "binary", "fast" ],
    results : [ 117, 638, 968, 1606, 239, 150 ]
  }, {
    name : "protostuff-runtime",
    properties : [ "binary", "fast" ],
    results : [ 89, 830, 1174, 2004, 241, 151 ]
  }, {
    name : "scala/java-built-in",
    properties : [ "slow" ],
    results : [ 590, 12960, 65399, 78360, 1293, 698 ]
  }, {
    name : "scala/sbinary",
    properties : [ "fast" ],
    results : [ 632, 2538, 1584, 4122, 255, 147 ]
  }, {
    name : "smile-col/jackson/databind",
    properties : [ "neutral", "text", "json", "fast" ],
    results : [ 87, 1278, 2011, 3289, 252, 165 ]
  }, {
    name : "smile/jackson+afterburner/databind",
    properties : [ "binary", "fast" ],
    results : [ 87, 1611, 1988, 3599, 352, 252 ]
  }, {
    name : "smile/jackson/databind",
    properties : [ "binary", "fast" ],
    results : [ 86, 2085, 2462, 4547, 338, 241 ]
  }, {
    name : "smile/jackson/manual",
    properties : [ "binary", "fast" ],
    results : [ 86, 1208, 1481, 2688, 341, 244 ]
  }, {
    name : "stephenerialization",
    properties : [ "binary", "slow" ],
    results : [ 82, 8330, 41925, 50254, 1093, 515 ]
  }, {
    name : "thrift-compact",
    properties : [ "neutral", "binary", "fast" ],
    results : [ 175, 1940, 1216, 3155, 240, 148 ]
  }, {
    name : "thrift",
    properties : [ "neutral", "binary", "fast" ],
    results : [ 173, 2306, 1272, 3578, 349, 197 ]
  }, {
    name : "wobly-compact",
    properties : [ "binary", "fast" ],
    results : [ 64, 1229, 775, 2004, 225, 139 ]
  }, {
    name : "wobly",
    properties : [ "binary", "fast" ],
    results : [ 65, 1165, 755, 1920, 251, 151 ]
  }, {
    name : "xml/aalto-manual",
    properties : [ "neutral", "text", "xml" ],
    results : [ 88, 2692, 4008, 6699, 653, 304 ]
  }, {
    name : "xml/exi-manual",
    properties : [ "neutral", "text", "xml", "slow" ],
    results : [ 87, 20934, 19641, 40575, 337, 327 ]
  }, {
    name : "xml/fastinfo-manual",
    properties : [ "neutral", "text", "xml" ],
    results : [ 85, 7999, 7075, 15074, 377, 284 ]
  }, {
    name : "xml/jackson/databind",
    properties : [ "neutral", "text", "xml" ],
    results : [ 87, 4142, 6961, 11103, 683, 286 ]
  }, {
    name : "xml/javolution/manual",
    properties : [ "neutral", "text", "xml" ],
    results : [ 89, 6621, 10374, 16995, 504, 263 ]
  }, {
    name : "xml/woodstox-manual",
    properties : [ "neutral", "text", "xml" ],
    results : [ 87, 3940, 6547, 10487, 653, 304 ]
  }, {
    name : "xml/xstream+c-aalto",
    properties : [ "neutral", "text", "xml" ],
    results : [ 88, 6133, 12953, 19087, 525, 273 ]
  }, {
    name : "xml/xstream+c-fastinfo",
    properties : [ "neutral", "text", "xml", "slow" ],
    results : [ 88, 10572, 10909, 21481, 345, 264 ]
  }, {
    name : "xml/xstream+c",
    properties : [ "neutral", "text", "xml", "slow" ],
    results : [ 86, 7486, 18379, 25864, 487, 244 ]
  }, {
    name : "xml/xstream+c-woodstox",
    properties : [ "neutral", "text", "xml", "slow" ],
    results : [ 89, 7309, 15861, 23169, 525, 273 ]
  }, {
    name : "yaml/jackson/databind",
    properties : [ "neutral", "text", "json", "slow" ],
    results : [ 85, 26226, 44243, 70469, 505, 260 ]
  } ]
}