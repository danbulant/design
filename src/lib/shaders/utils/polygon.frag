precision mediump float;

#define PI 3.14159265359
#define TWO_PI 6.28318530718

// sides should probably be an integer, but it can be abused for morphin effects
mediump float polygon(in vec2 st, in float sides){
    vec3 color = vec3(0.0);

    // Remap the space to -1. to 1.
    st = st *2. -1.;

    // Angle and radius from the current pixel
    float a = atan(st.x,st.y)+PI;
    float r = TWO_PI/float(sides);

    // Shaping function that modulate the distance
    return cos(floor(0.500+a/r)*r-a)*length(st);
    // when it's not 0.5 exactly, the triangles will not match perfectly for the polygon to take shape. Can be abused for cool effects
    // (possibly transitions)
}
