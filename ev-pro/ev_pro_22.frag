// (c)2011-2012 Cyrille Henry & Marian Weger
// part of EXTENDED VIEW TOOLKIT // gpl v3

#extension GL_ARB_texture_rectangle : enable

uniform sampler2DRect MyTex;
uniform float Sl,Sr,St,Sb; // shade size
uniform float set_alpha; // toggle alpha set to 1
varying vec2 pos;

void main (void)
{

    vec4 color = texture2DRect(MyTex, gl_TexCoord[0].st);

    if (set_alpha == 1.) 
        {
        color.a = 1.;
        } 
    else {}

    color.a *=min(1.,pos.x/Sl);
    color.a *=min(1.,(1.-pos.x)/Sr);
    color.a *=min(1.,pos.y/St);
    color.a *=min(1.,(1.-pos.y)/Sb);

    gl_FragColor = color;
}
