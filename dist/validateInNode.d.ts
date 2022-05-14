import { ImageValidationConfig, ImageValidationNodeSrc } from './shared';
declare const ImageValidation: (src: ImageValidationNodeSrc, config?: ImageValidationConfig) => Promise<boolean>;
export default ImageValidation;
