import Image from 'next/image';
import yo from './images/yo.jpg';

type Props = {};

export const About = (props: Props) => {
  return (
    <>
      <h1 className='drop-shadow-md text-primary md:text-[70px]'>About Me</h1>
      <h2 className='pt-2 text-primary'>Something Little About Me</h2>
      <div className="md:grid md:grid-cols-2 md:gap-4">
        <div>
          <p className='text-white pt-10'>
            Hi there! I'm a passionate  web developer with a foundation in front-end and back-end technologies. I have a deep love for crafting elegant and user-friendly digital experiences that leave a lasting impact. With a knack for problem-solving and an eye for detail, I'm always excited to take on new challenges and bring innovative ideas to life.
          </p>
          <p className='text-white pt-4'>
            Over the years, I've honed my skills in JavaScript, HTML, and CSS to create responsive and interactive web applications. My experience extends to using popular frameworks like React and Next.js, allowing me to build modern and seamless user interfaces. I'm also well-versed in database management and have a solid understanding of SQL.
          </p>
          
        </div>
        <div className='relative flex justify-center'>
          <Image className='w-4/6 p-1 bg-border mt-10' src={yo} alt="Profile pic" />
        </div>
      </div>
    </>
  );
};
