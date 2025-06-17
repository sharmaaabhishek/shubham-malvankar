"use client"

import { Download, Mail, MapPin, Linkedin, Moon, Sun, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

export default function Portfolio() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 font-sans transition-all duration-300">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/60 shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Shubham Malvankar
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-blue-500 transition-colors">
              About
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:text-blue-500 transition-colors">
              Experience
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-blue-500 transition-colors">
              Skills
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-blue-500 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="w-9 h-9 p-0"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden w-9 h-9 p-0"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-white/95 dark:bg-slate-900/95 backdrop-blur-md">
            <nav className="container py-4 flex flex-col gap-4">
              <Link
                href="#about"
                className="text-sm font-medium hover:text-blue-500 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#experience"
                className="text-sm font-medium hover:text-blue-500 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Experience
              </Link>
              <Link
                href="#skills"
                className="text-sm font-medium hover:text-blue-500 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Skills
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium hover:text-blue-500 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Enhanced Hero Section */}
        <section className="py-12 md:py-20 relative overflow-visible">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-pink-400 to-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
          </div>

          {/* Decorative Floating Icons */}
          <div className="hidden md:block absolute left-10 top-20 z-0">
            <div className="w-16 h-16 bg-gradient-to-tr from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-2xl animate-float">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 7.5v-1.125A2.625 2.625 0 0 0 13.875 3.75h-3.75A2.625 2.625 0 0 0 7.5 6.375V7.5m9 0v9.75A2.625 2.625 0 0 1 13.875 19.875h-3.75A2.625 2.625 0 0 1 7.5 17.25V7.5m9 0H7.5"/></svg>
            </div>
          </div>
          <div className="hidden md:block absolute right-10 bottom-20 z-0">
            <div className="w-12 h-12 bg-gradient-to-tr from-pink-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl animate-float" style={{animationDelay: '1s'}}>
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/></svg>
            </div>
          </div>

          <div className="relative max-w-5xl mx-auto text-center z-10">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-blue-200 dark:border-blue-800 mb-8">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                ✨ Available for new opportunities
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                Human Resources
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Executive
              </span>
            </h1>

            {/* Name */}
            <div className="text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300 mb-6">
              Shubham Malvankar
            </div>

            {/* Tagline */}
            <div className="text-xl md:text-2xl text-blue-700 dark:text-blue-300 font-medium mb-8">
              Empowering People. Elevating Organizations.
            </div>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Specializing in <span className="font-semibold text-blue-600 dark:text-blue-400">talent acquisition</span> and{" "}
              <span className="font-semibold text-purple-600 dark:text-purple-400">strategic HR solutions</span> with{" "}
              <span className="font-semibold text-pink-600 dark:text-pink-400">3+ years</span> of proven experience
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto mb-12">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">3+</div>
                <div className="text-base text-slate-600 dark:text-slate-400 font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2">500+</div>
                <div className="text-base text-slate-600 dark:text-slate-400 font-medium">Candidates Placed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-pink-600 dark:text-pink-400 mb-2">50+</div>
                <div className="text-base text-slate-600 dark:text-slate-400 font-medium">Companies Served</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg py-4 px-8">
                <Download className="mr-2 h-5 w-5" /> Download Resume
              </Button>
              <Button
                variant="outline"
                className="border-2 border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-950 transition-all duration-300 text-lg py-4 px-8"
              >
                Let&apos;s Connect
              </Button>
            </div>
          </div>
        </section>

        {/* Enhanced About Section */}
        <section id="about" className="py-16 scroll-mt-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-slate-900 to-blue-800 dark:from-white dark:to-blue-200 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-lg opacity-30"></div>
                <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
                  <Image
                    src="/placeholder.svg?height=256&width=256"
                    alt="Shubham Malvankar"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-blue-50 dark:from-slate-800 dark:to-slate-700">
                <CardContent className="p-6">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    I am a dedicated Human Resources Executive with a passion for connecting the right talent with the
                    right opportunities. With over 3 years of experience in the HR field, I specialize in full-cycle
                    recruitment, employee engagement, and HR operations.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-purple-50 dark:from-slate-800 dark:to-slate-700">
                <CardContent className="p-6">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    My career mission is to build strong, diverse teams by implementing effective HR strategies that
                    align with organizational goals while fostering a positive workplace culture.
                  </p>
                </CardContent>
              </Card>

              <div className="pt-4">
                <h3 className="font-semibold text-lg mb-4 text-slate-800 dark:text-slate-200">Core Values</h3>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 px-4 py-2">
                    Teamwork
                  </Badge>
                  <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 px-4 py-2">
                    Empathy
                  </Badge>
                  <Badge className="bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700 px-4 py-2">
                    Professionalism
                  </Badge>
                  <Badge className="bg-gradient-to-r from-pink-500 to-pink-600 text-white hover:from-pink-600 hover:to-pink-700 px-4 py-2">
                    Integrity
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Experience Section */}
        <section id="experience" className="py-16 scroll-mt-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-slate-900 to-purple-800 dark:from-white dark:to-purple-200 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-white via-blue-50 to-indigo-50 dark:from-slate-800 dark:via-slate-700 dark:to-indigo-900 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-start flex-wrap gap-4">
                    <div>
                      <h3 className="font-bold text-2xl text-slate-800 dark:text-slate-200">
                        Human Resources Executive
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg">
                        MITS Global Consulting Pvt Ltd
                      </p>
                    </div>
                    <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2">
                      Oct 2022 - Present
                    </Badge>
                  </div>
                  <ul className="list-none pl-0 pt-2 space-y-3 text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Manage full-cycle recruitment process for multiple departments</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Coordinate and conduct interviews with hiring managers and candidates</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Implement employee onboarding programs to ensure smooth transitions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Handle HR operations including documentation and compliance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Develop and maintain relationships with external recruitment agencies</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-white via-green-50 to-emerald-50 dark:from-slate-800 dark:via-slate-700 dark:to-emerald-900 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-600"></div>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-start flex-wrap gap-4">
                    <div>
                      <h3 className="font-bold text-2xl text-slate-800 dark:text-slate-200">Recruitment Specialist</h3>
                      <p className="text-green-600 dark:text-green-400 font-semibold text-lg">
                        HRCT Management Services
                      </p>
                    </div>
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2">
                      Aug 2021 - Oct 2022
                    </Badge>
                  </div>
                  <ul className="list-none pl-0 pt-2 space-y-3 text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Sourced and screened candidates for various positions across industries</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Conducted preliminary interviews and assessments</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Maintained candidate database and tracking systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Assisted in organizing recruitment events and job fairs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Provided regular updates to clients on recruitment progress</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Enhanced Skills Section */}
        <section id="skills" className="py-16 scroll-mt-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-slate-900 to-pink-800 dark:from-white dark:to-pink-200 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <SkillCard title="Recruitment" icon="👥" gradient="from-blue-500 to-blue-600" />
            <SkillCard title="Talent Acquisition" icon="🎯" gradient="from-purple-500 to-purple-600" />
            <SkillCard title="Interview Coordination" icon="🗓️" gradient="from-green-500 to-green-600" />
            <SkillCard title="HR Operations" icon="⚙️" gradient="from-orange-500 to-orange-600" />
            <SkillCard title="Onboarding" icon="🚀" gradient="from-pink-500 to-pink-600" />
            <SkillCard title="Candidate Screening" icon="📋" gradient="from-indigo-500 to-indigo-600" />
          </div>
        </section>

        {/* Enhanced Contact Section */}
        <section id="contact" className="py-16 scroll-mt-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-slate-900 to-green-800 dark:from-white dark:to-green-200 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-blue-50 dark:from-slate-800 dark:to-slate-700">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" className="border-2 focus:border-blue-500" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        className="border-2 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Subject
                    </label>
                    <Input id="subject" placeholder="Subject" className="border-2 focus:border-blue-500" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      className="min-h-[120px] border-2 focus:border-blue-500"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-purple-50 dark:from-slate-800 dark:to-slate-700">
                <CardContent className="p-8">
                  <h3 className="font-semibold text-xl mb-6 text-slate-800 dark:text-slate-200">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-slate-700 dark:text-slate-300">shubham.malvankar@example.com</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <Linkedin className="h-5 w-5 text-white" />
                      </div>
                      <a href="#" className="hover:underline text-slate-700 dark:text-slate-300">
                        linkedin.com/in/shubham-malvankar
                      </a>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-slate-700 dark:text-slate-300">Mumbai, Maharashtra, India</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-green-50 dark:from-slate-800 dark:to-slate-700">
                <CardContent className="p-8">
                  <h3 className="font-semibold text-xl mb-4 text-slate-800 dark:text-slate-200">Looking to hire?</h3>
                  <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                    I'm always open to discussing new opportunities and challenges in the HR field.
                  </p>
                  <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                    Schedule a Call
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer className="border-t bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <div className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Shubham Malvankar
            </div>
            <p className="text-slate-600 dark:text-slate-400">Human Resources Executive</p>
          </div>
          <div className="flex justify-center gap-6 mb-6">
            <Button variant="ghost" size="sm" className="hover:bg-blue-100 dark:hover:bg-blue-900">
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="hover:bg-blue-100 dark:hover:bg-blue-900">
              <Mail className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-slate-600 dark:text-slate-400">
            © {new Date().getFullYear()} Shubham Malvankar. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

function SkillCard({ title, icon, gradient }: { title: string; icon: string; gradient: string }) {
  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white dark:bg-slate-800 overflow-hidden group">
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${gradient}`}></div>
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{icon}</div>
        <h3 className="font-semibold text-slate-800 dark:text-slate-200">{title}</h3>
      </CardContent>
    </Card>
  )
}
