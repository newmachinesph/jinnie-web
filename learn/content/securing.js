// Path: Securing (40 to 59). Retirement math, health after 40, and six outlined lessons on
// building, protecting, and closing out the last working years.

const math = {
  id: 'securing.math',
  title: { en: 'Retirement math', tl: 'Matematika ng Retirement' },
  summary: { en: 'How SSS actually computes your pension, and the peso gap it leaves.', tl: 'Paano talaga kinukwenta ng SSS ang pension mo, at ang puwang na naiiwan nito.' },
  competency: { en: 'Can estimate their own SSS pension and the gap to their needs', tl: 'Kayang tantiyahin ang sariling SSS pension at ang puwang sa needs' },
  wish: 'safe',
  status: 'authored',
  bites: [
    {
      id: 'securing.math.1',
      title: { en: 'The number you are assuming', tl: 'Ang numerong ipinagpapalagay mo' },
      minutes: 3,
      hook: {
        text: { en: 'You are 45, earning ₱45,000 a month. Somewhere in your plans is a number labelled "pension". Most people have never checked what it actually is.', tl: '45 ka, kumikita ng ₱45,000 kada buwan. May numerong "pension" sa mga plano mo. Karamihan, hindi pa talaga na-check kung magkano ito.' },
        illo: 'hourglass',
      },
      show: {
        text: { en: 'SSS pays the highest of three formulas, computed from your average monthly salary credit and your credited years. The result, for most retirees, is about ₱5,000 to ₱6,000 a month, rising 10% a year through 2027.', tl: 'Binabayad ng SSS ang pinakamataas sa tatlong formula, mula sa average monthly salary credit mo at credited years mo. Ang resulta, para sa karamihan, ay mga ₱5,000 hanggang ₱6,000 kada buwan, tumataas ng 10% kada taon hanggang 2027.' },
        points: [
          { en: 'Average monthly salary credit (AMSC): roughly your average declared salary over your working life, capped by the contribution ceiling.', tl: 'Average monthly salary credit (AMSC): humigit-kumulang ang average ng idineklarang sweldo mo sa buong trabaho, may takda mula sa contribution ceiling.' },
          { en: 'Credited years (CYS): the years SSS has contributions on record for you, not years employed.', tl: 'Credited years (CYS): ang mga taon na may contributions sa record ng SSS, hindi ang taon na empleyado ka.' },
          { en: 'The minimum pension itself rises in steps, from ₱1,200 to ₱2,400, depending on CYS.', tl: 'Tumataas din ang minimum pension, mula ₱1,200 hanggang ₱2,400, depende sa CYS.' },
        ],
        illo: 'hourglass',
        animate: true,
      },
      do: {
        type: 'predict',
        prompt: { en: 'Slide to your guess: what is the average monthly SSS retirement pension actually paid today?', tl: 'I-slide ang hula mo: magkano ang average monthly SSS retirement pension na binabayad ngayon?' },
        min: 0, max: 15000, step: 500, format: 'peso', answer: 6000,
        why: { en: 'About ₱6,000 today: ₱5,120 on average in mid-2025, plus 10% increases in September 2025 and 2026. The worker in this lesson lands lower, at ₱4,300, because the formula, not bad luck, produces that figure.', tl: 'Mga ₱6,000 ngayon: ₱5,120 ang average noong kalagitnaan ng 2025, dagdag ang 10% na taas noong Setyembre 2025 at 2026. Mas mababa ang manggagawa sa lesson na ito, ₱4,300, dahil ang formula, hindi malas, ang gumagawa ng numerong iyon.' },
      },
      keep: {
        text: { en: 'A pension you have not computed is a guess wearing a number.', tl: 'Ang pension na hindi mo pa nakwenta ay hula na may nakasuot na numero.' },
        action: null,
      },
    },
    {
      id: 'securing.math.2',
      title: { en: 'Three formulas, the highest wins', tl: 'Tatlong formula, ang pinakamataas ang panalo' },
      minutes: 4,
      hook: {
        text: { en: 'SSS does not pick a formula for you. It computes three and pays whichever gives the most.', tl: 'Hindi pumipili ng formula ang SSS para sa iyo. Kinukwenta nito ang tatlo at binabayad ang pinakamalaki.' },
        illo: 'certificate',
      },
      show: {
        text: { en: 'Formula (a) rewards years worked. ₱300, plus 20% of AMSC, plus 2% of AMSC for every credited year beyond ten.', tl: 'Ginagantimpalaan ng formula (a) ang bawat taon ng pagtatrabaho. ₱300, dagdag 20% ng AMSC, dagdag 2% ng AMSC kada credited year lampas sa sampu.' },
        points: [
          { en: 'Formula (a): ₱300 + 20% of AMSC + 2% of AMSC × (CYS − 10).', tl: 'Formula (a): ₱300 + 20% ng AMSC + 2% ng AMSC × (CYS − 10).' },
          { en: 'Formula (b): 40% of AMSC, no years needed beyond the minimum ten.', tl: 'Formula (b): 40% ng AMSC, walang kailangang taon lampas sa minimum na sampu.' },
          { en: 'Formula (c): the floor, ₱1,200 to ₱2,400 by CYS.', tl: 'Formula (c): ang floor, ₱1,200 hanggang ₱2,400 ayon sa CYS.' },
          { en: 'Even at ₱45,000 today, AMSC can land near ₱8,000, since it averages decades of contributions, including years when the ceiling was far below today’s ₱35,000.', tl: 'Kahit ₱45,000 ngayon, puwedeng malapit sa ₱8,000 ang AMSC, dahil average ito ng dekada ng contributions, kasama ang mga taong mas mababa pa ang ceiling kaysa ₱35,000 ngayon.' },
        ],
        illo: 'certificate',
        animate: true,
      },
      do: {
        type: 'number',
        prompt: { en: 'AMSC ₱8,000, 25 credited years. Using formula (a), what is the monthly pension?', tl: 'AMSC ₱8,000, 25 credited years. Gamit ang formula (a), magkano ang buwanang pension?' },
        answer: 4300,
        tolerance: 0,
        format: 'peso',
        worked: { en: '300 + (0.20 × 8,000) + (0.02 × 8,000 × 15) = 300 + 1,600 + 2,400 = ₱4,300. The fifteen is 25 years minus the first ten.', tl: '300 + (0.20 × 8,000) + (0.02 × 8,000 × 15) = 300 + 1,600 + 2,400 = ₱4,300. Ang labinlima ay 25 taon minus ang unang sampu.' },
      },
      keep: {
        text: { en: 'Every credited year past ten adds 2% of your AMSC to formula (a), for life.', tl: 'Bawat credited year lampas sa sampu ay nagdaragdag ng 2% ng AMSC mo sa formula (a), habambuhay.' },
        action: null,
      },
    },
    {
      id: 'securing.math.3',
      title: { en: 'Which formula actually pays', tl: 'Alin ang talagang binabayad' },
      minutes: 3,
      hook: {
        text: { en: 'For the same worker, formula (b) and the floor also produce a number. Only one of the three is the pension.', tl: 'Para sa parehong manggagawa, may numero rin ang formula (b) at ang floor. Isa lang sa tatlo ang siyang pension.' },
        illo: 'scale',
      },
      show: {
        text: { en: 'AMSC ₱8,000, 25 credited years, gives three candidates. SSS pays the largest.', tl: 'Ang AMSC ₱8,000, 25 credited years, ay may tatlong kandidato. Binabayad ng SSS ang pinakamalaki.' },
        points: [
          { en: 'Formula (a): ₱4,300, computed in the last bite.', tl: 'Formula (a): ₱4,300, kinwenta sa nakaraang bite.' },
          { en: 'Formula (b), 40% of AMSC: 0.40 × 8,000 = ₱3,200.', tl: 'Formula (b), 40% ng AMSC: 0.40 × 8,000 = ₱3,200.' },
          { en: 'Formula (c), the floor at 25 years: ₱2,400.', tl: 'Formula (c), ang floor sa 25 taon: ₱2,400.' },
        ],
        illo: 'scale',
        animate: false,
      },
      do: {
        type: 'choice',
        prompt: { en: 'AMSC ₱8,000, 25 credited years. Which figure is the actual monthly pension?', tl: 'AMSC ₱8,000, 25 credited years. Alin ang talagang buwanang pension?' },
        options: [
          { text: { en: '₱4,300, from formula (a)', tl: '₱4,300, mula sa formula (a)' }, correct: true, why: { en: 'The highest of the three. Formula (a) wins whenever credited years run well past ten.', tl: 'Ang pinakamataas sa tatlo. Panalo ang formula (a) kapag malayo na sa sampu ang credited years.' } },
          { text: { en: '₱3,200, from formula (b)', tl: '₱3,200, mula sa formula (b)' }, correct: false, why: { en: 'Correctly computed, but not the highest. Formula (b) only wins with very few credited years above ten.', tl: 'Tama ang kwenta, pero hindi ito ang pinakamataas. Panalo lang ang formula (b) kapag kaunti ang credited years lampas sa sampu.' } },
          { text: { en: '₱2,400, the floor', tl: '₱2,400, ang floor' }, correct: false, why: { en: 'The floor is a safety net, not a ceiling. It only pays when the other two formulas fall below it.', tl: 'Ang floor ay safety net, hindi kisame. Babayaran lang ito kapag mas mababa ang dalawang formula.' } },
        ],
      },
      keep: {
        text: { en: 'Compute all three. The one you expect is not always the one that wins.', tl: 'Kwentahin ang tatlo. Hindi laging ang inaasahan mo ang panalo.' },
        action: null,
      },
    },
    {
      id: 'securing.math.4',
      title: { en: 'The ten-year floor', tl: 'Ang sampung-taong floor' },
      minutes: 3,
      hook: {
        text: { en: 'A worker retires with exactly ten credited years, the minimum for a monthly pension at all. Below ten, SSS pays a lump sum instead.', tl: 'May manggagawang nag-retire na eksaktong sampung credited years lang, ang minimum para may buwanang pension. Sa ilalim ng sampu, lump sum ang binabayad ng SSS.' },
        illo: 'certificate',
      },
      show: {
        text: { en: 'At exactly ten years, formula (a) has no "beyond ten" years to add, but it can still beat the floor. AMSC ₱6,000: 300 + (0.20 × 6,000) + 0 = ₱1,500, above the ₱1,200 floor for this bracket.', tl: 'Sa eksaktong sampung taon, walang "lampas sa sampu" na taon na maidadagdag sa formula (a), pero puwede pa rin itong tumalo sa floor. AMSC ₱6,000: 300 + (0.20 × 6,000) + 0 = ₱1,500, mas mataas sa ₱1,200 floor ng bracket na ito.' },
        points: [
          { en: 'The floor is ₱1,200 for ten to nineteen credited years, ₱2,400 for twenty or more.', tl: 'Ang floor ay ₱1,200 sa sampu hanggang labinsiyam na credited years, ₱2,400 sa dalawampu pataas.' },
          { en: 'Formula (a) beats the floor even at the ten-year minimum, for most realistic salaries.', tl: 'Tinatalo ng formula (a) ang floor kahit sa sampung-taong minimum, para sa karamihan ng makatotohanang sweldo.' },
        ],
        illo: 'certificate',
        animate: false,
      },
      do: {
        type: 'match',
        prompt: { en: 'Match each term to what it means.', tl: 'I-match ang bawat termino sa kahulugan nito.' },
        pairs: [
          { a: { en: 'AMSC', tl: 'AMSC' }, b: { en: 'Average monthly salary credit, capped by the SSS ceiling', tl: 'Average monthly salary credit, may takda mula sa SSS ceiling' } },
          { a: { en: 'CYS', tl: 'CYS' }, b: { en: 'Credited years, the years with contributions on record', tl: 'Credited years, ang mga taong may contributions sa record' } },
          { a: { en: 'The floor', tl: 'Ang floor' }, b: { en: 'The minimum pension, ₱1,200 to ₱2,400 by CYS', tl: 'Ang minimum pension, ₱1,200 hanggang ₱2,400 ayon sa CYS' } },
          { a: { en: 'Formula (a)', tl: 'Formula (a)' }, b: { en: '₱300 plus 20% of AMSC plus 2% of AMSC per year beyond ten', tl: '₱300 dagdag 20% ng AMSC dagdag 2% ng AMSC kada taon lampas sa sampu' } },
        ],
      },
      keep: {
        text: { en: 'Ten years is the minimum for a pension, not for a decent one. The years after that are the ones that matter.', tl: 'Ang sampung taon ang minimum para sa pension, hindi para sa disenteng pension. Ang mga taon pagkatapos noon ang mahalaga.' },
        action: { kind: 'commitment', label: { en: 'Check my SSS credited years', tl: 'Tingnan ang credited years ko sa SSS' }, payload: { id: 'check-benefits' } },
      },
    },
    {
      id: 'securing.math.5',
      title: { en: 'The gap in pesos', tl: 'Ang puwang sa piso' },
      minutes: 4,
      hook: {
        text: { en: 'A modest retirement still needs about ₱15,000 a month for food, utilities, and medicine. The pension from bite two was ₱4,300.', tl: 'Ang simpleng retirement ay nangangailangan pa rin ng mga ₱15,000 kada buwan para sa pagkain, kuryente, at gamot. ₱4,300 ang pension mula sa bite two.' },
        illo: 'coins',
      },
      show: {
        text: { en: 'The gap is what the pension does not cover. It has to come from somewhere else, every month, for as long as retirement lasts.', tl: 'Ang puwang ay ang hindi sakop ng pension. Kailangan itong manggaling sa iba, bawat buwan, habang tumatagal ang retirement.' },
        points: [
          { en: 'Illustrative monthly needs in retirement: ₱15,000.', tl: 'Illustrative na buwanang needs sa retirement: ₱15,000.' },
          { en: 'A twenty-year retirement, from 60 to 80, multiplies a monthly gap into a lifetime one.', tl: 'Ang dalawampung-taong retirement, mula 60 hanggang 80, ay pinaparami ang buwanang puwang sa habambuhay na puwang.' },
        ],
        illo: 'coins',
        animate: false,
      },
      do: {
        type: 'number',
        prompt: { en: 'Monthly needs ₱15,000. Monthly pension ₱4,300. What is the monthly gap?', tl: 'Buwanang needs ₱15,000. Buwanang pension ₱4,300. Ano ang buwanang puwang?' },
        answer: 10700,
        tolerance: 0,
        format: 'peso',
        worked: { en: '15,000 − 4,300 = ₱10,700 a month, or ₱128,400 a year. Over twenty years of retirement, that is ₱2,568,000 that the pension alone will not provide.', tl: '15,000 − 4,300 = ₱10,700 kada buwan, o ₱128,400 kada taon. Sa loob ng dalawampung taon ng retirement, ₱2,568,000 iyon na hindi kayang ibigay ng pension lang.' },
      },
      keep: {
        text: { en: 'Saving ₱5,000 a month with no investment growth would take about forty-three years to close that gap. Fifteen years is what most people in this lesson actually have. The next lessons are about the difference growth makes.', tl: 'Ang pag-ipon ng ₱5,000 kada buwan nang walang investment growth ay aabot ng mga apatnapu’t tatlong taon para punan ang puwang. Labinlimang taon ang totoong meron ang karamihan sa lesson na ito. Ang susunod na mga lesson ay tungkol sa pagkakaiba ng growth.' },
        action: { kind: 'wish', label: { en: 'Set the retirement gap as a wish', tl: 'Gawing wish ang retirement gap' }, payload: { key: 'retirement', title: { en: 'Close the pension gap', tl: 'Punan ang puwang ng pension' }, amount: 2568000 } },
      },
    },
    {
      id: 'securing.math.6',
      title: { en: 'Five years, either way', tl: 'Limang taon, kahit anong paraan' },
      minutes: 5,
      hook: {
        text: { en: 'Same person, same ₱10,700 gap, two starting points five years apart.', tl: 'Parehong tao, parehong ₱10,700 na puwang, dalawang simula na limang taon ang layo.' },
        illo: 'hourglass',
      },
      show: {
        text: { en: 'The formulas in this lesson do not care when you start. The peso total does.', tl: 'Walang pakialam ang mga formula sa lesson na ito kung kailan ka magsisimula. Pero may pakialam ang kabuuang piso.' },
        points: [],
        illo: 'hourglass',
        animate: false,
      },
      do: {
        type: 'story',
        start: 'n1',
        nodes: {
          n1: {
            text: { en: 'You are 45, fifteen years from 60. The gap is ₱10,700 a month. You can start saving toward it now, or wait until your children finish school in five years.', tl: '45 ka, labinlimang taon bago mag-60. ₱10,700 ang puwang kada buwan. Puwede kang mag-ipon simula ngayon, o maghintay hanggang matapos mag-aral ang mga anak mo sa loob ng limang taon.' },
            choices: [
              { text: { en: 'Start now, ₱3,000 a month', tl: 'Simulan ngayon, ₱3,000 kada buwan' }, next: 'a1' },
              { text: { en: 'Wait five years, then start', tl: 'Maghintay ng limang taon, saka simulan' }, next: 'b1' },
            ],
          },
          a1: {
            text: { en: 'Five years pass. ₱3,000 × 12 × 5 = ₱180,000 set aside, with no investment growth counted yet. Ten years remain before 60.', tl: 'Limang taon ang lumipas. ₱3,000 × 12 × 5 = ₱180,000 ang natabi, wala pang investment growth na kasama. Sampung taon na lang bago mag-60.' },
            balance: 180000,
            choices: [
              { text: { en: 'Keep saving ₱3,000 a month for the last ten years', tl: 'Ituloy ang ₱3,000 kada buwan sa huling sampung taon' }, next: 'a2' },
              { text: { en: 'Raise it to ₱5,000 now that school fees are lighter', tl: 'Itaas sa ₱5,000 ngayong gumaan na ang school fees' }, next: 'a3' },
            ],
          },
          a2: {
            text: { en: 'At 60: ₱180,000 plus ₱3,000 × 12 × 10 = ₱360,000, for a total of ₱540,000. Short of the full ₱2,568,000 gap, but a real base, and fifteen years of the habit already built.', tl: 'Sa 60: ₱180,000 dagdag ₱3,000 × 12 × 10 = ₱360,000, kabuuang ₱540,000. Kulang pa sa buong ₱2,568,000 na puwang, pero totoong base na, at labinlimang taon na ng gawi ang natayo.' },
            balance: 540000,
            outcome: 'steady',
          },
          a3: {
            text: { en: 'At 60: ₱180,000 plus ₱5,000 × 12 × 10 = ₱600,000, for a total of ₱780,000. Same fifteen years, a larger base, because the raise came early enough to compound across a full decade.', tl: 'Sa 60: ₱180,000 dagdag ₱5,000 × 12 × 10 = ₱600,000, kabuuang ₱780,000. Parehong labinlimang taon, mas malaking base, dahil maaga sumapit ang taas para makaapekto sa isang buong dekada.' },
            balance: 780000,
            outcome: 'steady',
          },
          b1: {
            text: { en: 'Five years pass with nothing set aside. You are 50, with ten years left before 60, and the same ₱10,700 gap.', tl: 'Limang taon ang lumipas nang wala kang natabi. 50 ka na, may sampung taon na lang bago mag-60, at pareho pa ring ₱10,700 ang puwang.' },
            balance: 0,
            choices: [
              { text: { en: 'Start at ₱3,000 a month, the same amount as before', tl: 'Simulan sa ₱3,000 kada buwan, parehong halaga noon' }, next: 'b2' },
              { text: { en: 'Start at ₱6,000 a month to try to catch up', tl: 'Simulan sa ₱6,000 kada buwan para subukang makabawi' }, next: 'b3' },
            ],
          },
          b2: {
            text: { en: 'At 60: ₱3,000 × 12 × 10 = ₱360,000. The same monthly amount, started five years later, produced ₱180,000 less than the person who started right away. The years lost were not free.', tl: 'Sa 60: ₱3,000 × 12 × 10 = ₱360,000. Parehong buwanang halaga, limang taon na huli ang simula, ₱180,000 na mas kaunti kaysa sa nagsimula agad. Hindi libre ang mga taong nawala.' },
            balance: 360000,
            outcome: 'costly',
          },
          b3: {
            text: { en: 'At 60: ₱6,000 × 12 × 10 = ₱720,000, close to the ₱780,000 reached by starting early at ₱5,000. It took doubling the monthly amount to nearly close a five-year head start.', tl: 'Sa 60: ₱6,000 × 12 × 10 = ₱720,000, malapit sa ₱780,000 na naabot ng maagang nagsimula sa ₱5,000. Doble ang buwanang halaga ang kinailangan para halos maabutan ang limang-taong pauna.' },
            balance: 720000,
            outcome: 'steady',
          },
        },
      },
      keep: {
        text: { en: 'The formula rewards years, not intentions. Five years, either direction, is the whole lesson.', tl: 'Gantimpala ng formula ang taon, hindi intensyon. Limang taon, kahit saang direksyon, iyon na ang buong lesson.' },
        action: null,
      },
    },
  ],
};

