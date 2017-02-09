### Name and Project Name
Luke Carlson - Threejs project
### Link to GitHub Pages site
[right here](https://pennvr.github.io/three-js-jLukeC/)
### Techniques used, and why those techniques
For this assignment I built a version of the [diamond square algorithm](https://en.wikipedia.org/wiki/Diamond-square_algorithm) to generate my terrain from a PlaneGeometry. It seemed like a reasonable way to generate the terrain. You can see the code at js/diamond_square.js

For my particle system, I created a bunch of small red spheres that explode in random directions.

For controls, I used code from the PointerLockControl & webvr cube THREE.js examples. Those examples were super helpful for setting up my environment & world.
That way I could test both with a headset in VR and on a laptop with the mouse (and keyboard to move around for debugging).
### Instructions on building/assembling/etc. Also document how to run the code
No assembly required, just load the index.html page (which will load my js/diamond_square.js algorithm and the external libs).

Note: it may take a moment to generate the terrain at the start
### When in VR mode, did you feel any motion sickness? Why and why not?
No, I think it is because there isn't much movement going on in the scene so there isn't an opportunity to get motion sickness
### What was the hardest part of the assignment?
A lot of it was getting used to Threejs and the small quirks, like learning that number of vertices in a plane is (segments+1) * (segments+1)

I'd say the terrain generation algorithm took the longest. I originally went with some sort of smooth randomness but that didn't look as cool.
### What do you wish you’d done differently?
Now that I've finished the project I feel like I understand threejs a lot better so if I did the project again I would
take it in a different direction and try to generate better terrain, trees, or look into flowing water.

There is a bug in the square section of DS that leads to some vertices not getting averaged correctly which is unfortunate and if I had a bit more time I'd fix that.
### What do you wish we had done differently?
Not much, the difficulty in the project was mainly getting into threejs. You guys gave us extra time which was really helpful. I think it would be interesting to try to do a similar assignment again at the end of the semester and see how we progress
