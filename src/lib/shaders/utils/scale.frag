precision mediump float;

mat2 mat_scale(vec2 _scale){
    return mat2(_scale.x,0.0,
                0.0,_scale.y);
}

vec2 scale(in vec2 _st, in vec2 _scale) {
    vec2 st = _st;
    st -= 0.5;
    st *= mat_scale(_scale);
    st += 0.5;
    return st;
}