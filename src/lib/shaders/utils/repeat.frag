precision mediump float;

vec2 repeat(in vec2 st, in float repeat) {
    return st * repeat;
}

vec2 repeat(in vec2 st, in vec2 repeat) {
    return vec2(st.x * repeat.x, st.y * repeat.y);
}