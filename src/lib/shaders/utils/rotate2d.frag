precision mediump float;

mat2 mat_rotate2d(in float angle){
    return mat2(cos(angle),-sin(angle),
        sin(angle),cos(angle));
}

vec2 rotate2d(in vec2 _st, in float angle) {
    vec2 st = _st;
    st -= 0.5;
    st *= mat_rotate2d(angle);
    st += 0.5;
    return st;
}