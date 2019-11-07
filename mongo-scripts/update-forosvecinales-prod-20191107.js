

var db = connect('127.0.0.1:27017/forosvecinales-prod');

var topicsId = [
    "5af1cb6211f9bd15fde75647",
    "5af1cf2511f9bd7192e75648",
    "5af1ee3011f9bdbfa7e75670",
    "5af1efcc11f9bdba1ce75675",
    "5af99efe1762163301e7fad2",
    "5af9a2511762166208e7fad3",
    "5af9a5c61762163911e7fad4",
    "5af9b2ca1762166aade7fad6",
    "5af9b4d71762168eafe7fad7",
    "5af9b713176216631de7fad8",
    "5af9b7d91762162fbee7fad9",
    "5af9c51917621625f2e7fadd",
    "5af9e19617621668b6e7fae6",
    "5af9e4aa1762165a1ae7fae7",
    "5af9e664176216d77ee7fae8",
    "5af9eabf176216a9cae7fae9",
    "5af9ebdc176216ed19e7faea",
    "5af9ed0a1762160ff9e7faec",
    "5afdc79ce79a67c6477c7db0",
    "5afed4ac623a7f468d8fd44f",
    "5afed5b6623a7f41758fd450",
    "5afed72d623a7f72de8fd451",
    "5afed87b623a7f31268fd452",
    "5afed9a0623a7f6ac48fd453",
    "5afedd60623a7fc4c28fd454",
    "5afee01be87fac49d86b73af",
    "5afee5b4e87fac68576b73b3",
    "5afef0a28c9becd9314108dc",
    "5afef1658c9bec8df04108dd",
    "5afef3028c9bec57674108de",
    "5afef53f8c9bec67f14108df",
    "5afefc3a8c9becab084108e3",
    "5afefdab8c9bec60244108e4",
    "5afeff348c9bec5de44108e5",
    "5aff04138c9bec48674108e6",
    "5aff06018c9bec4d694108e9",
    "5aff07358c9bec8fd24108ea",
    "5aff07f98c9bec794a4108eb",
    "5aff093b8c9bec17784108ec",
    "5aff09eb8c9bec3dc64108ed",
    "5affbf746289d706a7400133",
    "5affbf906289d7845c400134",
    "5affbf936289d7a3dc400135",
    "5affc1566289d7654a400136",
    "5affc4136289d7752c400139",
    "5b031d02ae6c6c6d1df225ba",
    "5b031e2eae6c6c7d5bf225bb",
    "5b0320bcae6c6c6be9f225bd",
    "5b0439a0ae6c6cb23bf225c4",
    "5b044e73ae6c6c9c10f225c9",
    "5b04520aae6c6cbfddf225cc",
    "5b045527ae6c6c8308f225cf",
    "5b045817ae6c6ce577f225d2",
    "5b04634eae6c6c89b2f225d5",
    "5b0464ecae6c6c75b6f225d9",
    "5b04666fae6c6c67def225df",
    "5b05b72eae6c6c1d36f225f7",
    "5b05b924ae6c6c0d0af225fc",
    "5b05ba40ae6c6c2e27f225ff",
    "5b05bf06ae6c6cdb50f22604",
    "5b05c01fae6c6c88eff22607",
    "5b0c1e1aae6c6c062bf22629",
    "5b0c1fe9ae6c6c54aef2262c",
    "5b0c2125ae6c6c180df2262f",
    "5b0c225cae6c6ceb4af22632",
    "5b0c2495ae6c6c7efef22635",
    "5b0c2644ae6c6c30a2f22638",
    "5b0d5e443afa9343dddf40cb",
    "5b0d9f7d3afa93addedf40d4",
    "5b0da5de3afa930bdadf40d7",
    "5b1033335c2ef2a3f78d5c53",
    "5b10396f5c2ef2047d8d5c67",
    "5b10822c1fab5c867e5424da",
    "5b1084401fab5c68d65424de",
    "5b108f6a1fab5c38db542509",
    "5b1e9b0e5c2ef26a798d5d23",
    "5b732edbe944cb77bee83471",
    "5b857be2df35917edc123cc7",
    "5b857fa6df35911622123cc8",
    "5b85818edf35910366123cc9",
    "5b86f217566203bd61f9ac3f",
    "5b88292e4c2ba05562790b75",
    "5ce6b3a86fffe5b4e6116cea",
    "5d56d0dce29800ed6e2ca517",
    "5d6e6f869bd384409edb2fa1",
    "5d6e74189bd384214edb2fa4"
];

print('1.   Updating topics');

topicsId.forEach(id => {
  db.getCollection("topics").updateOne({"_id": ObjectId(id)},
      { 
        $unset: { 
          "action.count" : 1
        }
      }
  )
  print(`   * Updating topic ${id} => Removing "action.count"`);
});

print('* DONE');