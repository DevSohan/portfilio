import { TypeAnimation } from 'react-type-animation';


function TextEffect() {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'GIS Developer',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'Urban Planner',
        1500,
        'Geoinformatic Engineer',
        1500,
        'Programmer',
        1500
      ]}
      wrapper="span"
      speed={50}
      className='text-2xl md:text-4xl text-dev-sohan-green font-bold uppercase h-10'
      repeat={Infinity}
    />
  );
};

export default TextEffect