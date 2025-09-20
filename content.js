const gameData = {
    // Data extracted from the provided PDF
    topics: [
        { id: 1, text: 'You are Asha/Arjun of Class XII. Write on "Media Literacy: A Survival Skill in the Digital Age" for the newspaper.', type: 'Article', byline: 'By Asha/Arjun, Class XII' },
        { id: 2, text: 'You are the Cultural Secretary of your school. Recently, your school organized a Tree Plantation Drive in collaboration with the local NGO. Report the same for the school newsletter.', type: 'Report', byline: 'By [Your Name], Cultural Secretary' },
        { id: 3, text: 'You are to deliver a speech in the morning assembly on the topic "Importance of Sports and Games in Student Life". Write the same.', type: 'Speech', byline: '' },
        { id: 4, text: '"Online Education is Better than Traditional Schooling". Give your views in favour or against the motion.', type: 'Debate', byline: '' },
        { id: 5, text: 'Write something in 120 words approximately on "Impact of Fast Food on Teenagers\' Health" to be published in your school magazine.', type: 'Article', byline: 'By [Your Name]' }
    ],
    formats: {
        Article: {
            correct: 2, // Corrected index from 3 to 2 as per visual format
            options: [
                { title: "TITLE", content: "SUBJECT<br>CONTENT<br>BYLINE" },
                { title: "TITLE", content: "BYLINE<br>SUBJECT<br>CONTENT" },
                { title: "TITLE", content: "BYLINE<br>CONTENT" }, // Correct format for article
                { title: "TITLE", content: "CONTENT (1 PARAGRAPH)<br>BY LINE" }
            ]
        },
        Report: {
            correct: 0,
            options: [
                { title: "TITLE", content: "BYLINE<br>CONTENT (WHAT, WHEN, WHERE, WHY, HOW, WHO)" }, // Correct
                { title: "TITLE", content: "CONTENT (WHAT, WHEN, WHERE, WHY, HOW, WHO)<br>BYLINE" },
                { title: "TITLE", content: "SUBJECT<br>CONTENT(WHAT, WHEN, WHERE, WHY, HOW, WHO)<br>BYLINE" },
                { title: "TITLE", content: "BYLINE<br>SUBJECT<br>CONTENT (WHAT, WHEN, WHERE, WHY, HOW, WHO)" }
            ]
        },
        Speech: {
            correct: 2,
            options: [
                { title: "TITLE", content: "CONTENT (1 PARAGRAPH)<br>BY LINE" },
                { title: "TITLE", content: "BYLINE<br>CONTENT (3 PARAGRAPHS)<br>THANK YOU" },
                { title: "INTRODUCTION", content: "CONTENT (MIN 3 PARAGRAPHS)<br>THANK YOU" }, // Correct
                { title: "INTRODUCTION", content: "BYLINE<br>CONTENT<br>THANK YOU" }
            ]
        },
        Debate: {
            correct: 1,
            options: [
                { title: "TITLE", content: "CONTENT (1 PARAGRAPH)<br>BY LINE<br>MENTION FOR/AGAINST" },
                { title: "INTRODUCTION (NAME, DETAILS, FOR OR AGAINST)", content: "CONTENT (3 PARAGRAPHS)<br>THANK YOU<br>DESIGNATION" }, // Correct
                { title: "INTRODUCTION", content: "CONTENT (MIN 3 PARAGRAPHS)<br>THANK YOU" },
                { title: "INTRODUCTION", content: "BYLINE<br>CONTENT<br>THANK YOU" }
            ]
        }
    },
    content: {
        1: { // Media Literacy
            words: {
                relevant: ["Information", "Misinformation", "Critical thinking", "Social media", "Fake news", "Awareness", "Technology", "Digital citizens", "Bias", "Responsibility"],
                irrelevant: ["Volcano", "Canteen", "Raincoat", "Birthday party", "Chalk", "Himalayas", "Football match", "Banana", "Soap", "Traffic jam"]
            },
            sentences: {
                relevant: [
                    "Media literacy empowers people to question the reliability of information before accepting it as truth.",
                    "It helps citizens become responsible consumers of news in a digital age filled with misinformation.",
                    "Media literacy develops critical thinking by teaching people to analyze messages, images, and hidden motives.",
                    "Understanding media ownership and sponsorship reveals possible bias in the content we consume.",
                    "Teaching students to identify credible sources promotes informed decision-making.",
                    "Media literacy reduces the risk of manipulation through advertisements, political propaganda, or fake news.",
                    "Practising cross-checking facts with multiple sources strengthens accuracy in understanding.",
                    "Developing media literacy encourages empathy by exposing learners to diverse perspectives.",
                    "It enables people to create responsible content themselves, not just consume it.",
                    "Schools, parents, and communities can develop media literacy through workshops, debates, and guided use of digital tools."
                ],
                irrelevant: [
                    "Reading books regularly improves vocabulary.",
                    "Memorizing dates of history may help in exams.",
                    "Knowing how to solve math problems improves logical thinking.",
                    "Watching entertainment shows can be relaxing.",
                    "Learning a foreign language builds communication skills."
                ]
            },
            paragraphs: {
                relevant: [
                    "Media literacy empowers individuals to question the reliability of information before accepting it as truth, making them responsible consumers of news in a digital age full of misinformation. By developing critical thinking, people learn to analyze messages, images, and hidden motives, while also understanding how media ownership and sponsorship can influence bias in the content they consume. This awareness helps reduce the risk of manipulation through advertisements, political propaganda, or fake news.",
                    "An essential aspect of media literacy is teaching students to identify credible sources, which promotes informed decision-making and accuracy in understanding. Practising the habit of cross-checking facts with multiple sources further strengthens this accuracy, allowing learners to distinguish between authentic and misleading information. In this way, media literacy equips citizens with tools to navigate today's fast-changing information environment with confidence and responsibility.",
                    "Beyond consuming information wisely, media literacy also enables people to create responsible content themselves. It fosters empathy by exposing learners to diverse perspectives, encouraging a more open-minded and respectful approach to communication. Schools, parents, and communities play a vital role in building media literacy through workshops, debates, and the guided use of digital tools, ensuring that future generations grow into thoughtful, ethical, and informed media users."
                ],
                irrelevant: [
                    "Reading books regularly plays an important role in improving vocabulary and overall language skills, while memorizing dates of history may provide short-term benefits for exams. Similarly, knowing how to solve math problems helps in sharpening logical thinking, which is a valuable skill beyond the classroom. These activities contribute to both academic performance and intellectual growth in different ways.",
                    "At the same time, engaging in other practices also has its benefits. Watching entertainment shows can serve as a source of relaxation, offering a break from routine tasks, while learning a foreign language builds communication skills and opens doors to new cultural experiences. Together, these varied activities show how both academic learning and leisure pursuits contribute to the development of a well-rounded individual.",
                    "The rise of streaming services has fundamentally changed how we consume entertainment. With vast libraries of movies, documentaries, and series available on demand, viewers have unprecedented control over what and when they watch. This shift has led to the decline of traditional television viewership and has created new opportunities for independent filmmakers and content creators."
                ]
            }
        },
        2: { // Tree Plantation
            words: {
                relevant: ["Plantation", "NGO collaboration", "Saplings", "Awareness session", "Environment", "Responsibility", "Pledge", "Students participation", "Ecological balance", "Success"],
                irrelevant: ["Exhibition", "Donation drive", "Flower show", "Recycling competition", "Annual day", "Cultural fest", "Debate on pollution", "Poster-making contest", "Heritage walk", "Sports meet"]
            },
            sentences: {
                 relevant: [
                    "The drive was inaugurated by our Principal along with the President of the NGO.",
                    "Teachers, students, and members of the local community participated with great enthusiasm.",
                    "The Chief Guest, the Municipal Commissioner, highlighted the importance of trees in combating climate change.",
                    "More than 200 saplings of neem, banyan, and mango were planted around the school campus and nearby park.",
                    "Students took an oath to water and care for the saplings regularly.",
                    "The NGO volunteers guided us on how to nurture young plants.",
                    "Planting trees is vital as they provide oxygen, improve air quality, and reduce pollution.",
                    "They also offer shade, prevent soil erosion, and support biodiversity.",
                    "The event spread awareness about the urgent need for afforestation in urban spaces.",
                    "The drive concluded successfully with the hope of turning our surroundings greener and healthier."
                ],
                irrelevant: [
                   "Some students were more excited about taking group photos than planting trees.",
                   "A few volunteers suggested organizing a cultural program after the drive, but it was postponed.",
                   "Snacks and refreshments were served, which became the highlight for many participants.",
                   "Several students expressed that they preferred painting competitions to outdoor activities.",
                   "The Principal reminded everyone about the upcoming Annual Sports Day during her closing remarks."
                ]
            },
            paragraphs: {
                 relevant: [
                    "The tree plantation drive was inaugurated by our Principal along with the President of the NGO, marking the beginning of a meaningful initiative. Teachers, students, and members of the local community participated with great enthusiasm, while the Chief Guest, the Municipal Commissioner, emphasized the importance of trees in combating climate change. More than 200 saplings of neem, banyan, and mango were planted around the school campus and nearby park, creating a strong sense of responsibility among all present.",
                    "Students took an oath to water and care for the saplings regularly, ensuring that the effort would continue beyond just the event. The NGO volunteers also guided everyone on how to nurture young plants effectively so that they could grow into healthy trees. This hands-on learning helped participants understand the practical steps required in protecting and preserving the environment.",
                    "The event further highlighted the vital role of trees in our lives. Trees provide oxygen, improve air quality, reduce pollution, and support biodiversity. They also prevent soil erosion and offer shade, making them indispensable for a sustainable future. The drive spread awareness about the urgent need for afforestation in urban spaces and concluded successfully with the shared hope of making our surroundings greener and healthier."
                ],
                irrelevant: [
                    "Some students seemed more interested in taking group photos than actively engaging in the plantation activity, making the drive a blend of fun and responsibility. A few volunteers also proposed organizing a cultural program to add vibrancy to the event, but the idea was postponed for another occasion. These lighter moments brought variety to the day and added a casual, enjoyable touch to the otherwise serious initiative.",
                    "Snacks and refreshments turned out to be the highlight for many participants, offering them a chance to relax and socialize after their efforts. Interestingly, several students admitted they enjoyed indoor events like painting competitions more than outdoor activities. The Principal, while delivering her closing remarks, reminded everyone about the upcoming Annual Sports Day, thus shifting focus from environmental responsibility to other school events.",
                    "The school library recently acquired a new collection of fiction and non-fiction books. Students are encouraged to visit the library during their free periods to explore these new titles. A reading competition will be held next month to promote reading habits among students."
                ]
            }
        },
        3: { // Sports and Games
            words: {
                relevant: ["Fitness", "Discipline", "Teamwork", "Perseverance", "Stress relief", "Confidence", "Balance", "Healthy mind", "Participation", "Success"],
                irrelevant: ["Annual exam", "Cultural fest", "Debate competition", "Musical performance", "Science exhibition", "Quiz contest", "Morning assembly prayer", "Library reading", "Art workshop", "Computer lab session"]
            },
            sentences: {
                relevant: [
                    "Sports and games play a vital role in shaping the overall personality of students.",
                    "They help in maintaining physical fitness and keeping our minds fresh.",
                    "Participation in games builds discipline, teamwork, and leadership qualities.",
                    "Sports teach us how to accept victory with humility and defeat with grace.",
                    "Regular involvement in physical activities reduces stress and improves concentration.",
                    "Schools should encourage students by organizing inter-house and inter-school competitions.",
                    "Students can also join sports clubs and practice regularly to enhance their skills.",
                    "Outdoor games like football, cricket, and hockey develop stamina and strength.",
                    "Indoor games such as chess and table tennis improve mental sharpness and decision-making.",
                    "Sports are not just hobbies but essential life lessons that prepare us for future challenges."
                ],
                irrelevant: [
                    "The annual school fete is scheduled for next month.",
                    "Students must submit their science projects by the end of the week.",
                    "The school choir is preparing for the national-level competition.",
                    "Proper uniform is mandatory for all students.",
                    "The examination schedule will be displayed on the notice board."
                ]
            },
            paragraphs: {
                relevant: [
                     "Good morning respected Principal, teachers, and my dear friends. Today, I stand before you to speak on the importance of sports and games in a student's life. We often get so engrossed in our academic pursuits that we forget the crucial role physical activities play in our overall development. Sports are not merely a means of recreation; they are an integral part of a balanced education.",
                     "Engaging in sports and games helps us build a healthy and strong body. It improves our physical fitness, stamina, and coordination. But the benefits are not just physical. Sports teach us invaluable life lessons like discipline, teamwork, perseverance, and leadership. On the field, we learn to work together towards a common goal, to respect our opponents, and to handle both victory and defeat with grace.",
                     "Furthermore, physical activity is a great stress buster. A game of football or a run in the park can refresh our minds and improve our concentration in the classroom. It helps in developing a healthy mind in a healthy body. Therefore, I urge all of you to take up at least one sport and make it a regular part of your lives. Let's not just be bookworms, but well-rounded individuals ready to face the challenges of the world. Thank you."
                ],
                irrelevant: [
                    "Our school has a rich history of academic excellence. For decades, our students have topped the board exams and have gone on to join prestigious universities around the world. This is a testament to the hard work of our dedicated teachers and the rigorous academic curriculum we follow.",
                    "The annual cultural festival is one of the most awaited events in our school. It is a platform for students to showcase their talents in music, dance, drama, and fine arts. The preparations for the festival begin months in advance, and the entire school comes together to make it a grand success.",
                    "The school library is a treasure trove of knowledge. It has a vast collection of books, journals, and magazines on various subjects. Students are encouraged to make the best use of this facility to broaden their horizons and develop a lifelong love for reading. A quiet and serene environment makes it an ideal place for study and research."
                ]
            }
        },
        4: { // Online Education
            words: {
                relevant: ["Flexibility", "Accessibility", "Independent learning", "Social interaction", "Digital literacy", "Communication skills", "Discipline", "Health concerns", "Time-saving", "Holistic development"],
                irrelevant: ["School picnic", "Annual sports day", "Cultural fest", "Library week", "Hostel life", "School canteen", "Uniform rules", "Parent-teacher meeting", "School bus facility", "Farewell party"]
            },
            for: {
                sentences: {
                    relevant: [
                        "Flexibility: Students can learn at their own pace, anytime and anywhere.",
                        "Accessibility: Learners from remote areas can access quality education without relocating.",
                        "Cost-effective: Saves travel expenses, uniform costs, and often tuition fees are lower.",
                        "Technological skills: Students naturally develop digital literacy and adaptability.",
                        "Variety of resources: Videos, simulations, and e-libraries provide diverse learning materials.",
                        "Personalised learning: Adaptive platforms allow customised progress tracking and individual attention.",
                        "Global exposure: Students can attend lectures, webinars, and courses from international institutions.",
                        "Online education promotes self-discipline and time management skills.",
                        "It provides a comfortable learning environment from home.",
                        "Digital tools allow for innovative and interactive teaching methods."
                    ],
                    irrelevant: [
                       "Online gaming is a popular pastime for many students.",
                       "Social media helps people stay connected with friends and family.",
                       "E-commerce has made shopping more convenient.",
                       "Video conferencing tools are essential for remote work.",
                       "Students often complain about the amount of homework."
                    ]
                },
                paragraphs: {
                     relevant: [
                        "Online learning offers great flexibility as students can study at their own pace, anytime and anywhere, making education more convenient and adaptable to individual schedules. It is also highly accessible, allowing learners from remote areas to access quality education without the need to relocate. Moreover, it is cost-effective as it saves on travel expenses, uniforms, and often provides lower tuition fees compared to traditional schooling.",
                        "Another major advantage is the development of technological skills. By engaging with digital platforms, students naturally build digital literacy and adaptability, which are essential for the modern world. Online learning also provides a wide variety of resources such as videos, simulations, and e-libraries, ensuring that learners have access to diverse study materials that enhance understanding and retention.",
                        "Additionally, personalised learning becomes possible through adaptive platforms that allow customised progress tracking and individual attention. Students also gain global exposure by attending lectures, webinars, and courses from international institutions, widening their perspectives and preparing them to compete in a globalised world. Together, these benefits make online learning a powerful tool for modern education."
                    ],
                    irrelevant: [
                       "Traditional classrooms offer a structured learning environment that many students thrive in. The daily routine of going to school, attending classes, and interacting with teachers and peers provides a sense of discipline and normalcy that is often lacking in online education.",
                       "Extracurricular activities like sports, music, and drama are an integral part of school life. They play a crucial role in the holistic development of students, fostering teamwork, creativity, and leadership skills. These experiences are difficult to replicate in an online setting.",
                       "The personal bond between a teacher and a student is crucial for effective learning. In a physical classroom, teachers can gauge the mood of the students, understand their non-verbal cues, and provide immediate support and encouragement. This human connection is often lost in the virtual world."
                    ]
                }
            },
            against: {
                sentences: {
                    relevant: [
                        "Lack of social interaction: Online classes reduce peer bonding, teamwork, and real friendships.",
                        "Discipline issues: Home learning often lacks structure and routine, leading to distractions.",
                        "Teacher-student connection: Face-to-face guidance and emotional support are limited online.",
                        "Practical learning: Labs, sports, arts, and hands-on activities are difficult to replicate virtually.",
                        "Digital divide: Many students lack access to reliable devices and internet connectivity.",
                        "Health concerns: Prolonged screen time causes eye strain, fatigue, and posture issues.",
                        "Limited assessment reliability: Online exams often face challenges of cheating and fairness.",
                        "It can be difficult for students to stay motivated without direct supervision.",
                        "Technical glitches and connectivity issues can disrupt learning.",
                        "The lack of a clear separation between school and home can be stressful."
                    ],
                    irrelevant: [
                        "Traditional schools have long summer vacations.",
                        "School uniforms can be expensive for some families.",
                        "Heavy school bags are a common complaint among students.",
                        "Classroom sizes can sometimes be too large for effective teaching.",
                        "The pressure of examinations can cause anxiety in students."
                    ]
                },
                paragraphs: {
                    relevant: [
                        "One of the major drawbacks of online learning is the lack of social interaction, which reduces opportunities for peer bonding, teamwork, and building real friendships. Students also miss the strong teacher-student connection that comes with face-to-face guidance, where motivation, and emotional support are more effective. Without these interactions, learning can often feel isolating and less engaging.",
                        "Discipline is another issue, as home-based learning often lacks the structure and routine of a physical classroom, leading to distractions and reduced focus. Practical learning, such as science labs, sports, arts, and other hands-on activities, is also difficult to replicate virtually, which limits holistic development. This gap highlights the limitations of relying solely on digital platforms for education.",
                        "Furthermore, the digital divide poses a serious challenge, as many students do not have access to reliable devices or strong internet connectivity. Health concerns also arise from prolonged screen time, leading to eye strain, fatigue, and posture-related problems. Even assessments become less reliable, as online exams face challenges of cheating and fairness. These limitations show that while online learning has advantages, it cannot fully replace traditional classroom education."
                    ],
                    irrelevant: [
                        "The flexibility of online learning allows students to pursue other interests and hobbies alongside their studies. They can create a personalized schedule that fits their learning style and pace, leading to better understanding and retention of concepts. This autonomy can foster a sense of responsibility and independence in learners.",
                        "Online platforms provide access to a vast array of educational resources from around the world. Students can learn from experts in any field, watch interactive videos, and participate in virtual labs and simulations. This global exposure can enrich their learning experience and broaden their perspectives.",
                        "For students with special needs or health issues, online learning can be a boon. It provides a safe and comfortable environment where they can learn without the physical and social challenges of a traditional school. Adaptive technologies can also cater to their specific learning requirements."
                    ]
                }
            }
        },
        5: { // Fast Food
             words: {
                relevant: ["Obesity", "Junk food", "Lifestyle diseases", "Nutrition", "Concentration", "Immunity", "Convenience", "Balanced diet", "Energy levels", "Teenagers"],
                irrelevant: ["School picnic", "Birthday celebration", "Street fashion", "Cultural fest", "Sports meet", "Library books", "Social media trends", "Examination stress", "School canteen gossip", "Farewell party"]
            },
            sentences: {
                relevant: [
                    "Fast food is highly popular among teenagers due to its taste and easy availability.",
                    "It often replaces homemade balanced meals in daily life.",
                    "Regular intake leads to obesity and weight-related problems.",
                    "Such foods are rich in fats, sugar, and salt but poor in nutrition.",
                    "They can cause vitamin and protein deficiencies in growing bodies.",
                    "Frequent consumption increases the risk of diabetes at a young age.",
                    "Excess junk food may also lead to heart problems later in life.",
                    "It weakens concentration levels and reduces immunity.",
                    "Parents and schools must spread awareness about healthy eating.",
                    "Physical exercise and moderation can reduce the harmful effects."
                ],
                irrelevant: [
                    "Teenagers often visit fast food outlets more for socializing than for eating.",
                    "Many like fast food mainly because of attractive packaging.",
                    "Some teens post pictures of their meals on social media rather than finishing them.",
                    "Fast food chains attract youth with discounts and festive offers.",
                    "Occasional free toys in combo meals make them more appealing to younger students."
                ]
            },
            paragraphs: {
                relevant: [
                    "Fast food has become highly popular among teenagers because of its taste, affordability, and easy availability. Unfortunately, it often replaces homemade balanced meals in daily life, leading to unhealthy eating habits. Since such foods are rich in fats, sugar, and salt but poor in essential nutrients, regular intake can harm the overall growth and development of young bodies.",
                    "The health consequences of frequent junk food consumption are serious. It can lead to obesity and weight-related problems, along with vitamin and protein deficiencies. Teenagers who consume fast food regularly are at greater risk of developing diabetes at a young age, and excess intake may also cause heart problems later in life. Moreover, it weakens concentration levels, reduces immunity, and affects both physical and mental well-being.",
                    "To address this issue, parents and schools must spread awareness about healthy eating and encourage students to choose nutritious food options. Along with awareness, regular physical exercise and moderation in food habits can help reduce the harmful effects of fast food. By balancing diet and lifestyle, teenagers can enjoy occasional treats while still maintaining good health."
                ],
                irrelevant: [
                    "Teenagers often visit fast food outlets more for socializing and spending time with friends than for the food itself. Many are attracted by the colorful packaging and presentation, which makes the meals visually appealing and trendy. In today's digital age, some even post pictures of their meals on social media rather than focusing on finishing them, turning eating into a social or online activity.",
                    "Fast food chains also target youth with various marketing strategies, including discounts, festive offers, and occasional free toys in combo meals, making these outlets especially appealing to younger students. Such tactics encourage frequent visits and create a sense of excitement around fast food, influencing teenagers' eating habits beyond just taste or nutrition.",
                    "The school cafeteria offers a variety of healthy and delicious meal options for students. The menu is planned by a nutritionist to ensure that it meets the dietary needs of growing children. From fresh salads and fruits to whole-grain sandwiches and traditional Indian meals, there is something for everyone."
                ]
            }
        }
    }
};
