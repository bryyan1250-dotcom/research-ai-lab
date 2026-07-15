from pathlib import Path
from pptx import Presentation
from pptx.dml.color import RGBColor
from pptx.enum.shapes import MSO_AUTO_SHAPE_TYPE
from pptx.enum.text import PP_ALIGN, MSO_VERTICAL_ANCHOR
from pptx.util import Inches, Pt


ROOT = Path.cwd()
OUTPUT_DIR = ROOT / "outputs"
PACKAGE_DIR = ROOT / "launch-keynote"

ACCENT = RGBColor(180, 35, 24)
TEXT = RGBColor(16, 24, 40)
MUTED = RGBColor(102, 112, 133)
FAINT = RGBColor(208, 213, 221)
SOFT = RGBColor(254, 228, 226)

QUESTION = "How is Generative Artificial Intelligence impacting productivity and economic growth?"
SUBTITLE = "From Scientific Question to Evidence-Based Knowledge"

workflow_steps = [
    "Scientific Question",
    "Scientific Language",
    "Scientific Corpus",
    "Seed Paper",
    "Knowledge Map",
    "Scientific Evidence",
    "Literature Synthesis",
    "Scientific Memory",
    "Scientific Communication",
]

stage_map = [
    {
        "stage": "Scientific Question",
        "question": "What do I want to investigate?",
        "tool": "Researcher",
        "result": "Research Question",
    },
    {
        "stage": "Scientific Language",
        "question": "How does the community talk about this problem?",
        "tool": "Perplexity",
        "result": "Concept Map",
    },
    {
        "stage": "Scientific Corpus",
        "question": "What literature exists?",
        "tool": "OpenAlex",
        "result": "Scientific Corpus",
    },
    {
        "stage": "Seed Paper",
        "question": "Where should I begin?",
        "tool": "Semantic Scholar",
        "result": "Best Starting Paper",
    },
    {
        "stage": "Knowledge Evolution",
        "question": "How has the field evolved?",
        "tool": "Litmaps",
        "result": "Knowledge Map",
    },
    {
        "stage": "Evidence",
        "question": "What does science conclude?",
        "tool": "Consensus",
        "result": "Evidence Strength",
    },
    {
        "stage": "Literature Synthesis",
        "question": "What do all studies conclude?",
        "tool": "SciSpace",
        "result": "Initial Literature Review",
    },
    {
        "stage": "Scientific Memory",
        "question": "How do I organize knowledge?",
        "tool": "NotebookLM",
        "result": "Knowledge Base",
    },
    {
        "stage": "Scientific Communication",
        "question": "How do I communicate my findings?",
        "tool": "ChatGPT / Claude",
        "result": "Scientific Product",
    },
]

