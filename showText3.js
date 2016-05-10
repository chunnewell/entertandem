(function(){
    var MAX_TEXT_LENGTH = 3;
    var WIDTH_INCREMENT = 0.15;
    var clicked = false;
    var text;
    this.clickDownOnEntity = function(entityID, mouseEvent) { 
        if (!clicked){
            // this part of the code describes how to center the entity in front of your avatar when it is created.
            var name = Entities.getEntityProperties(entityID).name;
            var width = .20;
            var i = 1;
            while(name.length > MAX_TEXT_LENGTH*i) {
              width = width + WIDTH_INCREMENT;
              i++;
              print("hello");
            }
            print("y is " + Entities.getEntityProperties(entityID).position.y);
            var center = {x: Entities.getEntityProperties(entityID).position.x, y: Entities.getEntityProperties(entityID).position.y + .1, z:Entities.getEntityProperties(entityID).position.z};
            text = Entities.addEntity({
              type: "Text",
              name: "Sfera",
              text: "\t" + Entities.getEntityProperties(entityID).name,
              position: center,
              lifetime: -1,
              faceCamera: true,
              dimensions: {
                x: width,
                y: 0.2,
                z: 2.529
              },
              dynamic: true,
              gravity: {
                x: 0,
                y: -5,
                z: 0
              },
            });

            clicked = true;
        }       
        else {
          Entities.deleteEntity(text);
          clicked = false;
        }
    }; 
})