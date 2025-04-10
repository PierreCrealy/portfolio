import {AnimateInView} from "@/components/animations/animate-in-view";
import {motion} from "framer-motion";
import {Card} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {GridBackground} from "@/components/ui/grid-background";

export function Services() {

    const images = [
        {
            url: 'assets/gitlab.svg',
            title: `Gitlab`,
        },
        {
            url: 'assets/jetbrains.svg',
            title: `Jetbrains`,
        },
        {
            url: 'assets/office.svg',
            title: `Office 365`,
        },
        {
            url: 'assets/vagrant.svg',
            title: `Vagrant`,
        },
        {
            url: 'assets/notion.svg',
            title: `Notion`,
        },
        {
            url: 'assets/insomnia.svg',
            title: `Insomnia`,
        },

    ];

    return (
        <GridBackground className="py-16 bg-gray-50 dark:bg-gray-900/10" gridSize={25} opacity={0.12}>
            <section id="services" className="container mx-auto px-4">
                <AnimateInView animation="slideUp">
                    <div className="flex items-center gap-4 mb-12">
                        <h2 className="text-4xl md:text-5xl font-black">COMPÉTENCES</h2>
                        <div className="h-2 bg-gradient-to-r from-pink-500 via-blue-500 to-green-500 flex-grow rounded-full"></div>
                    </div>
                </AnimateInView>

                <div className="grid md:grid-cols-3 gap-6">
                    <AnimateInView animation="fadeIn" delay={0.1}>
                        <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
                            <Card className="p-6 h-full">
                                <h3 className="text-xl font-bold mb-1">01 / FRONTEND</h3>
                            </Card>
                        </motion.div>
                    </AnimateInView>

                    <AnimateInView animation="fadeIn" delay={0.2}>
                        <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
                            <Card className="p-6 h-full">
                                <h3 className="text-xl font-bold mb-1">02 / BACKEND</h3>
                            </Card>
                        </motion.div>
                    </AnimateInView>

                    <AnimateInView animation="fadeIn" delay={0.3}>
                        <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
                            <Card className="p-6 h-full">
                                <h3 className="text-xl font-bold mb-1">03 / BASES DE DONNÉES</h3>
                            </Card>
                        </motion.div>
                    </AnimateInView>
                </div>


                <AnimateInView animation="fadeIn">
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 md:p-10 mt-12">
                        <div className="grid md:grid-cols-1 gap-4">
                            <div className="col-span-3 md:col-span-1">
                                <Badge className="bg-indigo-600 mb-4">Outils</Badge>
                            </div>

                            <div className="col-span-3 grid md:grid-cols-6 grid-cols-3 gap-4">
                                {images.map((image, i) => (
                                    <motion.div
                                        key={i}
                                        className="bg-gray-800 dark:bg-gray-900 rounded-lg aspect-square flex items-center justify-center"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: "spring", stiffness: 200 }}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        style={{ backgroundImage: `url(${image.url})`, backgroundSize: "cover" }}

                                    >
                                        {/*<div className="text-white text-xs">*/}
                                        {/*  <Code className="h-6 w-6 mb-1 mx-auto" />*/}
                                        {/*  {image.title}*/}
                                        {/*</div>*/}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </AnimateInView>

            </section>
        </GridBackground>
    );
}