slides = [
    {
        "number": 1,
        "key": "cover",
        "chapter": "INTRO",
        "title": "Research AI Lab",
        "subtitle": "Version 2.0",
        "kicker": "Research Intelligence Workflow",
        "note": [
            "Abrir con calma.",
            "Presentar el proyecto como una metodologia abierta, no como un conjunto de productos.",
            "Preparar a la audiencia para una secuencia de transformaciones cognitivas.",
        ],
    },
    {
        "number": 2,
        "key": "story",
        "chapter": "WHY",
        "title": "Tomorrow morning you need to begin a serious investigation.",
        "subtitle": "You have one question. Nothing else.",
        "note": [
            "Entrar en una escena de investigacion real.",
            "Crear identificacion emocional antes de hablar de inteligencia artificial.",
        ],
    },
    {
        "number": 3,
        "key": "quote",
        "chapter": "WHY",
        "title": '"Prepare a complete state of the art on this topic."',
        "subtitle": "That is where modern research pressure begins.",
        "note": [
            "Hacer una pausa antes y despues de la frase.",
            "Mostrar que el reto no es software: es complejidad cientifica.",
        ],
    },
    {
        "number": 4,
        "key": "question",
        "chapter": "WHY",
        "title": QUESTION,
        "subtitle": "",
        "note": [
            "Fijar una sola pregunta para toda la conferencia.",
            "No abrir todavia ninguna herramienta.",
        ],
    },
    {
        "number": 5,
        "key": "statement",
        "chapter": "WHY",
        "title": "Research always begins with a question.",
        "subtitle": "Not with AI.",
        "note": [
            "Esta es la primera tesis del keynote.",
            "La audiencia debe recordar que el flujo empieza en el criterio humano.",
        ],
    },
    {
        "number": 6,
        "key": "chapter",
        "chapter": "WHAT",
        "title": "WHAT",
        "subtitle": "A methodology, not a collection of tools.",
        "note": [
            "Cambiar del problema individual a la arquitectura metodologica.",
        ],
    },
    {
        "number": 7,
        "key": "statement",
        "chapter": "WHAT",
        "title": "The methodology is permanent.",
        "subtitle": "The tools are replaceable.",
        "note": [
            "Marcar el principio fundacional de tool agnostic design.",
        ],
    },
    {
        "number": 8,
        "key": "verticalFlow",
        "chapter": "WHAT",
        "title": "Research Intelligence Workflow",
        "subtitle": SUBTITLE,
        "flow": workflow_steps,
        "note": [
            "Presentar primero el flujo cognitivo.",
            "La audiencia debe recordar el proceso antes de los productos.",
        ],
    },
    {
        "number": 9,
        "key": "table",
        "chapter": "WHAT",
        "title": "Transformation Map",
        "subtitle": "Each stage answers a different scientific question.",
        "note": [
            "Usar esta tabla como mapa rector del resto del keynote.",
            "Cada fila debe sentirse como una transformacion mental distinta.",
        ],
    },
    {
        "number": 10,
        "key": "compare",
        "chapter": "WHAT",
        "title": "Why Not Use Only One Tool?",
        "subtitle": "No tool replaces another.",
        "note": [
            "La audiencia debe entender que cada herramienta optimiza una pregunta distinta.",
            "No es un stack de moda; es una orquestacion especializada.",
        ],
    },
    {
        "number": 11,
        "key": "chapter",
        "chapter": "HOW",
        "title": "HOW",
        "subtitle": "One workflow. One investigation.",
        "note": [
            "Entrar a la demostracion metodologica.",
        ],
    },
]

chapter_specs = [
    {
        "stage": "Scientific Language",
        "question": "How does the scientific community talk about this problem?",
        "tool": "Perplexity",
        "mission": "Learn the language of the research domain.",
        "search": QUESTION,
        "output": "Concepts, keywords, synonyms, variables and hypotheses",
        "next": "Scientific Corpus",
    },
    {
        "stage": "Scientific Corpus",
        "question": "What scientific literature already exists?",
        "tool": "OpenAlex",
        "mission": "Discover the scientific landscape.",
        "search": "Artificial Intelligence productivity / Artificial Intelligence economic growth / Artificial Intelligence productivity emerging economies",
        "output": "Authors, journals, DOI, institutions and scientific corpus",
        "next": "Seed Paper",
    },
    {
        "stage": "Seed Paper",
        "question": "Where should I begin?",
        "tool": "Semantic Scholar",
        "mission": "Find the right paper to start reading.",
        "search": "Artificial Intelligence productivity",
        "output": "Systematic review, meta-analysis or research agenda to anchor the field",
        "next": "Knowledge Map",
    },
    {
        "stage": "Knowledge Map",
        "question": "How has this field evolved?",
        "tool": "Litmaps",
        "mission": "See the field as an evolving system.",
        "search": "Use the seed paper. Never use keywords.",
        "output": "Timeline, clusters, connections, authors and evolution",
        "next": "Scientific Evidence",
    },
    {
        "stage": "Scientific Evidence",
        "question": "What does the scientific evidence say?",
        "tool": "Consensus",
        "mission": "Measure evidence, not opinion.",
        "search": "Does artificial intelligence improve productivity?",
        "output": "Consensus meter, evidence strength, supporting studies and summary",
        "next": "Literature Synthesis",
    },
    {
        "stage": "Literature Synthesis",
        "question": "What does the literature conclude?",
        "tool": "SciSpace",
        "mission": "Synthesize dozens of studies into an initial review.",
        "search": "Experimental evidence on the productivity effects of generative artificial intelligence",
        "output": "Initial literature review, themes, references and key findings",
        "next": "Scientific Memory",
    },
    {
        "stage": "Scientific Memory",
        "question": "How do I organize everything?",
        "tool": "NotebookLM",
        "mission": "Convert a corpus into reusable research memory.",
        "search": "Upload papers, synthesis markdown and research notes",
        "output": "Knowledge base, comparisons, timeline, questions and memory",
        "next": "Scientific Communication",
    },
    {
        "stage": "Scientific Communication",
        "question": "How do I transform evidence into communication?",
        "tool": "ChatGPT / Claude",
        "mission": "Turn validated evidence into scientific products.",
        "search": "Generate executive summary, review, gap, proposal and presentation",
        "output": "Scientific communication grounded in validated evidence",
        "next": "Future Research",
    },
]

