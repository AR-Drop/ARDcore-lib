'use strict';

// execution
// enable rest in ARD.conf 'rest=1' (be sure to disable after)
// node ./ARDcoin-utils/blkconverter.js

// convert block json from ARDd format to ARDcore format

// get ./ARDcoin-utils/inputs/blk220909.dat by:
// curl 127.0.0.1:8766/rest/block/000000000001a87be937e85123bf209af485cf94b6cae8125dce2f5a9914ecfb.hex | xxd -r -p > ./ARDcoin-utils/inputs/blk220909.dat

// get ./ARDcoin-utils/inputs/blk220909.json by
// curl 127.0.0.1:8766/rest/block/000000000001a87be937e85123bf209af485cf94b6cae8125dce2f5a9914ecfb.json > ./ARDcoin-utils/inputs/blk220909.json

// get ./ARDcoin-utils/inputs/blk220909.js by manually edit the file

// Manually check if blk220909-ARDcore.json match with blk220909.json

var ARDcore = require('..');
var Block = ARDcore.Block;
var fs = require('fs');

var first8Bytes = new Buffer ([0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF]); // won't be used in block allocation, just fill with some inane values

var blockBuffer = fs.readFileSync('ARDcoin-utils/inputs/blk220909.dat');

var ARDcoreFormatBlockBuffer = Buffer.concat([first8Bytes, blockBuffer]);

var blk = Block.fromRawBlock(ARDcoreFormatBlockBuffer);

var blkJSON = blk.toJSON();
var blkJSONStr = JSON.stringify(blkJSON, null, 2);

fs.writeFileSync('ARDcoin-utils/outputs/blk220909-ARDcore.dat', ARDcoreFormatBlockBuffer);
fs.writeFileSync('ARDcoin-utils/outputs/blk220909-ARDcore.json', blkJSONStr);
