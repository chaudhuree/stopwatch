
function stopWatch(){

    // private property
    let startTime,endTime,running,duration = 0;
    // start time
    this.start = function(){
        if(running){
            throw new Error('stopwatch is already running');
        }else{
            running=true;
            startTime = new Date();
        }
    };
    // stop time
    this.stop=function(){
        if(!running){
            throw new Error('stopwatch is not started');
        }else{
            running=false;
            endTime = new Date();
            const second = (endTime.getTime() - startTime.getTime())/1000;
            duration+=second;
        }
    };
    // reset the values
    this.reset=function(){
        startTime=null;
        endTime=null;
        running=false;
        duration=0;
    }
    
    // property declare it is needed to access or view private property only like duration , startTime, endTime etc
    Object.defineProperty(this, 'duration',{
        get: function(){
            return duration;
        }            
        
    })
    // ⬆️⬇️ both function works the same thing. upper one is property but down one is method.
    //  property may be callde as sw.duration but property as sw.dure();
    this.dure = function(){
        return duration;
    }
 
}
