==========================
  Extended View Toolkit   
==========================
http://extendedview.mur.at


Extended View Toolkit is an abstraction library for PureData towards 
panoramic imagery creation and projection mapping.


Description
-----------

Extended View Toolkit is a set of abstractions for combining multiple 
video or image sources into a panoramic image and for projection
setups with multiple projectors or projection environments with 
challenging geometric forms, better known as video mapping.

Multiple input media (e.g. camera input, video files, image files, 
3D renderings) can be processed. It is possible to create
imagery or video by either stitching multiple inputs to one continuous,
or by unwrapping a 360-degree image taken with a special optical lens
system. Such processed media input can then be projected onto even 
irregular shaped surfaces. It is possible to blend smoothly between 
multiple projectors, to create seamless immersive media environments.

Extended View Toolkit was originally created at the "Institute for Electronic 
Music and Acoustics"/Graz within the CO-ME-DI-A project, lead by 
Winfried Ritsch for the art installation "Extended View" by Peter Venus.

The CO-ME-DI-A project was supported by the Education, Audiovisual & 
Culture Executive Agency (EACEA) of the European Comission for 
the period 2007 - 2010 (http://www.comedia.eu.org/).


Getting started
---------------

For an abstracion overview, open "01_ev_module_list.pd".
Go through the examples, to learn about the possibilities of the toolkit.
There are also individual help-patches for most of the modules.

The abstractions are divided into groups by folders:

"ev-in"    abstractions for media input, 
           i.e. video files, image files or camera input.
"ev-main"  general abstractions of the toolkit.
"ev-pano"  panoramic image or video creation
"ev-pro"   abstractions for video projection mapping.
"ev-glsl"  abstractions to load OpenGL shaders
           (contains subfolder with some shader files).

There are also folders for additional files:

"data"     contains the state-saving data of the example patches.
"media"    contains media files, like videos or images.
"libs"     contains external libraries that are used by the toolkit.


Requirements
------------

__Software:__
*  PureData or Pd-extended (http://puredata.info/downloads)
*  Gem 0.92.3 or higher 
   (included in Pd-extended or to be downloaded from http://gem.iem.at)
*  For OSC support, additional libraries may be nessecary 
   (e.g. mrpeach, iemnet; included in Pd-extended)

__Operating System:__
The abstractions have been tested on Linux (Debian/Ubuntu), 
Mac OSX 10.6/10.7 and Microsoft Windows 7.

__Hardware:__
Recent graphics hardware required to have access to full OpenGL 
capabilities of GEM

__Following problems have to be considered:__
Connecting more than one USB camera of the same type to a Windows 
or Mac Computer requires lots of tweaking, but works fine under Linux.


Source
------

https://github.com/extendedview/extended_view_toolkit


Copyright/License
-----------------

Copyright (C) 2010-2012  Peter Venus, Marian Weger, Cyrille Henry and IEM

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.

