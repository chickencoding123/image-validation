#!/usr/bin/env node
var $eaInQ$path = require("path");
var $eaInQ$fs = require("fs");
var $eaInQ$sharp = require("sharp");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}



const $7305239fc268b806$export$ef1a7b1b09d1a9de = /^data:image\/\w{2,5};base64,/i;
function $7305239fc268b806$export$af2dba6db4e9e1f0(config, resolve, reject) {
    return config?.throw ? reject(new Error('The media resource is either invalid, corrupt or not usable.')) : resolve(false);
}


const $736885584fd94194$var$ImageValidation = (src, config = {
    throw: true
})=>{
    return new Promise((resolve, reject)=>{
        let source;
        if (typeof src === 'string') {
            if ($7305239fc268b806$export$ef1a7b1b09d1a9de.test(src)) source = Buffer.from(src.replace($7305239fc268b806$export$ef1a7b1b09d1a9de, ''), 'base64');
            else source = Buffer.from(src, 'base64');
        } else source = src;
        if (src instanceof Buffer && !src[0]) $7305239fc268b806$export$af2dba6db4e9e1f0(config, resolve, reject);
        return ($parcel$interopDefault($eaInQ$sharp))(source).resize(52, 52).toBuffer((err)=>{
            if (!err) resolve(true);
            else $7305239fc268b806$export$af2dba6db4e9e1f0(config, resolve, reject);
        });
    });
};
var $736885584fd94194$export$2e2bcd8739ae039 = $736885584fd94194$var$ImageValidation;



var $0f340874ac477e47$var$__dirname = $eaInQ$path.resolve(__dirname, "../src");
const $0f340874ac477e47$var$args = process.argv;
if (!$0f340874ac477e47$var$args || $0f340874ac477e47$var$args.length !== 3) throw Error('IMAGE-VALIDATION: the CLI requires a single parameter which is a string path to an image file.');
const $0f340874ac477e47$var$path = ($parcel$interopDefault($eaInQ$path)).resolve($0f340874ac477e47$var$__dirname, $0f340874ac477e47$var$args[2]);
if (!($parcel$interopDefault($eaInQ$fs)).existsSync($0f340874ac477e47$var$path)) throw Error(`IMAGE-VALIDATION: the CLI did not find the image file at "${$0f340874ac477e47$var$path}".`);
const $0f340874ac477e47$var$buffer = ($parcel$interopDefault($eaInQ$fs)).readFileSync($0f340874ac477e47$var$path);
$736885584fd94194$export$2e2bcd8739ae039($0f340874ac477e47$var$buffer, {
    throw: false
}).then((result)=>{
    if (result) process.exit(0);
    else console.error(`IMAGE-VALIDATION: failed for image at "${$0f340874ac477e47$var$path}"`);
});


//# sourceMappingURL=cli.js.map
