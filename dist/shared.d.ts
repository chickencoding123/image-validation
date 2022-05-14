/// <reference types="node" />
/** The regex to detect if base64 string contains browser specific data image instruction */
export declare const IMG_DATA_REGEX: RegExp;
export declare type ImageValidationDomSrc = string | File;
export declare type ImageValidationNodeSrc = Buffer | Uint8Array | Uint8ClampedArray | Int8Array | Uint16Array | Int16Array | Uint32Array | Int32Array | Float32Array | Float64Array | string;
export interface ImageValidationConfig {
    throw: boolean;
}
export declare function failure(config: ImageValidationConfig, resolve: (value: boolean) => void, reject: (reason: Error) => void): void;
