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
** Gamma correction
** Details: http://blog.mouaif.org/2009/01/22/photoshop-gamma-correction-shader/
*/

/*
** 2013 adapted for Extended View Toolkit by Marian Weger
*/


#extension GL_ARB_texture_rectangle : enable

uniform sampler2DRect MyTex; 

uniform float gamma;



void main(void)
{

vec2 pos = (gl_TextureMatrix[0] * gl_TexCoord[0]).st;
vec4 color_old = texture2DRect(MyTex, vec2(pos.x, pos.y));


vec4 color_new = vec4(pow(color_old.r, 1.0 / gamma), pow(color_old.g, 1.0 / gamma), pow(color_old.b, 1.0 / gamma), color_old.a);

gl_FragColor = color_new;

}
