import { ArticlesType } from "@/lib/types/articles/types";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const articles: ArticlesType[] = [
    {
      id: 1,
      author: "Jakob Gr\u00F8nberg",
      job: "Artist",
      city: "Berlin",
      avatar: "/images/authors/jakob-gr\u00F8nberg.jpg",
      imgAlt:
        "A black and white headshot of a man in his late thirties smiling at the camera with combed over hair and stubble",
      slug: "jakob-gr\u00F8nberg",
      biography: {
        summary:
          "Jakob Grønberg is a distinguished writer and co-founder of the fictional magazine, Fyrre, based in Berlin. Known for his profound writings on street art and existentialism, Grønberg has been recognized with numerous awards for his contributions to the literary world. His work is characterized by a deep understanding of the intersection between art and philosophy.",
        body: "Jakob Grønberg, a Berlin native, has always been fascinated by the interplay between street art and existentialism. This interest led him to co-found Fyrre, a magazine that has become a platform for his insightful writings. His articles, often exploring the existential themes within street art, have garnered him a wide readership and critical acclaim. Grønberg's work extends beyond Fyrre. He has authored several books, further showcasing his ability to delve into complex philosophical concepts through the lens of street art. His unique writing style, marked by thoughtful analysis and vivid descriptions, has earned him numerous awards, solidifying his reputation as a leading voice in his field. In addition to his writing, Grønberg is an active participant in Berlin's street art community. His involvement allows him to stay connected with the evolving art scene, ensuring his writings remain relevant and informed. He often collaborates with artists, providing philosophical commentary on their work, and participates in local art events. Despite his success, Grønberg remains committed to his craft and his co-founded magazine, Fyrre. His dedication to exploring the intersection of street art and existentialism continues to captivate readers worldwide. His work, characterized by its depth and originality, is a testament to his passion for both street art and philosophy.",
      },
      articles: [
        {
          title: "Don't close your eyes",
          popular: false,
          description:
            "Eternal-return ascetic gains love passion zarathustra noble suicide intentions enlightenment grandeur deceptions mountains. Salvation noble ocean disgust deceptions society strong christianity merciful faithful play ocean suicide. Reason chaos endless revaluation mountains decieve hope. Snare gains joy noble reason law noble merciful grandeur dead. Good contradict play ubermensch truth abstract derive merciful marvelous strong ascetic.",
          date: "16 September 2023",
          read: "10 mins",
          label: "Art",
          img: "/images/articles/preview/dont-close-your-eyes.jpg",
          imgAlt:
            "A large mural of three abstract male faces next to one another, with the middle held with thumbs covering the eyelids and jagged lines running diagonally from top left to bottom right",
          slug: "dont-close-your-eyes",
          content: [
            {
              img: "/images/articles/single-post/dont-close-your-eyes.jpg",
              summary:
                "Sea virtues fearful snare passion good war prejudice. Law aversion eternal-return chaos decieve superiority convictions ideal ultimate free enlightenment. Free ascetic love oneself ultimate contradict transvaluation will christian. Dead mountains value holiest zarathustra god war pious. Oneself decrepit inexpedient victorious philosophy christian ocean virtues prejudice. Sea passion ocean victorious holiest depths. Contradict justice god pious convictions enlightenment moral good superiority abstract transvaluation.",
            },
            {
              section1:
                "Intentions depths fearful merciful will reason ubermensch intentions faith merciful insofar noble victorious. Marvelous deceptions passion society abstract play society evil superiority. Value oneself sea evil aversion ascetic. Depths abstract eternal-return zarathustra oneself ubermensch pious. Will pious reason faith contradict superiority.\n\nSuicide eternal-return self society decrepit christianity inexpedient ultimate christian zarathustra insofar ubermensch. Reason good reason grandeur will madness strong gains will self. Pinnacle spirit noble christian society superiority inexpedient intentions self contradict war.\n\nTransvaluation grandeur dead abstract dead joy spirit will victorious snare. Chaos dead morality depths value good war grandeur good. Contradict grandeur ultimate free prejudice hope ocean ocean right snare burying abstract selfish.\n\nMoral grandeur against spirit free snare madness salvation hope oneself inexpedient truth. Will virtues madness madness revaluation dead battle self intentions good madness. Play merciful christian zarathustra salvation spirit spirit ascetic.\n\nHorror overcome ultimate christianity love intentions grandeur fearful virtues zarathustra. Noble society decrepit strong of dead. Intentions inexpedient right depths ascetic. Pious law free god faithful mountains spirit salvation.\n\nGod aversion convictions war depths superiority inexpedient of sea. Superiority deceptions god horror virtues free horror suicide law marvelous fearful eternal-return superiority ultimate. Marvelous will pinnacle chaos hope prejudice noble fearful play depths god ideal law. Ocean virtues holiest justice gains burying salvation horror self strong joy burying. Merciful suicide good abstract selfish.",
            },
            {
              quote: [
                "The individual has always had to struggle to keep from being overwhelmed by the tribe. If you try it, you will be lonely often, and sometimes frightened. But no price is too high to pay for the privilege of owning yourself.",
                "Friedrich Nietzsche",
              ],
            },
            {
              summary2:
                "Ocean prejudice superiority spirit philosophy christianity suicide grandeur. Derive selfish christianity reason eternal-return overcome enlightenment. Against noble christianity victorious intentions aversion evil convictions disgust.",
            },
            {
              section2:
                "Endless ubermensch of overcome will. Spirit virtues victorious contradict strong selfish snare endless war endless contradict. Abstract selfish against derive decrepit convictions ideal victorious decrepit society moral. Ascetic virtues inexpedient virtues ubermensch. Salvation love virtues intentions ascetic burying law justice salvation inexpedient deceptions noble virtues snare. Revaluation evil disgust law transvaluation. Depths free ultimate victorious against.\n\nContradict ultimate of philosophy marvelous zarathustra convictions pinnacle dead sea. Insofar dead christian faith depths. Prejudice enlightenment overcome oneself abstract justice free ultimate good ascetic justice. Ascetic endless deceptions merciful dead faith god self.",
            },
          ],
        },
        {
          title: "Hope dies last",
          popular: true,
          popularity: 2,
          description:
            "Eternal-return ascetic gains love passion zarathustra noble suicide intentions enlightenment grandeur deceptions mountains. Salvation noble ocean disgust deceptions society strong christianity merciful faithful play ocean suicide. Reason chaos endless revaluation mountains decieve hope. Snare gains joy noble reason law noble merciful grandeur dead. Good contradict play ubermensch truth abstract derive merciful marvelous strong ascetic.",
          date: "16 March 2022",
          read: "10 mins",
          label: "Art",
          img: "/images/articles/preview/hope-dies-last.jpg",
          imgAlt:
            "A black and white outline-styled sketch of a pensive woman with long, curly hair looking at the viewer, against a backdrop of dark water waves",
          slug: "hope-dies-last",
          content: [
            {
              img: "/images/articles/single-post/hope-dies-last.jpg",
              summary:
                "Sea virtues fearful snare passion good war prejudice. Law aversion eternal-return chaos decieve superiority convictions ideal ultimate free enlightenment. Free ascetic love oneself ultimate contradict transvaluation will christian. Dead mountains value holiest zarathustra god war pious. Oneself decrepit inexpedient victorious philosophy christian ocean virtues prejudice. Sea passion ocean victorious holiest depths. Contradict justice god pious convictions enlightenment moral good superiority abstract transvaluation.",
            },
            {
              section1:
                "Intentions depths fearful merciful will reason ubermensch intentions faith merciful insofar noble victorious. Marvelous deceptions passion society abstract play society evil superiority. Value oneself sea evil aversion ascetic. Depths abstract eternal-return zarathustra oneself ubermensch pious. Will pious reason faith contradict superiority.\n\nSuicide eternal-return self society decrepit christianity inexpedient ultimate christian zarathustra insofar ubermensch. Reason good reason grandeur will madness strong gains will self. Pinnacle spirit noble christian society superiority inexpedient intentions self contradict war.\n\nTransvaluation grandeur dead abstract dead joy spirit will victorious snare. Chaos dead morality depths value good war grandeur good. Contradict grandeur ultimate free prejudice hope ocean ocean right snare burying abstract selfish.\n\nMoral grandeur against spirit free snare madness salvation hope oneself inexpedient truth. Will virtues madness madness revaluation dead battle self intentions good madness. Play merciful christian zarathustra salvation spirit spirit ascetic.\n\nHorror overcome ultimate christianity love intentions grandeur fearful virtues zarathustra. Noble society decrepit strong of dead. Intentions inexpedient right depths ascetic. Pious law free god faithful mountains spirit salvation.\n\nGod aversion convictions war depths superiority inexpedient of sea. Superiority deceptions god horror virtues free horror suicide law marvelous fearful eternal-return superiority ultimate. Marvelous will pinnacle chaos hope prejudice noble fearful play depths god ideal law. Ocean virtues holiest justice gains burying salvation horror self strong joy burying. Merciful suicide good abstract selfish.",
            },
            {
              quote: [
                "The individual has always had to struggle to keep from being overwhelmed by the tribe. If you try it, you will be lonely often, and sometimes frightened. But no price is too high to pay for the privilege of owning yourself.",
                "Friedrich Nietzsche",
              ],
            },
            {
              summary2:
                "Ocean prejudice superiority spirit philosophy christianity suicide grandeur. Derive selfish christianity reason eternal-return overcome enlightenment. Against noble christianity victorious intentions aversion evil convictions disgust.",
            },
            {
              section2:
                "Endless ubermensch of overcome will. Spirit virtues victorious contradict strong selfish snare endless war endless contradict. Abstract selfish against derive decrepit convictions ideal victorious decrepit society moral. Ascetic virtues inexpedient virtues ubermensch. Salvation love virtues intentions ascetic burying law justice salvation inexpedient deceptions noble virtues snare. Revaluation evil disgust law transvaluation. Depths free ultimate victorious against.\n\nContradict ultimate of philosophy marvelous zarathustra convictions pinnacle dead sea. Insofar dead christian faith depths. Prejudice enlightenment overcome oneself abstract justice free ultimate good ascetic justice. Ascetic endless deceptions merciful dead faith god self.",
            },
          ],
        },
        {
          title: "The best art museums",
          popular: false,
          description:
            "Eternal-return ascetic gains love passion zarathustra noble suicide intentions enlightenment grandeur deceptions mountains. Salvation noble ocean disgust deceptions society strong christianity merciful faithful play ocean suicide. Reason chaos endless revaluation mountains decieve hope. Snare gains joy noble reason law noble merciful grandeur dead. Good contradict play ubermensch truth abstract derive merciful marvelous strong ascetic.",
          date: "16 March 2022",
          read: "10 mins",
          label: "Sculptures",
          img: "/images/articles/preview/the-best-art-museums.jpg",
          imgAlt:
            "A close-up of two sketched faces, one bald and staring at something to the left with large, piercing eyes and another in the foreground with its mouth open, wailing, and its eyes closed",
          slug: "the-best-art-museums",
          content: [
            {
              img: "/images/articles/single-post/the-best-art-museums.jpg",
              summary:
                "Sea virtues fearful snare passion good war prejudice. Law aversion eternal-return chaos decieve superiority convictions ideal ultimate free enlightenment. Free ascetic love oneself ultimate contradict transvaluation will christian. Dead mountains value holiest zarathustra god war pious. Oneself decrepit inexpedient victorious philosophy christian ocean virtues prejudice. Sea passion ocean victorious holiest depths. Contradict justice god pious convictions enlightenment moral good superiority abstract transvaluation.",
            },
            {
              section1:
                "Intentions depths fearful merciful will reason ubermensch intentions faith merciful insofar noble victorious. Marvelous deceptions passion society abstract play society evil superiority. Value oneself sea evil aversion ascetic. Depths abstract eternal-return zarathustra oneself ubermensch pious. Will pious reason faith contradict superiority.\n\nSuicide eternal-return self society decrepit christianity inexpedient ultimate christian zarathustra insofar ubermensch. Reason good reason grandeur will madness strong gains will self. Pinnacle spirit noble christian society superiority inexpedient intentions self contradict war.\n\nTransvaluation grandeur dead abstract dead joy spirit will victorious snare. Chaos dead morality depths value good war grandeur good. Contradict grandeur ultimate free prejudice hope ocean ocean right snare burying abstract selfish.\n\nMoral grandeur against spirit free snare madness salvation hope oneself inexpedient truth. Will virtues madness madness revaluation dead battle self intentions good madness. Play merciful christian zarathustra salvation spirit spirit ascetic.\n\nHorror overcome ultimate christianity love intentions grandeur fearful virtues zarathustra. Noble society decrepit strong of dead. Intentions inexpedient right depths ascetic. Pious law free god faithful mountains spirit salvation.\n\nGod aversion convictions war depths superiority inexpedient of sea. Superiority deceptions god horror virtues free horror suicide law marvelous fearful eternal-return superiority ultimate. Marvelous will pinnacle chaos hope prejudice noble fearful play depths god ideal law. Ocean virtues holiest justice gains burying salvation horror self strong joy burying. Merciful suicide good abstract selfish.",
            },
            {
              quote: [
                "The individual has always had to struggle to keep from being overwhelmed by the tribe. If you try it, you will be lonely often, and sometimes frightened. But no price is too high to pay for the privilege of owning yourself.",
                "Friedrich Nietzsche",
              ],
            },
            {
              summary2:
                "Ocean prejudice superiority spirit philosophy christianity suicide grandeur. Derive selfish christianity reason eternal-return overcome enlightenment. Against noble christianity victorious intentions aversion evil convictions disgust.",
            },
            {
              section2:
                "Endless ubermensch of overcome will. Spirit virtues victorious contradict strong selfish snare endless war endless contradict. Abstract selfish against derive decrepit convictions ideal victorious decrepit society moral. Ascetic virtues inexpedient virtues ubermensch. Salvation love virtues intentions ascetic burying law justice salvation inexpedient deceptions noble virtues snare. Revaluation evil disgust law transvaluation. Depths free ultimate victorious against.\n\nContradict ultimate of philosophy marvelous zarathustra convictions pinnacle dead sea. Insofar dead christian faith depths. Prejudice enlightenment overcome oneself abstract justice free ultimate good ascetic justice. Ascetic endless deceptions merciful dead faith god self.",
            },
          ],
        },
        {
          title: "The devil is the details",
          popular: false,
          description:
            "Eternal-return ascetic gains love passion zarathustra noble suicide intentions enlightenment grandeur deceptions mountains. Salvation noble ocean disgust deceptions society strong christianity merciful faithful play ocean suicide. Reason chaos endless revaluation mountains decieve hope. Snare gains joy noble reason law noble merciful grandeur dead. Good contradict play ubermensch truth abstract derive merciful marvelous strong ascetic.",
          date: "16 March 2022",
          read: "10 mins",
          label: "Art",
          img: "/images/articles/preview/the-devil-is-the-details.jpg",
          imgAlt:
            "A sketch of a Victorian woman sitting at a desk looking at a sheet of paper, dressed in long dark garments, holding a quill in her right hand and a collection of papers in her left, with the numbers 1882 in the bottom left and a figure with a heart-shaped head in between the second and third numbers",
          slug: "the-devil-is-the-details",
          content: [
            {
              img: "/images/articles/single-post/the-devil-is-the-details.jpg",
              summary:
                "Sea virtues fearful snare passion good war prejudice. Law aversion eternal-return chaos decieve superiority convictions ideal ultimate free enlightenment. Free ascetic love oneself ultimate contradict transvaluation will christian. Dead mountains value holiest zarathustra god war pious. Oneself decrepit inexpedient victorious philosophy christian ocean virtues prejudice. Sea passion ocean victorious holiest depths. Contradict justice god pious convictions enlightenment moral good superiority abstract transvaluation.",
            },
            {
              section1:
                "Intentions depths fearful merciful will reason ubermensch intentions faith merciful insofar noble victorious. Marvelous deceptions passion society abstract play society evil superiority. Value oneself sea evil aversion ascetic. Depths abstract eternal-return zarathustra oneself ubermensch pious. Will pious reason faith contradict superiority.\n\nSuicide eternal-return self society decrepit christianity inexpedient ultimate christian zarathustra insofar ubermensch. Reason good reason grandeur will madness strong gains will self. Pinnacle spirit noble christian society superiority inexpedient intentions self contradict war.\n\nTransvaluation grandeur dead abstract dead joy spirit will victorious snare. Chaos dead morality depths value good war grandeur good. Contradict grandeur ultimate free prejudice hope ocean ocean right snare burying abstract selfish.\n\nMoral grandeur against spirit free snare madness salvation hope oneself inexpedient truth. Will virtues madness madness revaluation dead battle self intentions good madness. Play merciful christian zarathustra salvation spirit spirit ascetic.\n\nHorror overcome ultimate christianity love intentions grandeur fearful virtues zarathustra. Noble society decrepit strong of dead. Intentions inexpedient right depths ascetic. Pious law free god faithful mountains spirit salvation.\n\nGod aversion convictions war depths superiority inexpedient of sea. Superiority deceptions god horror virtues free horror suicide law marvelous fearful eternal-return superiority ultimate. Marvelous will pinnacle chaos hope prejudice noble fearful play depths god ideal law. Ocean virtues holiest justice gains burying salvation horror self strong joy burying. Merciful suicide good abstract selfish.",
            },
            {
              quote: [
                "The individual has always had to struggle to keep from being overwhelmed by the tribe. If you try it, you will be lonely often, and sometimes frightened. But no price is too high to pay for the privilege of owning yourself.",
                "Friedrich Nietzsche",
              ],
            },
            {
              summary2:
                "Ocean prejudice superiority spirit philosophy christianity suicide grandeur. Derive selfish christianity reason eternal-return overcome enlightenment. Against noble christianity victorious intentions aversion evil convictions disgust.",
            },
            {
              section2:
                "Endless ubermensch of overcome will. Spirit virtues victorious contradict strong selfish snare endless war endless contradict. Abstract selfish against derive decrepit convictions ideal victorious decrepit society moral. Ascetic virtues inexpedient virtues ubermensch. Salvation love virtues intentions ascetic burying law justice salvation inexpedient deceptions noble virtues snare. Revaluation evil disgust law transvaluation. Depths free ultimate victorious against.\n\nContradict ultimate of philosophy marvelous zarathustra convictions pinnacle dead sea. Insofar dead christian faith depths. Prejudice enlightenment overcome oneself abstract justice free ultimate good ascetic justice. Ascetic endless deceptions merciful dead faith god self.",
            },
          ],
        },
        {
          title: "An indestructible hope",
          popular: false,
          description:
            "Eternal-return ascetic gains love passion zarathustra noble suicide intentions enlightenment grandeur deceptions mountains. Salvation noble ocean disgust deceptions society strong christianity merciful faithful play ocean suicide. Reason chaos endless revaluation mountains decieve hope. Snare gains joy noble reason law noble merciful grandeur dead. Good contradict play ubermensch truth abstract derive merciful marvelous strong ascetic.",
          date: "16 March 2022",
          read: "10 mins",
          label: "Art",
          img: "/images/articles/preview/an-indestructible-hope.jpg",
          imgAlt:
            "A detailed black and white sketch of an eye featuring a series of smudge trails rolling down, inside a triangular shape with faces of women along the outside",
          slug: "an-indestructible-hope",
          content: [
            {
              img: "/images/articles/single-post/an-indestructible-hope.jpg",
              summary:
                "Sea virtues fearful snare passion good war prejudice. Law aversion eternal-return chaos decieve superiority convictions ideal ultimate free enlightenment. Free ascetic love oneself ultimate contradict transvaluation will christian. Dead mountains value holiest zarathustra god war pious. Oneself decrepit inexpedient victorious philosophy christian ocean virtues prejudice. Sea passion ocean victorious holiest depths. Contradict justice god pious convictions enlightenment moral good superiority abstract transvaluation.",
            },
            {
              section1:
                "Intentions depths fearful merciful will reason ubermensch intentions faith merciful insofar noble victorious. Marvelous deceptions passion society abstract play society evil superiority. Value oneself sea evil aversion ascetic. Depths abstract eternal-return zarathustra oneself ubermensch pious. Will pious reason faith contradict superiority.\n\nSuicide eternal-return self society decrepit christianity inexpedient ultimate christian zarathustra insofar ubermensch. Reason good reason grandeur will madness strong gains will self. Pinnacle spirit noble christian society superiority inexpedient intentions self contradict war.\n\nTransvaluation grandeur dead abstract dead joy spirit will victorious snare. Chaos dead morality depths value good war grandeur good. Contradict grandeur ultimate free prejudice hope ocean ocean right snare burying abstract selfish.\n\nMoral grandeur against spirit free snare madness salvation hope oneself inexpedient truth. Will virtues madness madness revaluation dead battle self intentions good madness. Play merciful christian zarathustra salvation spirit spirit ascetic.\n\nHorror overcome ultimate christianity love intentions grandeur fearful virtues zarathustra. Noble society decrepit strong of dead. Intentions inexpedient right depths ascetic. Pious law free god faithful mountains spirit salvation.\n\nGod aversion convictions war depths superiority inexpedient of sea. Superiority deceptions god horror virtues free horror suicide law marvelous fearful eternal-return superiority ultimate. Marvelous will pinnacle chaos hope prejudice noble fearful play depths god ideal law. Ocean virtues holiest justice gains burying salvation horror self strong joy burying. Merciful suicide good abstract selfish.",
            },
            {
              quote: [
                "The individual has always had to struggle to keep from being overwhelmed by the tribe. If you try it, you will be lonely often, and sometimes frightened. But no price is too high to pay for the privilege of owning yourself.",
                "Friedrich Nietzsche",
              ],
            },
            {
              summary2:
                "Ocean prejudice superiority spirit philosophy christianity suicide grandeur. Derive selfish christianity reason eternal-return overcome enlightenment. Against noble christianity victorious intentions aversion evil convictions disgust.",
            },
            {
              section2:
                "Endless ubermensch of overcome will. Spirit virtues victorious contradict strong selfish snare endless war endless contradict. Abstract selfish against derive decrepit convictions ideal victorious decrepit society moral. Ascetic virtues inexpedient virtues ubermensch. Salvation love virtues intentions ascetic burying law justice salvation inexpedient deceptions noble virtues snare. Revaluation evil disgust law transvaluation. Depths free ultimate victorious against.\n\nContradict ultimate of philosophy marvelous zarathustra convictions pinnacle dead sea. Insofar dead christian faith depths. Prejudice enlightenment overcome oneself abstract justice free ultimate good ascetic justice. Ascetic endless deceptions merciful dead faith god self.",
            },
          ],
        },
        {
          title: "Street art festival",
          popular: true,
          popularity: 1,
          description:
            "Eternal-return ascetic gains love passion zarathustra noble suicide intentions enlightenment grandeur deceptions mountains. Salvation noble ocean disgust deceptions society strong christianity merciful faithful play ocean suicide. Reason chaos endless revaluation mountains decieve hope. Snare gains joy noble reason law noble merciful grandeur dead. Good contradict play ubermensch truth abstract derive merciful marvelous strong ascetic.",
          date: "16 March 2022",
          read: "10 mins",
          label: "Street art",
          img: "/images/articles/preview/street-art-festival.jpg",
          imgAlt:
            "A mural of a young girl in a black hoodie on a tall face of a street building, looking at the viewer with her hands loosely clutching around the rim of her hood and neck, with long, dark, wavy hair flowing to the right (her perspective)",
          slug: "street-art-festival",
          content: [
            {
              img: "/images/articles/single-post/street-art-festival.jpg",
              summary:
                "Sea virtues fearful snare passion good war prejudice. Law aversion eternal-return chaos decieve superiority convictions ideal ultimate free enlightenment. Free ascetic love oneself ultimate contradict transvaluation will christian. Dead mountains value holiest zarathustra god war pious. Oneself decrepit inexpedient victorious philosophy christian ocean virtues prejudice. Sea passion ocean victorious holiest depths. Contradict justice god pious convictions enlightenment moral good superiority abstract transvaluation.",
            },
            {
              section1:
                "Intentions depths fearful merciful will reason ubermensch intentions faith merciful insofar noble victorious. Marvelous deceptions passion society abstract play society evil superiority. Value oneself sea evil aversion ascetic. Depths abstract eternal-return zarathustra oneself ubermensch pious. Will pious reason faith contradict superiority.\n\nSuicide eternal-return self society decrepit christianity inexpedient ultimate christian zarathustra insofar ubermensch. Reason good reason grandeur will madness strong gains will self. Pinnacle spirit noble christian society superiority inexpedient intentions self contradict war.\n\nTransvaluation grandeur dead abstract dead joy spirit will victorious snare. Chaos dead morality depths value good war grandeur good. Contradict grandeur ultimate free prejudice hope ocean ocean right snare burying abstract selfish.\n\nMoral grandeur against spirit free snare madness salvation hope oneself inexpedient truth. Will virtues madness madness revaluation dead battle self intentions good madness. Play merciful christian zarathustra salvation spirit spirit ascetic.\n\nHorror overcome ultimate christianity love intentions grandeur fearful virtues zarathustra. Noble society decrepit strong of dead. Intentions inexpedient right depths ascetic. Pious law free god faithful mountains spirit salvation.\n\nGod aversion convictions war depths superiority inexpedient of sea. Superiority deceptions god horror virtues free horror suicide law marvelous fearful eternal-return superiority ultimate. Marvelous will pinnacle chaos hope prejudice noble fearful play depths god ideal law. Ocean virtues holiest justice gains burying salvation horror self strong joy burying. Merciful suicide good abstract selfish.",
            },
            {
              quote: [
                "The individual has always had to struggle to keep from being overwhelmed by the tribe. If you try it, you will be lonely often, and sometimes frightened. But no price is too high to pay for the privilege of owning yourself.",
                "Friedrich Nietzsche",
              ],
            },
            {
              summary2:
                "Ocean prejudice superiority spirit philosophy christianity suicide grandeur. Derive selfish christianity reason eternal-return overcome enlightenment. Against noble christianity victorious intentions aversion evil convictions disgust.",
            },
            {
              section2:
                "Endless ubermensch of overcome will. Spirit virtues victorious contradict strong selfish snare endless war endless contradict. Abstract selfish against derive decrepit convictions ideal victorious decrepit society moral. Ascetic virtues inexpedient virtues ubermensch. Salvation love virtues intentions ascetic burying law justice salvation inexpedient deceptions noble virtues snare. Revaluation evil disgust law transvaluation. Depths free ultimate victorious against.\n\nContradict ultimate of philosophy marvelous zarathustra convictions pinnacle dead sea. Insofar dead christian faith depths. Prejudice enlightenment overcome oneself abstract justice free ultimate good ascetic justice. Ascetic endless deceptions merciful dead faith god self.",
            },
          ],
        },
        {
          title: "Through the eyes of street artists",
          popular: false,
          description:
            "Eternal-return ascetic gains love passion zarathustra noble suicide intentions enlightenment grandeur deceptions mountains. Salvation noble ocean disgust deceptions society strong christianity merciful faithful play ocean suicide. Reason chaos endless revaluation mountains decieve hope. Snare gains joy noble reason law noble merciful grandeur dead. Good contradict play ubermensch truth abstract derive merciful marvelous strong ascetic.",
          date: "16 March 2022",
          read: "10 mins",
          label: "Street art",
          img: "/images/articles/preview/through-the-eyes-of-street-artists.jpg",
          imgAlt:
            "A colorful patchwork of old, partly-torn posters on a wall, with various words interspersed across incl. 'theory', 'touache' and 'Adidas' with the brand logo in the bottom left, and the faces of two men with beards, one with sunglasses, and two young women ",
          slug: "through-the-eyes-of-street-artists",
          content: [
            {
              img: "/images/articles/single-post/through-the-eyes-of-street-artists.jpg",
              summary:
                "Sea virtues fearful snare passion good war prejudice. Law aversion eternal-return chaos decieve superiority convictions ideal ultimate free enlightenment. Free ascetic love oneself ultimate contradict transvaluation will christian. Dead mountains value holiest zarathustra god war pious. Oneself decrepit inexpedient victorious philosophy christian ocean virtues prejudice. Sea passion ocean victorious holiest depths. Contradict justice god pious convictions enlightenment moral good superiority abstract transvaluation.",
            },
            {
              section1:
                "Intentions depths fearful merciful will reason ubermensch intentions faith merciful insofar noble victorious. Marvelous deceptions passion society abstract play society evil superiority. Value oneself sea evil aversion ascetic. Depths abstract eternal-return zarathustra oneself ubermensch pious. Will pious reason faith contradict superiority.\n\nSuicide eternal-return self society decrepit christianity inexpedient ultimate christian zarathustra insofar ubermensch. Reason good reason grandeur will madness strong gains will self. Pinnacle spirit noble christian society superiority inexpedient intentions self contradict war.\n\nTransvaluation grandeur dead abstract dead joy spirit will victorious snare. Chaos dead morality depths value good war grandeur good. Contradict grandeur ultimate free prejudice hope ocean ocean right snare burying abstract selfish.\n\nMoral grandeur against spirit free snare madness salvation hope oneself inexpedient truth. Will virtues madness madness revaluation dead battle self intentions good madness. Play merciful christian zarathustra salvation spirit spirit ascetic.\n\nHorror overcome ultimate christianity love intentions grandeur fearful virtues zarathustra. Noble society decrepit strong of dead. Intentions inexpedient right depths ascetic. Pious law free god faithful mountains spirit salvation.\n\nGod aversion convictions war depths superiority inexpedient of sea. Superiority deceptions god horror virtues free horror suicide law marvelous fearful eternal-return superiority ultimate. Marvelous will pinnacle chaos hope prejudice noble fearful play depths god ideal law. Ocean virtues holiest justice gains burying salvation horror self strong joy burying. Merciful suicide good abstract selfish.",
            },
            {
              quote: [
                "The individual has always had to struggle to keep from being overwhelmed by the tribe. If you try it, you will be lonely often, and sometimes frightened. But no price is too high to pay for the privilege of owning yourself.",
                "Friedrich Nietzsche",
              ],
            },
            {
              summary2:
                "Ocean prejudice superiority spirit philosophy christianity suicide grandeur. Derive selfish christianity reason eternal-return overcome enlightenment. Against noble christianity victorious intentions aversion evil convictions disgust.",
            },
            {
              section2:
                "Endless ubermensch of overcome will. Spirit virtues victorious contradict strong selfish snare endless war endless contradict. Abstract selfish against derive decrepit convictions ideal victorious decrepit society moral. Ascetic virtues inexpedient virtues ubermensch. Salvation love virtues intentions ascetic burying law justice salvation inexpedient deceptions noble virtues snare. Revaluation evil disgust law transvaluation. Depths free ultimate victorious against.\n\nContradict ultimate of philosophy marvelous zarathustra convictions pinnacle dead sea. Insofar dead christian faith depths. Prejudice enlightenment overcome oneself abstract justice free ultimate good ascetic justice. Ascetic endless deceptions merciful dead faith god self.",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      author: "Louise Jensen",
      job: "Artist",
      city: "London",
      avatar: "/images/authors/louise-jensen.jpg",
      imgAlt:
        "A black and white headshot of a young girl in her mid-twenties with wide hooped earings and a sweater staring at the camera",
      slug: "louise-jensen",
      biography: {
        summary:
          "Louise Jensen is a Berlin-based writer renowned for her insightful articles on street art. She holds a Masters in Creative Writing and is a frequent contributor to the fictional magazine, Fyrre. Jensen's work is characterized by her unique perspective and deep understanding of urban art culture.",
        body: "Born in Berlin before moving to London at a young age, Louise Jensen developed a passion for street art at a young age. She pursued her interest academically, earning a Masters in Creative Writing, which further honed her ability to articulate her observations and insights into the world of street art. Jensen's writing career took off when she began contributing to the fictional magazine, Fyrre. Her articles, often featuring in-depth analyses of street art trends and artist profiles, quickly gained popularity for their depth and clarity. Jensen's work is not limited to Fyrre. She has also written several books, showcasing her versatility as a writer. Her writing style, characterized by vivid descriptions and a keen eye for detail, brings the vibrant world of street art to life for her readers. Jensen's work has been recognized for its originality and impact, making her a respected figure in the literary world. In addition to her writing, Jensen is actively involved in the street art community in Berlin. She often collaborates with artists, providing written commentary for their work, and participates in local art events. This hands-on involvement allows her to stay connected with the ever-evolving street art scene, ensuring her writing remains relevant and informed.Despite her success, Jensen remains dedicated to her craft. She continues to write for Fyrre and other publications, sharing her passion for street art with a global audience. Her commitment to her work and the art community in Berlin is a testament to her love for street art and her desire to share it with the world.",
      },
      articles: [
        {
          title: "The chains of our lives",
          popular: false,
          description:
            "Eternal-return ascetic gains love passion zarathustra noble suicide intentions enlightenment grandeur deceptions mountains. Salvation noble ocean disgust deceptions society strong christianity merciful faithful play ocean suicide. Reason chaos endless revaluation mountains decieve hope. Snare gains joy noble reason law noble merciful grandeur dead. Good contradict play ubermensch truth abstract derive merciful marvelous strong ascetic.",
          date: "16 September 2023",
          read: "10 mins",
          label: "Art",
          img: "/images/articles/preview/the-chains-of-our-lives.jpg",
          imgAlt:
            "A side-view of a sculpture of an elderly man emerging from a wall, with shackles on his left wrist and chains along the bricks as he looks outwards, with a barred window in the corner brick wall gap in the foreground",
          slug: "the-chains-of-our-lives",
          content: [
            {
              img: "/images/articles/single-post/the-chains-of-our-lives.jpg",
              summary:
                "Sea virtues fearful snare passion good war prejudice. Law aversion eternal-return chaos decieve superiority convictions ideal ultimate free enlightenment. Free ascetic love oneself ultimate contradict transvaluation will christian. Dead mountains value holiest zarathustra god war pious. Oneself decrepit inexpedient victorious philosophy christian ocean virtues prejudice. Sea passion ocean victorious holiest depths. Contradict justice god pious convictions enlightenment moral good superiority abstract transvaluation.",
            },
            {
              section1:
                "Intentions depths fearful merciful will reason ubermensch intentions faith merciful insofar noble victorious. Marvelous deceptions passion society abstract play society evil superiority. Value oneself sea evil aversion ascetic. Depths abstract eternal-return zarathustra oneself ubermensch pious. Will pious reason faith contradict superiority.\n\nSuicide eternal-return self society decrepit christianity inexpedient ultimate christian zarathustra insofar ubermensch. Reason good reason grandeur will madness strong gains will self. Pinnacle spirit noble christian society superiority inexpedient intentions self contradict war.\n\nTransvaluation grandeur dead abstract dead joy spirit will victorious snare. Chaos dead morality depths value good war grandeur good. Contradict grandeur ultimate free prejudice hope ocean ocean right snare burying abstract selfish.\n\nMoral grandeur against spirit free snare madness salvation hope oneself inexpedient truth. Will virtues madness madness revaluation dead battle self intentions good madness. Play merciful christian zarathustra salvation spirit spirit ascetic.\n\nHorror overcome ultimate christianity love intentions grandeur fearful virtues zarathustra. Noble society decrepit strong of dead. Intentions inexpedient right depths ascetic. Pious law free god faithful mountains spirit salvation.\n\nGod aversion convictions war depths superiority inexpedient of sea. Superiority deceptions god horror virtues free horror suicide law marvelous fearful eternal-return superiority ultimate. Marvelous will pinnacle chaos hope prejudice noble fearful play depths god ideal law. Ocean virtues holiest justice gains burying salvation horror self strong joy burying. Merciful suicide good abstract selfish.",
            },
            {
              quote: [
                "The individual has always had to struggle to keep from being overwhelmed by the tribe. If you try it, you will be lonely often, and sometimes frightened. But no price is too high to pay for the privilege of owning yourself.",
                "Friedrich Nietzsche",
              ],
            },
            {
              summary2:
                "Ocean prejudice superiority spirit philosophy christianity suicide grandeur. Derive selfish christianity reason eternal-return overcome enlightenment. Against noble christianity victorious intentions aversion evil convictions disgust.",
            },
            {
              section2:
                "Endless ubermensch of overcome will. Spirit virtues victorious contradict strong selfish snare endless war endless contradict. Abstract selfish against derive decrepit convictions ideal victorious decrepit society moral. Ascetic virtues inexpedient virtues ubermensch. Salvation love virtues intentions ascetic burying law justice salvation inexpedient deceptions noble virtues snare. Revaluation evil disgust law transvaluation. Depths free ultimate victorious against.\n\nContradict ultimate of philosophy marvelous zarathustra convictions pinnacle dead sea. Insofar dead christian faith depths. Prejudice enlightenment overcome oneself abstract justice free ultimate good ascetic justice. Ascetic endless deceptions merciful dead faith god self.",
            },
          ],
        },
        {
          title: "How are you really?",
          popular: false,
          description:
            "Eternal-return ascetic gains love passion zarathustra noble suicide intentions enlightenment grandeur deceptions mountains. Salvation noble ocean disgust deceptions society strong christianity merciful faithful play ocean suicide. Reason chaos endless revaluation mountains decieve hope. Snare gains joy noble reason law noble merciful grandeur dead. Good contradict play ubermensch truth abstract derive merciful marvelous strong ascetic.",
          date: "16 March 2022",
          read: "10 mins",
          label: "Art",
          img: "/images/articles/preview/how-are-you-really.jpg",
          imgAlt:
            "A sculpture of an expressive figure with long, wavy hair, looking upwards with wide, shocked eyes and open mouthed",
          slug: "how-are-you-really",
          content: [
            {
              img: "/images/articles/single-post/how-are-you-really.jpg",
              summary:
                "Sea virtues fearful snare passion good war prejudice. Law aversion eternal-return chaos decieve superiority convictions ideal ultimate free enlightenment. Free ascetic love oneself ultimate contradict transvaluation will christian. Dead mountains value holiest zarathustra god war pious. Oneself decrepit inexpedient victorious philosophy christian ocean virtues prejudice. Sea passion ocean victorious holiest depths. Contradict justice god pious convictions enlightenment moral good superiority abstract transvaluation.",
            },
            {
              section1:
                "Intentions depths fearful merciful will reason ubermensch intentions faith merciful insofar noble victorious. Marvelous deceptions passion society abstract play society evil superiority. Value oneself sea evil aversion ascetic. Depths abstract eternal-return zarathustra oneself ubermensch pious. Will pious reason faith contradict superiority.\n\nSuicide eternal-return self society decrepit christianity inexpedient ultimate christian zarathustra insofar ubermensch. Reason good reason grandeur will madness strong gains will self. Pinnacle spirit noble christian society superiority inexpedient intentions self contradict war.\n\nTransvaluation grandeur dead abstract dead joy spirit will victorious snare. Chaos dead morality depths value good war grandeur good. Contradict grandeur ultimate free prejudice hope ocean ocean right snare burying abstract selfish.\n\nMoral grandeur against spirit free snare madness salvation hope oneself inexpedient truth. Will virtues madness madness revaluation dead battle self intentions good madness. Play merciful christian zarathustra salvation spirit spirit ascetic.\n\nHorror overcome ultimate christianity love intentions grandeur fearful virtues zarathustra. Noble society decrepit strong of dead. Intentions inexpedient right depths ascetic. Pious law free god faithful mountains spirit salvation.\n\nGod aversion convictions war depths superiority inexpedient of sea. Superiority deceptions god horror virtues free horror suicide law marvelous fearful eternal-return superiority ultimate. Marvelous will pinnacle chaos hope prejudice noble fearful play depths god ideal law. Ocean virtues holiest justice gains burying salvation horror self strong joy burying. Merciful suicide good abstract selfish.",
            },
            {
              quote: [
                "The individual has always had to struggle to keep from being overwhelmed by the tribe. If you try it, you will be lonely often, and sometimes frightened. But no price is too high to pay for the privilege of owning yourself.",
                "Friedrich Nietzsche",
              ],
            },
            {
              summary2:
                "Ocean prejudice superiority spirit philosophy christianity suicide grandeur. Derive selfish christianity reason eternal-return overcome enlightenment. Against noble christianity victorious intentions aversion evil convictions disgust.",
            },
            {
              section2:
                "Endless ubermensch of overcome will. Spirit virtues victorious contradict strong selfish snare endless war endless contradict. Abstract selfish against derive decrepit convictions ideal victorious decrepit society moral. Ascetic virtues inexpedient virtues ubermensch. Salvation love virtues intentions ascetic burying law justice salvation inexpedient deceptions noble virtues snare. Revaluation evil disgust law transvaluation. Depths free ultimate victorious against.\n\nContradict ultimate of philosophy marvelous zarathustra convictions pinnacle dead sea. Insofar dead christian faith depths. Prejudice enlightenment overcome oneself abstract justice free ultimate good ascetic justice. Ascetic endless deceptions merciful dead faith god self.",
            },
          ],
        },
        {
          title: "Beauty of colors",
          popular: false,
          description:
            "Eternal-return ascetic gains love passion zarathustra noble suicide intentions enlightenment grandeur deceptions mountains. Salvation noble ocean disgust deceptions society strong christianity merciful faithful play ocean suicide. Reason chaos endless revaluation mountains decieve hope. Snare gains joy noble reason law noble merciful grandeur dead. Good contradict play ubermensch truth abstract derive merciful marvelous strong ascetic.",
          date: "16 March 2022",
          read: "10 mins",
          label: "Art",
          img: "/images/articles/preview/beauty-of-colors.jpg",
          imgAlt:
            "A large, vibrant painting of a woman's face on a series of news clippings using a combination of pink, orange, green, blue and black tones",
          slug: "beauty-of-colors",
          content: [
            {
              img: "/images/articles/single-post/beauty-of-colors.jpg",
              summary:
                "Sea virtues fearful snare passion good war prejudice. Law aversion eternal-return chaos decieve superiority convictions ideal ultimate free enlightenment. Free ascetic love oneself ultimate contradict transvaluation will christian. Dead mountains value holiest zarathustra god war pious. Oneself decrepit inexpedient victorious philosophy christian ocean virtues prejudice. Sea passion ocean victorious holiest depths. Contradict justice god pious convictions enlightenment moral good superiority abstract transvaluation.",
            },
            {
              section1:
                "Intentions depths fearful merciful will reason ubermensch intentions faith merciful insofar noble victorious. Marvelous deceptions passion society abstract play society evil superiority. Value oneself sea evil aversion ascetic. Depths abstract eternal-return zarathustra oneself ubermensch pious. Will pious reason faith contradict superiority.\n\nSuicide eternal-return self society decrepit christianity inexpedient ultimate christian zarathustra insofar ubermensch. Reason good reason grandeur will madness strong gains will self. Pinnacle spirit noble christian society superiority inexpedient intentions self contradict war.\n\nTransvaluation grandeur dead abstract dead joy spirit will victorious snare. Chaos dead morality depths value good war grandeur good. Contradict grandeur ultimate free prejudice hope ocean ocean right snare burying abstract selfish.\n\nMoral grandeur against spirit free snare madness salvation hope oneself inexpedient truth. Will virtues madness madness revaluation dead battle self intentions good madness. Play merciful christian zarathustra salvation spirit spirit ascetic.\n\nHorror overcome ultimate christianity love intentions grandeur fearful virtues zarathustra. Noble society decrepit strong of dead. Intentions inexpedient right depths ascetic. Pious law free god faithful mountains spirit salvation.\n\nGod aversion convictions war depths superiority inexpedient of sea. Superiority deceptions god horror virtues free horror suicide law marvelous fearful eternal-return superiority ultimate. Marvelous will pinnacle chaos hope prejudice noble fearful play depths god ideal law. Ocean virtues holiest justice gains burying salvation horror self strong joy burying. Merciful suicide good abstract selfish.",
            },
            {
              quote: [
                "The individual has always had to struggle to keep from being overwhelmed by the tribe. If you try it, you will be lonely often, and sometimes frightened. But no price is too high to pay for the privilege of owning yourself.",
                "Friedrich Nietzsche",
              ],
            },
            {
              summary2:
                "Ocean prejudice superiority spirit philosophy christianity suicide grandeur. Derive selfish christianity reason eternal-return overcome enlightenment. Against noble christianity victorious intentions aversion evil convictions disgust.",
            },
            {
              section2:
                "Endless ubermensch of overcome will. Spirit virtues victorious contradict strong selfish snare endless war endless contradict. Abstract selfish against derive decrepit convictions ideal victorious decrepit society moral. Ascetic virtues inexpedient virtues ubermensch. Salvation love virtues intentions ascetic burying law justice salvation inexpedient deceptions noble virtues snare. Revaluation evil disgust law transvaluation. Depths free ultimate victorious against.\n\nContradict ultimate of philosophy marvelous zarathustra convictions pinnacle dead sea. Insofar dead christian faith depths. Prejudice enlightenment overcome oneself abstract justice free ultimate good ascetic justice. Ascetic endless deceptions merciful dead faith god self.",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      author: "Anne Henry",
      job: "Artist",
      city: "Hamburg",
      avatar: "/images/authors/anne-henry.jpg",
      imgAlt:
        "A black and white headshot of a young girl in her mid-twenties with dark, curly hair and a striped top staring at the camera positioned sideways",
      slug: "anne-henry",
      biography: {
        summary:
          "Anne Henry is a rising star in the world of art journalism, currently working at the fictional magazine, Fyrre. Starting as an intern, she recently secured a permanent position at the magazine. Henry specializes in abstract art and is deeply immersed in the cultural and museum scene of Hamburg.",
        body: "Anne Henry's journey with Fyrre began as an intern, where she quickly demonstrated her passion for art and her talent for writing. Her insightful articles on abstract art, characterized by a deep understanding of the subject matter, caught the attention of the magazine's editors. Recognizing her potential, Fyrre offered her a permanent position, marking the start of her professional career in art journalism. Henry's work is marked by her unique perspective on abstract art. She delves into the complexities of this art form, providing readers with a deeper understanding of the artists' intentions and the emotions conveyed through their work. Her articles are not only informative but also engaging, making abstract art more accessible to a wider audience. Beyond her work at Fyrre, Henry is an active participant in the cultural scene of Hamburg. She spends her free time exploring the city's museums and art galleries, immersing herself in the local art culture. This hands-on involvement enriches her writing, as she brings firsthand experiences and observations into her articles. Despite her recent entry into the field, Henry has already made a significant impact with her work. Her dedication to her craft, combined with her passion for abstract art and the culture of Hamburg, shines through in her writing. As she continues to grow in her role at Fyrre, readers can look forward to more insightful articles from this promising writer.",
      },
      articles: [
        {
          title: "Getting real",
          popular: false,
          description:
            "Eternal-return ascetic gains love passion zarathustra noble suicide intentions enlightenment grandeur deceptions mountains. Salvation noble ocean disgust deceptions society strong christianity merciful faithful play ocean suicide. Reason chaos endless revaluation mountains decieve hope. Snare gains joy noble reason law noble merciful grandeur dead. Good contradict play ubermensch truth abstract derive merciful marvelous strong ascetic.",
          date: "16 September 2023",
          read: "10 mins",
          label: "Art",
          img: "/images/articles/preview/getting-real.jpg",
          imgAlt:
            "An obscure, expressive painting of various horizontal and vertical brush strokes with light cream and white tones at the top, eventually changing to dark and blacker tones at the bottom",
          slug: "getting-real",
          content: [
            {
              img: "/images/articles/single-post/getting-real.jpg",
              summary:
                "Sea virtues fearful snare passion good war prejudice. Law aversion eternal-return chaos decieve superiority convictions ideal ultimate free enlightenment. Free ascetic love oneself ultimate contradict transvaluation will christian. Dead mountains value holiest zarathustra god war pious. Oneself decrepit inexpedient victorious philosophy christian ocean virtues prejudice. Sea passion ocean victorious holiest depths. Contradict justice god pious convictions enlightenment moral good superiority abstract transvaluation.",
            },
            {
              section1:
                "Intentions depths fearful merciful will reason ubermensch intentions faith merciful insofar noble victorious. Marvelous deceptions passion society abstract play society evil superiority. Value oneself sea evil aversion ascetic. Depths abstract eternal-return zarathustra oneself ubermensch pious. Will pious reason faith contradict superiority.\n\nSuicide eternal-return self society decrepit christianity inexpedient ultimate christian zarathustra insofar ubermensch. Reason good reason grandeur will madness strong gains will self. Pinnacle spirit noble christian society superiority inexpedient intentions self contradict war.\n\nTransvaluation grandeur dead abstract dead joy spirit will victorious snare. Chaos dead morality depths value good war grandeur good. Contradict grandeur ultimate free prejudice hope ocean ocean right snare burying abstract selfish.\n\nMoral grandeur against spirit free snare madness salvation hope oneself inexpedient truth. Will virtues madness madness revaluation dead battle self intentions good madness. Play merciful christian zarathustra salvation spirit spirit ascetic.\n\nHorror overcome ultimate christianity love intentions grandeur fearful virtues zarathustra. Noble society decrepit strong of dead. Intentions inexpedient right depths ascetic. Pious law free god faithful mountains spirit salvation.\n\nGod aversion convictions war depths superiority inexpedient of sea. Superiority deceptions god horror virtues free horror suicide law marvelous fearful eternal-return superiority ultimate. Marvelous will pinnacle chaos hope prejudice noble fearful play depths god ideal law. Ocean virtues holiest justice gains burying salvation horror self strong joy burying. Merciful suicide good abstract selfish.",
            },
            {
              quote: [
                "The individual has always had to struggle to keep from being overwhelmed by the tribe. If you try it, you will be lonely often, and sometimes frightened. But no price is too high to pay for the privilege of owning yourself.",
                "Friedrich Nietzsche",
              ],
            },
            {
              summary2:
                "Ocean prejudice superiority spirit philosophy christianity suicide grandeur. Derive selfish christianity reason eternal-return overcome enlightenment. Against noble christianity victorious intentions aversion evil convictions disgust.",
            },
            {
              section2:
                "Endless ubermensch of overcome will. Spirit virtues victorious contradict strong selfish snare endless war endless contradict. Abstract selfish against derive decrepit convictions ideal victorious decrepit society moral. Ascetic virtues inexpedient virtues ubermensch. Salvation love virtues intentions ascetic burying law justice salvation inexpedient deceptions noble virtues snare. Revaluation evil disgust law transvaluation. Depths free ultimate victorious against.\n\nContradict ultimate of philosophy marvelous zarathustra convictions pinnacle dead sea. Insofar dead christian faith depths. Prejudice enlightenment overcome oneself abstract justice free ultimate good ascetic justice. Ascetic endless deceptions merciful dead faith god self.",
            },
          ],
        },
        {
          title: "Secret Garden",
          popular: false,
          description:
            "Eternal-return ascetic gains love passion zarathustra noble suicide intentions enlightenment grandeur deceptions mountains. Salvation noble ocean disgust deceptions society strong christianity merciful faithful play ocean suicide. Reason chaos endless revaluation mountains decieve hope. Snare gains joy noble reason law noble merciful grandeur dead. Good contradict play ubermensch truth abstract derive merciful marvelous strong ascetic.",
          date: "16 March 2022",
          read: "10 mins",
          label: "Art",
          img: "/images/articles/preview/secret-garden.jpg",
          imgAlt:
            "An abstract painting of tomatoes and meat, with a jug and a bottle in the backdrop, against muted and high-toned greens, with pinks in the foreground and white strawberries",
          slug: "secret-garden",
          content: [
            {
              img: "/images/articles/single-post/secret-garden.jpg",
              summary:
                "Sea virtues fearful snare passion good war prejudice. Law aversion eternal-return chaos decieve superiority convictions ideal ultimate free enlightenment. Free ascetic love oneself ultimate contradict transvaluation will christian. Dead mountains value holiest zarathustra god war pious. Oneself decrepit inexpedient victorious philosophy christian ocean virtues prejudice. Sea passion ocean victorious holiest depths. Contradict justice god pious convictions enlightenment moral good superiority abstract transvaluation.",
            },
            {
              section1:
                "Intentions depths fearful merciful will reason ubermensch intentions faith merciful insofar noble victorious. Marvelous deceptions passion society abstract play society evil superiority. Value oneself sea evil aversion ascetic. Depths abstract eternal-return zarathustra oneself ubermensch pious. Will pious reason faith contradict superiority.\n\nSuicide eternal-return self society decrepit christianity inexpedient ultimate christian zarathustra insofar ubermensch. Reason good reason grandeur will madness strong gains will self. Pinnacle spirit noble christian society superiority inexpedient intentions self contradict war.\n\nTransvaluation grandeur dead abstract dead joy spirit will victorious snare. Chaos dead morality depths value good war grandeur good. Contradict grandeur ultimate free prejudice hope ocean ocean right snare burying abstract selfish.\n\nMoral grandeur against spirit free snare madness salvation hope oneself inexpedient truth. Will virtues madness madness revaluation dead battle self intentions good madness. Play merciful christian zarathustra salvation spirit spirit ascetic.\n\nHorror overcome ultimate christianity love intentions grandeur fearful virtues zarathustra. Noble society decrepit strong of dead. Intentions inexpedient right depths ascetic. Pious law free god faithful mountains spirit salvation.\n\nGod aversion convictions war depths superiority inexpedient of sea. Superiority deceptions god horror virtues free horror suicide law marvelous fearful eternal-return superiority ultimate. Marvelous will pinnacle chaos hope prejudice noble fearful play depths god ideal law. Ocean virtues holiest justice gains burying salvation horror self strong joy burying. Merciful suicide good abstract selfish.",
            },
            {
              quote: [
                "The individual has always had to struggle to keep from being overwhelmed by the tribe. If you try it, you will be lonely often, and sometimes frightened. But no price is too high to pay for the privilege of owning yourself.",
                "Friedrich Nietzsche",
              ],
            },
            {
              summary2:
                "Ocean prejudice superiority spirit philosophy christianity suicide grandeur. Derive selfish christianity reason eternal-return overcome enlightenment. Against noble christianity victorious intentions aversion evil convictions disgust.",
            },
            {
              section2:
                "Endless ubermensch of overcome will. Spirit virtues victorious contradict strong selfish snare endless war endless contradict. Abstract selfish against derive decrepit convictions ideal victorious decrepit society moral. Ascetic virtues inexpedient virtues ubermensch. Salvation love virtues intentions ascetic burying law justice salvation inexpedient deceptions noble virtues snare. Revaluation evil disgust law transvaluation. Depths free ultimate victorious against.\n\nContradict ultimate of philosophy marvelous zarathustra convictions pinnacle dead sea. Insofar dead christian faith depths. Prejudice enlightenment overcome oneself abstract justice free ultimate good ascetic justice. Ascetic endless deceptions merciful dead faith god self.",
            },
          ],
        },
      ],
    },
    {
      id: 4,
      author: "Anna Nielsen",
      job: "Artist",
      city: "Copenhagen",
      avatar: "/images/authors/anna-nielsen.jpg",
      imgAlt:
        "A black and white headshot of a woman in her early fourties with small studded earings and wavy fringe hair smiling at something in the distance",
      slug: "anna-nielsen",
      biography: {
        summary:
          "Anna Nielsen is a co-founder and the Chief Editor of the fictional magazine, Fyrre. Based in Copenhagen, she also teaches Literature at Københavns Universitet. Nielsen divides her time between Denmark and Belgium, contributing to the literary world through her editorial work and academic pursuits.",
        body: "Anna Nielsen, along with Jakob Grønberg, co-founded Fyrre Magazine in 2011. As the Chief Editor, she has played a pivotal role in shaping the magazine's content and direction. Her editorial work is characterized by a keen eye for quality and a deep understanding of the literary landscape. Nielsen's influence extends beyond Fyrre. She is also a respected Literature teacher at Københavns Universitet. Her academic pursuits allow her to contribute to the field of literature in a meaningful way, nurturing the next generation of writers and thinkers. Despite her responsibilities at Fyrre and Københavns Universitet, Nielsen manages to divide her time between Denmark and Belgium. This transnational lifestyle enriches her perspective, allowing her to bring diverse cultural insights into her work. Nielsen's contributions to the literary world, both as an editor and an educator, have made her a respected figure in her field. Her dedication to her work, combined with her ability to balance multiple roles, is a testament to her passion for literature and her commitment to fostering a vibrant literary culture.",
      },
      articles: [
        {
          title: "History of paper",
          popular: false,
          description:
            "Eternal-return ascetic gains love passion zarathustra noble suicide intentions enlightenment grandeur deceptions mountains. Salvation noble ocean disgust deceptions society strong christianity merciful faithful play ocean suicide. Reason chaos endless revaluation mountains decieve hope. Snare gains joy noble reason law noble merciful grandeur dead. Good contradict play ubermensch truth abstract derive merciful marvelous strong ascetic.",
          date: "16 September 2023",
          read: "10 mins",
          label: "Art",
          img: "/images/articles/preview/history-of-paper.jpg",
          imgAlt:
            "A collage of layered posters on a wall, with a large rip running from the top down to expose the different layers underneath. The numbers '88' with an arrow pointing up is printed on the right and big, bold white lettering against a black backdrop on the left",
          slug: "history-of-paper",
          content: [
            {
              img: "/images/articles/single-post/history-of-paper.jpg",
              summary:
                "Sea virtues fearful snare passion good war prejudice. Law aversion eternal-return chaos decieve superiority convictions ideal ultimate free enlightenment. Free ascetic love oneself ultimate contradict transvaluation will christian. Dead mountains value holiest zarathustra god war pious. Oneself decrepit inexpedient victorious philosophy christian ocean virtues prejudice. Sea passion ocean victorious holiest depths. Contradict justice god pious convictions enlightenment moral good superiority abstract transvaluation.",
            },
            {
              section1:
                "Intentions depths fearful merciful will reason ubermensch intentions faith merciful insofar noble victorious. Marvelous deceptions passion society abstract play society evil superiority. Value oneself sea evil aversion ascetic. Depths abstract eternal-return zarathustra oneself ubermensch pious. Will pious reason faith contradict superiority.\n\nSuicide eternal-return self society decrepit christianity inexpedient ultimate christian zarathustra insofar ubermensch. Reason good reason grandeur will madness strong gains will self. Pinnacle spirit noble christian society superiority inexpedient intentions self contradict war.\n\nTransvaluation grandeur dead abstract dead joy spirit will victorious snare. Chaos dead morality depths value good war grandeur good. Contradict grandeur ultimate free prejudice hope ocean ocean right snare burying abstract selfish.\n\nMoral grandeur against spirit free snare madness salvation hope oneself inexpedient truth. Will virtues madness madness revaluation dead battle self intentions good madness. Play merciful christian zarathustra salvation spirit spirit ascetic.\n\nHorror overcome ultimate christianity love intentions grandeur fearful virtues zarathustra. Noble society decrepit strong of dead. Intentions inexpedient right depths ascetic. Pious law free god faithful mountains spirit salvation.\n\nGod aversion convictions war depths superiority inexpedient of sea. Superiority deceptions god horror virtues free horror suicide law marvelous fearful eternal-return superiority ultimate. Marvelous will pinnacle chaos hope prejudice noble fearful play depths god ideal law. Ocean virtues holiest justice gains burying salvation horror self strong joy burying. Merciful suicide good abstract selfish.",
            },
            {
              quote: [
                "The individual has always had to struggle to keep from being overwhelmed by the tribe. If you try it, you will be lonely often, and sometimes frightened. But no price is too high to pay for the privilege of owning yourself.",
                "Friedrich Nietzsche",
              ],
            },
            {
              summary2:
                "Ocean prejudice superiority spirit philosophy christianity suicide grandeur. Derive selfish christianity reason eternal-return overcome enlightenment. Against noble christianity victorious intentions aversion evil convictions disgust.",
            },
            {
              section2:
                "Endless ubermensch of overcome will. Spirit virtues victorious contradict strong selfish snare endless war endless contradict. Abstract selfish against derive decrepit convictions ideal victorious decrepit society moral. Ascetic virtues inexpedient virtues ubermensch. Salvation love virtues intentions ascetic burying law justice salvation inexpedient deceptions noble virtues snare. Revaluation evil disgust law transvaluation. Depths free ultimate victorious against.\n\nContradict ultimate of philosophy marvelous zarathustra convictions pinnacle dead sea. Insofar dead christian faith depths. Prejudice enlightenment overcome oneself abstract justice free ultimate good ascetic justice. Ascetic endless deceptions merciful dead faith god self.",
            },
          ],
        },
        {
          title: "Keep on Smiling",
          popular: false,
          description:
            "Eternal-return ascetic gains love passion zarathustra noble suicide intentions enlightenment grandeur deceptions mountains. Salvation noble ocean disgust deceptions society strong christianity merciful faithful play ocean suicide. Reason chaos endless revaluation mountains decieve hope. Snare gains joy noble reason law noble merciful grandeur dead. Good contradict play ubermensch truth abstract derive merciful marvelous strong ascetic.",
          date: "16 March 2022",
          read: "10 mins",
          label: "Art",
          img: "/images/articles/preview/keep-on-smiling.jpg",
          imgAlt:
            "A large image of a young child, smiling at something in the distance, painted against a very tall block of residential flats on a foggy day with trees in the foreground",
          slug: "keep-on-smiling",
          content: [
            {
              img: "/images/articles/single-post/keep-on-smiling.jpg",
              summary:
                "Sea virtues fearful snare passion good war prejudice. Law aversion eternal-return chaos decieve superiority convictions ideal ultimate free enlightenment. Free ascetic love oneself ultimate contradict transvaluation will christian. Dead mountains value holiest zarathustra god war pious. Oneself decrepit inexpedient victorious philosophy christian ocean virtues prejudice. Sea passion ocean victorious holiest depths. Contradict justice god pious convictions enlightenment moral good superiority abstract transvaluation.",
            },
            {
              section1:
                "Intentions depths fearful merciful will reason ubermensch intentions faith merciful insofar noble victorious. Marvelous deceptions passion society abstract play society evil superiority. Value oneself sea evil aversion ascetic. Depths abstract eternal-return zarathustra oneself ubermensch pious. Will pious reason faith contradict superiority.\n\nSuicide eternal-return self society decrepit christianity inexpedient ultimate christian zarathustra insofar ubermensch. Reason good reason grandeur will madness strong gains will self. Pinnacle spirit noble christian society superiority inexpedient intentions self contradict war.\n\nTransvaluation grandeur dead abstract dead joy spirit will victorious snare. Chaos dead morality depths value good war grandeur good. Contradict grandeur ultimate free prejudice hope ocean ocean right snare burying abstract selfish.\n\nMoral grandeur against spirit free snare madness salvation hope oneself inexpedient truth. Will virtues madness madness revaluation dead battle self intentions good madness. Play merciful christian zarathustra salvation spirit spirit ascetic.\n\nHorror overcome ultimate christianity love intentions grandeur fearful virtues zarathustra. Noble society decrepit strong of dead. Intentions inexpedient right depths ascetic. Pious law free god faithful mountains spirit salvation.\n\nGod aversion convictions war depths superiority inexpedient of sea. Superiority deceptions god horror virtues free horror suicide law marvelous fearful eternal-return superiority ultimate. Marvelous will pinnacle chaos hope prejudice noble fearful play depths god ideal law. Ocean virtues holiest justice gains burying salvation horror self strong joy burying. Merciful suicide good abstract selfish.",
            },
            {
              quote: [
                "The individual has always had to struggle to keep from being overwhelmed by the tribe. If you try it, you will be lonely often, and sometimes frightened. But no price is too high to pay for the privilege of owning yourself.",
                "Friedrich Nietzsche",
              ],
            },
            {
              summary2:
                "Ocean prejudice superiority spirit philosophy christianity suicide grandeur. Derive selfish christianity reason eternal-return overcome enlightenment. Against noble christianity victorious intentions aversion evil convictions disgust.",
            },
            {
              section2:
                "Endless ubermensch of overcome will. Spirit virtues victorious contradict strong selfish snare endless war endless contradict. Abstract selfish against derive decrepit convictions ideal victorious decrepit society moral. Ascetic virtues inexpedient virtues ubermensch. Salvation love virtues intentions ascetic burying law justice salvation inexpedient deceptions noble virtues snare. Revaluation evil disgust law transvaluation. Depths free ultimate victorious against.\n\nContradict ultimate of philosophy marvelous zarathustra convictions pinnacle dead sea. Insofar dead christian faith depths. Prejudice enlightenment overcome oneself abstract justice free ultimate good ascetic justice. Ascetic endless deceptions merciful dead faith god self.",
            },
          ],
        },
      ],
    },
    {
      id: 5,
      author: "Jane Cooper",
      job: "Artist",
      city: "Berlin",
      avatar: "/images/authors/jane-cooper.jpg",
      imgAlt:
        "A black and white headshot of a young woman in her mid-twenties with decorative earrings and a white fleece staring at the camera, positioned sideways",
      slug: "jane-cooper",
      biography: {
        summary:
          "Jane Cooper, a St Louis native now based in Barcelona, is a globe-trotting writer known for her insightful pieces on grassroots movements and the cathartic power of art. Her work, characterized by a deep understanding of the human condition and the transformative potential of art, has made her a respected figure in the literary world.",
        body: "Born in St Louis, Jane Cooper moved to Barcelona, a city known for its vibrant art scene. Her passion for understanding the human condition and the role of art in society led her to become a writer, focusing on grassroots movements across the globe. Cooper's work is characterized by her ability to capture the essence of these movements and the ways in which everyday people find solace in the vibrant expressions of art. As a frequent flier and globe-trotter, Cooper has had the opportunity to immerse herself in various cultures and art scenes. This exposure has enriched her writing, allowing her to bring diverse perspectives into her work. Her articles often delve into the transformative power of art, exploring how it provides catharsis and a sense of community for people from all walks of life. Cooper's work is not limited to writing. She is also actively involved in the art communities she writes about, often participating in local events and initiatives. This hands-on involvement allows her to stay connected with the evolving art scene, ensuring her writing remains relevant and informed. Despite her success, Cooper remains dedicated to her craft. She continues to write about grassroots movements and the power of art, sharing her insights with a global audience. Her commitment to her work and the art community is a testament to her passion for understanding the human condition and the transformative potential of art.",
      },
      articles: [
        {
          title: "Colorful Future",
          popular: false,
          description:
            "Eternal-return ascetic gains love passion zarathustra noble suicide intentions enlightenment grandeur deceptions mountains. Salvation noble ocean disgust deceptions society strong christianity merciful faithful play ocean suicide. Reason chaos endless revaluation mountains decieve hope. Snare gains joy noble reason law noble merciful grandeur dead. Good contradict play ubermensch truth abstract derive merciful marvelous strong ascetic.",
          date: "16 September 2023",
          read: "10 mins",
          label: "Art",
          img: "/images/articles/preview/colorful-future.jpg",
          imgAlt:
            "A mass of glossy pink and red paint swirls following irregular patterns, overlapping one another",
          slug: "colorful-future",
          content: [
            {
              img: "/images/articles/single-post/colorful-future.jpg",
              summary:
                "Sea virtues fearful snare passion good war prejudice. Law aversion eternal-return chaos decieve superiority convictions ideal ultimate free enlightenment. Free ascetic love oneself ultimate contradict transvaluation will christian. Dead mountains value holiest zarathustra god war pious. Oneself decrepit inexpedient victorious philosophy christian ocean virtues prejudice. Sea passion ocean victorious holiest depths. Contradict justice god pious convictions enlightenment moral good superiority abstract transvaluation.",
            },
            {
              section1:
                "Intentions depths fearful merciful will reason ubermensch intentions faith merciful insofar noble victorious. Marvelous deceptions passion society abstract play society evil superiority. Value oneself sea evil aversion ascetic. Depths abstract eternal-return zarathustra oneself ubermensch pious. Will pious reason faith contradict superiority.\n\nSuicide eternal-return self society decrepit christianity inexpedient ultimate christian zarathustra insofar ubermensch. Reason good reason grandeur will madness strong gains will self. Pinnacle spirit noble christian society superiority inexpedient intentions self contradict war.\n\nTransvaluation grandeur dead abstract dead joy spirit will victorious snare. Chaos dead morality depths value good war grandeur good. Contradict grandeur ultimate free prejudice hope ocean ocean right snare burying abstract selfish.\n\nMoral grandeur against spirit free snare madness salvation hope oneself inexpedient truth. Will virtues madness madness revaluation dead battle self intentions good madness. Play merciful christian zarathustra salvation spirit spirit ascetic.\n\nHorror overcome ultimate christianity love intentions grandeur fearful virtues zarathustra. Noble society decrepit strong of dead. Intentions inexpedient right depths ascetic. Pious law free god faithful mountains spirit salvation.\n\nGod aversion convictions war depths superiority inexpedient of sea. Superiority deceptions god horror virtues free horror suicide law marvelous fearful eternal-return superiority ultimate. Marvelous will pinnacle chaos hope prejudice noble fearful play depths god ideal law. Ocean virtues holiest justice gains burying salvation horror self strong joy burying. Merciful suicide good abstract selfish.",
            },
            {
              quote: [
                "The individual has always had to struggle to keep from being overwhelmed by the tribe. If you try it, you will be lonely often, and sometimes frightened. But no price is too high to pay for the privilege of owning yourself.",
                "Friedrich Nietzsche",
              ],
            },
            {
              summary2:
                "Ocean prejudice superiority spirit philosophy christianity suicide grandeur. Derive selfish christianity reason eternal-return overcome enlightenment. Against noble christianity victorious intentions aversion evil convictions disgust.",
            },
            {
              section2:
                "Endless ubermensch of overcome will. Spirit virtues victorious contradict strong selfish snare endless war endless contradict. Abstract selfish against derive decrepit convictions ideal victorious decrepit society moral. Ascetic virtues inexpedient virtues ubermensch. Salvation love virtues intentions ascetic burying law justice salvation inexpedient deceptions noble virtues snare. Revaluation evil disgust law transvaluation. Depths free ultimate victorious against.\n\nContradict ultimate of philosophy marvelous zarathustra convictions pinnacle dead sea. Insofar dead christian faith depths. Prejudice enlightenment overcome oneself abstract justice free ultimate good ascetic justice. Ascetic endless deceptions merciful dead faith god self.",
            },
          ],
        },
        {
          title: "Artists who want to rise above",
          popular: true,
          popularity: 3,
          description:
            "Eternal-return ascetic gains love passion zarathustra noble suicide intentions enlightenment grandeur deceptions mountains. Salvation noble ocean disgust deceptions society strong christianity merciful faithful play ocean suicide. Reason chaos endless revaluation mountains decieve hope. Snare gains joy noble reason law noble merciful grandeur dead. Good contradict play ubermensch truth abstract derive merciful marvelous strong ascetic.",
          date: "16 March 2022",
          read: "10 mins",
          label: "Street art",
          img: "/images/articles/preview/artists-who-want-to-rise-above.jpg",
          imgAlt:
            "A sketch of an old man looking to the distance on the left printed against the side of a house, with a low fence in the foreground, a closed gate in the middle of it and the numbers '26' printed to the right",
          slug: "artists-who-want-to-rise-above",
          content: [
            {
              img: "/images/articles/single-post/artists-who-want-to-rise-above.jpg",
              summary:
                "Sea virtues fearful snare passion good war prejudice. Law aversion eternal-return chaos decieve superiority convictions ideal ultimate free enlightenment. Free ascetic love oneself ultimate contradict transvaluation will christian. Dead mountains value holiest zarathustra god war pious. Oneself decrepit inexpedient victorious philosophy christian ocean virtues prejudice. Sea passion ocean victorious holiest depths. Contradict justice god pious convictions enlightenment moral good superiority abstract transvaluation.",
            },
            {
              section1:
                "Intentions depths fearful merciful will reason ubermensch intentions faith merciful insofar noble victorious. Marvelous deceptions passion society abstract play society evil superiority. Value oneself sea evil aversion ascetic. Depths abstract eternal-return zarathustra oneself ubermensch pious. Will pious reason faith contradict superiority.\n\nSuicide eternal-return self society decrepit christianity inexpedient ultimate christian zarathustra insofar ubermensch. Reason good reason grandeur will madness strong gains will self. Pinnacle spirit noble christian society superiority inexpedient intentions self contradict war.\n\nTransvaluation grandeur dead abstract dead joy spirit will victorious snare. Chaos dead morality depths value good war grandeur good. Contradict grandeur ultimate free prejudice hope ocean ocean right snare burying abstract selfish.\n\nMoral grandeur against spirit free snare madness salvation hope oneself inexpedient truth. Will virtues madness madness revaluation dead battle self intentions good madness. Play merciful christian zarathustra salvation spirit spirit ascetic.\n\nHorror overcome ultimate christianity love intentions grandeur fearful virtues zarathustra. Noble society decrepit strong of dead. Intentions inexpedient right depths ascetic. Pious law free god faithful mountains spirit salvation.\n\nGod aversion convictions war depths superiority inexpedient of sea. Superiority deceptions god horror virtues free horror suicide law marvelous fearful eternal-return superiority ultimate. Marvelous will pinnacle chaos hope prejudice noble fearful play depths god ideal law. Ocean virtues holiest justice gains burying salvation horror self strong joy burying. Merciful suicide good abstract selfish.",
            },
            {
              quote: [
                "The individual has always had to struggle to keep from being overwhelmed by the tribe. If you try it, you will be lonely often, and sometimes frightened. But no price is too high to pay for the privilege of owning yourself.",
                "Friedrich Nietzsche",
              ],
            },
            {
              summary2:
                "Ocean prejudice superiority spirit philosophy christianity suicide grandeur. Derive selfish christianity reason eternal-return overcome enlightenment. Against noble christianity victorious intentions aversion evil convictions disgust.",
            },
            {
              section2:
                "Endless ubermensch of overcome will. Spirit virtues victorious contradict strong selfish snare endless war endless contradict. Abstract selfish against derive decrepit convictions ideal victorious decrepit society moral. Ascetic virtues inexpedient virtues ubermensch. Salvation love virtues intentions ascetic burying law justice salvation inexpedient deceptions noble virtues snare. Revaluation evil disgust law transvaluation. Depths free ultimate victorious against.\n\nContradict ultimate of philosophy marvelous zarathustra convictions pinnacle dead sea. Insofar dead christian faith depths. Prejudice enlightenment overcome oneself abstract justice free ultimate good ascetic justice. Ascetic endless deceptions merciful dead faith god self.",
            },
          ],
        },
      ],
    },
    {
      id: 6,
      author: "Cristofer Vaccaro",
      job: "Artist",
      city: "Berlin",
      avatar: "/images/authors/cristofer-vaccaro.jpg",
      imgAlt:
        "A black and white headshot of a man in his early fourties with a short head of hair, trimmed beard and black v-neck top staring at the camera",
      slug: "cristofer-vaccaro",
      biography: {
        summary:
          "Cristofer Vaccaro is a Berlin native who writes about the metaphysical arts and the void between the living and the dead. His work includes written and spoken poetry and prose, and he is known for his exploration of underground music that goes against society's standards. Vaccaro's work is characterized by his deep understanding of the human condition and his ability to capture the essence of the mystical and the mythical.",
        body: "Vaccaro's writing is marked by his unique perspective on the world. He delves into the complexities of the human experience, exploring the ways in which art can provide solace and meaning in a world that often feels chaotic and uncertain. His work often explores the intersection between the mystical and the mundane, providing readers with a deeper understanding of the human condition. In addition to his writing, Vaccaro is an active participant in the underground music scene. He spends his time exploring the sounds and cultures of this vibrant community, immersing himself in the music that goes against society's standards. This hands-on involvement allows him to stay connected with the evolving art scene, ensuring his writing remains relevant and informed. Despite his unconventional approach, Vaccaro's work has gained a following for its depth and originality. His ability to capture the essence of the mystical and the mythical, combined with his unique perspective on the human experience, has made him a respected figure in the literary world. As he continues to explore the metaphysical arts and the void between the living and the dead, readers can look forward to more insightful and thought-provoking work from this talented writer.",
      },
      articles: [
        {
          title: "Only In Your Heart",
          popular: false,
          description:
            "Eternal-return ascetic gains love passion zarathustra noble suicide intentions enlightenment grandeur deceptions mountains. Salvation noble ocean disgust deceptions society strong christianity merciful faithful play ocean suicide. Reason chaos endless revaluation mountains decieve hope. Snare gains joy noble reason law noble merciful grandeur dead. Good contradict play ubermensch truth abstract derive merciful marvelous strong ascetic.",
          date: "16 September 2023",
          read: "10 mins",
          label: "Art",
          img: "/images/articles/preview/only-in-your-heart.jpg",
          imgAlt:
            "A broken pale sculpture of a figure resting it's head on its left hand with a red rose perched just above, resting on the top",
          slug: "only-in-your-heart",
          content: [
            {
              img: "/images/articles/single-post/only-in-your-heart.jpg",
              summary:
                "Sea virtues fearful snare passion good war prejudice. Law aversion eternal-return chaos decieve superiority convictions ideal ultimate free enlightenment. Free ascetic love oneself ultimate contradict transvaluation will christian. Dead mountains value holiest zarathustra god war pious. Oneself decrepit inexpedient victorious philosophy christian ocean virtues prejudice. Sea passion ocean victorious holiest depths. Contradict justice god pious convictions enlightenment moral good superiority abstract transvaluation.",
            },
            {
              section1:
                "Intentions depths fearful merciful will reason ubermensch intentions faith merciful insofar noble victorious. Marvelous deceptions passion society abstract play society evil superiority. Value oneself sea evil aversion ascetic. Depths abstract eternal-return zarathustra oneself ubermensch pious. Will pious reason faith contradict superiority.\n\nSuicide eternal-return self society decrepit christianity inexpedient ultimate christian zarathustra insofar ubermensch. Reason good reason grandeur will madness strong gains will self. Pinnacle spirit noble christian society superiority inexpedient intentions self contradict war.\n\nTransvaluation grandeur dead abstract dead joy spirit will victorious snare. Chaos dead morality depths value good war grandeur good. Contradict grandeur ultimate free prejudice hope ocean ocean right snare burying abstract selfish.\n\nMoral grandeur against spirit free snare madness salvation hope oneself inexpedient truth. Will virtues madness madness revaluation dead battle self intentions good madness. Play merciful christian zarathustra salvation spirit spirit ascetic.\n\nHorror overcome ultimate christianity love intentions grandeur fearful virtues zarathustra. Noble society decrepit strong of dead. Intentions inexpedient right depths ascetic. Pious law free god faithful mountains spirit salvation.\n\nGod aversion convictions war depths superiority inexpedient of sea. Superiority deceptions god horror virtues free horror suicide law marvelous fearful eternal-return superiority ultimate. Marvelous will pinnacle chaos hope prejudice noble fearful play depths god ideal law. Ocean virtues holiest justice gains burying salvation horror self strong joy burying. Merciful suicide good abstract selfish.",
            },
            {
              quote: [
                "The individual has always had to struggle to keep from being overwhelmed by the tribe. If you try it, you will be lonely often, and sometimes frightened. But no price is too high to pay for the privilege of owning yourself.",
                "Friedrich Nietzsche",
              ],
            },
            {
              summary2:
                "Ocean prejudice superiority spirit philosophy christianity suicide grandeur. Derive selfish christianity reason eternal-return overcome enlightenment. Against noble christianity victorious intentions aversion evil convictions disgust.",
            },
            {
              section2:
                "Endless ubermensch of overcome will. Spirit virtues victorious contradict strong selfish snare endless war endless contradict. Abstract selfish against derive decrepit convictions ideal victorious decrepit society moral. Ascetic virtues inexpedient virtues ubermensch. Salvation love virtues intentions ascetic burying law justice salvation inexpedient deceptions noble virtues snare. Revaluation evil disgust law transvaluation. Depths free ultimate victorious against.\n\nContradict ultimate of philosophy marvelous zarathustra convictions pinnacle dead sea. Insofar dead christian faith depths. Prejudice enlightenment overcome oneself abstract justice free ultimate good ascetic justice. Ascetic endless deceptions merciful dead faith god self.",
            },
          ],
        },
        {
          title: "Most colorful places",
          popular: false,
          description:
            "Eternal-return ascetic gains love passion zarathustra noble suicide intentions enlightenment grandeur deceptions mountains. Salvation noble ocean disgust deceptions society strong christianity merciful faithful play ocean suicide. Reason chaos endless revaluation mountains decieve hope. Snare gains joy noble reason law noble merciful grandeur dead. Good contradict play ubermensch truth abstract derive merciful marvelous strong ascetic.",
          date: "16 March 2022",
          read: "10 mins",
          label: "Art",
          img: "/images/articles/preview/most-colorful-places.jpg",
          imgAlt:
            "A futuristic, neon-styled painting of a woman with the sides of her face loosely covered by a pair of hands, and various galactic objects dotted around, including galaxies, stars and comets in various shades of greenish-blue, with orange swirls and the words 'REFLEXION RESPECT' printed at the bottom",
          slug: "most-colorful-places",
          content: [
            {
              img: "/images/articles/single-post/most-colorful-places.jpg",
              summary:
                "Sea virtues fearful snare passion good war prejudice. Law aversion eternal-return chaos decieve superiority convictions ideal ultimate free enlightenment. Free ascetic love oneself ultimate contradict transvaluation will christian. Dead mountains value holiest zarathustra god war pious. Oneself decrepit inexpedient victorious philosophy christian ocean virtues prejudice. Sea passion ocean victorious holiest depths. Contradict justice god pious convictions enlightenment moral good superiority abstract transvaluation.",
            },
            {
              section1:
                "Intentions depths fearful merciful will reason ubermensch intentions faith merciful insofar noble victorious. Marvelous deceptions passion society abstract play society evil superiority. Value oneself sea evil aversion ascetic. Depths abstract eternal-return zarathustra oneself ubermensch pious. Will pious reason faith contradict superiority.\n\nSuicide eternal-return self society decrepit christianity inexpedient ultimate christian zarathustra insofar ubermensch. Reason good reason grandeur will madness strong gains will self. Pinnacle spirit noble christian society superiority inexpedient intentions self contradict war.\n\nTransvaluation grandeur dead abstract dead joy spirit will victorious snare. Chaos dead morality depths value good war grandeur good. Contradict grandeur ultimate free prejudice hope ocean ocean right snare burying abstract selfish.\n\nMoral grandeur against spirit free snare madness salvation hope oneself inexpedient truth. Will virtues madness madness revaluation dead battle self intentions good madness. Play merciful christian zarathustra salvation spirit spirit ascetic.\n\nHorror overcome ultimate christianity love intentions grandeur fearful virtues zarathustra. Noble society decrepit strong of dead. Intentions inexpedient right depths ascetic. Pious law free god faithful mountains spirit salvation.\n\nGod aversion convictions war depths superiority inexpedient of sea. Superiority deceptions god horror virtues free horror suicide law marvelous fearful eternal-return superiority ultimate. Marvelous will pinnacle chaos hope prejudice noble fearful play depths god ideal law. Ocean virtues holiest justice gains burying salvation horror self strong joy burying. Merciful suicide good abstract selfish.",
            },
            {
              quote: [
                "The individual has always had to struggle to keep from being overwhelmed by the tribe. If you try it, you will be lonely often, and sometimes frightened. But no price is too high to pay for the privilege of owning yourself.",
                "Friedrich Nietzsche",
              ],
            },
            {
              summary2:
                "Ocean prejudice superiority spirit philosophy christianity suicide grandeur. Derive selfish christianity reason eternal-return overcome enlightenment. Against noble christianity victorious intentions aversion evil convictions disgust.",
            },
            {
              section2:
                "Endless ubermensch of overcome will. Spirit virtues victorious contradict strong selfish snare endless war endless contradict. Abstract selfish against derive decrepit convictions ideal victorious decrepit society moral. Ascetic virtues inexpedient virtues ubermensch. Salvation love virtues intentions ascetic burying law justice salvation inexpedient deceptions noble virtues snare. Revaluation evil disgust law transvaluation. Depths free ultimate victorious against.\n\nContradict ultimate of philosophy marvelous zarathustra convictions pinnacle dead sea. Insofar dead christian faith depths. Prejudice enlightenment overcome oneself abstract justice free ultimate good ascetic justice. Ascetic endless deceptions merciful dead faith god self.",
            },
          ],
        },
      ],
    },
  ];
  return NextResponse.json(articles, { status: 200 });
}
