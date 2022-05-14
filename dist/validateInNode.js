var $2F4Yo$sharp = require("sharp");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $49a75d5f2c3ad326$export$2e2bcd8739ae039);

const $38d6609c832763f9$export$ef1a7b1b09d1a9de = /^data:image\/\w{2,5};base64,/i;
function $38d6609c832763f9$export$af2dba6db4e9e1f0(config, resolve, reject) {
    return config?.throw ? reject(new Error('The media resource is either invalid, corrupt or not usable.')) : resolve(false);
}


const $49a75d5f2c3ad326$var$ImageValidation = (src, config = {
    throw: true
})=>{
    return new Promise((resolve, reject)=>{
        let source;
        if (typeof src === 'string') {
            if ($38d6609c832763f9$export$ef1a7b1b09d1a9de.test(src)) source = Buffer.from(src.replace($38d6609c832763f9$export$ef1a7b1b09d1a9de, ''), 'base64');
            else source = Buffer.from(src, 'base64');
        } else source = src;
        if (src instanceof Buffer && !src[0]) $38d6609c832763f9$export$af2dba6db4e9e1f0(config, resolve, reject);
        return ($parcel$interopDefault($2F4Yo$sharp))(source).resize(52, 52).toBuffer((err)=>{
            if (!err) resolve(true);
            else $38d6609c832763f9$export$af2dba6db4e9e1f0(config, resolve, reject);
        });
    });
};
var $49a75d5f2c3ad326$export$2e2bcd8739ae039 = $49a75d5f2c3ad326$var$ImageValidation;


//# sourceMappingURL=validateInNode.js.map
