const sections = [
  {
    id: "detail",
    numeral: "壹",
    title: "文本细读",
    description: "先确认事实，再进入解释。共 8 题，每题 4 分。",
  },
  {
    id: "craft",
    numeral: "贰",
    title: "结构与语言",
    description: "关注白描、数字锚定、物件回调、对照与留白。共 6 题，每题 4 分。",
  },
  {
    id: "theme",
    numeral: "叁",
    title: "人物与主题",
    description: "讨论金钱、亲密关系、劳动与 AI 决策。共 6 题，每题 4 分。",
  },
  {
    id: "multiple",
    numeral: "肆",
    title: "复合判断",
    description: "每题有多个正确选项，须全部选对且无多选。共 4 题，每题 5 分。",
  },
];

const questions = [
  {
    id: "q01", section: "detail", type: "single", points: 4,
    prompt: "文章开篇把哪两种重量并置在一起？",
    options: ["一颗卵子与五千万美元现金", "一枚钻戒与一架飞机", "一张照片与一本调查材料", "三十卷胶带与一箱促排针"],
    answer: [0],
    explanation: "两种重量把生育、金钱与亲密关系同时放进可计算的尺度中，也为全文确立了冷峻的叙事基调。",
  },
  {
    id: "q02", section: "detail", type: "single", points: 4,
    prompt: "蒙太奇拉古纳海滩的一层酒店被包下三十天，实际住了多少天？",
    options: ["三天", "八天", "十四天", "二十二天"],
    answer: [1],
    explanation: "她住了八天，余下二十二天仍有清洁工照常整理空房。",
  },
  {
    id: "q03", section: "detail", type: "single", points: 4,
    prompt: "叙述者在校内网好友申请里最终写下了什么？",
    options: ["认识一下", "我是你的影迷", "你好", "可以通过吗"],
    answer: [2],
    explanation: "他反复删改约四十分钟，最后只发出“你好”，申请没有通过。",
  },
  {
    id: "q04", section: "detail", type: "single", points: 4,
    prompt: "2011 年一百五十元的羽绒服与一亿五千万元的电影并置，主要形成什么效果？",
    options: ["交代两人审美完全一致", "凸显早年生活处境与娱乐工业规模的落差", "证明叙述者当时已经投资电影", "说明电影预算来自服装销售"],
    answer: [1],
    explanation: "相似的数字单位跨越巨大，个人生活与娱乐工业由此发生尖锐对照。",
  },
  {
    id: "q05", section: "detail", type: "single", points: 4,
    prompt: "两人第一次见面后去看的卡特兰香蕉，文中标价是多少？",
    options: ["六十二万美元", "六百二十万美元", "六千二百万美元", "一亿五千万美元"],
    answer: [1],
    explanation: "香蕉标价六百二十万美元，“它烂了怎么办”的提问让价格与物的消逝形成反差。",
  },
  {
    id: "q06", section: "detail", type: "single", points: 4,
    prompt: "为了清空放映厅，当天共有多少名观众领钱离开？",
    options: ["十一人", "二十六人", "三十人", "四十六人"],
    answer: [1],
    explanation: "文中明确写到二十六个人领钱，其中包含一对带孩子的夫妻。",
  },
  {
    id: "q07", section: "detail", type: "single", points: 4,
    prompt: "关于抛磨指甲，女方特别提醒的操作原则是什么？",
    options: ["只磨中间", "先用水浸泡", "最后一面顺着一个方向磨", "每天更换工具"],
    answer: [2],
    explanation: "这一动作后来被叙述者遗忘，成为关系中“没有学会的照顾”的具体象征。",
  },
  {
    id: "q08", section: "detail", type: "single", points: 4,
    prompt: "叙述者一面保存四十多页调查材料，一面说全部相信她，紧接着又说一个字也不信。这组表述最能说明什么？",
    options: ["材料已经被证实全部错误", "他在亲密、控制与猜疑之间持续分裂", "女方主动要求他进行调查", "叙述者已经忘记材料内容"],
    answer: [1],
    explanation: "相邻句子的自我抵牾暴露了关系里的信任表演、控制欲与内在猜疑。",
  },
  {
    id: "q09", section: "craft", type: "single", points: 4,
    prompt: "第八天的电话只写“让我想想”“她没有说话”“我听见她那边有海”“好”。这种写法为什么有力量？",
    options: ["它直接说明女方已经彻底绝望", "它省去心理判断，让短句、停顿和海声共同完成拒绝场面", "它加快情节并暗示两人很快和好", "它主要用于证明电话信号不稳定"],
    answer: [1],
    explanation: "这是克制的白描。作者没有替人物宣布悲伤，只保留对话、十一秒停顿和海声，让读者从可感知的细节中抵达情绪。",
  },
  {
    id: "q10", section: "craft", type: "single", points: 4,
    prompt: "三点五微克与两点五吨、一百五十元与一亿五千万元、八天与二十二天空房，这些精确数字共同承担什么作用？",
    options: ["组成一份可以核销的消费清单", "为叙事钉下具体尺度，并用冷静比例制造生命、金钱与处境的反差", "证明文中每项材料都经过司法核验", "削弱人物关系在全文中的重要性"],
    answer: [1],
    explanation: "数字既是事实锚点，也是情绪装置。它们把巨大落差变成可比较的尺度，语气越冷静，反差越锋利。",
  },
  {
    id: "q11", section: "craft", type: "single", points: 4,
    prompt: "“我说好”反复出现，到关键电话里第一次变成“让我想想”。这一变化最准确的理解是？",
    options: ["机械顺从的节奏突然中断，使真正的拒绝格外刺耳", "叙述者终于学会了更礼貌的表达", "女方已经忘记此前所有承诺", "故事由第一人称改成了第三人称"],
    answer: [0],
    explanation: "重复先建立自动响应般的关系节奏；一句“让我想想”打破惯性。真正的转折藏在句式变化里，无需额外宣告。",
  },
  {
    id: "q12", section: "craft", type: "single", points: 4,
    prompt: "磨甲器和“顺着一个方向磨”在前文出现，结尾又写“我的指甲现在还是磨人的”。这种首尾照应有何作用？",
    options: ["补充完整的磨甲教程", "让物件完成回调，把没有学会的照顾转化为延续至今的遗憾与自省", "证明磨甲器本身存在质量问题", "表示叙述者准备从事美甲行业"],
    answer: [1],
    explanation: "物件回调让抽象遗憾落到身体经验上。关系已经结束，那个没有学会的动作仍然留下后果。",
  },
  {
    id: "q13", section: "craft", type: "single", points: 4,
    prompt: "空置楼层、清空影院、过大的私人空间与“什么都没有发生”反复照应，形成了怎样的结构？",
    options: ["空间越空，服务成本越低", "投入越巨大，人物的缺席与关系的空缺越清晰", "地点越遥远，两人越容易交流", "奢华场面能够自动修复误会"],
    answer: [1],
    explanation: "空间和句子共同制造回声：财富可以制造空场与隐私，也会把缺席放大。宏大动静最终落回空缺。",
  },
  {
    id: "q14", section: "craft", type: "single", points: 4,
    prompt: "关键电话末尾，称谓从“妈妈”重新变为“景甜”，这一细微变化意味着什么？",
    options: ["地点发生变化", "亲密角色停止运作，叙述距离骤然拉开", "叙述者临时忘记了称呼", "女方要求恢复全名"],
    answer: [1],
    explanation: "称谓本身就是动作。回到名字，让关系的降温直接发生在语言表面，作者无需补写一段心理说明。",
  },
  {
    id: "q15", section: "theme", type: "single", points: 4,
    prompt: "女方两次问“能来北京吗”，叙述者都沉默。这个细节更接近哪种含义？",
    options: ["他没有听清地点", "他回避进入对方未说明的现实处境", "他已经订好北京行程", "北京在文中只是转机地点"],
    answer: [1],
    explanation: "沉默和“不问”持续并置，显示他能处理资源，却回避一个没有价格和明确说明的请求。",
  },
  {
    id: "q16", section: "theme", type: "single", points: 4,
    prompt: "全文对金钱能力的核心思考更接近哪一项？",
    options: ["金钱能够购买空间、隐私与服务，却无法确保理解和陪伴", "金钱在关系中完全没有作用", "财富必然带来稳定婚姻", "消费规模决定情感深度"],
    answer: [0],
    explanation: "金钱在文中极其有效，也有清晰边界；它能调度世界，无法代替双方回应。",
  },
  {
    id: "q17", section: "theme", type: "single", points: 4,
    prompt: "叙述者如何解释自己长期不对女方说“不”？",
    options: ["出于礼仪", "害怕下一秒得到的答案", "完全忘记拒绝方式", "担心助理反对"],
    answer: [1],
    explanation: "他把长期满足要求追溯到恐惧，人物由财富控制者转为害怕失去回应的人。",
  },
  {
    id: "q18", section: "theme", type: "single", points: 4,
    prompt: "Claude 在关键决定中承担了什么叙事功能？",
    options: ["替代财务 API 完成资产统计", "提供毫不迟疑的外部声音，促成拒绝并引出责任问题", "证明女方已经不再爱他", "自动向女方发送了拒绝消息"],
    answer: [1],
    explanation: "Claude 的确定性与人的迟疑形成对照；真正保持沉默的人仍是叙述者，责任没有消失。",
  },
  {
    id: "q19", section: "theme", type: "single", points: 4,
    prompt: "叙述者等待自己哭，却只数到稳定心跳。这段描写主要表现什么？",
    options: ["身体非常健康", "失落后的情感迟滞、自我旁观与疏离", "他正在准备运动", "他已彻底忘记关系"],
    answer: [1],
    explanation: "他像医生检查别人一样检查自己，期待的悲伤没有按预想出现，疏离感由此增强。",
  },
  {
    id: "q20", section: "theme", type: "single", points: 4,
    prompt: "胶痕、额外燃油、未拆促排针、磨甲器和日程提醒集中出现在结尾，有何共同作用？",
    options: ["提供消费报销清单", "让关系结束后的物质余波与未完成之事继续存在", "预告两人马上复合", "说明助理工作已经全部结束"],
    answer: [1],
    explanation: "这些物件保存关系的后果，情感缺席仍以账单、残痕和未完成动作延续。",
  },
  {
    id: "q21", section: "multiple", type: "multiple", points: 5,
    prompt: "下列哪些写法体现了本文的白描、数字锚定、物件回调或具象化叙事？（多选）",
    options: ["用三点五微克与两点五吨建立跨尺度对照", "电话场面只写短句、沉默和海声，不替人物宣布悲伤", "磨甲器从教学细节回到结尾的自我刺痛", "写清洁工、贴胶带女孩和机组的具体动作，让抽象财富显出劳动成本", "每到情绪转折都直接总结‘他因失恋而无比痛苦’"],
    answer: [0, 1, 2, 3],
    explanation: "前四项分别对应数字锚定、克制白描、物件回调和具象劳动；第五项用概念替读者完成感受，与本文的留白方式相反。",
  },
  {
    id: "q22", section: "multiple", type: "multiple", points: 5,
    prompt: "下列哪些细节共同支持叙述者兼有怀念、控制、遗憾与自我审视？（多选）",
    options: ["保存十九年的 QQ 图片", "长期保留四十多页调查材料", "反复追问如果给钱她会不会留下", "承认自己的指甲至今仍会磨人", "关键电话后立刻删除全部记录"],
    answer: [0, 1, 2, 3],
    explanation: "四个细节分别触及怀念、控制、反事实遗憾和迟来的自我审视；文中没有立即删除全部记录。",
  },
  {
    id: "q23", section: "multiple", type: "multiple", points: 5,
    prompt: "关于 AI 在文中的作用，下列分析合理的有哪些？（多选）",
    options: ["把财务上可承受的问题转为是否应当支付的判断", "用机器的确定性反衬人的迟疑", "引出借助技术转移决定责任的疑问", "证明 AI 完全理解爱情", "证明拒绝在道德上绝对正确"],
    answer: [0, 1, 2],
    explanation: "AI 推动决定、制造对照并引出责任讨论；文本没有证明它理解爱情，也没有给出绝对道德裁决。",
  },
  {
    id: "q24", section: "multiple", type: "multiple", points: 5,
    prompt: "阅读这篇虚构文本时，哪些方法更可靠？（多选）",
    options: ["区分文本事实、合理推断与现实判断", "把“妈妈”放回称谓变化和具体语境中分析", "追踪空房、劳动和残留物之间的结构联系", "凭单一细节断定现实作者的真实动机", "把叙述者等同于现实中的任何人物"],
    answer: [0, 1, 2],
    explanation: "可靠阅读需要证据链和语境，并明确虚构文本与现实判断之间的边界。",
  },
];