for idx, spec in enumerate(chapter_specs, start=12):
    slides.append(
        {
            "number": idx,
            "key": "stage",
            "chapter": "HOW",
            **spec,
            "title": spec["stage"],
            "note": [
                f"En {spec['stage']} la audiencia debe entender la pregunta cientifica antes que la herramienta.",
                "Insistir en la transformacion cognitiva del paso.",
                "Cerrar mostrando por que el siguiente momento requiere otra inteligencia especializada.",
            ],
        }
    )

slides.extend(
    [
        {
            "number": 20,
            "key": "chapter",
            "chapter": "WHAT NEXT",
            "title": "WHAT NEXT",
            "subtitle": "From workflow to open methodology.",
            "note": [
                "Pasar del flujo a la invitacion institucional.",
            ],
        },
        {
            "number": 21,
            "key": "launch",
            "chapter": "WHAT NEXT",
            "title": "Version 2.0",
            "subtitle": "An open methodology for orchestrating specialized intelligence across the scientific lifecycle.",
            "items": [
                "Methodology",
                "Economics Lab",
                "Research Guides",
                "Prompt Pack",
                "Repository",
            ],
            "note": [
                "El lanzamiento debe sentirse como una metodologia abierta y reusable.",
            ],
        },
        {
            "number": 22,
            "key": "roadmap",
            "chapter": "WHAT NEXT",
            "title": "What can be reproduced tomorrow morning?",
            "subtitle": "",
            "roadmap": [
                ["Question", "Use one research question", ""],
                ["Workflow", "Follow every cognitive stage", ""],
                ["Evidence", "Validate before writing", ""],
                ["Output", "Produce a scientific product", ""],
            ],
            "note": [
                "La audiencia debe salir con accion concreta, no solo inspiracion.",
            ],
        },
        {
            "number": 23,
            "key": "final",
            "chapter": "WHAT NEXT",
            "title": "The modern researcher no longer searches for information.",
            "subtitle": "The modern researcher orchestrates evidence.\n\nCompetitive advantage is no longer about using the best AI.\nIt is about knowing which specialized intelligence to use at the right scientific moment.",
            "note": [
                "No logos. No iconos. Solo dos frases.",
                "Cerrar con silencio breve antes del QR o la invitacion final.",
            ],
        },
    ]
)


def inches(value: float):
    return Inches(value)


def add_textbox(slide, x, y, w, h, text, size=24, bold=False, color=TEXT, align=PP_ALIGN.LEFT):
    box = slide.shapes.add_textbox(inches(x), inches(y), inches(w), inches(h))
    frame = box.text_frame
    frame.clear()
    frame.word_wrap = True
    frame.vertical_anchor = MSO_VERTICAL_ANCHOR.TOP
    p = frame.paragraphs[0]
    p.alignment = align
    run = p.add_run()
    run.text = text
    font = run.font
    font.name = "Aptos"
    font.size = Pt(size)
    font.bold = bold
    font.color.rgb = color
    return box


