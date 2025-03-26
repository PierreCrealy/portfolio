import {AnimateInView} from "@/components/animations/animate-in-view";
import {motion} from "framer-motion";
import {Badge} from "@/components/ui/badge";
import Image from "next/image";
import {GridBackground} from "@/components/ui/grid-background";


export function Hobbies() {
    return (
        <GridBackground className="py-16" gridSize={35} opacity={0.1} dotSize={1.5}>
            <section className="container mx-auto px-4">
                <AnimateInView animation="slideUp">
                    <div className="flex items-center gap-4 mb-12">
                        <h2 className="text-4xl md:text-5xl font-black">Hobbies</h2>
                        <div className="h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex-grow rounded-full"></div>
                    </div>
                </AnimateInView>

                <div className="grid md:grid-cols-3 gap-6">
                    <AnimateInView animation="fadeIn" className="relative">
                        <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                            <Badge className="absolute top-5 left-5 bg-indigo-600 ">
                                Astronomie
                            </Badge>
                            <Image
                                src="assets/moon.jpg?height=400&width=600"
                                alt="Office space"
                                width={600}
                                height={400}
                                className="rounded-lg object-cover w-full h-full"
                            />
                        </motion.div>
                    </AnimateInView>
                    <AnimateInView animation="fadeIn" delay={0.3} className="relative">
                        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                            <Badge className="absolute top-5 left-5 bg-indigo-600">
                                Jeux
                            </Badge>
                            <Image
                                src="assets/destiny.jpg?height=200&width=300"
                                alt="Developer"
                                width={300}
                                height={200}
                                className="rounded-lg object-cover w-full h-full"
                            />
                        </motion.div>
                    </AnimateInView>
                    <div className="grid grid-rows-2 gap-6">
                        <AnimateInView animation="fadeIn" delay={0.2} className="relative">
                            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                                <Badge className="absolute top-5 left-5 bg-indigo-600">
                                    Lego
                                </Badge>
                                <Image
                                    src="assets/lego.jpg?height=300&width=300"
                                    alt="Team working"
                                    width={300}
                                    height={300}
                                    className="rounded-lg object-cover w-full h-full"
                                />
                            </motion.div>
                        </AnimateInView>
                        <AnimateInView animation="fadeIn" delay={0.2} className="relative">
                            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                                <Badge className="absolute top-5 left-5 bg-indigo-600">
                                    Impression 3D
                                </Badge>
                                <Image
                                    src="assets/impression_3d.jpg?height=300&width=300"
                                    alt="Team working"
                                    width={300}
                                    height={300}
                                    className="rounded-lg object-cover w-full h-full"
                                />
                            </motion.div>
                        </AnimateInView>
                    </div>
                </div>
            </section>
        </GridBackground>
    );
}