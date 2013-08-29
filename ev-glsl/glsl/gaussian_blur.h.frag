#extension GL_ARB_texture_rectangle : enable

// Source: 
// http://www.gamerendering.com/2008/10/11/gaussian-blur-filter-shader/

uniform sampler2DRect tex0;
uniform float blur_size; // blur size

void main(void)
{

   vec2 pos = (gl_TextureMatrix[0] * gl_TexCoord[0]).st;
   vec4 sum = vec4(0.0);
 
   // blur in x (horizontal)
   // take nine samples, with the distance size between them
   sum += texture2DRect(tex0, vec2(pos.x - 4.0*blur_size, pos.y)) * 0.05;
   sum += texture2DRect(tex0, vec2(pos.x - 3.0*blur_size, pos.y)) * 0.09;
   sum += texture2DRect(tex0, vec2(pos.x - 2.0*blur_size, pos.y)) * 0.12;
   sum += texture2DRect(tex0, vec2(pos.x - blur_size, pos.y)) * 0.15;
   sum += texture2DRect(tex0, vec2(pos.x, pos.y)) * 0.16;
   sum += texture2DRect(tex0, vec2(pos.x + blur_size, pos.y)) * 0.15;
   sum += texture2DRect(tex0, vec2(pos.x + 2.0*blur_size, pos.y)) * 0.12;
   sum += texture2DRect(tex0, vec2(pos.x + 3.0*blur_size, pos.y)) * 0.09;
   sum += texture2DRect(tex0, vec2(pos.x + 4.0*blur_size, pos.y)) * 0.05;
 
   gl_FragColor = sum;
}