def add_rule(slide, x, y, w, h=0.03, color=ACCENT):
    shape = slide.shapes.add_shape(MSO_AUTO_SHAPE_TYPE.RECTANGLE, inches(x), inches(y), inches(w), inches(h))
    shape.fill.solid()
    shape.fill.fore_color.rgb = color
    shape.line.fill.background()
    return shape


def add_chapter_header(slide, chapter):
    add_textbox(slide, 0.95, 0.22, 2.3, 0.24, chapter, size=11, bold=True, color=MUTED)


def draw_cover(slide, item):
    add_textbox(slide, 0.95, 0.3, 3.0, 0.24, "Open Methodology Launch", size=11, bold=True, color=MUTED)
    add_rule(slide, 0.95, 1.15, 0.9, 0.04)
    add_textbox(slide, 0.95, 1.45, 7.0, 1.0, item["title"], size=46, bold=True)
    add_textbox(slide, 0.95, 2.55, 4.5, 0.4, item["subtitle"], size=22, bold=True, color=ACCENT)
    add_textbox(slide, 0.95, 3.2, 8.5, 0.55, item["kicker"], size=26, bold=True)
    add_textbox(slide, 0.95, 3.85, 8.2, 0.42, SUBTITLE, size=18, color=MUTED)


def draw_story(slide, item):
    add_chapter_header(slide, item["chapter"])
    add_rule(slide, 0.95, 1.18, 0.8, 0.04)
    add_textbox(slide, 0.95, 1.45, 10.4, 1.15, item["title"], size=38, bold=True)
    add_textbox(slide, 0.95, 3.05, 8.6, 0.48, item["subtitle"], size=22, color=MUTED)


def draw_quote(slide, item):
    add_chapter_header(slide, item["chapter"])
    add_textbox(slide, 1.4, 2.0, 10.4, 1.4, item["title"], size=34, bold=True, align=PP_ALIGN.CENTER)
    add_textbox(slide, 3.0, 4.15, 7.2, 0.4, item["subtitle"], size=19, color=ACCENT, align=PP_ALIGN.CENTER)


def draw_question(slide, item):
    add_chapter_header(slide, item["chapter"])
    add_textbox(slide, 1.0, 1.65, 11.0, 2.8, item["title"], size=30, bold=True, align=PP_ALIGN.CENTER)


def draw_statement(slide, item):
    add_chapter_header(slide, item["chapter"])
    add_textbox(slide, 1.0, 2.0, 11.0, 1.0, item["title"], size=38, bold=True, align=PP_ALIGN.CENTER)
    add_textbox(slide, 2.6, 3.45, 7.8, 0.45, item["subtitle"], size=20, color=MUTED, align=PP_ALIGN.CENTER)


def draw_chapter(slide, item):
    add_rule(slide, 0.95, 1.1, 1.0, 0.04)
    add_textbox(slide, 0.95, 1.6, 7.0, 1.0, item["title"], size=58, bold=True)
    add_textbox(slide, 0.95, 3.0, 8.5, 0.45, item["subtitle"], size=20, color=MUTED)


def draw_vertical_flow(slide, item):
    add_chapter_header(slide, item["chapter"])
    add_textbox(slide, 0.95, 0.72, 5.0, 0.4, item["title"], size=28, bold=True)
    add_textbox(slide, 0.95, 1.14, 8.4, 0.32, item["subtitle"], size=16, color=MUTED)
    start_y = 1.72
    for idx, line in enumerate(item["flow"]):
        color = ACCENT if idx == 0 else TEXT
        add_textbox(slide, 4.25, start_y + idx * 0.52, 4.8, 0.28, line, size=19, bold=True, color=color, align=PP_ALIGN.CENTER)
        if idx < len(item["flow"]) - 1:
            add_textbox(slide, 6.15, start_y + idx * 0.52 + 0.22, 0.4, 0.18, "↓", size=16, color=MUTED, align=PP_ALIGN.CENTER)


