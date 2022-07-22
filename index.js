
const developersLife = () => {
    let _sleeping = false;
    function brightIdea () {        
        return Math.random();
    }
    function awake() {
        return !_sleeping ? true : false;
    }
    function wakeUp() {
        _sleeping = false;
        writeCode();
    }
    function sleep () {
        _sleeping=true;
        console.log('Sleeping.'); 
        setTimeout(
            () => { 
                console.log('Time to wake up.'); 
                wakeUp();
            },
            brightIdea() > 0.09 ? 100 : 10000
        );
    }
    function writeCode() {
        if(brightIdea() > 0.09)
        {
            console.log('Write Code or Study');
            return setTimeout(writeCode, brightIdea() > 0.09 ? 100 : 10000);
        } else {
            awake() ? console.log('Should I go to Sleep?') :  console.log('Should I go wake up?'); 
            brightIdea() > 0.09 ? setTimeout(writeCode, brightIdea() > 0.09 ? 100 : 10000) : sleep();
        }
    }
    return function () {
        while (awake()) {
            writeCode();
        } 
    } 
};

developersLife()();
