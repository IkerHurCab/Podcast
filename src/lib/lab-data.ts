export type ExerciseCategory = "atención" | "memoria" | "creatividad" | "lógica" | "emocional" | "lenguaje"

export interface Exercise {
  id: string
  title: string
  description: string
  duration: string
  difficulty: "principiante" | "intermedio" | "avanzado"
  category: ExerciseCategory
  imageUrl: string
  featured?: boolean
  benefits: string[]
  instructions: string
}

export const exerciseCategories: Record<
  ExerciseCategory,
  {
    name: string
    description: string
    color: string
    icon: string
  }
> = {
  atención: {
    name: "Atención",
    description: "Mejora tu capacidad de concentración y atención sostenida",
    color: "from-red-500 to-orange-500",
    icon: "Eye",
  },
  memoria: {
    name: "Memoria",
    description: "Fortalece tu memoria a corto y largo plazo",
    color: "from-blue-500 to-cyan-500",
    icon: "Brain",
  },
  creatividad: {
    name: "Creatividad",
    description: "Desarrolla tu pensamiento divergente y capacidad creativa",
    color: "from-purple-500 to-pink-500",
    icon: "Lightbulb",
  },
  lógica: {
    name: "Lógica",
    description: "Potencia tu razonamiento lógico y resolución de problemas",
    color: "from-emerald-500 to-teal-500",
    icon: "PuzzlePiece",
  },
  emocional: {
    name: "Inteligencia Emocional",
    description: "Desarrolla tu capacidad para reconocer y gestionar emociones",
    color: "from-amber-500 to-yellow-500",
    icon: "Heart",
  },
  lenguaje: {
    name: "Lenguaje",
    description: "Mejora tus habilidades verbales y de comunicación",
    color: "from-indigo-500 to-violet-500",
    icon: "MessageSquare",
  },
}

