"use client"

import { Navbar } from "@/components/navbar";
import { Landing } from "./sections/landing";
import { Stats } from "./sections/stats";
import { Hobbies } from "./sections/hobbies";
import { Projects } from "./sections/projects";
import { StudiesAndWork } from "@/app/sections/studies_work";
import { Services } from "./sections/services";
import { Footer } from "@/components/footer";

export default function Home() {



  return (
      <main className="min-h-screen">
          {/* Navbar fixed */}
          <Navbar />

          {/* Home Section */}
          <Landing />

          {/* Stats Section */}
          <Stats />

          {/* Services Section */}
          <Services />

          {/* Studies & Works Section (Replacing Case Study) */}
          <StudiesAndWork />

          {/* Projects Section */}
          <Projects />

          {/* Hobbies */}
          <Hobbies />

          {/* Footer Section */}
          <Footer />

          {/* Call to Action */}
          {/*<GridBackground className="py-16" gridSize={25} opacity={0.12} dotSize={1.5}>*/}
          {/*  <section id="contact" className="container mx-auto px-4">*/}
          {/*    <AnimateInView animation="slideUp">*/}
          {/*      <div className="flex items-center gap-4 mb-12">*/}
          {/*        <h2 className="text-4xl md:text-5xl font-black text-purple-500">LET'S WORK WITH US</h2>*/}
          {/*      </div>*/}
          {/*    </AnimateInView>*/}

          {/*    <div className="grid md:grid-cols-2 gap-8">*/}
          {/*      <AnimateInView animation="fadeIn">*/}
          {/*        <div>*/}
          {/*          <p className="text-lg mb-6">*/}
          {/*            Interested in working with us? We'd love to hear about your project and see how we can help.*/}
          {/*          </p>*/}
          {/*          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>*/}
          {/*            <Button size="lg" className="rounded-full">*/}
          {/*              Get in Touch <ArrowRight className="ml-2 h-4 w-4" />*/}
          {/*            </Button>*/}
          {/*          </motion.div>*/}
          {/*        </div>*/}
          {/*      </AnimateInView>*/}

          {/*      <AnimateInView animation="fadeIn" delay={0.2}>*/}
          {/*        <div className="grid grid-cols-3 gap-4">*/}
          {/*          <div className="text-center">*/}
          {/*            <h5 className="font-bold mb-2">Company</h5>*/}
          {/*            <ul className="space-y-1 text-sm text-muted-foreground">*/}
          {/*              <motion.li whileHover={{ x: 2 }}>About</motion.li>*/}
          {/*              <motion.li whileHover={{ x: 2 }}>Services</motion.li>*/}
          {/*              <motion.li whileHover={{ x: 2 }}>Team</motion.li>*/}
          {/*            </ul>*/}
          {/*          </div>*/}
          {/*          <div className="text-center">*/}
          {/*            <h5 className="font-bold mb-2">Works</h5>*/}
          {/*            <ul className="space-y-1 text-sm text-muted-foreground">*/}
          {/*              <motion.li whileHover={{ x: 2 }}>Projects</motion.li>*/}
          {/*              <motion.li whileHover={{ x: 2 }}>Case Studies</motion.li>*/}
          {/*              <motion.li whileHover={{ x: 2 }}>Clients</motion.li>*/}
          {/*            </ul>*/}
          {/*          </div>*/}
          {/*          <div className="text-center">*/}
          {/*            <h5 className="font-bold mb-2">Contact</h5>*/}
          {/*            <ul className="space-y-1 text-sm text-muted-foreground">*/}
          {/*              <motion.li whileHover={{ x: 2 }}>hello@good.dev</motion.li>*/}
          {/*              <motion.li whileHover={{ x: 2 }}>+1 (555) 123-4567</motion.li>*/}
          {/*              <motion.li whileHover={{ x: 2 }}>New York, USA</motion.li>*/}
          {/*            </ul>*/}
          {/*          </div>*/}
          {/*        </div>*/}
          {/*      </AnimateInView>*/}
          {/*    </div>*/}
          {/*  </section>*/}
          {/*</GridBackground>*/}

      </main>
  )
}

