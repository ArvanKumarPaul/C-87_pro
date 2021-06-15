canvas = new fabric.Canvas('myCanvas');

block_img_height = 140;
block_img_width = 150;

player_X = 10;
player_Y = 10;

player_img = "";
block_img = "";

function player_update() {

    fabric.Image.fromURL("player.webp" , function(Img){
  
      player_img = Img;
      player_img.scaleToWidth(150);
      player_img.scaleToHeight(140);
  
      player_img.set( {
  
        top:player_Y ,
        left:player_X 
  
      });
  
      canvas.add(player_img);
  
    });
  
  }

  function new_image(get_image) {

    fabric.Image.fromURL(get_image , function(Img){
  
      block_img = Img;
      block_img.scaleToWidth(block_img_width);
      block_img.scaleToHeight(block_img_height);
  
      block_img.set( {
        
        top:player_Y ,
        left:player_X     
  
      });
  
      canvas.add(block_img);
  
    });
  
  } 

  window.addEventListener("keydown" , my_keydown);

  function my_keydown(e) {

    var key_pressed = e.keyCode;
    console.log(key_pressed);

    if(e.shiftKey == true && key_pressed == '80') {

      console.log("Shift and P are pressed together");
      block_img_height = block_img_height + 10;
      block_img_width = block_img_width + 10;
      console.log("current height = ").innerHTML = block_img_height;
      console.log("current width = ").innerHTML = block_img_width;

    }


  if(e.shiftKey == true && key_pressed == '77') {

    console.log("Shift and M are pressed together");
    block_img_height = block_img_height - 10;
    block_img_width = block_img_width - 10;
    console.log("current height = ").innerHTML = block_img_height;
    console.log("current width = ").innerHTML = block_img_width;

  }

  if(key_pressed = '70') {

    console.log("F pressed");
    new_image('ironman_face.png');

  }

  if(key_pressed = '66') {

    console.log("B pressed");
    new_image('spiderman_body.png');

  }

  if(key_pressed = '76') {

    console.log("L pressed");
    new_image('hulk_legs.png');

  }

  if(key_pressed = '82') {

    console.log("R pressed");
    new_image('thor_right_hand.png');

  }

  if(key_pressed = '72') {

    

  }

}