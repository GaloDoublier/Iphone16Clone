

const Animation = (timeline,rotationRef,rotationState,firstTarget,secondTarget,animationProps) => {
    //get back to first original rotation state
    console.log(rotationState)

    if (rotationState.x === 0 && rotationState.y === 0 && rotationState.z === 0) {
        console.log("si")
        timeline.to(rotationRef.current.rotation, {
            y:0,
            duration:1,
            ease: "power2.inOut"
          })
    }
    else{
        console.log("no")
        timeline.to(rotationRef.current.rotation, {
            y:rotationState,
            duration:1,
            ease: "power2.inOut"
          })
    }

  timeline.to(
    firstTarget,{
        ...animationProps,
        ease: "power2.inOut"
    },
    "<" // insert animation at start of previous animation
  )

  timeline.to(
    secondTarget,{
        ...animationProps,
        ease: "power2.inOut"
    },
    "<" // insert animation at start of previous animation
  )
}

export default Animation