const STORAGE_KEY = "sun-reading-quiz-v1";
const printMode = new URLSearchParams(window.location.search).get("print") === "1";
const answers = loadAnswers();
const intro = document.querySelector("#intro");
const quiz = document.querySelector("#quiz");
const results = document.querySelector("#results");
const form = document.querySelector("#quiz-form");
const sectionRoot = document.querySelector("#question-sections");
const answeredCount = document.querySelector("#answered-count");
const completionCopy = document.querySelector("#completion-copy");
const resumeButton = document.querySelector("#resume-button");
const printAnswerKey = document.querySelector("#print-answer-key");
let currentQuestionIndex = 0;

function loadAnswers() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    return stored && typeof stored === "object" ? stored : {};
  } catch {
    return {};
  }
}

function saveAnswers() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
}

function answeredTotal() {
  return questions.filter((question) => Array.isArray(answers[question.id]) && answers[question.id].length).length;
}

function escapeHTML(value) {
  return value.replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);
}

function questionCardHTML(question, number, focusable = false) {
  const selected = answers[question.id] || [];
  const choices = question.options.map((option, index) => {
    const inputType = question.type === "multiple" ? "checkbox" : "radio";
    const checked = selected.includes(index) ? "checked" : "";
    return `
      <label class="choice">
        <input type="${inputType}" name="${question.id}" value="${index}" ${checked} />
        <span class="choice-key">${String.fromCharCode(65 + index)}</span>
        <span class="choice-copy">${escapeHTML(option)}</span>
      </label>`;
  }).join("");
  return `
    <article class="question-card" role="group" ${focusable ? 'tabindex="-1"' : ""} aria-labelledby="prompt-${question.id}" data-question-id="${question.id}">
      <div class="question-number">
        <span>QUESTION ${String(number).padStart(2, "0")}</span>
        <span class="question-points">${question.points} 分</span>
      </div>
      <h3 class="question-prompt" id="prompt-${question.id}">${escapeHTML(question.prompt)}</h3>
      <div class="choice-list">${choices}</div>
    </article>`;
}

