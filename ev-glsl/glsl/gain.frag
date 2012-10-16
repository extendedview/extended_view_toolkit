#extension GL_ARB_texture_rectangle : enable

uniform sampler2DRect MyTex; 

uniform vec4 gain;

void main(void)
{

vec2 pos = (gl_TextureMatrix[0] * gl_TexCoord[0]).st;
vec4 color_old = texture2DRect(MyTex, vec2(pos.x, pos.y));
vec4 color_new = color_old;

color_new.r = clamp(gain.r * color_old.r, 0., 1.);
color_new.g = clamp(gain.g * color_old.g, 0., 1.);
color_new.b = clamp(gain.b * color_old.b, 0., 1.);
color_new.a = clamp(gain.a * color_old.a, 0., 1.);

gl_FragColor = color_new;

}
