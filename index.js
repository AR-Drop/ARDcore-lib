'use strict';

var ARDcore = module.exports;

// module information
ARDcore.version = 'v' + require('./package.json').version;
ARDcore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of ARDcore-lib found. ' +
      'Please make sure to require ARDcore-lib and check that submodules do' +
      ' not also include their own ARDcore-lib dependency.';
    throw new Error(message);
  }
};
ARDcore.versionGuard(global._ARDcore);
global._ARDcore = ARDcore.version;

// crypto
ARDcore.crypto = {};
ARDcore.crypto.BN = require('./lib/crypto/bn');
ARDcore.crypto.ECDSA = require('./lib/crypto/ecdsa');
ARDcore.crypto.Hash = require('./lib/crypto/hash');
ARDcore.crypto.Random = require('./lib/crypto/random');
ARDcore.crypto.Point = require('./lib/crypto/point');
ARDcore.crypto.Signature = require('./lib/crypto/signature');

// encoding
ARDcore.encoding = {};
ARDcore.encoding.Base58 = require('./lib/encoding/base58');
ARDcore.encoding.Base58Check = require('./lib/encoding/base58check');
ARDcore.encoding.BufferReader = require('./lib/encoding/bufferreader');
ARDcore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
ARDcore.encoding.Varint = require('./lib/encoding/varint');

// utilities
ARDcore.util = {};
ARDcore.util.buffer = require('./lib/util/buffer');
ARDcore.util.js = require('./lib/util/js');
ARDcore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
ARDcore.errors = require('./lib/errors');

// main ARD library
ARDcore.Address = require('./lib/address');
ARDcore.Block = require('./lib/block');
ARDcore.MerkleBlock = require('./lib/block/merkleblock');
ARDcore.BlockHeader = require('./lib/block/blockheader');
ARDcore.HDPrivateKey = require('./lib/hdprivatekey.js');
ARDcore.HDPublicKey = require('./lib/hdpublickey.js');
ARDcore.Networks = require('./lib/networks');
ARDcore.Opcode = require('./lib/opcode');
ARDcore.PrivateKey = require('./lib/privatekey');
ARDcore.PublicKey = require('./lib/publickey');
ARDcore.Script = require('./lib/script');
ARDcore.Transaction = require('./lib/transaction');
ARDcore.URI = require('./lib/uri');
ARDcore.Unit = require('./lib/unit');

// dependencies, subject to change
ARDcore.deps = {};
ARDcore.deps.bnjs = require('bn.js');
ARDcore.deps.bs58 = require('bs58');
ARDcore.deps.Buffer = Buffer;
ARDcore.deps.elliptic = require('elliptic');
ARDcore.deps.nodeX16r = require('node-x16r');
ARDcore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
ARDcore.Transaction.sighash = require('./lib/transaction/sighash');
