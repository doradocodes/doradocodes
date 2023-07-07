export const creativeProjects = {
    'merging-worlds': {
        name: 'Merging Worlds: bridging analog and digital photography (2023)',
        imageUrl: 'thesis_cover.jpg',
        summary: <p>Inspired by my personal experiences as a software engineer and analog photographer, this project is a personally crafted camera that blends the tactile charm of analog photography with discreet incorporation of digital features.</p>,
        link: 'https://dd3368-thesis.glitch.me/',
        sections: [
            {
                content: <div>
                    <div className="flex-wrapper">
                        <img src="assets/093A5771.jpg" alt="1"/>
                        <img src="assets/093A5788.jpg" alt="2"/>
                    </div>
                </div>
            },
            {
                title: 'Background',
                content: <div>

                    <p>This project originated from my desire to merge two significant aspects of my life: analog photography and software development. Additionally, I aimed to critically examine and enhance the role of social media in sharing photography work. As an online photographer, particularly on platforms like Instagram, I have experienced frustration and discouragement due to the competitive nature of social media algorithms.</p>
                    <p>During the research phase, I broke down the aspects of photography into three parts: photograph-making, photograph-sharing, and photograph-consuming. I explored each of these areas by reading books, prototyping ideas, and reflecting on my own experiences.</p>
                    <p>In the photograph-making phase of my research, I read books from the Ansel Adams Photography Photography Series, which includes The Camera, The Negative, and The Print. Published in the 1950s, each book of the series is a deep dive into the technical aspects of analog photography. The descriptions and diagrams from these books helped me envision the mechanics of an analog camera, and gave me ideas on how to incorporate them into my design.</p>
                    <p>In the photograph-sharing phase of my research, I turned to "The Social Photo" by Nathan Jurgenson. Jurgenson's thought-provoking insights shed light on the impact of social media on our understanding and engagement with photography. He delves into topics such as the transformation of images into data, the rise of the "selfie," and the construction of identity in the digital age. Drawing from Jurgenson's perspectives, I critically examined the role of social media platforms, particularly Instagram, in shaping the perception and value of photographic work. His work inspired me to challenge the constraints of algorithmic validation and explore alternative modes of sharing and experiencing photography. A particular quote that resonated with me was, “In the age of digital abundance, photography desperately needs this introduction of intentional and assured morality, so that some photos can become immortal again.”</p>
                    <p>During the photograph-consuming phase of my research, I ventured beyond theoretical readings and engaged in practical exploration. I examined online photography communities, and analyzed the behavior and preferences of social media users. This immersive approach enabled me to gain a nuanced understanding of the ways in which individuals engage with and derive meaning from photographs in the digital realm.</p>
                    <p>Based on my research and personal insights, I set out to create a camera that combines the charm of analog photography with modern digital features. Taking inspiration from the wisdom of Ansel Adams and the thought-provoking ideas of Nathan Jurgenson, I aimed to design a tool that helps people connect more deeply with the art of photography and breaks away from the usual ways of sharing images online.</p>
                    <p>By incorporating the workings of analog cameras into my design, I aimed to provide photographers with a hands-on and immersive experience. At the same time, I ventured into fresh approaches for sharing my work online, steering away from the controlled and algorithm-dependent nature of mainstream platforms. Drawing inspiration from Jurgenson's insights on social media and the formation of identity, I envisioned a digital realm that embraces genuineness and fosters deeper connections with photography.</p>
                </div>,
            },
            {
                title: 'Technical Details',
                content: <div>
                    <p>This project provided an invaluable opportunity for me to acquire new skill sets that I had long desired to learn. It began with sketching and constructing an initial cardboard prototype to verify the technical feasibility of the waist-level viewfinder mechanics. Progressing further, I utilized a laser cutter to craft a refined prototype with an acrylic body. I delved into working with a Raspberry Pi, gaining proficiency in flashing an OS on an SD card and scripting in Python to facilitate image capture with a Raspberry Pi camera module. By the culmination of the spring semester, I had a fully functional prototype that enabled outdoor shooting.</p>
                    <p>During the subsequent summer term, my primary focus revolved around mastering the art of 3D printing to create a more polished camera body. I used Fusion 360 to create precise 3D models, which I materialized using a 3D printer. Upon the completion of the 3D printed prototype, I proceeded to construct a server that uploaded images directly to my dedicated website. Utilizing HTML, CSS, and Javascript, I built the website and incorporated the Greensock animation library.</p>
                </div>
            },
            {
                title: 'Conclusion',
                content: <div>
                    <p>This project represents a deeply personal exploration that intertwines the realms of analog photography and software development. It has allowed me to challenge the limitations imposed by social media and algorithmic validation, encouraging a more authentic and meaningful engagement with photography. By fusing the tactile charm of analog photography with discreet digital integration, I have sought to bridge the gap between past and present, tradition and innovation.</p>

                    <p>Throughout this journey, I have ventured into uncharted territories, acquiring new skills in prototyping, 3D printing, and programming. The process has been one of growth, as I delved into the technical aspects of camera mechanics, expanded my knowledge of photography theory, and explored the psychology of sharing work on social media.</p>

                    <p>Moreover, this project has fostered a deeper understanding of the multifaceted nature of passions and the boundless possibilities that emerge when we break free from predefined boundaries. It serves as a testament to the power of embracing our diverse interests and uncovering new avenues for creative expression.</p>

                    <p>As I embark on the next phase of this project, I look forward to further refining my camera design, experimenting with different techniques, and continuing to challenge the conventions of digital photography. Ultimately, my goal is to inspire others to explore their own passions, break down barriers, and find unique ways to express themselves creatively in an ever-evolving digital landscape.</p>

                    <p>This project is a testament to the transformative potential of embracing our passions, blurring boundaries, and forging new paths of artistic exploration. It is a reminder that our journey of self-discovery and creative expression is an ongoing process, one that continues to unfold with each new endeavor.</p>
                    <video src="assets/thesis_demo_final.mp4" controls />

                </div>
            },
            {
                title: 'Project References',
                content: <div>
                    <ul>
                        <li>
                            Adams, Ansel. The Camera. Bulfinch, 1995. This book is a high level overview of different types of cameras and their mechanics. I plan to use this to understand how analog cameras work in order to experiment with creating my own.
                        </li>
                        <li>
                            Adams, Ansel. The Negative. Bulfinch, 1995. Part of Ansel Adam’s series, describes how negatives are made and how they work.
                        </li>
                        <li>
                            Adams, Ansel. The Print. Morgan, 1968. Part of Ansel Adam’s series, describes how darkroom printing works.
                        </li>
                        <li>
                            “Build a Cardboard Camera Obscura.” Build a Camera Obscura Out of Cardboard, https://ataridogdaze.com/science/camera-obscura/. An instructional video on how to build a camera obscura out of cardboard. I plan to recreate the camera built in this video in order to get a grasp on how to build my own camera.
                        </li>
                        <li>
                            Jurgenson, Nathan. The Social Photo: on Photography and Social Media. Verso, 2020. Critique on how photography has changed with social media.
                        </li>
                        <li>
                            Parker, Paul. “Convert Any Analog Camera to Digital with This DIY Hack.” Fstoppers, 13 Sept. 2022, https://fstoppers.com/diy/convert-any-analog-camera-digital-diy-hack-575091. An DIY experiment with creating a digital adapter on film cameras using a Raspberry Pi.
                        </li>
                        <li>
                            Peddecord, K. Michael. “Behold the Future: Implications of Automated Image Analysis for the Photographic Arts.” The International Journal of the Image, vol. 13, no. 1, 2022, pp. 47–62., https://doi.org/10.18848/2154-8560/cgp/v13i01/47-62. A paper about using artificial intelligence in photography to determine “aesthetic”.
                        </li>
                        <li>
                            “Photoscopia.” Vickileonpublicart, https://www.vickileonartist.com/scottsdale-public-art. A public art installation of a large scale kaleidoscope by Vicki Leon that prints photos observed through the kaleidoscope.
                        </li>
                        <li>
                            Sontag, Susan. On Photography. Penguin, 2019. A collection of essays that gives a critical historical overview of photography.
                        </li>
                        <li>“Wolfgang Tillmans: To Look without Fear: Moma.” The Museum of Modern Art, https://www.moma.org/calendar/exhibitions/5440. An exhibit held at MoMA New York that uses a unique design for showcasing photography.</li>
                    </ul>
                </div>
            }
        ],
    },
    'ambient-watercolor': {
        name: 'Ambient Watercolor (2022)',
        imageUrl: 'ambient-watercolor-8.jpeg',
        summary: <p><i>Ambient Watercolor</i> is an experiment with ML5 and generative art. In a calm, tranquil environment, participants can create abstract watercolor paintings using their hands.</p>,
        link: "https://ddo-nyu.github.io/watercolor/",
        github: "",
        sections: [
            {
                title: 'Background',
                content: <div>
                    <p className="smaller-font">The journey to the creation of my final project of the Summer '22 term began at the beginning of the
                        summer session. I already had previous coding experience, so my Creative Coding instructor, Carrie, told
                        me to follow my own curriculum. She encouraged me to experiment with anything I have been previously
                        curious about, so I told her I wanted to learn and experiment more with 3D web graphics (Three.js) and
                        the idea of art installations. At the time, some ideas I had about my final project included visualizing
                        music and placing in an art installation.</p>
                    <p className="smaller-font">During the first week of classes, I followed some ThreeJS tutorials which taught
                        me the basics of creating objects, manipulating cameras, and shading. For the first creative coding
                        assignment, “Opposites”, I created a 3D object with alternated turning into a sun or moon.</p>
                    <div className="flex-wrapper">
                        <img src="assets/ambient_watercolor_1.png" alt="1" className="image" />
                        <img src="assets/ambient_watercolor_2.png" alt="2" className="image" />
                    </div>
                    <p className="smaller-font">While I was experimenting with Three.js in Creative Coding, I was also
                        participating in group exercises in Interface Lab. For one of the exercises, we were tasked with
                        analyzing an existing technological interface. My group chose something simple–the mouse and keyboard.
                        The mouse and keyboard has been so heavily integrating into our society that we have overlooked all the
                        issues that come with it. Mainly, how it can cause pain for a lot of people after long term use. This,
                        along with playing with the OrbitControls camera in Three.js, I began to toy with the idea of being able
                        to manipulate objects on the screen with just your hand gestures.</p>
                    <p className="smaller-font">To do so, I knew that the webcam would be the easiest and most assessable way to
                        recognize and track hand gestures. Carrie had suggested I looked into ML5, a machine learning javascript
                        library, to recognize hand gestures through my webcam. I eventually went down a rabbit hole, trying to
                        train my own model to recognize the specific gestures I wanted since prebuilt models, like PoseNet, did
                        not do exactly what I wanted. In the interest of time, I abandoned my attempt to train my own model and
                        instead modified the design of my intended user interaction to fit with PoseNet/HandPose.</p>
                    <p className="smaller-font">After being able to import the HandPose library, I modified my original
                        “Opposites” assignment to be a globe. The idea was to be able to rotate the globe horizontally and
                        vertically by moving your hand to the right or left, and to control zoom with two hands (opened to zoom
                        out, closed to zoom in).</p>
                    <img src="assets/ambient-watercolor-3.gif" alt="3" className="image" />
                    <p>
                        While the rotation effect was cool, the purpose of the project felt aimless, and I felt stumped with what to do with it. Putting this idea on hold, I began researching about other topics that I was interested in, which included generative art. I had seen a tutorial about simulating watercolor digitally and using the concept of recursion to form the realistic randomness of analog art. I prototyped the idea in P5 and began to think of ways of bringing the ideas from the tutorial into animation. With animation, I thought of ways that would allow users to interact with generative watercolor art.
                    </p>
                    <img src="assets/ambient-watercolor-4.gif" alt="4" className="image" />
                    <p>We began learning about serial input and output in Interface Lab, and I like the idea of having a physical controller to interact with the watercolor sketch. The original idea for the interaction was to use potentiometers to control the paintbrush. However, after feedback from David, the use of potentiometers can be a cumbersome user experience, and I began to brainstorm different way of interaction.
                    </p>
                    <p>
                        With my learnings from both ml5 and generative art, I ultimately decided to build my final project as a combination of the two. The goal was to give users a calming and tranquil experience playing with digital watercolor. I wanted to allow users to paint with the watercolor brush using hand gestures, but be able to control the brush color with a physical control panel. I wanted to have three potentiometers to represent the red, green, and blue values of the brush’s color.
                    </p>
                    <div className="flex-wrapper">
                        <img src="assets/ambient-watercolor-5.jpeg" alt="5" className="image" />
                        <img src="assets/ambient-watercolor-6.jpeg" alt="6" className="image" />
                    </div>
                    <p>I began building the control panel by laser cutting the design on cardboard. I wanted to see if the board would stand up at an angle, so that the slanted surface will feel comfortable for the user. After seeing how it would stand with cardboard, I cut a piece of acrylic, and began wiring the breadboard to hook up the potentiometers. While I was adding the potentiometers, my classmate, Ai, suggested that I added LEDs to bring more visuals to the panel. Excited about the idea, I cut another piece of acrylic with holes for the LEDs.</p>
                    <img src="assets/ambient-watercolor-7.jpeg" alt="7" className="image" />
                    <p>This is the final result of the control panel (without the LEDs wired up). Ultimately I was satisfied with the simple, color coordinated user interface. Wiring the LEDs was the tricky part, because soldering wires to connect the LEDs that were superglued underneath the panel was difficult.</p>
                    <img src="assets/ambient-watercolor-8.jpeg" alt="8" className="image" />
                    <p>As a final piece to this project, I added sound to put the user in the desired calm and tranquil headspace. I recorded some ambient sound notes on Garageband and added the sound every time a new brush stroke started on the screen. </p>
                    <p>Here are some examples of user testing the project:</p>
                    <div className="flex-wrapper">
                        <img src="assets/ambient-watercolor-9.gif" alt="9" className="image" />
                        <img src="assets/ambient-watercolor-10.gif" alt="10" className="image" />
                        <img src="assets/ambient-watercolor-11.gif" alt="11" className="image"/>
                        <img src="assets/ambient-watercolor-12.gif" alt="12" className="image"/>
                    </div>
                </div>,
            }
        ]
    },
    'golden-hour-clock': {
        name: 'Golden Hour Clock (2023)',
        imageUrl: 'golden_hour.jpeg'
    },
    '50-days-of-blender': {
        name: '50 Days of Blender (2023)',
        imageUrl: 'day36.png',

    },
    'digital-yearbook': {
        name: 'Digital Yearbook (2022)',
        imageUrl: 'digital_yearbook.png'
    },
    'verdant': {
        name: 'Verdant (2023)',
        imageUrl: 'verdant_cover.png'
    }
};

export const professionalProjects = {
    'kodak-moments': {
        name: 'Kodak Moments',
    },
    'grappling-inhouse': {
        name: 'Grappling Inhouse',
    },
    'square': {
        name: 'Square',
    }
}