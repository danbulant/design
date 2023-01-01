precision mediump float;

mediump float circle(in vec2 _st, in float _radius){
    vec2 dist = _st-vec2(0.5);
	return 1.-smoothstep(_radius-(_radius*0.01),
        _radius+(_radius*0.01),
        dot(dist,dist)*4.0);
}