const health = {
  id: 'securing.health',
  title: { en: 'Health after 40', tl: 'Kalusugan Pagkalampas ng 40' },
  summary: { en: 'What PhilHealth and an HMO actually cover past 40, and the fund sized for the rest.', tl: 'Ano ang talagang sakop ng PhilHealth at HMO pagkalampas ng 40, at ang fund na nakaangkop sa natitira.' },
  competency: { en: 'Can size a health emergency fund for their age', tl: 'Kayang sukatin ang health emergency fund ayon sa edad' },
  wish: 'safe',
  status: 'authored',
  bites: [
    {
      id: 'securing.health.1',
      title: { en: 'The half that does not change with your age', tl: 'Ang kalahating hindi nagbabago sa edad mo' },
      minutes: 2,
      hook: {
        text: { en: 'A ₱150,000 bill at 45 is not the same risk as one at 25. The body changes. The PhilHealth formula does not.', tl: 'Iba ang risk ng ₱150,000 na bill sa edad na 45 kumpara sa 25. Nagbabago ang katawan. Hindi nagbabago ang formula ng PhilHealth.' },
        illo: 'shield',
      },
      show: {
        text: { en: 'PhilHealth pays a fixed case rate per condition, not a percentage of the bill. On average it covered about 52% of a hospital bill in 2023, down from 75% in 2018, at any age.', tl: 'Nagbabayad ang PhilHealth ng fixed case rate kada kondisyon, hindi porsyento ng bill. Sa average, mga 52% ng hospital bill noong 2023, mula 75% noong 2018, kahit anong edad.' },
        points: [
          { en: 'The share covered does not rise with your age, and it has been sinking as case rates stay frozen. The bills you are likely to face get larger.', tl: 'Hindi tumataas ang share na sakop dahil sa edad, at lumiliit pa ito habang nakapirmi ang case rates. Lumalaki ang mga bill na malamang harapin mo.' },
          { en: 'Conditions common after 40, heart disease, diabetes complications, cancer, carry higher case rates and higher gaps.', tl: 'Ang mga kondisyong karaniwan pagkalampas ng 40, sakit sa puso, komplikasyon ng diabetes, cancer, ay may mas mataas na case rate at mas malaking puwang.' },
        ],
        illo: 'shield',
        animate: true,
      },
      do: {
        type: 'predict',
        prompt: { en: 'Slide to your guess: what share of an average hospital bill does PhilHealth cover?', tl: 'I-slide ang hula mo: ilang porsyento ng average hospital bill ang sagot ng PhilHealth?' },
        min: 0, max: 100, step: 5, format: 'percent', answer: 52,
        why: { en: 'About 52% in 2023, by a PIDS study of support value, down from 75% in 2018. Case rates have not moved; hospital charges have. What also moves is the size of the bill you bring to it.', tl: 'Mga 52% noong 2023, ayon sa pag-aaral ng PIDS sa support value, mula 75% noong 2018. Hindi gumalaw ang case rates; gumalaw ang singil ng ospital. Gumagalaw din ang laki ng bill na dala mo.' },
      },
      keep: {
        text: { en: 'The share is set by the case rate, not by your age, and it is sinking. Plan around what it leaves, not what it covers.', tl: 'Nakatakda ang share sa case rate, hindi sa edad mo, at lumiliit ito. Magplano base sa natitira, hindi sa sakop.' },
        action: null,
      },
    },
    {
      id: 'securing.health.2',
      title: { en: 'When the HMO gets smaller', tl: 'Kapag lumiliit ang HMO' },
      minutes: 3,
      hook: {
        text: { en: 'You earn ₱50,000 a month. The same job, the same HMO card, and a maximum benefit limit that was never explained to shrink.', tl: 'Kumikita ka ng ₱50,000 kada buwan. Parehong trabaho, parehong HMO card, at maximum benefit limit na hindi ipinaliwanag na lumiliit.' },
        illo: 'shield',
      },
      show: {
        text: { en: 'Many employer HMOs reduce the yearly maximum benefit limit, or add a co-payment, once a member passes an age set by the plan, often somewhere in the fifties. Read the fine print now, while you can still act on it.', tl: 'Maraming employer HMO ang binabawasan ang taunang maximum benefit limit, o nagdaragdag ng co-payment, kapag lumampas na ang miyembro sa edad na itinakda ng plano, madalas sa kalagitnaan ng fifties. Basahin ang fine print ngayon, habang may magagawa ka pa.' },
        points: [
          { en: 'A retiree or resigned employee usually loses the HMO entirely, not just its limit.', tl: 'Karaniwang nawawala ang buong HMO, hindi lang ang limit, kapag nag-retire o nag-resign.' },
          { en: 'A personal HMO or health card bought individually costs more with age, and some stop offering new enrolment past a cutoff.', tl: 'Mas mahal ang personal na HMO o health card na binili nang mag-isa habang tumatanda, at may mga hindi na tumatanggap ng bagong miyembro lampas sa cutoff.' },
        ],
        illo: 'shield',
        animate: false,
      },
      do: {
        type: 'choice',
        prompt: { en: 'You turn 55 and your employer HMO’s maximum benefit limit drops under the plan’s age rule. What is the most useful next step?', tl: 'Nag-55 ka at bumaba ang maximum benefit limit ng employer HMO mo dahil sa age rule ng plano. Ano ang pinaka-makatutulong na susunod na hakbang?' },
        options: [
          { text: { en: 'Ask HR for the exact new limit and what happens to the HMO after you leave the company', tl: 'Tanungin ang HR ng eksaktong bagong limit at kung ano ang mangyayari sa HMO pag-alis mo sa kumpanya' }, correct: true, why: { en: 'The number in the fine print, not the assumption, is what your emergency fund should be sized against.', tl: 'Ang numero sa fine print, hindi ang palagay, ang dapat batayan ng laki ng emergency fund mo.' } },
          { text: { en: 'Assume the coverage is the same as before and move on', tl: 'Ipagpalagay na pareho pa rin ang coverage at magpatuloy' }, correct: false, why: { en: 'Here is the number: age-based limits are common enough that assuming costs more than asking.', tl: 'Narito ang numero: karaniwan na ang age-based limits kaya mas mahal ang mag-assume kaysa magtanong.' } },
          { text: { en: 'Cancel the HMO since it is shrinking anyway', tl: 'Kanselahin na lang ang HMO dahil lumiliit naman ito' }, correct: false, why: { en: 'A smaller limit still pays something. Zero pays nothing.', tl: 'May binabayad pa rin ang mas maliit na limit. Wala talagang binabayaran ang zero.' } },
        ],
      },
      keep: {
        text: { en: 'The HMO you have at 40 is not the HMO you will have at 60. Read the plan document before it matters.', tl: 'Ang HMO mo sa 40 ay hindi ang HMO mo sa 60. Basahin ang plan document bago ito maging importante.' },
        action: null,
      },
    },
    {
      id: 'securing.health.3',
      title: { en: 'A lump sum for the big diagnosis', tl: 'Lump sum para sa malaking diagnosis' },
      minutes: 3,
      hook: {
        text: { en: 'A colleague survives a heart attack. The hospital bill is covered mostly. The six months away from income is not.', tl: 'Nabuhay ang katrabaho pagkatapos ng heart attack. Halos sakop ang hospital bill. Hindi sakop ang anim na buwang wala sa trabaho.' },
        illo: 'scale',
      },
      show: {
        text: { en: 'Critical illness cover pays a lump sum on diagnosis of a listed condition, heart attack, cancer, stroke, kidney failure, regardless of the actual hospital bill. It replaces income, not just medical cost.', tl: 'Nagbabayad ang critical illness cover ng lump sum pag-diagnose ng listadong kondisyon, heart attack, cancer, stroke, kidney failure, kahit ano ang aktwal na hospital bill. Pinapalitan nito ang kita, hindi lang ang gastos sa medikal.' },
        points: [],
        illo: 'scale',
        animate: false,
      },
      do: {
        type: 'compare',
        prompt: { en: 'You are 48 with two children still in school. Which protects the household income better if a critical illness strikes?', tl: '48 ka na may dalawang anak na nag-aaral pa. Alin ang mas mabuting proteksyon sa kita ng pamilya kung tumama ang critical illness?' },
        options: [
          { title: { en: 'PhilHealth and HMO only', tl: 'PhilHealth at HMO lang' }, lines: [{ en: 'Pays hospital and doctor bills', tl: 'Bayad sa ospital at doktor' }, { en: 'Pays nothing while you cannot work', tl: 'Walang bayad habang hindi ka makapagtrabaho' }], effective: { en: 'Medical bills covered, income gap open', tl: 'Sakop ang medical bill, bukas pa ang puwang sa kita' }, cheaper: false },
          { title: { en: 'PhilHealth, HMO, plus a critical illness rider', tl: 'PhilHealth, HMO, dagdag critical illness rider' }, lines: [{ en: 'Illustrative premium ₱800 a month at 48', tl: 'Illustrative na premium ₱800 kada buwan sa edad 48' }, { en: 'Lump sum on diagnosis, illustrative ₱500,000', tl: 'Lump sum pag-diagnose, illustrative ₱500,000' }], effective: { en: '₱9,600 a year buys income replacement the other two do not provide', tl: '₱9,600 kada taon ay bumibili ng income replacement na wala sa iba' }, cheaper: true },
        ],
        why: { en: 'The rider does not replace PhilHealth or an HMO. It covers what neither does: the months your salary stops but the bills at home do not. Premiums here are illustrative; get an actual quote for your age.', tl: 'Hindi kapalit ng PhilHealth o HMO ang rider. Sinasakop nito ang hindi sakop ng dalawa: ang mga buwang tumigil ang sweldo pero hindi tumitigil ang bills sa bahay. Illustrative ang premium dito; kumuha ng tunay na quote para sa edad mo.' },
      },
      keep: {
        text: { en: 'Insurance for this age covers the paycheck, not just the patient.', tl: 'Ang insurance sa edad na ito ay sakop ang sweldo, hindi lang ang pasyente.' },
        action: null,
      },
    },
    {
      id: 'securing.health.4',
      title: { en: 'Sizing the hospital fund', tl: 'Sinusukat ang hospital fund' },
      minutes: 3,
      hook: {
        text: { en: 'The children’s tuition, a parent’s maintenance medicine, and now a possible hospital bill are all asking for the same peso.', tl: 'Ang tuition ng mga anak, gamot ng magulang, at posibleng hospital bill ay parehong humihingi ng parehong piso.' },
        illo: 'coins',
      },
      show: {
        text: { en: 'Size the fund for the gap PhilHealth and the HMO leave, not for the full bill.', tl: 'Sukatin ang fund para sa puwang na iniwan ng PhilHealth at HMO, hindi para sa buong bill.' },
        points: [
          { en: 'A serious surgery can run ₱150,000, illustrative.', tl: 'Ang seryosong surgery ay puwedeng umabot ng ₱150,000, illustrative.' },
          { en: 'After 55, many households can no longer count on an employer HMO to close the rest of the gap.', tl: 'Pagkalampas ng 55, marami nang sambahayan ang hindi na maaasahan sa employer HMO para punan ang natitira.' },
        ],
        illo: 'coins',
        animate: false,
      },
      do: {
        type: 'number',
        prompt: { en: 'A surgery bill is ₱150,000. PhilHealth covers about 52%. With no HMO to cover the rest, what is the out-of-pocket amount?', tl: '₱150,000 ang surgery bill. Mga 52% ang sakop ng PhilHealth. Walang HMO na sasakop sa natitira, magkano ang out-of-pocket?' },
        answer: 72000,
        tolerance: 0,
        format: 'peso',
        worked: { en: '150,000 × (1 − 0.52) = 150,000 × 0.48 = ₱72,000. This is the number a health emergency fund at this age should be able to produce on short notice.', tl: '150,000 × (1 − 0.52) = 150,000 × 0.48 = ₱72,000. Ito ang numerong dapat kayang ilabas ng health emergency fund sa edad na ito, sa maikling abiso.' },
      },
      keep: {
        text: { en: '₱72,000, reachable in a day, insured, separate from the general fund.', tl: '₱72,000, maaabot sa isang araw, insured, hiwalay sa general fund.' },
        action: { kind: 'wish', label: { en: 'Set a health fund on top of the emergency fund', tl: 'Gumawa ng health fund bukod sa emergency fund' }, payload: { key: 'health', title: { en: 'Hospital gap, covered', tl: 'Puwang sa ospital, sakop' }, amount: 72000 } },
      },
    },
    {
      id: 'securing.health.5',
      title: { en: 'The call about your mother', tl: 'Ang tawag tungkol sa nanay mo' },
      minutes: 5,
      hook: {
        text: { en: 'The phone rings during a work call. Your mother has been admitted. You will decide what to do before you know the full bill.', tl: 'Tumunog ang phone habang may work call. Na-admit ang nanay mo. Magdedesisyon ka bago mo pa malaman ang buong bill.' },
        illo: 'family',
      },
      show: {
        text: { en: 'A parent’s illness rarely announces its price in advance. The fund exists so the first decision is not about money.', tl: 'Bihirang malaman agad ang magiging presyo ng sakit ng isang magulang. Ang fund ay para sa unang desisyon na hindi tungkol sa pera.' },
        points: [],
        illo: 'family',
        animate: false,
      },
      do: {
        type: 'story',
        start: 'n1',
        nodes: {
          n1: {
            text: { en: 'Your mother, 68, is admitted for pneumonia. The hospital asks for a ₱20,000 deposit before treatment starts.', tl: 'Na-admit ang nanay mo, 68, dahil sa pneumonia. Humihingi ang ospital ng ₱20,000 na deposito bago magsimula ang treatment.' },
            choices: [
              { text: { en: 'Send the deposit from the health fund', tl: 'Ipadala ang deposito mula sa health fund' }, next: 'a1' },
              { text: { en: 'Ask a sibling to split the deposit with you', tl: 'Ipahati ang deposito sa isang kapatid' }, next: 'b1' },
            ],
          },
          a1: {
            text: { en: 'Treatment starts immediately. The fund holds ₱46,000. Five days later, at discharge, ₱10,000 remains after PhilHealth.', tl: 'Agad nagsimula ang treatment. May natitirang ₱46,000 ang fund. Limang araw pagkatapos, sa discharge, ₱10,000 ang natitira pagkatapos ng PhilHealth.' },
            balance: 46000,
            choices: [
              { text: { en: 'Pay the remaining ₱10,000 from the fund', tl: 'Bayaran ang natitirang ₱10,000 mula sa fund' }, next: 'a2' },
              { text: { en: 'Ask a sibling to cover the remaining ₱10,000 instead', tl: 'Ipahingi na lang sa kapatid ang natitirang ₱10,000' }, next: 'a3' },
            ],
          },
          a2: {
            text: { en: 'The fund settles the full bill. It holds ₱36,000, and refills over the following months. No debt was taken on, and no sibling owes or is owed anything.', tl: 'Nasakop ng fund ang buong bill. May natitirang ₱36,000, at napupuno ulit sa mga sumunod na buwan. Walang utang na kinuha, at walang kapatid na may utang o pinagkakautangan.' },
            balance: 36000,
            outcome: 'steady',
          },
          a3: {
            text: { en: 'The fund keeps ₱46,000. Your sibling covers the last ₱10,000, a favor that sits between you until it is repaid or returned some other way.', tl: 'Nananatili sa ₱46,000 ang fund. Sinagot ng kapatid mo ang huling ₱10,000, pabor na nakabitin sa pagitan ninyo hanggang mabayaran o mabalik sa ibang paraan.' },
            balance: 46000,
            outcome: 'steady',
          },
          b1: {
            text: { en: 'Your sibling agrees to send ₱10,000, matching your ₱10,000. Arranging the transfer takes two hours before the hospital receives the full deposit and treatment can start.', tl: 'Pumayag ang kapatid mo na magpadala ng ₱10,000, katumbas ng ₱10,000 mo. Dalawang oras bago naayos ang transfer at natanggap ng ospital ang buong deposito para makapagsimula ang treatment.' },
            balance: 66000,
            choices: [
              { text: { en: 'Split the remaining ₱10,000 at discharge the same way', tl: 'Ihati ulit ang natitirang ₱10,000 sa discharge' }, next: 'b2' },
              { text: { en: 'Cover the remaining ₱10,000 yourself, from your own budget, not the fund', tl: 'Ikaw na ang sasagot sa natitirang ₱10,000, mula sa sarili mong budget, hindi sa fund' }, next: 'b3' },
            ],
          },
          b2: {
            text: { en: 'At discharge, the remaining ₱10,000 is split again, ₱5,000 each. Every new charge during the five-day stay needed its own round of messages and waiting before it was paid, while the health fund sat untouched.', tl: 'Sa discharge, hinati ulit ang natitirang ₱10,000, ₱5,000 bawat isa. Bawat bagong singil sa loob ng limang araw ay nangangailangan ng sariling round ng mensahe at paghihintay bago mabayaran, habang nakaupo lang ang health fund.' },
            balance: -15000,
            outcome: 'costly',
          },
          b3: {
            text: { en: 'You pay the last ₱10,000 from your own budget. Your total out of pocket reaches ₱20,000, the deposit half plus the balance, while the health fund remains at ₱72,000, untouched and unable to help in the two hours that mattered most.', tl: 'Ikaw ang nagbayad ng huling ₱10,000 mula sa sarili mong budget. Umabot sa ₱20,000 ang total mong nailabas, kalahati ng deposito dagdag ang balance, habang nananatili sa ₱72,000 ang health fund, hindi nagalaw at hindi nakatulong sa dalawang oras na pinakamahalaga.' },
            balance: -20000,
            outcome: 'costly',
          },
        },
      },
      keep: {
        text: { en: 'A fund at the ready removes the two hours you cannot get back at an admission desk.', tl: 'Ang fund na handa ay inaalis ang dalawang oras na hindi mo na mababawi sa admission desk.' },
        action: null,
      },
    },
  ],
};

