precision mediump float;

mediump float cog(in vec2 st){
    vec2 pos = vec2(0.5)-st;

    float r = length(pos)*2.0;
    float a = atan(pos.y,pos.x);

    return smoothstep(
        -1.2, // lower cog part
        1.5,  // upper cog part
        cos(
            a * 10. // number of teeth
        ))
    *0.5 // inner size
    + 0.5; // outer size
}