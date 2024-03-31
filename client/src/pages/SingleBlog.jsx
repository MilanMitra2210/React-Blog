import React from 'react'
import { FaUser } from 'react-icons/fa';
import { FaClock } from 'react-icons/fa6';
import { useLoaderData } from 'react-router-dom'
import SideBar from '../components/SideBar';
import Banner from '../components/Banner';

const SingleBlog = () => {
    const data = useLoaderData();
    const { title, image, category, author, published_date, reading_time, content } = data[0];
    console.log(data);
    return (
        <div>
            <Banner/>
            {/* blog details */}
            <div className='max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12'>
                <div className='lg:w-3/4 p-8 mx-auto'>
                    <div>
                        <img src={image} alt='' className='w-full mx-auto rounded' />
                    </div>
                    <h2 className='text-3xl mt-8 font-bold mb-4 text-blue-500'>{title}</h2>
                    <p className='mb-3 text-gray-500'><FaUser className='inline-flex items-center mr-2' />{author} | {published_date}</p>
                    <p className='mb-3 text-gray-500'><FaClock className='inline-flex items-center mr-2' />{reading_time}</p>
                    <p className='text-base text-gray-500 mb-6'>{content}</p>
                    <div>
                        <p>
                            In the ever-evolving landscape of technology, Apple has been a pioneering force, constantly pushing boundaries and setting new standards. With the introduction of the Apple Vision 2 Pro, the tech giant once again leads the charge into the future of innovation. In this blog, we delve into the visionary features and capabilities of the Apple Vision 2 Pro, exploring how it redefines the way we perceive and interact with technology.
                        </p><br />
                        <p>
                            At the heart of the Apple Vision 2 Pro lies its revolutionary display technology. Boasting an expansive OLED panel with enhanced brightness and contrast ratios, the Vision 2 Pro delivers breathtaking visual experiences like never before. Whether you're watching your favorite movies, immersing yourself in the latest games, or simply browsing the web, every pixel comes to life with unparalleled clarity and vibrancy. With support for HDR content and True Tone technology, colors are rendered with astonishing accuracy, ensuring that every scene pops with realism and detail.
                        </p><br />
                        <p>Complementing its stunning visual capabilities, the Apple Vision 2 Pro offers an immersive audio experience that transports you into the heart of the action. Equipped with advanced spatial audio technology and Dolby Atmos support, the Vision 2 Pro delivers multidimensional soundscapes that envelop you from every angle. Whether you're listening to music, watching movies, or playing games, you'll feel as though you're right in the midst of the action, with sound that moves dynamically around you. With its powerful built-in speakers and support for high-fidelity audio formats, the Vision 2 Pro sets a new benchmark for audio excellence.</p> <br />
                        <p>Intuitive Interface:
                            In keeping with Apple's commitment to simplicity and ease of use, the Vision 2 Pro features an intuitive interface that puts control at your fingertips. With the newly redesigned Apple TV app, navigating through your favorite content is easier and more intuitive than ever before. Whether you're searching for a specific movie, exploring curated collections, or discovering new recommendations, the Apple TV app makes it effortless to find what you're looking for. And with support for Siri voice commands, you can control your Vision 2 Pro with just your voice, making it easier than ever to access your favorite content.
                            <br />
                            Conclusion:
                            In conclusion, the Apple Vision 2 Pro represents the next evolution in home entertainment, combining cutting-edge technology with intuitive design to deliver a truly immersive and engaging experience. With its stunning display, immersive audio, seamless integration, and intuitive interface, the Vision 2 Pro sets a new standard for what a smart TV can be. Whether you're a movie buff, a gaming enthusiast, or simply looking for the ultimate entertainment experience, the Apple Vision 2 Pro is sure to delight and inspire.</p>
                    </div>
                </div>
                <div className='lg:w-1/4 '>
                    <SideBar/>
                </div>
            </div>
        </div>
    )
}

export default SingleBlog