const booster = {
  id: 'securing.booster',
  title: { en: 'Pension Booster and PERA', tl: 'Pension Booster at PERA' },
  summary: { en: 'Two voluntary accounts that add to the number from the math lesson, and what each actually returns.', tl: 'Dalawang voluntary account na nagdaragdag sa numero mula sa math lesson, at ang aktwal na ibinabalik ng bawat isa.' },
  competency: { en: 'Can compare Pension Booster and PERA for their own contribution', tl: 'Kayang ikumpara ang Pension Booster at PERA para sa sariling contribution' },
  wish: 'have',
  status: 'authored',
  bites: [
    {
      id: 'securing.booster.1',
      title: { en: 'What Pension Booster adds on top of your SSS pension', tl: 'Ano ang idinaragdag ng Pension Booster sa SSS pension mo' },
      minutes: 3,
      hook: {
        text: { en: 'The pension from the last lesson was ₱4,300, and the gap was ₱10,700 a month. SSS has a second, voluntary account meant to close part of that.', tl: '₱4,300 ang pension mula sa nakaraang lesson, at ₱10,700 ang puwang kada buwan. May pangalawa, voluntary na account ang SSS na para punan ang bahagi niyon.' },
        illo: 'hourglass',
      },
      show: {
        text: { en: 'Pension Booster is a voluntary SSS contribution, minimum ₱500 a month, separate from the regular contribution the formula uses. It grows tax-free and is paid out on top of the regular pension.', tl: 'Ang Pension Booster ay voluntary na contribution sa SSS, minimum ₱500 kada buwan, hiwalay sa regular contribution na ginagamit ng formula. Tax-free ang paglaki nito at binabayad bilang dagdag sa regular na pension.' },
        points: [
          { en: 'Regular SSS contributions decide the pension from the last lesson. Booster is a second, optional contribution on top of that.', tl: 'Ang regular SSS contributions ang nagdedesisyon sa pension mula sa nakaraang lesson. Ang Booster ay pangalawa, optional na contribution na dagdag doon.' },
          { en: 'Minimum ₱500 a month. There is no formula to compute here; whatever is put in grows tax-free until retirement.', tl: 'Minimum ₱500 kada buwan. Walang formula na kwentahan dito; lumalaki nang tax-free ang anumang inilagay hanggang retirement.' },
        ],
        illo: 'hourglass',
        animate: true,
      },
      do: {
        type: 'choice',
        prompt: { en: 'You already have the pension the formula computes. What does Pension Booster do?', tl: 'Meron ka nang pension na kinukwenta ng formula. Ano ang ginagawa ng Pension Booster?' },
        options: [
          { text: { en: 'Adds a second, voluntary pension on top of the regular one', tl: 'Nagdaragdag ng pangalawa, voluntary na pension bukod sa regular' }, correct: true, why: { en: 'Booster does not touch the formula from the last lesson. It is a separate contribution that grows on its own.', tl: 'Hindi ginagalaw ng Booster ang formula mula sa nakaraang lesson. Hiwalay itong contribution na lumalaki nang mag-isa.' } },
          { text: { en: 'Replaces the regular formula with a higher guaranteed pension', tl: 'Pinapalitan ang regular formula ng mas mataas na guaranteed pension' }, correct: false, why: { en: 'Here is the number: the formula from the last lesson still applies in full. Booster adds to it, it does not replace it.', tl: 'Narito ang numero: buo pa ring nagagamit ang formula mula sa nakaraang lesson. Nagdaragdag lang ang Booster, hindi ito pinapalitan.' } },
          { text: { en: 'Raises the ten-year floor to a higher minimum', tl: 'Itinataas ang sampung-taong floor sa mas mataas na minimum' }, correct: false, why: { en: 'The floor from the last lesson is unchanged. Booster is a contribution the member chooses to make, not a rule change.', tl: 'Hindi nagbabago ang floor mula sa nakaraang lesson. Ang Booster ay contribution na pinipili ng miyembro, hindi pagbabago ng patakaran.' } },
        ],
      },
      keep: {
        text: { en: 'Booster does not fix the formula. It sits beside it.', tl: 'Hindi inaayos ng Booster ang formula. Katabi lang ito nito.' },
        action: null,
      },
    },
    {
      id: 'securing.booster.2',
      title: { en: 'PERA’s 5% tax credit, computed', tl: 'Ang 5% tax credit ng PERA, kinwenta' },
      minutes: 3,
      hook: {
        text: { en: 'PERA is a second voluntary account, run through an accredited administrator rather than SSS directly. It pays something Booster does not: cash back at tax time.', tl: 'Ang PERA ay pangalawang voluntary account, sa pamamagitan ng accredited administrator, hindi direkta sa SSS. May binabayad itong hindi kaya ng Booster: cash back sa tax time.' },
        illo: 'certificate',
      },
      show: {
        text: { en: 'Every peso put into PERA earns a 5% tax credit, on top of tax-free growth on the investment itself. The credit is separate money, paid regardless of how the investment performs.', tl: 'Bawat piso na inilagay sa PERA ay may 5% tax credit, dagdag pa sa tax-free growth ng investment mismo. Hiwalay na pera ang credit, binabayad kahit ano ang performance ng investment.' },
        points: [
          { en: 'The credit is 5% of what is contributed for the year, not 5% of any gain.', tl: 'Ang credit ay 5% ng inilagay sa loob ng taon, hindi 5% ng anumang gain.' },
          { en: 'The annual cap is ₱200,000 in contributions for most members and ₱400,000 for OFWs, doubled by the 2025 Capital Markets Efficiency Promotion Act.', tl: 'Ang taunang cap ay ₱200,000 sa contributions para sa karamihan at ₱400,000 para sa OFW, dinoble ng 2025 Capital Markets Efficiency Promotion Act.' },
        ],
        illo: 'certificate',
        animate: true,
      },
      do: {
        type: 'number',
        prompt: { en: 'You contribute ₱5,000 a month to PERA, ₱60,000 for the year. At 5%, what tax credit do you receive?', tl: 'Nag-contribute ka ng ₱5,000 kada buwan sa PERA, ₱60,000 sa buong taon. Sa 5%, magkano ang tax credit mo?' },
        answer: 3000,
        tolerance: 0,
        format: 'peso',
        worked: { en: '60,000 × 0.05 = ₱3,000. This comes back regardless of how the underlying investment performs that year.', tl: '60,000 × 0.05 = ₱3,000. Ibinabalik ito kahit ano ang performance ng investment sa taong iyon.' },
      },
      keep: {
        text: { en: '₱3,000 back on ₱60,000 contributed is money Booster does not pay.', tl: '₱3,000 na balik sa ₱60,000 na kontribusyon ay perang hindi binabayad ng Booster.' },
        action: { kind: 'wish', label: { en: 'Fund a Booster or PERA account for a year', tl: 'Pondohan ang Booster o PERA account sa loob ng isang taon' }, payload: { key: 'boosterPera', title: { en: 'A year of Booster or PERA', tl: 'Isang taon ng Booster o PERA' }, amount: 60000 } },
      },
    },
    {
      id: 'securing.booster.3',
      title: { en: 'Tax-free growth, Booster against PERA', tl: 'Tax-free growth, Booster laban sa PERA' },
      minutes: 3,
      hook: {
        text: { en: 'Both accounts grow tax-free. Only one pays a credit for showing up at all.', tl: 'Parehong tax-free ang paglaki. Isa lang ang may binabayad na credit sa pagpasok mo pa lang.' },
        illo: 'scale',
      },
      show: {
        text: { en: 'Booster stays inside the SSS account the member already has. PERA needs a separate account with an accredited administrator, who invests the money in a fund the member chooses.', tl: 'Nananatili ang Booster sa loob ng SSS account na meron na ang miyembro. Kailangan ng PERA ng hiwalay na account sa accredited administrator, na siyang mag-iinvest sa fund na pinili ng miyembro.' },
        points: [],
        illo: 'scale',
        animate: false,
      },
      do: {
        type: 'compare',
        prompt: { en: 'Same ₱5,000 a month. Which account pays more for the contribution alone?', tl: 'Parehong ₱5,000 kada buwan. Alin ang mas mataas ang bayad para sa contribution lang?' },
        options: [
          { title: { en: 'Pension Booster', tl: 'Pension Booster' }, lines: [{ en: 'Minimum ₱500 a month, inside the existing SSS account', tl: 'Minimum ₱500 kada buwan, nasa loob ng existing SSS account' }, { en: 'Grows tax-free to retirement, no separate credit', tl: 'Tax-free ang paglaki hanggang retirement, walang hiwalay na credit' }], effective: { en: 'Tax-free growth only', tl: 'Tax-free growth lang' }, cheaper: false },
          { title: { en: 'PERA', tl: 'PERA' }, lines: [{ en: 'Minimum ₱500 a month, through an accredited administrator', tl: 'Minimum ₱500 kada buwan, sa accredited administrator' }, { en: 'Tax-free growth, plus a 5% credit Booster does not pay', tl: 'Tax-free growth, dagdag ang 5% credit na hindi binabayad ng Booster' }], effective: { en: 'Tax-free growth plus a credit on top', tl: 'Tax-free growth dagdag ang credit sa ibabaw' }, cheaper: true },
        ],
        why: { en: 'PERA pays the same tax-free growth as Booster, plus the 5% credit. The trade is a separate account to open and an investment fund to choose, rather than a deduction inside SSS.', tl: 'Binabayad ng PERA ang parehong tax-free growth ng Booster, dagdag ang 5% credit. Ang kapalit ay hiwalay na account na buksan at investment fund na pipiliin, sa halip na deduction lang sa loob ng SSS.' },
      },
      keep: {
        text: { en: 'The credit is PERA’s edge. The paperwork is its price.', tl: 'Ang credit ang bentahe ng PERA. Ang paperwork ang presyo nito.' },
        action: null,
      },
    },
    {
      id: 'securing.booster.4',
      title: { en: 'The employer’s 150% deduction, matched to what it means', tl: 'Ang 150% deduction ng employer, itinugma sa kahulugan' },
      minutes: 3,
      hook: {
        text: { en: 'Since July 2025, an employer that contributes to a worker’s PERA gets a bigger deduction for doing it. The rule has terms worth knowing before asking HR about it.', tl: 'Simula Hulyo 2025, mas malaking deduction ang employer na nag-a-contribute sa PERA ng manggagawa. May mga terminong dapat malaman bago tanungin ang HR.' },
        illo: 'certificate',
      },
      show: {
        text: { en: 'RA 12214 lets an employer deduct 150% of what it contributes to an employee’s PERA from its own taxable income. It costs the employer less, in tax, to fund a worker’s retirement account than to pay the same peso as salary.', tl: 'Sa RA 12214, puwedeng i-deduct ng employer ang 150% ng kontribusyon nito sa PERA ng empleyado mula sa sariling taxable income. Mas mababa ang tax cost sa employer na pondohan ang retirement account ng manggagawa kaysa ibigay ang parehong piso bilang sweldo.' },
        points: [],
        illo: 'certificate',
        animate: false,
      },
      do: {
        type: 'match',
        prompt: { en: 'Match each term to what it means.', tl: 'I-match ang bawat termino sa kahulugan nito.' },
        pairs: [
          { a: { en: 'Pension Booster', tl: 'Pension Booster' }, b: { en: 'Voluntary SSS add-on, minimum ₱500 a month, tax-free growth to retirement', tl: 'Voluntary na dagdag sa SSS, minimum ₱500 kada buwan, tax-free growth hanggang retirement' } },
          { a: { en: 'PERA', tl: 'PERA' }, b: { en: 'Voluntary account with a 5% contribution credit and tax-free growth', tl: 'Voluntary account na may 5% contribution credit at tax-free growth' } },
          { a: { en: 'The 150% deduction', tl: 'Ang 150% deduction' }, b: { en: 'Since July 2025, an employer deducts one and a half times its own PERA contribution from its taxable income', tl: 'Simula Hulyo 2025, ide-deduct ng employer ang isa’t kalahating beses ng sariling kontribusyon sa PERA mula sa taxable income nito' } },
          { a: { en: 'The annual cap', tl: 'Ang taunang cap' }, b: { en: '₱200,000 in PERA contributions a year for most members', tl: '₱200,000 na PERA contributions kada taon para sa karamihan' } },
        ],
      },
      keep: {
        text: { en: 'A worker who asks about a PERA match is asking for something the employer’s own tax return now favors.', tl: 'Ang manggagawang nagtatanong tungkol sa PERA match ay humihingi ng bagay na pinapaboran na rin ng sariling tax return ng employer.' },
        action: null,
      },
    },
    {
      id: 'securing.booster.5',
      title: { en: '₱5,000 a month, fifteen years, either account', tl: '₱5,000 kada buwan, labinlimang taon, alinmang account' },
      minutes: 5,
      hook: {
        text: { en: 'Same ₱5,000 a month, fifteen years to 60. The choice is Pension Booster or PERA. The bigger question is whether the fifteen years get used in full.', tl: 'Parehong ₱5,000 kada buwan, labinlimang taon bago mag-60. Ang pagpipilian ay Pension Booster o PERA. Ang mas malaking tanong ay kung magagamit nang buo ang labinlimang taon.' },
        illo: 'hourglass',
      },
      show: {
        text: { en: 'Both accounts are illustrated here at a steady 6%. What changes the ending balance more than the account chosen is whether the contribution runs the full fifteen years.', tl: 'Parehong account dito ay illustrative sa steady na 6%. Ang mas malaking nagbabago sa huling balance ay hindi ang pinili mong account, kundi kung tumakbo ito ng buong labinlimang taon.' },
        points: [],
        illo: 'hourglass',
        animate: false,
      },
      do: {
        type: 'story',
        start: 'n1',
        nodes: {
          n1: {
            text: { en: 'You are 45. You commit ₱5,000 a month for fifteen years toward the pension gap. First, choose the account.', tl: '45 ka. Nag-commit ka ng ₱5,000 kada buwan sa loob ng labinlimang taon para sa puwang ng pension. Una, piliin ang account.' },
            choices: [
              { text: { en: 'Open a Pension Booster', tl: 'Magbukas ng Pension Booster' }, next: 'a1' },
              { text: { en: 'Open a PERA account', tl: 'Magbukas ng PERA account' }, next: 'b1' },
            ],
          },
          a1: {
            text: { en: 'Ten years in, ₱600,000 contributed. A medical bill tempts you to pause the Booster for the last five years.', tl: 'Sampung taon na ang lumipas, ₱600,000 na ang na-contribute. May medical bill na tumutukso na itigil ang Booster sa huling limang taon.' },
            balance: 600000,
            choices: [
              { text: { en: 'Keep contributing the last five years', tl: 'Ituloy ang contribution sa huling limang taon' }, next: 'a2' },
              { text: { en: 'Pause for the last five years', tl: 'I-pause sa huling limang taon' }, next: 'a3' },
            ],
          },
          a2: {
            text: { en: 'Full fifteen years, ₱900,000 contributed. At a steady illustrative 6%, the Booster reaches about ₱1,450,000.', tl: 'Buong labinlimang taon, ₱900,000 ang na-contribute. Sa steady na illustrative 6%, umaabot ang Booster sa mga ₱1,450,000.' },
            balance: 1450000,
            outcome: 'steady',
          },
          a3: {
            text: { en: 'Contributions stop at ten years, ₱600,000 total. The same 6% on a smaller, shorter-growing base reaches about ₱950,000, real money, five years lighter than staying the course.', tl: 'Tumigil ang contribution sa sampung taon, ₱600,000 ang kabuuan. Ang parehong 6% sa mas maliit, mas maiksing paglaki ay umaabot lang ng mga ₱950,000, totoong pera, pero limang taon na kulang kumpara sa itinuloy.' },
            balance: 950000,
            outcome: 'costly',
          },
          b1: {
            text: { en: 'PERA works the same way, ₱5,000 a month, plus a 5% credit on every peso contributed. Ten years in, the same medical bill tempts the same pause.', tl: 'Pareho ang PERA, ₱5,000 kada buwan, dagdag ang 5% credit sa bawat pisong na-contribute. Sampung taon na, may parehong medical bill na tumutukso ring mag-pause.' },
            balance: 600000,
            choices: [
              { text: { en: 'Keep contributing the last five years', tl: 'Ituloy ang contribution sa huling limang taon' }, next: 'b2' },
              { text: { en: 'Pause for the last five years', tl: 'I-pause sa huling limang taon' }, next: 'b3' },
            ],
          },
          b2: {
            text: { en: 'Full fifteen years, ₱900,000 contributed, plus about ₱45,000 already received back as credits along the way. The account itself reaches about ₱1,450,000, the credits spent or saved elsewhere.', tl: 'Buong labinlimang taon, ₱900,000 ang na-contribute, dagdag ang mga ₱45,000 na natanggap na bilang credits sa daan. Umaabot ang account mismo sa mga ₱1,450,000, ang mga credit ay nagastos o na-save na sa iba.' },
            balance: 1450000,
            outcome: 'steady',
          },
          b3: {
            text: { en: 'Contributions stop at ten years, ₱600,000 total, plus about ₱30,000 already credited back. The account itself reaches about ₱950,000, the same shortfall as pausing Booster early, the credits already banked being the one difference.', tl: 'Tumigil ang contribution sa sampung taon, ₱600,000 ang kabuuan, dagdag ang mga ₱30,000 na na-credit na. Umaabot ang account mismo sa mga ₱950,000, parehong kulang ng maagang pag-pause sa Booster, ang mga na-bank nang credit na lang ang pagkakaiba.' },
            balance: 950000,
            outcome: 'costly',
          },
        },
      },
      keep: {
        text: { en: 'Booster or PERA, ₱5,000 a month for fifteen years reaches about the same number. Stopping early costs the same, whichever account holds it.', tl: 'Booster man o PERA, ₱5,000 kada buwan sa loob ng labinlimang taon ay umaabot sa halos parehong numero. Pareho ang gastos ng maagang paghinto, kahit anong account ang may hawak nito.' },
        action: null,
      },
    },
  ],
};

