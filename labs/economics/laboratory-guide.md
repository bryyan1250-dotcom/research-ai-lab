# Guia Completa del Laboratorio

## Proposito

Esta guia documenta el Research Intelligence Workflow como metodologia reproducible de investigacion cientifica apoyada por inteligencia artificial especializada.

## Pregunta de investigacion

**How is Generative Artificial Intelligence impacting productivity and economic growth?**

Esta pregunta no cambia durante todo el laboratorio.

## Tesis metodologica

Research AI Lab no es una coleccion de herramientas.

Es una metodologia para orquestar inteligencias especializadas a lo largo del ciclo completo de investigacion cientifica.

## Principio central

Nunca presente software como destino.

Presente transformaciones cognitivas.

## Workflow completo

```text
Scientific Question
  -> Scientific Language
  -> Scientific Corpus
  -> Seed Paper
  -> Knowledge Map
  -> Scientific Evidence
  -> Literature Synthesis
  -> Scientific Memory
  -> Scientific Communication
```

## Etapa 1: Scientific Question

### Pregunta cientifica

What do I want to investigate?

### Responsable

The Researcher

### Salida esperada

Research Question

### Mensaje

La investigacion siempre comienza con una pregunta.

No con IA.

### Buenas practicas

- Formular la pregunta en una sola frase
- Delimitar alcance conceptual desde el inicio
- Distinguir curiosidad, hipotesis y objetivo

### Errores comunes

- Empezar buscando antes de definir que se quiere investigar
- Mezclar demasiadas dimensiones en una misma pregunta
- Delegar la formulacion al modelo

### Tiempo sugerido

15 a 20 minutos

### Transicion

Una vez existe una pregunta clara, el siguiente problema no es buscar papers: es aprender el lenguaje cientifico del dominio.

## Etapa 2: Scientific Language

### Pregunta cientifica

How does the scientific community talk about this problem?

### Herramienta actual

Perplexity

### Consulta exacta

`How is Generative Artificial Intelligence impacting productivity and economic growth?`

### Salida esperada

- Concepts
- Keywords
- Synonyms
- Variables
- Research dimensions
- Possible hypotheses
- Related terminology

### Mensaje

Todavia no estamos buscando papers.

Estamos aprendiendo el lenguaje cientifico del problema.

### Que observar

- Como se nombra la IA generativa en distintos contextos
- Que variables economicas aparecen
- Que dimensiones de productividad se repiten
- Que instituciones y reportes marco sirven de orientacion

### Buenas practicas

- Guardar conceptos y sinonimos literales
- Separar terminos utiles de frases demasiado generales
- Construir un mini glosario antes de ir a literatura

### Errores comunes

- Confundir respuesta rapida con evidencia
- Empezar a concluir demasiado pronto
- No registrar vocabulario alternativo

### Tiempo sugerido

15 a 20 minutos

### Transicion

Con el lenguaje del dominio ya construido, podemos descubrir que literatura cientifica existe.

## Etapa 3: Scientific Corpus

### Pregunta cientifica

What scientific literature already exists?

### Herramienta actual

OpenAlex

### Consultas exactas

- `Artificial Intelligence productivity`
- `Artificial Intelligence economic growth`
- `Artificial Intelligence productivity emerging economies`

### Salida esperada

- Authors
- Journals
- DOI
- Institutions
- Scientific Corpus

### Mensaje

Todavia no estamos leyendo.

Estamos descubriendo el paisaje cientifico.

### Que observar

- Autores recurrentes
- Journals y series de working papers
- DOI y trazabilidad
- Instituciones con produccion estable

### Buenas practicas

- Registrar consultas y filtros
- Separar corpus amplio de corpus prioritario
- Guardar papers prometedores pero no leer todos todavia

### Errores comunes

- Tratar el corpus como lectura final
- Quedarse con la primera pagina de resultados
- No distinguir pertinencia de volumen

### Tiempo sugerido

25 a 35 minutos

### Transicion

Con el corpus construido, la siguiente pregunta es donde conviene empezar a leer.

## Etapa 4: Seed Paper

### Pregunta cientifica

Where should I begin?

### Herramienta actual

Semantic Scholar

### Consulta exacta

`Artificial Intelligence productivity`

### Filtros sugeridos

- Systematic Review
- Meta-analysis
- Research Agenda

### Paper recomendado

`The artificial intelligence-productivity relationship: a systematic literature review and research agenda`

### Nuevo concepto

Seed Paper

### Salida esperada

- Best Starting Paper
- Punto de entrada metodologicamente fuerte
- Base inicial para visualizacion y lectura

### Mensaje

Las investigadoras no comienzan leyendo cien papers.

Comienzan con el paper correcto.

### Buenas practicas

- Priorizar revisiones, meta-analisis o research agendas
- Buscar un paper con buena capacidad de irradiar al resto del campo
- Registrar por que ese paper fue elegido

### Errores comunes

- Empezar por el paper mas popular sin criterio
- Elegir un paper demasiado estrecho
- Saltarse la idea de paper semilla

### Tiempo sugerido

15 a 20 minutos

### Transicion

Una vez tenemos un seed paper, ya no miramos literatura como lista: la miramos como sistema.

## Etapa 5: Knowledge Map

### Pregunta cientifica

How has this scientific field evolved?

### Herramienta actual

Litmaps

### Regla de uso

Buscar usando el Seed Paper.

Nunca usar keywords en esta etapa.

### Salida esperada

