import fs from "node:fs/promises";
import path from "node:path";
import { Presentation, PresentationFile } from "@oai/artifact-tool";

const rootDir = process.cwd();
const outputDir = path.join(rootDir, "outputs");
const packageDir = path.join(rootDir, "launch-keynote");
const renderDir = path.join(packageDir, "rendered-slides");

const COLORS = {
  bg: "white",
  text: "slate-950",
  muted: "slate-500",
  faint: "slate-300",
  accent: "#B42318",
  accentSoft: "#FEE4E2",
};

const PAGE = { left: 88, top: 56, width: 1104, height: 608 };

const toolSlides = [
  {
    tool: "Perplexity",
    mission: "Entender el problema",
    open: "perplexity.ai",
    search:
      "How is Artificial Intelligence impacting productivity and economic growth in emerging economies?",
    observe: "Conceptos, reportes, instituciones",
    output: "Mapa inicial de palabras clave",
    next: "OpenAlex",
  },
  {
    tool: "OpenAlex",
    mission: "Abrir el universo académico",
    open: "openalex.org",
    search:
      "\"artificial intelligence\" productivity \"emerging economies\"",
    observe: "Autores, revistas, años, volumen",
    output: "Primer corpus académico",
    next: "Semantic Scholar",
  },
  {
    tool: "Semantic Scholar",
    mission: "Refinar relevancia",
    open: "semanticscholar.org",
    search:
      "\"artificial intelligence\" productivity \"emerging economies\"",
    observe: "Trabajos clave y citaciones",
    output: "Lista de lectura priorizada",
    next: "ResearchRabbit",
  },
  {
    tool: "ResearchRabbit",
    mission: "Seguir conexiones",
    open: "researchrabbit.ai",
    search: "AI productivity emerging economies",
    observe: "Redes, clústeres, autores",
    output: "Grafo de literatura",
    next: "Litmaps",
  },
  {
    tool: "Litmaps",
    mission: "Ver evolución",
    open: "litmaps.com",
    search: "AI productivity emerging economies",
    observe: "Huecos temporales y ramas",
    output: "Mapa cronológico útil",
    next: "Consensus",
  },
  {
    tool: "Consensus",
    mission: "Escuchar la evidencia",
    open: "consensus.app",
    search:
      "Does artificial intelligence increase productivity in developing countries?",
    observe: "Patrones y convergencias",
    output: "Dirección general del debate",
    next: "Scite",
  },
  {
    tool: "Scite",
    mission: "Validar confianza",
    open: "scite.ai",
    search:
      "\"artificial intelligence\" productivity firms growth \"developing countries\"",
    observe: "Supporting, contrasting, mentioning",
    output: "Evidencia más robusta",
    next: "SciSpace",
  },
  {
    tool: "SciSpace",
    mission: "Leer con precisión",
    open: "typeset.io",
    search:
      "\"artificial intelligence\" productivity \"developing economies\"",
    observe: "Métodos, datos, limitaciones",
    output: "Notas analíticas comparables",
    next: "NotebookLM",
  },
  {
    tool: "NotebookLM",
    mission: "Construir memoria",
    open: "notebooklm.google.com",
    search: "Corpus: 60 artículos validados",
    observe: "Temas, tensiones, síntesis",
    output: "Base de conocimiento compartida",
    next: "ChatGPT",
  },
  {
    tool: "ChatGPT",
    mission: "Comunicar ciencia",
    open: "chatgpt.com",
    search:
      "Synthesize validated evidence. Compare findings, controversies, and one research gap.",
    observe: "Argumento, estructura, claridad",
    output: "Síntesis científica lista",
    next: "Nueva oportunidad",
  },
];

