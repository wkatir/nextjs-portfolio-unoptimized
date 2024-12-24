import Link from 'next/link';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import { socialMedia } from '@/data';

const Footer = () => {
    return (
        <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[45vw]">
                    Ready to take <span className="text-purple">your </span>
                    digital presence to the next level?
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">Reach out to me today and let&apos;s discuss how
                    I can help you achieve your goals.
                </p>
                <Link href="mailto:wilmerhenrysalazarmartinez@gmail.com">
                    <MagicButton title="Let's get in touch"
                        icon={<FaLocationArrow></FaLocationArrow>}
                        position='right'
                    ></MagicButton>
                </Link>
            </div>
            <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
                <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2025 Wilmer Salazar</p>
                <div className='flex items-center md:gap-3 gap-6'>
                    {socialMedia.map((profile) => (
                        <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop:filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                            <Link href={profile.link}>
                            <img src={profile.img} alt={profile.img}
                                width={20}
                                height={20}
                            />
                            </Link>
                        </div>
                    )
                    )}
                </div>
            </div>
        </footer>
    )
}

export default Footer