def draw_table(slide, item):
    add_chapter_header(slide, item["chapter"])
    add_textbox(slide, 0.95, 0.7, 4.4, 0.4, item["title"], size=28, bold=True)
    add_textbox(slide, 0.95, 1.12, 7.4, 0.28, item["subtitle"], size=16, color=MUTED)
    headers = [("Transformation", 0.95), ("Scientific Question", 3.4), ("Tool", 7.25), ("Expected Result", 9.15)]
    for label, x in headers:
        add_textbox(slide, x, 1.72, 2.0, 0.24, label, size=11, bold=True, color=MUTED)
    y = 2.02
    for row in stage_map:
        add_rule(slide, 0.95, y - 0.05, 0.55, 0.02)
        add_textbox(slide, 0.95, y, 2.1, 0.42, row["stage"], size=15, bold=True)
        add_textbox(slide, 3.4, y, 3.4, 0.42, row["question"], size=13)
        add_textbox(slide, 7.25, y, 1.55, 0.42, row["tool"], size=13, bold=True, color=ACCENT if row["tool"] != "Researcher" else TEXT)
        add_textbox(slide, 9.15, y, 2.65, 0.42, row["result"], size=13)
        y += 0.48


def draw_compare(slide, item):
    add_chapter_header(slide, item["chapter"])
    add_textbox(slide, 0.95, 0.68, 5.2, 0.4, item["title"], size=28, bold=True)
    add_textbox(slide, 0.95, 1.1, 6.5, 0.28, item["subtitle"], size=16, color=MUTED)
    headers = [("If I only use...", 0.95), ("I obtain", 3.8), ("But I lose", 7.2)]
    for label, x in headers:
        add_textbox(slide, x, 1.72, 2.0, 0.24, label, size=11, bold=True, color=MUTED)
    rows = [
        ("Perplexity", "Rapid concepts and vocabulary", "Literature, evidence strength and memory"),
        ("OpenAlex", "Scientific corpus with DOI and authors", "Context, synthesis and evolution"),
        ("Semantic Scholar", "Strong starting papers", "Landscape and evidence synthesis"),
        ("Litmaps", "Evolution and networks", "Deep reading and evidence evaluation"),
        ("Consensus", "Evidence-based answers", "Method context and mapping"),
        ("SciSpace", "Structured literature synthesis", "Discovery, mapping and memory"),
        ("NotebookLM", "Project memory", "Discovery and evidence validation"),
        ("ChatGPT / Claude", "Communication and writing", "Discovery, traceability and validation"),
    ]
    y = 2.02
    for left, mid, right in rows:
        add_rule(slide, 0.95, y - 0.05, 0.55, 0.02)
        add_textbox(slide, 0.95, y, 2.2, 0.4, left, size=14, bold=True)
        add_textbox(slide, 3.8, y, 2.9, 0.4, mid, size=12)
        add_textbox(slide, 7.2, y, 4.0, 0.4, right, size=12)
        y += 0.46
    add_textbox(slide, 1.4, 6.42, 10.2, 0.3, "No tool replaces another. Each one optimizes a different cognitive transformation of the scientific process.", size=13, color=MUTED, align=PP_ALIGN.CENTER)