const slides = [
  {
    number: 1,
    key: "cover",
    chapter: "INTRO",
    title: "Research AI Lab",
    subtitle: "Versión 1.0",
    kicker: "Open Research. Open Science. Open Intelligence.",
    note:
      "- Abrir con calma.\n- Presentar el lanzamiento como el inicio de una iniciativa, no como una demo.\n- Marcar que hoy vamos a recorrer una investigación completa.",
  },
  {
    number: 2,
    key: "story",
    chapter: "WHY",
    title: "Imagina que mañana debes empezar tu estado del arte.",
    subtitle: "Sin autores. Sin papers. Sin mapa.",
    note:
      "- Bajar la voz.\n- Invitar a la audiencia a entrar en la escena de una investigadora real.\n- Generar tensión antes de mencionar cualquier herramienta.",
  },
  {
    number: 3,
    key: "quote",
    chapter: "WHY",
    title: "\"Prepara un estado del arte completo sobre este tema.\"",
    subtitle: "Solo tienes una pregunta.",
    note:
      "- Hacer una pausa antes y después de la cita.\n- Mirar a la audiencia.\n- Dejar que el problema se sienta grande.",
  },
  {
    number: 4,
    key: "question",
    chapter: "WHY",
    title:
      "¿Cómo está impactando la inteligencia artificial la productividad y el crecimiento económico en economías emergentes?",
    subtitle: "",
    note:
      "- Esta es la pregunta central del laboratorio.\n- No explicar todavía cómo se resolverá.\n- Solo dejarla suspendida.",
  },
  {
    number: 5,
    key: "statement",
    chapter: "WHY",
    title: "Toda investigación comienza con incertidumbre.",
    subtitle: "La diferencia está en cómo la orquestamos.",
    note:
      "- Conectar el problema individual con el problema estructural de la investigación moderna.\n- Preparar la transición hacia el capítulo WHAT.",
  },
  {
    number: 6,
    key: "chapter",
    chapter: "WHAT",
    title: "WHAT",
    subtitle: "Por qué el flujo tradicional ya no escala.",
    note:
      "- Cambiar energía.\n- Pasar de la historia personal al diagnóstico del sistema.",
  },
  {
    number: 7,
    key: "verticalFlow",
    chapter: "WHAT",
    title: "Flujo tradicional",
    subtitle: "Buscar. Descargar. Copiar. Perder contexto.",
    flow: ["Google", "Google Scholar", "PDFs", "Excel", "Word", "Publicación"],
    note:
      "- Recorrer el flujo lentamente.\n- Mostrar que no es un problema de esfuerzo, sino de escala y fragmentación.",
  },
  {
    number: 8,
    key: "statement",
    chapter: "WHAT",
    title: "Investigar ya no es solo buscar.",
    subtitle: "Investigar es orquestar conocimiento.",
    note:
      "- Esta es la tesis conceptual del keynote.\n- Decirla como una definición, no como un eslogan.",
  },
  {
    number: 9,
    key: "verticalFlow",
    chapter: "WHAT",
    title: "Research AI Stack",
    subtitle: "Descubrimiento. lectura. evidencia. memoria. escritura.",
    flow: [
      "Descubrimiento",
      "Expansión",
      "Validación",
      "Lectura",
      "Memoria",
      "Comunicación",
    ],
    note:
      "- Presentar el stack como una arquitectura mental.\n- Todavía no entrar en productos concretos.",
  },
  {
    number: 10,
    key: "chapter",
    chapter: "HOW",
    title: "HOW",
    subtitle: "Laboratorio 01: Economía.",
    note:
      "- Marcar que ahora la audiencia deja de ser espectadora y se convierte en investigadora.",
  },
  {
    number: 11,
    key: "story",
    chapter: "HOW",
    title: "Research AI Lab",
    subtitle: "Laboratorio 01: Economía",
    note:
      "- Presentar el laboratorio como el ejemplo canónico de la metodología.\n- No venderlo como curso ni como colección de prompts.",
  },
  {
    number: 12,
    key: "workflow",
    chapter: "HOW",
    title: "Del problema a la oportunidad científica.",
    subtitle: "",
    workflow: [
      "Pregunta",
      "Perplexity",
      "OpenAlex",
      "Semantic Scholar",
      "ResearchRabbit",
      "Litmaps",
      "Consensus",
      "Scite",
      "SciSpace",
      "NotebookLM",
      "ChatGPT",
      "Nueva oportunidad",
    ],
    note:
      "- Este es el esqueleto del keynote.\n- Explicar que cada herramienta cumple una misión distinta dentro de una sola investigación.",
  },
  ...toolSlides.map((item, index) => ({
    number: 13 + index,
    key: "tool",
    chapter: "HOW",
    ...item,
    title: item.tool,
    note:
      `- Presentar ${item.tool} como una decisión metodológica.\n- No explicar funciones genéricas.\n- Cerrar mostrando cómo alimenta el siguiente paso.`,
  })),
  {
    number: 23,
    key: "chapter",
    chapter: "RESULT",
    title: "RESULT",
    subtitle: "La transformación de una pregunta en conocimiento estructurado.",
    note:
      "- Subir el ritmo.\n- Mostrar que el laboratorio realmente produjo conocimiento nuevo.",
  },
  {
    number: 24,
    key: "verticalFlow",
    chapter: "RESULT",
    title: "Transformación",
    subtitle: "",
    flow: [
      "1200 papers",
      "240 relevantes",
      "60 sólidos",
      "12 revisiones",
      "5 autores clave",
      "3 escuelas",
      "2 controversias",
      "1 vacío",
    ],
    note:
      "- Recorrer el embudo como una prueba de que la metodología reduce complejidad.\n- Mantenerlo visual y memorable.",
  },
  {
    number: 25,
    key: "statement",
    chapter: "RESULT",
    title: "Toda buena investigación termina con una nueva pregunta.",
    subtitle: "Ahí empieza la siguiente oportunidad científica.",
    note:
      "- Resolver el arco narrativo.\n- Mostrar que el valor no es solo resumir, sino abrir un nuevo frente de investigación.",
  },
  {
    number: 26,
    key: "chapter",
    chapter: "WHAT NEXT",
    title: "WHAT NEXT",
    subtitle: "El lanzamiento oficial de Research AI Lab.",
    note:
      "- Pasar del laboratorio al movimiento.\n- Decir explícitamente que la presentación no es el producto.",
  },
  {
    number: 27,
    key: "launch",
    chapter: "WHAT NEXT",
    title: "Versión 1.0",
    subtitle: "Arquitectura pública para investigar mejor con inteligencia artificial.",
    items: [
      "Laboratorio de Economía",
      "Research AI Toolkit",
      "Research Recipes",
      "Resources",
      "GitHub Repository",
    ],
    note:
      "- Presentar cada módulo como parte de una arquitectura coherente.\n- Evitar sonar como lista de funcionalidades.",
  },
  {
    number: 28,
    key: "roadmap",
    chapter: "WHAT NEXT",
    title: "Roadmap",
    subtitle: "",
    roadmap: [
      ["Versión 1.1", "Education", "Coming Soon"],
      ["Versión 1.2", "Artificial Intelligence", "Coming Soon"],
      ["Versión 2", "Research Agents", ""],
      ["Versión 3", "Research Operating System", ""],
    ],
    note:
      "- Mostrar ambición con estructura.\n- El mensaje es continuidad, no improvisación.",
  },
  {
    number: 29,
    key: "ecosystem",
    chapter: "WHAT NEXT",
    title: "La investigadora sigue en el centro.",
    subtitle:
      "Descubrimiento. lectura. evidencia. citación. memoria. escritura. monitoreo. agentes.",
    note:
      "- Reforzar la idea central: la inteligencia no reemplaza a la investigadora.\n- La conecta con un ecosistema especializado.",
  },
  {
    number: 30,
    key: "qr",
    chapter: "WHAT NEXT",
    title: "Continúa el laboratorio.",
    subtitle: "Research AI Lab · Versión 1.0",
    note:
      "- Cerrar con llamada a la acción.\n- Explicar que el QR debe apuntar al repositorio público oficial una vez se publique.",
  },
  {
    number: 31,
    key: "backup",
    chapter: "BACKUP",
    title: "Backup · Stack completo",
    subtitle: "Qué problema resuelve cada capa metodológica.",
    backupLines: [
      "Descubrimiento · comprender y expandir",
      "Validación · medir confianza",
      "Lectura · comparar método y datos",
      "Memoria · sostener contexto",
      "Comunicación · escribir con evidencia",
    ],
    note:
      "- Solo usar si alguien pide una explicación más explícita del stack.",
  },
  {
    number: 32,
    key: "backup",
    chapter: "BACKUP",
    title: "Backup · Consultas exactas",
    subtitle: "Punto de partida para repetir el laboratorio.",
    backupLines: [
      "\"artificial intelligence\" productivity \"emerging economies\"",
      "\"AI adoption\" firms productivity growth",
      "\"developing countries\" artificial intelligence growth",
    ],
    note:
      "- Solo mostrar si la audiencia pide replicabilidad operativa inmediata.",
  },
  {
    number: 33,
    key: "backup",
    chapter: "BACKUP",
    title: "Backup · Checklist en vivo",
    subtitle: "Antes de abrir herramientas en escenario.",
    backupLines: [
      "Navegadores limpios",
      "Sesiones abiertas",
      "Pestañas fijadas",
      "Corpus listo",
      "Plan B local",
    ],
    note:
      "- Utilizar antes del evento, o si la audiencia pregunta por la operación en vivo.",
  },
];

