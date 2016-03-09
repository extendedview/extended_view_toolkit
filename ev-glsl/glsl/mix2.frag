uniform vec4 amount;

uniform sampler2D tex0;
uniform sampler2D tex1;

varying vec2 texcoord0;
varying vec2 texcoord1;

void main(void) 
{		
	vec4 input0 = texture2D(tex0, texcoord0);
	vec4 input1 = texture2D(tex1, texcoord1);	

	gl_FragColor = mix(input0, input1, amount.x);
} 

