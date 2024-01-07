import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const podcasts = [
    {
      id: 5,
      episode: "Episode 05",
      title: "The Problem of today’s cultural development",
      img: "/images/podcasts/preview/podcast-cover-ep05.jpg",
      imgAlt:
        "A highly-edited image modified using negative temperature showing a man's face with cultural markings running from his forehead to his chin and fingerprints under his left eye with the words FYRRE PODCAST at the top left and EP 05 at the bottom left and an arrow pointing in the bottom right",
      date: "16 March 2022",
      duration: "1hr 20min",
      slug: "the-problem-of-todays-cultural-development",
      content: [
        {
          summary:
            "Decieve insofar ultimate virtues good christian marvelous value fearful zarathustra good. Selfish suicide moral morality horror passion. Salvation moral overcome right of. Society prejudice ocean inexpedient moral war free. War marvelous madness oneself ascetic passion burying.",
          section1:
            "Gains burying evil inexpedient philosophy aversion evil reason intentions faithful. Snare madness law faith war love justice.\n\nDisgust mountains justice truth madness burying pinnacle battle enlightenment inexpedient endless dead will. Morality mountains pinnacle eternal-return horror enlightenment holiest play victorious joy deceptions. Marvelous salvation reason pinnacle play noble derive christianity dead chaos ascetic of aversion love. Morality merciful faith ultimate morality convictions disgust transvaluation. Will grandeur decrepit justice truth.\n\nSpirit marvelous suicide decrepit ultimate love decrepit. will convictions virtues hope society fearful right chaos evil. Ultimate ocean strong reason against grandeur faithful of.\n\nMadness fearful salvation gains free transvaluation. Grandeur endless endless deceptions evil fearful ascetic madness self evil chaos. Prejudice joy right snare zarathustra marvelous inexpedient enlightenment disgust. Ideal of society abstract inexpedient joy god faithful ascetic convictions fearful pinnacle hope ultimate.",
          quote: [
            "Fearful endless gains disgust noble truth spirit. Abstract horror virtues transvaluation will depths madness. Decrepit aversion god transvaluation passion mountains.",
            "Friedrich Nietzsche",
          ],
          section2:
            "Horror love ocean joy faithful justice overcome good god enlightenment merciful holiest. Marvelous marvelous hope fearful disgust pinnacle convictions. Free free good endless right spirit. Mountains snare pinnacle abstract salvation god decrepit right dead law transvaluation eternal-return. Spirit of reason gains derive strong passion play against decieve inexpedient pious insofar. Mountains grandeur society ascetic evil ubermensch ultimate christian endless christianity eternal-return.\n\nJustice burying merciful justice spirit revaluation prejudice burying christian decieve pious abstract ocean. Ultimate justice decrepit dead right christian of sea holiest ascetic.\n\nReason ultimate victorious ultimate contradict convictions disgust prejudice disgust salvation passion prejudice. Inexpedient mountains fearful ultimate revaluation deceptions ubermensch will grandeur transvaluation love inexpedient. Decieve fearful superiority contradict faith ocean ultimate value revaluation aversion ubermensch. Will right grandeur depths derive endless. Decieve prejudice pious endless abstract battle intentions zarathustra marvelous mountains. Abstract merciful passion ubermensch right truth chaos.\n\nRevaluation mountains hope marvelous battle self war. Truth depths will free noble christian abstract christianity fearful depths. Virtues chaos philosophy salvation ultimate law salvation moral joy zarathustra pinnacle eternal-return ubermensch. Intentions merciful morality prejudice war. Holiest convictions hope deceptions ultimate society superiority.\n\nNoble marvelous pinnacle endless ideal. Self truth law inexpedient depths evil right holiest decrepit law truth philosophy. Salvation sea spirit virtues burying evil virtues pious salvation. Right ubermensch moral intentions dead hope noble play ocean revaluation convictions strong. Suicide fearful victorious joy chaos pious evil.",
        },
      ],
    },
    {
      id: 4,
      episode: "Episode 04",
      title: "The hidden messages of Jack Nielson",
      img: "/images/podcasts/preview/podcast-cover-ep04.jpg",
      imgAlt:
        "A highly-edited image modified using warm filters showing an elderly man with wide-growing hair and beard and spectacles resting underneath his nose looking at the camera with the words FYRRE PODCAST at the top left and EP 04 at the bottom left and an arrow pointing in the bottom right",
      date: "16 March 2022",
      duration: "1hr 20min",
      slug: "the-hidden-messages-of-jack-nielson",
      content: [
        {
          summary:
            "Decieve insofar ultimate virtues good christian marvelous value fearful zarathustra good. Selfish suicide moral morality horror passion. Salvation moral overcome right of. Society prejudice ocean inexpedient moral war free. War marvelous madness oneself ascetic passion burying.",
          section1:
            "Gains burying evil inexpedient philosophy aversion evil reason intentions faithful. Snare madness law faith war love justice.\n\nDisgust mountains justice truth madness burying pinnacle battle enlightenment inexpedient endless dead will. Morality mountains pinnacle eternal-return horror enlightenment holiest play victorious joy deceptions. Marvelous salvation reason pinnacle play noble derive christianity dead chaos ascetic of aversion love. Morality merciful faith ultimate morality convictions disgust transvaluation. Will grandeur decrepit justice truth.\n\nSpirit marvelous suicide decrepit ultimate love decrepit. will convictions virtues hope society fearful right chaos evil. Ultimate ocean strong reason against grandeur faithful of.\n\nMadness fearful salvation gains free transvaluation. Grandeur endless endless deceptions evil fearful ascetic madness self evil chaos. Prejudice joy right snare zarathustra marvelous inexpedient enlightenment disgust. Ideal of society abstract inexpedient joy god faithful ascetic convictions fearful pinnacle hope ultimate.",
          quote: [
            "Fearful endless gains disgust noble truth spirit. Abstract horror virtues transvaluation will depths madness. Decrepit aversion god transvaluation passion mountains.",
            "Friedrich Nietzsche",
          ],
          section2:
            "Horror love ocean joy faithful justice overcome good god enlightenment merciful holiest. Marvelous marvelous hope fearful disgust pinnacle convictions. Free free good endless right spirit. Mountains snare pinnacle abstract salvation god decrepit right dead law transvaluation eternal-return. Spirit of reason gains derive strong passion play against decieve inexpedient pious insofar. Mountains grandeur society ascetic evil ubermensch ultimate christian endless christianity eternal-return.\n\nJustice burying merciful justice spirit revaluation prejudice burying christian decieve pious abstract ocean. Ultimate justice decrepit dead right christian of sea holiest ascetic.\n\nReason ultimate victorious ultimate contradict convictions disgust prejudice disgust salvation passion prejudice. Inexpedient mountains fearful ultimate revaluation deceptions ubermensch will grandeur transvaluation love inexpedient. Decieve fearful superiority contradict faith ocean ultimate value revaluation aversion ubermensch. Will right grandeur depths derive endless. Decieve prejudice pious endless abstract battle intentions zarathustra marvelous mountains. Abstract merciful passion ubermensch right truth chaos.\n\nRevaluation mountains hope marvelous battle self war. Truth depths will free noble christian abstract christianity fearful depths. Virtues chaos philosophy salvation ultimate law salvation moral joy zarathustra pinnacle eternal-return ubermensch. Intentions merciful morality prejudice war. Holiest convictions hope deceptions ultimate society superiority.\n\nNoble marvelous pinnacle endless ideal. Self truth law inexpedient depths evil right holiest decrepit law truth philosophy. Salvation sea spirit virtues burying evil virtues pious salvation. Right ubermensch moral intentions dead hope noble play ocean revaluation convictions strong. Suicide fearful victorious joy chaos pious evil.",
        },
      ],
    },
    {
      id: 3,
      episode: "Episode 03",
      title: "Behind the scenes of the street art culture",
      img: "/images/podcasts/preview/podcast-cover-ep03.jpg",
      imgAlt:
        "A highly-edited side image modified using negative temperature and filters showing a man wearing overalls, sneakers and a beanie, covered in paint, whilst holding a paintbrush in his left hand and a bucket in his right painting a mural with a paint can on the floor in the foreground with the words FYRRE PODCAST at the top left and EP 03 at the bottom left and an arrow pointing in the bottom right",
      date: "16 March 2022",
      duration: "1hr 20min",
      slug: "behind-the-scenes-of-the-street-art-culture",
      content: [
        {
          summary:
            "Decieve insofar ultimate virtues good christian marvelous value fearful zarathustra good. Selfish suicide moral morality horror passion. Salvation moral overcome right of. Society prejudice ocean inexpedient moral war free. War marvelous madness oneself ascetic passion burying.",
          section1:
            "Gains burying evil inexpedient philosophy aversion evil reason intentions faithful. Snare madness law faith war love justice.\n\nDisgust mountains justice truth madness burying pinnacle battle enlightenment inexpedient endless dead will. Morality mountains pinnacle eternal-return horror enlightenment holiest play victorious joy deceptions. Marvelous salvation reason pinnacle play noble derive christianity dead chaos ascetic of aversion love. Morality merciful faith ultimate morality convictions disgust transvaluation. Will grandeur decrepit justice truth.\n\nSpirit marvelous suicide decrepit ultimate love decrepit. will convictions virtues hope society fearful right chaos evil. Ultimate ocean strong reason against grandeur faithful of.\n\nMadness fearful salvation gains free transvaluation. Grandeur endless endless deceptions evil fearful ascetic madness self evil chaos. Prejudice joy right snare zarathustra marvelous inexpedient enlightenment disgust. Ideal of society abstract inexpedient joy god faithful ascetic convictions fearful pinnacle hope ultimate.",
          quote: [
            "Fearful endless gains disgust noble truth spirit. Abstract horror virtues transvaluation will depths madness. Decrepit aversion god transvaluation passion mountains.",
            "Friedrich Nietzsche",
          ],
          section2:
            "Horror love ocean joy faithful justice overcome good god enlightenment merciful holiest. Marvelous marvelous hope fearful disgust pinnacle convictions. Free free good endless right spirit. Mountains snare pinnacle abstract salvation god decrepit right dead law transvaluation eternal-return. Spirit of reason gains derive strong passion play against decieve inexpedient pious insofar. Mountains grandeur society ascetic evil ubermensch ultimate christian endless christianity eternal-return.\n\nJustice burying merciful justice spirit revaluation prejudice burying christian decieve pious abstract ocean. Ultimate justice decrepit dead right christian of sea holiest ascetic.\n\nReason ultimate victorious ultimate contradict convictions disgust prejudice disgust salvation passion prejudice. Inexpedient mountains fearful ultimate revaluation deceptions ubermensch will grandeur transvaluation love inexpedient. Decieve fearful superiority contradict faith ocean ultimate value revaluation aversion ubermensch. Will right grandeur depths derive endless. Decieve prejudice pious endless abstract battle intentions zarathustra marvelous mountains. Abstract merciful passion ubermensch right truth chaos.\n\nRevaluation mountains hope marvelous battle self war. Truth depths will free noble christian abstract christianity fearful depths. Virtues chaos philosophy salvation ultimate law salvation moral joy zarathustra pinnacle eternal-return ubermensch. Intentions merciful morality prejudice war. Holiest convictions hope deceptions ultimate society superiority.\n\nNoble marvelous pinnacle endless ideal. Self truth law inexpedient depths evil right holiest decrepit law truth philosophy. Salvation sea spirit virtues burying evil virtues pious salvation. Right ubermensch moral intentions dead hope noble play ocean revaluation convictions strong. Suicide fearful victorious joy chaos pious evil.",
        },
      ],
    },
    {
      id: 2,
      episode: "Episode 02",
      title: "The art of movement",
      img: "/images/podcasts/preview/podcast-cover-ep02.jpg",
      imgAlt:
        "An orange-tinged side image showing a man crouched on the floor facing the ground with his eyes closed, his arms laid across his knees and a shape tattoed on his neck with the words FYRRE PODCAST at the top left and EP 02 at the bottom left and an arrow pointing in the bottom right",
      date: "16 March 2022",
      duration: "1hr 20min",
      slug: "the-art-of-movement",
      content: [
        {
          summary:
            "Decieve insofar ultimate virtues good christian marvelous value fearful zarathustra good. Selfish suicide moral morality horror passion. Salvation moral overcome right of. Society prejudice ocean inexpedient moral war free. War marvelous madness oneself ascetic passion burying.",
          section1:
            "Gains burying evil inexpedient philosophy aversion evil reason intentions faithful. Snare madness law faith war love justice.\n\nDisgust mountains justice truth madness burying pinnacle battle enlightenment inexpedient endless dead will. Morality mountains pinnacle eternal-return horror enlightenment holiest play victorious joy deceptions. Marvelous salvation reason pinnacle play noble derive christianity dead chaos ascetic of aversion love. Morality merciful faith ultimate morality convictions disgust transvaluation. Will grandeur decrepit justice truth.\n\nSpirit marvelous suicide decrepit ultimate love decrepit. will convictions virtues hope society fearful right chaos evil. Ultimate ocean strong reason against grandeur faithful of.\n\nMadness fearful salvation gains free transvaluation. Grandeur endless endless deceptions evil fearful ascetic madness self evil chaos. Prejudice joy right snare zarathustra marvelous inexpedient enlightenment disgust. Ideal of society abstract inexpedient joy god faithful ascetic convictions fearful pinnacle hope ultimate.",
          quote: [
            "Fearful endless gains disgust noble truth spirit. Abstract horror virtues transvaluation will depths madness. Decrepit aversion god transvaluation passion mountains.",
            "Friedrich Nietzsche",
          ],
          section2:
            "Horror love ocean joy faithful justice overcome good god enlightenment merciful holiest. Marvelous marvelous hope fearful disgust pinnacle convictions. Free free good endless right spirit. Mountains snare pinnacle abstract salvation god decrepit right dead law transvaluation eternal-return. Spirit of reason gains derive strong passion play against decieve inexpedient pious insofar. Mountains grandeur society ascetic evil ubermensch ultimate christian endless christianity eternal-return.\n\nJustice burying merciful justice spirit revaluation prejudice burying christian decieve pious abstract ocean. Ultimate justice decrepit dead right christian of sea holiest ascetic.\n\nReason ultimate victorious ultimate contradict convictions disgust prejudice disgust salvation passion prejudice. Inexpedient mountains fearful ultimate revaluation deceptions ubermensch will grandeur transvaluation love inexpedient. Decieve fearful superiority contradict faith ocean ultimate value revaluation aversion ubermensch. Will right grandeur depths derive endless. Decieve prejudice pious endless abstract battle intentions zarathustra marvelous mountains. Abstract merciful passion ubermensch right truth chaos.\n\nRevaluation mountains hope marvelous battle self war. Truth depths will free noble christian abstract christianity fearful depths. Virtues chaos philosophy salvation ultimate law salvation moral joy zarathustra pinnacle eternal-return ubermensch. Intentions merciful morality prejudice war. Holiest convictions hope deceptions ultimate society superiority.\n\nNoble marvelous pinnacle endless ideal. Self truth law inexpedient depths evil right holiest decrepit law truth philosophy. Salvation sea spirit virtues burying evil virtues pious salvation. Right ubermensch moral intentions dead hope noble play ocean revaluation convictions strong. Suicide fearful victorious joy chaos pious evil.",
        },
      ],
    },
    {
      id: 1,
      episode: "Episode 01",
      title: "10 artists you should definitely know",
      img: "/images/podcasts/preview/podcast-cover-ep01.jpg",
      imgAlt:
        "A blue-tinged side image showing a woman with a mole under her left eye looking downwards, and behind her is a statue of a man appearing parallel to her position with the words FYRRE PODCAST at the top left and EP 01 at the bottom left and an arrow pointing in the bottom right",
      date: "16 March 2022",
      duration: "1hr 20min",
      slug: "10-artists-you-should-definitely-know",
      content: [
        {
          summary:
            "Decieve insofar ultimate virtues good christian marvelous value fearful zarathustra good. Selfish suicide moral morality horror passion. Salvation moral overcome right of. Society prejudice ocean inexpedient moral war free. War marvelous madness oneself ascetic passion burying.",
          section1:
            "Gains burying evil inexpedient philosophy aversion evil reason intentions faithful. Snare madness law faith war love justice.\n\nDisgust mountains justice truth madness burying pinnacle battle enlightenment inexpedient endless dead will. Morality mountains pinnacle eternal-return horror enlightenment holiest play victorious joy deceptions. Marvelous salvation reason pinnacle play noble derive christianity dead chaos ascetic of aversion love. Morality merciful faith ultimate morality convictions disgust transvaluation. Will grandeur decrepit justice truth.\n\nSpirit marvelous suicide decrepit ultimate love decrepit. will convictions virtues hope society fearful right chaos evil. Ultimate ocean strong reason against grandeur faithful of.\n\nMadness fearful salvation gains free transvaluation. Grandeur endless endless deceptions evil fearful ascetic madness self evil chaos. Prejudice joy right snare zarathustra marvelous inexpedient enlightenment disgust. Ideal of society abstract inexpedient joy god faithful ascetic convictions fearful pinnacle hope ultimate.",
          quote: [
            "Fearful endless gains disgust noble truth spirit. Abstract horror virtues transvaluation will depths madness. Decrepit aversion god transvaluation passion mountains.",
            "Friedrich Nietzsche",
          ],
          section2:
            "Horror love ocean joy faithful justice overcome good god enlightenment merciful holiest. Marvelous marvelous hope fearful disgust pinnacle convictions. Free free good endless right spirit. Mountains snare pinnacle abstract salvation god decrepit right dead law transvaluation eternal-return. Spirit of reason gains derive strong passion play against decieve inexpedient pious insofar. Mountains grandeur society ascetic evil ubermensch ultimate christian endless christianity eternal-return.\n\nJustice burying merciful justice spirit revaluation prejudice burying christian decieve pious abstract ocean. Ultimate justice decrepit dead right christian of sea holiest ascetic.\n\nReason ultimate victorious ultimate contradict convictions disgust prejudice disgust salvation passion prejudice. Inexpedient mountains fearful ultimate revaluation deceptions ubermensch will grandeur transvaluation love inexpedient. Decieve fearful superiority contradict faith ocean ultimate value revaluation aversion ubermensch. Will right grandeur depths derive endless. Decieve prejudice pious endless abstract battle intentions zarathustra marvelous mountains. Abstract merciful passion ubermensch right truth chaos.\n\nRevaluation mountains hope marvelous battle self war. Truth depths will free noble christian abstract christianity fearful depths. Virtues chaos philosophy salvation ultimate law salvation moral joy zarathustra pinnacle eternal-return ubermensch. Intentions merciful morality prejudice war. Holiest convictions hope deceptions ultimate society superiority.\n\nNoble marvelous pinnacle endless ideal. Self truth law inexpedient depths evil right holiest decrepit law truth philosophy. Salvation sea spirit virtues burying evil virtues pious salvation. Right ubermensch moral intentions dead hope noble play ocean revaluation convictions strong. Suicide fearful victorious joy chaos pious evil.",
        },
      ],
    },
  ];
  return NextResponse.json(podcasts, { status: 200 });
}
