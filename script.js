const questions = [
  {
    text: 'מה אתה שותה בבוקר?',
    options: [
      { text: 'מאצ׳ה', scores: { democrats: 3, anti: 2, yeshAtid: 1 } },
      { text: 'קפה שחור', scores: { likud: 3, benGvir: 2, shas: 1 } },
      { text: 'זירו', scores: { yeshAtid: 2, benet: 2, anti: 1 } },
      { text: 'מים', scores: { benet: 1, yeshAtid: 1, liberman: 1, anti: 1 } }
    ]
  },
  {
    text: 'איפה אתה גר?',
    options: [
      { text: 'תל אביב, אבל מתלונן על קורקינטים', scores: { democrats: 3, anti: 2, yeshAtid: 1 } },
      { text: 'רעננה/גבעתיים כזה מסודר', scores: { yeshAtid: 2, benet: 2, anti: 1 } },
      { text: 'יישוב עם דגל על המרפסת', scores: { likud: 2, benet: 2, benGvir: 2 } },
      { text: 'איפה שיש חניה וזול', scores: { liberman: 2, zelecha: 3, shas: 1 } }
    ]
  },
  {
    text: 'מה אתה רואה בטלוויזיה בלי להתבייש?',
    options: [
      { text: 'ערוץ 14 ועוד אומר שזה הכי מאוזן', scores: { likud: 3, benGvir: 3 } },
      { text: 'חדשות 12 ואז אומר שכולם מגמתיים', scores: { anti: 2, benet: 2, yeshAtid: 1 } },
      { text: 'אין לי טלוויזיה, אני צורך רק פודקאסטים', scores: { democrats: 2, zelecha: 1, arab: 1 } },
      { text: 'מה שיש, העיקר שלא יחפרו', scores: { liberman: 2, benet: 1 } }
    ]
  },
  {
    text: 'מה המשפט שיוצא לך אוטומטית?',
    options: [
      { text: 'די כבר עם הכיבוש אחי', scores: { democrats: 3, arab: 2, anti: 1 } },
      { text: 'צריך להיכנס בהם', scores: { benGvir: 3, likud: 2 } },
      { text: 'שיעזבו אותי ויורידו מיסים', scores: { zelecha: 3, liberman: 2, benet: 1 } },
      { text: 'בואו נוריד רגע את הלהבות', scores: { yeshAtid: 2, benet: 2, anti: 1 } }
    ]
  },
  {
    text: 'מה אתה עושה כשחותכים אותך בכביש?',
    options: [
      { text: 'צופר ואז ממשיך, אין לי כוח', scores: { yeshAtid: 2, benet: 1, anti: 1 } },
      { text: 'מסביר שזה בגלל בג״ץ', scores: { likud: 3, benGvir: 1 } },
      { text: 'פותח חלון ונותן נאום על משילות', scores: { benGvir: 3, likud: 1 } },
      { text: 'ממלמל על יוקר המחיה', scores: { zelecha: 2, liberman: 2 } }
    ]
  },
  {
    text: 'מה הוייב שלך בקבוצת וואטסאפ משפחתית?',
    options: [
      { text: 'שולח דגלים ואש ולה פמיליה', scores: { likud: 2, benGvir: 2 } },
      { text: 'שולח לינק על ריכוזיות במשק', scores: { zelecha: 3, liberman: 1 } },
      { text: 'כותב בואו נשמור על שיח מכבד', scores: { anti: 2, yeshAtid: 2, democrats: 1 } },
      { text: 'לא קורא בכלל, מושתק ל־8 שנים', scores: { benet: 1, liberman: 1, haredi: 1 } }
    ]
  },
  {
    text: 'מה אתה לובש לים?',
    options: [
      { text: 'חולצת מחאה דהויה מקפלן', scores: { democrats: 3, anti: 2 } },
      { text: 'דגל ישראל על הכתפיים בלי סיבה', scores: { likud: 2, benGvir: 2, benet: 1 } },
      { text: 'משהו בסיסי, אני לא בא להצהיר', scores: { yeshAtid: 2, benet: 2 } },
      { text: 'לא ים, רק מזגן', scores: { haredi: 1, shas: 1, zelecha: 1 } }
    ]
  },
  {
    text: 'מה הכי חשוב לך בכלכלה?',
    options: [
      { text: 'שהדירה תרד אחרי שקניתי', scores: { zelecha: 3, liberman: 1, benet: 1 } },
      { text: 'שיפסיקו לתת לכולם ויעשו סדר', scores: { liberman: 3, zelecha: 1 } },
      { text: 'שהמדינה תהיה חזקה וגם יקרה, בסדר', scores: { likud: 2, benGvir: 2 } },
      { text: 'שיהיה פה נורמלי פשוט', scores: { yeshAtid: 2, anti: 2, benet: 1 } }
    ]
  },
  {
    text: 'מי אתה בשישי בערב?',
    options: [
      { text: 'דרינק ואז מדבר על איחוי העם', scores: { benet: 3, yeshAtid: 1 } },
      { text: 'קידוש, משפחה, שקט', scores: { shas: 2, haredi: 2, likud: 1 } },
      { text: 'יוצא ואז מתלונן על המחירים', scores: { liberman: 2, zelecha: 2, anti: 1 } },
      { text: 'יושב עם חברים ומריץ בדיחות על הממשלה', scores: { democrats: 2, anti: 2, yeshAtid: 1 } }
    ]
  }
];