function renderAllQuestions() {
  sectionRoot.innerHTML = sections.map((section) => {
    const cards = questions.filter((question) => question.section === section.id).map((question) => {
      const number = questions.indexOf(question) + 1;
      return questionCardHTML(question, number);
    }).join("");
    return `
      <section class="question-section" id="section-${section.id}">
        <header class="section-heading">
          <span class="section-index">${section.numeral}</span>
          <div><h2>${section.title}</h2><p>${section.description}</p></div>
        </header>
        <div class="questions-grid">${cards}</div>
      </section>`;
  }).join("");
}

function renderCurrentQuestion(focus = false) {
  const question = questions[currentQuestionIndex];
  const section = sections.find((item) => item.id === question.section);
  const isLast = currentQuestionIndex === questions.length - 1;
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  sectionRoot.innerHTML = `
    <section class="question-stage" aria-live="polite">
      <header class="stage-header">
        <div>
          <p class="stage-section">${section.numeral} · ${section.title}</p>
          <p>${escapeHTML(section.description)}</p>
        </div>
        <strong>${String(currentQuestionIndex + 1).padStart(2, "0")} <span>/ ${questions.length}</span></strong>
      </header>
      <div class="stage-track" aria-hidden="true"><span style="width:${progress}%"></span></div>
      <div class="stage-question">${questionCardHTML(question, currentQuestionIndex + 1, true)}</div>
      <footer class="stage-navigation">
        <button class="stage-button stage-previous" type="button" data-action="previous" ${currentQuestionIndex === 0 ? "disabled" : ""}>← 上一题</button>
        <span id="stage-answered">已答 ${answeredTotal()} / ${questions.length}</span>
        <button class="stage-button stage-next" type="button" data-action="${isLast ? "submit" : "next"}">${isLast ? "交卷并评分 →" : "下一题 →"}</button>
      </footer>
    </section>`;

  if (focus) {
    requestAnimationFrame(() => sectionRoot.querySelector(".question-card")?.focus({ preventScroll: true }));
  }
}

