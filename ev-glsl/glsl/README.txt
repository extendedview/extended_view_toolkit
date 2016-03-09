ev-glsl/glsl
============

This folder contains the shader files for the [ev_glsl] abstraction.

For each effect, there should always be a quadruplet of files:
--------------------------------------------------------------

*  "<name>.vert" contains the vertex shader

*  "<name>.frag" contains the fragment shader

*  "<name>.ctl.pd" is an abstaction to control the shader's variables from Pd.
   This abstraction also contains the initial values
   of the shader's variables.

*  "<name>.reg.pd" is an abstaction containing the registers for state saving
   and osc communication.
   This abstraction also initializes these values,