const ladder = {
  id: 'securing.ladder',
  title: { en: 'MP2 ladder and bonds', tl: 'MP2 Ladder at Bonds' },
  summary: { en: 'Turning the last fifteen years into a ladder of five-year MP2 tranches and bonds, safer as 60 gets closer.', tl: 'Ginagawang ladder ang huling labinlimang taon gamit ang limang-taong MP2 tranches at bonds, mas ligtas habang lumalapit ang 60.' },
  competency: { en: 'Can build an MP2 and bond ladder for the years before 60', tl: 'Kayang gumawa ng MP2 at bond ladder para sa mga taon bago mag-60' },
  wish: 'have',
  status: 'authored',
  bites: [
    {
      id: 'securing.ladder.1',
      title: { en: 'Why one lump MP2 tranche is not enough', tl: 'Bakit hindi sapat ang isang lump MP2 tranche' },
      minutes: 3,
      hook: {
        text: { en: 'At 50, you put ₱300,000 into a single MP2 account. At 53, an emergency needs ₱100,000 of it.', tl: 'Sa edad 50, naglagay ka ng ₱300,000 sa isang MP2 account. Sa 53, may emergency na kailangan ng ₱100,000 mula rito.' },
        illo: 'certificate',
      },
      show: {
        text: { en: 'MP2 is a five-year term account, dividend 7.12% for 2025, minimum ₱500 a month. A single tranche locks whatever is inside for the whole five years, not part of it.', tl: 'Ang MP2 ay limang-taong term account, dividend na 7.12% para sa 2025, minimum ₱500 kada buwan. Ang iisang tranche ay naka-lock sa loob ng buong limang taon, hindi bahagi lang nito.' },
        points: [
          { en: 'One tranche, one maturity date. Whatever is inside stays inside until that date.', tl: 'Isang tranche, isang maturity date. Nananatili sa loob ang anumang laman hanggang sa petsang iyon.' },
          { en: 'A ladder of smaller tranches, opened in different years, spreads the maturity dates instead of stacking them all on one day.', tl: 'Ang ladder ng mas maliliit na tranches, binuksan sa magkakaibang taon, ay ikinakalat ang maturity dates sa halip na patungin ang lahat sa isang araw.' },
        ],
        illo: 'certificate',
        animate: true,
      },
      do: {
        type: 'choice',
        prompt: { en: 'You put ₱300,000 into a single MP2 account at 50. At 53, an emergency needs ₱100,000. What can you draw from that account?', tl: 'Naglagay ka ng ₱300,000 sa isang MP2 account sa edad 50. Sa 53, may emergency na kailangan ng ₱100,000. Ano ang kaya mong ilabas mula sa account na iyon?' },
        options: [
          { text: { en: 'Nothing. The term runs the full five years, to 55', tl: 'Wala. Tumatakbo ang term ng buong limang taon, hanggang 55' }, correct: true, why: { en: 'A single tranche has one maturity date for the whole amount. Nothing in it is available before that date.', tl: 'Isang maturity date lang ang meron ang iisang tranche para sa buong halaga. Wala sa loob nito ang available bago ang petsang iyon.' } },
          { text: { en: 'The full ₱300,000, closing the account early without penalty', tl: 'Ang buong ₱300,000, isasara ang account nang maaga nang walang penalty' }, correct: false, why: { en: 'Closing MP2 before the five-year term is not how the product works. The fixed term is the trade for the fixed dividend.', tl: 'Hindi ganito gumagana ang MP2 kapag isinara bago ang limang-taong term. Ang fixed term ang kapalit ng fixed dividend.' } },
          { text: { en: 'Half the account, since MP2 allows a midterm partial withdrawal', tl: 'Kalahati ng account, dahil may midterm partial withdrawal daw ang MP2' }, correct: false, why: { en: 'This course’s facts do not list a midterm partial withdrawal. Treat a single tranche as locked for the whole five years.', tl: 'Walang midterm partial withdrawal na nakalista sa facts ng course na ito. Ituring na naka-lock ang iisang tranche sa buong limang taon.' } },
        ],
      },
      keep: {
        text: { en: 'One MP2 tranche is one big lock. A ladder is many small ones.', tl: 'Ang isang MP2 tranche ay isang malaking lock. Ang ladder ay maraming maliliit na lock.' },
        action: null,
      },
    },
    {
      id: 'securing.ladder.2',
      title: { en: 'Building a five-year MP2 ladder', tl: 'Paggawa ng limang-taong MP2 ladder' },
      minutes: 3,
      hook: {
        text: { en: 'The fix for the last bite’s problem is not a bigger emergency fund. It is opening MP2 differently from the start.', tl: 'Ang solusyon sa problema ng nakaraang bite ay hindi mas malaking emergency fund. Ito ay ibang paraan ng pagbukas ng MP2 mula sa simula.' },
        illo: 'calendar',
      },
      show: {
        text: { en: 'A ladder opens one new MP2 tranche every year instead of one lump sum. After five years, a tranche matures every single year from then on.', tl: 'Ang ladder ay nagbubukas ng bagong MP2 tranche bawat taon sa halip na isang lump sum. Pagkatapos ng limang taon, may nag-mamature na tranche bawat taon mula noon.' },
        points: [
          { en: 'Each tranche needs only the minimum ₱500 a month or more to open.', tl: 'Ang bawat tranche ay kailangan lang ng minimum ₱500 kada buwan o higit pa para mabuksan.' },
          { en: 'By year five, five tranches are open, staggered a year apart from each other.', tl: 'Sa ikalimang taon, limang tranches na ang bukas, magkakalayo ng isang taon sa isa\'t isa.' },
        ],
        illo: 'calendar',
        animate: true,
      },
      do: {
        type: 'order',
        prompt: { en: 'Put the steps of building an MP2 ladder in order.', tl: 'Ayusin ang mga hakbang sa paggawa ng MP2 ladder.' },
        steps: [
          { en: 'Open the first MP2 tranche this year', tl: 'Buksan ang unang MP2 tranche ngayong taon' },
          { en: 'Open a second tranche next year, same minimum or more', tl: 'Buksan ang pangalawang tranche sa susunod na taon, parehong minimum o higit pa' },
          { en: 'Continue opening one new tranche every year for five years', tl: 'Ituloy ang pagbukas ng bagong tranche bawat taon sa loob ng limang taon' },
          { en: 'By year five, five tranches are open, each maturing a year apart', tl: 'Sa ikalimang taon, limang tranches na ang bukas, bawat isa ay nag-mamature nang isang taon ang layo' },
          { en: 'Every year after that, one tranche matures and can be renewed or drawn', tl: 'Bawat taon pagkatapos noon, may isang tranche na nag-mamature na puwedeng i-renew o kunin' },
        ],
        why: { en: 'A ladder trades one large decision for five small ones. By year five, no single emergency is more than a year away from a tranche freeing up.', tl: 'Ipinapalit ng ladder ang isang malaking desisyon sa limang maliliit. Sa ikalimang taon, walang emergency na mas malayo sa isang taon mula sa pagpapalaya ng isang tranche.' },
      },
      keep: {
        text: { en: 'A ladder does not need a lump sum. It needs a new tranche every year.', tl: 'Hindi kailangan ng ladder ang lump sum. Kailangan nito ng bagong tranche bawat taon.' },
        action: { kind: 'commitment', label: { en: 'Start funding a wish on the next two paydays', tl: 'Simulan ang pagpondo ng wish sa susunod na dalawang payday' }, payload: { id: 'fund-30' } },
      },
    },
    {
      id: 'securing.ladder.3',
      title: { en: 'What a Retail Treasury Bond pays over five years', tl: 'Ano ang bayad ng Retail Treasury Bond sa limang taon' },
      minutes: 3,
      hook: {
        text: { en: 'A Retail Treasury Bond does not need a ladder. It pays a fixed rate, on a fixed schedule, for its whole five-year term.', tl: 'Hindi kailangan ng ladder ang Retail Treasury Bond. Nagbabayad ito ng fixed rate, sa fixed na schedule, sa buong limang-taong term nito.' },
        illo: 'coins',
      },
      show: {
        text: { en: 'Retail Treasury Bond 31, sold in 2025, pays 6% a year for five years, minimum ₱5,000, interest paid every quarter and taxed at 20%.', tl: 'Ang Retail Treasury Bond 31, na ibinenta noong 2025, ay nagbabayad ng 6% kada taon sa loob ng limang taon, minimum ₱5,000, quarterly ang bayad ng interest at 20% ang tax.' },
        points: [
          { en: 'The 6% is a yearly rate, split into four quarterly payments.', tl: 'Ang 6% ay taunang rate, hinahati sa apat na quarterly na bayad.' },
          { en: 'The 20% tax is taken from the interest before it reaches the buyer, not from the principal.', tl: 'Kinukuha ang 20% tax mula sa interest bago ito maabot ang bumili, hindi mula sa principal.' },
        ],
        illo: 'coins',
        animate: false,
      },
      do: {
        type: 'number',
        prompt: { en: 'You buy ₱100,000 of the bond, paying 6% a year, taxed at 20%. What is the net interest for the year?', tl: 'Bumili ka ng ₱100,000 ng bond, 6% kada taon, may 20% na tax. Magkano ang net interest sa isang taon?' },
        answer: 4800,
        tolerance: 0,
        format: 'peso',
        worked: { en: '100,000 × 0.06 = ₱6,000 gross a year. 6,000 × (1 − 0.20) = ₱4,800 net, paid in four quarterly instalments of ₱1,200 each.', tl: '100,000 × 0.06 = ₱6,000 gross kada taon. 6,000 × (1 − 0.20) = ₱4,800 net, binabayad sa apat na quarterly instalments na ₱1,200 bawat isa.' },
      },
      keep: {
        text: { en: '₱4,800 a year, in four payments, for locking ₱100,000 for five years.', tl: '₱4,800 kada taon, sa apat na bayad, sa pag-lock ng ₱100,000 sa loob ng limang taon.' },
        action: null,
      },
    },
    {
      id: 'securing.ladder.4',
      title: { en: 'Shifting the mix as 60 approaches', tl: 'Paglipat ng hatian habang lumalapit ang 60' },
      minutes: 4,
      hook: {
        text: { en: 'A portfolio that made sense at 45 is not the one that belongs at 58, two years from needing the money.', tl: 'Ang portfolio na tama noong 45 ay hindi na ang tama sa edad 58, dalawang taon na lang bago kailanganin ang pera.' },
        illo: 'jars',
      },
      show: {
        text: { en: 'As 60 approaches, shift the mix from stocks toward bonds and MP2, and keep about one year of needs in cash by 58.', tl: 'Habang lumalapit ang 60, ilipat ang hatian mula sa stocks papunta sa bonds at MP2, at panatilihin ang mga isang taong pangangailangan sa cash sa edad 58.' },
        points: [
          { en: 'Cash covers a bad year without forcing a sale. Bonds and MP2 are the steadier, locked-term half. Stocks keep a smaller share for growth.', tl: 'Sinasakop ng cash ang masamang taon nang hindi pinipilit ang pagbenta. Ang bonds at MP2 ang mas ligtas, locked-term na kalahati. Nananatili ang stocks sa mas maliit na bahagi para sa growth.' },
        ],
        illo: 'jars',
        animate: false,
      },
      do: {
        type: 'allocate',
        prompt: { en: 'At 58, two years before 60, split a ₱1,000,000 portfolio the way this lesson recommends.', tl: 'Sa edad 58, dalawang taon bago mag-60, hatiin ang ₱1,000,000 portfolio ayon sa irekomenda ng lesson na ito.' },
        total: 1000000,
        step: 10000,
        jars: [
          { key: 'cash', label: { en: 'Cash', tl: 'Cash' }, hint: { en: 'About one year of needs, ready without selling anything', tl: 'Mga isang taong pangangailangan, handa nang walang ibebenta' }, guide: [15, 20] },
          { key: 'bonds', label: { en: 'Bonds and MP2', tl: 'Bonds at MP2' }, hint: { en: 'Fixed-term, steadier than stocks this close to 60', tl: 'Fixed-term, mas ligtas kaysa stocks ngayong malapit na sa 60' }, guide: [55, 65] },
          { key: 'stocks', label: { en: 'Stocks and equity funds', tl: 'Stocks at equity funds' }, hint: { en: 'Higher growth, higher swings, a smaller share now', tl: 'Mas mataas na growth, mas malaking swings, mas maliit na bahagi ngayon' }, guide: [15, 25] },
        ],
        why: { en: 'By 58, a year of cash means a bad month in the market never forces a sale. Bonds and MP2 take the bulk since both are fixed-term and safer this close to needing the money. Stocks keep a smaller share for whatever growth is still needed.', tl: 'Sa edad 58, ang isang taong cash ay nangangahulugang hindi kailanman pipilitin ng masamang buwan sa market ang pagbenta. Bonds at MP2 ang kumukuha ng malaking bahagi dahil parehong fixed-term at mas ligtas ngayong malapit na ang pangangailangan sa pera. Nananatili ang stocks sa mas maliit na bahagi para sa growth na kailangan pa.' },
      },
      keep: {
        text: { en: 'The closer to 60, the less room for a bad year in stocks to fix itself.', tl: 'Habang papalapit sa 60, mas kaunti ang puwang para umayos nang mag-isa ang masamang taon sa stocks.' },
        action: null,
      },
    },
    {
      id: 'securing.ladder.5',
      title: { en: 'The tranche that matured five years too early', tl: 'Ang tranche na nag-matured limang taon nang maaga' },
      minutes: 5,
      hook: {
        text: { en: 'Same ₱500,000, same fifteen years to 60. The choice is one lump MP2 tranche or a five-year ladder of smaller ones.', tl: 'Parehong ₱500,000, parehong labinlimang taon bago mag-60. Ang pagpipilian ay isang lump MP2 tranche o limang-taong ladder ng mas maliliit.' },
        illo: 'hourglass',
      },
      show: {
        text: { en: 'A tranche maturing is not the end of the decision. What happens next, renew, cash out, or shift to something safer, matters just as much.', tl: 'Ang pag-matured ng tranche ay hindi katapusan ng desisyon. Ang susunod na mangyayari, i-renew, i-cash out, o ilipat sa mas ligtas, ay kasing-halaga rin.' },
        illo: 'hourglass',
        animate: false,
      },
      do: {
        type: 'story',
        start: 'n1',
        nodes: {
          n1: {
            text: { en: 'You are 50, with ₱500,000 to place in MP2 ahead of 60. Decide how to open it.', tl: '50 ka, may ₱500,000 na ilalagay sa MP2 bago mag-60. Magdesisyon kung paano ito buksan.' },
            choices: [
              { text: { en: 'Put it all into a single MP2 tranche now', tl: 'Ilagay ang lahat sa isang MP2 tranche ngayon' }, next: 'a1' },
              { text: { en: 'Split it into five yearly tranches of ₱100,000, a ladder', tl: 'Hatiin sa limang taunang tranches na ₱100,000, isang ladder' }, next: 'b1' },
            ],
          },
          a1: {
            text: { en: 'The single tranche locks the full ₱500,000 for five years, maturing at 55, still five years before 60.', tl: 'Naka-lock ang buong ₱500,000 sa isang tranche sa loob ng limang taon, mag-mamature sa edad 55, limang taon pa bago mag-60.' },
            balance: 500000,
            choices: [
              { text: { en: 'At 55, renew the whole amount for another five-year term', tl: 'Sa 55, i-renew ang buong halaga sa isa pang limang-taong term' }, next: 'a2' },
              { text: { en: 'At 55, cash it all out, five years before it is needed', tl: 'Sa 55, i-cash out lahat, limang taon bago kailanganin' }, next: 'a3' },
            ],
          },
          a2: {
            text: { en: 'Renewed at 55, the tranche matures again at 60, exactly when it is needed. Grown at an illustrative 7%, the ₱500,000 reaches about ₱700,000.', tl: 'Ni-renew sa 55, mag-mamature ulit ang tranche sa 60, eksaktong kailangan na. Lumaki sa illustrative na 7%, umaabot sa mga ₱700,000 ang ₱500,000.' },
            balance: 700000,
            outcome: 'steady',
          },
          a3: {
            text: { en: 'Cashed out at 55 into an ordinary savings account, the ₱500,000 waits five years earning close to nothing, no MP2 dividend at all for those years.', tl: 'Na-cash out sa 55 papunta sa ordinaryong savings account, naghihintay ang ₱500,000 ng limang taon na halos walang kita, walang MP2 dividend sa mga taong iyon.' },
            balance: 500000,
            outcome: 'costly',
          },
          b1: {
            text: { en: 'Five tranches of ₱100,000, opened a year apart from 50 to 54, mature one at a time from 55 to 59.', tl: 'Limang tranches na ₱100,000, binuksan nang isang taon ang layo mula 50 hanggang 54, nag-mamature nang isa-isa mula 55 hanggang 59.' },
            balance: 500000,
            choices: [
              { text: { en: 'Renew every maturing tranche for another five-year term', tl: 'I-renew ang bawat nag-mamature na tranche sa isa pang limang-taong term' }, next: 'b2' },
              { text: { en: 'Shift each maturing tranche to cash or bonds instead of a fresh lock', tl: 'Ilipat ang bawat nag-mamature na tranche sa cash o bonds sa halip na bagong lock' }, next: 'b3' },
            ],
          },
          b2: {
            text: { en: 'The tranche opened at 54 matures at 59. Renewed there for another five years, it locks until 64, four years past 60. At 60, ₱540,000 is ready; ₱100,000 waits four more years.', tl: 'Ang tranche na binuksan sa 54 ay nag-mamature sa 59. Ni-renew doon sa isa pang limang taon, naka-lock ito hanggang 64, apat na taon lampas sa 60. Sa 60, ₱540,000 ang handa; ₱100,000 ang naghihintay pa ng apat na taon.' },
            balance: 540000,
            outcome: 'costly',
          },
          b3: {
            text: { en: 'Every tranche, as it matures between 55 and 59, shifts into cash or a short bond instead of a fresh MP2 lock. At 60, the full amount, grown to about ₱640,000 illustrative, sits ready, none of it still locked.', tl: 'Bawat tranche, kapag nag-matured sa pagitan ng 55 at 59, ay inililipat sa cash o short bond sa halip na bagong MP2 lock. Sa 60, ang buong halaga, lumaki sa mga ₱640,000 illustrative, ay nakahanda na, wala nang naka-lock.' },
            balance: 640000,
            outcome: 'steady',
          },
        },
      },
      keep: {
        text: { en: 'A single tranche bets on timing. A ladder removes the bet.', tl: 'Ang iisang tranche ay tumataya sa timing. Tinatanggal ng ladder ang taya.' },
        action: null,
      },
    },
  ],
};

