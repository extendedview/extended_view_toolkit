// (c)2011-2012 Cyrille Henry & Marian Weger
// part of EXTENDED VIEW TOOLKIT // gpl v3

uniform vec2 Vtl,Vbl,Vtr,Vbr,Vtc,Vbc,Vcl,Vcr,Vcc; // Vertex position
uniform vec2 Ttl,Tbl,Ttr,Tbr; // texture coordinate
uniform vec2 weight;

varying vec2 pos;

void main()
{
    gl_TexCoord[0] = gl_MultiTexCoord0;

    vec4 position = gl_Vertex;
    position.xy += 1.;
    position.xy /= 2.;

    pos = position.xy;

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

    vec2 pos_top1 = mix(Vtl,Vtc,position.x);
    vec2 pos_top2 = mix(Vtc,Vtr,position.x);
    vec2 pos_top  = mix(pos_top1,pos_top2,position.x);

    vec2 pos_center1 = mix(Vcl,Vcc,position.x);
    vec2 pos_center2 = mix(Vcc,Vcr,position.x);
    vec2 pos_center  = mix(pos_center1,pos_center2,position.x);

    vec2 pos_bottom1 = mix(Vbl,Vbc,position.x);
    vec2 pos_bottom2 = mix(Vbc,Vbr,position.x);
    vec2 pos_bottom = mix(pos_bottom1,pos_bottom2,position.x);

    vec2 position1 = mix(pos_top,pos_center,position.y);
    vec2 position2 = mix(pos_center,pos_bottom,position.y);
    position.xy = mix(position1,position2, position.y);

    gl_Position = gl_ModelViewProjectionMatrix * position;
}