function baseSlide(presentation) {
  const slide = presentation.slides.add();
  slide.background.fill = COLORS.bg;
  return slide;
}

function addText(slide, text, left, top, width, height, style = {}) {
  const shape = slide.shapes.add({
    geometry: "textbox",
    position: { left, top, width, height },
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  shape.text = text;
  shape.text.style = style;
  return shape;
}

function addRule(slide, left, top, width, height = 2, fill = COLORS.accent) {
  return slide.shapes.add({
    geometry: "rect",
    position: { left, top, width, height },
    fill,
    line: { style: "solid", fill, width: 0 },
  });
}

function addCircle(slide, left, top, size, fill = COLORS.accentSoft, lineFill = COLORS.accent) {
  return slide.shapes.add({
    geometry: "ellipse",
    position: { left, top, width: size, height: size },
    fill,
    line: { style: "solid", fill: lineFill, width: 1 },
  });
}

function addChapterHeader(slide, chapter) {
  addText(slide, chapter, PAGE.left, 20, 200, 24, {
    fontSize: 12,
    bold: true,
    color: COLORS.muted,
  });
}

function drawCover(slide, data) {
  addRule(slide, PAGE.left, 118, 120, 4);
  addText(slide, data.title, PAGE.left, 150, 760, 120, {
    fontSize: 62,
    bold: true,
    color: COLORS.text,
  });
  addText(slide, data.subtitle, PAGE.left, 268, 320, 40, {
    fontSize: 28,
    color: COLORS.accent,
    bold: true,
  });
  addText(slide, data.kicker, PAGE.left, 340, 780, 56, {
    fontSize: 24,
    color: COLORS.muted,
  });
  addText(slide, "Launch Keynote", PAGE.left, 40, 200, 24, {
    fontSize: 12,
    bold: true,
    color: COLORS.muted,
  });
}

function drawStory(slide, data) {
  addChapterHeader(slide, data.chapter);
  addRule(slide, PAGE.left, 122, 96, 4);
  addText(slide, data.title, PAGE.left, 150, 920, 132, {
    fontSize: 54,
    bold: true,
    color: COLORS.text,
  });
  if (data.subtitle) {
    addText(slide, data.subtitle, PAGE.left, 320, 760, 56, {
      fontSize: 28,
      color: COLORS.muted,
    });
  }
}

function drawQuote(slide, data) {
  addChapterHeader(slide, data.chapter);
  addText(slide, data.title, 170, 180, 940, 180, {
    fontSize: 48,
    bold: true,
    color: COLORS.text,
    alignment: "center",
  });
  addText(slide, data.subtitle, 340, 400, 600, 44, {
    fontSize: 24,
    color: COLORS.accent,
    alignment: "center",
  });
}

function drawQuestion(slide, data) {
  addChapterHeader(slide, data.chapter);
  addText(slide, data.title, 130, 150, 1020, 340, {
    fontSize: 46,
    bold: true,
    color: COLORS.text,
    alignment: "center",
  });
}

function drawStatement(slide, data) {
  addChapterHeader(slide, data.chapter);
  addText(slide, data.title, 130, 180, 1020, 130, {
    fontSize: 56,
    bold: true,
    color: COLORS.text,
    alignment: "center",
  });
  addText(slide, data.subtitle, 250, 342, 780, 56, {
    fontSize: 26,
    color: COLORS.muted,
    alignment: "center",
  });
}

function drawChapter(slide, data) {
  addRule(slide, PAGE.left, 110, 120, 4);
  addText(slide, data.title, PAGE.left, 160, 640, 120, {
    fontSize: 84,
    bold: true,
    color: COLORS.text,
  });
  addText(slide, data.subtitle, PAGE.left, 310, 700, 56, {
    fontSize: 26,
    color: COLORS.muted,
  });
}

function drawVerticalFlow(slide, data) {
  addChapterHeader(slide, data.chapter);
  addText(slide, data.title, PAGE.left, 72, 520, 52, {
    fontSize: 34,
    bold: true,
    color: COLORS.text,
  });
  if (data.subtitle) {
    addText(slide, data.subtitle, PAGE.left, 118, 760, 36, {
      fontSize: 18,
      color: COLORS.muted,
    });
  }
  const startY = 182;
  data.flow.forEach((item, index) => {
    const y = startY + index * 60;
    addText(slide, item, 420, y, 440, 36, {
      fontSize: 28,
      bold: true,
      color: index === data.flow.length - 1 ? COLORS.accent : COLORS.text,
      alignment: "center",
    });
    if (index < data.flow.length - 1) {
      addText(slide, "↓", 615, y + 28, 50, 32, {
        fontSize: 22,
        color: COLORS.muted,
        alignment: "center",
      });
    }
  });
}

function drawWorkflow(slide, data) {
  addChapterHeader(slide, data.chapter);
  addText(slide, data.title, PAGE.left, 72, 820, 52, {
    fontSize: 34,
    bold: true,
    color: COLORS.text,
  });
  const row1 = data.workflow.slice(0, 6);
  const row2 = data.workflow.slice(6);
  const cellWidth = 160;
  row1.forEach((item, index) => {
    const x = 70 + index * 190;
    addText(slide, item, x, 220, cellWidth, 70, {
      fontSize: 22,
      bold: true,
      color: index === 0 ? COLORS.accent : COLORS.text,
      alignment: "center",
    });
    if (index < row1.length - 1) {
      addText(slide, "→", x + 152, 236, 34, 30, {
        fontSize: 20,
        color: COLORS.muted,
        alignment: "center",
      });
    }
  });
  row2.forEach((item, index) => {
    const x = 70 + index * 190;
    addText(slide, item, x, 410, cellWidth, 70, {
      fontSize: 22,
      bold: true,
      color: item === "Nueva oportunidad" ? COLORS.accent : COLORS.text,
      alignment: "center",
    });
    if (index < row2.length - 1) {
      addText(slide, "→", x + 152, 426, 34, 30, {
        fontSize: 20,
        color: COLORS.muted,
        alignment: "center",
      });
    }
  });
  addText(slide, "↓", 1122, 300, 40, 30, {
    fontSize: 20,
    color: COLORS.muted,
    alignment: "center",
  });
}

function drawTool(slide, data) {
  addChapterHeader(slide, data.chapter);
  addText(slide, data.tool, PAGE.left, 64, 420, 54, {
    fontSize: 40,
    bold: true,
    color: COLORS.text,
  });
  addRule(slide, PAGE.left, 116, 92, 3);

  const left = PAGE.left;
  const right = 670;
  const labelStyle = { fontSize: 12, bold: true, color: COLORS.muted };
  const valueStyle = { fontSize: 23, bold: true, color: COLORS.text };
  const smallValueStyle = { fontSize: 17, color: COLORS.text };

  addText(slide, "MISSION", left, 160, 120, 20, labelStyle);
  addText(slide, data.mission, left, 184, 380, 54, valueStyle);

  addText(slide, "OPEN", left, 290, 120, 20, labelStyle);
  addText(slide, data.open, left, 314, 380, 40, {
    fontSize: 21,
    bold: true,
    color: COLORS.accent,
  });

  addText(slide, "OUTPUT", left, 420, 120, 20, labelStyle);
  addText(slide, data.output, left, 444, 380, 46, valueStyle);

  addText(slide, "NEXT", left, 540, 120, 20, labelStyle);
  addText(slide, data.next, left, 564, 240, 34, {
    fontSize: 21,
    bold: true,
    color: COLORS.accent,
  });

  addText(slide, "SEARCH", right, 160, 120, 20, labelStyle);
  addText(slide, data.search, right, 184, 440, 118, {
    fontSize: 18,
    color: COLORS.text,
  });

  addText(slide, "OBSERVE", right, 364, 120, 20, labelStyle);
  addText(slide, data.observe, right, 388, 420, 54, smallValueStyle);
}

function drawLaunch(slide, data) {
  addChapterHeader(slide, data.chapter);
  addText(slide, data.title, PAGE.left, 70, 420, 54, {
    fontSize: 38,
    bold: true,
    color: COLORS.text,
  });
  addText(slide, data.subtitle, PAGE.left, 126, 860, 44, {
    fontSize: 20,
    color: COLORS.muted,
  });
  data.items.forEach((item, index) => {
    const col = index % 2;
    const row = Math.floor(index / 2);
    const x = PAGE.left + col * 420;
    const y = 240 + row * 120;
    addRule(slide, x, y, 72, 3);
    addText(slide, item, x, y + 22, 340, 56, {
      fontSize: 28,
      bold: true,
      color: COLORS.text,
    });
  });
}

function drawRoadmap(slide, data) {
  addChapterHeader(slide, data.chapter);
  addText(slide, data.title, PAGE.left, 70, 320, 54, {
    fontSize: 38,
    bold: true,
    color: COLORS.text,
  });
  const colWidth = 240;
  data.roadmap.forEach((item, index) => {
    const x = PAGE.left + index * 255;
    addRule(slide, x, 220, 72, 3);
    addText(slide, item[0], x, 246, colWidth, 32, {
      fontSize: 20,
      bold: true,
      color: COLORS.accent,
    });
    addText(slide, item[1], x, 290, colWidth, 82, {
      fontSize: 28,
      bold: true,
      color: COLORS.text,
    });
    if (item[2]) {
      addText(slide, item[2], x, 396, colWidth, 28, {
        fontSize: 16,
        color: COLORS.muted,
      });
    }
  });
}

function drawEcosystem(slide, data) {
  addChapterHeader(slide, data.chapter);
  addText(slide, data.title, PAGE.left, 60, 500, 52, {
    fontSize: 34,
    bold: true,
    color: COLORS.text,
  });
  addCircle(slide, 500, 250, 220);
  addText(slide, "Investigadora", 525, 335, 170, 36, {
    fontSize: 28,
    bold: true,
    color: COLORS.text,
    alignment: "center",
  });

  const labels = [
    ["Discovery", 170, 170],
    ["Reading", 920, 170],
    ["Evidence", 980, 330],
    ["Citation", 900, 520],
    ["Writing", 180, 520],
    ["Workspace", 120, 330],
    ["Monitoring", 330, 580],
    ["Agents", 760, 580],
    ["Knowledge Graph", 420, 120],
  ];
  labels.forEach(([label, x, y]) => {
    addCircle(slide, x, y, 86, "white", COLORS.faint);
    addText(slide, label, x + 5, y + 27, 76, 28, {
      fontSize: 15,
      bold: true,
      color: COLORS.text,
      alignment: "center",
    });
  });
  addText(
    slide,
    "La inteligencia artificial no reemplaza a la investigadora.\nAmplifica su capacidad de crear conocimiento.",
    235,
    640,
    810,
    58,
    {
      fontSize: 19,
      color: COLORS.muted,
      alignment: "center",
    },
  );
}

function drawQr(slide, data) {
  addChapterHeader(slide, data.chapter);
  addText(slide, data.title, PAGE.left, 78, 520, 54, {
    fontSize: 42,
    bold: true,
    color: COLORS.text,
  });
  addText(slide, data.subtitle, PAGE.left, 136, 420, 34, {
    fontSize: 20,
    color: COLORS.accent,
  });
  slide.shapes.add({
    geometry: "rect",
    position: { left: 840, top: 180, width: 260, height: 260 },
    fill: "white",
    line: { style: "solid", fill: COLORS.text, width: 2 },
  });
  addText(slide, "QR oficial\ndel proyecto", 875, 270, 190, 72, {
    fontSize: 24,
    bold: true,
    color: COLORS.text,
    alignment: "center",
  });
  ["GitHub", "Toolkit", "Economics Lab", "Research Recipes", "Roadmap"].forEach(
    (item, index) => {
      addRule(slide, PAGE.left, 258 + index * 64, 64, 3);
      addText(slide, item, PAGE.left, 278 + index * 64, 340, 28, {
        fontSize: 24,
        bold: true,
        color: COLORS.text,
      });
    },
  );
}

function drawBackup(slide, data) {
  addChapterHeader(slide, data.chapter);
  addText(slide, data.title, PAGE.left, 72, 540, 46, {
    fontSize: 34,
    bold: true,
    color: COLORS.text,
  });
  addText(slide, data.subtitle, PAGE.left, 120, 720, 30, {
    fontSize: 18,
    color: COLORS.muted,
  });
  data.backupLines.forEach((line, index) => {
    addRule(slide, PAGE.left, 220 + index * 90, 60, 3);
    addText(slide, line, PAGE.left, 242 + index * 90, 900, 28, {
      fontSize: 24,
      bold: true,
      color: COLORS.text,
    });
  });
}

function renderSlide(slide, data) {
  switch (data.key) {
    case "cover":
      drawCover(slide, data);
      break;
    case "story":
      drawStory(slide, data);
      break;
    case "quote":
      drawQuote(slide, data);
      break;
    case "question":
      drawQuestion(slide, data);
      break;
    case "statement":
      drawStatement(slide, data);
      break;
    case "chapter":
      drawChapter(slide, data);
      break;
    case "verticalFlow":
      drawVerticalFlow(slide, data);
      break;
    case "workflow":
      drawWorkflow(slide, data);
      break;
    case "tool":
      drawTool(slide, data);
      break;
    case "launch":
      drawLaunch(slide, data);
      break;
    case "roadmap":
      drawRoadmap(slide, data);
      break;
    case "ecosystem":
      drawEcosystem(slide, data);
      break;
    case "qr":
      drawQr(slide, data);
      break;
    case "backup":
      drawBackup(slide, data);
      break;
    default:
      throw new Error(`Unknown slide type: ${data.key}`);
  }
  slide.speakerNotes = data.note;
}

function buildStoryboard() {
  const lines = ["# Storyboard", "", "## Estructura general", ""];
  slides.forEach((slide) => {
    lines.push(
      `### Slide ${slide.number} · ${slide.title}`,
      `Capítulo: ${slide.chapter}`,
      `Objetivo: ${storyObjective(slide)}`,
      `Tratamiento visual: ${visualTreatment(slide)}`,
      "",
    );
  });
  return `${lines.join("\n")}\n`;
}

function storyObjective(slide) {
  switch (slide.key) {
    case "cover":
      return "Presentar el lanzamiento como el nacimiento de una iniciativa abierta.";
    case "story":
      return "Abrir una escena narrativa o introducir el laboratorio como experiencia.";
    case "quote":
      return "Materializar la presión real que enfrenta una investigadora.";
    case "question":
      return "Fijar la pregunta canónica del laboratorio.";
    case "statement":
      return "Condensar la tesis conceptual de la sección.";
    case "chapter":
      return "Separar capítulos y resetear la atención del público.";
    case "verticalFlow":
      return "Visualizar un flujo o una transformación secuencial.";
    case "workflow":
      return "Mostrar la arquitectura completa del laboratorio.";
    case "tool":
      return `Explicar la misión metodológica de ${slide.tool} dentro del flujo de investigación.`;
    case "launch":
      return "Lanzar públicamente los componentes de la Versión 1.0.";
    case "roadmap":
      return "Demostrar continuidad estratégica y expansión futura.";
    case "ecosystem":
      return "Cerrar con una visión humana y conectada del futuro de la investigación.";
    case "qr":
      return "Invitar a la audiencia a continuar el laboratorio fuera del escenario.";
    case "backup":
      return "Respaldar preguntas operativas o metodológicas en Q&A.";
    default:
      return "Cumplir una función narrativa específica.";
  }
}

function visualTreatment(slide) {
  switch (slide.key) {
    case "cover":
      return "Portada minimalista con regla roja, tipografía dominante y mucho espacio en blanco.";
    case "story":
    case "quote":
    case "question":
    case "statement":
    case "chapter":
      return "Tipografía grande, centro de gravedad claro y composición sobria.";
    case "verticalFlow":
      return "Secuencia vertical de lectura inmediata con flechas mínimas.";
    case "workflow":
      return "Mapa horizontal en dos filas para sostener la narrativa del laboratorio.";
    case "tool":
      return "Plantilla fija de dos columnas con jerarquía editorial consistente.";
    case "launch":
      return "Lista estructurada con módulos grandes y respiración amplia.";
    case "roadmap":
      return "Cuatro columnas limpias con énfasis en versión y nombre.";
    case "ecosystem":
      return "Composición radial alrededor de la investigadora.";
    case "qr":
      return "Llamado a la acción con placeholder funcional para QR.";
    case "backup":
      return "Slides utilitarias, legibles y visualmente consistentes con la cubierta principal.";
    default:
      return "Composición editorial minimalista.";
  }
}

function buildPresenterScript() {
  const lines = ["# Presenter Script", ""];
  slides.forEach((slide) => {
    lines.push(`## Slide ${slide.number} · ${slide.title}`, scriptFor(slide), "");
  });
  return `${lines.join("\n")}\n`;
}

function scriptFor(slide) {
  if (slide.key === "cover") {
    return "Hoy no vengo a presentar una herramienta. Vengo a lanzar una iniciativa abierta para investigar mejor con inteligencia artificial. Research AI Lab nace como una arquitectura pública para organizar conocimiento, sostener rigor y construir una nueva práctica de investigación.";
  }
  if (slide.key === "question") {
    return "No empecemos por la herramienta. Empecemos por la pregunta. Esta pregunta será nuestro laboratorio en vivo y el hilo conductor de todo el keynote.";
  }
  if (slide.key === "workflow") {
    return "Este es el recorrido completo. No son aplicaciones aisladas. Es una secuencia metodológica. Cada paso reduce incertidumbre y prepara el siguiente.";
  }
  if (slide.key === "launch") {
    return "Esto es lo que hoy se lanza públicamente. No solo una presentación, sino una base abierta para laboratorios, toolkit, recetas y recursos de investigación.";
  }
  if (slide.key === "ecosystem") {
    return "La inteligencia artificial no reemplaza a la investigadora. La conecta con una red de inteligencias especializadas. El centro sigue siendo humano. Lo que cambia es la capacidad de orquestación.";
  }
  if (slide.key === "qr") {
    return "La presentación termina aquí, pero el laboratorio continúa. El QR debe abrir el repositorio oficial y convertirse en el punto de entrada real a la iniciativa.";
  }
  if (slide.key === "tool") {
    return `Nuestra misión en ${slide.tool} no es explorar funciones. Es tomar una decisión metodológica concreta: ${slide.mission.toLowerCase()}. Lo importante es qué observamos, qué extraemos y cómo ese resultado alimenta el siguiente paso.`;
  }
  return slide.note
    .split("\n")
    .map((line) => line.replace(/^- /, ""))
    .join(" ");
}

function buildSpeakerNotes() {
  const lines = ["# Speaker Notes", ""];
  slides.forEach((slide) => {
    lines.push(`## Slide ${slide.number} · ${slide.title}`, slide.note, "");
  });
  return `${lines.join("\n")}\n`;
}

function buildAnimationSuggestions() {
  return `# Animation Suggestions

## Principios

- Mantener animaciones discretas, limpias y consistentes.
- Usar aparición simple o desvanecimiento corto.
- Evitar efectos teatrales, rebotes o zooms agresivos.

## Recomendaciones por tipo de slide

- Portada: aparición del título y luego subtítulo.
- Slides narrativas: fade simple del bloque principal.
- Flujos verticales: revelar un paso a la vez.
- Workflow completo: revelar por tramos, no todos los nodos a la vez.
- Tool slides: mantener fija la plantilla y animar solo el contenido principal.
- Roadmap: entrada por columnas, de izquierda a derecha.
- Ecosistema final: primero la investigadora, luego los nodos periféricos.
- QR final: revelar el bloque QR después de la frase de cierre.
`;
}

function buildTiming45() {
  return `# Timing · 45 Minutes

## Propuesta

- Slides 1-5: 7 minutos
- Slides 6-9: 6 minutos
- Slides 10-12: 5 minutos
- Slides 13-22: 16 minutos
- Slides 23-25: 4 minutos
- Slides 26-30: 5 minutos
- Q&A o transición a demo: 2 minutos

## Ritmo recomendado

- Abrir lento y con pausa.
- Acelerar en WHAT.
- Sostener el centro del keynote en HOW.
- Cerrar con energía institucional, no comercial.
`;
}

function buildTiming20() {
  return `# Timing · 20 Minutes

## Corte recomendado

- Slides 1-5: 4 minutos
- Slides 6-9: 3 minutos
- Slides 10-12: 2 minutos
- Slides 13, 14, 16, 18, 21, 22: 6 minutos
- Slides 24-30: 5 minutos

## Regla de compresión

- Mostrar solo seis tool slides.
- Mantener la lógica completa del flujo.
- Usar backup slides solo en preguntas.
`;
}

function buildLiveChecklist() {
  return `# Live Laboratory Checklist

## Antes del evento

- Verificar conexión estable.
- Abrir sesión en todas las herramientas.
- Preparar pestañas en el orden del flujo.
- Tener corpus local de respaldo.
- Confirmar fuente y tamaño de pantalla del venue.

## Antes de subir al escenario

- Cerrar notificaciones.
- Limpiar historial reciente visible.
- Activar modo no molestar.
- Tener la presentación y el navegador en ventanas separadas.
- Confirmar acceso rápido al slide 12 y al slide 30.

## Plan B

- Si falla una herramienta, pasar al slide siguiente y explicar la lógica metodológica.
- Si falla internet, usar slides de backup y corpus local.
- Si el tiempo se comprime, saltar a las slides 24, 27, 28, 29 y 30.
`;
}

function buildBackupSlidesDoc() {
  return `# Backup Slides

## Slide 31

- Explica el stack completo por capas metodológicas.

## Slide 32

- Ofrece consultas exactas para replicar el laboratorio.

## Slide 33

- Resume el checklist operativo del laboratorio en vivo.
`;
}

function buildVisualIdentityReview() {
  return `# Visual Identity Consistency Review

## Lo que se mantiene consistente

- Fondo blanco en todo el deck.
- Tipografía dominante y de gran escala.
- Uso disciplinado de un único acento rojo.
- Espacio en blanco amplio.
- Ausencia de tarjetas densas y estética de interfaz.

## Riesgos a evitar

- Cargar demasiado texto en las tool slides.
- Reducir tipografía para hacer entrar contenido.
- Convertir el keynote en tutorial de producto.
- Mezclar estilos de iconografía o ilustración de terceros.

## Revisión final recomendada

- Verificar que ningún título rompa en dos líneas si no fue intencional.
- Confirmar que todas las URLs visibles sean limpias.
- Sustituir el placeholder QR por el destino oficial antes del evento.
`;
}

function buildStageRecommendations() {
  return `# Stage Recommendations

## Entrega

- Hablar como fundadora o fundador de una iniciativa, no como instructor.
- Usar pausas deliberadas en WHY y en la pregunta central.
- Mantener el cuerpo erguido y alejarse del atril en las slides 4, 24 y 29.

## Escenografía

- Pantalla limpia, sin overlays innecesarios.
- Clicker confiable.
- Monitor de tiempo visible solo para la persona ponente.

## Narrativa oral

- Evitar explicar botones.
- Repetir la idea central tres veces en distintas formas:
  - investigar ya no es solo buscar
  - la metodología importa más que la herramienta
  - la inteligencia artificial amplifica la capacidad de investigar
`;
}

function buildFigmaSpec() {
  return `# Figma Design Spec

## Objetivo

Traducir el keynote a un archivo de Figma Slides o Figma Design manteniendo la misma dirección visual del PowerPoint.

## Dirección visual

- Fondo blanco puro.
- Tipografía sans limpia y dominante.
- Un solo acento rojo oscuro.
- Composición editorial, no UI.

## Componentes base

- Cover title
- Chapter divider
- Narrative statement
- Vertical flow
- Workflow map
- Tool slide template
- Roadmap column
- QR call to action

## Sistema de composición

- Márgenes amplios.
- Alineación izquierda por defecto.
- Slides de capítulos con una sola idea.
- Tool slides con plantilla fija de dos columnas.

## Pendiente antes de publicar

- Crear archivo oficial de Figma Slides en la cuenta del proyecto.
- Reemplazar el placeholder QR con el destino real.
- Validar tipografías disponibles en el entorno Figma del equipo.
`;
}

async function writeDocs() {
  const docs = new Map([
    ["storyboard.md", buildStoryboard()],
    ["presenter-script.md", buildPresenterScript()],
    ["speaker-notes.md", buildSpeakerNotes()],
    ["animation-suggestions.md", buildAnimationSuggestions()],
    ["timing-45-minutes.md", buildTiming45()],
    ["timing-20-minutes.md", buildTiming20()],
    ["live-lab-checklist.md", buildLiveChecklist()],
    ["backup-slides.md", buildBackupSlidesDoc()],
    ["visual-identity-review.md", buildVisualIdentityReview()],
    ["stage-recommendations.md", buildStageRecommendations()],
    ["figma-design-spec.md", buildFigmaSpec()],
  ]);

  for (const [name, content] of docs) {
    await fs.writeFile(path.join(packageDir, name), content, "utf8");
  }
}

async function writeBlob(filePath, blob) {
  await fs.writeFile(filePath, new Uint8Array(await blob.arrayBuffer()));
}

async function buildDeck() {
  const presentation = Presentation.create({
    slideSize: { width: 1280, height: 720 },
  });

  slides.forEach((data) => {
    const slide = baseSlide(presentation);
    renderSlide(slide, data);
  });

  const pptxPath = path.join(outputDir, "research-ai-lab-launch-keynote-v1.pptx");
  const pptx = await PresentationFile.exportPptx(presentation);
  await pptx.save(pptxPath);

  await fs.mkdir(renderDir, { recursive: true });
  for (const [index, slide] of presentation.slides.items.entries()) {
    const blob = await presentation.export({ slide, format: "png", scale: 1 });
    await writeBlob(path.join(renderDir, `slide-${String(index + 1).padStart(2, "0")}.png`), blob);
  }
  const montage = await presentation.export({ format: "webp", montage: true, scale: 1 });
  await writeBlob(path.join(renderDir, "deck-montage.webp"), montage);
}

async function main() {
  await fs.mkdir(outputDir, { recursive: true });
  await fs.mkdir(packageDir, { recursive: true });
  await writeDocs();
  await buildDeck();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