const education = {
  id: 'securing.education',
  title: { en: 'Children versus retirement', tl: 'Mga Anak Laban sa Retirement' },
  summary: { en: 'Why retirement usually comes first in the order, and what a child can borrow that a retiree cannot.', tl: 'Bakit karaniwang una ang retirement sa pagkakasunod, at ano ang kayang hiramin ng anak na hindi kaya ng retiree.' },
  competency: { en: 'Can order education and retirement savings without shorting either', tl: 'Kayang ayusin ang savings para sa edukasyon at retirement nang hindi kinukulangan ang alinman' },
  wish: 'have',
  status: 'authored',
  bites: [
    {
      id: 'securing.education.1',
      title: { en: 'The order that protects both goals', tl: 'Ang pagkakasunod na nangangalaga sa dalawang goal' },
      minutes: 3,
      hook: {
        text: { en: 'Tuition is due in June. The Booster or PERA contribution is due every payday. Both feel urgent; only one of them has no other source.', tl: 'Due ang tuition sa Hunyo. Due ang Booster o PERA contribution sa bawat payday. Parehong pakiramdam ay urgent; isa lang sa kanila ang walang ibang pagmumulan.' },
        illo: 'family',
      },
      show: {
        text: { en: 'Retirement contributions come first in the order, not because school matters less, but because a retiree cannot borrow for retirement while a child has other ways to reach tuition.', tl: 'Una sa pagkakasunod ang retirement contributions, hindi dahil mas mababa ang halaga ng school, kundi dahil hindi kayang manghiram ng retiree para sa retirement, habang may ibang paraan ang anak para maabot ang tuition.' },
        points: [
          { en: 'A child can borrow, work part-time, or take a scholarship. A retiree cannot borrow for retirement itself.', tl: 'Puwedeng manghiram, mag-part-time, o kumuha ng scholarship ang anak. Hindi kayang manghiram ng retiree para sa retirement mismo.' },
          { en: 'The order is retirement contributions first, then education savings, not one instead of the other.', tl: 'Ang pagkakasunod ay retirement contributions muna, saka education savings, hindi isa sa halip ng isa.' },
        ],
        illo: 'family',
        animate: true,
      },
      do: {
        type: 'choice',
        prompt: { en: 'A ₱45,000 salary has ₱3,000 spare this month. Tuition and the Booster both want it. Which comes first, in the order this lesson teaches?', tl: 'May ₱3,000 na natitira sa ₱45,000 sweldo ngayong buwan. Parehong gusto nito ang tuition at ang Booster. Alin ang mauuna, sa pagkakasunod na tinuturo ng lesson na ito?' },
        options: [
          { text: { en: 'The Booster or PERA contribution, since retirement has no other source of money', tl: 'Ang Booster o PERA contribution, dahil walang ibang pagmumulan ng pera ang retirement' }, correct: true, why: { en: 'Retirement has no plan B. Once the working years end, this is the only source left for it.', tl: 'Walang plan B ang retirement. Kapag natapos na ang working years, ito na lang ang natitirang pagmumulan para dito.' } },
          { text: { en: 'Tuition, because children come first', tl: 'Ang tuition, dahil una ang mga anak' }, correct: false, why: { en: 'Here is the number: tuition has other sources, a loan, part-time work, a scholarship. A pension gap does not.', tl: 'Narito ang numero: may ibang pagmumulan ang tuition, loan, part-time work, scholarship. Wala nito ang puwang ng pension.' } },
          { text: { en: 'Split it evenly between both, every time', tl: 'Hatiin nang pantay sa dalawa, sa tuwina' }, correct: false, why: { en: 'An even split feels fair but leaves the harder-to-replace goal, retirement, permanently short. The order, not a fixed split, protects both.', tl: 'Parang patas ang pantay na hati pero laging kulang ang mas mahirap palitan, ang retirement. Ang pagkakasunod, hindi ang fixed na hati, ang nangangalaga sa dalawa.' } },
        ],
      },
      keep: {
        text: { en: 'Retirement first is not less love. It is the only goal with no plan B.', tl: 'Ang pag-una sa retirement ay hindi kulang na pagmamahal. Ito lang ang goal na walang plan B.' },
        action: null,
      },
    },
    {
      id: 'securing.education.2',
      title: { en: 'What a Pag-IBIG or bank education plan actually promises', tl: 'Ano ang talagang ipinapangako ng Pag-IBIG o bank education plan' },
      minutes: 3,
      hook: {
        text: { en: 'An education plan and a plain savings goal can both pay for the same tuition. They do not both survive the same emergencies.', tl: 'Parehong kayang bayaran ng education plan at plain savings goal ang parehong tuition. Hindi pareho ang kaya nilang tagalan sa parehong emergency.' },
        illo: 'certificate',
      },
      show: {
        text: { en: 'A pre-need or bank-sold education plan runs on a fixed contribution and a fixed payout schedule tied to the child’s school years, often bundled with a waiver that keeps it paying out under stated conditions even if the parent cannot keep contributing.', tl: 'Tumatakbo ang pre-need o bank-sold na education plan sa fixed na contribution at fixed na payout schedule na nakatali sa school years ng anak, madalas may kasamang waiver na nagpapatuloy ang bayad sa nakasaad na kondisyon kahit hindi na makapag-contribute ang magulang.' },
        points: [],
        illo: 'certificate',
        animate: false,
      },
      do: {
        type: 'compare',
        prompt: { en: 'Both cost the same monthly amount. Which one keeps paying out if the parent’s income stops?', tl: 'Pareho ang buwanang halaga ng dalawa. Alin ang patuloy na magbabayad kahit tumigil ang kita ng magulang?' },
        options: [
          { title: { en: 'A pre-need or education plan', tl: 'Pre-need o education plan' }, lines: [{ en: 'Fixed contribution on a fixed schedule, paid out on set school years', tl: 'Fixed na contribution sa fixed na schedule, binabayad sa nakatakdang school years' }, { en: 'Many plans keep paying out under stated conditions, verify with the specific provider', tl: 'Marami sa mga plano ay nagpapatuloy sa nakasaad na kondisyon, i-verify sa specific provider' }], effective: { en: 'The schedule continues even if the parent cannot', tl: 'Nagpapatuloy ang schedule kahit hindi na kaya ng magulang' }, cheaper: true },
          { title: { en: 'A plain education savings goal', tl: 'Plain na education savings goal' }, lines: [{ en: 'Flexible contribution, can pause or increase anytime', tl: 'Flexible ang contribution, puwedeng i-pause o itaas anumang oras' }, { en: 'If the parent’s income stops, so does the saving, unless someone else keeps it going', tl: 'Kapag tumigil ang kita ng magulang, tumitigil din ang pag-ipon, maliban kung may ibang magpapatuloy' }], effective: { en: 'More flexible, no guarantee it survives the payor', tl: 'Mas flexible, walang garantiyang tatagal kahit mawala ang nagbabayad' }, cheaper: false },
        ],
        why: { en: 'A plan trades flexibility for a promise: the payout continues on schedule under stated conditions. Verify these conditions with the specific provider before relying on them. A plain savings goal is easier to adjust but depends entirely on someone continuing to fund it.', tl: 'Ipinagpapalit ng plan ang flexibility para sa isang pangako: nagpapatuloy ang payout sa schedule sa nakasaad na kondisyon. I-verify ang mga kondisyong ito sa specific provider bago umasa dito. Mas madaling i-adjust ang plain na savings goal pero nakadepende ito nang buo sa may magpapatuloy sa pagpondo.' },
      },
      keep: {
        text: { en: 'A plan pays for the years you cannot. A savings goal only pays for the years you can.', tl: 'Binabayaran ng plan ang mga taong hindi mo kaya. Binabayaran lang ng savings goal ang mga taong kaya mo.' },
        action: null,
      },
    },
    {
      id: 'securing.education.3',
      title: { en: 'What a child can borrow that a retiree cannot', tl: 'Ano ang kayang hiramin ng anak na hindi kaya ng retiree' },
      minutes: 3,
      hook: {
        text: { en: 'The order from the first bite rests on one asymmetry: what is available to a child in a shortfall is not available to a retiree in the same shortfall.', tl: 'Nakasalalay ang pagkakasunod mula sa unang bite sa isang asymmetry: hindi pareho ang available sa anak sa kakulangan at ang available sa retiree sa parehong kakulangan.' },
        illo: 'tree',
      },
      show: {
        text: { en: 'A child short on tuition has several ways forward. A retiree short on retirement income has one: spend less than planned.', tl: 'May ilang paraan pasulong ang anak na kulang sa tuition. Isa lang ang meron ang retiree na kulang sa retirement income: gumastos nang mas kaunti sa plano.' },
        points: [],
        illo: 'tree',
        animate: false,
      },
      do: {
        type: 'match',
        prompt: { en: 'Match each option to what it actually provides.', tl: 'I-match ang bawat option sa talagang ibinibigay nito.' },
        pairs: [
          { a: { en: 'A student loan', tl: 'Student loan' }, b: { en: 'Borrowed against future income the child has decades to earn back', tl: 'Hiniram laban sa future income na may dekada pang oras kikitain ng anak' } },
          { a: { en: 'Part-time work or a scholarship', tl: 'Part-time work o scholarship' }, b: { en: 'Reduces the tuition bill directly, with no debt at all', tl: 'Direktang binabawasan ang tuition bill, walang utang' } },
          { a: { en: 'Retirement income', tl: 'Retirement income' }, b: { en: 'Cannot be borrowed; a retiree who is short simply has less to spend', tl: 'Hindi kayang hiramin; ang retiree na kulang ay basta na lang mas kaunti ang magagastos' } },
          { a: { en: 'A gap year or delayed enrolment', tl: 'Gap year o delayed enrolment' }, b: { en: 'Buys time to save more, without touching either goal early', tl: 'Bumibili ng oras para makapag-ipon pa, hindi ginagalaw ang alinman sa mga goal nang maaga' } },
        ],
      },
      keep: {
        text: { en: 'A child has years to earn the loan back. A retiree has no years left to earn retirement back.', tl: 'May mga taon pa ang anak para bawiin ang utang. Wala nang taon na natitira ang retiree para bawiin ang retirement.' },
        action: null,
      },
    },
    {
      id: 'securing.education.4',
      title: { en: 'Splitting a bonus between tuition and the pension gap', tl: 'Paghahati ng bonus sa tuition at sa puwang ng pension' },
      minutes: 4,
      hook: {
        text: { en: 'A mid-year bonus of ₱50,000 arrives. Unlike the monthly salary, it does not have to choose one goal over the other; it can fund both at once.', tl: 'Dumating ang mid-year bonus na ₱50,000. Hindi katulad ng buwanang sweldo, hindi ito kailangang pumili ng isang goal kaysa sa isa; puwede nitong pondohan ang dalawa nang sabay.' },
        illo: 'jars',
      },
      show: {
        text: { en: 'A windfall like a bonus is the moment to move both goals forward without the trade-off the monthly budget forces.', tl: 'Ang windfall tulad ng bonus ang pagkakataon para maisulong ang dalawang goal nang hindi pinipilit ang trade-off na dulot ng buwanang budget.' },
        points: [],
        illo: 'jars',
        animate: false,
      },
      do: {
        type: 'allocate',
        prompt: { en: 'Split a ₱50,000 bonus between the pension gap, next term’s tuition, and a small buffer.', tl: 'Hatiin ang ₱50,000 bonus sa puwang ng pension, susunod na term na tuition, at maliit na buffer.' },
        total: 50000,
        step: 1000,
        jars: [
          { key: 'retirement', label: { en: 'Booster or PERA top-up', tl: 'Dagdag sa Booster o PERA' }, hint: { en: 'Closes part of the pension gap', tl: 'Nagpupuno ng bahagi ng puwang ng pension' }, guide: [40, 55] },
          { key: 'tuition', label: { en: 'Next term’s tuition', tl: 'Tuition ng susunod na term' }, hint: { en: 'Reduces what a loan would need to cover', tl: 'Binabawasan ang kailangang sakupin ng loan' }, guide: [30, 45] },
          { key: 'buffer', label: { en: 'General emergency fund', tl: 'General na emergency fund' }, hint: { en: 'Keeps this split from needing to be undone later', tl: 'Pinipigilan itong hatian na kailanganing bawiin sa hinaharap' }, guide: [10, 20] },
        ],
        why: { en: 'A bonus is a chance to fund both without the monthly trade-off. Weighting it toward retirement keeps the order from the first bite, while tuition still moves forward and a small buffer keeps the split from being undone later.', tl: 'Ang bonus ay pagkakataong pondohan ang dalawa nang walang buwanang trade-off. Ang pagbigat nito papunta sa retirement ay pinapanatili ang pagkakasunod mula sa unang bite, habang umuusad pa rin ang tuition, at pinipigilan ng maliit na buffer na kailanganing bawiin ang hatian sa hinaharap.' },
      },
      keep: {
        text: { en: 'A windfall does not have to choose. The monthly salary is what forces the order.', tl: 'Hindi kailangang pumili ang windfall. Ang buwanang sweldo ang nagpipilit ng pagkakasunod.' },
        action: { kind: 'wish', label: { en: 'Set next year’s tuition as a wish', tl: 'Gawing wish ang tuition sa susunod na taon' }, payload: { key: 'tuition', title: { en: 'Next year’s tuition, funded ahead', tl: 'Tuition sa susunod na taon, naunahan na' }, amount: 150000 } },
      },
    },
    {
      id: 'securing.education.5',
      title: { en: 'The twenty years you cannot borrow back', tl: 'Ang dalawampung taon na hindi mo mahihiram pabalik' },
      minutes: 5,
      hook: {
        text: { en: 'Your child starts university this year, tuition ₱150,000 a year, illustrative for 2030. The Booster contribution is ₱5,000 a month. This year, there is not enough for both in full.', tl: 'Magsisimula sa unibersidad ang anak mo ngayong taon, ₱150,000 kada taon ang tuition, illustrative para sa 2030. ₱5,000 kada buwan ang Booster contribution. Ngayong taon, hindi sapat para sa dalawa nang buo.' },
        illo: 'hourglass',
      },
      show: {
        text: { en: 'One choice pauses retirement to fully fund tuition. The other keeps retirement running and borrows the tuition gap instead.', tl: 'Pinapahinto ng isang pinili ang retirement para pondohan nang buo ang tuition. Ang isa ay pinapatakbo ang retirement at nanghihiram na lang para sa puwang ng tuition.' },
        illo: 'hourglass',
        animate: false,
      },
      do: {
        type: 'story',
        start: 'n1',
        nodes: {
          n1: {
            text: { en: 'University starts this year, four years long. The Booster and full tuition cannot both be funded from the monthly budget.', tl: 'Magsisimula ang unibersidad ngayong taon, apat na taon ang haba. Hindi puwedeng pondohan nang sabay ang Booster at buong tuition mula sa buwanang budget.' },
            choices: [
              { text: { en: 'Pause the Booster for the four years, fund tuition fully', tl: 'I-pause ang Booster sa loob ng apat na taon, pondohan nang buo ang tuition' }, next: 'a1' },
              { text: { en: 'Keep the Booster running, take a small student loan for the gap', tl: 'Ipagpatuloy ang Booster, kumuha ng maliit na student loan para sa puwang' }, next: 'b1' },
            ],
          },
          a1: {
            text: { en: 'Four years pass. Tuition is paid in full, no loan taken. The ₱240,000 that would have gone to the Booster is not there, and neither is whatever it would have earned.', tl: 'Apat na taon ang lumipas. Buong bayad ang tuition, walang loan na kinuha. Wala ang ₱240,000 na dapat sana napunta sa Booster, wala rin ang kikitain sana nito.' },
            balance: 0,
            choices: [
              { text: { en: 'Resume the Booster at ₱5,000 a month for the last eleven years', tl: 'Ituloy ang Booster sa ₱5,000 kada buwan sa huling labing-isang taon' }, next: 'a2' },
              { text: { en: 'Try to catch up at ₱8,000 a month for the next eleven years', tl: 'Subukang makabawi sa ₱8,000 kada buwan sa susunod na labing-isang taon' }, next: 'a3' },
            ],
          },
          a2: {
            text: { en: 'The Booster runs eleven years instead of fifteen. At a steady illustrative 6%, ₱5,000 a month for eleven years reaches about ₱870,000, well under the ₱1,450,000 a full fifteen years would have reached.', tl: 'Tumakbo ang Booster ng labing-isang taon sa halip na labinlima. Sa steady na illustrative 6%, ang ₱5,000 kada buwan sa loob ng labing-isang taon ay umaabot sa mga ₱870,000, malayo sa ₱1,450,000 na maaabot ng buong labinlimang taon.' },
            balance: 870000,
            outcome: 'costly',
          },
          a3: {
            text: { en: '₱8,000 a month for eleven years, illustrative at 6%, reaches about ₱1,390,000, close to the full fifteen-year total, but only by nearly tripling the monthly contribution for over a decade.', tl: '₱8,000 kada buwan sa loob ng labing-isang taon, illustrative sa 6%, ay umaabot sa mga ₱1,390,000, malapit sa buong labinlimang-taong total, pero sa pamamagitan lang ng halos pagtriple ng buwanang contribution sa loob ng mahigit isang dekada.' },
            balance: 1390000,
            outcome: 'steady',
          },
          b1: {
            text: { en: 'Four years pass. The Booster keeps running the whole time, ₱5,000 a month, uninterrupted. A student loan covers the ₱60,000 gap tuition left short, to be repaid after graduation.', tl: 'Apat na taon ang lumipas. Patuloy na tumakbo ang Booster sa buong panahon, ₱5,000 kada buwan, walang tigil. Sinakop ng student loan ang ₱60,000 na puwang na iniwan ng tuition, babayaran pagkatapos mag-graduate.' },
            balance: 240000,
            choices: [
              { text: { en: 'Let the child repay the loan from their own first salary', tl: 'Hayaang bayaran ng anak ang loan mula sa sariling unang sweldo' }, next: 'b2' },
              { text: { en: 'Help repay the loan from household income after graduation', tl: 'Tumulong bayaran ang loan mula sa kita ng sambahayan pagkatapos mag-graduate' }, next: 'b3' },
            ],
          },
          b2: {
            text: { en: 'The loan is the child’s, repaid from the child’s own first years of work. The Booster ran the full fifteen years, reaching about ₱1,450,000, untouched by the four-year gap.', tl: 'Utang ito ng anak, babayaran mula sa sariling unang mga taon ng trabaho ng anak. Tumakbo ang Booster ng buong labinlimang taon, umabot sa mga ₱1,450,000, hindi nagalaw ng apat-na-taong puwang.' },
            balance: 1450000,
            outcome: 'steady',
          },
          b3: {
            text: { en: 'The household repays the loan after graduation, a real cost, but the Booster still ran the full fifteen years, reaching about ₱1,450,000. The trade-off moved to a few years of loan payments, not to retirement.', tl: 'Binabayaran ng sambahayan ang loan pagkatapos mag-graduate, totoong gastos, pero tumakbo pa rin ang Booster ng buong labinlimang taon, umabot sa mga ₱1,450,000. Lumipat ang trade-off sa ilang taon ng bayad sa loan, hindi sa retirement.' },
            balance: 1450000,
            outcome: 'steady',
          },
        },
      },
      keep: {
        text: { en: 'A tuition gap can be borrowed. Retirement’s fifteen years, once skipped, do not lend themselves back.', tl: 'Puwedeng hiramin ang puwang sa tuition. Ang labinlimang taon ng retirement, kapag nalaktawan, ay hindi na mahihiram pabalik.' },
        action: null,
      },
    },
  ],
};

