/*
** Copyright (c) 2012, Romain Dura romain@shazbits.com
** 
** Permission to use, copy, modify, and/or distribute this software for any 
** purpose with or without fee is hereby granted, provided that the above 
** copyright notice and this permission notice appear in all copies.
** 
** THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES 
** WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF 
** MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY 
** SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES 
** WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN 
** ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR 
** IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*/

/*
** Desaturation
*/

/*
** 2013 adapted for Extended View Toolkit by Marian Weger
*/


#extension GL_ARB_texture_rectangle : enable

uniform sampler2DRect tex0; 
uniform float desaturation;


void main(void)
{

vec2 pos = (gl_TextureMatrix[0] * gl_TexCoord[0]).st;
vec4 color_old = texture2DRect(tex0, vec2(pos.x, pos.y));
	
vec3 grayXfer = vec3(0.3, 0.59, 0.11);
vec3 gray = vec3(dot(grayXfer, color_old.rgb));
vec4 color_new = vec4(mix(color_old.rgb, gray, desaturation), color_old.a);

gl_FragColor = color_new;

}
