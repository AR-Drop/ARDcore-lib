'use strict';

// execution
// enable rest in ARD.conf 'rest=1' (be sure to disable after)
// node ./ARDcoin-utils/blkconverter1.js

// convert block json from ARDd format to ARDcore format

// get ./ARDcoin-utils/inputs/blk220909.dat by:
// curl 127.0.0.1:8766/rest/block/00000058bcc33dea08b53691edb9e49a9eb8bac36a0db17eb5a7588860b1f590.hex | xxd -r -p > ./ARDcoin-utils/inputs/blk1.dat

// get ./ARDcoin-utils/inputs/blk220909.json by
// curl 127.0.0.1:8766/rest/block/00000058bcc33dea08b53691edb9e49a9eb8bac36a0db17eb5a7588860b1f590.json > ./ARDcoin-utils/inputs/blk1.json

// get ./ARDcoin-utils/inputs/blk1.js by manually edit the file

// Manually check if blk1-ARDcore.json match with blk1.json

var ARDcore = require('..');
var Block = ARDcore.Block;
var fs = require('fs');

var first8Bytes = new Buffer ([0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF]); // won't be used in block allocation, just fill with some inane values

var blockBuffer = fs.readFileSync('ARDcoin-utils/inputs/blk1.dat');

var ARDcoreFormatBlockBuffer = Buffer.concat([first8Bytes, blockBuffer]);

var blk = Block.fromRawBlock(ARDcoreFormatBlockBuffer);

var blkJSON = blk.toJSON();
var blkJSONStr = JSON.stringify(blkJSON, null, 2);

fs.writeFileSync('ARDcoin-utils/outputs/blk1-ARDcore.dat', ARDcoreFormatBlockBuffer);
fs.writeFileSync('ARDcoin-utils/outputs/blk1-ARDcore.json', blkJSONStr);
