// Placement: the age band comes first, then a short question set written for that band.
// Adults get eight questions in the style of the BSP battery and the OECD Big Three. Kids and teens get
// five to six on their own scale. Results are stored, never shown as a grade.
export const bands = [
  { id: 'kids', label: { en: '7 to 12', tl: '7 hanggang 12' }, mode: 'kids' },
  { id: 'teens', label: { en: '13 to 17', tl: '13 hanggang 17' }, mode: 'teens' },
  { id: 'first', label: { en: '18 to 24', tl: '18 hanggang 24' }, mode: 'adult' },
  { id: 'building', label: { en: '25 to 39', tl: '25 hanggang 39' }, mode: 'adult' },
  { id: 'securing', label: { en: '40 to 59', tl: '40 hanggang 59' }, mode: 'adult' },
  { id: 'retired', label: { en: '60 and over', tl: '60 pataas' }, mode: 'adult' },
];

export const modeOf = bandId => (bands.find(b => b.id === bandId) || {}).mode || 'adult';

const kids = [
  {
    type: 'choice',
    prompt: { en: 'You have ₱50. A sandwich costs ₱35. How much is left?', tl: 'May ₱50 ka. ₱35 ang sandwich. Magkano ang natira?' },
    options: [
      { text: { en: '₱15', tl: '₱15' }, correct: true, why: { en: '50 take away 35 is 15.', tl: '50 bawas 35 ay 15.' } },
      { text: { en: '₱25', tl: '₱25' }, correct: false, why: { en: 'Count again: 35, 40, 45, 50. That is 15.', tl: 'Bilangin ulit: 35, 40, 45, 50. Iyon ay 15.' } },
      { text: { en: '₱85', tl: '₱85' }, correct: false, why: { en: 'That is adding. Buying takes away.', tl: 'Pagdadagdag iyon. Ang pagbili ay nagbabawas.' } },
    ],
  },
  {
    type: 'choice',
    prompt: { en: 'Which one is a need at school?', tl: 'Alin ang need sa school?' },
    options: [
      { text: { en: 'Water at recess', tl: 'Tubig sa recess' }, correct: true, why: { en: 'Your body needs it.', tl: 'Kailangan ng katawan mo.' } },
      { text: { en: 'New stickers', tl: 'Bagong stickers' }, correct: false, why: { en: 'Nice to have. A want.', tl: 'Masarap magkaroon. Want iyon.' } },
      { text: { en: 'A toy from the store', tl: 'Laruan sa tindahan' }, correct: false, why: { en: 'A want. Wants wait.', tl: 'Want. Naghihintay ang wants.' } },
    ],
  },
  {
    type: 'choice',
    prompt: { en: 'A message in a game says: send me your code and get free coins. What do you do?', tl: 'May mensahe sa game: ipadala ang code mo at may libreng coins. Ano ang gagawin mo?' },
    options: [
      { text: { en: 'Do not send it. Tell a parent.', tl: 'Huwag ipadala. Sabihin sa magulang.' }, correct: true, why: { en: 'A code is a key. Nobody gets your key.', tl: 'Ang code ay susi. Walang makakakuha ng susi mo.' } },
      { text: { en: 'Send it, the coins are free', tl: 'Ipadala, libre naman ang coins' }, correct: false, why: { en: 'The coins are the trick. The code is what they want.', tl: 'Ang coins ang pain. Ang code ang gusto nila.' } },
      { text: { en: 'Send only half of the code', tl: 'Ipadala ang kalahati lang ng code' }, correct: false, why: { en: 'Half a key still opens the door.', tl: 'Nagbubukas pa rin ng pinto ang kalahating susi.' } },
    ],
  },
  {
    type: 'choice',
    prompt: { en: 'You want a ₱200 toy. You can save ₱20 a day. How many days?', tl: 'Gusto mo ng ₱200 na laruan. Kaya mong mag-ipon ng ₱20 kada araw. Ilang araw?' },
    options: [
      { text: { en: '10 days', tl: '10 araw' }, correct: true, why: { en: '20 ten times is 200.', tl: '20 sampung beses ay 200.' } },
      { text: { en: '5 days', tl: '5 araw' }, correct: false, why: { en: 'Five days of 20 is only 100.', tl: 'Limang araw ng 20 ay 100 lang.' } },
      { text: { en: '20 days', tl: '20 araw' }, correct: false, why: { en: 'That would be 400. Two toys.', tl: '400 iyon. Dalawang laruan.' } },
    ],
  },
  {
    type: 'choice',
    prompt: { en: 'Money you keep for later goes in the', tl: 'Ang perang itinatabi mo para mamaya ay nasa' },
    options: [
      { text: { en: 'Save jar', tl: 'Save jar' }, correct: true, why: { en: 'Later money lives in the save jar.', tl: 'Sa save jar nakatira ang pera para mamaya.' } },
      { text: { en: 'Spend jar', tl: 'Spend jar' }, correct: false, why: { en: 'The spend jar is for today.', tl: 'Para sa ngayon ang spend jar.' } },
      { text: { en: 'Your pocket', tl: 'Bulsa mo' }, correct: false, why: { en: 'Pockets leak.', tl: 'Tumatagas ang bulsa.' } },
    ],
  },
];

