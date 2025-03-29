import {motion} from "framer-motion";
import {Button} from "@/components/ui/button";

export function Navbar()
{
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-4">
            <div className="max-w-5xl mx-auto my-4 py-3 px-6 flex items-center justify-between bg-background/90 backdrop-blur-md rounded-xl border border-border/40 shadow-sm">
                <div className="flex items-center gap-2">
                    <motion.span className="font-bold text-xl" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        H<span className="text-pink-500">U</span>B
                        IN PR<span className="text-blue-500">O</span>GRESS
                    </motion.span>
                </div>
                <div className="hidden md:flex items-center gap-6">

                </div>
                <div className="flex items-center gap-2">
                    {/*<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>*/}
                    {/*    <Button size="sm">Carte de visite</Button>*/}
                    {/*</motion.div>*/}
                </div>
            </div>
        </nav>
    );
}