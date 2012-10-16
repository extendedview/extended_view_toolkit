// (c)2011-2012 Cyrille Henry
// part of EXTENDED VIEW TOOLKIT // gpl v3


uniform vec2 V00, V01, V02, V03, V04;
uniform vec2 V10, V11, V12, V13, V14;
uniform vec2 V20, V21, V22, V23, V24;
uniform vec2 V30, V31, V32, V33, V34;
uniform vec2 V40, V41, V42, V43, V44; 

uniform vec2 Ttl,Tbl,Ttr,Tbr; // texture coordinate

varying vec2 pos;

vec2 CubicInterpolate( vec2 y0, vec2 y1, vec2 y2, vec2 y3, float mu)
{
    float mu2 = mu*mu;
    vec2 a0 = -0.5*y0 + 1.5*y1 - 1.5*y2 + 0.5*y3;
    vec2 a1 = y0 - 2.5*y1 + 2.*y2 - 0.5*y3;
    vec2 a2 = -0.5*y0 + 0.5*y2;

    return(a0*mu*mu2+a1*mu2+a2*mu+y1);
}

void main()
{
    gl_TexCoord[0] = gl_MultiTexCoord0;

    vec4 position = gl_Vertex;
    position.xy += 1.;
    position.xy /= 2.;

    pos = position.xy;

    vec2 tex_top = mix(Ttl,Ttr,position.x);
    vec2 tex_bottom = mix(Tbl,Tbr,position.x);
    gl_TexCoord[0].st = mix(tex_top,tex_bottom, position.y);

    position.xy *= 4.;
    vec2 mu = fract(position.xy);

    vec2 Vx0 = vec2(0.,0.);
    vec2 Vx1 = vec2(0.,0.);
    vec2 Vx2 = vec2(0.,0.);
    vec2 Vx3 = vec2(0.,0.);
    vec2 Vx4 = vec2(0.,0.);
    vec2 Vxy = vec2(0.,0.);

    if(position.x<1.)
    {
        Vx0 = CubicInterpolate(2.* V00 - V10, V00, V10, V20, mu.x);
        Vx1 = CubicInterpolate(2.* V01 - V11, V01, V11, V21, mu.x);
        Vx2 = CubicInterpolate(2.* V02 - V12, V02, V12, V22, mu.x);
        Vx3 = CubicInterpolate(2.* V03 - V13, V03, V13, V23, mu.x);
        Vx4 = CubicInterpolate(2.* V04 - V14, V04, V14, V24, mu.x);
    }

    if((position.x>=1.)&&(position.x<2.))
    {
        Vx0 = CubicInterpolate(V00, V10, V20, V30, mu.x);
        Vx1 = CubicInterpolate(V01, V11, V21, V31, mu.x);
        Vx2 = CubicInterpolate(V02, V12, V22, V32, mu.x);
        Vx3 = CubicInterpolate(V03, V13, V23, V33, mu.x);
        Vx4 = CubicInterpolate(V04, V14, V24, V34, mu.x);
    }
    
   if((position.x>=2.)&&(position.x<3.))
    {
        Vx0 = CubicInterpolate(V10, V20, V30, V40, mu.x);
        Vx1 = CubicInterpolate(V11, V21, V31, V41, mu.x);
        Vx2 = CubicInterpolate(V12, V22, V32, V42, mu.x);
        Vx3 = CubicInterpolate(V13, V23, V33, V43, mu.x);
        Vx4 = CubicInterpolate(V14, V24, V34, V44, mu.x);
    }
    
    if((position.x>=3.)&&(position.x<4.))
    {
        Vx0 = CubicInterpolate(V20, V30, V40, 2.* V40 - V30, mu.x);
        Vx1 = CubicInterpolate(V21, V31, V41, 2.* V41 - V31, mu.x);
        Vx2 = CubicInterpolate(V22, V32, V42, 2.* V42 - V32, mu.x);
        Vx3 = CubicInterpolate(V23, V33, V43, 2.* V43 - V33, mu.x);
        Vx4 = CubicInterpolate(V24, V34, V44, 2.* V44 - V34, mu.x);
    }

    if(position.x>=4.)
    {

        Vx0 = V40;
        Vx1 = V41;
        Vx2 = V42;
        Vx3 = V43;
        Vx4 = V44;
    }
 
    if(position.y<1.)
    {
        Vxy = CubicInterpolate(2. * Vx0 - Vx1, Vx0, Vx1, Vx2, mu.y);
    }

    if((position.y>=1.)&&(position.y<2.))
    {
        Vxy = CubicInterpolate(Vx0, Vx1, Vx2, Vx3, mu.y);
    }

    if((position.y>=2.)&&(position.y<3.))
    {
        Vxy = CubicInterpolate(Vx1, Vx2, Vx3, Vx4, mu.y);
    }

    if((position.y>=3.)&&(position.y<4.))
    {
        Vxy = CubicInterpolate(Vx2, Vx3, Vx4, 2. * Vx4 - Vx3, mu.y);
    }

    if(position.y>=4.)
    {
        Vxy = Vx4;
    }

    position.xy = Vxy;

    gl_Position = gl_ModelViewProjectionMatrix * position;
}