const teens = [
  {
    type: 'choice',
    prompt: { en: 'Your weekly allowance is ₱600 for five school days. What is your daily number?', tl: '₱600 ang weekly baon mo para sa limang araw ng pasok. Ano ang daily number mo?' },
    options: [
      { text: { en: '₱120', tl: '₱120' }, correct: true, why: { en: '600 ÷ 5 = 120.', tl: '600 ÷ 5 = 120.' } },
      { text: { en: '₱100', tl: '₱100' }, correct: false, why: { en: 'That would leave ₱100 unplanned.', tl: '₱100 ang walang plano.' } },
      { text: { en: '₱150', tl: '₱150' }, correct: false, why: { en: 'That runs out on Thursday.', tl: 'Mauubos iyon sa Huwebes.' } },
    ],
  },
  {
    type: 'choice',
    prompt: { en: '₱1,000 in a savings account at 2% a year. After one year there is', tl: '₱1,000 sa savings account sa 2% kada taon. Pagkatapos ng isang taon, mayroong' },
    options: [
      { text: { en: '₱1,020', tl: '₱1,020' }, correct: true, why: { en: '2% of 1,000 is 20.', tl: 'Ang 2% ng 1,000 ay 20.' } },
      { text: { en: '₱1,002', tl: '₱1,002' }, correct: false, why: { en: '2% is 20 pesos, not 2.', tl: 'Ang 2% ay 20 piso, hindi 2.' } },
      { text: { en: '₱1,200', tl: '₱1,200' }, correct: false, why: { en: 'That would be 20%.', tl: '20% iyon.' } },
    ],
  },
  {
    type: 'choice',
    prompt: { en: 'A stranger on Messenger says you won ₱1,000 and asks for the code sent to your phone. You', tl: 'May stranger sa Messenger na nagsabing nanalo ka ng ₱1,000 at humihingi ng code na ipinadala sa phone mo. Ikaw ay' },
    options: [
      { text: { en: 'Ignore it and tell a parent', tl: 'Hindi pinapansin at sinasabi sa magulang' }, correct: true, why: { en: 'Nobody who gives money asks for your code.', tl: 'Walang nagbibigay ng pera na humihingi ng code mo.' } },
      { text: { en: 'Send the code to claim the prize', tl: 'Ipinapadala ang code para makuha ang premyo' }, correct: false, why: { en: 'The code opens your account. That is the prize, for them.', tl: 'Binubuksan ng code ang account mo. Iyon ang premyo, para sa kanila.' } },
      { text: { en: 'Ask which company they are from first', tl: 'Tinatanong muna kung saang kumpanya sila' }, correct: false, why: { en: 'Replying tells them the number is live.', tl: 'Sinasabi ng pagsagot na aktibo ang numero.' } },
    ],
  },
  {
    type: 'choice',
    prompt: { en: 'Which one is a want?', tl: 'Alin ang want?' },
    options: [
      { text: { en: 'A new phone case', tl: 'Bagong phone case' }, correct: true, why: { en: 'Nice, not needed.', tl: 'Maganda, hindi kailangan.' } },
      { text: { en: 'Jeep fare to school', tl: 'Pamasahe sa jeep papuntang school' }, correct: false, why: { en: 'Getting to school is a need.', tl: 'Need ang pagpasok sa school.' } },
      { text: { en: 'Lunch', tl: 'Tanghalian' }, correct: false, why: { en: 'Food is a need.', tl: 'Need ang pagkain.' } },
    ],
  },
  {
    type: 'choice',
    prompt: { en: 'Ten classmates each put ₱100 a week into a savings circle. The pot each week is', tl: 'Sampung kaklase, ₱100 bawat isa kada linggo sa paluwagan. Ang pot kada linggo ay' },
    options: [
      { text: { en: '₱1,000', tl: '₱1,000' }, correct: true, why: { en: '10 × 100. The last to collect has lent to everyone.', tl: '10 × 100. Ang huling kukuha ay nagpautang sa lahat.' } },
      { text: { en: '₱100', tl: '₱100' }, correct: false, why: { en: 'That is one share.', tl: 'Isang bahagi lang iyon.' } },
      { text: { en: '₱10,000', tl: '₱10,000' }, correct: false, why: { en: 'That is ten weeks of pots.', tl: 'Sampung linggo ng pot iyon.' } },
    ],
  },
  {
    type: 'choice',
    prompt: { en: 'Borrow ₱1,000 and return ₱1,200 in forty days. The interest for that time is', tl: 'Umutang ng ₱1,000 at magbalik ng ₱1,200 sa apatnapung araw. Ang interes sa panahong iyon ay' },
    options: [
      { text: { en: '20%', tl: '20%' }, correct: true, why: { en: '200 ÷ 1,000 = 20% in forty days. Very expensive.', tl: '200 ÷ 1,000 = 20% sa apatnapung araw. Napakamahal.' } },
      { text: { en: '2%', tl: '2%' }, correct: false, why: { en: 'That would be ₱20, not ₱200.', tl: '₱20 iyon, hindi ₱200.' } },
      { text: { en: '12%', tl: '12%' }, correct: false, why: { en: 'The extra is 200 on 1,000, a fifth.', tl: 'Ang dagdag ay 200 sa 1,000, ikalima.' } },
    ],
  },
];