const estate = {
  id: 'securing.estate',
  title: { en: 'Estate basics', tl: 'Batayan ng Estate' },
  summary: { en: 'A will, named beneficiaries, and the 6% tax, arranged before they are needed.', tl: 'Ang will, pinangalanang beneficiaries, at ang 6% na tax, inayos bago pa kailanganin.' },
  competency: { en: 'Can list what belongs in a simple estate plan', tl: 'Kayang ilista ang laman ng simpleng estate plan' },
  wish: 'safe',
  status: 'authored',
  bites: [
    {
      id: 'securing.estate.1',
      title: { en: 'Why a will is not only for the wealthy', tl: 'Bakit hindi lang para sa mayayaman ang will' },
      minutes: 3,
      hook: {
        text: { en: 'A household with a paid-off house, modest savings, and no other property sounds ordinary. It is exactly the estate a will is for.', tl: 'Ang sambahayang may bayad-nang bahay, katamtamang savings, at walang ibang property ay parang ordinaryo lang. Ito mismo ang estate na para sa will.' },
        illo: 'certificate',
      },
      show: {
        text: { en: 'A will decides who administers the estate and how it is divided. Without one, the law’s default order of heirs applies, whether the estate is large or small, and settling still takes time and paperwork either way.', tl: 'Nagdedesisyon ang will kung sino ang mangangasiwa sa estate at paano ito hahatiin. Kung wala, ang default order of heirs ng batas ang magagamit, malaki man o maliit ang estate, at kailangan pa rin ng oras at papeles para maayos ito.' },
        points: [
          { en: 'A will can be notarial, witnessed and notarised, or holographic, entirely handwritten, dated, and signed.', tl: 'Ang will ay puwedeng notarial, may witness at notarized, o holographic, buong sulat-kamay, may petsa, at pirmado.' },
          { en: 'Size does not decide whether a will is needed. Having dependents and property, even modest ones, does.', tl: 'Hindi ang laki ang nagdedesisyon kung kailangan ng will. Ang pagkakaroon ng dependents at property, kahit katamtaman, ang nagdedesisyon.' },
        ],
        illo: 'certificate',
        animate: true,
      },
      do: {
        type: 'choice',
        prompt: { en: 'A couple owns a paid-off house and modest savings, no other property. Do they need a will?', tl: 'May bayad-nang bahay at katamtamang savings ang mag-asawa, walang ibang property. Kailangan ba nila ng will?' },
        options: [
          { text: { en: 'Yes. A will directs who administers the estate and how it is divided, regardless of size', tl: 'Oo. Nagtuturo ang will kung sino ang mangangasiwa at paano hahatiin ang estate, anuman ang laki' }, correct: true, why: { en: 'A will is a plan for who decides, not a certificate reserved for a certain amount of wealth.', tl: 'Plano ang will para kung sino ang magdedesisyon, hindi sertipiko na para lang sa isang tiyak na antas ng yaman.' } },
          { text: { en: 'No, wills are only useful for large estates with several properties', tl: 'Hindi, kapaki-pakinabang lang ang will sa malalaking estate na may ilang property' }, correct: false, why: { en: 'The house and the savings still go through the same estate process regardless of size. A will applies at any scale.', tl: 'Dadaan pa rin ang bahay at ang savings sa parehong estate process, anuman ang laki. Aplikable ang will sa kahit anong antas.' } },
          { text: { en: 'No, since insurance beneficiaries already cover the family', tl: 'Hindi, dahil sakop na ng insurance beneficiaries ang pamilya' }, correct: false, why: { en: 'Insurance covers only the insurance proceeds. The house and the savings still need a will to direct them.', tl: 'Ang insurance ay sakop lang ang insurance proceeds. Kailangan pa rin ng will ang bahay at ang savings para maituro kung kanino.' } },
        ],
      },
      keep: {
        text: { en: 'A will is a plan for who decides, not a certificate for how much you own.', tl: 'Ang will ay plano para kung sino ang magdedesisyon, hindi sertipiko para sa dami ng ari-arian mo.' },
        action: null,
      },
    },
    {
      id: 'securing.estate.2',
      title: { en: 'A named beneficiary, matched to what it skips', tl: 'Ang pinangalanang beneficiary, itinugma sa nilalaktawan nito' },
      minutes: 3,
      hook: {
        text: { en: 'One line on an insurance form, the named beneficiary, decides whether that money moves in days or waits for the whole estate process.', tl: 'Isang linya lang sa insurance form, ang pinangalanang beneficiary, ang nagdedesisyon kung kikilos ang perang iyon sa ilang araw o maghihintay sa buong estate process.' },
        illo: 'shield',
      },
      show: {
        text: { en: 'Insurance proceeds go to the named beneficiary directly, outside the estate. Everything without a named beneficiary, including a joint bank account, goes through the estate instead.', tl: 'Direktang napupunta sa pinangalanang beneficiary ang insurance proceeds, wala sa estate. Ang lahat ng walang pinangalanang beneficiary, kasama ang joint bank account, ay dumadaan sa estate.' },
        points: [],
        illo: 'shield',
        animate: false,
      },
      do: {
        type: 'match',
        prompt: { en: 'Match each item to what happens to it.', tl: 'I-match ang bawat item sa mangyayari dito.' },
        pairs: [
          { a: { en: 'A named beneficiary on a life insurance policy', tl: 'Pinangalanang beneficiary sa life insurance policy' }, b: { en: 'Proceeds go directly to that person, outside the estate and its tax clearance', tl: 'Direktang napupunta ang proceeds sa taong iyon, wala sa estate at sa tax clearance nito' } },
          { a: { en: 'A bank account with no named beneficiary', tl: 'Bank account na walang pinangalanang beneficiary' }, b: { en: 'Frozen until estate tax clearance, released only through the estate process', tl: 'Naka-freeze hanggang sa estate tax clearance, ilalabas lang sa pamamagitan ng estate process' } },
          { a: { en: 'A joint bank account', tl: 'Joint bank account' }, b: { en: 'Frozen too, on the death of either holder, despite having two names on it', tl: 'Naka-freeze din, sa pagkamatay ng alinman sa may-ari, kahit dalawa ang pangalan dito' } },
          { a: { en: 'A will', tl: 'Will' }, b: { en: 'Directs how the accounts and property that do go through the estate are divided', tl: 'Nagtuturo kung paano hahatiin ang mga account at property na dumadaan sa estate' } },
        ],
      },
      keep: {
        text: { en: 'A named beneficiary is the fastest line on the form. An empty one is the slowest.', tl: 'Ang pinangalanang beneficiary ang pinakamabilis na linya sa form. Ang walang laman ang pinakamabagal.' },
        action: { kind: 'open', label: { en: 'Check my named beneficiaries', tl: 'Tingnan ang mga pinangalanang beneficiaries ko' }, payload: { app: 'accounts' } },
      },
    },
    {
      id: 'securing.estate.3',
      title: { en: 'The 6% estate tax, and what it is 6% of', tl: 'Ang 6% na estate tax, at 6% ng ano' },
      minutes: 4,
      hook: {
        text: { en: 'The estate tax rate is a flat 6%. Most of the arithmetic is not the rate; it is what gets subtracted before the 6% applies.', tl: 'Flat 6% ang estate tax rate. Hindi ang rate ang karamihan sa kwenta; ang ibinabawas bago i-apply ang 6% ang mahalaga.' },
        illo: 'house',
      },
      show: {
        text: { en: 'A standard deduction of ₱5,000,000 applies to every estate. A family home is separately exempt up to ₱10,000,000. The 6% applies only to what remains after both.', tl: 'May ₱5,000,000 na standard deduction na aplikable sa bawat estate. Hiwalay na exempt ang family home hanggang ₱10,000,000. Ang 6% ay aplikable lang sa matitira pagkatapos ng dalawa.' },
        points: [
          { en: 'A family home worth ₱10,000,000 or less pays no estate tax on the home itself.', tl: 'Ang family home na ₱10,000,000 pababa ay walang babayarang estate tax sa bahay mismo.' },
          { en: 'Everything else in the estate, minus the ₱5,000,000 standard deduction, is what the 6% is computed on.', tl: 'Ang lahat ng iba pa sa estate, tanggal ang ₱5,000,000 standard deduction, ang binabatayan ng 6%.' },
        ],
        illo: 'house',
        animate: true,
      },
      do: {
        type: 'number',
        prompt: { en: 'A family home worth ₱6,000,000 is fully exempt. Other assets total ₱7,000,000. The standard deduction is ₱5,000,000. What is the estate tax at 6%?', tl: 'Fully exempt ang family home na ₱6,000,000. ₱7,000,000 ang kabuuan ng iba pang assets. ₱5,000,000 ang standard deduction. Magkano ang estate tax sa 6%?' },
        answer: 120000,
        tolerance: 0,
        format: 'peso',
        worked: { en: 'Net estate = 7,000,000 − 5,000,000 = ₱2,000,000, since the family home is separately exempt up to ₱10,000,000. 2,000,000 × 0.06 = ₱120,000 estate tax. Figures here are illustrative; a real estate depends on its actual assets.', tl: 'Net estate = 7,000,000 − 5,000,000 = ₱2,000,000, dahil hiwalay na exempt ang family home hanggang ₱10,000,000. 2,000,000 × 0.06 = ₱120,000 na estate tax. Illustrative ang mga numero dito; nakadepende ang totoong estate sa aktwal nitong assets.' },
      },
      keep: {
        text: { en: 'The house is often exempt. It is everything else, past ₱5,000,000, that gets taxed.', tl: 'Madalas exempt ang bahay. Ang lahat ng iba pa, lampas sa ₱5,000,000, ang binabawasan ng tax.' },
        action: null,
      },
    },
    {
      id: 'securing.estate.4',
      title: { en: 'Five steps to a simple estate plan', tl: 'Limang hakbang sa simpleng estate plan' },
      minutes: 3,
      hook: {
        text: { en: 'None of the last three bites requires a lawyer’s office to start. A list, a form, and a document, kept where someone can find them, cover most of it.', tl: 'Wala sa huling tatlong bite ang kailangan ng opisina ng abogado para simulan. Isang lista, isang form, at isang dokumento, na nasa lugar na mahahanap ng iba, ang sakop ng karamihan.' },
        illo: 'certificate',
      },
      show: {
        text: { en: 'A simple estate plan is a short, ordered checklist, not a single complicated document.', tl: 'Ang simpleng estate plan ay maikli, maayos na checklist, hindi iisang komplikadong dokumento.' },
        points: [],
        illo: 'certificate',
        animate: false,
      },
      do: {
        type: 'order',
        prompt: { en: 'Put the five steps in order.', tl: 'Ayusin ang limang hakbang.' },
        steps: [
          { en: 'List every account, property, and insurance policy you hold', tl: 'Ilista ang bawat account, property, at insurance policy na hawak mo' },
          { en: 'Name or update the beneficiary on every policy and applicable account', tl: 'Pangalanan o i-update ang beneficiary sa bawat policy at aplikableng account' },
          { en: 'Write a will, notarial or holographic, naming who administers the estate', tl: 'Sumulat ng will, notarial man o holographic, nagpapangalan kung sino ang mangangasiwa sa estate' },
          { en: 'Tell the named executor and immediate family where the will and the list are kept', tl: 'Sabihin sa pinangalanang executor at agarang pamilya kung saan naka-imbak ang will at ang lista' },
          { en: 'Review the list and the will every few years, or after a major change', tl: 'I-review ang lista at ang will tuwing ilang taon, o pagkatapos ng malaking pagbabago' },
        ],
        why: { en: 'Naming beneficiaries first moves the most money outside the estate process immediately. The will then covers everything that still has to go through it, and telling someone where it is kept is what makes it useful the day it is needed.', tl: 'Ang pagpangalan muna ng beneficiaries ang agad na naglilipat ng pinakamaraming pera palabas sa estate process. Sinasakop naman ng will ang lahat ng kailangan pa ring dumaan dito, at ang pagsabi sa iba kung saan ito naka-imbak ang gumagawa nitong kapaki-pakinabang sa araw na kailanganin ito.' },
      },
      keep: {
        text: { en: 'A plan five people can find is worth more than a plan one lawyer wrote.', tl: 'Mas mahalaga ang planong mahahanap ng limang tao kaysa sa planong isang abogado lang ang nakasulat.' },
        action: null,
      },
    },
    {
      id: 'securing.estate.5',
      title: { en: 'The joint account that froze the week it was needed', tl: 'Ang joint account na nag-freeze sa linggong kailangan ito' },
      minutes: 5,
      hook: {
        text: { en: 'A father dies. His joint savings account with his daughter holds ₱400,000, meant for funeral costs this week.', tl: 'Namatay ang isang ama. May ₱400,000 ang joint savings account niya kasama ang anak niyang babae, para sana sa funeral costs ngayong linggo.' },
        illo: 'family',
      },
      show: {
        text: { en: 'A joint name on an account does not exempt it from a freeze. What actually moves money this week is a specific rule, not the second name on the account.', tl: 'Hindi kinakalag ng joint na pangalan sa account ang freeze dito. Isang tiyak na patakaran, hindi ang pangalawang pangalan sa account, ang talagang nagpapakilos ng pera ngayong linggo.' },
        illo: 'family',
        animate: false,
      },
      do: {
        type: 'story',
        start: 'n1',
        nodes: {
          n1: {
            text: { en: 'The daughter needs ₱400,000 from the joint account this week for the funeral.', tl: 'Kailangan ng anak na babae ng ₱400,000 mula sa joint account ngayong linggo para sa funeral.' },
            choices: [
              { text: { en: 'Try to withdraw the ₱400,000 from the joint account right away', tl: 'Subukang i-withdraw agad ang ₱400,000 mula sa joint account' }, next: 'a1' },
              { text: { en: 'Check what the bank actually allows before the funeral home is paid', tl: 'Tingnan muna kung ano ang pinapayagan ng bangko bago bayaran ang funeral home' }, next: 'b1' },
            ],
          },
          a1: {
            text: { en: 'The bank freezes the account on notice of death, joint or not, until estate tax clearance. The ₱400,000 is not available this week at all.', tl: 'Nag-freeze ang bangko sa account sa notice of death, joint man o hindi, hanggang sa estate tax clearance. Wala talagang available na ₱400,000 ngayong linggo.' },
            balance: 0,
            outcome: 'costly',
          },
          b1: {
            text: { en: 'Banks can allow a withdrawal from a deceased’s account subject to a 6% final withholding tax, without waiting for full estate tax clearance.', tl: 'Puwedeng payagan ng bangko ang withdrawal mula sa account ng namatay, may 6% final withholding tax, nang hindi hinihintay ang buong estate tax clearance.' },
            balance: 0,
            choices: [
              { text: { en: 'Withdraw ₱400,000 under the 6% final tax rule', tl: 'I-withdraw ang ₱400,000 sa ilalim ng 6% final tax rule' }, next: 'b2' },
              { text: { en: 'Wait for full estate tax clearance instead', tl: 'Maghintay na lang sa buong estate tax clearance' }, next: 'b3' },
            ],
          },
          b2: {
            text: { en: '400,000 × 0.06 = ₱24,000 withheld, ₱376,000 released this week, enough for the funeral and immediate costs, weeks before full clearance would arrive.', tl: '400,000 × 0.06 = ₱24,000 ang na-withhold, ₱376,000 ang inilabas ngayong linggo, sapat para sa funeral at agarang gastos, mga linggo bago pa dumating ang buong clearance.' },
            balance: 376000,
            outcome: 'steady',
          },
          b3: {
            text: { en: 'Full estate tax clearance can take months. The funeral and other immediate costs wait on money that will be fully available eventually, just not this week.', tl: 'Puwedeng umabot ng ilang buwan ang buong estate tax clearance. Naghihintay ang funeral at iba pang agarang gastos sa perang magiging available din, pero hindi ngayong linggo.' },
            balance: 0,
            outcome: 'costly',
          },
        },
      },
      keep: {
        text: { en: 'A joint name on the account does not unfreeze it. The 6% withdrawal rule does, for what it covers.', tl: 'Hindi kinakalag ng joint na pangalan sa account ang freeze. Ang 6% withdrawal rule ang kumakalag, para sa sakop nito.' },
        action: null,
      },
    },
  ],
};

