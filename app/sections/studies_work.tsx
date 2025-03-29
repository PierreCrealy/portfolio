import {GridBackground} from "@/components/ui/grid-background";
import {AnimateInView} from "@/components/animations/animate-in-view";
import {ArrowRight, Briefcase, Calendar, GraduationCap} from "lucide-react";
import {motion} from "framer-motion";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";

export function StudiesAndWork() {

    const experiences = [
        {
            type: "education",
            title: "Titre Concepteur Développeur d'Applications",
            institution: "Lycée & Campus Notre Dame du Roc",
            period: "2024 - 2025",
            description: "",
            icon: <GraduationCap className="h-5 w-5" />,
        },
        {
            type: "education",
            title: "BTS Services Informatiques aux Organisations",
            institution: "Lycée & Campus Notre Dame du Roc",
            period: "2022 - 2024",
            description: "Option - Solutions Logicielles et Applications Métier",
            icon: <GraduationCap className="h-5 w-5" />,
        },
        {
            type: "education",
            title: "BTS Système Numérique",
            institution: "Lycée Jean de Lattre de Tassigny",
            period: "2020 - 2022",
            description: "Option - Électronique & Communication",
            icon: <GraduationCap className="h-5 w-5" />,
        },
        {
            type: "work",
            title: "Alternance Développeur Web",
            institution: "Kaféin Studio",
            period: "2024 - Aujourd'hui",
            description: "",
            icon: <Briefcase className="h-5 w-5" />,
        },
        {
            type: "work",
            title: "Stage Développeur Web",
            institution: "Kaféin Studio",
            period: "Jan. 2024 - Fev. 2024",
            description: "Mise en place d'évolutions sur diverses applications web.",
            icon: <Briefcase className="h-5 w-5" />,
        },
        {
            type: "work",
            title: "Stage Développeur Web",
            institution: "Pension la Bizière",
            period: "Mai 2023 - Juin 2023",
            description: "Développement d’une application web de gestion et d’organisation pour une écurie de propriétaires.",
            icon: <Briefcase className="h-5 w-5" />,
        },
    ]

    return (
        <GridBackground className="py-16" gridSize={45} opacity={0.08} dotSize={2}>
            <section className="container mx-auto px-4">
                <AnimateInView animation="slideUp">
                    <div className="flex items-center gap-4 mb-12">
                        <h2 className="text-4xl md:text-5xl font-black">Études & Expériences</h2>
                        <div className="h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex-grow rounded-full"></div>
                    </div>
                </AnimateInView>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Education Column */}
                    <AnimateInView animation="fadeIn" delay={0.1}>
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
                                    <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                                </div>
                                <h3 className="text-2xl font-bold">Diplômes</h3>
                            </div>

                            <div className="space-y-4">
                                {experiences
                                    .filter((exp) => exp.type === "education")
                                    .map((education, index) => (
                                        <motion.div
                                            key={index}
                                            className="bg-gray-100 dark:bg-gray-800 rounded-xl p-5 border-l-4 border-blue-500"
                                            whileHover={{ y: -5, x: -5 }}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                        >
                                            <Badge variant="outline" className="items-center gap-1 mb-2 md:hidden">
                                                <Calendar className="h-3 w-3" />
                                                <div className="ml-1">{education.period}</div>
                                            </Badge>
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className="font-bold text-lg">{education.title}</h4>
                                                <Badge variant="outline" className="items-center gap-1 hidden md:flex">
                                                    <Calendar className="h-3 w-3" />
                                                    {education.period}
                                                </Badge>
                                            </div>
                                            <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">
                                                {education.institution}
                                            </p>
                                            <p className="text-sm text-muted-foreground">{education.description}</p>
                                        </motion.div>
                                    ))}
                            </div>
                        </div>
                    </AnimateInView>

                    {/* Work Experience Column */}
                    <AnimateInView animation="fadeIn" delay={0.3}>
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="bg-pink-100 dark:bg-pink-900 p-2 rounded-full">
                                    <Briefcase className="h-6 w-6 text-pink-600 dark:text-pink-300" />
                                </div>
                                <h3 className="text-2xl font-bold">Expériences professionnelles</h3>
                            </div>

                            <div className="space-y-4">
                                {experiences
                                    .filter((exp) => exp.type === "work")
                                    .map((work, index) => (
                                        <motion.div
                                            key={index}
                                            className="bg-gray-100 dark:bg-gray-800 rounded-xl p-5 border-l-4 border-pink-500"
                                            whileHover={{ y: -5, x: 5 }}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                        >
                                            <Badge variant="outline" className="items-center gap-1 mb-2 md:hidden">
                                                <Calendar className="h-3 w-3" />
                                                <div className="ml-1">{work.period}</div>
                                            </Badge>
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className="font-bold text-lg">{work.title}</h4>
                                                <Badge variant="outline" className="items-center gap-1 hidden md:flex">
                                                    <Calendar className="h-3 w-3" />
                                                    {work.period}
                                                </Badge>
                                            </div>
                                            <p className="text-sm font-medium text-pink-600 dark:text-pink-400 mb-2">{work.institution}</p>
                                            <p className="text-sm text-muted-foreground">{work.description}</p>
                                        </motion.div>
                                    ))}
                            </div>
                        </div>
                    </AnimateInView>
                </div>

            </section>
        </GridBackground>
    );
}