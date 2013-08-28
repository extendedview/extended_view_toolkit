varying vec2 texcoord0;
varying vec2 texcoord1;
varying vec2 texcoord2;

void main()
{
    gl_Position = ftransform();

    texcoord0 = vec2(gl_TextureMatrix[0] * gl_MultiTexCoord0);
    texcoord1 = vec2(gl_TextureMatrix[1] * gl_MultiTexCoord1);
    texcoord2 = vec2(gl_TextureMatrix[2] * gl_MultiTexCoord2);
}