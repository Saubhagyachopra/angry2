class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB= pointB

        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
     fly(){
         this.chain.bodyA=null
     }

    display(){
        if(this.chain.bodyA){
            var Pta = this.chain.bodyA.position;
            var Ptb = this.pointB;
            strokeWeight(4);
            line(Pta.x, Pta.y, Ptb.x, Ptb.y);
        }
        
    }
    
    
}