# Guia Completa del Laboratorio

## Proposito

Esta guia documenta el laboratorio completo paso a paso en formato reproducible.

## Pregunta de investigacion

**Como esta impactando la inteligencia artificial la productividad y el crecimiento economico en economias emergentes?**

## Objetivo del laboratorio

Construir un flujo completo de investigacion asistida por IA que permita:

- Entender el panorama conceptual
- Reunir literatura cientifica relevante
- Priorizar evidencia de mayor valor
- Comparar autores, escuelas y controversias
- Construir memoria de investigacion
- Transformar evidencia validada en comunicacion cientifica

## Alcance

- Tema: inteligencia artificial, productividad y crecimiento
- Unidad de interes: economias emergentes
- Tipos de fuentes: articulos, working papers, reportes institucionales, revisiones
- Nivel de salida: estado del arte reproducible y mapa de gap de investigacion

## Paso 0: Planeacion de investigacion

### Proposito

Definir con precision que sabemos, que no sabemos y que necesitamos observar antes de abrir herramientas.

### Por que ahora

Porque un mal inicio produce busquedas ruidosas, corpus inflados y sintesis superficiales.

### URL oficial

No aplica. Este paso se realiza en una libreta, documento o canvas de investigacion.

### Preguntas base

- Que sabemos ya sobre IA y productividad
- Que no sabemos todavia en economias emergentes
- Que evidencia necesitamos para responder la pregunta
- Que salida final esperamos producir

### Entregables del paso

- Objetivo de investigacion
- Alcance y limites
- Lista inicial de keywords
- Hipotesis de trabajo
- Lista de subpreguntas

### Plantilla sugerida

- Pregunta central
- Objetivo
- Alcance geografico
- Alcance temporal
- Conceptos obligatorios
- Conceptos relacionados
- Hipotesis iniciales
- Riesgos metodologicos

### Buenas practicas

- Escribir la pregunta en una sola frase
- Separar hechos, intuiciones e hipotesis
- Definir que significara una buena respuesta

### Errores comunes

- Empezar a buscar sin definir alcance
- Mezclar crecimiento macro con productividad micro sin distinguir niveles
- Tratar "economias emergentes" como categoria homogenea

### Tiempo requerido

20 a 30 minutos

### Transicion

Con la pregunta y el alcance claros, el siguiente paso es entender el paisaje general.

## Paso 1: Perplexity

### Proposito

Entender el panorama.

### Por que ahora

Porque primero necesitamos lenguaje, instituciones, reportes y conceptos antes de abrir literatura masiva.

### URL oficial

