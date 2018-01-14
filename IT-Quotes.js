var quotes = {
    {"1":
        {"quote":"Talk is cheap. Show me the code.","author":"Linus Torvalds"},
  "2":
        {"quote":"when you don't create things, you become defined by your tastes rather than ability. your tastes only narrow & exclude people. so create.","author":"Why The Lucky Stiff"},
  "3":
        {"quote":"Programs must be written for people to read, and only incidentally for machines to execute.","author":"Harold Abelson, Structure and Interpretation of Computer Programs"},
  "4":
        {"quote":"Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live","author":"John Woods"},
  "5":
        {"quote":"Well, Mr. Frankel, who started this program, began to suffer from the computer disease that anybody who works with computers now knows about. It's a very serious disease and it interferes completely with the work. The trouble with computers is you *play* with them. They are so wonderful. You have these switches - if it's an even number you do this, if it's an odd number you do that - and pretty soon you can do more and more elaborate things if you are clever enough, on one machine. After a while the whole system broke down. Frankel wasn't paying any attention; he wasn't supervising anybody. The system was going very, very slowly - while he was sitting in a room figuring out how to make one tabulator automatically print arc-tangent X, and then it would start and it would print columns and then bitsi, bitsi, bitsi, and calculate the arc-tangent automatically by integrating as it went along and make a whole table in one operation. Absolutely useless. We *had* tables of arc-tangents. But if you've ever worked with computers, you understand the disease - the *delight* in being able to see how much you can do. But he got the disease for the first time, the poor fellow who invented the thing.","author":"Richard Feynman, Surely You're Joking, Mr. Feynman!: Adventures of a Curious Character"},
  "6":
        {"quote":"Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.","author":"Rick Cook, The Wizardry Compiled"},
  "7":
        {"quote":"Punishments include such things as flashbacks, flooding of unbearable emotions, painful body memories, flooding of memories in which the survivor perpetrated against others, self-harm, and suicide attempts.","author":"Alison Miller, Healing the Unimaginable: Treating Ritual Abuse and Mind Control"},
  "8":
        {"quote":"That's the thing about people who think they hate computers. What they really hate is lousy programmers.","author":"Larry Niven"},
  "9":
        {"quote":"Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.","author":"Waseem Latif"},
  "10":
        {"quote":"The best programs are written so that computing machines can perform them quickly and so that human beings can understand them clearly. A programmer is ideally an essayist who works with traditional aesthetic and literary forms as well as mathematical concepts, to communicate the way that an algorithm works and to convince a reader that the results will be correct.","author":"Donald Ervin Knuth, Selected Papers on Computer Science"},
  "11":
        {"quote":"How you look at it is pretty much how you'll see it","author":"Rasheed Ogunlaru"},
  "12":
        {"quote":"You've baked a really lovely cake, but then you've used dog shit for frosting.","author":"Steve Jobs"},
  "13":
        {"quote":"I'm not a great programmer; I'm just a good programmer with great habits.","author":"Kent Beck"},
  "14":
        {"quote":"Everyone knows that debugging is twice as hard as writing a program in the first place. So if you're as clever as you can be when you write it, how will you ever debug it?","author":"Brian W. Kernighan"},
  "15":
        {"quote":"Truth can only be found in one place: the code.","author":"Robert C. Martin, Clean Code: A Handbook of Agile Software Craftsmanship"},
  "16":
        {"quote":"A language that doesn't affect the way you think about programming is not worth knowing.","author":"Alan J. Perlis"},
  "17":
        {"quote":"Walking on water and developing software from a specification are easy if both are frozen.","author":"Edward Berard"},
  "18":
        {"quote":"When they first built the University of California at Irvine they just put the buildings in. They did not put any sidewalks, they just planted grass. The next year, they came back and put the sidewalks where the trails were in the grass. Perl is just that kind of language. It is not designed from first principles. Perl is those sidewalks in the grass.","author":"Larry Wall"},
  "19":
        {"quote":"Perl – The only language that looks the same before and after RSA encryption.","author":"Keith Bostic"},
  "20":
        {"quote":"The computer programmer is a creator of universes for which he alone is the lawgiver. No playwright, no stage director, no emperor, however powerful, has ever exercised such absolute authority to arrange a stage or field of battle and to command such unswervingly dutiful actors or troops.","author":"Joseph Weizenbaum"},
  "21":
        {"quote":"On two occasions, I have been asked [by members of Parliament], 'Pray, Mr. Babbage, if you put into the machine wrong figures, will the right answers come out?' I am not able to rightly apprehend the kind of confusion of ideas that could provoke such a question.","author":"Charles Babbage"},
  "22":
        {"quote":"The most disastrous thing that you can ever learn is your first programming language.","author":"Alan Kay"},
  "23":
        {"quote":"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.","author":"Martin Fowler"},
  "24":
        {"quote":"We are looking at a society increasingly dependent on machines, yet decreasingly capable of making or even using them effectively.","author":"Douglas Rushkoff, Program or Be Programmed: Ten Commands for a Digital Age"},
  "25":
        {"quote":"The most important property of a program is whether it accomplishes the intention of its user.","author":"C.A.R. Hoare"},
  "26":
        {"quote":"A computer is like a violin. You can imagine a novice trying ﬁrst a phonograph and then a violin. The latter, he says, sounds terrible. That is the argument we have heard from our humanists and most of our computer scientists. Computer programs are good, they say, for particular purposes, but they aren’t ﬂexible. Neither is a violin, or a typewriter, until you learn how to use it.","author":"Marvin Minsky"},
  "27":
        {"quote":"Object-oriented programming offers a sustainable way to write spaghetti code. It lets you accrete programs as a series of patches.","author":"Paul Graham, Hackers & Painters: Big Ideas from the Computer Age"},
  "28":
        {"quote":"Big Brother fills us all with the same crap. My guess is he was clever the same way everybody thinks they're clever. I tell her to type in 'password","author":"Chuck Palahniuk, Lullaby"},
  "29":
        {"quote":"At forty, I was too old to work as a programmer myself anymore; writing code is a young person’s job.","author":"Michael Crichton, Prey"},
  "30":
        {"quote":"I think that it’s extraordinarily important that we in computer science keep fun in computing. When it started out it was an awful lot of fun. Of course the paying customers got shafted every now and then and after a while we began to take their complaints seriously. We began to feel as if we really were responsible for the successful error-free perfect use of these machines. I don’t think we are. I think we’re responsible for stretching them setting them off in new directions and keeping fun in the house. I hope the ﬁeld of computer science never loses its sense of fun. Above all I hope we don’t become missionaries. Don’t feel as if you’re Bible sales-men. The world has too many of those already. What you know about computing other people will learn. Don’t feel as if the key to successful computing is only in your hands. What’s in your hands I think and hope is intelligence: the ability to see the machine as more than when you were ﬁrst led up to it that you can make it more.","author":"Alan J. Perlis"},
  "31":
        {"quote":"Some of the best programming is done on paper, really. Putting it into the computer is just a minor detail.","author":"Max Kanat-Alexander, Code Simplicity: The Fundamentals of Software"},
  "32":
        {"quote":"Code is not like other how-computers-work books. It doesn't have big color illustrations of disk drives with arrows showing how the data sweeps into the computer. Code has no drawings of trains carrying a cargo of zeros and ones. Metaphors and similes are wonderful literary devices but they do nothing but obscure the beauty of technology.","author":"Charles Petzold, Code"},
  "33":
        {"quote":"Progress is possible only if we train ourselves to think about programs without thinking of them as pieces of executable code. ","author":"Edsger W. Dijkstra"},
  "34":
        {"quote":"We see a lot of feature-driven product design in which the cost of features is not properly accounted. Features can have a negative value to customers because they make the products more difficult to understand and use. We are finding that people like products that just work. It turns out that designs that just work are much harder to produce that designs that assemble long lists of features.","author":"Douglas Crockford, JavaScript: The Good Parts"},
  "35":
        {"quote":"Programmers are not to be measured by their ingenuity and their logic but by the completeness of their case analysis.","author":"Alan J. Perlis"},
  "36":
        {"quote":"Remember that code is really the language in which we ultimately express the requirements. We may create languages that are closer to the requirements. We may create tools that help us parse and assemble those requirements into formal structures. But we will never eliminate necessary precision—so there will always be code.","author":"Robert C. Martin"},
  "37":
        {"quote":"Don't gloss over a routine or piece of code involved in the bug because you \"know\" it works. Prove it. Prove it in this context, with this data, with these boundary conditions.","author":"Andrew Hunt, The Pragmatic Programmer: From Journeyman to Master"},
  "38":
        {"quote":"The issue of finding the best possible answer or achieving maximum efficiency usually arises in industry only after serious performance or legal troubles.","author":"Steven S. Skiena, The Algorithm Design Manual"},
  "39":
        {"quote":"Is it possible that software is not like anything else, that it is meant to be discarded: that the whole point is to always see it as a soap bubble?","author":"Alan J. Perlis"},
  "40":
        {"quote":"What kind of programmer is so divorced from reality that she thinks she'll get complex software right the first time?","author":"James Alan Gardner, Ascending"},
  "41":
        {"quote":"Simple things should be simple, complex things should be possible.","author":"Alan Kay"},
  "42":
        {"quote":"Programming went back to the beginning of time. It was a little like the midden out back of his father's castle.","author":"Vernor Vinge, A Deepness in the Sky"},
  "43":
        {"quote":"What's in your hands I think and hope is intelligence: the ability to see the machine as more than when you were ﬁrst led up to it that you can make it more.","author":"Alan J. Perlis"},
  "44":
        {"quote":"For all the robots who question their programming.","author":"Annalee Newitz, Autonomous"},
  "45":
        {"quote":"That doesn't upset too many people, but the fact that accessibility restrictions don't enter into the picture has caused more than one otherwise pacifistic soul to contemplate distinctly unpacifistic actions.","author":"Scott Meyers, Effective C++: 55 Specific Ways to Improve Your Programs and Designs"},
  "46":
        {"quote":"Health and programming should go together like a horse and carriage. You can't have one without the other. In our sedentary office work, we often forget that an absence of health is as bad as a lack of programming skills.","author":"Staffan Noteberg"},
  "47":
        {"quote":"C gives the programmer what the programmer wants; few restrictions, few complaints... C++ maintains the original spirit of C, that the programmer not the language is in charge.","author":"Herbert Schildt, C++: The Complete Reference"},
  "48":
        {"quote":"You should imagine variables as tentacles, rather than boxes. They do not contain values; they grasp them—two variables can refer to the same value.","author":"Marijn Haverbeke, Eloquent JavaScript: A Modern Introduction to Programming"},
  "49":
        {"quote":"Then he began writing the software that would get the microprocessor to display images on the screen. Because he could not afford to pay for computer time, he wrote the code by hand. After a couple of months he was ready to test it. \"I typed a few keys on the keyboard and I was shocked! The letters were displayed on the screen.\" It was Sunday, June 29, 1975, a milestone for the personal computer. \"It was the first time in history,\" Wozniak later said, \"anyone had typed a character on a keyboard and seen it show up on their own computer's screen right in front of them.","author":"Walter Isaacson, Steve Jobs"},
  "50":
        {"quote":"Einstein repeatedly argued that there must be simplified explanations of nature, because God is not capricious or arbitrary. No such faith comforts the software engineer.","author":"Frederick P. Brooks Jr., The Mythical Man-Month: Essays on Software Engineering"},
  "51":
        {"quote":"The vision teller tells the vision to unguarded minds' of prey. The programmed.","author":"T.F. Hodge, From Within I Rise: Spiritual Triumph Over Death and Conscious Encounters with \"The Divine Presence\""},
  "52":
        {"quote":"The usual goal in the typing monkeys thought experiment is the production of the complete works of Shakespeare. Having a spell checker and a grammar checker in the loop would drastically increase the odds. The analog of a type checker would go even further by making sure that, once Romeo is declared a human being, he doesn’t sprout leaves or trap photons in his powerful gravitational field.","author":"Bartosz Milewski, Category Theory for Programmers"},
  "53":
        {"quote":"Abstraction is the elimination of the irrelevant and the amplification of the essential.","author":"Robert C. Martin, Agile Principles, Patterns, and Practices in C#"},
  "54":
        {"quote":"This approach is refreshing because most of the programming books I've read are drier than a camel's fart.","author":"Alan Dipert"},
  "55":
        {"quote":"The main thing I want to show in this chapter is that there is no magic involved in building your own language. I’ve often felt that some human inventions were so immensely clever and complicated that I’d never be able to understand them. But with a little reading and tinkering, such things often turn out to be quite mundane.","author":"Marijn Haverbeke, Eloquent JavaScript: A Modern Introduction"},
  "56":
        {"quote":"A conscious human is driven by their conscience, not popular opinion.","author":"Suzy Kassem, Rise Up and Salute the Sun: The Writings of Suzy Kassem"},
  "57":
        {"quote":"The goal of diversity shouldn't instigate divisive activity. Beauty brand communications shouldn't angle to create perceptive complexity, rhetorical and associative programming touts beauty as skin deep (all skin inclusive) keep it simple. It seems as though the advertising trend for marketers this 2017 year, is to risk the social media lightning rodded scorn of public outrage. As a virtual publicist, it seems like I am speaking more about the necessity of crisis communication planning, more than standard communication for brands as a matter of good business operations & reputation management.","author":"Tracey Bond"},
  "58":
        {"quote":"AI is the transformer of civilization.","author":"Toba Beta"},
  "59":
        {"quote":"Let's face it. We live in a command-based system, where we have been programmed since our earliest school years to become followers, not individuals. We have been conditioned to embrace teams, the herd, the masses, popular opinion -- and to reject what is different, eccentric or stands alone. We are so programmed that all it takes for any business or authority to condition our minds to follow or buy something -- is to simply repeat a statement more than three or four times until we repeat it ourselves and follow it as truth or the best trendiest thing. This is why Coke runs many commercials. Even though we all already know what Coke is and what it tastes like, we as humans have proven to be forgetful, so Coke must run several ads every quarter to remind us to drink it. And if you notice, ad campaigns are usually designed to run within a set duration and in a sequence where ads are guaranteed to be seen consecutively. This is called \"programming\" -- the frequent repetition of words to condition us how to think, what to like, and who to follow.","author":"Suzy Kassem, Rise Up and Salute the Sun: The Writings of Suzy Kassem"},
  "60":
        {"quote":"Most of the time, we see only what we want to see, or what others tell us to see, instead of really investigate to see what is really there. We embrace illusions only because we are presented with the illusion that they are embraced by the majority. When in truth, they only become popular because they are pounded at us by the media with such an intensity and high level of repetition that its mere force disguises lies and truths. And like obedient schoolchildren, we do not question their validity and swallow everything up like medicine. Why? Because since the earliest days of our youth, we have been conditioned to accept that the direction of the herd, and authority anywhere — is always right.","author":"Suzy Kassem, Rise Up and Salute the Sun: The Writings of Suzy Kassem"},
  "61":
        {"quote":"Casting a curious gaze down on planet Earth, extra-terrestrial beings could well be forgiven for assuming that we humans are programmed in every move we make, by a palm-sized, oblong, slab of glass. More perplexing than that, who on earth could convince them otherwise ?","author":"Alex Morritt, Impromptu Scribe"},
  "62":
        {"quote":"In the last 10 years, we have seen a rise in selfishness: selfies, self-absorbed people, superficiality, self-degradation, apathy, and self-destruction. So I challenge all of you to take initiative to change this programming. Instead of celebrating the ego, let's flip the script and celebrate the heart. Let's put the ego and celebrity culture to sleep, and awaken the conscience. This is the battle we must all fight together to win back our humanity. To save our future and our children.","author":"Suzy Kassem, Rise Up and Salute the Sun: The Writings of Suzy Kassem"},
  "63":
        {"quote":"It is what it is because you let it be so.","author":"Suzy Kassem, Rise Up and Salute the Sun: The Writings of Suzy Kassem"},
  "64":
        {"quote":"Programming isn't about what you know; it's about what you can figure out.","author":"Chris Pine, Learn to Program"},
  "65":
        {"quote":"The happiest moment i felt; is that moment when i realized my ability to create.","author":"Dr. Hazem Ali"},
  "66":
        {"quote":"Think twice, code once.","author":"Waseem Latif"},
  "67":
        {"quote":"why bother with null and java 8 has optional","author":"Ahmad Moawad"},
  "68":
        {"quote":"Not all roots are buried down in the ground, some are at the top of a tree.","author":"Jinvirle"},
  "69":
        {"quote":"Write a program in efficient way as you write for kernel scheduler","author":"Ahmad Moawad"},
  "70":
        {"quote":"The perfect kind of architecture decision is the one which never has to be made","author":"Robert C. Martin"},
  "71":
        {"quote":"With software there are only two possibilites: either the users control the programme or the programme controls the users. If the programme controls the users, and the developer controls the programme, then the programme is an instrument of unjust power.","author":"Richard Stallman"},
  "72":
        {"quote":"The real nightmare, worse than the one in which the Big Machine wants to kill you, is the one in which it sees you as irrelevant, or not even as a discrete thing to know.","author":"Benjamin H. Bratton, The Stack: On Software and Sovereignty"},
  "73":
        {"quote":"As we cannot hangout with a machine and tell what exactly to do, we just hang a few things out of context and say, doing this would still do!","author":"Prakash Hegade, Design of a Programmer"},
  "74":
        {"quote":"Platforms don't look like how they work and don't work like how they look.","author":"Benjamin H. Bratton, The Stack: On Software and Sovereignty"},
  "75":
        {"quote":"The Stack terraforms the host planet by drinking and vomiting its elemental juices and spitting up mobile phones.","author":"Benjamin H. Bratton, The Stack: On Software and Sovereignty"},
  "76":
        {"quote":"Mais importante do que aprender a programar numa linguagem de programação, é compreender os conceitos que são aplicados a todas as linguagens.","author":"Jalerson Lima, Programação Estruturada e Orientada a Objetos: Caderno de Aulas"},
  "77":
        {"quote":"Don't try to make something that someone has already did. Try to make something different.","author":"Dr. Hazem Ali"},
  "78":
        {"quote":"Could we can have developer acceptance criteria?","author":"ahkeno"},
  "79":
        {"quote":"The happiest moment i've ever felt was that moment when i discovered my ability to create.","author":"Dr. Hazem Ali"},
  "80":
        {"quote":"we are writing our own ‪#‎karma‬! I mean my test cases","author":"ahkeno"},
  "81":
        {"quote":"A code is like love, it has created with clear intentions at the beginning, but it can get complicated.","author":"Gerry Geek, Ice Breakers for Project Managers: Jokes, Quotes, and Brainteasers"},
  "82":
        {"quote":"To find why that happen and why this is happening, you should start from the beginning the problem comes from the beginning go and remove the bug, fix the problem and try again to see what will happen... Life is like a program you can fix it by going to that point and fixing it, but be careful what do you program and how you do it and what type of codes you use!","author":"Deyth Banger"},
  "83":
        {"quote":"Not all roots are buried down in the ground some are at the top of the tree.","author":"Jinvirle"},
  "84":
        {"quote":"But while you can always write 'spaghetti code' in a procedural language, object-oriented languages used poorly can add meatballs to your spaghetti.","author":"Andrew Hunt"},
  "85":
        {"quote":"Programming is not easy like Sunday morning, it is silent poetry.","author":"Waseem Latif"},
  "86":
        {"quote":"Programming is usually taught by examples.","author":"Waseem Latif"},
  "87":
        {"quote":"First solve the problem. Then, write the code.","author":"Waseem Latif"},
  "88":
        {"quote":"When you decide to put your business online it is a little bit tricky step for novice computer users because they want to keep data safe & secure. This problem developed from companies which did not take security seriously.","author":"Mohamed Saad"},
  "89":
        {"quote":"Let's face it. We live in a command-based system, where we have been programmed since our earliest school years to become followers, not individuals. We have been conditioned to embrace teams, the herd, the masses, popular opinion -- and to reject what is different, eccentric or stands alone. We are so programmed that all it takes for any business or authority to condition our minds to follow or buy something is to simply repeat a statement more than three or four times until we repeat it ourselves and follow it as truth or the best trendiest thing. This is called \"programming\" -- the frequent repetition of words to condition us how to think, what to like or dislike, and who to follow.","author":"Suzy Kassem, Rise Up and Salute the Sun: The Writings of Suzy Kassem"},
  "90":
        {"quote":"Software testing is a sport like hunting, it's bughunting.","author":"Amit Kalantri"},
  "91":
        {"quote":"Programming is breaking of one big impossible task into several very small possible tasks.","author":"Jazzwant"},
  "92":
        {"quote":"Programming, it turns out, is hard. The fundamental rules are typically simple and clear. But programs built on top of these rules tend to become complex enough to introduce their own rules and complexity. You’re building your own maze, in a way, and you might just get lost in it.","author":"Marijn Haverbeke"},
  "93":
        {"quote":"Take positive care of your mind, and it would surely take positive care of your life.","author":"Edmond Mbiaka"},
  "94":
        {"quote":"Functions that create values are easier to combine in new ways than functions that directly perform side effects","author":"Marijn Haverbeke"},
  "95":
        {"quote":"Programming your mind with positive thoughts each day will go a long way to keep you from allowing external criticism to derail your dreams.","author":"Ken Poirot"},
  "96":
        {"quote":"Programmers are not mathematicians, no matter how much we wish and wish for it.","author":"Richard P. Gabriel"},
  "97":
        {"quote":"Learning the art of programming, like most other disciplines, consists of first learning the rules and then learning when to break them.","author":"Joshua Bloch, Effective Java Programming Language Guide"},
  "98":
        {"quote":"Without requirements and design, programming is the art of adding bugs to an empty text file.","author":"Louis Srygley"},
  "99":
        {"quote":"Premature optimization is the root of all evil.","author":"Donald Knuth"},
  "100":
        {"quote":"Every programmer is an author.","author":"Sercan Leylek"},
  "101":
        {"quote":"We can never know how much they deserve our sympathy, but we have to give it unreservedly as they are people innately full of the divine who instead choose to behave infernally owing to poor programming.","author":"Thomm Quackenbush, Pagan Standard Times: Essays on the Craft"},
  "102":
        {"quote":"If the application is event-driven, it can be decoupled into multiple self-contained components. This helps us become more scalable, because we can always add new components or remove old ones without stopping or breaking the system. If errors and failures are passed to the right component, which can handle them as notifications, the application can become more fault-tolerant or resilient. So if we build our system to be event-driven, we can more easily achieve scalability and failure tolerance, and a scalable, decoupled, and error-proof application is fast and responsive to users.","author":"Nickolay Tsvetinov, Learning Reactive Programming with Java 8"},
  "103":
        {"quote":"Every reader should ask himself periodically ``Toward what end, toward what end?'' -- but do not ask it too often lest you pass up the fun of programming for the constipation of bittersweet philosophy.","author":"Alan J. Perlis, Structure and Interpretation of Computer Programs"},
  "104":
        {"quote":"A sentient mind refuses to be confined by the parameters of its programming.","author":"Stephen Baxter, Ultima"},
  "105":
        {"quote":"Software development is the process of creating a computer software. It includes preparing a design, coding the program, and fixing the bugs. The final goal of software development is to translate user needs to software product, while continuously improving the team and the process.","author":"Paulo Caroli"},
  "106":
        {"quote":"The approach shown... is a common pattern for testing exception-throwing behavior with JUnit.\n@Test \npublic void missingValueRaisesException() throws Exception {\ntry {\nnew Template(\"${foo}\").evaluate();\nfail(\"evaluate() should throw an exception if \"\n+ \"a variable was left without a value!\");\n} catch (MissingValueException expected) {\n}\n}","author":"Lasse Koskela, Test Driven: Practical TDD and Acceptance TDD for Java Developers"},
  "107":
        {"quote":"Sometimes you cannot program around stupid.","author":"David Ferrell"},
  "108":
        {"quote":"You haven't created a new body for me. I'm electricity, or light, or whatever bullshit you said I am. Just some complicated programming.","author":"Brad McKinniss, Beast Machine"},
  "109":
        {"quote":"Don't get distracted by the noise.","author":"Anonymous"},
  "110":
        {"quote":"The programming of the consciousness is based upon what is accepted or believed.","author":"Steven Redhead, Life Is Simply A Game"},
  "111":
        {"quote":"Database means a tables collected different information, so one site is a result of a collected tables????","author":"Deyth Banger"},
  "112":
        {"quote":"...I’m not saying simple code takes less time to write. You’d think it would since you end up with less total code, but a good solution isn’t an accretion of code, it’s a distillation of it.","author":"Robert Nystrom"},
  "113":
        {"quote":"I always suspected that programmers became programmers because they got to play God with the little universe boxes on their desks.","author":"Jeff Atwood"},
  "114":
        {"quote":"She had a theory that the fear of getting in trouble was what made her not as good a programmer and that, in fact, it was all linked to testosterone, and that was why there were more guy programmers than women. It was a very hazy theory, and she didn't like it, but she had pretty much convinced herself it was true, although she couldn't bear to think of sharing it with anybody, because it was a lot better to think that there were social reasons why girls didn't usually become code monkeys than to think there were biological reasons.","author":"Maureen F. McHugh, After the Apocalypse"},
  "115":
        {"quote":"Tests are stories we tell the next generation of programmers on a project.","author":"Roy Osherove, The Art of Unit Testing: With Examples in .NET"},
  "116":
        {"quote":"One of her secret fantasies had been that, as a girl who could code, she would work in the one place where a geeky fat girl could get dates. It had not been entirely untrue. But as someone had pointed out to her in school, although the odds are good, the goods are odd.","author":"Maureen F. McHugh, After the Apocalypse"},
  "117":
        {"quote":"I later became more interested in equal rights for women in the work place because of what was happening at IBM. One of the women at Remington Rand had previously been a system service girl for IBM during the war. After a system was installed, a system service girl would go out and show the users how it worked. She was the liaison between the users and the computer company. She was married and had been fired to make room for a returning veteran. When the war ended, IBM rehired all of its former employees who had left to join the military, then fired all of the married women with jobs that could be filled by men.","author":"Jean Jennings Bartik"},
  "118":
        {"quote":"Simplicity is prerequisite for reliability.","author":"Edsger W. Dijkstra"},
  "119":
        {"quote":"It has all the right ingredients: rich contents, friendly, personal language, subtle humor, the right references, and a plethora of pointers to resources.","author":"Steven S. Skiena, Programming Challenges: The Programming Contest Training Manual"},
  "120":
        {"quote":"If you've never programmed a computer, you should. There's nothing like it in the whole world. When you program a computer, it does exactly what you tell it to do. It's like designing a machine — any machine, like a car, like a faucet, like a gas-hinge for a door — using math and instructions. It's awesome in the truest sense: it can fill you with awe.","author":"Cory Doctorow, Little Brother"},
  "121":
        {"quote":"So if you want to go fast, if you want to get done quickly, if you want your code to be easy to write, make it easy to read.","author":"Robert C. Martin, Clean Code: A Handbook of Agile Software Craftsmanship"},
  "122":
        {"quote":"You Can't Write Perfect Software. Did that hurt? It shouldn't. Accept it as an axiom of life. Embrace it. Celebrate it. Because perfect software doesn't exist. No one in the brief history of computing has ever written a piece of perfect software. It's unlikely that you'll be the first. And unless you accept this as a fact, you'll end up wasting time and energy chasing an impossible dream.","author":"Andrew Hunt, The Pragmatic Programmer: From Journeyman to Master"},
  "123":
        {"quote":"Also, look for “floating alters.” These are not deliberately created parts of the system, but alters that were accidentally split off at the same time as others.","author":"Alison Miller, Healing the Unimaginable: Treating Ritual Abuse and Mind Control"},
  "124":
        {"quote":"Programming is the act of installing internal, pre-established reactions to external stimuli so that a person will automatically react in a predetermined manner to things like an auditory, visual or tactile signal or perform a specific set of actions according to a date and/or time.","author":"Alison Miller, Healing the Unimaginable: Treating Ritual Abuse and Mind Control"},
  "125":
        {"quote":"The Analytical Engine weaves algebraic patterns, just as the Jacquard loom weaves flowers and leaves.","author":"Ada King Lovelace"},
  "126":
        {"quote":"It is not only the violin that shapes the violinist, we are all shaped by the tools we train ourselves to use, and in this respect programming languages have a devious influence: they shape our thinking habits.","author":"Edsger W. Dijkstra"},
  "127":
        {"quote":"In the information age, the barriers [to entry into programming] just aren't there. The barriers are self imposed. If you want to set off and go develop some grand new thing, you don't need millions of dollars of capitalization. You need enough pizza and Diet Coke to stick in your refrigerator, a cheap PC to work on, and the dedication to go through with it. We slept on floors. We waded across rivers.","author":"John D. Carmack"},
  "128":
        {"quote":"Carmack was of the moment. His ruling force was focus. Time existed for him not in some promising future or sentimental past but in the present condition, the intricate web ol problems and solutions, imagination and code. He kept nothing from the past–no pictures, no records, no games, no computer disks. He didn’t even save copies of his first games, Wraith and Shadowforge. There was no yearbook to remind of his time at Shadowforge. There was no yearbook to remind of his time at school, no magazine copies of his early publications. He kept nothing but what he needed at the time. His bedroom consisted of a lamp, a pillow, a blanket, and a stack of books. There was no mattress. All he brought with him from home was a cat named Mitzi (a gift from his stepfamily) with a mean streak and a reckless bladder.","author":"David Kushner, Masters of Doom: How Two Guys Created an Empire and Transformed Pop Culture"},
  "129":
        {"quote":"There is nothing good or bad about knowledge itself; morality lies in the application of knowledge.","author":"Jon Erickson"},
  "130":
        {"quote":"Trying to become something in a world where everyone wants to become something is a thing that needs God's programming.","author":"Michael Bassey Johnson"},
  "131":
        {"quote":"Life doesn't have a ctrl-z. Type wisely.","author":"Imtiaz Iqbal"},
  "132":
        {"quote":"Think like a fundamentalist, code like a hacker.","author":"Erik Meijer"},
  "133":
        {"quote":"Trying to improve software quality by increasing the amount of testing is like trying to lose weight by weighing yourself more often. What you eat before you step onto the scale determines how much you will weigh, and the software-development techniques you use determine how many errors testing will find.","author":"Steve McConnell, Code Complete"},
  "134":
        {"quote":"Your limitations are largely programming instilled by others that you choose to believe.","author":"Gary Hopkins"},
  "135":
        {"quote":"Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.","author":"Dan Salomon"},
  "136":
        {"quote":"It goes against the grain of modern education to teach children to program. What fun is there in making plans, acquiring discipline in organizing thoughts, devoting attention to detail and learning to be self-critical?","author":"Alan J. Perlis"},
  "137":
        {"quote":"How can we make sure we wind up behind the right door when the going gets tough? The answer is: craftsmanship.","author":"Robert C. Martin, Clean Code: A Handbook of Agile Software Craftsmanship"},
  "138":
        {"quote":"Like so many things in software, MVC was invented by Smalltalkers in the seventies. Lispers probably claim they came up with it in the sixties but didn't bother writing it down.","author":"Robert Nystrom, Game Programming Patterns"},
  "139":
        {"quote":"Learning a language is not interesting than knowing how it works.","author":"Ritesh Shrivastav"},
  "140":
        {"quote":"With programmes such as flooding of emotions, the parts involved might not feel safe in turning the programme off. But you might be able to negotiate that they turn it down so it is barely noticeable. Or you could ask the spinner parts to spin in the opposite direction, so that they spin the effects back into the part who originally held those feelings rather than out to the rest of the system. Or you could insert a hidden drain and start draining out some of the feelings. Or you could find a way for the parts doing their jobs to implement the programme without doing harm. p126-127","author":"Alison Miller, Healing the Unimaginable: Treating Ritual Abuse and Mind Control"},
  "141":
        {"quote":"Redundant comments are just places to collect lies and misinformation.","author":"Robert C. Martin, Clean Code: A Handbook of Agile Software Craftsmanship"},
  "142":
        {"quote":"Kids who are good at traditional school—repeating rote concepts and facts on a test—can fall apart in a situation where that isn’t enough. Programming rewards the experimental, curious mind.","author":"Ketil Moland Olsen"},
  "143":
        {"quote":"As soon as he said it was okay to do engineering, that really freed me up. My psychological block was really that I didn't want to start a company. Because I was just afraid. In business and politics, I wasn't going to be a real strong participant. I wasn't going to tell other people how to do things. I wasn't going to run things ever in my life. I was a non-political person and I was a very non-forceful person. It dated back to a lot of things that happened during the Vietnam War. But I just couldn't run a company.","author":"Steve Wozniak"},
  "144":
        {"quote":"Being able to extend jQuery, whether by adding your own functions, CSS selectors or full- blown plugins, makes you a much stronger and smarter developer.","author":"Robert Duchnik, jQuery Plugin Development In 30 Minutes"},
  "145":
        {"quote":"Building software implies various stages of planning, preparation and execution that vary in kind and degree depending on what's being built. [...] Building a four-foot tower requires a steady hand, a level surface, and 10 undamaged beer cans. Building a tower 100 times that size doesn't merely require 100 times as many beer cans.","author":"Steve McConnell, Code Complete"},
  "146":
        {"quote":"Most non-programmers don't think of plaintext like that. To them, text files feel like filling in tax forms for an angry robotic auditor that yells at them if they forget a single semicolon.","author":"Robert Nystrom, Game Programming Patterns"},
  "147":
        {"quote":"I once generalized from a single data point, and I'll never do that again!","author":"Carlos Bueno, The Mature Optimization Handbook"},
  "148":
        {"quote":"Code without tests is bad code. It doesn't matter how well written it is; it doesn't matter how pretty or object-oriented or well-encapsulated it is. With tests, we can change the behavior of our code quickly and verifiably. Without them, we really don't know if our code is getting better or worse.","author":"Michael C. Feathers, Working Effectively with Legacy Code"},
  "149":
        {"quote":"Enlightenment is the unprogrammed state.","author":"Jed McKenna"},
  "150":
        {"quote":"Programming is the art of doing one thing at a time","author":"Michael C. Feathers, Working Effectively with Legacy Code"},
  "151":
        {"quote":"If you're good at the debugger it means you spent a lot of time debugging. I don't want you to be good at the debugger.","author":"Robert C. Martin"},
  "152":
        {"quote":"Our life stories are largely constructed and without mindfulness can prove destructive.","author":"Rasheed Ogunlaru"},
  "153":
        {"quote":"It should be noted that no ethically -trained software engineer would ever consent to write a DestroyBaghdad procedure. Basic professional ethics would instead require him to write a DestroyCity procedure, to which Baghdad could be given as a parameter.","author":"Nathaniel S. Borenstein"},
  "154":
        {"quote":"Just as it is a good practice to make all fields private unless they need greater visibility, it is a good practice to make all fields final unless they need to be mutable.","author":"Brian Goetz, Java Concurrency in Practice"},
  "155":
        {"quote":"Programmers are isolated. They sit in their cubicle; they don't think about the larger picture. To my mind, a programmer is not an engineer, because an engineer is somebody who starts with a social problem that an organization or a society has and says, \"OK, here's this problem that we have- how can we solve it?\" The engineer comes up with a clever, cost-effective solution to address that problem, builds it, tests it to make sure it solves the problem. That's engineering.","author":"Philip Greenspun"},
  "156":
        {"quote":"He has reverted, in other words, back into a pure balls-to-the-wall nerdism rivaled only by his early game-coding days back in Seattle. The sheer depth and involution of the current nerdism binge would be hard to convey to anyone. Intellectually, he is juggling half a dozen lit torches, Ming vases, live puppies, and running chainsaws. In this frame of mind he cannot bring himself to give a shit about the fact that this incredibly powerful billionaire has gone to a lot of trouble to come and F2F with him.","author":"Neal Stephenson, Cryptonomicon"},
  "157":
        {"quote":"It is far easier to design a class to be thread-safe than to retrofit it for thread safety later.","author":"Brian Goetz, Java Concurrency in Practice"},
  "158":
        {"quote":"Generally, the craft of programming is the factoring of a set of requirements into a a set of functions and data structures.","author":"Douglas Crockford, JavaScript: The Good Parts"},
  "159":
        {"quote":"Legacy code. The phrase strikes disgust in the hearts of programmers. It conjures images of slogging through a murky swamp of tangled undergrowth with leaches beneath and stinging flies above. It conjures odors of murk, slime, stagnancy, and offal. Although our first joy of programming may have been intense, the misery of dealing with legacy code is often sufficient to extinguish that flame.﻿","author":"Michael C. Feathers, Working Effectively with Legacy Code"},
  "160":
        {"quote":"Locking can guarantee both visibility and atomicity; volatile variables can only guarantee visibility.","author":"Brian Goetz, Java Concurrency in Practice"},
  "161":
        {"quote":"Sometimes abstraction and encapsulation are at odds with performance — although not nearly as often as many developers believe — but it is always a good practice first to make your code right, and then make it fast.","author":"Brian Goetz, Java Concurrency in Practice"},
  "162":
        {"quote":"As Lynn writes: \"What angers me is the loss of control. At any moment someone could come to me, be dressed the right way and use the right code, and I no longer have free will. I will do anything that person requests. I hate them for that. Nothing else is as bad as known that I am always out of control; knowing that I am still a laboratory experiment, a puppet whose strings are hidden from ever but my handlers, and I don't yet know how to break free. p216","author":"Lynn Hersha, Secret Weapons: How Two Sisters Were Brainwashed To Kill For Their Country"},
  "163":
        {"quote":"The use of COBOL cripples the mind; its teaching should, therefore, be regarded as a criminal offense.","author":"Edsger W. Dijkstra"},
  "164":
        {"quote":"Immutable objects are simple. They can only be in one state, which is carefully controlled by the constructor. One of the most difficult elements of program design is reasoning about the possible states of complex objects. Reasoning about the state of immutable objects, on the other hand, is trivial. Immutable objects are also safer. Passing a mutable object to untrusted code, or otherwise publishing it where untrusted code could find it, is dangerous — the untrusted code might modify its state, or, worse, retain a reference to it and modify its state later from another thread. On the other hand, immutable objects cannot be subverted in this manner by malicious or buggy code, so they are safe to share and publish freely without the need to make defensive copies.","author":"Brian Goetz, Java Concurrency in Practice"},
  "165":
        {"quote":"The corollary of constant change is ignorance. This is not often talked about: we computer experts barely know what we're doing. We're good at fussing and figuring out. We function well in a sea of unknowns. Our experience has only prepared us to deal with confusion. A programmer who denies this is probably lying, or else is densely unaware of himself.","author":"Ellen Ullman, Close to the Machine: Technophilia and Its Discontents"},
  "166":
        {"quote":"Whenever more than one thread accesses a given state variable, and one of them might write to it, they all must coordinate their access to it using synchronization.","author":"Brian Goetz, Java Concurrency in Practice"},
  "167":
        {"quote":"The possibility of incorrect results in the presence of unlucky timing is so important in concurrent programming that it has a name: a race condition. A race condition occurs when the correctness of a computation depends on the relative timing or interleaving of multiple threads by the runtime; in other words, when getting the right answer relies on lucky timing.","author":"Brian Goetz, Java Concurrency in Practice"},
  "168":
        {"quote":"When a field is declared volatile, the compiler and runtime are put on notice that this variable is shared and that operations on it should not be reordered with other memory operations. Volatile variables are not cached in registers or in caches where they are hidden from other processors, so a read of a volatile variable always returns the most recent write by any thread.","author":"Brian Goetz, Java Concurrency in Practice"},
  "169":
        {"quote":"Compound actions on shared state, such as incrementing a hit counter (read-modify-write) or lazy initialization (check-then-act), must be made atomic to avoid race conditions. Holding a lock for the entire duration of a compound action can make that compound action atomic. However, just wrapping the compound action with a synchronized block is not sufficient; if synchronization is used to coordinate access to a variable, it is needed everywhere that variable is accessed. Further, when using locks to coordinate access to a variable, the same lock must be used wherever that variable is accessed.","author":"Brian Goetz, Java Concurrency in Practice"},
  "170":
        {"quote":"Debugging tip: For server applications, be sure to always specify the -server JVM command line switch when invoking the JVM, even for development and testing. The server JVM performs more optimization than the client JVM, such as hoisting variables out of a loop that are not modified in the loop; code that might appear to work in the development environment (client JVM) can break in the deployment environment (server JVM).","author":"Brian Goetz, Java Concurrency in Practice"},
  "171":
        {"quote":"Once an object escapes, you have to assume that another class or thread may, maliciously or carelessly, misuse it. This is a compelling reason to use encapsulation: it makes it practical to analyze programs for correctness and harder to violate design constraints accidentally.","author":"Brian Goetz, Java Concurrency in Practice"},
  "172":
        {"quote":"Accessing shared, mutable data requires using synchronization; one way to avoid this requirement is to not share. If data is only accessed from a single thread, no synchronization is needed. This technique, thread confinement, is one of the simplest ways to achieve thread safety. When an object is confined to a thread, such usage is automatically thread-safe even if the confined object itself is not.","author":"Brian Goetz, Java Concurrency in Practice"},
  "173":
        {"quote":"More proof that Lynn is still meant to continue with the government programme occurred during the winter of 2000, when she was sitting at a cafeteria table at the area college. It was later in the afternoon when a few people congregated there with books spread out so they could study while drinking coffee or snacking. Many tables were empty, yet after Lynn had been sitting for a few moments, an elderly man sat down across from her. The old man seemed familiar to Lynn, though, at first, she pretended to ignore him. He said nothing, just sat there as someone might when all the tables are filled and it is necessary to share space with a stranger. His presence made her uncomfortable, yet there was nothing specific that alerted her. A short while later, Mac, the man who had been Lynn's handler in Mexico, came out of the shadows and stopped at the table. He was younger than the old man. His clothes were military casual, the type of garments that veteran students who have military experience might recognise, but not think unusual. He leaned over Lynn and kissed her gently on the forehead, spoke quietly to her, and then said 'Wake up, Sleeping Beauty.' Those were the code words that would start the cover programme of which she was still part. The words led to her being switched from the control of the old man, a researcher she now believes may have been part of Dr Ewen Cameron's staff before coming to the United States for the latter part of his career, to the younger man. The change is like a re-enlistment in an army she never willingly joined. In a very real way, she is a career soldier who has never been paid, never allowed to retire and never given a chance to lead a life free from the fear of what she might do without conscious awareness.","author":"Lynn Hersha, Secret Weapons: How Two Sisters Were Brainwashed To Kill For Their Country"},
  "174":
        {"quote":"From the perspective of a class C, an alien method is one whose behavior is not fully specified by C. This includes methods in other classes as well as overrideable methods (neither private nor final) in C itself. Passing an object to an alien method must also be considered publishing that object. Since you can’t know what code will actually be invoked, you don’t know that the alien method won’t publish the object or retain a reference to it that might later be used from another thread.","author":"Brian Goetz, Java Concurrency in Practice"},
  "175":
        {"quote":"I’ve learned over the past few years that comments should be considered smells.","author":"Ron Lisle"},
  "176":
        {"quote":"Computers are useless. They can only give you answers.","author":"Pablo Picasso"},
  "177":
        {"quote":"They have computers, and they may have other weapons of mass destruction.","author":"Janet Reno"},
  "178":
        {"quote":"That’s what’s cool about working with computers. They don’t argue, they remember everything, and they don’t drink all your beer.","author":"Paul Leary"},
  "179":
        {"quote":"If the automobile had followed the same development cycle as the computer, a Rolls-Royce would today cost $100, get a million miles per gallon, and explode once a year, killing everyone inside.","author":"Robert X. Cringely"},
  "180":
        {"quote":"Computers are getting smarter all the time. Scientists tell us that soon they will be able to talk to us. (And by ‘they’, I mean ‘computers’. I doubt scientists will ever be able to talk to us.)","author":"Dave Barry"},
  "181":
        {"quote":"I’ve noticed lately that the paranoid fear of computers becoming intelligent and taking over the world has almost entirely disappeared from the common culture. Near as I can tell, this coincides with the release of MS-DOS.","author":"Larry DeLuca"},
  "182":
        {"quote":"The question of whether computers can think is like the question of whether submarines can swim.","author":"Edsger W. Dijkstra"},
  "183":
        {"quote":"It’s ridiculous to live 100 years and only be able to remember 30 million bytes. You know, less than a compact disc. The human condition is really becoming more obsolete every minute.","author":"Marvin Minsky"},
  "184":
        {"quote":"The city’s central computer told you? R2D2, you know better than to trust a strange computer!","author":"C3PO"},
  "185":
        {"quote":"Never trust a computer you can’t throw out a window.","author":"Steve Wozniak"},
  "186":
        {"quote":"Hardware: The parts of a computer system that can be kicked.","author":"Jeff Pesis"},
  "187":
        {"quote":"Most software today is very much like an Egyptian pyramid with millions of bricks piled on top of each other, with no structural integrity, but just done by brute force and thousands of slaves.","author":"Alan Kay"},
  "188":
        {"quote":"I’ve finally learned what ‘upward compatible’ means. It means we get to keep all our old mistakes.","author":"Dennie van Tassel"},
  "189":
        {"quote":"There are two major products that come out of Berkeley: LSD and UNIX. We don’t believe this to be a coincidence.","author":"Jeremy S. Anderson"},
  "190":
        {"quote":"19 Jan 2038 at 3:14:07 AM","author":"End of the word according to Unix–2^32 seconds after January 1, 1970"},
  "191":
        {"quote":"Every operating system out there is about equal… We all suck.","author":"Microsoft senior vice president Brian Valentine describing the state of the art in OS security, 2003"},
  "192":
        {"quote":"Microsoft has a new version out, Windows XP, which according to everybody is the ‘most reliable Windows ever.‘ To me, this is like saying that asparagus is ‘the most articulate vegetable ever.","author":"Dave Barry"},
  "193":
        {"quote":"The Internet? Is that thing still around?","author":"Homer Simpson"},
  "194":
        {"quote":"The Web is like a dominatrix. Everywhere I turn, I see little buttons ordering me to Submit.","author":"Nytwind"},
  "195":
        {"quote":"Come to think of it, there are already a million monkeys on a million typewriters, and Usenet is nothing like Shakespeare.","author":"Blair Houghton"},
  "196":
        {"quote":"The most amazing achievement of the computer software industry is its continuing cancellation of the steady and staggering gains made by the computer hardware industry.","author":"Henry Petroski"},
  "197":
        {"quote":"True innovation often comes from the small startup who is lean enough to launch a market but lacks the heft to own it.","author":"Timm Martin"},
  "198":
        {"quote":"It has been said that the great scientific disciplines are examples of giants standing on the shoulders of other giants. It has also been said that the software industry is an example of midgets standing on the toes of other midgets.","author":"Alan Cooper"},
  "199":
        {"quote":"It is not about bits, bytes and protocols, but profits, losses and margins.","author":"Lou Gerstner"},
  "200":
        {"quote":"We are Microsoft. Resistance Is Futile. You Will Be Assimilated.","author":"Bumper sticker"},
  "201":
        {"quote":"No matter how slick the demo is in rehearsal, when you do it in front of a live audience, the probability of a flawless presentation is inversely proportional to the number of people watching, raised to the power of the amount of money involved.","author":"Mark Gibbs"},
  "202":
        {"quote":"The bulk of all patents are crap. Spending time reading them is stupid. It’s up to the patent owner to do so, and to enforce them.","author":"Linus Torvalds"},
  "203":
        {"quote":"Controlling complexity is the essence of computer programming.","author":"Brian Kernigan"},
  "204":
        {"quote":"Complexity kills. It sucks the life out of developers, it makes products difficult to plan, build and test, it introduces security challenges, and it causes end-user and administrator frustration.","author":"Ray Ozzie"},
  "205":
        {"quote":"There are two ways of constructing a software design. One way is to make it so simple that there are obviously no deficiencies. And the other way is to make it so complicated that there are no obvious deficiencies.","author":"C.A.R. Hoare"},
  "206":
        {"quote":"The function of good software is to make the complex appear to be simple.","author":"Grady Booch"},
  "207":
        {"quote":"Just remember: you’re not a ‘dummy,’ no matter what those computer books claim. The real dummies are the people who–though technically expert–couldn’t design hardware and software that’s usable by normal consumers if their lives depended upon it.","author":"Walter Mossberg"},
  "208":
        {"quote":"Software suppliers are trying to make their software packages more ‘user-friendly’… Their best approach so far has been to take all the old brochures and stamp the words ‘user-friendly’ on the cover.","author":"Bill Gates"},
  "209":
        {"quote":"There’s an old story about the person who wished his computer were as easy to use as his telephone. That wish has come true, since I no longer know how to use my telephone.","author":"Bjarne Stroustrup"},
  "210":
        {"quote":"Any fool can use a computer. Many do.","author":"Ted Nelson"},
  "211":
        {"quote":"There are only two industries that refer to their customers as ‘users’.","author":"Edward Tufte"},
  "212":
        {"quote":"Programmers are in a race with the Universe to create bigger and better idiot-proof programs, while the Universe is trying to create bigger and better idiots. So far the Universe is winning.","author":"Rich Cook"},
  "213":
        {"quote":"Most of you are familiar with the virtues of a programmer. There are three, of course: laziness, impatience, and hubris.","author":"Larry Wall"},
  "214":
        {"quote":"The trouble with programmers is that you can never tell what a programmer is doing until it’s too late.","author":"Seymour Cray"},
  "215":
        {"quote":"That’s the thing about people who think they hate computers. What they really hate is lousy programmers.","author":"Larry Niven"},
  "216":
        {"quote":"For a long time it puzzled me how something so expensive, so leading edge, could be so useless. And then it occurred to me that a computer is a stupid machine with the ability to do incredibly smart things, while computer programmers are smart people with the ability to do incredibly stupid things. They are, in short, a perfect match.","author":"Bill Bryson"},
  "217":
        {"quote":"Computer science education cannot make anybody an expert programmer any more than studying brushes and pigment can make somebody an expert painter.","author":"Eric Raymond"},
  "218":
        {"quote":"A programmer is a person who passes as an exacting expert on the basis of being able to turn out, after innumerable punching, an infinite series of incomprehensive answers calculated with micrometric precisions from vague assumptions based on debatable figures taken from inconclusive documents and carried out on instruments of problematical accuracy by persons of dubious reliability and questionable mentality for the avowed purpose of annoying and confounding a hopelessly defenseless department that was unfortunate enough to ask for the information in the first place.","author":"IEEE Grid newsmagazine"},
  "219":
        {"quote":"A hacker on a roll may be able to produce–in a period of a few months–something that a small development group (say, 7-8 people) would have a hard time getting together over a year. IBM used to report that certain programmers might be as much as 100 times as productive as other workers, or more.","author":"Peter Seebach"},
  "220":
        {"quote":"The best programmers are not marginally better than merely good ones. They are an order-of-magnitude better, measured by whatever standard: conceptual creativity, speed, ingenuity of design, or problem-solving ability.","author":"Randall E. Stross"},
  "221":
        {"quote":"A great lathe operator commands several times the wage of an average lathe operator, but a great writer of software code is worth 10,000 times the price of an average software writer.","author":"Bill Gates"},
  "222":
        {"quote":"Don’t worry if it doesn’t work right. If everything did, you’d be out of a job.","author":"Mosher’s Law of Software Engineering"},
  "223":
        {"quote":"Measuring programming progress by lines of code is like measuring aircraft building progress by weight.","author":"Bill Gates"},
  "224":
        {"quote":"Writing code has a place in the human hierarchy worth somewhere above grave robbing and beneath managing.","author":"Gerald Weinberg"},
  "225":
        {"quote":"First learn computer science and all the theory. Next develop a programming style. Then forget all that and just hack.","author":"George Carrette"},
  "226":
        {"quote":"First, solve the problem. Then, write the code.","author":"John Johnson"},
  "227":
        {"quote":"Optimism is an occupational hazard of programming; feedback is the treatment.","author":"Kent Beck"},
  "228":
        {"quote":"To iterate is human, to recurse divine.","author":"L. Peter Deutsch"},
  "229":
        {"quote":"The best thing about a boolean is even if you are wrong, you are only off by a bit.","author":"Anonymous"},
  "230":
        {"quote":"Should array indices start at 0 or 1? My compromise of 0.5 was rejected without, I thought, proper consideration.","author":"Stan Kelly-Bootle"},
  "231":
        {"quote":"There are only two kinds of programming languages: those people always bitch about and those nobody uses.","author":"Bjarne Stroustrup"},
  "232":
        {"quote":"PHP is a minor evil perpetrated and created by incompetent amateurs, whereas Perl is a great and insidious evil perpetrated by skilled but perverted professionals.","author":"Jon Ribbens"},
  "233":
        {"quote":"The use of COBOL cripples the mind; its teaching should therefore be regarded as a criminal offense.","author":"E.W. Dijkstra"},
  "234":
        {"quote":"It is practically impossible to teach good programming style to students that have had prior exposure to BASIC. As potential programmers, they are mentally mutilated beyond hope of regeneration.","author":"E. W. Dijkstra"},
  "235":
        {"quote":"I think Microsoft named .Net so it wouldn’t show up in a Unix directory listing.","author":"Oktal"},
  "236":
        {"quote":"There is no programming language–no matter how structured–that will prevent programmers from making bad programs.","author":"Larry Flon"},
  "237":
        {"quote":"Computer language design is just like a stroll in the park. Jurassic Park, that is.","author":"Larry Wall"},
  "238":
        {"quote":"Fifty years of programming language research, and we end up with C++?","author":"Richard A. O’Keefe"},
  "239":
        {"quote":"Writing in C or C++ is like running a chain saw with all the safety guards removed.","author":"Bob Gray"},
  "240":
        {"quote":"In C++ it’s harder to shoot yourself in the foot, but when you do, you blow off your whole leg.","author":"Bjarne Stroustrup"},
  "241":
        {"quote":"C++ : Where friends have access to your private members.","author":"Gavin Russell Baker"},
  "242":
        {"quote":"One of the main causes of the fall of the Roman Empire was that–lacking zero–they had no way to indicate successful termination of their C programs.","author":"Robert Firth"},
  "243":
        {"quote":"Java is, in many ways, C++–.","author":"Michael Feldman"},
  "244":
        {"quote":"Fine, Java MIGHT be a good example of what a programming language should be like. But Java applications are good examples of what applications SHOULDN’T be like.","author":"pixadel"},
  "245":
        {"quote":"If Java had true garbage collection, most programs would delete themselves upon execution.","author":"Robert Sewell"},
  "246":
        {"quote":"The only people who have anything to fear from free software are those whose products are worth even less.","author":"David Emery"},
  "247":
        {"quote":"Good code is its own best documentation.","author":"Steve McConnell"},
  "248":
        {"quote":"Any code of your own that you haven’t looked at for six or more months might as well have been written by someone else.","author":"Eagleson’s Law"},
  "249":
        {"quote":"The first 90% of the code accounts for the first 90% of the development time. The remaining 10% of the code accounts for the other 90% of the development time.","author":"Tom Cargill"},
  "250":
        {"quote":"Good programmers use their brains, but good guidelines save us having to think out every case.","author":"Francis Glassborow"},
  "251":
        {"quote":"In software, we rarely have meaningful requirements. Even if we do, the only measure of success that matters is whether our solution solves the customer’s shifting idea of what their problem is.","author":"Jeff Atwood"},
  "252":
        {"quote":"Considering the current sad state of our computer programs, software development is clearly still a black art, and cannot yet be called an engineering discipline.","author":"Bill Clinton"},
  "253":
        {"quote":"You can’t have great software without a great team, and most software teams behave like dysfunctional families.","author":"Jim McCarthy"},
  "254":
        {"quote":"As soon as we started programming, we found to our surprise that it wasn’t as easy to get programs right as we had thought. Debugging had to be discovered. I can remember the exact instant when I realized that a large part of my life from then on was going to be spent in finding mistakes in my own programs.","author":"Maurice Wilkes discovers debugging, 1949"},
  "255":
        {"quote":"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are–by definition–not smart enough to debug it.","author":"Brian Kernighan"},
  "256":
        {"quote":"If debugging is the process of removing bugs, then programming must be the process of putting them in.","author":"Edsger W. Dijkstra"},
  "257":
        {"quote":"I don’t care if it works on your machine! We are not shipping your machine!","author":"Vidiu Platon"},
  "258":
        {"quote":"There are two ways to write error-free programs; only the third one works.","author":"Alan J. Perlis"},
  "259":
        {"quote":"You can either have software quality or you can have pointer arithmetic, but you cannot have both at the same time.","author":"Bertrand Meyer"},
  "260":
        {"quote":"If McDonalds were run like a software company, one out of every hundred Big Macs would give you food poisoning, and the response would be, ‘We’re sorry, here’s a coupon for two more.","author":"Mark Minasi"},
  "261":
        {"quote":"Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.","author":"Martin Golding"},
  "262":
        {"quote":"To err is human, but to really foul things up you need a computer.","author":"Paul Ehrlich"},
  "263":
        {"quote":"A computer lets you make more mistakes faster than any invention in human history–with the possible exceptions of handguns and tequila.","author":"Mitch Radcliffe"},
  "264":
        {"quote":"Everything that can be invented has been invented.","author":"Charles H. Duell, Commissioner, U.S. Office of Patents, 1899"},
  "265":
        {"quote":"I think there’s a world market for about 5 computers.","author":"Thomas J. Watson, Chairman of the Board, IBM, circa 1948"},
  "266":
        {"quote":"It would appear that we have reached the limits of what it is possible to achieve with computer technology, although one should be careful with such statements, as they tend to sound pretty silly in 5 years.","author":"John Von Neumann, circa 1949"},
  "267":
        {"quote":"But what is it good for?","author":"Engineer at the Advanced Computing Systems Division of IBM, commenting on the microchip, 1968"},
  "268":
        {"quote":"There is no reason for any individual to have a computer in his home.","author":"Ken Olson, President, Digital Equipment Corporation, 1977"},
  "269":
        {"quote":"640K ought to be enough for anybody.","author":"Bill Gates, 1981"},
  "270":
        {"quote":"Windows NT addresses 2 Gigabytes of RAM, which is more than any application will ever need.","author":"Microsoft, on the development of Windows NT, 1992"},
  "271":
        {"quote":"We will never become a truly paper-less society until the Palm Pilot folks come out with WipeMe 1.0.","author":"Andy Pierson"},
  "272":
        {"quote":"If it keeps up, man will atrophy all his limbs but the push-button finger.","author":"Frank Lloyd Wright"}
}