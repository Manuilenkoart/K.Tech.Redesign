"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Menu,
  X,
  Star,
  TrendingUp,
  Award,
  FileText,
  MessageSquare,
  CheckCircle,
  UserCheck,
  Languages,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Heart,
  Home,
  Laptop,
  DollarSign,
  BookOpen,
  HeartPulse,
  Smile,
  Phone,
} from "lucide-react"

export default function KyivstarTechRedesign() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.95])
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -50])

  const hiringProcessRef = useRef(null)
  const { scrollYProgress: hiringScrollYProgress } = useScroll({
    target: hiringProcessRef,
    offset: ["start end", "end start"],
  })

  const stats = [
    { value: "88%", label: "Middle та senior фахівців", icon: Star },
    { value: "500+", label: "Працівників", icon: TrendingUp },
    { value: "100%", label: "Agile", icon: Award },
  ]

  const whyChooseUs = [
    {
      icon: Home,
      title: "Гнучкий формат роботи",
      description: "Офіс чи ремоут — вирішувати вам: даємо можливість працювати будь-де, а робоче місце облаштуємо.",
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
      description: "Система річних чи квартальних бонусів для всіх працівників, що залежить від ролі та результатів.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: BookOpen,
      title: "Навчання та розвиток",
      description: "Безліч внутрішніх ресурсів, програм від партнерів та власна бібліотека для постійного навчання.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: HeartPulse,
      title: "Страхування здоров’я і життя",
      description: "Повне медичне страхування та страхування життя для всіх наших працівників.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Smile,
      title: "Wellbeing-програма",
      description: "Комплексна програма підтримки добробуту та доступ до корпоративного психолога.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Phone,
      title: "Компенсація мобільного зв'язку",
      description: "Повна компенсація витрат на мобільний зв'язок Київстар для всіх співробітників.",
      color: "from-teal-500 to-blue-500",
    },
  ]

  const hiringSteps = [
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
      description: "На відеозустрічі менеджер розповість про продукт, ваші завдання та команду.",
      date: "Крок 2",
      icon: MessageSquare,
      color: "from-purple-500 to-pink-500",
      status: "completed",
    },
    {
      id: "h3",
      step: "03",
      title: "Тестове завдання",
      description:
        "Необхідно виконати для деяких посад.",
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
  ]

  const products = [
    {
      title: "Мій Київстар",
      description: "Персональний помічник для управління послугами та рахунками з інтуїтивним інтерфейсом",
      image: "/placeholder.svg?height=400&width=300",
      category: "Mobile App",
      gradient: "from-blue-500/20 to-purple-500/20",
    },
    {
      title: "Novela",
      description: "Платформа для створення та читання інтерактивного контенту з ШІ-підтримкою",
      image: "/placeholder.svg?height=300&width=500",
      category: "Web Platform",
      gradient: "from-green-500/20 to-teal-500/20",
    },
    {
      title: "WebSoft Кабінет",
      description: "Корпоративне рішення для управління бізнес-процесами та аналітики",
      image: "/placeholder.svg?height=300&width=500",
      category: "Enterprise",
      gradient: "from-orange-500/20 to-red-500/20",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Modern Header */}
      <motion.header
        style={{ opacity: headerOpacity }}
        className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200/50"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Kyivstar.Tech
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {["Продукти", "Як працюємо", "Кар'єра", "Контакти"].map((item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-slate-600 hover:text-slate-900 transition-colors duration-300 font-medium"
                >
                  {item}
                </motion.a>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              {/* Mobile Menu Button */}
              <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-b border-slate-200/50 md:hidden"
          >
            <div className="container mx-auto px-6 py-6">
              <nav className="flex flex-col space-y-4">
                {["Продукти", "Як працюємо", "Кар'єра", "Контакти"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-slate-600 hover:text-slate-900 transition-colors duration-300 font-medium py-2"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Yellow Geometric Accent */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col space-y-4"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl shadow-lg"></div>
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl shadow-lg ml-8"></div>
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg shadow-lg ml-4"></div>
          </motion.div>
        </div>

        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - About Company */}
            <motion.div
              style={{ y: heroY }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 pl-24"
            >
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-800">Про компанію</h1>
                <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                  <p>
                    <strong className="text-slate-800">KyivstarTech</strong> — українська ІТ-компанія, яка створює
                    високоякісні технологічні продукти та рішення для бізнесу.
                  </p>
                  <p>
                    Досвід роботи з клієнтською базою у 25 мільйонів абонентів і тисячами компаній дає нам змогу
                    поєднувати експертизу в повному циклі — від UX і продуктового підходу до управління вендорами та
                    розробки власної інфраструктури. Наші рішення допомагають бізнесам масштабуватися, впроваджувати
                    інновації та забезпечувати стабільне зростання.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Main Message */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                    Ми працюємо в
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 bg-clip-text text-transparent">
                    Україні, для України
                  </span>
                </h2>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <p className="text-slate-600 font-medium">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section (Simplified) */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50/50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge
              variant="secondary"
              className="bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-700 border-0 px-4 py-2 text-sm font-medium mb-6"
            >
              🔧 Наш процес
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Як ми працюємо
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Структурований підхід до розробки з використанням сучасних методологій та власних інструментів
            </p>
          </motion.div>

          {/* Main Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                title: "Власна дизайн-система",
                description:
                  "Для розробки продуктів використовується власна дизайн-система побудована на принципах Bosonic Design",
                icon: "🎨",
                color: "from-blue-500 to-cyan-500",
                features: ["Bosonic Design принципи", "Консистентність UI", "Швидка розробка", "Масштабованість"],
              },
              {
                title: "Інженерні практики",
                description:
                  "Команда розробки використовує інженерні практики, такі як CodeReview, Unit Testing, XP Practices",
                icon: "⚙️",
                color: "from-purple-500 to-pink-500",
                features: ["Code Review", "Unit Testing", "XP Practices", "Continuous Integration"],
              },
              {
                title: "Agile методологія",
                description: "Кросфункціональні команди працюють за Agile, у рамках погоджених продуктових роадмапів",
                icon: "🚀",
                color: "from-green-500 to-emerald-500",
                features: ["Scrum/Kanban", "Sprint Planning", "Product Roadmaps", "Cross-functional Teams"],
              },
              {
                title: "Контент-гайд",
                description:
                  "У нас є власний контент-гайд, який спрощує роботу та допомагає створювати кращий користувацький досвід",
                icon: "📝",
                color: "from-orange-500 to-red-500",
                features: ["UX Writing", "Tone of Voice", "Content Strategy", "User Experience"],
              },
            ].map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 h-full bg-white/80 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-8 relative">
                    {/* Background Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${principle.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />

                    {/* Icon */}
                    <div className="text-4xl mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300">
                      {principle.icon}
                    </div>

                    {/* Content */}
                    <div className="space-y-4 relative z-10">
                      <h3 className="text-xl font-bold text-slate-800 group-hover:text-slate-900 transition-colors">
                        {principle.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">{principle.description}</p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {principle.features.map((feature, featureIndex) => (
                          <Badge
                            key={featureIndex}
                            variant="secondary"
                            className={`bg-gradient-to-r ${principle.color} text-white border-0 text-xs opacity-80 group-hover:opacity-100 transition-opacity`}
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Kyivstar.Tech Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge
              variant="secondary"
              className="bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-700 border-0 px-4 py-2 text-sm font-medium mb-6"
            >
              ⭐ Наші переваги
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Чому Kyivstar.Tech
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Ми поєднуємо технологічну досконалість з глибоким розумінням потреб українського ринку
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 h-full bg-white/80 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-8 relative">
                    {/* Background Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />

                    {/* Icon */}
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <div className="space-y-4 relative z-10">
                      <h3 className="text-xl font-bold text-slate-800 group-hover:text-slate-900 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Redesigned Hiring Process Section (Timeline Style) */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 via-white to-purple-50/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge
              variant="secondary"
              className="bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-700 border-0 px-4 py-2 text-sm font-medium mb-6"
            >
              💼 Кар'єра в KyivstarTech
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Від кандидата до працівника — декілька кроків
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Простий та прозорий процес найму, який допоможе вам приєднатися до нашої команди
            </p>
          </motion.div>

          <div ref={hiringProcessRef} className="relative flex flex-col items-center">
            {/* Vertical Line */}
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-slate-200 rounded-full"
              style={{ height: useTransform(hiringScrollYProgress, [0, 1], ["0%", "100%"]) }}
            />

            {hiringSteps.map((step, index) => {
              const isEven = index % 2 === 0
              const itemRef = useRef(null)
              const { scrollYProgress: itemScrollYProgress } = useScroll({
                target: itemRef,
                offset: ["start end", "end start"],
              })
              const yOffset = useTransform(itemScrollYProgress, [0, 1], [isEven ? -50 : 50, isEven ? 50 : -50])

              return (
                <motion.div
                  key={step.id}
                  ref={itemRef}
                  className={`relative w-full flex items-center justify-center mb-16 ${
                    isEven ? "lg:justify-start" : "lg:justify-end"
                  }`}
                  initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                  style={{ y: yOffset }}
                >
                  {/* Circle Indicator */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10 w-8 h-8 rounded-full bg-white border-4 border-yellow-400 flex items-center justify-center">
                    <div
                      className={`w-4 h-4 rounded-full ${step.status === "completed" ? "bg-green-500" : step.status === "in-progress" ? "bg-yellow-500" : "bg-slate-400"}`}
                    />
                  </div>

                  <Card
                    className={`w-full lg:w-1/2 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm overflow-hidden ${
                      isEven ? "lg:pr-16" : "lg:pl-16"
                    }`}
                  >
                    <CardContent className="p-8 relative">
                      {/* Background Number */}
                      <div className="absolute top-4 right-4 text-6xl font-bold text-slate-100 select-none group-hover:text-slate-200 transition-colors">
                        {step.step}
                      </div>

                      {/* Background Gradient */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                      />

                      {/* Icon */}
                      <div
                        className={`w-14 h-14 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-4 relative z-10`}
                      >
                        <step.icon className="w-7 h-7 text-white" />
                      </div>

                      {/* Content */}
                      <div className="space-y-3 relative z-10">
                        <h3 className="text-xl font-bold text-slate-800">{step.title}</h3>
                        <p className="text-sm text-slate-600">{step.date}</p>
                        <p className="text-slate-600 leading-relaxed">{step.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-3xl p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Готові приєднатися до команди?</h3>
              <p className="text-lg text-yellow-100 mb-8 max-w-2xl mx-auto">
                Ми завжди шукаємо талановитих людей, які хочуть створювати майбутнє разом з нами
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-yellow-600 hover:bg-yellow-50 px-8 py-4 text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300 group"
                >
                  <UserCheck className="mr-2 w-5 h-5" />
                  Переглянути вакансії
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Наші продукти
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Інноваційні рішення, що змінюють спосіб взаємодії з технологіями
            </p>
          </motion.div>

          <div className="space-y-12">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-0">
                    <div className={`bg-gradient-to-br ${product.gradient} p-12`}>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                          <Badge variant="secondary" className="bg-white/20 text-slate-700 border-0">
                            {product.category}
                          </Badge>
                          <h3 className="text-3xl font-bold text-slate-800">{product.title}</h3>
                          <p className="text-lg text-slate-600 leading-relaxed">{product.description}</p>
                          <Button
                            variant="outline"
                            className="bg-white/50 border-white/30 text-slate-700 hover:bg-white/70 group"
                          >
                            Дізнатися більше
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                        <div className="relative">
                          <div className="aspect-video bg-white/20 rounded-2xl backdrop-blur-sm border border-white/30 overflow-hidden">
                            <img
                              src={product.image || "/placeholder.svg"}
                              alt={product.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold">Kyivstar.Tech</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
