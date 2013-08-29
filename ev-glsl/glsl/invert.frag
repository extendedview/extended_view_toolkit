/*
** Invert RGB
** (c)2013 Marian Weger
*/


#extension GL_ARB_texture_rectangle : enable

uniform sampler2DRect tex0; 

uniform vec3 invert;

void main(void)
{

vec2 pos = (gl_TextureMatrix[0] * gl_TexCoord[0]).st;
vec4 color_old = texture2DRect(tex0, vec2(pos.x, pos.y));
vec4 color_new = color_old;

if(invert.r == 1.0)
{
color_new.r = 1.0 - color_old.r;
}

if(invert.g == 1.0)
{
color_new.g = 1.0 - color_old.g;
}

if(invert.b == 1.0)
{
color_new.b = 1.0 - color_old.b;
}

gl_FragColor = color_new;

}
