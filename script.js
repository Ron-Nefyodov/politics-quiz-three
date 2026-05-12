const questions = [
  {
    text: 'מה אתה דופק על הבוקר?',
    options: [
      { text: 'מאצ׳ה עם מבט שיפוטי', scores: { anti: 2, democrats: 2, yeshAtid: 1 } },
      { text: 'קפה שחור וסיגריה של חרדה לאומית', scores: { likud: 2, benet: 1, shas: 1 } },
      { text: 'נס קפה ועבודה, די עם השטויות', scores: { liberman: 2, zelecha: 2 } }
    ]
  },
  {
    text: 'מה קורה אצלך בטלוויזיה?',
    options: [
      { text: 'ערוץ 14 ברקע גם כשאני מתקלח', scores: { likud: 3, benGvir: 2 } },
      { text: 'חדשות 12 ואז אני מתלונן שכולם גרועים', scores: { anti: 2, benet: 2, yeshAtid: 1 } },
      { text: 'אין לי טלוויזיה, אני מעל הדבר הזה', scores: { democrats: 2, arab: 1, zelecha: 1 } }
    ]
  },
  {
    text: 'ציציות או ציצי?',
    options: [
      { text: 'ציציות אחי, ועוד בחוץ', scores: { haredi: 3, shas: 2 } },
      { text: 'ציצי, מה השאלה בכלל', scores: { likud: 1, benGvir: 1, yeshAtid: 1 } },
      { text: 'שכל אחד יעשה מה שבא לו ואני בעד מזגן', scores: { democrats: 2, anti: 1, arab: 1 } }
    ]
  },
  {
    text: 'שאלה כלכלית מפגרת, מה אתה מעדיף?',
    options: [
      { text: 'שהדירה תרד במחיר אבל רק אחרי שאני קונה', scores: { zelecha: 3, liberman: 1, benet: 1 } },
      { text: 'שהכול יהיה יקר אבל עם ביטחון עצמי', scores: { likud: 2, benGvir: 2 } },
      { text: 'שיפסיקו לבלבל את המוח ויורידו מיסים', scores: { zelecha: 2, liberman: 2, benet: 1 } }
    ]
  },
  {
    text: 'מישהו חתך אותך בכביש. מה אתה עושה?',
    options: [
      { text: 'מצפצף ואז שוכח מזה תוך 4 שניות', scores: { yeshAtid: 1, anti: 1, benet: 1 } },
      { text: 'אומר שזה בגלל הפרקליטות', scores: { likud: 3 } },
      { text: 'מסביר בקול על משילות', scores: { benGvir: 3, likud: 1 } }
    ]
  },
  {
    text: 'מה הוייב שלך בוואטסאפ משפחתי?',
    options: [
      { text: 'שולח דגלים, אש ולה פמיליה', scores: { likud: 2, benGvir: 2 } },
      { text: 'שולח לינק לכלכלן שאף אחד לא קרא', scores: { zelecha: 3, liberman: 1 } },
      { text: 'כותב "בואו נישאר מכבדים" ואף אחד לא מקשיב', scores: { anti: 2, democrats: 1, yeshAtid: 1 } }
    ]
  },
  {
    text: 'מי אתה ביציאה בשישי?',
    options: [
      { text: 'דרינק קליל ואז מדבר על איחוי העם', scores: { benet: 3, yeshAtid: 1 } },
      { text: 'לא יוצא, יש קידוש/ישיבה/לו״ז', scores: { haredi: 2, shas: 2 } },
      { text: 'יוצא, מתלונן על המחירים, וחוזר עצבני', scores: { liberman: 2, zelecha: 2, anti: 1 } }
    ]
  }
];