const debtfree = {
  id: 'securing.debtfree',
  title: { en: 'Debt-free by 60', tl: 'Walang Utang sa 60' },
  summary: { en: 'A payoff calendar that ends before retirement does, starting with the housing loan.', tl: 'Payoff calendar na natatapos bago ang retirement, simula sa housing loan.' },
  competency: { en: 'Can build a payoff calendar that ends by 60', tl: 'Kayang gumawa ng payoff calendar na matatapos bago mag-60' },
  wish: 'rid',
  status: 'authored',
  bites: [
    {
      id: 'securing.debtfree.1',
      title: { en: 'Building the payoff calendar', tl: 'Paggawa ng payoff calendar' },
      minutes: 3,
      hook: {
        text: { en: 'Three debts, three interest rates, one budget. The order they get paid off in changes how much interest ends up paid in total.', tl: 'Tatlong utang, tatlong interest rate, isang budget. Ang pagkakasunod ng pagbayad sa kanila ay nagbabago sa kabuuang interest na babayaran.' },
        illo: 'calendar',
      },
      show: {
        text: { en: 'The avalanche method pays the minimum on every debt except the one with the highest interest rate, which gets every extra peso until it closes.', tl: 'Binabayaran ng avalanche method ang minimum sa bawat utang maliban sa may pinakamataas na interest rate, na siyang tatanggap ng bawat dagdag na piso hanggang masara ito.' },
        points: [
          { en: 'The rate decides the order, not the balance. A small, high-rate debt goes before a large, low-rate one.', tl: 'Ang rate ang nagdedesisyon ng pagkakasunod, hindi ang balance. Nauuna ang maliit na utang na mataas ang rate kaysa sa malaking utang na mababa ang rate.' },
        ],
        illo: 'calendar',
        animate: true,
      },
      do: {
        type: 'order',
        prompt: { en: 'Put the steps of building a payoff calendar in order.', tl: 'Ayusin ang mga hakbang sa paggawa ng payoff calendar.' },
        steps: [
          { en: 'List every debt with its balance and interest rate', tl: 'Ilista ang bawat utang kasama ang balance at interest rate nito' },
          { en: 'Sort the list from highest interest rate to lowest, the avalanche order', tl: 'Ayusin ang lista mula pinakamataas hanggang pinakamababang interest rate, ang avalanche order' },
          { en: 'Pay the minimum on every debt except the highest-rate one', tl: 'Bayaran ang minimum sa bawat utang maliban sa may pinakamataas na rate' },
          { en: 'Put every peso extra toward the highest-rate debt until it closes', tl: 'Ilagay ang bawat dagdag na piso sa utang na may pinakamataas na rate hanggang masara ito' },
          { en: 'Move to the next highest-rate debt and repeat', tl: 'Lumipat sa susunod na pinakamataas na rate at ulitin' },
        ],
        why: { en: 'The avalanche order pays the least total interest, because the peso that lingers longest sits against the most expensive rate first, not the smallest balance.', tl: 'Pinakamaliit ang kabuuang interest sa avalanche order, dahil ang pisong pinakamatagal manatili ay laban muna sa pinakamahal na rate, hindi sa pinakamaliit na balance.' },
      },
      keep: {
        text: { en: 'The order is not about which balance is smallest. It is about which rate is costing the most.', tl: 'Ang pagkakasunod ay hindi tungkol sa kung alin ang pinakamaliit na balance. Ito ay tungkol sa kung alin ang pinakamalaki ang gastos sa rate.' },
        action: { kind: 'commitment', label: { en: 'Bring one debt down this month', tl: 'Bawasan ang isang utang ngayong buwan' }, payload: { id: 'debt-30' } },
      },
    },
    {
      id: 'securing.debtfree.2',
      title: { en: 'The housing loan endgame', tl: 'Ang endgame ng housing loan' },
      minutes: 4,
      hook: {
        text: { en: 'The housing loan is usually the largest, longest debt in the calendar, and the one an extra peso does the most work on.', tl: 'Karaniwang ang housing loan ang pinakamalaki, pinakamahabang utang sa calendar, at ang pinaka-epektibo pagdating sa dagdag na piso.' },
        illo: 'house',
      },
      show: {
        text: { en: 'A housing loan’s remaining term can run past the age a household plans to be debt-free by. An extra amount added to the amortisation shortens the term, not just the balance.', tl: 'Puwedeng lumagpas ang matitirang term ng housing loan sa edad na balak nang mawalan ng utang ng sambahayan. Ang dagdag na halaga sa amortisation ay nagpapaikli ng term, hindi lang ng balance.' },
        points: [
          { en: 'The bank quotes a term in years. That term does not automatically account for a household’s own retirement target.', tl: 'Nagbibigay ang bangko ng term sa taon. Hindi awtomatikong isinasaalang-alang ng term na iyon ang sariling retirement target ng sambahayan.' },
        ],
        illo: 'house',
        animate: false,
      },
      do: {
        type: 'number',
        prompt: { en: 'A housing loan has 13 years left at 47, ending at 60. An extra ₱2,000 a month is illustrated to cut it from 13 years to 10 years. How many years earlier does the loan close?', tl: 'May 13 taong natitira ang housing loan sa edad 47, matatapos sa 60. Ang dagdag na ₱2,000 kada buwan ay illustrative na nagpapaikli nito mula 13 taon patungong 10 taon. Ilang taon na mas maaga masasara ang utang?' },
        answer: 3,
        tolerance: 0,
        format: 'number',
        worked: { en: '13 − 10 = 3 years earlier, to 57 instead of 60. The extra ₱2,000 a month, illustrative for this loan, is what buys back those three years.', tl: '13 − 10 = 3 taon nang mas maaga, sa 57 sa halip na 60. Ang dagdag na ₱2,000 kada buwan, illustrative para sa utang na ito, ang bumibili sa tatlong taong iyon.' },
      },
      keep: {
        text: { en: 'Extra pesos on the housing loan buy back years, not just lower the balance.', tl: 'Ang dagdag na piso sa housing loan ay bumibili ng mga taon, hindi lang binababa ang balance.' },
        action: null,
      },
    },
    {
      id: 'securing.debtfree.3',
      title: { en: 'No new installments after 55', tl: 'Walang bagong installment pagkalampas ng 55' },
      minutes: 3,
      hook: {
        text: { en: 'At 56, a four-year appliance financing plan looks affordable on the current salary. Its last payment lands at 60.', tl: 'Sa edad 56, mukhang kaya sa kasalukuyang sweldo ang apat-na-taong appliance financing plan. Ang huling bayad nito ay sa edad 60.' },
        illo: 'cart',
      },
      show: {
        text: { en: 'The rule is simple: no new multi-year installment debt after 55. Income past 60 is not guaranteed to look like income before it, and a new installment bets that it will.', tl: 'Simple ang patakaran: walang bagong maraming-taong installment debt pagkalampas ng 55. Hindi garantisadong magmumukhang pareho ang kita lampas sa 60 sa kita bago rito, at nangangako ang bagong installment na magiging pareho ito.' },
        points: [],
        illo: 'cart',
        animate: false,
      },
      do: {
        type: 'choice',
        prompt: { en: 'At 56, a four-year appliance financing plan is offered. What does this lesson’s rule say?', tl: 'Sa edad 56, may inaalok na apat-na-taong appliance financing plan. Ano ang sinasabi ng patakaran ng lesson na ito?' },
        options: [
          { text: { en: 'Decline it. The last payment would land inside the no-new-debt years, against income that may not hold', tl: 'Tanggihan ito. Mapupunta ang huling bayad sa loob ng no-new-debt years, laban sa kitang hindi tiyak na magpapatuloy' }, correct: true, why: { en: 'The rule is about timing, not the appliance. A new multi-year installment after 55 bets on income that is not guaranteed.', tl: 'Ang patakaran ay tungkol sa timing, hindi sa appliance. Ang bagong maraming-taong installment pagkalampas ng 55 ay tumataya sa kitang hindi garantisado.' } },
          { text: { en: 'Take it, since the appliance is needed now', tl: 'Kunin ito, dahil kailangan na ang appliance ngayon' }, correct: false, why: { en: 'Here is the number: a real need does not remove the risk that the installment outlives steady income. Save for it or pay cash instead.', tl: 'Narito ang numero: hindi inaalis ng totoong pangangailangan ang risk na tumagal ang installment nang lampas sa steady na kita. Mag-ipon o magbayad ng cash na lang.' } },
          { text: { en: 'Take it only if the interest rate is low', tl: 'Kunin lang kung mababa ang interest rate' }, correct: false, why: { en: 'The rate is not the issue here. The timing, against income that is no longer guaranteed to continue, is.', tl: 'Hindi ang rate ang isyu dito. Ang timing, laban sa kitang hindi na garantisadong magpapatuloy, ang isyu.' } },
        ],
      },
      keep: {
        text: { en: 'After 55, a need is not the same question as a new installment.', tl: 'Pagkalampas ng 55, hindi pareho ang tanong ng pangangailangan at ng bagong installment.' },
        action: null,
      },
    },
    {
      id: 'securing.debtfree.4',
      title: { en: 'What still fits after 55, and what does not', tl: 'Ano ang kasya pa pagkalampas ng 55, at ano ang hindi na' },
      minutes: 3,
      hook: {
        text: { en: 'Not every purchase after 55 is off-limits. The test is whether it creates a new installment or closes one.', tl: 'Hindi lahat ng bibilhin pagkalampas ng 55 ay bawal. Ang test ay kung gumagawa ito ng bagong installment o kaya nagsasara ng isa.' },
        illo: 'card',
      },
      show: {
        text: { en: 'Cash purchases, savings, and paying off an existing balance all still fit. A new multi-year commitment, of any size, does not.', tl: 'Kasya pa rin ang cash purchases, savings, at pagbayad ng existing balance. Hindi kasya ang bagong maraming-taong commitment, anuman ang laki.' },
        points: [],
        illo: 'card',
        animate: false,
      },
      do: {
        type: 'swipe',
        prompt: { en: 'Sort each card. Left is still fits, right is save first, no installment.', tl: 'I-sort ang bawat card. Kaliwa ay kasya pa, kanan ay mag-ipon muna, walang installment.' },
        left: { en: 'Still fits', tl: 'Kasya pa' },
        right: { en: 'No installment', tl: 'Walang installment' },
        cards: [
          { text: { en: 'Paying cash for a needed appliance', tl: 'Cash na pagbili ng kailangang appliance' }, side: 'left', why: { en: 'Cash for a real need does not create a new installment; it fits at any age.', tl: 'Ang cash para sa totoong pangangailangan ay hindi gumagawa ng bagong installment; kasya ito kahit anong edad.' } },
          { text: { en: 'A five-year car loan starting at 57', tl: 'Limang-taong car loan na magsisimula sa 57' }, side: 'right', why: { en: 'A new five-year loan at 57 runs past 60, exactly the installment this rule is meant to prevent.', tl: 'Ang bagong limang-taong loan sa 57 ay tatakbo lampas sa 60, eksaktong installment na iniiwasan ng patakarang ito.' } },
          { text: { en: 'Topping up the emergency fund', tl: 'Pagdaragdag sa emergency fund' }, side: 'left', why: { en: 'Building the emergency fund is saving, not borrowing; it always fits.', tl: 'Ang pagpapalaki ng emergency fund ay pag-iipon, hindi panghihiram; laging kasya ito.' } },
          { text: { en: 'A new three-year phone instalment plan', tl: 'Bagong tatlong-taong phone instalment plan' }, side: 'right', why: { en: 'A new three-year commitment started after 55 is still a new installment, regardless of size.', tl: 'Ang bagong tatlong-taong commitment na sinimulan pagkalampas ng 55 ay bagong installment pa rin, anuman ang laki.' } },
          { text: { en: 'Paying off the last credit card balance in full', tl: 'Buong bayad sa huling credit card balance' }, side: 'left', why: { en: 'Closing a balance removes a debt; it never adds one.', tl: 'Ang pagsara ng balance ay tumatanggal ng utang; hindi ito kailanman nagdaragdag.' } },
          { text: { en: 'Refinancing the housing loan into a longer term to lower the payment', tl: 'Pag-refinance sa housing loan sa mas mahabang term para bumaba ang bayad' }, side: 'right', why: { en: 'A longer term extends the debt further past 60, working against the payoff calendar from earlier in this lesson.', tl: 'Ang mas mahabang term ay nagpapahaba sa utang lampas pa sa 60, salungat sa payoff calendar mula sa nakaraang bahagi ng lesson na ito.' } },
        ],
      },
      keep: {
        text: { en: 'The test after 55 is simple: does this add a new installment, or close one.', tl: 'Simple ang test pagkalampas ng 55: nagdaragdag ba ito ng bagong installment, o nagsasara ng isa.' },
        action: null,
      },
    },
    {
      id: 'securing.debtfree.5',
      title: { en: 'The year the last debt closes', tl: 'Ang taon na magsasara ang huling utang' },
      minutes: 3,
      hook: {
        text: { en: 'The avalanche order from the first bite is not just about which debt goes first. It changes the year the whole calendar ends.', tl: 'Ang avalanche order mula sa unang bite ay hindi lang tungkol sa kung aling utang ang mauuna. Binabago nito ang taon na matatapos ang buong calendar.' },
        illo: 'hourglass',
      },
      show: {
        text: { en: 'As each debt closes, its payment frees up for the next one in line. That cascade is what shortens the whole payoff calendar, not any single extra payment alone.', tl: 'Habang nagsasara ang bawat utang, napupunta ang bayad nito sa susunod na nasa linya. Ang cascade na iyon ang nagpapaikli sa buong payoff calendar, hindi ang iisang dagdag na bayad lang.' },
        points: [],
        illo: 'hourglass',
        animate: false,
      },
      do: {
        type: 'predict',
        prompt: { en: 'At 47, three debts remain: a credit card, a small appliance loan, and the housing loan. Following the avalanche order, freeing up each closed debt’s payment for the next. Slide to the age the last one closes, illustrative for this household.', tl: 'Sa edad 47, may tatlong natitirang utang: credit card, maliit na appliance loan, at housing loan. Sundin ang avalanche order, ilipat ang bayad ng bawat nasarang utang sa susunod. I-slide ang hula sa edad na masasara ang huli, illustrative para sa sambahayang ito.' },
        min: 50, max: 65, step: 1, format: 'years', answer: 58,
        why: { en: 'Illustrative: the card and appliance loan close within about three years under the avalanche order. Their freed-up payments then accelerate the housing loan, closing it by 58, two years ahead of the 60 target this lesson works toward.', tl: 'Illustrative: nagsasara ang card at appliance loan sa loob ng mga tatlong taon sa ilalim ng avalanche order. Ang mga napalayang bayad ay nagpapabilis naman sa housing loan, nagsasara ito sa 58, dalawang taon bago ang 60 na target ng lesson na ito.' },
      },
      keep: {
        text: { en: 'Every debt closed early frees its payment for the next one. That is what an avalanche actually does.', tl: 'Bawat maagang nasarang utang ay nagpapalaya ng bayad nito para sa susunod. Iyon ang talagang ginagawa ng avalanche.' },
        action: null,
      },
    },
    {
      id: 'securing.debtfree.6',
      title: { en: 'The loan paid off two years early, and the one that was not', tl: 'Ang utang na nabayaran nang dalawang taon nang maaga, at ang hindi' },
      minutes: 5,
      hook: {
        text: { en: 'You are 50, with ten years left on the housing loan and no other debt. A relative offers a business opportunity that needs a ₱200,000 loan to join.', tl: '50 ka, may sampung taon na lang natitira sa housing loan at walang ibang utang. May alok na negosyo ang isang kamag-anak na nangangailangan ng ₱200,000 loan para makasali.' },
        illo: 'house',
      },
      show: {
        text: { en: 'A new loan at 50 is still years before the no-new-debt line at 55. Whether it helps or hurts the payoff calendar depends on what happens if it does not go as planned.', tl: 'Ang bagong loan sa 50 ay mga taon pa bago ang no-new-debt line sa 55. Nakadepende sa mangyayari kapag hindi umayon sa plano kung tutulong o sasakit ito sa payoff calendar.' },
        illo: 'house',
        animate: false,
      },
      do: {
        type: 'story',
        start: 'n1',
        nodes: {
          n1: {
            text: { en: 'A relative’s business opportunity needs a ₱200,000 loan to join, a new five-year installment starting at 50.', tl: 'Kailangan ng negosyo ng kamag-anak ng ₱200,000 loan para makasali, bagong limang-taong installment simula sa 50.' },
            choices: [
              { text: { en: 'Decline, keep every extra peso on the housing loan', tl: 'Tanggihan, ilagay ang bawat dagdag na piso sa housing loan' }, next: 'a1' },
              { text: { en: 'Take the ₱200,000 loan to join', tl: 'Kunin ang ₱200,000 loan para sumali' }, next: 'b1' },
            ],
          },
          a1: {
            text: { en: 'Extra payments continue on the housing loan alone. By 58, the housing loan closes, two years ahead of 60.', tl: 'Nagpatuloy ang dagdag na bayad sa housing loan lang. Sa 58, nasara ang housing loan, dalawang taon bago ang 60.' },
            balance: 0,
            choices: [
              { text: { en: 'Stay debt-free for the last two years to 60', tl: 'Manatiling walang utang sa huling dalawang taon hanggang 60' }, next: 'a2' },
              { text: { en: 'Use the freed-up payment for a child’s tuition instead', tl: 'Gamitin ang napalayang bayad para sa tuition ng anak' }, next: 'a3' },
            ],
          },
          a2: {
            text: { en: 'At 60, the household carries no debt at all, two years of a fully freed-up budget already banked.', tl: 'Sa 60, walang utang ang sambahayan, dalawang taon ng ganap na malayang budget ang na-bank na.' },
            balance: 0,
            outcome: 'steady',
          },
          a3: {
            text: { en: 'The freed-up housing payment goes to tuition instead of sitting idle. At 60, still no debt, and two years of tuition already covered without touching savings.', tl: 'Napunta sa tuition ang napalayang bayad sa halip na tumambay lang. Sa 60, wala pa ring utang, at dalawang taon ng tuition ang nasakop na nang hindi ginagalaw ang savings.' },
            balance: 0,
            outcome: 'steady',
          },
          b1: {
            text: { en: 'The ₱200,000 business loan runs five years, to 55, alongside the housing loan. Extra payments now split between two obligations instead of one.', tl: 'Tumatakbo ng limang taon ang ₱200,000 business loan, hanggang 55, kasabay ng housing loan. Nahahati na ngayon ang dagdag na bayad sa dalawang obligasyon sa halip na isa.' },
            balance: 200000,
            choices: [
              { text: { en: 'At 55, the business loan closes on schedule, resume full extra payments on housing', tl: 'Sa 55, nasara ang business loan ayon sa plano, ibalik ang buong dagdag na bayad sa housing' }, next: 'b2' },
              { text: { en: 'At 55, the business struggles and the loan needs restructuring into a longer term', tl: 'Sa 55, nahirapan ang negosyo at kailangang i-restructure ang loan sa mas mahabang term' }, next: 'b3' },
            ],
          },
          b2: {
            text: { en: 'With the business loan cleared at 55 and extra payments resuming, the housing loan closes at 59, one year ahead of 60, one year later than if the ₱200,000 loan was never taken.', tl: 'Sa pagkakasara ng business loan sa 55 at pagbabalik ng dagdag na bayad, nasara ang housing loan sa 59, isang taon bago ang 60, isang taon na mas huli kung sakaling hindi kinuha ang ₱200,000 loan.' },
            balance: 0,
            outcome: 'steady',
          },
          b3: {
            text: { en: 'Restructuring extends the business loan past 55, exactly the new-installment risk this lesson warns against. The housing loan, starved of extra payments for those years, is still running when 60 arrives.', tl: 'Ang pag-restructure ay nagpapahaba sa business loan lampas sa 55, eksaktong risk na binabalaan ng lesson na ito. Ang housing loan, na kulang sa dagdag na bayad sa mga taong iyon, ay tumatakbo pa rin pagdating ng 60.' },
            balance: 150000,
            outcome: 'costly',
          },
        },
      },
      keep: {
        text: { en: 'Two extra years, or a debt still open at 60. The difference was one decision made at 50, and how it aged into 55.', tl: 'Dalawang dagdag na taon, o utang na bukas pa sa 60. Ang pagkakaiba ay isang desisyon na ginawa sa 50, at kung paano ito tumanda papunta sa 55.' },
        action: null,
      },
    },
  ],
};