function renderQuestions(focus = false) {
  if (printMode) {
    renderAllQuestions();
    return;
  }
  renderCurrentQuestion(focus);
}

function renderPrintAnswers() {
  const answerRoot = document.querySelector("#print-answer-list");
  answerRoot.innerHTML = sections.map((section) => {
    const items = questions.filter((question) => question.section === section.id).map((question) => {
      const number = questions.indexOf(question) + 1;
      return `
        <article class="print-answer-item">
          <div class="print-answer-number">${String(number).padStart(2, "0")}</div>
          <div>
            <h3>${escapeHTML(question.prompt)}</h3>
            <p class="print-answer-choice">参考答案：${optionLabels(question.answer)}</p>
            <p>${escapeHTML(question.explanation)}</p>
          </div>
        </article>`;
    }).join("");
    return `
      <section class="print-answer-section">
        <header><span>${section.numeral}</span><h2>${section.title}</h2></header>
        ${items}
      </section>`;
  }).join("");
}

function updateProgress() {
  const count = answeredTotal();
  const remaining = questions.length - count;
  answeredCount.textContent = quiz.hidden ? (count ? `已保存 ${count} / ${questions.length}` : "尚未开始") : `已答 ${count} / ${questions.length}`;
  completionCopy.textContent = remaining ? `你还有 ${remaining} 题没有作答，未答题按 0 分计算。` : "24 题已全部作答，可以交卷。";
  const stageAnswered = document.querySelector("#stage-answered");
  if (stageAnswered) stageAnswered.textContent = `已答 ${count} / ${questions.length}`;
  if (!printMode && !quiz.hidden) {
    document.querySelector("#page-progress").style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;
  }
}

