//stateless
var SpaceShuttle = function(targetPlanet){
    this.targetPlanet = targetPlanet;
  }
  var zeus = new SpaceShuttle('Jupiter');
  
//with state
  class SpaceShuttl {
    constructor(targetPlanet) {
      this.targetPlanet = targetPlanet;
    }
  }
  const zeu = new SpaceShuttl('Jupiter');
  console.log(zeu)