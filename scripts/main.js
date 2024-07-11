
runOnStartup(async runtime =>
{
    // Code to run on the loading screen.
    // Note layouts, objects etc. are not yet available.

    runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

async function OnBeforeProjectStart(runtime)
{


    // Code to run just before 'On start of layout' on
    // the first layout. Loading has finished and initial
    // instances are created and available to use here.
    
    // Add your initialization code here, such as creating initial game objects,
    // setting up variables, or performing any other setup tasks.
    
    // For example:
    // Create mining blocks instances, initialize game state, etc.
    
    runtime.addEventListener("tick", () => Tick(runtime));
}

function Tick(runtime) {

}