const adults = [
  {
    type: 'choice',
    prompt: { en: 'You put ₱1,000 in an account paying 2% a year. After one year, before any fees, how much is there?', tl: 'Naglagay ka ng ₱1,000 sa account na may 2% kada taon. Pagkatapos ng isang taon, bago ang fees, magkano ang laman?' },
    options: [
      { text: { en: '₱1,002', tl: '₱1,002' }, correct: false, why: { en: '2% of ₱1,000 is ₱20, not ₱2.', tl: 'Ang 2% ng ₱1,000 ay ₱20, hindi ₱2.' } },
      { text: { en: '₱1,020', tl: '₱1,020' }, correct: true, why: { en: '1,000 × 0.02 = ₱20 of interest.', tl: '1,000 × 0.02 = ₱20 na interes.' } },
      { text: { en: '₱1,200', tl: '₱1,200' }, correct: false, why: { en: 'That would be 20%.', tl: 'Iyon ay 20%.' } },
    ],
  },
  {
    type: 'choice',
    prompt: { en: 'Same account, left for five years at 2% a year, interest kept in the account. After five years there is', tl: 'Parehong account, iniwan ng limang taon sa 2% kada taon, nananatili ang interes. Pagkatapos ng limang taon, mayroong' },
    options: [
      { text: { en: 'More than ₱1,100', tl: 'Higit sa ₱1,100' }, correct: true, why: { en: 'Interest earns interest. About ₱1,104.', tl: 'Kumikita ng interes ang interes. Mga ₱1,104.' } },
      { text: { en: 'Exactly ₱1,100', tl: 'Eksaktong ₱1,100' }, correct: false, why: { en: 'Only if the interest were taken out each year.', tl: 'Kung kinukuha ang interes kada taon lang.' } },
      { text: { en: 'Less than ₱1,100', tl: 'Mas mababa sa ₱1,100' }, correct: false, why: { en: 'Compounding adds, it does not subtract.', tl: 'Nagdadagdag ang compounding, hindi nagbabawas.' } },
    ],
  },
  {
    type: 'choice',
    prompt: { en: 'Prices rise 6% this year. Your salary rises 3%. What can you buy at the end of the year?', tl: 'Tumaas ang presyo ng 6% ngayong taon. Tumaas ang sweldo mo ng 3%. Ano ang mabibili mo sa katapusan ng taon?' },
    options: [
      { text: { en: 'Less than before', tl: 'Mas kaunti kaysa dati' }, correct: true, why: { en: 'Prices outran the salary by 3 points.', tl: 'Nalampasan ng presyo ang sweldo ng 3 puntos.' } },
      { text: { en: 'The same', tl: 'Pareho' }, correct: false, why: { en: 'Only if both rose the same.', tl: 'Kung pareho ang taas lang.' } },
      { text: { en: 'More than before', tl: 'Mas marami kaysa dati' }, correct: false, why: { en: 'The salary rose, but prices rose faster.', tl: 'Tumaas ang sweldo, pero mas mabilis ang presyo.' } },
    ],
  },
  {
    type: 'choice',
    prompt: { en: 'Which is usually the safer place for ₱100,000 you may need within a year?', tl: 'Alin ang karaniwang mas ligtas na lugar para sa ₱100,000 na maaaring kailanganin sa loob ng isang taon?' },
    options: [
      { text: { en: 'Shares of one company', tl: 'Shares ng isang kumpanya' }, correct: false, why: { en: 'One company can fall a lot in a year.', tl: 'Puwedeng bumagsak nang malaki ang isang kumpanya sa isang taon.' } },
      { text: { en: 'A savings account at a PDIC-insured bank', tl: 'Savings account sa PDIC-insured na bangko' }, correct: true, why: { en: 'Insured up to ₱1,000,000 and reachable any day.', tl: 'Insured hanggang ₱1,000,000 at maaabot anumang araw.' } },
      { text: { en: 'A cryptocurrency', tl: 'Cryptocurrency' }, correct: false, why: { en: 'It can halve in a month.', tl: 'Puwedeng mahati sa isang buwan.' } },
    ],
  },
  {
    type: 'choice',
    prompt: { en: 'Borrow ₱5,000 and repay ₱6,000 after 40 days. The interest for that period is', tl: 'Umutang ng ₱5,000 at magbayad ng ₱6,000 pagkatapos ng 40 araw. Ang interes sa panahong iyon ay' },
    options: [
      { text: { en: '10%', tl: '10%' }, correct: false, why: { en: '₱1,000 on ₱5,000 is a fifth.', tl: 'Ang ₱1,000 sa ₱5,000 ay ikalima.' } },
      { text: { en: '20%', tl: '20%' }, correct: true, why: { en: '1,000 ÷ 5,000 = 20% in 40 days, about 180% a year.', tl: '1,000 ÷ 5,000 = 20% sa 40 araw, mga 180% kada taon.' } },
      { text: { en: '6%', tl: '6%' }, correct: false, why: { en: 'That confuses ₱6,000 with the rate.', tl: 'Napagkamalan ang ₱6,000 bilang rate.' } },
    ],
  },
  {
    type: 'choice',
    prompt: { en: 'What does PhilHealth do?', tl: 'Ano ang ginagawa ng PhilHealth?' },
    options: [
      { text: { en: 'Pays the whole hospital bill', tl: 'Binabayaran ang buong hospital bill' }, correct: false, why: { en: 'It pays a fixed amount per condition, about half of the bill on average.', tl: 'Fixed na halaga kada kondisyon, mga kalahati ng bill sa average.' } },
      { text: { en: 'Pays part of a hospital bill', tl: 'Binabayaran ang bahagi ng hospital bill' }, correct: true, why: { en: 'A fixed amount per condition. The rest is yours or an HMO’s.', tl: 'Fixed na halaga kada kondisyon. Ang natitira ay sa iyo o sa HMO.' } },
      { text: { en: 'Pays your salary when you are sick', tl: 'Binabayaran ang sweldo mo kapag may sakit' }, correct: false, why: { en: 'That is the SSS sickness benefit.', tl: 'Iyon ang SSS sickness benefit.' } },
    ],
  },
  {
    type: 'choice',
    prompt: { en: 'A message says your bank account is locked and asks for the code sent to your phone to unlock it. You should', tl: 'May mensaheng nagsasabing naka-lock ang bank account mo at humihingi ng code na ipinadala sa phone mo. Dapat mong' },
    options: [
      { text: { en: 'Send the code so it unlocks quickly', tl: 'Ipadala ang code para mabilis ma-unlock' }, correct: false, why: { en: 'No bank asks for a one-time code. This is account takeover.', tl: 'Walang bangko na humihingi ng one-time code. Account takeover ito.' } },
      { text: { en: 'Ignore it and call the number on the back of your card', tl: 'Huwag pansinin at tawagan ang numero sa likod ng card mo' }, correct: true, why: { en: 'Verify through the bank’s own channel, never the message.', tl: 'I-verify sa sariling channel ng bangko, hindi sa mensahe.' } },
      { text: { en: 'Reply asking which branch they are from', tl: 'Sumagot at itanong kung saang branch sila' }, correct: false, why: { en: 'Replying confirms the number is live.', tl: 'Kinukumpirma ng pagsagot na aktibo ang numero.' } },
    ],
  },
  {
    type: 'choice',
    prompt: { en: 'An emergency fund is best sized as', tl: 'Ang emergency fund ay pinakamainam na sukatin bilang' },
    options: [
      { text: { en: 'One week of salary', tl: 'Isang linggo ng sweldo' }, correct: false, why: { en: 'Too small for a hospital stay or a job loss.', tl: 'Masyadong maliit para sa ospital o pagkawala ng trabaho.' } },
      { text: { en: 'Three to six months of needs', tl: 'Tatlo hanggang anim na buwan ng needs' }, correct: true, why: { en: 'Needs, not salary, and longer if income is irregular.', tl: 'Needs, hindi sweldo, at mas mahaba kung hindi regular ang kita.' } },
      { text: { en: 'Whatever is left at the end of the month', tl: 'Kung ano ang natira sa katapusan ng buwan' }, correct: false, why: { en: 'That is usually nothing. Savings come first on payday.', tl: 'Karaniwang wala. Savings muna sa payday.' } },
    ],
  },
];

export function questionsFor(bandId) {
  const mode = modeOf(bandId);
  return mode === 'kids' ? kids : mode === 'teens' ? teens : adults;
}

export function suggest(bandId, correct, of) {
  const ratio = of ? correct / of : 0;
  const startAt = ratio >= 0.8 ? 3 : ratio >= 0.6 ? 2 : 1;
  return { path: bandId, startAt, correct, of };
}
