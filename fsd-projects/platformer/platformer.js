$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(250, 700, 250, 10, "red");
    createPlatform(100, 600, 100, 20, "black")

    createPlatform(300, 550, 100, 20, "black")
    createPlatform(500, 500, 100, 20, "black")
    createPlatform(690, 400, 100, 20, "black")
    createPlatform(890, 500, 100, 20, "Black")
    createPlatform(1080, 580, 100, 20, "black")
    createPlatform(1210, 670, 100, 20, "black")




    // TODO 3 - Create Collectables
    createCollectable("diamond",150, 150, 1.0, 0.6,);
    createCollectable("steve", 350, 350, 1.0, 0.6);
    createCollectable("grace", 550, 5, 1.0, 0.6);
    createCollectable("kennedi", 750, 20, 1.0, 0.6);
    createCollectable("database", 920, 20, 1.0, 0.6)



    
    // TODO 4 - Create Cannons
    createCannon("left", 200, 3000);
    createCannon("left", 200, 1000);
    createCannon("right", 180, 1000);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
