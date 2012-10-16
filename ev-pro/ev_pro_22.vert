// (c)2011-2012 Cyrille Henry & Marian Weger
// part of EXTENDED VIEW TOOLKIT // gpl v3

uniform vec2 Vtl,Vbl,Vtr,Vbr; // Vertex position
uniform vec2 Ttl,Tbl,Ttr,Tbr; // texture coordinate
uniform vec2 weight;

varying vec2 pos;

//vec2 _mix(vec2 A,vec2 B,float K)
//{
//    return(B*K+(1.-K)*A);
//}

void main()
{
    gl_TexCoord[0] = gl_MultiTexCoord0;

    vec4 position = gl_Vertex;
//    vec4 position = gl_TexCoord[0];
//    position.x /= 1024.;
//    position.y /= 768.;
//    position.xy *= 2.;
//    position.xy -= 1.;

    pos = (gl_Vertex.xy+vec2(1.))/2.;

    vec2 tex_position = position.xy;

    tex_position.x = (tex_position.x+1.)/2.;
    tex_position.y = (tex_position.y+1.)/2.;


if (weight.x >= 0.)
    {
    tex_position.x = (tex_position.x - (weight.x * tex_position.x)) / (1. - (weight.x * tex_position.x));
    }
else
    {
    tex_position.x = 1. - (((1. - tex_position.x) + (weight.x * (1. - tex_position.x))) / (1. + (weight.x * (1. - tex_position.x))));
    }


if (weight.y <= 0.)
    {
    tex_position.y = (tex_position.y + (weight.y * tex_position.y)) / (1. + (weight.y * tex_position.y));
    }
else
    {
    tex_position.y = 1. - (((1. - tex_position.y) - (weight.y * (1. - tex_position.y))) / (1. - (weight.y * (1. - tex_position.y))));
    }


    vec2 tex_top = mix(Ttl,Ttr,tex_position.x);
    vec2 tex_bottom = mix(Tbl,Tbr,tex_position.x);


    gl_TexCoord[0].st = mix(tex_top,tex_bottom, tex_position.y);


    vec2 pos_top = mix(Vtl,Vtr,(position.x+1.)/2.);
    vec2 pos_bottom = mix(Vbl,Vbr,(position.x+1.)/2.);
    position.xy = mix(pos_top,pos_bottom, (position.y+1.)/2.);

    gl_Position = gl_ModelViewProjectionMatrix * position;
}
