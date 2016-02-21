#extension GL_ARB_texture_rectangle : enable

// Source: 
// http://www.gamerendering.com/2008/10/11/gaussian-blur-filter-shader/

uniform sampler2DRect MyTex; // the texture with the scene you want to blur
uniform float blur_size; // blur size
 
void main(void)
{

   vec2 pos = (gl_TextureMatrix[0] * gl_TexCoord[0]).st;
   vec4 sum = vec4(0.0);
 
   // blur in y (vertical)
   // take nine samples, with the distance blur_size between them
   sum += texture2DRect(MyTex, vec2(pos.x, pos.y - 4.0*blur_size)) * 0.05;
   sum += texture2DRect(MyTex, vec2(pos.x, pos.y - 3.0*blur_size)) * 0.09;
   sum += texture2DRect(MyTex, vec2(pos.x, pos.y - 2.0*blur_size)) * 0.12;
   sum += texture2DRect(MyTex, vec2(pos.x, pos.y - blur_size)) * 0.15;
   sum += texture2DRect(MyTex, vec2(pos.x, pos.y)) * 0.16;
   sum += texture2DRect(MyTex, vec2(pos.x, pos.y + blur_size)) * 0.15;
   sum += texture2DRect(MyTex, vec2(pos.x, pos.y + 2.0*blur_size)) * 0.12;
   sum += texture2DRect(MyTex, vec2(pos.x, pos.y + 3.0*blur_size)) * 0.09;
   sum += texture2DRect(MyTex, vec2(pos.x, pos.y + 4.0*blur_size)) * 0.05;
 
   gl_FragColor = sum;
}