const parties = {
  likud: { name: 'הליכוד', emoji: '🍾', text: 'אתה ביבי גם אם אתה אומר שאתה רק "ימני עם שאלות". כנראה יש לך דעה על תקשורת, משפטנים ושרון גל.' },
  benGvir: { name: 'עוצמה יהודית', emoji: '🚨', text: 'אתה חי על משילות, ענישה, ואפס סבלנות. הכביש, הטוויטר והמדינה, הכול מבחינתך צריך יד קשה.' },
  benet: { name: 'בנט', emoji: '🪖', text: 'אתה רוצה ימין בלי כתבי אישום ובלי תיאטרון. מנכ״ליזם לאומי עם חולצת טי.' },
  yeshAtid: { name: 'יש עתיד', emoji: '☕', text: 'אתה מאמין בנורמליות, מעמד ביניים, ולחיות בלי שיצעקו עליך כל היום בטלוויזיה.' },
  democrats: { name: 'הדמוקרטים', emoji: '🪴', text: 'אתה עם וייב תל אביבי עצבני, זכויות, מוסדות, ותחושה שכל המדינה איבדה את זה.' },
  shas: { name: 'ש״ס', emoji: '🕯️', text: 'יש אצלך מסורת, חמימות, ותחושת בטן יותר חזקה מכל פאנל חדשות.' },
  haredi: { name: 'יהדות התורה', emoji: '🎩', text: 'פחות רעש, יותר רבנים. מבחינתך הפוליטיקה היא בעיקר מי לא יפריע לחיים שלך.' },
  liberman: { name: 'ישראל ביתנו', emoji: '🥃', text: 'אתה קצר, עצבני, חילוני, ורוצה שמישהו כבר יעבוד מסודר בלי דרמות.' },
  arab: { name: 'חד״ש-תע״ל / רע״ם', emoji: '🕊️', text: 'אתה מחוץ לבינגו של ערוץ 14 ומעדיף פרקטיקה, זכויות ושפיות על פני מופע צעקות.' },
  zelecha: { name: 'זליכה', emoji: '📉', text: 'מבחינתך הכול זה עמלות, קרטלים, נדל"ן ומצגת אקסל שמישהו צריך סוף סוף לפתוח.' },
  anti: { name: 'רק לא ביבי בע״מ', emoji: '🧯', text: 'אתה לא בטוח למי תצביע, אבל בטוח למי לא. קודם להחליף, אחר כך נסתדר.' }
};

const quizEl = document.getElementById('quiz');
const submitBtn = document.getElementById('submitBtn');
const resultCard = document.getElementById('resultCard');
const quizCard = document.getElementById('quizCard');
const resultTitle = document.getElementById('resultTitle');
const resultText = document.getElementById('resultText');
const partyBadge = document.getElementById('partyBadge');
const restartBtn = document.getElementById('restartBtn');
const shareBtn = document.getElementById('shareBtn');

function renderQuiz() {
  quizEl.innerHTML = '';
  questions.forEach((question, qIndex) => {
    const wrap = document.createElement('section');
    wrap.className = 'question';
    wrap.innerHTML = `<h3>${qIndex + 1}. ${question.text}</h3>`;

    const options = document.createElement('div');
    options.className = 'options';

    question.options.forEach((option, oIndex) => {
      const label = document.createElement('label');
      label.className = 'option';
      label.innerHTML = `
        <input type="radio" name="q${qIndex}" value="${oIndex}">
        <span>${option.text}</span>
      `;
      label.addEventListener('click', () => {
        options.querySelectorAll('.option').forEach((el) => el.classList.remove('selected'));
        label.classList.add('selected');
      });
      options.appendChild(label);
    });

    wrap.appendChild(options);
    quizEl.appendChild(wrap);
  });
}

function calculateResult() {
  const totals = {};

  for (let qIndex = 0; qIndex < questions.length; qIndex++) {
    const picked = document.querySelector(`input[name="q${qIndex}"]:checked`);
    if (!picked) return null;
    const scores = questions[qIndex].options[Number(picked.value)].scores;
    Object.entries(scores).forEach(([key, value]) => {
      totals[key] = (totals[key] || 0) + value;
    });
  }

  const winner = Object.entries(totals).sort((a, b) => b[1] - a[1])[0]?.[0];
  return parties[winner] || parties.anti;
}

submitBtn.addEventListener('click', () => {
  const result = calculateResult();
  if (!result) {
    alert('ענה על כל השאלות, אל תברח מהדמוקרטיה.');
    return;
  }

  resultTitle.textContent = `יצא לך: ${result.name}`;
  resultText.textContent = result.text;
  partyBadge.textContent = result.emoji;
  quizCard.classList.add('hidden');
  resultCard.classList.remove('hidden');
});

restartBtn.addEventListener('click', () => {
  document.querySelectorAll('input[type="radio"]').forEach((input) => (input.checked = false));
  document.querySelectorAll('.option').forEach((el) => el.classList.remove('selected'));
  resultCard.classList.add('hidden');
  quizCard.classList.remove('hidden');
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

renderQuiz();