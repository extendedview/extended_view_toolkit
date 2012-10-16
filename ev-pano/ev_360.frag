// Cyrille Henry 2011
// modifications by Peter Venus & Marian Weger 2012

// #extension GL_ARB_texture_rectangle : enable
// uniform sampler2DRect MyTex;
uniform sampler2D MyTex;
uniform float Cx,Cy,rot, Width, Max, Min, Size;


void main (void)
{

// calculate next power of two image size

float i = 0.;
float number = 0.;

for(i=0.;i<24.;i++)
{
if(pow(2., i)>Size)
{
number=pow(2., i);
break;
}
}


float factor = Size / number;

vec2 car_position = (gl_TextureMatrix[0] * gl_TexCoord[0]).st;


float pol_r = (factor*Min) + (car_position.y * (Max - Min));

float pol_theta =  ((car_position.x * (Width / factor)) + rot) * 3.1415926536 / 180.;
//
 vec2 new_car;
//
 new_car.x = cos(pol_theta);
 new_car.y = sin(pol_theta);
//
 new_car *= pol_r/2.;
//
 new_car += factor * vec2(Cx, Cy);

 vec4 color = texture2D(MyTex, new_car);

gl_FragColor = color;

}