[Perplexity](https://www.perplexity.ai)

### Consulta exacta en ingles

`How is Artificial Intelligence impacting productivity and economic growth in emerging economies?`

### Consulta exacta en espanol

`Como esta impactando la inteligencia artificial la productividad y el crecimiento economico en economias emergentes?`

### Que observar

- Conceptos recurrentes
- Instituciones que publican sobre el tema
- Reportes marco
- Vocabulario alternativo
- Posibles subtemas

### Que extraer

- Keywords
- Instituciones
- Reportes
- Conceptos

### Que ignorar

- Respuestas demasiado generales sin fuentes claras
- Rankings, blogs o contenido promocional
- Frases elegantes que no puedan traducirse a evidencia

### Salida esperada

- Mapa inicial de terminos
- Lista de instituciones y reportes de referencia
- Primeras pistas para busqueda academica

### Errores comunes

- Tomar la respuesta como verdad final
- No abrir las fuentes citadas
- Confundir resumen rapido con evidencia cientifica

### Buenas practicas

- Copiar keywords literales
- Guardar instituciones, autores y conceptos en una libreta
- Marcar aquello que parece recurrente pero todavia no comprobado

### Tip de investigacion

Use Perplexity para orientacion conceptual, no para cerrar conclusiones.

### Tiempo requerido

15 a 20 minutos

### Transicion

Con keywords y lenguaje de campo, podemos pasar a literatura cientifica estructurada.

## Paso 2: OpenAlex

### Proposito

Reunir literatura cientifica.

### Por que ahora

Porque necesitamos construir un corpus inicial amplio y trazable.

### URL oficial

[OpenAlex](https://openalex.org)

### Consulta exacta

`"artificial intelligence" productivity "emerging economies"`

### Filtros sugeridos

- Tipo de documento: article, preprint, working paper, review
- Anios: 2018-2026 para estado reciente
- Idioma: ingles como base; agregar variantes si aplica
- Relevancia tematica: productividad, crecimiento, adopcion, firmas

### Orden sugerido

- Relevance para primer barrido
- Cited by count para identificar clasicos recientes
- Publication date para observar frontera del tema

### Que observar

- Titulos que combinen IA con productividad
- Revistas o series de working papers recurrentes
- Concentracion por anos
- Autores repetidos

### Como exportar

- Guardar referencias en CSV, RIS o gestor bibliografico
- Crear una hoja simple con titulo, autor, anio, DOI, tipo y observaciones

### Como identificar papers importantes

- Alta citacion con pertinencia clara
- Revisiones o surveys
- Estudios con datos de firmas o macroeconomia
- Papers citados por instituciones fuertes

### Salida esperada

- Corpus inicial de literatura
- Hoja de evidencia con metadatos basicos
- Primer conjunto de papers ancla

### Errores comunes

- Quedarse con los primeros resultados
- No registrar filtros aplicados
- Mezclar papers irrelevantes por similitud verbal

### Buenas practicas

- Documentar exactamente la consulta y los filtros
- Separar corpus amplio de corpus prioritario
- Etiquetar papers ancla desde el inicio

### Tip de investigacion

OpenAlex es la puerta de entrada al universo cientifico; no es todavia la fase de validacion.

### Tiempo requerido

25 a 40 minutos

### Transicion

Con un corpus inicial, el siguiente paso es identificar autores y trabajos influyentes.

## Paso 3: Semantic Scholar

### Proposito

Identificar investigadores lideres.

### Por que ahora

Porque necesitamos saber quien esta moldeando la conversacion y que trabajos concentran influencia.

### URL oficial

[Semantic Scholar](https://www.semanticscholar.org)

### Consulta exacta

`"artificial intelligence" productivity "emerging economies"`

### Que observar

- Citation counts
- Highly influential papers
- Autores recurrentes
- Research groups y afiliaciones

### Salida esperada

- Lista de autores clave
- Papers influyentes priorizados
- Posibles grupos de investigacion y redes

### Errores comunes

- Igualar citacion con calidad
- Ignorar papers recientes por menor citacion acumulada
- Suponer que influencia equivale a consenso

### Buenas practicas

- Usar citacion como senal, no como veredicto
- Comparar papers muy citados con papers recientes bien alineados
- Registrar autores y lineas de trabajo

### Tip de investigacion

La pregunta no es solo "quien es citado", sino "quien esta estructurando el debate".

### Tiempo requerido

20 a 30 minutos

### Transicion

Ahora que tenemos autores y papers ancla, podemos construir el grafo del conocimiento.

## Paso 4: ResearchRabbit

### Proposito

Construir el knowledge graph.

### Por que ahora

Porque necesitamos ver conexiones que una lista lineal de papers no revela.

### URL oficial

[ResearchRabbit](https://www.researchrabbit.ai)

### Consulta o punto de partida

Comenzar desde 1 a 3 papers ancla validados en OpenAlex o Semantic Scholar.

### Que mostrar

- Como crear una coleccion
- Como empezar desde un paper
- Como expandir la red
- Como leer el grafo

### Que significa el grafo

- Cercania tematica
- Vecindades de citacion
- Autores o clusters conectados

### Que no asumir

- Que todo nodo cercano es relevante
- Que visualmente grande equivale a mejor evidencia
- Que el grafo reemplaza la lectura critica

### Salida esperada

- Coleccion de papers conectados
- Mapa de autores y trabajos vecinos
- Pistas sobre subcampos y escuelas

### Errores comunes

- Expandir sin criterio y perder foco
- Confiar en la visualizacion sin regresar al paper
- Confundir relacion de citacion con apoyo empirico

### Buenas practicas

- Expandir desde papers ancla
- Guardar solo conexiones utiles
- Etiquetar clusters con lenguaje metodologico

### Tip de investigacion

Use el grafo para formular nuevas preguntas de lectura, no para declarar conclusiones.

### Tiempo requerido

20 a 30 minutos

### Transicion

Con el grafo armado, el siguiente paso es ver la evolucion temporal del campo.

## Paso 5: Litmaps

### Proposito

Visualizar la evolucion de la investigacion.

### Por que ahora

Porque necesitamos ver como cambia el campo en el tiempo y donde aparecen publicaciones recientes.

### URL oficial

[Litmaps](https://www.litmaps.com)

### Punto de partida

Usar 1 a 3 papers ancla ya validados.

### Que observar

- Timeline
- Evolucion del tema
- Clusters
- Publicaciones recientes

### Salida esperada

- Mapa temporal del campo
- Lectura de frontier papers
- Identificacion de oleadas o quiebres

### Errores comunes

- Tomar todo lo reciente como importante
- No distinguir entre novedad y calidad
- Quedarse con la visual sin revisar el paper

### Buenas practicas

- Combinar antiguedad, citacion y relevancia
- Marcar trabajos recientes para lectura posterior
- Buscar cambios en conceptos y enfoques

### Tip de investigacion

Los mapas temporales ayudan a ver si el tema esta madurando, explotando o fragmentandose.

### Tiempo requerido

15 a 25 minutos

### Transicion

Con el campo mapeado, ya podemos formular una pregunta de evidencia mas concreta.

## Paso 6: Consensus

### Proposito

Responder una pregunta de evidencia.

### Por que ahora

Porque necesitamos una primera lectura de si la evidencia cientifica apoya o no una afirmacion puntual.

### URL oficial

[Consensus](https://consensus.app)

### Pregunta exacta

`Does scientific evidence support that AI improves productivity?`

### Que observar

- Direccion general del consenso
- Nivel de confianza percibido
- Tipos de evidencia citada
- Limitaciones de cobertura

### Salida esperada

- Primera respuesta basada en evidencia
- Lista de papers para validacion posterior
- Lenguaje mas preciso para la sintesis

### Errores comunes

- Confundir consenso resumido con verdad definitiva
- No revisar las fuentes debajo de la respuesta
- Ignorar condiciones y matices

### Buenas practicas

- Usar Consensus para formular hipotesis mas refinadas
- Contrastar lo que aparece aqui con Scite y lectura directa
- Registrar los caveats

### Tip de investigacion

Una respuesta breve es util si abre una ruta de verificacion, no si la cierra.

### Tiempo requerido

10 a 15 minutos

### Transicion

Si ya tenemos una respuesta preliminar, ahora debemos validar la fuerza y el conflicto de las citas.

## Paso 7: Scite

### Proposito

Validar citas.

### Por que ahora

Porque no basta saber que un paper es citado; necesitamos saber como esta siendo citado.

### URL oficial

[Scite](https://scite.ai)

### Que observar

- Supporting papers
- Contrasting papers
- Disputed papers

### Que explica este paso

La diferencia entre citacion total y calidad de uso de la cita.

### Salida esperada

- Mejor comprension del peso real de un paper
- Lista de fuentes que apoyan o desafian hallazgos
- Base para lectura mas critica

### Errores comunes

- Quedarse solo con el conteo total
- Ignorar citas en contraste
- Suponer que supporting implica prueba definitiva

### Buenas practicas

- Revisar trabajos con patron mixto de apoyo y contraste
- Registrar contradicciones desde ahora
- Priorizar papers utiles para controversias

### Tip de investigacion

Scite ayuda a convertir "papers populares" en "papers evaluados con contexto".

### Tiempo requerido

15 a 20 minutos

### Transicion

Con la validacion contextual de citas, ahora toca leer metodos, tablas y limitaciones con mas precision.

## Paso 8: SciSpace

### Proposito

Leer eficientemente.

### Por que ahora

Porque necesitamos pasar de metadatos y grafos a lectura metodologica comparada.

### URL oficial

[SciSpace](https://typeset.io)

### Que observar

- Methods
- Figures
- Tables
- Limitations
- Diferencias entre papers

### Salida esperada

- Notas comparativas por paper
- Resumen de metodos y datos
- Identificacion de limites y supuestos

### Errores comunes

- Leer solo el abstract
- Copiar explicaciones sin validar contra el PDF
- Ignorar tablas o apendices

### Buenas practicas

- Comparar al menos dos papers por metodo, datos y geografia
- Registrar limites del estudio
- Marcar donde la evidencia es empirica y donde es especulativa

### Tip de investigacion

La lectura eficiente no reemplaza la lectura lenta; la prioriza mejor.

### Tiempo requerido

30 a 45 minutos

### Transicion

Tras leer y comparar, necesitamos consolidar memoria de investigacion reusable.

## Paso 9: NotebookLM

### Proposito

Crear memoria de investigacion.

### Por que ahora

Porque ya tenemos un subconjunto de papers validados y necesitamos organizarlos para trabajar con contexto persistente.

### URL oficial

[NotebookLM](https://notebooklm.google.com)

### Que cargar

- Papers priorizados
- Revisiones sistematicas
- Reportes institucionales
- Notas propias si conviene

### Que generar

- Timeline
- FAQ
- Podcast
- Study guide
- Notebook
- Knowledge base

### Salida esperada

- Base de conocimiento organizada
- Preguntas frecuentes del corpus
- Resumen navegable de hallazgos y tensiones

### Errores comunes

- Subir un corpus demasiado sucio
- Confiar en cualquier resumen sin revisar fuente
- Usar audios o FAQ como sustituto de lectura

### Buenas practicas

- Cargar solo evidencia ya filtrada
- Usar prompts que pidan comparaciones y citas
- Conservar una estructura clara por temas

### Tip de investigacion

NotebookLM es memoria de trabajo, no arbitro epistemologico.

### Tiempo requerido

20 a 30 minutos

### Transicion

Con memoria validada, podemos pasar a la etapa de comunicacion cientifica.

## Paso 10: LLM general

### Proposito

Transformar evidencia validada en comunicacion cientifica.

### Por que ahora

Porque solo al final tiene sentido pedir outline, gaps o borradores.

### URL oficial

Puede usarse un LLM general confiable. La regla metodologica es mas importante que la marca.

### Que generar

- Research outline
- Literature review
- Research gaps
- Future work
- Draft manuscript

### Regla critica

Nunca inventar referencias.

Solo usar evidencia validada.

### Salida esperada

- Outline de investigacion
- Borrador de revision de literatura
- Lista de gaps
- Agenda de futuro trabajo

### Errores comunes

- Pedir texto sin corpus validado
- Dejar que el modelo agregue referencias inexistentes
- Pedir conclusions demasiado fuertes

### Buenas practicas

- Entregar al modelo solo evidencia filtrada
- Pedir citas textuales o identificadores claros
- Verificar cada referencia antes de usarla

### Tip de investigacion

Un LLM es util cuando convierte estructura y evidencia en texto legible sin romper trazabilidad.

### Tiempo requerido

20 a 35 minutos

### Transicion

El trabajo ya no termina en un resumen: termina en un gap de investigacion y futuras lineas cientificas.

## Seccion especial: Errores comunes

- Hallucinations
- Fake references
- Overtrust
- Confirmation bias
- Ignoring contradictory evidence

Consulte [common-mistakes.md](common-mistakes.md).

## Checklist antes de empezar

- Internet estable
- Cuentas abiertas
- Pestanas listas
- Carpeta de PDFs creada
- Libreta o notebook preparado
- Duracion estimada definida

Consulte [live-demo-checklist.md](live-demo-checklist.md).
