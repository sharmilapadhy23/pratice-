var t1 = gsap.timeline({ repeat: -1 });

// Animation for .imagecontainer entrance and exit
t1.to(".imagecontainer", {
    ease: Expo.easeInOut,
    width: "100%",
    duration: 2,
    stagger: 2,
}, 'start'); // 'start' label ensures all animations begin at the same time

// Animation for .text h1 entrance
t1.to(".text h1", {
    ease: Expo.easeInOut,
    stagger: 2,
    top: 0,
}, 'start'); // Ensure these animations start at the same time as '.imagecontainer' animation

// Animation for .text h1 exit and hide
t1.to(".text h1", {
    delay: 2,
    ease: Expo.easeInOut,
    stagger: 2,
    top: "-90%",
    opacity: 0, // Fade out the elements
}, 'start'); // Ensure this animation starts at the same time as others
