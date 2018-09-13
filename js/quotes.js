const QUOTES = [{
    "quote": "There is a real patriotism underneath the best of my music but it is a critical, questioning and often angry patriotism.",
    "author": "Bruce Springsteen",
    "cat": "patriotism"
}, {
    "quote": "Patriotism, when it wants to make itself felt in the domain of learning, is a dirty fellow who should be thrown out of doors.",
    "author": "Arthur Schopenhauer",
    "cat": "learning"
}, {
    "quote": "I believe in trying to get a balance between individual freedom on the one hand and social responsibility on the other.",
    "author": "Chris Patten",
    "cat": "freedom"
}, {
    "quote": "Sex is God's joke on human beings.",
    "author": "Bette Davis",
    "cat": "god"
}, {
    "quote": "The New Dealers have all left Washington to make way for the car dealers.",
    "author": "Adlai Stevenson",
    "cat": "car"
}, {
    "quote": "A sense of freedom is something that, happily, comes with age and life experience.",
    "author": "Diane Keaton",
    "cat": "age"
}, {
    "quote": "I regret not having had more time with my kids when they were growing up.",
    "author": "Tina Turner",
    "cat": "parenting"
}, {
    "quote": "There's no sense in going to a tournament if you don't believe that you can win it. And that is the belief I have always had. And that is not going to change.",
    "author": "Tiger Woods",
    "cat": "change"
}, {
    "quote": "I have six locks on my door all in a row. When I go out, I lock every other one. I figure no matter how long somebody stands there picking the locks, they are always locking three.",
    "author": "Elayne Boosler",
    "cat": "funny"
}, {
    "quote": "Ignorance is never better than knowledge.",
    "author": "Enrico Fermi",
    "cat": "knowledge"
}, {
    "quote": "The things that people do now in sports, you can't even believe. These are complete total athletes. To see what human beings can do in the highest level is amazing.",
    "author": "Billie Joe Armstrong",
    "cat": "amazing"
}, {
    "quote": "Let a man get up and say, Behold, this is the truth, and instantly I perceive a sandy cat filching a piece of fish in the background. Look, you have forgotten the cat, I say.",
    "author": "Virginia Woolf",
    "cat": "truth"
}, {
    "quote": "We live in a stage of politics, where legislators seem to regard the passage of laws as much more important than the results of their enforcement.",
    "author": "William Howard Taft",
    "cat": "politics"
}, {
    "quote": "When we lose one we love, our bitterest tears are called forth by the memory of hours when we loved not enough.",
    "author": "Maurice Maeterlinck",
    "cat": "love"
}, {
    "quote": "I'm an atheist and I thank God for it.",
    "author": "George Bernard Shaw",
    "cat": "god"
}, {
    "quote": "When one may pay out over two million dollars to presidential and Congressional campaigns, the U.S. government is virtually up for sale.",
    "author": "John W. Gardner",
    "cat": "government"
}, {
    "quote": "I have come to understand and appreciate writers much more recently since I started working on a book last fall. Before that, I thought golf writers got up every morning, played a round of golf, had lunch, showed up for our last three holes and then went to dinner.",
    "author": "Phil Mickelson",
    "cat": "morning"
}, {
    "quote": "Information can bring you choices and choices bring power - educate yourself about your options and choices. Never remain in the dark of ignorance.",
    "author": "Joy Page",
    "cat": "power"
}, {
    "quote": "Hackers are breaking the systems for profit. Before, it was about intellectual curiosity and pursuit of knowledge and thrill, and now hacking is big business.",
    "author": "Kevin Mitnick",
    "cat": "business"
}, {
    "quote": "Find beauty not only in the thing itself but in the pattern of the shadows, the light and dark which that thing provides.",
    "author": "Junichiro Tanizaki",
    "cat": "beauty"
}, {
    "quote": "I hope we never get to the point that we put ourselves in Jesus' place. But when I read the New Testament basically, we get three mandates: to love God, to love each other, and to take care of the least among us. And I think this is at least a step in the right direction.",
    "author": "Bob Riley",
    "cat": "hope"
}, {
    "quote": "When success comes, people can try to trick you or take advantage of you.",
    "author": "Christina Aguilera",
    "cat": "success"
}, {
    "quote": "Art and science have their meeting point in method.",
    "author": "Edward G. Bulwer-Lytton",
    "cat": "art"
}, {
    "quote": "I have long enjoyed the friendship and companionship of Republicans because I am by instinct a teacher, and I would like to teach them something.",
    "author": "Woodrow Wilson",
    "cat": "friendship"
}, {
    "quote": "I think the great sketch shows, like 'Python' and 'Mr. Show,' they didn't stick around for very long. There's something kind of cool about that.",
    "author": "Tim Heidecker",
    "cat": "cool"
}, {
    "quote": "Christmas is over and Business is Business.",
    "author": "Franklin P. Adams",
    "cat": "business"
}, {
    "quote": "Genuine forgiveness does not deny anger but faces it head-on.",
    "author": "Alice Duer Miller",
    "cat": "anger"
}, {
    "quote": "Peace is that state in which fear of any kind is unknown.",
    "author": "John Buchan",
    "cat": "peace"
}, {
    "quote": "I've learned from experience that if you work harder at it, and apply more energy and time to it, and more consistency, you get a better result. It comes from the work.",
    "author": "Louis C. K.",
    "cat": "experience"
}, {
    "quote": "Intelligent life on a planet comes of age when it first works out the reason for its own existence.",
    "author": "Richard Dawkins",
    "cat": "age"
}, {
    "quote": "I came here in 1974 to do a play, and then I went to L.A. I really like living in America. I feel more at home here than anywhere else.",
    "author": "Anthony Hopkins",
    "cat": "home"
}, {
    "quote": "In Spain, we should have enough intelligence, enough sense of individual and collective responsibility to do for ourselves that which would be imposed upon us by a dictatorship.",
    "author": "Frederica Montseny",
    "cat": "intelligence"
}, {
    "quote": "The single currency should allow the European Union, and therefore France, to balance its monetary strength with the United States. It should help us adjust to the development of China.",
    "author": "Laurent Fabius",
    "cat": "strength"
}, {
    "quote": "School is practice for the future, and practice makes perfect. But nobody's perfect, so why practice?",
    "author": "Billie Joe Armstrong",
    "cat": "future"
}, {
    "quote": "My goal is not selling laptops. OLPC is not in the laptop business. It's in the education business.",
    "author": "Nicholas Negroponte",
    "cat": "education"
}, {
    "quote": "Accordingly, it is our task to ensure that the Government formulates policies that foster the continued development of the IT sector while also providing for citizens' access to technology and opportunity for economic advancement.",
    "author": "Tim Holden",
    "cat": "technology"
}, {
    "quote": "I listen to music that is of our time and I just get angry.",
    "author": "Amy Winehouse",
    "cat": "music"
}, {
    "quote": "What do I care about Jupiter? Justice is a human issue, and I do not need a god to teach it to me.",
    "author": "Jean-Paul Sartre",
    "cat": "god"
}, {
    "quote": "A huge part of acting in movies is appetite. You do your best work when you've got a lot of appetite and you really want to embrace something. When you get tired, you don't have that hunger.",
    "author": "Clive Owen",
    "cat": "best"
}, {
    "quote": "I want to keep my dreams, even bad ones, because without them, I might have nothing all night long.",
    "author": "Joseph Heller",
    "cat": "dreams"
}, {
    "quote": "The richest love is that which submits to the arbitration of time.",
    "author": "Lawrence Durrell",
    "cat": "love"
}, {
    "quote": "Hypocrites in the Church? Yes, and in the lodge and at the home. Don't hunt through the Church for a hypocrite. Go home and look in the mirror. Hypocrites? Yes. See that you make the number one less.",
    "author": "Billy Sunday",
    "cat": "home"
}, {
    "quote": "The newspapers loved pinup pictures of pretty young swimmers, and as a national champion, I got more than my share of space in the sports pages.",
    "author": "Esther Williams",
    "cat": "sports"
}, {
    "quote": "My dad was the biggest influence on my life because he was never boring.",
    "author": "Christian Bale",
    "cat": "dad"
}, {
    "quote": "When you try to find funding for a VVA function, it doesn't seem like it's any trouble at all. People come out of the woodwork with their money to help out because we went over and fought a war.",
    "author": "R. Lee Ermey",
    "cat": "money"
}, {
    "quote": "Gabriel Byrne is an extraordinary human being. We have two extraordinary kids and we work at it. We were always friends. He stuck by me through very hard times, and I hope he'd say the same about me.",
    "author": "Ellen Barkin",
    "cat": "hope"
}, {
    "quote": "Poetry seems to sink into us the way prose doesn't. I can still quote verses I learned when I was very young, but I have trouble remembering one line of a novel I just finished reading.",
    "author": "Jack Prelutsky",
    "cat": "poetry"
}, {
    "quote": "The only honest art form is laughter, comedy. You can't fake it... try to fake three laughs in an hour - ha ha ha ha ha - they'll take you away, man. You can't.",
    "author": "Lenny Bruce",
    "cat": "art"
}, {
    "quote": "I have a very strong family.",
    "author": "Janet Jackson",
    "cat": "family"
}, {
    "quote": "Any time you think you have the game conquered, the game will turn around and punch you right in the nose.",
    "author": "Mike Schmidt",
    "cat": "time"
}, {
    "quote": "Love is a force more formidable than any other. It is invisible - it cannot be seen or measured, yet it is powerful enough to transform you in a moment, and offer you more joy than any material possession could.",
    "author": "Barbara de Angelis",
    "cat": "love"
}, {
    "quote": "A lot of people are like, 'So you want to be famous.' And I'm like, 'No, I want to be good at my craft. I don't care about fame, I don't care if I even ever make it. As long as people know what I am as an actress in this business, I'm set for my career right now.'",
    "author": "Chloe Moretz",
    "cat": "famous"
}, {
    "quote": "So, poetry becomes a means for useful dialogue between people who are not only unknown, but mute to each other. It produces a dialogue among people that guards all of us against manipulation by our so-called leaders.",
    "author": "June Jordan",
    "cat": "poetry"
}, {
    "quote": "China has been committed to the independent foreign policy of peace and has developed friendship and cooperation with all countries on the basis of the Five Principles of Peaceful Coexistence.",
    "author": "Hu Jintao",
    "cat": "friendship"
}, {
    "quote": "I have only one rule in acting - trust the director and give him heart and soul.",
    "author": "Ava Gardner",
    "cat": "trust"
}, {
    "quote": "But there is a discomfort that surrounds grief. It makes even the most well-intentioned people unsure of what to say. And so many of the freshly bereaved end up feeling even more alone.",
    "author": "Meghan O'Rourke",
    "cat": "alone"
}, {
    "quote": "Although my dad was a doctor, we weren't necessarily a super-artsy family. We were just a classic, traditional family who got to take a lot of piano lessons and became a bunch of musicians.",
    "author": "Lisa Loeb",
    "cat": "dad"
}, {
    "quote": "The failure to read good books both enfeebles the vision and strengthens our most fatal tendency - the belief that the here and now is all there is.",
    "author": "Allan Bloom",
    "cat": "failure"
}, {
    "quote": "And my marriage was perfect when I wasn't famous.",
    "author": "Damon Wayans",
    "cat": "famous"
}, {
    "quote": "Many attempts have been made by writers on art and poetry to define beauty in the abstract, to express it in the most general terms, to find some universal formula for it.",
    "author": "Walter Pater",
    "cat": "beauty"
}, {
    "quote": "I think a lot comes from having the experience of doing stand-up comedy. It allows you to figure out the psychology of an audience what things are funny and not.",
    "author": "Keenen Ivory Wayans",
    "cat": "experience"
}, {
    "quote": "Your body tells you what it needs, and if you sleep past your alarm on a Saturday morning, it's probably because you need the sleep.",
    "author": "Sophia Bush",
    "cat": "morning"
}, {
    "quote": "Well, we all start thinking we're going to be Romantic rock stars, but then reality hits and you realize no one reads you but other poets.",
    "author": "George Murray",
    "cat": "romantic"
}, {
    "quote": "After a lifetime of working, raising families, and contributing to the success of this nation in countless other ways, senior citizens deserve to retire with dignity.",
    "author": "Charlie Gonzalez",
    "cat": "success"
}, {
    "quote": "When you are older you will understand how precious little things, seemingly of no value in themselves, can be loved and prized above all price when they convey the love and thoughtfulness of a good heart.",
    "author": "Edwin Booth",
    "cat": "good"
}, {
    "quote": "A little learning is a dangerous thing, but we must take that risk because a little is as much as our biggest heads can hold.",
    "author": "George Bernard Shaw",
    "cat": "learning"
}, {
    "quote": "My dad knows how to tell a story. He'd make me laugh by doing all the different voices.",
    "author": "Lily Collins",
    "cat": "dad"
}, {
    "quote": "But reducing harmful emissions, abating our dependence on foreign oil and developing alternative renewable energy sources have benefits that go beyond environmental health, they improve personal health, enhance national security and encourage our nation's economic viability.",
    "author": "Jim Clyburn",
    "cat": "environmental"
}, {
    "quote": "The most valuable possession you can own is an open heart. The most powerful weapon you can be is an instrument of peace.",
    "author": "Carlos Santana",
    "cat": "peace"
}, {
    "quote": "Remember, always give your best. Never get discouraged. Never be petty. Always remember, others may hate you. But those who hate you don't win unless you hate them. And then you destroy yourself.",
    "author": "Richard M. Nixon",
    "cat": "best"
}, {
    "quote": "My sister has three kids so I've spent a lot of time around children and I've always really liked them and wanted my own. It's cool because you think all babies are the same but they aren't at all. They all have such different personalities. It's crazy.",
    "author": "Bode Miller",
    "cat": "cool"
}, {
    "quote": "I think of art as the highest level of creativity. To me, it is one of the greatest sources of enjoyment.",
    "author": "David Rockefeller",
    "cat": "art"
}, {
    "quote": "I shall proceed from the simple to the complex. But in war more than in any other subject we must begin by looking at the nature of the whole for here more than elsewhere the part and the whole must always be thought of together.",
    "author": "Karl Von Clausewitz",
    "cat": "war"
}, {
    "quote": "As with most phobias, the fear of flying does make some sense, but if ever there was a fear worth quashing then this is it. After all, life is short, and there's a great big world to explore out there.",
    "author": "Beth Ditto",
    "cat": "fear"
}, {
    "quote": "Resolve and thou art free.",
    "author": "Henry Wadsworth Longfellow",
    "cat": "art"
}, {
    "quote": "Training in taekwondo for eight years and then being able to do it in a film was pretty amazing.",
    "author": "Dev Patel",
    "cat": "amazing"
}, {
    "quote": "I save every Christmas card. I keep them all.",
    "author": "Alison Sweeney",
    "cat": "christmas"
}, {
    "quote": "I tell you, it was kind of two-fold. I fortunately had a lot of support. My coach was amazing - he told me to focus on being prepared and that is what I did. Every athlete is nervous - any athlete who tells you they're not nervous isn't telling you the truth. I was as prepared as I could be.",
    "author": "Carl Lewis",
    "cat": "amazing"
}, {
    "quote": "I think as an American society, when we're paying too many taxes or dealing with war, we don't want to see sad things at the movies.",
    "author": "Zoe Saldana",
    "cat": "movies"
}, {
    "quote": "I do have the freedom to choose what I want to do and I'll continue to do that.",
    "author": "Moira Kelly",
    "cat": "freedom"
}, {
    "quote": "Words do not change their meanings so drastically in the course of centuries as, in our minds, names do in the course of a year or two.",
    "author": "Marcel Proust",
    "cat": "change"
}, {
    "quote": "A lot of food shows need only to tempt. Some food shows only need to inspire, to empower. And there are a lot of shows that do that.",
    "author": "Alton Brown",
    "cat": "food"
}, {
    "quote": "I'll give up this sort of touring madness certainly, but music-everything is based on music. No, I'll never stop my music.",
    "author": "George Harrison",
    "cat": "music"
}, {
    "quote": "Everyone who achieves success in a great venture, solves each problem as they came to it. They helped themselves. And they were helped through powers known and unknown to them at the time they set out on their voyage. They keep going regardless of the obstacles they met.",
    "author": "W. Clement Stone",
    "cat": "great"
}, {
    "quote": "History warns us that it is the customary fate of new truths to begin as heresies and to end as superstitions.",
    "author": "Thomas Huxley",
    "cat": "history"
}, {
    "quote": "I think everyone should go to college and get a degree and then spend six months as a bartender and six months as a cabdriver. Then they would really be educated.",
    "author": "Al McGuire",
    "cat": "education"
}, {
    "quote": "I've actually spent a lot of time researching beauty products, how they are produced and how they are sold.",
    "author": "Lauren Conrad",
    "cat": "beauty"
}, {
    "quote": "My dad's half-Lebanese, my mom is full Lebanese. I'm three-quarters Lebanese. Irish-Lebanese.",
    "author": "Tom Shadyac",
    "cat": "dad"
}, {
    "quote": "We had incense and rock'n'roll posters, and we sold records and rolling papers. People could just, like, hang out. We had a cool vibe going.",
    "author": "Tommy Hilfiger",
    "cat": "cool"
}, {
    "quote": "Every actor dreams of getting a big break, a big opportunity.",
    "author": "Liam McIntyre",
    "cat": "dreams"
}, {
    "quote": "I'm trying to stay as calm as possible and focus one day at a time, but when reality sets in, I feel everything: anxiety, excitement, nerves, pressure and joy.",
    "author": "Shawn Johnson",
    "cat": "time"
}, {
    "quote": "I'm a lad of the '60s. I started a magazine to try and end the Vietnam war, but it was a number of years before I had the profile, the financial resources and the time to do more.",
    "author": "Richard Branson",
    "cat": "war"
}, {
    "quote": "The less money you owe, the less income you'll need and the less you'll have to save for tomorrow.",
    "author": "Suze Orman",
    "cat": "money"
}, {
    "quote": "I would like to see more airplay for all artists, no matter what age. I think there's a lot of money being spent toward the young guys, but a lot of the older guys are the ones who blazed the trail for those young guys.",
    "author": "Willie Nelson",
    "cat": "age"
}, {
    "quote": "Henceforth I ask not good fortune. I myself am good fortune.",
    "author": "Walt Whitman",
    "cat": "good"
}, {
    "quote": "I have no other view than to promote the public good, and am unambitious of honors not founded in the approbation of my Country.",
    "author": "George Washington",
    "cat": "good"
}, {
    "quote": "Part of what I enjoy about the theatre and acting is that sense of history.",
    "author": "Liev Schreiber",
    "cat": "history"
}, {
    "quote": "People usually think according to their inclinations, speak according to their learning and ingrained opinions, but generally act according to custom.",
    "author": "Francis Bacon",
    "cat": "learning"
}, {
    "quote": "Democrats can neither control nor predict whether our GOP counterparts are really ready to play chicken with the U.S. economy. But we can assure the American people that our party takes the nation's faith and credit seriously.",
    "author": "Peter Welch",
    "cat": "faith"
}, {
    "quote": "Not to mention the fact that of course terrorists hate freedom. I think they do hate. But believe me, I don't think they sit there abstractly hating freedom.",
    "author": "Zbigniew Brzezinski",
    "cat": "freedom"
}]