function showQuiz({ resume = false } = {}) {
  intro.hidden = true;
  results.hidden = true;
  quiz.hidden = false;
  if (resume) {
    const firstUnanswered = questions.findIndex((question) => !answers[question.id]?.length);
    currentQuestionIndex = firstUnanswered === -1 ? questions.length - 1 : firstUnanswered;
  }
  renderQuestions(true);
  updateProgress();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function arraysEqual(left, right) {
  return left.length === right.length && [...left].sort().every((value, index) => value === [...right].sort()[index]);
}

function gradeQuiz() {
  const sectionScores = Object.fromEntries(sections.map((section) => [section.id, 0]));
  const outcomes = questions.map((question) => {
    const selected = answers[question.id] || [];
    const correct = arraysEqual(selected, question.answer);
    if (correct) sectionScores[question.section] += question.points;
    return { question, selected, correct };
  });
  return {
    total: outcomes.reduce((sum, outcome) => sum + (outcome.correct ? outcome.question.points : 0), 0),
    sectionScores,
    outcomes,
  };
}

function resultTier(score) {
  if (score >= 90) return ["孙哥叙事首席解码员", "你连沉默的重量都读到了。价格、空房、胶痕、心跳和 AI 决策，在你这里已经连成一条凌晨三点的海岸线。"];
  if (score >= 75) return ["孙学研究员", "你读懂了大部分回声，也看见了热闹散去以后留下的房间。再留意称谓和劳动线索，就能抵达更深的一层。"];
  if (score >= 60) return ["文本侦探", "你抓住了故事主干，也开始听见物件与重复句的暗线。有些沉默还藏在数字后面，值得再看一遍。"];
  if (score >= 40) return ["维港夜行人", "名场面已经记住，凌晨的风还没有完全吹进来。试着从谁在劳动、谁在沉默、谁在决定重新读。"];
  return ["刚刷到孙哥", "海、飞机和五千万还散落在夜色里。先读原文，再来一次，也许下一次会听见那十一秒的安静。"];
}

function optionLabels(indices) {
  return indices.length ? indices.map((index) => String.fromCharCode(65 + index)).join("、") : "未作答";
}

function renderResults(grade) {
  const [level, description] = resultTier(grade.total);
  document.querySelector("#score-value").textContent = grade.total;
  document.querySelector("#result-level").textContent = level;
  document.querySelector("#result-description").textContent = description;

  const sectionMax = { detail: 32, craft: 24, theme: 24, multiple: 20 };
  document.querySelector("#score-breakdown").innerHTML = sections.map((section) => `
    <div class="breakdown-item">
      <span>${section.numeral} · ${section.title}</span>
      <strong>${grade.sectionScores[section.id]} / ${sectionMax[section.id]}</strong>
    </div>`).join("");

  document.querySelector("#review-list").innerHTML = grade.outcomes.map((outcome, index) => `
    <article class="review-item ${outcome.correct ? "correct" : "wrong"}">
      <div class="review-badge">${outcome.correct ? `+${outcome.question.points}` : "+0"}</div>
      <div class="review-content">
        <h3>${index + 1}. ${escapeHTML(outcome.question.prompt)}</h3>
        <p class="review-answer">你的答案：${optionLabels(outcome.selected)}　参考答案：${optionLabels(outcome.question.answer)}</p>
        <p class="review-explanation">${escapeHTML(outcome.question.explanation)}</p>
      </div>
    </article>`).join("");

  results.dataset.score = grade.total;
  results.dataset.level = level;
}

function resetQuiz() {
  Object.keys(answers).forEach((key) => delete answers[key]);
  localStorage.removeItem(STORAGE_KEY);
  currentQuestionIndex = 0;
  renderQuestions();
  updateProgress();
}

document.querySelector("#start-button").addEventListener("click", () => {
  resetQuiz();
  showQuiz();
});

resumeButton.addEventListener("click", () => showQuiz({ resume: true }));

sectionRoot.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  const action = button.dataset.action;
  if (action === "previous" && currentQuestionIndex > 0) {
    currentQuestionIndex -= 1;
    renderQuestions(true);
    updateProgress();
  }
  if (action === "next" && currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex += 1;
    renderQuestions(true);
    updateProgress();
  }
  if (action === "submit") form.requestSubmit();
});