def draw_stage(slide, item):
    add_chapter_header(slide, item["chapter"])
    add_textbox(slide, 0.95, 0.62, 4.6, 0.42, item["stage"], size=30, bold=True)
    add_rule(slide, 0.95, 1.05, 0.8, 0.03)

    def label(x, y, text):
        add_textbox(slide, x, y, 1.8, 0.18, text, size=11, bold=True, color=MUTED)

    label(0.95, 1.42, "SCIENTIFIC QUESTION")
    add_textbox(slide, 0.95, 1.66, 4.4, 0.62, item["question"], size=19, bold=True)
    label(0.95, 2.62, "TOOL")
    add_textbox(slide, 0.95, 2.86, 3.5, 0.3, item["tool"], size=18, bold=True, color=ACCENT if item["tool"] != "Researcher" else TEXT)
    label(0.95, 3.42, "MESSAGE")
    add_textbox(slide, 0.95, 3.66, 4.6, 0.86, item["mission"], size=17)
    label(0.95, 4.86, "EXPECTED OUTPUT")
    add_textbox(slide, 0.95, 5.1, 4.6, 0.78, item["output"], size=16, bold=True)

    label(6.0, 1.42, "SEARCH / INPUT")
    add_textbox(slide, 6.0, 1.66, 5.1, 1.0, item["search"], size=15)
    label(6.0, 3.42, "WHY NOW")
    add_textbox(slide, 6.0, 3.66, 5.1, 0.86, f"This stage exists because the researcher must answer: {item['question']}", size=15)
    label(6.0, 4.86, "NEXT")
    add_textbox(slide, 6.0, 5.1, 4.1, 0.3, item["next"], size=18, bold=True, color=ACCENT)


def draw_launch(slide, item):
    add_chapter_header(slide, item["chapter"])
    add_textbox(slide, 0.95, 0.72, 3.8, 0.42, item["title"], size=30, bold=True)
    add_textbox(slide, 0.95, 1.18, 9.2, 0.45, item["subtitle"], size=17, color=MUTED)
    for idx, text in enumerate(item["items"]):
        col = idx % 2
        row = idx // 2
        x = 0.95 + col * 4.6
        y = 2.28 + row * 1.15
        add_rule(slide, x, y, 0.6, 0.03)
        add_textbox(slide, x, y + 0.18, 3.8, 0.45, text, size=22, bold=True)


def draw_roadmap(slide, item):
    add_chapter_header(slide, item["chapter"])
    add_textbox(slide, 0.95, 0.72, 5.2, 0.42, item["title"], size=28, bold=True)
    headers = [("Tomorrow morning", 0.95), ("Action", 3.8), ("Outcome", 8.15)]
    for label, x in headers:
        add_textbox(slide, x, 1.68, 2.0, 0.22, label, size=11, bold=True, color=MUTED)
    y = 2.0
    for left, mid, right in item["roadmap"]:
        add_rule(slide, 0.95, y - 0.05, 0.55, 0.02)
        add_textbox(slide, 0.95, y, 2.0, 0.32, left, size=15, bold=True)
        add_textbox(slide, 3.8, y, 3.6, 0.32, mid, size=14)
        add_textbox(slide, 8.15, y, 3.2, 0.32, right or "Reproducible progress", size=14, bold=True, color=ACCENT if not right else TEXT)
        y += 0.72


def draw_final(slide, item):
    add_textbox(slide, 1.0, 2.0, 11.0, 0.9, item["title"], size=30, bold=True, align=PP_ALIGN.CENTER)
    add_textbox(slide, 1.2, 3.6, 10.6, 1.45, item["subtitle"], size=18, align=PP_ALIGN.CENTER)


def render_slide(prs, item):
    slide = prs.slides.add_slide(prs.slide_layouts[6])
    if item["key"] == "cover":
        draw_cover(slide, item)
    elif item["key"] == "story":
        draw_story(slide, item)
    elif item["key"] == "quote":
        draw_quote(slide, item)
    elif item["key"] == "question":
        draw_question(slide, item)
    elif item["key"] == "statement":
        draw_statement(slide, item)
    elif item["key"] == "chapter":
        draw_chapter(slide, item)
    elif item["key"] == "verticalFlow":
        draw_vertical_flow(slide, item)
    elif item["key"] == "table":
        draw_table(slide, item)
    elif item["key"] == "compare":
        draw_compare(slide, item)
    elif item["key"] == "stage":
        draw_stage(slide, item)
    elif item["key"] == "launch":
        draw_launch(slide, item)
    elif item["key"] == "roadmap":
        draw_roadmap(slide, item)
    elif item["key"] == "final":
        draw_final(slide, item)


