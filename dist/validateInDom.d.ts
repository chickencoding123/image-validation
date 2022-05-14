import { ImageValidationConfig, ImageValidationDomSrc } from "./shared";
declare const ImageValidation: (src: ImageValidationDomSrc, config?: ImageValidationConfig) => Promise<boolean>;
export default ImageValidation;
