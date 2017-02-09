// my terrain generation algorithm
// The inputs are side_length (the plane must have sides whose length is of the form 2^n -1),
// magnitude (sets the bounds on the randomness),
// reduction_scale (how fast the algorithm 'levels out')
var diamondSquare = function diamondSquare(side_length, magnitude, reduction_scale) {
  // think this is how you do 2d arrays in javascript
    arr = new Array(side_length);
    for (var i = 0; i < side_length; i++) {
      arr[i] = new Float32Array(side_length);
    }
    // initialize the sides
    arr[0][0] = Math.random() * magnitude * 2 - magnitude;
    arr[0][side_length-1] = Math.random() * magnitude * 2 - magnitude;
    arr[side_length-1][0] = Math.random() * magnitude * 2 - magnitude;
    arr[side_length-1][side_length-1] = Math.random() * magnitude- magnitude;

    function dsHelper(top_i,top_j,sub_length,m,s) {
      if (sub_length <= 0) {
        return;
      }
      var half_sub_length = Math.floor(sub_length/2);

      // DIAMOND
      var corners = [
        arr[top_i][top_j],
        arr[top_i + sub_length][top_j],
        arr[top_i][top_j + sub_length],
        arr[top_i + sub_length][top_j + sub_length]
      ];
      var avg = corners.reduce(function(a,b) {return a+b;}) / 4;
      arr[top_i + half_sub_length][top_j + half_sub_length] = avg + Math.random() * m;



      dsHelper(top_i,top_j, half_sub_length, m*s,s);
      dsHelper(top_i,top_j + half_sub_length, half_sub_length,m*s,s);
      dsHelper(top_i + half_sub_length,top_j, half_sub_length,m*s,s);
      dsHelper(top_i + half_sub_length,top_j + half_sub_length, half_sub_length,m*s,s);
    }
    dsHelper(0,0,side_length-1,magnitude,reduction_scale);


    return arr;
}
