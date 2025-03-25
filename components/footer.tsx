import {motion} from "framer-motion";
import {GridBackground} from "@/components/ui/grid-background";

export function Footer()
{

    return (
        <GridBackground className="py-8 border-t" gridSize={15} opacity={0.05}>
            <footer className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center gap-2 mb-4 md:mb-0">
                        <motion.span className="font-bold text-xl" whileHover={{ scale: 1.05 }}>
                            H<span className="text-pink-500">U</span>B
                            IN PR<span className="text-blue-500">O</span>GRESS
                        </motion.span>
                    </div>
                </div>
            </footer>
        </GridBackground>
    );
}