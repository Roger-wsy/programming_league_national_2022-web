const faq = [
  {
    question: "Who is allowed to participate?",
    answer: [
      "●	For the Open Category, participation is open to undergraduate students from public and private universities in Malaysia.",
      "●	For the Closed Category, participation is open to first-year Universiti Malaya students only.",
    ],
  },
  {
    question: "How can I apply?",
    answer: [
      "Kindly register through the official Programming League National 2022 Registration Form. ",
    ],
  },
  {
    question: "When can I register?",
    answer: [
      "The registration form will be open from 21st February 2022 (12:00 p.m.) until 13th March 2022 (11:59 p.m). Stay tuned on our social media accounts to get the latest updates.",
    ],
  },
  {
    question: "Is there any registration fee?",
    answer: [
      "Yes. Participants are required to pay RM15 per team as a commitment fee.",
    ],
  },
  {
    question:
      "Can first-year Universiti Malaya students enter the Open Category?",
    answer: [
      "You may enter the Open Category, however we encourage you to enter the Closed Category instead as this category is made to accommodate your experience and knowledge on fundamentals of programming.",
    ],
  },
  {
    question: "How many members per team?",
    answer: [
      "Please be reminded that only teams of the exact three (3) members are accepted to join the competition. ",
    ],
  },
  {
    question: "Can I join the competition without a team?",
    answer: [
      "No, the contest strictly allows a team of three (3) members to register for this event. ",
    ],
  },
  {
    question: "Must all the team members come from the same university?",
    answer: [
      "For the Open category, all three (3) members can come from different universities. For the Closed Category, all three (3) members must be first-year students from Universiti Malaya.",
    ],
  },
  {
    question: "What if I can’t find teammates?",
    answer: [
      "You can find potential teammates through the official Programming League National 2022 Padlet Dashboard <a href='https://padlet.com/pln2022/88uzxbtfaq6hb9ir' target='_blank' rel='noopener noreferrer'> here</a>. Don’t forget to introduce yourself to start connecting with other students!",
    ],
  },
  {
    question: "What programming languages can we use?",
    answer: [
      `The following language are only available languages for the problems from the contest:
●	GNU GCC C11 5.1.0
●	Clang++17 Diagnostics
●	GNU G++14 6.4.0
●	GNU G++17 7.3.0
●	GNU G++20 11.2.0 (64 bit, winilibs)
●	Microsoft Visual C++ 2017
●	GNU G++17 9.2.0 (64 bit, msys2)
●	Java 11.0.6
●	Java 1.8.0_241
●	Python 2.7.18
●	Python 3.8.10
●	PyPy 2.7 (7.3.0)
●	PyPy 3.7 (7.3.0)
●	PyPy 3.7 (7.3.5, 64 bit)
●	Javascript V8 4.8.0
●	Node.js 12.16.3
`,  
    ],
  },
  {
    question: "What programming tools can we use?",
    answer: [
      `IDEs configured for the contest are as follows:
●	IntelliJ (IDEA Community Edition version 2021.3.2) with Open JDK11.4
●	Visual Studio Code(Version 1.64) with JavaScript V8 4.8.0
●	Pycharm Community Edition Python IDE (version 2021.3.2) with CPython 3.8.10
●	Code::Blocks (version 20.03) with C++17 (GCC 9.2)
`,
    ],
  },
  {
    question: "Will there be any offline documentation provided?",
    answer: [
      `Yes, the offline documentations available during the final round competition are:
●	JDK JavaDocs
●	C++ STL docs
●	Python 3.8.10 documentation
●	JavaScript devdocs
`,
    ],
  },
  {
    question: "What are the computer and technical requirements?",
    answer: [
      "The team is free to use any programming languages permitted by the contest. All teams are expected to prepare their own computers for the online preliminary round. As for the final round, each team is obliged to use only one (1) computer provided by the organiser.",
    ],
  },
  {
    question: "How many rounds are there in total?",
    answer: [
      "Both open and closed categories will have two rounds - the preliminary and the final round. The top twenty-five(25) teams from Open Category and top eight(8) teams from Closed Category of the preliminary round will proceed to the final round.",
    ],
  },
  {
    question: "What is the format of the competition? ",
    answer: [
      "●	The competition is a team contest.",
      "●	Participants will receive a pdf file containing the competition questions.",
      "●	There will be 5 questions for the online preliminary round (2 hours) and 10 questions for the final round (5 hours), which are of different difficulty levels and mostly algorithmic in nature.",
    ],
  },
  {
    question: "How will the teams be scored?",
    answer: [
      "●	Scoring is based first on the number of problems solved (the more the better)",
      "●	In case of a tie, the total time for all accepted submissions is taken into account (the less the better);",
      "●	Each rejected submission adds 20 minutes of penalty time.",
      "●	The time of acceptance for the last problem solved matters if there is still a tie.",
    ],
  },
  {
    question:
      "How can I confirm that my team is chosen for the preliminary round?",
    answer: [
      "For the online preliminary round, any eligible team that has registered for the Programming League is eligible to join.",
    ],
  },
  {
    question: "Where will the preliminary round be held?",
    answer: [
      "The preliminary round will be held online through Codeforces. Contest participants are free to attempt the challenges from any geographical location within the time period of the online round.",
    ],
  },
  {
    question: "When is the preliminary round?",
    answer: [
      "It will be held on 19th March 2022. The event itinerary will be announced soon.",
    ],
  },
  {
    question: "When will the results of the preliminary round be announced?",
    answer: [
      "The preliminary round results will be announced on 20th March 2022. Note that the results published are final, you can check them out here at our official website, social media (Instagram, Facebook). Shortlisted teams will also receive an email of confirmation for the final round of the contest.",
    ],
  },
  {
    question: "How can I confirm that my team is chosen for the final round?",
    answer: [
      "You will receive an email within 3 days of the preliminary round. You may also check on our social media site for the finalist announcement.",
    ],
  },
  {
    question: "Where will the final round be held?",
    answer: [
      `Open Category: Physical at Faculty of Computer Science and Information Technology, Universiti Malaya
\nClosed Category: Online
  `,
    ],
  },
  {
    question: "When is the final round?",
    answer: [
      "The final round is a one-day event that will be held on 2nd April 2022. The event itinerary will be announced soon.",
    ],
  },
  {
    question: "Are travel and accommodation fees covered?",
    answer: [
      "Travel and accommodation fees will not be provided for the participants. However, you may contact us regarding accommodation booking at UM.",
    ],
  },
  {
    question: "If my team is unable to be present physically in the final round, is there any other possible arrangement?",
    answer: [
      "We are sorry to inform you that this action will be counted as withdrawal from the competition and teams with lower ranking will be offered the chance to the final round. The purpose of having a physical final round is to ensure the fairness of the competition.",
    ],
  },
  {
    question: "When will the results of the final round be announced?",
    answer: [
      "The results of the final round will be announced on the same day during the closing ceremony.",
    ],
  },
  {
    question:
      "I am new to competitive programming. Can you briefly explain how the competition will run?",
    answer: [
      "The timer starts counting down and the judging system is open for submissions as soon as the competition starts. Rack your brains to prepare and submit your solutions to the exhilarating challenges! The shorter the time taken to solve the challenges, the more credits you will get, but bear in mind that there will be twenty (20) minutes of penalty time induced for each rejected submission, so think twice before you hand in your magnum opus. All the best!",
    ],
  },
  {
    question: "What are the resources that I can practice with?",
    answer: [
      `Rest assured, we got you a list of reputable websites where you can dive in and chug down the programming practises prepared and tailored to a variety of topics.

●	uHunt <a href="https://uhunt.onlinejudge.org" target="_blank" rel="noopener noreferrer">https://uhunt.onlinejudge.org</a>
●	HackerRank <a href="https://www.hackerrank.com" target="_blank" rel="noopener noreferrer">https://www.hackerrank.com</a>
●	CodeChef <a href="https://www.codechef.com" target="_blank" rel="noopener noreferrer">https://www.codechef.com</a>
●	Codeforces <a href="https://codeforces.com" target="_blank" rel="noopener noreferrer">https://codeforces.com</a>
●	HackerEarth <a href="https://www.hackerearth.com" target="_blank" rel="noopener noreferrer">https://www.hackerearth.com</a>
●	Topcoder <a href="https://www.topcoder.com/challenges" target="_blank" rel="noopener noreferrer">https://www.topcoder.com/challenges</a>
●	HackerBlocks <a href="https://hack.codingblocks.com" target="_blank" rel="noopener noreferrer">https://hack.codingblocks.com</a>
●	CSAcademy <a href="https://csacademy.com" target="_blank" rel="noopener noreferrer">https://csacademy.com</a>
`,
    ],
  },
  {
    question: "Will there be any workshops?",
    answer: [
      "We are delighted to inform you that we will be having our Competitive Programming Workshop on 5th March 2022. The workshop will be held virtually by us to equip the participants with the essential fundamentals of competitive programming. Stay tuned to our social media accounts to get latest uodate on the workshops.",
    ],
  },
  {
    question: "What are the prizes my team will get if we win?",
    answer: [
      `Open Category
1st place: MYR 5000.00
2nd place: MYR 3000.00
3rd place: MYR 2000.00
`,
      `Closed Category
1st place: MYR 1000.00
2nd place: MYR 800.00
3rd place: MYR 500.00
`,
    ],
  },
  {
    question: "Will I get certificates for joining this competition?",
    answer: [
      "Yes! E-certificates will be awarded to all participants based on achievements.",
    ],
  },
  {
    question: "When will I get the e-certificates?",
    answer: [
      "They will be issued and sent to participants’ email within two weeks after the final round.",
    ],
  },
];

export default faq;