const parties = {
  likud: {
    name: 'הליכוד',
    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=1200&q=80',
    text: 'אתה ביבי גם אם אתה אומר שאתה רק "ימני עם שאלות". כנראה יש לך דעה על תקשורת, משפטנים ושרון גל.'
  },
  benGvir: {
    name: 'עוצמה יהודית',
    image: 'https://images.unsplash.com/photo-1541872705-1f73c6400ec9?auto=format&fit=crop&w=1200&q=80',
    text: 'אתה חי על משילות, ענישה, ואפס סבלנות. הכביש, הטוויטר והמדינה, הכול מבחינתך צריך יד קשה.'
  },
  benet: {
    name: 'בנט',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
    text: 'אתה רוצה ימין בלי כתבי אישום ובלי תיאטרון. מנכ״ליזם לאומי עם חולצת טי.'
  },
  yeshAtid: {
    name: 'יש עתיד',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80',
    text: 'אתה מאמין בנורמליות, מעמד ביניים, ולחיות בלי שיצעקו עליך כל היום בטלוויזיה.'
  },
  democrats: {
    name: 'הדמוקרטים',
    image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1200&q=80',
    text: 'אתה עם וייב תל אביבי עצבני, זכויות, מוסדות, ותחושה שכל המדינה איבדה את זה.'
  },
  shas: {
    name: 'ש״ס',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=80',
    text: 'יש אצלך מסורת, חמימות, ותחושת בטן יותר חזקה מכל פאנל חדשות.'
  },
  haredi: {
    name: 'יהדות התורה',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80',
    text: 'פחות רעש, יותר רבנים. מבחינתך הפוליטיקה היא בעיקר מי לא יפריע לחיים שלך.'
  },
  liberman: {
    name: 'ישראל ביתנו',
    image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=1200&q=80',
    text: 'אתה קצר, עצבני, חילוני, ורוצה שמישהו כבר יעבוד מסודר בלי דרמות.'
  },
  arab: {
    name: 'חד״ש-תע״ל / רע״ם',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
    text: 'אתה מחוץ לבינגו של ערוץ 14 ומעדיף פרקטיקה, זכויות ושפיות על פני מופע צעקות.'
  },
  zelecha: {
    name: 'זליכה',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&q=80',
    text: 'מבחינתך הכול זה עמלות, קרטלים, נדל"ן ומצגת אקסל שמישהו צריך סוף סוף לפתוח.'
  },
  anti: {
    name: 'רק לא ביבי בע״מ',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
    text: 'אתה לא בטוח למי תצביע, אבל בטוח למי לא. קודם להחליף, אחר כך נסתדר.'
  }
};