export const labExercises: Exercise[] = [
  {
    id: "ex1",
    title: "Matriz de Atención",
    description: "Encuentra patrones específicos en una matriz de símbolos mientras ignoras distracciones.",
    duration: "5-10 min",
    difficulty: "intermedio",
    category: "atención",
    imageUrl: "/exercises/attention-matrix.png",
    featured: true,
    benefits: [
      "Mejora la atención selectiva",
      "Aumenta la velocidad de procesamiento visual",
      "Reduce la susceptibilidad a distracciones",
    ],
    instructions:
      "Se te presentará una matriz de símbolos. Tu objetivo es encontrar y marcar todos los patrones objetivo (por ejemplo, un círculo seguido de un cuadrado) lo más rápido posible mientras ignoras otros símbolos.",
  },
  {
    id: "ex2",
    title: "Palacio de la Memoria",
    description: "Aprende a construir tu propio palacio mental para memorizar listas e información compleja.",
    duration: "15-20 min",
    difficulty: "avanzado",
    category: "memoria",
    imageUrl: "/exercises/memory-palace.png",
    featured: true,
    benefits: [
      "Aumenta la capacidad de memoria a largo plazo",
      "Mejora la visualización espacial",
      "Facilita la memorización de información compleja",
    ],
    instructions:
      'Visualiza un lugar familiar (tu casa, por ejemplo). Asigna cada elemento que quieres recordar a una ubicación específica en ese lugar. Para recordar, simplemente "camina" mentalmente por ese espacio y recupera los elementos.',
  },
  {
    id: "ex3",
    title: "Asociaciones Remotas",
    description: "Encuentra conexiones creativas entre palabras o conceptos aparentemente no relacionados.",
    duration: "10 min",
    difficulty: "intermedio",
    category: "creatividad",
    imageUrl: "/exercises/remote-associations.png",
    benefits: [
      "Estimula el pensamiento divergente",
      "Mejora la flexibilidad cognitiva",
      "Potencia la resolución creativa de problemas",
    ],
    instructions:
      'Se te presentarán tres palabras aparentemente no relacionadas. Tu tarea es encontrar una cuarta palabra que se relacione con las tres. Por ejemplo: para "caer", "actor" y "polvo", la respuesta podría ser "estrella".',
  },
  {
    id: "ex4",
    title: "Acertijos Lógicos",
    description: "Resuelve problemas que requieren pensamiento deductivo y análisis sistemático.",
    duration: "10-15 min",
    difficulty: "avanzado",
    category: "lógica",
    imageUrl: "/exercises/logic-puzzles.png",
    featured: true,
    benefits: [
      "Fortalece el razonamiento deductivo",
      "Mejora la capacidad de análisis",
      "Desarrolla el pensamiento sistemático",
    ],
    instructions:
      "Se te presentará un problema lógico con varias pistas. Utiliza la información proporcionada para deducir la solución correcta, eliminando sistemáticamente las posibilidades que contradigan las pistas.",
  },
  {
    id: "ex5",
    title: "Reconocimiento Emocional",
    description: "Practica la identificación de emociones sutiles en expresiones faciales y situaciones.",
    duration: "5-10 min",
    difficulty: "principiante",
    category: "emocional",
    imageUrl: "/exercises/emotion-recognition.png",
    benefits: [
      "Mejora la empatía",
      "Aumenta la precisión en la lectura de señales sociales",
      "Desarrolla la inteligencia emocional",
    ],
    instructions:
      "Observarás una serie de imágenes de rostros o escenarios. Tu tarea es identificar correctamente la emoción principal expresada, eligiendo entre varias opciones. Presta atención a los detalles sutiles como la posición de las cejas, los ojos y la boca.",
  },
  {
    id: "ex6",
    title: "Fluidez Verbal",
    description: "Genera palabras que cumplan criterios específicos en un tiempo limitado.",
    duration: "3-5 min",
    difficulty: "principiante",
    category: "lenguaje",
    imageUrl: "/exercises/verbal-fluency.png",
    benefits: [
      "Mejora la recuperación léxica",
      "Aumenta la velocidad de procesamiento verbal",
      "Fortalece las conexiones semánticas",
    ],
    instructions:
      "Se te dará una letra o categoría. En un tiempo limitado (generalmente 60 segundos), debes escribir tantas palabras como puedas que comiencen con esa letra o pertenezcan a esa categoría.",
  },
  {
    id: "ex7",
    title: "N-Back Auditivo",
    description: 'Ejercicio de memoria de trabajo donde debes recordar estímulos presentados "n" posiciones atrás.',
    duration: "7-10 min",
    difficulty: "intermedio",
    category: "memoria",
    imageUrl: "/exercises/n-back.png",
    benefits: [
      "Fortalece la memoria de trabajo",
      "Mejora la atención sostenida",
      "Aumenta la capacidad de procesamiento de información",
    ],
    instructions:
      'Escucharás una secuencia de letras o números. Tu tarea es indicar cuándo el estímulo actual coincide con el que escuchaste "n" posiciones atrás. Por ejemplo, en un 2-back, debes responder cuando el número actual es el mismo que escuchaste dos posiciones antes.',
  },
  {
    id: "ex8",
    title: "Meditación Guiada",
    description: "Práctica de atención plena guiada para reducir el estrés y mejorar la concentración.",
    duration: "10-15 min",
    difficulty: "principiante",
    category: "emocional",
    imageUrl: "/exercises/guided-meditation.png",
    benefits: ["Reduce el estrés y la ansiedad", "Mejora la concentración", "Aumenta la conciencia emocional"],
    instructions:
      "Encuentra un lugar tranquilo y cómodo. Sigue las instrucciones de audio que te guiarán a través de una práctica de atención plena, enfocándote en tu respiración y sensaciones corporales. Si tu mente divaga, simplemente nota esto sin juzgar y vuelve suavemente a la práctica.",
  },
]

