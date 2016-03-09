
uniform vec4 amount;
uniform sampler2D tex0;
uniform sampler2D tex1;
uniform sampler2D tex2;

varying vec2 texcoord0;
varying vec2 texcoord1;
varying vec2 texcoord2;

void main(void) 
{ 
	
vec4 texture1 = texture2D(tex0, texcoord0);
vec4 texture2 = texture2D(tex1, texcoord1);	
vec4 lumamask = texture2D(tex2, texcoord2);

float luminance = (max(max(lumamask.r, lumamask.g), lumamask.b) + min(min(lumamask.r, lumamask.g), lumamask.b)) / 2.0;

gl_FragColor = mix(texture1, texture2, luminance);

} 
