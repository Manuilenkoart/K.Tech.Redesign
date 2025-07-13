import {
  Star,
  TrendingUp,
  Award,
  FileText,
  MessageSquare,
  CheckCircle,
  Heart,
  Home,
  Laptop,
  DollarSign,
  BookOpen,
  HeartPulse,
  Smile,
  Phone,
} from "lucide-react";

export const principles = [
  {
    title: "Власна дизайн-система",
    description:
      "Для розробки продуктів використовується власна дизайн-система побудована на принципах Bosonic Design",
    icon: "🎨",
    color: "from-blue-500 to-cyan-500",
    features: [
      "Bosonic Design принципи",
      "Консистентність UI",
      "Швидка розробка",
      "Масштабованість",
    ],
  },
  {
    title: "Інженерні практики",
    description:
      "Команда розробки використовує інженерні практики, такі як CodeReview, Unit Testing, XP Practices",
    icon: "⚙️",
    color: "from-purple-500 to-pink-500",
    features: [
      "Code Review",
      "Unit Testing",
      "XP Practices",
      "Continuous Integration",
    ],
  },
  {
    title: "Agile методологія",
    description:
      "Кросфункціональні команди працюють за Agile, у рамках погоджених продуктових роадмапів",
    icon: "🚀",
    color: "from-green-500 to-emerald-500",
    features: [
      "Scrum/Kanban",
      "Sprint Planning",
      "Product Roadmaps",
      "Cross-functional Teams",
    ],
  },
  {
    title: "Контент-гайд",
    description:
      "У нас є власний контент-гайд, який спрощує роботу та допомагає створювати кращий користувацький досвід",
    icon: "📝",
    color: "from-orange-500 to-red-500",
    features: [
      "UX Writing",
      "Tone of Voice",
      "Content Strategy",
      "User Experience",
    ],
  },
];

export const stats = [
  { value: "88%", label: "Middle та senior фахівців", icon: Star },
  { value: "500+", label: "Працівників", icon: TrendingUp },
  { value: "100%", label: "Agile", icon: Award },
];

export const whyChooseUs = [
  {
    icon: Home,
    title: "Гнучкий формат роботи",
    description:
      "Офіс чи ремоут — вирішувати вам: даємо можливість працювати будь-де, а робоче місце облаштуємо.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Laptop,
    title: "Ремоут онбординг",
    description:
      "Ефективний та комфортний процес адаптації для нових співробітників, незалежно від їхнього місця розташування.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: DollarSign,
    title: "Перформанс бонуси",
    description:
      "Система річних чи квартальних бонусів для всіх працівників, що залежить від ролі та результатів.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: BookOpen,
    title: "Навчання та розвиток",
    description:
      "Безліч внутрішніх ресурсів, програм від партнерів та власна бібліотека для постійного навчання.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: HeartPulse,
    title: "Страхування здоров’я і життя",
    description:
      "Повне медичне страхування та страхування життя для всіх наших працівників.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Smile,
    title: "Wellbeing-програма",
    description:
      "Комплексна програма підтримки добробуту та доступ до корпоративного психолога.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Phone,
    title: "Компенсація мобільного зв'язку",
    description:
      "Повна компенсація витрат на мобільний зв'язок Київстар для всіх співробітників.",
    color: "from-teal-500 to-blue-500",
  },
];

export const hiringSteps = [
  {
    id: "h1",
    step: "01",
    title: "Знайомство",
    description:
      "Надішліть резюме, поділіться своїми очікуваннями, дізнайтеся у рекрутера більше про вакансію.",
    date: "Крок 1",
    icon: FileText,
    color: "from-blue-500 to-cyan-500",
    status: "completed",
  },
  {
    id: "h2",
    step: "02",
    title: "Технічна співбесіда",
    description:
      "На відеозустрічі менеджер розповість про продукт, ваші завдання та команду.",
    date: "Крок 2",
    icon: MessageSquare,
    color: "from-purple-500 to-pink-500",
    status: "completed",
  },
  {
    id: "h3",
    step: "03",
    title: "Тестове завдання",
    description: "Необхідно виконати для деяких посад.",
    date: "Крок 3",
    icon: Heart,
    color: "from-green-500 to-emerald-500",
    status: "in-progress",
  },
  {
    id: "h4",
    step: "04",
    title: "Пропозиція про співпрацю",
    description: "Станьте частиною команди Kyivstar.Tech.",
    date: "Крок 4",
    icon: CheckCircle,
    color: "from-orange-500 to-red-500",
    status: "upcoming",
  },
];

export const products = [
  {
    title: "Мій Київстар",
    description:
      "Персональний помічник для управління послугами та рахунками з інтуїтивним інтерфейсом",
    image: "/placeholder.svg?height=400&width=300",
    category: "Mobile App",
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "Novela",
    description:
      "Платформа для створення та читання інтерактивного контенту з ШІ-підтримкою",
    image: "/placeholder.svg?height=300&width=500",
    category: "Web Platform",
    gradient: "from-green-500/20 to-teal-500/20",
  },
  {
    title: "WebSoft Кабінет",
    description:
      "Корпоративне рішення для управління бізнес-процесами та аналітики",
    image: "/placeholder.svg?height=300&width=500",
    category: "Enterprise",
    gradient: "from-orange-500/20 to-red-500/20",
  },
];

export const NavigationItems = [
  "Продукти",
  "Як працюємо",
  "Кар'єра",
  "Контакти",
];
