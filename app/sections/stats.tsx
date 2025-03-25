import {GridBackground} from "@/components/ui/grid-background";
import {AnimateInView} from "@/components/animations/animate-in-view";
import {motion} from "framer-motion";

export function Stats(){

    return (
        <GridBackground className="py-12 bg-gray-50 dark:bg-gray-900/20" gridSize={20} opacity={0.1}>
            <AnimateInView animation="slideUp">
                <section className="container mx-auto px-4">
                    <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
                        <motion.div
                            className="text-center"
                            whileHover={{ y: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <h3 className="text-4xl font-bold">10+</h3>
                            <p className="text-sm text-muted-foreground">Projets réalisés</p>
                        </motion.div>
                        <motion.div
                            className="text-center"
                            whileHover={{ y: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <h3 className="text-4xl font-bold">??+</h3>
                            <p className="text-sm text-muted-foreground">??</p>
                        </motion.div>
                        <motion.div
                            className="text-center"
                            whileHover={{ y: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <h3 className="text-4xl font-bold">100+</h3>
                            <p className="text-sm text-muted-foreground">Litres de thé bu</p>
                        </motion.div>
                    </div>
                </section>
            </AnimateInView>
        </GridBackground>
    );
}