- Timeline
- Clusters
- Connections
- Authors
- Evolution
- Knowledge Map

### Mensaje

Dejamos de mirar papers aislados.

Empezamos a entender el conocimiento cientifico como sistema.

### Buenas practicas

- Seguir conexiones desde el seed paper
- Identificar ramas, clusters y fronteras temporales
- Distinguir visualizacion de interpretacion

### Errores comunes

- Suponer que cercania visual implica consenso
- Usar keywords otra vez en lugar del seed paper
- Tratar el mapa como sustituto de lectura

### Tiempo sugerido

15 a 25 minutos

### Transicion

Con el mapa del conocimiento visible, toca preguntar que dice realmente la evidencia.

## Etapa 6: Scientific Evidence

### Pregunta cientifica

What does the scientific evidence say?

### Herramienta actual

Consensus

### Consulta exacta

`Does artificial intelligence improve productivity?`

### Salida esperada

- Consensus Meter
- Evidence Strength
- Supporting Studies
- Evidence Summary

### Mensaje

La investigacion moderna no busca opiniones.

Busca evidencia.

### Buenas practicas

- Usar la respuesta como lectura preliminar, no como veredicto final
- Contrastar el resumen con las fuentes debajo
- Registrar condiciones y limites

### Errores comunes

- Tomar el consenso como prueba suficiente
- Ignorar incertidumbre o condicionantes
- No volver a los estudios citados

### Tiempo sugerido

10 a 15 minutos

### Transicion

Con evidencia preliminar medida, la siguiente pregunta es que concluye el conjunto de estudios.

## Etapa 7: Literature Synthesis

### Pregunta cientifica

What does the literature conclude?

### Herramienta actual

SciSpace

### Consulta exacta

`Experimental evidence on the productivity effects of generative artificial intelligence`

### Salida esperada

- Multi-database search
- Literature synthesis
- TLDR
- Thematic organization
- References
- Markdown export
- Key findings

### Mensaje

SciSpace no resume un solo paper.

Sintetiza decenas de estudios en una primera revision de literatura.

### Buenas practicas

- Comparar temas, metodos y hallazgos
- Exportar markdown para trabajo posterior
- Conservar referencias y trazabilidad

### Errores comunes

- Confundir sintesis inicial con revision definitiva
- Perder las referencias al exportar
- Usar solo el TLDR y no la organizacion tematica

### Tiempo sugerido

25 a 35 minutos

### Transicion

La sintesis ya existe. Ahora necesitamos memoria cientifica persistente.

## Etapa 8: Scientific Memory

### Pregunta cientifica

How do I organize everything?

### Herramienta actual

NotebookLM

### Insumos

- Downloaded Papers
- Markdown generated by SciSpace
- Research Notes
- PDFs

### Salida esperada

- Knowledge Base
- Podcast
- Timeline
- Comparisons
- Questions
- Research Memory

### Mensaje

NotebookLM no busca.

NotebookLM recuerda.

### Buenas practicas

- Cargar solo corpus ya filtrado
- Organizar el notebook alrededor de la pregunta central
- Usar comparaciones y FAQ para consolidar criterio

### Errores comunes

- Subir corpus sucio o no validado
- Usar el notebook como sustituto del juicio investigador
- Olvidar que la memoria debe servir para escribir mejor

### Tiempo sugerido

20 a 30 minutos

### Transicion

Con memoria cientifica construida, ya podemos transformar evidencia en productos de comunicacion.

## Etapa 9: Scientific Communication

### Pregunta cientifica

How do I transform evidence into scientific communication?

### Herramientas actuales

- ChatGPT
- Claude

### Prompt rector

`Using the synthesized literature generate: Executive Summary, Literature Review, Research Gap, Future Research, Research Proposal, Scientific Presentation, Executive Report`

### Salida esperada

- Executive Summary
- Literature Review
- Research Gap
- Future Research
- Research Proposal
- Scientific Presentation
- Executive Report

### Mensaje

La inteligencia artificial ayuda a comunicar conocimiento.

No reemplaza el razonamiento cientifico.

### Regla critica

Nunca inventar referencias.

Solo usar evidencia validada.

### Buenas practicas

- Entregar al modelo solo corpus sintetizado y trazable
- Pedir productos cientificos especificos
- Verificar toda referencia antes de reutilizarla

### Errores comunes

- Pedir redaccion sin sintesis previa
- Dejar que el modelo agregue fuentes inexistentes
- Confundir fluidez textual con calidad cientifica

### Tiempo sugerido

20 a 30 minutos

## Tabla central del workflow

| Transformation | Scientific Question | Tool | Expected Result |
| --- | --- | --- | --- |
| Scientific Question | What do I want to investigate? | Researcher | Research Question |
| Scientific Language | How does the community talk about this problem? | Perplexity | Concept Map |
| Scientific Corpus | What literature exists? | OpenAlex | Scientific Corpus |
| Seed Paper | Where should I begin? | Semantic Scholar | Best Starting Paper |
| Knowledge Evolution | How has the field evolved? | Litmaps | Knowledge Map |
| Evidence | What does science conclude? | Consensus | Evidence Strength |
| Literature Synthesis | What do all studies conclude? | SciSpace | Initial Literature Review |
| Scientific Memory | How do I organize knowledge? | NotebookLM | Knowledge Base |
| Scientific Communication | How do I communicate my findings? | ChatGPT / Claude | Scientific Product |

## Regla final

Las herramientas cambiaran.

La metodologia debe permanecer.