const scams = {
  id: 'securing.scams',
  title: { en: 'Scams that target people over 40', tl: 'Mga Scam na Target ang Higit 40' },
  summary: { en: 'The seminar, the sure ball, the fake bank officer, and the remittance scam aimed at an OFW’s parents.', tl: 'Ang seminar, ang sure ball, ang fake bank officer, at ang padala scam na target ang magulang ng OFW.' },
  competency: { en: 'Can name the scams most aimed at their age group', tl: 'Kayang pangalanan ang mga scam na pinaka-target sa edad nila' },
  wish: 'safe',
  status: 'authored',
  bites: [
    {
      id: 'securing.scams.1',
      title: { en: 'The investment seminar with a guaranteed return', tl: 'Ang investment seminar na may guaranteed return' },
      minutes: 3,
      hook: {
        text: { en: 'A former colleague, recently retired, forwards a seminar invite: a guaranteed 5% a month, no risk stated anywhere.', tl: 'May dating katrabaho, bagong retiro, na nagpasa ng seminar invite: guaranteed 5% kada buwan, walang binanggit na risk kahit saan.' },
        illo: 'phone',
      },
      show: {
        text: { en: 'The word "guaranteed" attached to a return far above what any bank, bond, or fund pays is the detail that should end the conversation, not start it.', tl: 'Ang salitang "guaranteed" na nakadikit sa returns na malayong mas mataas kaysa sa binabayad ng kahit anong bangko, bond, o fund ang detalyeng dapat magtapos ng usapan, hindi magsimula nito.' },
        points: [
          { en: 'A 5% monthly return is over 60% a year, several times what the safest instruments in this course pay.', tl: 'Ang 5% na buwanang return ay mahigit 60% kada taon, ilang beses na mas mataas kaysa sa binabayad ng pinaka-ligtas na instruments sa course na ito.' },
          { en: 'A real investment carries risk and says so. A guaranteed return is a promise no real fund can make.', tl: 'Ang totoong investment ay may risk at sinasabi ito. Ang guaranteed return ay pangakong hindi kayang gawin ng kahit anong totoong fund.' },
        ],
        illo: 'phone',
        animate: true,
      },
      do: {
        type: 'spot',
        prompt: { en: 'Tap the lines that should make you pause before attending, let alone paying.', tl: 'I-tap ang mga linyang dapat magpapatigil sa iyo bago dumalo, lalo na bago magbayad.' },
        seconds: 20,
        message: {
          channel: 'chat',
          from: { en: 'Seminar organiser (unknown number)', tl: 'Organiser ng seminar (hindi kilalang numero)' },
          lines: [
            { text: { en: 'Sir/Ma’am, congratulations on your upcoming retirement.', tl: 'Sir/Ma’am, congratulations sa malapit na ninyong retirement.' }, suspicious: false, why: { en: 'A friendly greeting on its own carries no risk.', tl: 'Ang mainit na bati lang ay walang dalang risk.' } },
            { text: { en: 'Guaranteed 5% a month on our investment, higher than any bank.', tl: 'Guaranteed 5% a month sa investment namin, mas mataas pa sa bangko.' }, suspicious: true, why: { en: 'A guaranteed return that beats every bank and bond by many times over is the clearest sign of an investment scam.', tl: 'Ang guaranteed return na ilang beses na mas mataas sa bangko at bond ang pinakamalinaw na senyales ng investment scam.' } },
            { text: { en: 'Free seminar on Saturday, bring your friends too.', tl: 'May libreng seminar sa Sabado, dalhin niyo na rin ang mga kaibigan ninyo.' }, suspicious: false, why: { en: 'An invitation to a seminar is not itself a red flag.', tl: 'Ang imbitasyon lang sa seminar ay hindi pa red flag.' } },
            { text: { en: 'Only ₱50,000 minimum, and do not ask the SEC because this is still exclusive.', tl: 'Kailangan lang ng ₱50,000 minimum, at bawal daw itanong sa SEC dahil exclusive pa raw ito.' }, suspicious: true, why: { en: 'Telling an investor not to check with the SEC is the opposite of what a legitimate offer would ever say.', tl: 'Ang pagsabing huwag itanong sa SEC ay kabaligtaran ng sasabihin ng lehitimong alok.' } },
            { text: { en: 'You are sixty already, you need to earn fast, now before it is too late.', tl: 'Sisenta na kayo, dapat mabilis kumita, ngayon na bago mahuli.' }, suspicious: true, why: { en: 'Urgency aimed at an age group with less time to recover a loss is a pressure tactic, not a reason to skip checking first.', tl: 'Ang urgency na target ang edad na kaunti na ang oras para mabawi ang lugi ay taktika ng pressure, hindi dahilan para laktawan ang pag-check muna.' } },
          ],
        },
        why: { en: 'A guaranteed return above what banks or bonds pay, and a request to skip the SEC check, outrank every other detail in the message. Check any investment offer on the SEC Check App before attending, let alone paying.', tl: 'Ang guaranteed return na mas mataas kaysa sa binabayad ng bangko o bond, at ang paghingi na laktawan ang SEC check, ang higit sa lahat ng ibang detalye sa mensahe. I-check ang kahit anong investment offer sa SEC Check App bago dumalo, lalo na bago magbayad.' },
      },
      keep: {
        text: { en: 'A guaranteed return is not a better product. It is the tell.', tl: 'Ang guaranteed return ay hindi mas magandang produkto. Ito ang senyales.' },
        action: null,
      },
    },
    {
      id: 'securing.scams.2',
      title: { en: 'Sure ball schemes and how they choose their targets', tl: 'Ang sure ball schemes at kung paano pumipili ng target' },
      minutes: 3,
      hook: {
        text: { en: 'A "sure ball" investment claims a fixed return no matter what the market does. The pitch always finds the same kind of person.', tl: 'Ang "sure ball" na investment ay nag-aangkin ng fixed return kahit ano ang gawin ng market. Palaging pareho ang uri ng taong nahahanap ng pitch.' },
        illo: 'hand',
      },
      show: {
        text: { en: 'These schemes recruit through personal networks, a relative, a former colleague, a church or community group, aimed specifically at people who have a lump sum on hand or arriving soon.', tl: 'Ang mga schemeng ito ay nangre-recruit sa pamamagitan ng personal na networks, kamag-anak, dating katrabaho, simbahan o community group, target ang mga taong may lump sum na hawak o darating na.' },
        points: [
          { en: 'A retirement payout, an OFW’s savings, or the proceeds of a business sale are exactly the lump sums these schemes are built to reach.', tl: 'Ang retirement payout, savings ng OFW, o kita sa pagbenta ng negosyo ay eksaktong mga lump sum na tinatarget ng mga schemeng ito.' },
        ],
        illo: 'hand',
        animate: false,
      },
      do: {
        type: 'choice',
        prompt: { en: 'A sure ball scheme most wants to reach someone who has which of the following?', tl: 'Sino ang pinaka-gustong maabot ng sure ball scheme?' },
        options: [
          { text: { en: 'A retirement payout or a large lump sum arriving soon, and trust in whoever is pitching', tl: 'Retirement payout o malaking lump sum na darating na, at tiwala sa nag-aalok' }, correct: true, why: { en: 'Trust plus access to a real lump sum is exactly the combination these schemes are built to find.', tl: 'Ang tiwala kasama ang access sa totoong lump sum ang eksaktong kombinasyong hinahanap ng mga schemeng ito.' } },
          { text: { en: 'The most sophisticated investment knowledge in the room', tl: 'Ang pinaka-sopistikadong kaalaman sa investment sa loob ng kwarto' }, correct: false, why: { en: 'Sophistication is not the target trait. Trust and access to a lump sum are.', tl: 'Hindi ang sopistikasyon ang tinatarget na katangian. Ang tiwala at access sa lump sum ang tinatarget.' } },
          { text: { en: 'The lowest income among the people being pitched', tl: 'Ang pinakamababang kita sa mga taong pinag-aalukan' }, correct: false, why: { en: 'These schemes target people with money to invest, not the least.', tl: 'Tinatarget ng mga schemeng ito ang mga taong may perang mai-invest, hindi ang pinakakaunti.' } },
        ],
      },
      keep: {
        text: { en: 'The pitch is aimed at what you have saved, not at what you know.', tl: 'Ang pitch ay nakatutok sa naipon mo, hindi sa alam mo.' },
        action: null,
      },
    },
    {
      id: 'securing.scams.3',
      title: { en: 'The fake bank officer’s script, matched to the real one', tl: 'Ang script ng fake bank officer, itinugma sa totoo' },
      minutes: 3,
      hook: {
        text: { en: 'A caller claims to be from your bank, your account is compromised, and only your OTP can fix it right now.', tl: 'May tumatawag na nagsasabing mula sa bangko mo, na-compromise ang account mo, at ang OTP mo lang ang makakaayos nito ngayon.' },
        illo: 'phone',
      },
      show: {
        text: { en: 'A real bank and a real agency both have scripts. Neither one matches what the caller is about to ask for.', tl: 'May script ang totoong bangko at ang totoong ahensya. Wala sa kanila ang tugma sa hihingin ng tumatawag.' },
        points: [],
        illo: 'phone',
        animate: false,
      },
      do: {
        type: 'match',
        prompt: { en: 'Match each fake line to what actually happens.', tl: 'I-match ang bawat pekeng linya sa talagang nangyayari.' },
        pairs: [
          { a: { en: 'Fake: calls you first, claims your account is compromised, asks for the OTP', tl: 'Fake: tatawag muna, sasabihing na-compromise ang account mo, hihingi ng OTP' }, b: { en: 'Real: a bank never asks for your OTP, PIN, or full card number over a call', tl: 'Totoo: hindi kailanman hihingi ng OTP, PIN, o buong card number ang bangko sa tawag' } },
          { a: { en: 'Fake: says PhilHealth or SSS benefits stop today unless a fee is paid now', tl: 'Fake: sasabihing titigil ang PhilHealth o SSS benefits ngayon maliban kung magbabayad kaagad' }, b: { en: 'Real: SSS and PhilHealth never suspend a benefit through a phone call', tl: 'Totoo: hindi kailanman sinususpinde ng SSS at PhilHealth ang benefit sa tawag' } },
          { a: { en: 'Fake: sends a link to "verify" your account', tl: 'Fake: nagpapadala ng link para i-"verify" ang account' }, b: { en: 'Real: type the bank’s own address directly, never the link in the message', tl: 'Totoo: i-type ang sariling address ng bangko nang direkta, hindi ang link sa mensahe' } },
          { a: { en: 'Fake: pressures you to act within minutes', tl: 'Fake: pinipilit kang kumilos sa loob ng ilang minuto' }, b: { en: 'Real: a bank can always be called back on the number printed on your card', tl: 'Totoo: puwede palaging tawagan ulit ang bangko sa numerong nakalimbag sa card mo' } },
        ],
      },
      keep: {
        text: { en: 'Hang up. Call the number printed on your own card, not the one the caller gives you.', tl: 'Ibaba ang tawag. Tawagan ang numerong nakalimbag sa sarili mong card, hindi ang ibinigay ng tumawag.' },
        action: null,
      },
    },
    {
      id: 'securing.scams.4',
      title: { en: 'Ninety seconds of scam patterns', tl: 'Siyamnapung segundo ng scam patterns' },
      minutes: 3,
      hook: {
        text: { en: 'The patterns from the last three bites repeat with small variations. Recognising the pattern matters more than remembering any one script.', tl: 'Ang mga pattern mula sa huling tatlong bite ay umuulit nang may maliliit na pagbabago. Mas mahalaga ang makilala ang pattern kaysa sa matandaan ang isang script lang.' },
        illo: 'spiral',
      },
      show: {
        text: { en: 'True or false, ninety seconds, on the patterns this lesson has covered.', tl: 'Tama o mali, siyamnapung segundo, tungkol sa mga pattern na natalakay ng lesson na ito.' },
        points: [],
        illo: 'spiral',
        animate: false,
      },
      do: {
        type: 'rapid',
        seconds: 90,
        items: [
          { text: { en: 'A bank may call you, but will never ask for your OTP over the phone.', tl: 'Puwedeng tumawag ang bangko, pero hindi kailanman hihingi ng OTP sa tawag.' }, answer: true, why: { en: 'Confirmed: banks ask you to never share the OTP with anyone, including their own staff.', tl: 'Kumpirmado: hinihiling ng mga bangko na huwag ibahagi ang OTP kahit kanino, kasama ang sarili nilang staff.' } },
          { text: { en: 'SSS and PhilHealth can suspend a benefit through a text message link.', tl: 'Puwedeng suspindihin ng SSS at PhilHealth ang benefit sa pamamagitan ng link sa text.' }, answer: false, why: { en: 'Neither agency suspends benefits by text or call; a message claiming otherwise is the scam.', tl: 'Wala sa dalawang ahensya ang nagsususpinde ng benefit sa text o tawag; ang mensaheng nagsasabi nito ang scam.' } },
          { text: { en: 'A sure ball scheme mostly targets people who have little savings to lose.', tl: 'Tinatarget ng sure ball scheme ang mga taong kaunti lang ang savings na malulugi.' }, answer: false, why: { en: 'The opposite: these schemes target people with a lump sum or steady savings worth taking.', tl: 'Kabaligtaran: tinatarget ng mga schemeng ito ang mga taong may lump sum o steady savings na sulit kunin.' } },
          { text: { en: 'Checking an investment on the SEC Check App takes only a few minutes.', tl: 'Ang pag-check ng investment sa SEC Check App ay ilang minuto lang.' }, answer: true, why: { en: 'It is a quick, free check, and the natural first step before any payment.', tl: 'Mabilis at libre itong check, at ang natural na unang hakbang bago ang kahit anong bayad.' } },
          { text: { en: 'A remittance scam aimed at an OFW’s parents usually opens with an immediate demand for money.', tl: 'Ang remittance scam na target ang magulang ng OFW ay karaniwang nagsisimula sa agarang paghingi ng pera.' }, answer: false, why: { en: 'It usually opens with something ordinary, a new number, a greeting, before the money request comes.', tl: 'Karaniwang nagsisimula ito sa ordinaryong bagay, bagong numero, bati, bago dumating ang paghingi ng pera.' } },
          { text: { en: 'Hanging up and calling the bank’s own printed number is safer than trusting the caller’s number.', tl: 'Mas ligtas ang ibaba ang tawag at tawagan ang nakalimbag na numero ng bangko kaysa magtiwala sa numero ng tumawag.' }, answer: true, why: { en: 'The printed number is the one place a scammer cannot redirect.', tl: 'Ang nakalimbag na numero lang ang hindi kayang i-redirect ng scammer.' } },
        ],
      },
      keep: {
        text: { en: 'The details change. The pattern, urgency, secrecy, a request to skip the check, does not.', tl: 'Nagbabago ang detalye. Hindi nagbabago ang pattern, urgency, lihim, kahilingang laktawan ang check.' },
        action: null,
      },
    },
    {
      id: 'securing.scams.5',
      title: { en: 'The call about a remittance, aimed at your parents', tl: 'Ang tawag tungkol sa remittance, target ang mga magulang mo' },
      minutes: 5,
      hook: {
        text: { en: 'Your parents receive a call: "this is your son calling from abroad, my phone and wallet were stolen, please send ₱15,000 to this new number for an emergency."', tl: 'May natanggap na tawag ang magulang mo: "ako ito anak mo, tumatawag mula abroad, ninakawan ako ng phone at wallet, magpadala ka ng ₱15,000 sa bagong numerong ito para sa emergency."' },
        illo: 'family',
      },
      show: {
        text: { en: 'A remittance scam aimed at an OFW’s parents copies the voice and the urgency of a real emergency. The one thing it cannot copy is a number already saved.', tl: 'Ang padala scam na target ang magulang ng OFW ay ginagaya ang boses at ang urgency ng totoong emergency. Ang isang bagay na hindi nito kayang gayahin ay ang numerong naka-save na.' },
        points: [],
        illo: 'family',
        animate: false,
      },
      do: {
        type: 'story',
        start: 'n1',
        nodes: {
          n1: {
            text: { en: 'Your parents receive the call and must decide what to do before sending anything.', tl: 'Natanggap ng magulang mo ang tawag at kailangan nilang magpasya bago magpadala ng kahit ano.' },
            choices: [
              { text: { en: 'Tell your parents to send the money right away', tl: 'Sabihin sa magulang mo na magpadala agad ng pera' }, next: 'a1' },
              { text: { en: 'Tell your parents to hang up and call your real number first', tl: 'Sabihin sa magulang mo na ibaba ang tawag at tawagan muna ang totoong numero mo' }, next: 'b1' },
            ],
          },
          a1: {
            text: { en: 'Money sent to an unfamiliar account is difficult to recover once confirmed. Your parents call your real number an hour later and reach you safely at your usual post abroad, having already sent ₱15,000 to a stranger.', tl: 'Mahirap na mabawi ang perang naipadala na sa hindi kilalang account. Tumawag ang magulang mo sa totoo mong numero isang oras pagkatapos at naabot ka nang ligtas sa dati mong post sa abroad, matapos nang makapagpadala ng ₱15,000 sa estranghero.' },
            balance: -15000,
            outcome: 'costly',
          },
          b1: {
            text: { en: 'Your parents hang up and call your actual number, saved in their phone under your name. You answer, safe, at your usual post abroad, no emergency at all.', tl: 'Ibinaba ng magulang mo ang tawag at tinawagan ang totoo mong numero, naka-save sa phone nila sa pangalan mo. Sumagot ka, ligtas, sa dati mong post sa abroad, walang emergency.' },
            balance: 0,
            choices: [
              { text: { en: 'Report the call to the bank and ask about the Anti-Financial Account Scamming Act hold', tl: 'I-report ang tawag sa bangko at itanong tungkol sa Anti-Financial Account Scamming Act hold' }, next: 'b2' },
              { text: { en: 'Let it go since no money was sent', tl: 'Hayaan na lang dahil walang naipadalang pera' }, next: 'b3' },
            ],
          },
          b2: {
            text: { en: 'The bank flags the receiving account. Under the Anti-Financial Account Scamming Act, banks can hold disputed funds, which helps the next family the same account tries to reach.', tl: 'Na-flag ng bangko ang tumatanggap na account. Sa ilalim ng Anti-Financial Account Scamming Act, puwedeng i-hold ng bangko ang pinagtatalunang pondo, na tumutulong sa susunod na pamilyang tatangkaing abutin ng parehong account.' },
            balance: 0,
            outcome: 'steady',
          },
          b3: {
            text: { en: 'No money was lost this time, but the same number can try another relative next, or your parents again, next month.', tl: 'Walang naiwalang pera sa pagkakataong ito, pero puwedeng subukan ng parehong numero ang ibang kamag-anak, o ang magulang mo ulit, sa susunod na buwan.' },
            balance: 0,
            outcome: 'steady',
          },
        },
      },
      keep: {
        text: { en: 'Hang up, call the number you already have saved, then decide. That order does not change.', tl: 'Ibaba ang tawag, tawagan ang numerong naka-save mo na, saka magpasya. Hindi nagbabago ang pagkakasunod na iyon.' },
        action: { kind: 'open', label: { en: 'Check remittance settings with my parents', tl: 'Tingnan ang remittance settings kasama ang magulang ko' }, payload: { app: 'remit' } },
      },
    },
  ],
};

export default {
  id: 'securing',
  band: '40 to 59',
  title: { en: 'Securing', tl: 'Pagsisiguro' },
  tagline: { en: 'Fifteen to twenty working years left, children still in school, parents ageing, and a pension that will not be enough on its own.', tl: 'Labinlima hanggang dalawampung taon na lang ng trabaho, mga anak na nag-aaral pa, mga magulang na tumatanda, at pension na hindi sapat mag-isa.' },
  gate: null,
  intro: {
    text: { en: 'Everything here starts from the pension the formula actually pays, then works backward to what fifteen years can still fix.', tl: 'Nagsisimula ang lahat dito sa pension na talagang binabayad ng formula, tapos umaatras papunta sa kayang ayusin ng labinlimang taon.' },
    video: { placeholder: 'Forty-five second vertical clip. An hourglass beside a payslip and a school ID on a kitchen table, Jinnie’s lamp in frame. Voice: "Fifteen years is still enough time to change the number." No music stings, no exclamation.' },
    illo: 'hourglass',
  },
  lessons: [math, health, booster, ladder, education, estate, debtfree, scams],
};
