import {AnimateInView} from "@/components/animations/animate-in-view";
import {motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {ExternalLink, Github} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import {GridBackground} from "@/components/ui/grid-background";

export function Projects() {

    const projects = [
        {
            title: "Click'n'Miam",
            description: "Application de commande pour repas étudiants.",
            image: "assets/click_n_miam.svg?height=200&width=350",
            tags: ["React", "Spring Boot", "PostgreSql"],
            github: "#",
            demo: "#",
        },
        {
            title: "Pension la Bizière",
            description: "Application de gestion et d'organisation pour une écurie de propriétaire",
            image: "assets/biziere.png?height=200&width=350",
            tags: ["Laravel", "Filament", "MySql"],
            github: "#",
            demo: "#",
        },
    ];

    return (
        <GridBackground className="py-16 bg-gray-50 dark:bg-gray-900/15" gridSize={30} opacity={0.15}>
            <section className="container mx-auto px-4">
                <AnimateInView animation="slideUp">
                    <div className="flex items-center gap-4 mb-12">
                        <h2 className="text-4xl md:text-5xl font-black">PROJETS</h2>
                        <div className="h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex-grow rounded-full"></div>
                    </div>
                </AnimateInView>

                <div className="grid md:grid-cols-3 gap-6">
                    {projects.map((project, i) => (
                        <AnimateInView key={i} animation="fadeIn" delay={0.1 * i}>
                            <motion.div
                                className="bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden h-full"
                                whileHover={{ y: -5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="relative">
                                    <Image
                                        src={project.image || "/placeholder.svg"}
                                        alt={project.title}
                                        width={350}
                                        height={200}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute top-3 right-3 flex gap-2">
                                        <Link
                                            href={project.github}
                                            className="bg-black/70 hover:bg-black text-white p-2 rounded-full transition-colors"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Github size={16} />
                                            <span className="sr-only">GitHub</span>
                                        </Link>
                                        <Link
                                            href={project.demo}
                                            className="bg-primary/80 hover:bg-primary text-white p-2 rounded-full transition-colors"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <ExternalLink size={16} />
                                            <span className="sr-only">Live Demo</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                                    <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, index) => (
                                            <Badge key={index} variant="secondary" className="bg-gray-200 dark:bg-gray-700">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimateInView>
                    ))}
                </div>
            </section>
        </GridBackground>
    );
}