/**
 * Calculate brightness value by RGB or HEX color.
 * @param color (String) The color value in RGB or HEX (for example: #000000 || #000 || rgb(0,0,0) || rgba(0,0,0,0))
 * @returns (Number) The brightness value (dark) 0 ... 1 (light)
 */
export function brightnessByColor(color: string | number[]) {
    const [r, g, b] = parseColor(color);
    // @ts-ignore
    if (typeof r != "undefined") return (r * 299 + g * 587 + b * 114) / 1000 / 255;
}

export function hexToRgb(color: string) {
    const hasFullSpec = color.length == 7;
    var m = color.substr(1).match(hasFullSpec ? /(\S{2})/g : /(\S{1})/g);
    const r = parseInt(m[0] + (hasFullSpec ? "" : m[0]), 16);
    const g = parseInt(m[1] + (hasFullSpec ? "" : m[1]), 16);
    const b = parseInt(m[2] + (hasFullSpec ? "" : m[2]), 16);
    const a = hasFullSpec && m[3] ? parseInt(m[3], 16) : 1;
    return [r, g, b, a];
}
export function parseRgb(color: string) {
    const hasAlpha = color.indexOf("rgba") == 0;
    var m = color.match(/(\d+){3}(\.\d+)?/g);
    const r = parseInt(m[0]);
    const g = parseInt(m[1]);
    const b = parseInt(m[2]);
    const a = hasAlpha ? parseFloat(m[3]) : 1;
    return [r, g, b, a];
}
export function parseColor(color: string | number[]) {
    if (typeof color == "object") return color;
    if (color.indexOf("#") == 0) return hexToRgb(color);
    if (color.indexOf("rgb") == 0) return parseRgb(color);
    return [0, 0, 0, 0];
}

export function mix(color: string, another: string) {
    var base = parseColor(color);
    var added = parseColor(another);
    var mix = [];
    mix[3] = 1 - (1 - added[3]) * (1 - base[3]); // alpha
    mix[0] = Math.round((added[0] * added[3] / mix[3]) + (base[0] * base[3] * (1 - added[3]) / mix[3])); // red
    mix[1] = Math.round((added[1] * added[3] / mix[3]) + (base[1] * base[3] * (1 - added[3]) / mix[3])); // green
    mix[2] = Math.round((added[2] * added[3] / mix[3]) + (base[2] * base[3] * (1 - added[3]) / mix[3])); // blue
    return mix;
}