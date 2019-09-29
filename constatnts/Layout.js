import { Dimensions } from 'react-native';
export const { height, width } = Dimensions.get('window');
export const _imageEncode = async (arrayBuffer, contentType) => {
    let u8 = new Uint8Array(arrayBuffer)
    let b64encoded = btoa([].reduce.call(new Uint8Array(arrayBuffer), function (p, c) { return p + String.fromCharCode(c) }, ''))
    let mimetype = contentType || "image/png"
    return "data:" + mimetype + ";base64," + b64encoded
}