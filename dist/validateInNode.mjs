import $2dgfY$sharp from "sharp";


const $213f9fc1069a0aab$export$ef1a7b1b09d1a9de = /^data:image\/\w{2,5};base64,/i;
function $213f9fc1069a0aab$export$af2dba6db4e9e1f0(config, resolve, reject) {
    return config?.throw ? reject(new Error('The media resource is either invalid, corrupt or not usable.')) : resolve(false);
}


const $3514f5f894984ed5$var$ImageValidation = (src, config = {
    throw: true
})=>{
    return new Promise((resolve, reject)=>{
        let source;
        if (typeof src === 'string') {
            if ($213f9fc1069a0aab$export$ef1a7b1b09d1a9de.test(src)) source = Buffer.from(src.replace($213f9fc1069a0aab$export$ef1a7b1b09d1a9de, ''), 'base64');
            else source = Buffer.from(src, 'base64');
        } else source = src;
        if (src instanceof Buffer && !src[0]) $213f9fc1069a0aab$export$af2dba6db4e9e1f0(config, resolve, reject);
        return $2dgfY$sharp(source).resize(52, 52).toBuffer((err)=>{
            if (!err) resolve(true);
            else $213f9fc1069a0aab$export$af2dba6db4e9e1f0(config, resolve, reject);
        });
    });
};
var $3514f5f894984ed5$export$2e2bcd8739ae039 = $3514f5f894984ed5$var$ImageValidation;


export {$3514f5f894984ed5$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=validateInNode.mjs.map