def story_objective(item):
    if item["key"] == "stage":
        return f"Explicar que pregunta cientifica responde {item['stage']} y por que esa inteligencia especializada aparece ahora."
    mapping = {
        "cover": "Presentar Research AI Lab como una metodologia abierta para investigar mejor.",
        "story": "Abrir el problema humano de comenzar una investigacion seria.",
        "quote": "Materializar la presion cognitiva del trabajo cientifico moderno.",
        "question": "Fijar la unica pregunta de investigacion de toda la conferencia.",
        "statement": "Condensar una tesis metodologica central.",
        "chapter": "Separar capitulos y cambiar el tipo de atencion del publico.",
        "verticalFlow": "Mostrar un flujo cognitivo completo que debe recordarse facilmente.",
        "table": "Traducir el workflow a una arquitectura de transformaciones, preguntas y resultados.",
        "compare": "Demostrar por que ninguna herramienta puede reemplazar a las otras.",
        "launch": "Lanzar la metodologia como producto institucional reusable.",
        "roadmap": "Convertir la inspiracion en accion concreta para manana.",
        "final": "Cerrar con una definicion memorable de la ventaja del investigador moderno.",
    }
    return mapping[item["key"]]


def visual_treatment(item):
    mapping = {
        "cover": "Portada blanca, minima, con tipografia dominante y una sola linea de acento.",
        "story": "Escena editorial de alta legibilidad, sin ruido visual.",
        "quote": "Centro emocional del problema, casi sin elementos secundarios.",
        "question": "Una sola pregunta a gran escala, sin distracciones.",
        "statement": "Una sola tesis por slide, con maximo espacio en blanco.",
        "chapter": "Separador austero, tipografico y respirado.",
        "verticalFlow": "Secuencia vertical simple para fijar memoria del proceso.",
        "table": "Tabla limpia y jerarquica centrada en transformaciones cognitivas.",
        "compare": "Comparacion racional que elimina la fantasia de una sola herramienta.",
        "stage": "Plantilla metodologica fija con pregunta, herramienta, mensaje, salida y transicion.",
        "launch": "Lista abierta que presenta la metodologia como ecosistema.",
        "roadmap": "Tabla accionable enfocada en reproduccion inmediata.",
        "final": "Cierre blanco sin iconos ni adornos, solo dos ideas fuertes.",
    }
    return mapping[item["key"]]


def script_for(item):
    if item["key"] == "cover":
        return "Hoy no vengo a presentar una lista de herramientas. Vengo a presentar una metodologia abierta para investigar mejor con inteligencia artificial especializada."
    if item["key"] == "question":
        return "Toda la conferencia va a vivir dentro de una sola pregunta. Si esta pregunta se entiende, el workflow completo se vuelve reproducible."
    if item["key"] == "verticalFlow":
        return "Esto es lo que deben recordar. No nombres de producto. No botones. Solo el recorrido cognitivo que transforma una pregunta en conocimiento basado en evidencia."
    if item["key"] == "table":
        return "Cada etapa del workflow responde una pregunta cientifica diferente. Por eso la metodologia es permanente y las herramientas son intercambiables."
    if item["key"] == "compare":
        return "Si solo usamos una herramienta, ganamos velocidad local pero perdemos partes enteras del proceso cientifico. La orquestacion importa mas que la preferencia por un producto."
    if item["key"] == "stage":
        return f"Aqui la pregunta no es como funciona {item['tool']}. La pregunta es por que en este momento del workflow necesitamos resolver: {item['question']}"
    if item["key"] == "final":
        return "La investigacion moderna ya no consiste en buscar mas informacion. Consiste en saber que inteligencia especializada activar en el momento cientifico correcto."
    return " ".join(item["note"])


def write_markdown(name: str, content: str):
    (PACKAGE_DIR / name).write_text(content, encoding="utf-8")


