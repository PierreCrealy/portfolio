import {AnimateInView} from "@/components/animations/animate-in-view";
import {FloatingElement} from "@/components/animations/floating-element";
import {Badge} from "@/components/ui/badge";
import {motion} from "framer-motion";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import {Star} from "lucide-react";
import {GridBackground} from "@/components/ui/grid-background";

export function Landing()
{
    const techs = ["PHP", "SQL", "JS", "JAVA", "C++", "DART"];

    return (
        <GridBackground className="py-16 md:py-24" gridSize={30} opacity={0.15}>
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <AnimateInView animation="slideRight" delay={0.2}>
                        <div className="space-y-6">
                            <div className="relative">
                                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight">
                                    H<span className="text-pink-500">U</span>B<br />
                                    IN PR<span className="text-blue-500">O</span>GRESS
                                </h1>
                                <FloatingElement duration={4} yOffset={5}>
                                    <Badge className="absolute top-0 right-0 md:right-24 bg-blue-500 hover:bg-blue-600" variant="secondary">
                                        Astronomie
                                    </Badge>
                                </FloatingElement>
                                <FloatingElement duration={3} delay={0.5} yOffset={5}>
                                    <Badge className="absolute bottom-8 left-24 bg-pink-500 hover:bg-pink-600" variant="secondary">
                                        Custom
                                    </Badge>
                                </FloatingElement>
                                <FloatingElement duration={4} delay={1} yOffset={5}>
                                    <Badge className="absolute bottom-0 right-12 bg-green-500 hover:bg-green-600" variant="secondary">
                                        Impression 3D
                                    </Badge>
                                </FloatingElement>
                                <motion.div
                                    className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white px-2 py-1 rounded"
                                    animate={{ rotate: [0, 5, 0, -5, 0] }}
                                    transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                                >
                                    <span className="font-bold">CRAFT</span>
                                </motion.div>
                            </div>
                            <p className="text-lg text-muted-foreground">L'usage de nos outils nous définissent.</p>
                            <div className="flex items-center gap-4">
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Button className="rounded-full">
                                        Contactez-moi
                                    </Button>
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Button variant="outline" className="rounded-full">
                                        En apprendre plus
                                    </Button>
                                </motion.div>
                            </div>
                        </div>
                    </AnimateInView>
                    <AnimateInView animation="fadeIn" delay={0.4}>
                        <div className="relative">
                            <div className="flex items-center gap-2 absolute -top-10 left-0">
                                <div className="w-8 h-8 rounded-full overflow-hidden">
                                    <Image
                                        src="/profil.jpg?height=32&width=32"
                                        alt="Profile"
                                        width={32}
                                        height={32}
                                        className="object-cover"
                                    />
                                </div>
                                <span className="text-sm font-medium">@PierreBournazel</span>
                                <Badge variant="outline" className="text-pink-500 border-pink-500">
                                    <Star className="h-3 w-3 mr-1 fill-pink-500" />
                                    5.0
                                </Badge>
                            </div>
                            <motion.div
                                className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6"
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <p className="text-sm text-muted-foreground mb-4">
                                    "Il suffit de lui donner la forme que l'on désire."
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {techs.map((tech, index) => (
                                        <motion.div
                                            key={tech}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.1 * index }}
                                        >
                                            <Badge variant="secondary" className="bg-gray-200 dark:bg-gray-700">
                                                {tech}
                                            </Badge>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </AnimateInView>
                </div>
            </section>
        </GridBackground>
    );
}