form.addEventListener("change", (event) => {
  const input = event.target;
  if (!(input instanceof HTMLInputElement)) return;
  if (input.type === "radio") {
    answers[input.name] = [Number(input.value)];
  } else {
    answers[input.name] = [...form.querySelectorAll(`input[name="${input.name}"]:checked`)].map((item) => Number(item.value));
  }
  saveAnswers();
  updateProgress();
  sectionRoot.querySelector(".question-card")?.classList.add("has-answer");
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const grade = gradeQuiz();
  renderResults(grade);
  quiz.hidden = true;
  results.hidden = false;
  updateProgress();
  results.scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelector("#clear-button").addEventListener("click", () => {
  if (window.confirm("确定清空当前全部答案吗？")) resetQuiz();
});

document.querySelector("#review-button").addEventListener("click", () => {
  const review = document.querySelector("#review");
  review.hidden = !review.hidden;
  if (!review.hidden) review.scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelector("#restart-button").addEventListener("click", () => {
  resetQuiz();
  showQuiz();
});

document.querySelector("#copy-button").addEventListener("click", async (event) => {
  const text = `《我的女友景甜》互动阅读测验：${results.dataset.score} 分，等级「${results.dataset.level}」。你到底有多了解孙哥？`;
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const helper = document.createElement("textarea");
    helper.value = text;
    document.body.appendChild(helper);
    helper.select();
    document.execCommand("copy");
    helper.remove();
  }
  const button = event.currentTarget;
  const original = button.textContent;
  button.textContent = "成绩已复制";
  window.setTimeout(() => { button.textContent = original; }, 1600);
});

window.addEventListener("scroll", () => {
  if (!printMode && !quiz.hidden) return;
  const total = document.documentElement.scrollHeight - window.innerHeight;
  const percent = total > 0 ? Math.min(100, (window.scrollY / total) * 100) : 0;
  document.querySelector("#page-progress").style.width = `${percent}%`;
}, { passive: true });

if (!printMode) document.body.classList.add("single-question-mode");
renderQuestions();
updateProgress();
resumeButton.hidden = answeredTotal() === 0;

if (printMode) {
  document.body.classList.add("print-mode");
  intro.hidden = false;
  quiz.hidden = false;
  results.hidden = true;
  resumeButton.hidden = true;
  document.querySelectorAll("#quiz-form input").forEach((input) => {
    input.checked = false;
  });
  renderPrintAnswers();
  printAnswerKey.hidden = false;
}