def build_docs():
    storyboard = ["# Storyboard", "", "## Estructura general", ""]
    script = ["# Presenter Script", ""]
    notes = ["# Speaker Notes", ""]

    for item in slides:
        storyboard.extend(
            [
                f"## Slide {item['number']} · {item['title']}",
                f"Capitulo: {item['chapter']}",
                f"Objetivo: {story_objective(item)}",
                f"Tratamiento visual: {visual_treatment(item)}",
                "",
            ]
        )
        script.extend([f"## Slide {item['number']} · {item['title']}", script_for(item), ""])
        notes.extend([f"## Slide {item['number']} · {item['title']}"])
        notes.extend([f"- {line}" for line in item["note"]])
        notes.append("")

    write_markdown("storyboard.md", "\n".join(storyboard) + "\n")
    write_markdown("presenter-script.md", "\n".join(script) + "\n")
    write_markdown("speaker-notes.md", "\n".join(notes) + "\n")
    write_markdown(
        "timing-45-minutes.md",
        """# Timing · 45 Minutes

## Propuesta

- Slides 1-5: 8 minutos
- Slides 6-10: 8 minutos
- Slides 11-19: 18 minutos
- Slides 20-23: 8 minutos
- Q&A o transicion: 3 minutos

## Ritmo recomendado

- Abrir lento en WHY.
- Construir claridad en WHAT.
- Sostener precision metodologica en HOW.
- Cerrar con invitacion y reproduccion en WHAT NEXT.
""",
    )
    write_markdown(
        "timing-20-minutes.md",
        """# Timing · 20 Minutes

## Corte recomendado

- Slides 1-5: 4 minutos
- Slides 6-10: 4 minutos
- Slides 11-14, 16, 18, 19: 8 minutos
- Slides 21-23: 4 minutos

## Regla de compresion

- Mantener siempre visible el workflow cognitivo.
- Reducir herramientas, nunca reducir transformaciones.
""",
    )
    write_markdown(
        "live-lab-checklist.md",
        """# Live Laboratory Checklist

## Antes del evento

- Pregunta de investigacion visible
- Workflow cognitivo visible
- Cuentas abiertas
- Consultas exactas preparadas
- Paper semilla guardado
- Captura o backup por etapa

## Secuencia metodologica

1. Scientific Question
2. Scientific Language
3. Scientific Corpus
4. Seed Paper
5. Knowledge Map
6. Scientific Evidence
7. Literature Synthesis
8. Scientific Memory
9. Scientific Communication

## Plan B

- Si falla una herramienta, explicar la pregunta cientifica de esa etapa y continuar.
- Si falla internet, usar capturas, paper semilla y corpus local.
- Si una busqueda da resultados extraños, volver a la consulta exacta y explicar el criterio.
- Si el tiempo se comprime, conservar el workflow completo aunque se muestren menos herramientas.
""",
    )
    write_markdown(
        "README.md",
        """# Research AI Lab Launch Keynote

This folder contains the Version 2.0 keynote package.

## Main Thesis

Research AI Lab is not a presentation about AI tools.

It is an open methodology for orchestrating specialized intelligence across the scientific research lifecycle.

## Main Output

- PowerPoint deck: [`outputs/research-ai-lab-launch-keynote-v1.pptx`](../outputs/research-ai-lab-launch-keynote-v1.pptx)

## Core Workflow

Scientific Question -> Scientific Language -> Scientific Corpus -> Seed Paper -> Knowledge Map -> Scientific Evidence -> Literature Synthesis -> Scientific Memory -> Scientific Communication
""",
    )


def build_pptx():
    prs = Presentation()
    prs.slide_width = Inches(13.333)
    prs.slide_height = Inches(7.5)
    while prs.slides:
        r_id = prs.slides._sldIdLst[0].rId
        prs.part.drop_rel(r_id)
        del prs.slides._sldIdLst[0]
    for item in slides:
        render_slide(prs, item)
    prs.save(OUTPUT_DIR / "research-ai-lab-launch-keynote-v1.pptx")


def main():
    OUTPUT_DIR.mkdir(exist_ok=True)
    PACKAGE_DIR.mkdir(exist_ok=True)
    build_docs()
    build_pptx()


if __name__ == "__main__":
    main()