const quizEl = document.getElementById('quiz');
const resultCard = document.getElementById('resultCard');
const quizCard = document.getElementById('quizCard');
const resultTitle = document.getElementById('resultTitle');
const resultText = document.getElementById('resultText');
const resultImage = document.getElementById('resultImage');
const restartBtn = document.getElementById('restartBtn');
const shareBtn = document.getElementById('shareBtn');
const nextBtn = document.getElementById('nextBtn');
const backBtn = document.getElementById('backBtn');
const progressLabel = document.getElementById('progressLabel');
const progressPercent = document.getElementById('progressPercent');
const progressFill = document.getElementById('progressFill');

let currentQuestion = 0;
const answers = Array(questions.length).fill(null);

function renderQuestion() {
  const question = questions[currentQuestion];
  const selectedAnswer = answers[currentQuestion];
  const percent = Math.round(((currentQuestion + 1) / questions.length) * 100);

  progressLabel.textContent = `שאלה ${currentQuestion + 1} מתוך ${questions.length}`;
  progressPercent.textContent = `${percent}%`;
  progressFill.style.width = `${percent}%`;
  backBtn.classList.toggle('hidden', currentQuestion === 0);
  nextBtn.textContent = currentQuestion === questions.length - 1 ? 'קבל את פסק הדין' : 'יאללה הבא';

  quizEl.innerHTML = '';
  const wrap = document.createElement('section');
  wrap.className = 'question';
  wrap.innerHTML = `<h3>${question.text}</h3>`;

  const options = document.createElement('div');
  options.className = 'options';

  question.options.forEach((option, oIndex) => {
    const label = document.createElement('label');
    label.className = `option ${selectedAnswer === oIndex ? 'selected' : ''}`;
    label.innerHTML = `<span>${option.text}</span>`;
    label.addEventListener('click', () => {
      answers[currentQuestion] = oIndex;
      renderQuestion();
    });
    options.appendChild(label);
  });

  wrap.appendChild(options);
  quizEl.appendChild(wrap);
}

function calculateResult() {
  const totals = {};

  for (let qIndex = 0; qIndex < questions.length; qIndex++) {
    const answerIndex = answers[qIndex];
    if (answerIndex === null) return null;
    const scores = questions[qIndex].options[answerIndex].scores;
    Object.entries(scores).forEach(([key, value]) => {
      totals[key] = (totals[key] || 0) + value;
    });
  }

  const winner = Object.entries(totals).sort((a, b) => b[1] - a[1])[0]?.[0];
  return parties[winner] || parties.anti;
}

nextBtn.addEventListener('click', () => {
  if (answers[currentQuestion] === null) {
    alert('צריך לבחור תשובה לפני שממשיכים. גם בפוליטיקה אי אפשר רק להתלונן.');
    return;
  }

  if (currentQuestion < questions.length - 1) {
    currentQuestion += 1;
    renderQuestion();
    return;
  }

  const result = calculateResult();
  resultTitle.textContent = `יצא לך: ${result.name}`;
  resultText.textContent = result.text;
  resultImage.src = result.image;
  resultImage.alt = result.name;
  quizCard.classList.add('hidden');
  resultCard.classList.remove('hidden');
});

backBtn.addEventListener('click', () => {
  if (currentQuestion === 0) return;
  currentQuestion -= 1;
  renderQuestion();
});

restartBtn.addEventListener('click', () => {
  currentQuestion = 0;
  answers.fill(null);
  resultCard.classList.add('hidden');
  quizCard.classList.remove('hidden');
  renderQuestion();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

shareBtn.addEventListener('click', async () => {
  const text = `${resultTitle.textContent} | עשיתי את המבדק הכי מטומטם בפוליטיקה`;
  const url = window.location.href;

  if (navigator.share) {
    try {
      await navigator.share({ title: 'מי אתה בקלפי בעצם?', text, url });
      return;
    } catch (e) {}
  }

  await navigator.clipboard.writeText(`${text} ${url}`);
  shareBtn.textContent = 'הועתק ללוח';
  setTimeout(() => { shareBtn.textContent = 'לשתף תוצאה'; }, 1600);
});

renderQuestion();